# mcp-md-to-slack

An MCP (Model Context Protocol) server that converts Markdown to Slack-compatible `mrkdwn` format.

## Tools

| Tool | Description |
|------|-------------|
| `convert_md_to_slack` | Converts Markdown text and returns the Slack `mrkdwn` result |
| `convert_md_to_slack_file` | Converts Markdown text and saves the result to a file |

## Setup

```bash
git clone https://github.com/felps-dev/mcp-md-to-slack.git
cd mcp-md-to-slack
npm install
npm run build
```

## Usage

From the project directory, register the MCP server:

```bash
claude mcp add md-to-slack -- node /absolute/path/to/mcp-md-to-slack/dist/index.js
```

Then restart Claude Code to pick up the new tools.

## Conversion Examples

| Markdown | Slack mrkdwn |
|----------|-------------|
| `**bold**` | `*bold*` |
| `*italic*` | `_italic_` |
| `~~strike~~` | `~strike~` |
| `` `code` `` | `` `code` `` |
| `[link](url)` | `<url\|link>` |
| `> quote` | `> quote` |

## License

MIT
