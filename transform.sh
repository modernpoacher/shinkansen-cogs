#!/bin/bash

node -e 'import("./build/transform.mjs").then(({ default: transform }) => transform())'
