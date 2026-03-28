import sys

with open('src/app/globals.css', 'r') as f:
    c = f.read()

# Replace hardcoded backgrounds
c = c.replace('rgba(248, 250, 252, 1)', 'rgba(244, 244, 245, 1)')
c = c.replace('rgba(10, 18, 32, 1)', 'rgba(9, 9, 11, 1)')
c = c.replace('rgba(15, 23, 42, 1)', 'rgba(24, 24, 27, 1)')
c = c.replace('rgba(10, 18, 32, 0.82)', 'rgba(9, 9, 11, 0.82)')

root_old = """    --background: 255 255 255;
    --foreground: 15 23 42;

    --card: 255 255 255;
    --card-foreground: 15 23 42;

    --popover: 255 255 255;
    --popover-foreground: 15 23 42;

    --primary: 14 90 167;
    --primary-foreground: 255 255 255;

    --secondary: 241 245 249;
    --secondary-foreground: 15 23 42;

    --muted: 241 245 249;
    --muted-foreground: 71 85 105;

    --accent: 25 169 116;
    --accent-foreground: 255 255 255;

    --destructive: 220 38 38;
    --destructive-foreground: 255 255 255;

    --border: 226 232 240;
    --input: 226 232 240;
    --ring: 14 90 167;

    --radius: 1rem;

    /* Brand helpers */
    --brand: 14 90 167;
    --brand-dark: 11 76 141;
    --brand-darker: 10 37 64;
    --hero: 11 76 141;
    --hero-soft: 238 245 252;
    --surface: 248 250 252;
    --surface-muted: 241 245 249;
    --footer: 10 37 64;
    --footer-foreground: 229 238 248;
    --footer-muted: 159 179 200;
    --footer-border: 22 59 97;"""

root_new = """    --background: 255 255 255;
    --foreground: 9 9 11;

    --card: 255 255 255;
    --card-foreground: 9 9 11;

    --popover: 255 255 255;
    --popover-foreground: 9 9 11;

    --primary: 249 115 22;
    --primary-foreground: 255 255 255;

    --secondary: 244 244 245;
    --secondary-foreground: 9 9 11;

    --muted: 244 244 245;
    --muted-foreground: 113 113 122;

    --accent: 234 88 12;
    --accent-foreground: 255 255 255;

    --destructive: 239 68 68;
    --destructive-foreground: 255 255 255;

    --border: 228 228 231;
    --input: 228 228 231;
    --ring: 249 115 22;

    --radius: 1rem;

    /* Brand helpers */
    --brand: 249 115 22;
    --brand-dark: 234 88 12;
    --brand-darker: 194 65 12;
    --hero: 9 9 11;
    --hero-soft: 212 212 216;
    --surface: 255 255 255;
    --surface-muted: 244 244 245;
    --footer: 9 9 11;
    --footer-foreground: 250 250 250;
    --footer-muted: 161 161 170;
    --footer-border: 63 63 70;"""

dark_old = """    --background: 10 18 32;
    --foreground: 241 245 249;

    --card: 15 23 42;
    --card-foreground: 241 245 249;

    --popover: 15 23 42;
    --popover-foreground: 241 245 249;

    --primary: 96 162 239;
    --primary-foreground: 255 255 255;

    --secondary: 30 41 59;
    --secondary-foreground: 241 245 249;

    --muted: 30 41 59;
    --muted-foreground: 148 163 184;

    --accent: 58 202 145;
    --accent-foreground: 255 255 255;

    --destructive: 239 68 68;
    --destructive-foreground: 255 255 255;

    --border: 30 41 59;
    --input: 30 41 59;
    --ring: 96 162 239;

    --brand: 96 162 239;
    --brand-dark: 14 90 167;
    --brand-darker: 11 76 141;
    --hero: 11 76 141;
    --hero-soft: 15 23 42;
    --surface: 15 23 42;
    --surface-muted: 30 41 59;
    --footer: 5 31 58;
    --footer-foreground: 229 238 248;
    --footer-muted: 159 179 200;
    --footer-border: 22 59 97;"""

dark_new = """    --background: 9 9 11;
    --foreground: 250 250 250;

    --card: 9 9 11;
    --card-foreground: 250 250 250;

    --popover: 9 9 11;
    --popover-foreground: 250 250 250;

    --primary: 249 115 22;
    --primary-foreground: 255 255 255;

    --secondary: 39 39 42;
    --secondary-foreground: 250 250 250;

    --muted: 39 39 42;
    --muted-foreground: 161 161 170;

    --accent: 234 88 12;
    --accent-foreground: 255 255 255;

    --destructive: 127 29 29;
    --destructive-foreground: 255 255 255;

    --border: 39 39 42;
    --input: 39 39 42;
    --ring: 249 115 22;

    --brand: 249 115 22;
    --brand-dark: 234 88 12;
    --brand-darker: 194 65 12;
    --hero: 9 9 11;
    --hero-soft: 212 212 216;
    --surface: 9 9 11;
    --surface-muted: 39 39 42;
    --footer: 9 9 11;
    --footer-foreground: 250 250 250;
    --footer-muted: 161 161 170;
    --footer-border: 39 39 42;"""

c = c.replace(root_old, root_new)
c = c.replace(dark_old, dark_new)

with open('src/app/globals.css', 'w') as f:
    f.write(c)
