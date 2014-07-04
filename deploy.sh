#!/bin/sh

git pull --rebase origin relaunch
rm -rf _site/*
jekyll build
git add --all
git commit -m "Update build - `date -u`"
git subtree push --prefix _site 5apps master
git push origin relaunch
