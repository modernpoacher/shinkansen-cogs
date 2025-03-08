#!/bin/bash

DEBUG="${DEBUG:-shinkansen-cogs*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
