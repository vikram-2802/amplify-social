#!/usr/bin/env bash
set -e
brands=("Honda" "Airtel" "Hindustan Unilever" "Re’equil" "Mokobara" "Aqualogica" "The Whole Truth" "Airalo" "Supertrails" "Nestasia" "NEWME" "Highlander Clothing")
for brand in "${brands[@]}"; do
  query=$(python3 - <<'PY'
import urllib.parse
print(urllib.parse.quote_plus('"' + ' '.join([word for word in "'".join([item for item in []]) ]) + '"'))
PY
)
echo "$brand"
done
