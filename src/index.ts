#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { markdownToSlack } from "md-to-slack";
import * as fs from "fs";
import * as path from "path";

const server = new McpServer({
  name: "md-to-slack",
  version: "1.0.0",
});

// Tool 1: Convert markdown to Slack mrkdwn and return the result
server.tool(
  "convert_md_to_slack",
  "Converts Markdown text to Slack-compatible mrkdwn format",
  {
    markdown: z.string().describe("The Markdown text to convert to Slack format"),
  },
  async ({ markdown }) => {
    const slackText = markdownToSlack(markdown);
    return {
      content: [{ type: "text", text: slackText }],
    };
  }
);

// Tool 2: Convert markdown to Slack mrkdwn and save to a file
server.tool(
  "convert_md_to_slack_file",
  "Converts Markdown text to Slack-compatible mrkdwn format and saves it to a file",
  {
    markdown: z.string().describe("The Markdown text to convert to Slack format"),
    outputPath: z
      .string()
      .optional()
      .describe("Output file path (default: ./slack-message.txt)"),
  },
  async ({ markdown, outputPath }) => {
    const slackText = markdownToSlack(markdown);
    const filePath = outputPath || "./slack-message.txt";
    const resolvedPath = path.resolve(filePath);

    fs.writeFileSync(resolvedPath, slackText, "utf-8");

    return {
      content: [
        {
          type: "text",
          text: `Slack message saved to: ${resolvedPath}\n\n--- Preview ---\n${slackText}`,
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("md-to-slack MCP server running on stdio");
}

main().catch(console.error);
