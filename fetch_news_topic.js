const Parser = require("rss-parser");
const fs = require("fs");

const parser = new Parser();
const date = new Date().toISOString().slice(0, 10);

const url =
  "https://news.google.com/rss/search?q=AI+decision&hl=en-US&gl=US&ceid=US:en";

async function run() {
  const feed = await parser.parseURL(url);
  const item = feed.items[0];

  if (!item) {
    console.log("No news found");
    return;
  }

  const title = item.title;
  const link = item.link;

  const topic = `Date: ${date}

Layer 1 — Context:
Recent news trigger: ${title}

Layer 2 — Domain:
AI decision-making systems

Layer 3 — Decision tension:
Act immediately vs wait for clearer confirmation

Decision question:
Should decision-makers respond immediately to this development, or wait for stronger evidence?

Source:
${link}
`;

  fs.mkdirSync("posts", { recursive: true });
  fs.writeFileSync(`posts/${date}_tacagent_topic.md`, topic);

  console.log("Topic created");
}

run();
