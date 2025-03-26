#!/bin/bash

DEBUG="${DEBUG:-@modernpoacher/cogs*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
