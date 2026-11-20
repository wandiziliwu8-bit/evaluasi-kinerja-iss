import os
import shutil
import base64

# Base directory is current script directory (fully portable)
base_dir = os.path.dirname(os.path.abspath(__file__))
app_dir = os.path.join(base_dir, "app")

with open(os.path.join(app_dir, "index.html"), "r", encoding="utf-8") as f:
    html_content = f.read()

with open(os.path.join(app_dir, "style.css"), "r", encoding="utf-8") as f:
    css_content = f.read()

with open(os.path.join(app_dir, "app.js"), "r", encoding="utf-8") as f:
    js_content = f.read()

# Load logo and convert to base64 data URI
logo_path = os.path.join(app_dir, "logo_iss.jpg")
with open(logo_path, "rb") as f:
    logo_b64 = "data:image/jpeg;base64," + base64.b64encode(f.read()).decode("utf-8")

# Replace stylesheet link with inline <style>
combined = html_content.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>\n{css_content}\n</style>'
)

# Replace script tag with inline <script>
combined = combined.replace(
    '<script src="app.js"></script>',
    f'<script>\n{js_content}\n</script>'
)

# Replace logo img src with base64 data URI for standalone portability
combined = combined.replace('src="logo_iss.jpg"', f'src="{logo_b64}"')

# Write standalone HTML
standalone_file = os.path.join(base_dir, "aplikasi_penilaian_kinerja_pt_iss.html")
with open(standalone_file, "w", encoding="utf-8") as f:
    f.write(combined)
print(f"Generated standalone HTML at: {standalone_file}")

# Sync to root index.html
root_index = os.path.join(base_dir, "index.html")
shutil.copy2(standalone_file, root_index)
print(f"Synced to root index.html: {root_index}")
