#!/bin/bash

git config --global user.email mayumiii.seki@gmail.com
git config --global user.name rnaxu
git checkout -b gh-pages origin/gh-pages

if [ -z "$(git status --porcelain)" ]; then
  echo -e "\n*** There is no difference to be committed ***\n\n"
else
  git add -A
  git commit -m "[ci skip] build on circle ci"
  git push origin gh-pages
fi