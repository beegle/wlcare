/**
 * West Linn Care - Contact Page JavaScript
 * Form-specific behavior loaded only on /contact.
 */

(function () {
  'use strict';

  var tourDateInput = document.getElementById('tour-date');

  if (tourDateInput) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var year = tomorrow.getFullYear();
    var month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    var day = String(tomorrow.getDate()).padStart(2, '0');

    tourDateInput.setAttribute('min', year + '-' + month + '-' + day);
  }

  var tourForm = document.getElementById('tour-form');
  var formSuccess = document.getElementById('form-success');

  if (tourForm && formSuccess) {
    tourForm.addEventListener('submit', function (e) {
      var inputs = tourForm.querySelectorAll('input, textarea');
      inputs.forEach(function (input) {
        input.classList.remove('error');
      });

      if (!tourForm.checkValidity()) {
        e.preventDefault();

        inputs.forEach(function (input) {
          if (!input.validity.valid) {
            input.classList.add('error');
          }
        });

        var firstInvalid = tourForm.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }

        return;
      }

      var formAction = tourForm.getAttribute('action');
      if (formAction && formAction.includes('[YOUR_FORM_ID]')) {
        e.preventDefault();
        showFormSuccess();
        return;
      }

      e.preventDefault();

      var formData = new FormData(tourForm);

      fetch(tourForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })
        .then(function (response) {
          if (response.ok) {
            showFormSuccess();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          alert('There was a problem submitting the form. Please try calling us directly.');
        });
    });

    function showFormSuccess() {
      tourForm.style.display = 'none';
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
})();
