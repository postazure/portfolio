#!/usr/bin/env bash

npm run build
echo postazure.com > build/CNAME
npm run publish