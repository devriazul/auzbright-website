#!/usr/bin/env python3
"""Copy the shared page parts from index.html into the other pages.

The site has no build step, so the utility bar + navigation, the footer and the
floating contact buttons are written out in every page. index.html is the source
of truth: after changing any of those parts there, run

    python3 scripts/sync-pages.py

Each page marks the copied blocks with <!-- shared:NAME --> ... <!-- /shared:NAME -->
comments. Everything outside the markers is page-specific and is left alone.
Links are rewritten for the page's folder depth (assets/ -> ../assets/,
#anchor -> ../#anchor for homepage sections), and the page's own nav link gets
aria-current="page".
"""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent

# page path -> the relative nav link that points at it from the homepage
PAGES = {
    'contact/index.html': 'contact/',
    'about/index.html': 'about/',
}

BLOCKS = {
    # name: (start marker in index.html, end marker, include end marker?)
    'top': ('<!-- 01 UTILITY BAR -->', '</header>', True),
    'footer': ('<footer', '</footer>', True),
    'fab': ('<!-- FLOATING CONTACT BUTTONS', '<script src="assets/js/main.js"', False),
}


def extract(src, start, end, include_end):
    a = src.index(start)
    b = src.index(end, a)
    if include_end:
        b += len(end)
    return src[a:b].rstrip('\n')


def adapt(block, page, self_link):
    depth = page.count('/')
    up = '../' * depth
    block = block.replace('src="assets/', f'src="{up}assets/')
    block = block.replace('href="assets/', f'href="{up}assets/')
    block = re.sub(r'href="#(?!main")', f'href="{up}#', block)       # homepage sections
    block = block.replace('href="./"', f'href="{up}"')                # home (logo)
    block = block.replace(f'href="{self_link}"', 'href="./" aria-current="page"')
    block = re.sub(r'href="([a-z][a-z0-9-]*/)"', lambda m: f'href="{up}{m.group(1)}"', block)  # other relative pages
    return block


def main():
    src = (ROOT / 'index.html').read_text(encoding='utf-8')
    blocks = {name: extract(src, *spec) for name, spec in BLOCKS.items()}
    changed = 0
    for page, self_link in PAGES.items():
        path = ROOT / page
        html = path.read_text(encoding='utf-8')
        for name, block in blocks.items():
            start, end = f'<!-- shared:{name} -->', f'<!-- /shared:{name} -->'
            pat = re.compile(re.escape(start) + r'.*?' + re.escape(end), re.S)
            if not pat.search(html):
                sys.exit(f'{page}: missing {start} ... {end} markers')
            filled = f'{start}\n{adapt(block, page, self_link)}\n{end}'
            html = pat.sub(lambda m: filled, html)
        if html != path.read_text(encoding='utf-8'):
            path.write_text(html, encoding='utf-8')
            changed += 1
            print(f'updated {page}')
        else:
            print(f'{page} already in sync')
    return changed


if __name__ == '__main__':
    main()
