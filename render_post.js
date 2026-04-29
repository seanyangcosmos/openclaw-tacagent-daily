const fs = require("fs");

const date = new Date().toISOString().slice(0, 10);
const raw = fs.readFileSync(`posts/${date}_tacagent_result.json`);
const data = JSON.parse(raw);

// ✅ 防呆抓值（關鍵）
const score =
  data.readiness_score ||
  data.readiness?.score ||
  "N/A";

const missing =
  data.missing_layer ||
  data.missing_layer?.name ||
  "None";

const question =
  data.next_question ||
  data.next_question?.text ||
  "No follow-up question";

// 👉 產出
const post = `Decision check (TAC):

Readiness Score: ${score}%

Missing layer: ${missing}

Next question:
${question}

Tested via tacagent.ai
`;

fs.writeFileSync(`posts/${date}_tacagent_post.md`, post);

console.log(post);
