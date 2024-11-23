#!/bin/bash

DEBUG="${DEBUG:-@modernpoacher/cogs*}"
node -e 'import("./build/transform.mjs").then(({ default: transform }) => transform())'
