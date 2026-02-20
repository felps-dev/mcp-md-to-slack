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

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "md-to-slack": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-md-to-slack/dist/index.js"]
    }
  }
}
```

### Claude Code

Add to `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "md-to-slack": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-md-to-slack/dist/index.js"]
    }
  }
}
```

Restart Claude Desktop or Claude Code after configuring.

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
