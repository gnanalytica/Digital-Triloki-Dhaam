#!/bin/sh
# Renders brochure.html to brochure.pdf (A4, two pages) with headless Chrome.
cd "$(dirname "$0")" || exit 1
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=8000 --print-to-pdf=brochure.pdf "file://$PWD/brochure.html" 2>/dev/null
ls -l brochure.pdf
