#!/bin/bash

DATE=$(date +%F)
EMAIL="sean4128@gmail.com"

cd ~/.openclaw/workspace/tacagent-daily

node fetch_news_topic.js

DECISION=$(grep "^Decision question:" posts/${DATE}_tacagent_topic.md | sed 's/^Decision question: //')

echo "DECISION = $DECISION"

curl -s -X POST https://tacagent.ai/api/analyze \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"$EMAIL\",
    \"input\": \"$DECISION\"
  }" \
  > posts/${DATE}_tacagent_result.json

git add .
git commit -m "daily tacagent news run $DATE"
git push origin master
