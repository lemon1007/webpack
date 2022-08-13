yarn build &&
git checkout gh-pages &&
# shellcheck disable=SC2035
rm -rf *.hml *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -
