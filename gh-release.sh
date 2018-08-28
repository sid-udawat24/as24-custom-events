#!/usr/bin/env bash
# Create a github release manually
# We don't use TravisCI built-in releases provider because `body` payload breaks formatting 
PREV_TAG=$(git describe --abbrev=0 --tags `git rev-list --tags --skip=1 --max-count=1`)
CHANGELOG=`yarn run changelog --from=$PREV_TAG`
yarn run github-release upload \
          --owner=Scout24 \
          --repo=as24-custom-events \
          --token="$GITHUB_AUTH" \
          --tag="$TRAVIS_TAG" \
          --name="$TRAVIS_TAG" \
          --body="${CHANGELOG}" \
          "./dist/index*";