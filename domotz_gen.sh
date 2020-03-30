#!/usr/bin/env bash

docker run -w /local -v ${PWD}:/local -it registry.domotz.com/domotz/domotz_slate:1.0.2 \
             bash -c 'export NODE_PATH="$(npm config get prefix)/lib/node_modules" && node domotz_gen.js && bundle exec middleman build'
