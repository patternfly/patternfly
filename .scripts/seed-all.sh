#!/usr/bin/env bash

rm -rf src/{components,layouts,patterns}

.scripts/seed-components.sh
.scripts/seed-bs-components.sh
.scripts/seed-layouts.sh
.scripts/seed-patterns.sh
