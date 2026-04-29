import Parser from "rss-parser";
import fs from "fs";

const parser = new Parser();
const date = new Date().toISOString().slice(0, 10);

const queries = [
  "AI product launch decision",
  "biotech clinical trial decision",
  "startup funding decision",
  "investment market risk decision",
  "technology earnings decision"
];

const q = queries[Math.floor(Math.random() * queries.length)];
const url = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en`;

const feed = await parser.parseURL(url);
const item = feed.items[0];

if (!item) {
  throw new Error("No news found");
}

const title = item.title || "";
const link = item.link || "";

const topic = `Date: ${date}

Layer 1 — Context:
Recent news trigger: ${title}

Layer 2 — Domain:
${q}

Layer 3 — Decision tension:
Whether to act now or wait for clearer evidence.

Decision question:
Should a decision-maker act now based on this development, or wait for stronger confirmation?

Source:
${link}
`;

fs.mkdirSync("posts", { recursive: true });
fs.writeFileSync(`posts/${date}_tacagent_topic.md`, topic);

console.log(topic);

