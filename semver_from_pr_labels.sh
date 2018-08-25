#!/usr/bin/env bash
#
# Given a commit, it finds the originating PR and determines semver bump based on labels
#
# Usage:
# ./semver_from_pr_labels.sh <SHA>
#
# Labels to semver bump:
#  - release:bugfix -> patch
#  - release:enhacement -> minor
#  - release:breaking -> breaking
#
# References: 
# - https://stackoverflow.com/questions/31887253/value-map-with-jq

set -e

# command will throw if there are no labels associated to the PR because of the unsafe items[0] selector
curl -s https://api.github.com/search/issues?q=${1}+type:pr+is:merged+repo:Scout24/as24-custom-events \
  | jq -r '.items[0] .labels[] | select(.name | contains("release:enhancement")) | .name = (if .name =="release:breaking" then "major" elif .name == "release:enhancement" then "minor" else "patch" end) | .name'
  