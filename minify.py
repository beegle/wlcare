import re
import os

def minify_css(content):
    # Remove comments
    content = re.sub(r'/\*[\s\S]*?\*/', '', content)
    # Remove whitespace
    content = re.sub(r'\s+', ' ', content)
    content = re.sub(r'\s*([\{\};:,])\s*', r'\1', content)
    content = content.replace(';}', '}')
    return content.strip()

def minify_js(content):
    # Basic JS minification (remove comments and extra whitespace)
    # Remove single line comments
    content = re.sub(r'//.*', '', content)
    # Remove multi-line comments
    content = re.sub(r'/\*[\s\S]*?\*/', '', content)
    # Remove empty lines
    content = os.linesep.join([s for s in content.splitlines() if s.strip()])
    return content

def process_file(filepath, minifier):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        minified = minifier(content)
        
        filename, ext = os.path.splitext(filepath)
        new_filepath = f"{filename}.min{ext}"
        
        with open(new_filepath, 'w') as f:
            f.write(minified)
            
        print(f"Minified {filepath} -> {new_filepath}")
        original_size = os.path.getsize(filepath)
        new_size = os.path.getsize(new_filepath)
        print(f"Size: {original_size} -> {new_size} bytes (Saved {original_size - new_size} bytes)")
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    process_file("styles.css", minify_css)
    process_file("script.js", minify_js)
