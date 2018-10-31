#!/usr/bin/env bash

curl https://api-eu-west-1-cell-1.domotz.com/public-api/v1/meta/open-api-definition > domotz_open_api.json

docker run -w /local -v ${PWD}:/local -it registry.domotz.com/domotz/domotz_slate:1.0.0 bash -c "widdershins -u domotz_templates domotz_open_api.json -o source/index.html.md && bundle exec middleman build"
