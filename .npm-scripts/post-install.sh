#!/usr/bin/env bash

pwd
cd ./.pf-workspace
npm install
npm link

cd ../.pf-cli
npm install
npm link

cd ../
npm link pf-workspace
npm link pf-cli
