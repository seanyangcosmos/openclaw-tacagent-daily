#!/bin/bash

DATE=$(date +%F)

DECISION="Should I enroll in a job-related certification course even if time is limited?"

RESPONSE=$(curl -s -X POST https://tacagent.ai/api/analyze \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"sean4128@gmail.com\",
    \"input\": \"$DECISION\"
  }")

mkdir -p posts

echo "# TAC Agent Result ($DATE)

Decision:
$DECISION

Response:
$RESPONSE
" > posts/${DATE}_tacagent_result.md
