#!/bin/bash
cd /home/kavia/workspace/code-generation/mindease-16329-ef5daf0a/mindseek
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

