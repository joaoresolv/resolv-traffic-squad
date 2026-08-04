Openclaw
{
  "mcpServers": {
    "browseros": {
      "url": "http://127.0.0.1:9000/mcp"
    }
  }
}

Claude Code
claude mcp add --transport http browseros http://127.0.0.1:9000/mcp --scope user

Claude Desktop
{
  "mcpServers": {
    "browserOS": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://127.0.0.1:9000/mcp"
      ]
    }
  }
}
## BrowserOS MCP Server

[Docs](https://docs.browseros.com/features/use-with-claude-code)

Connect BrowserOS to MCP clients like Claude Code, Gemini CLI and others.

Server URL:

http://127.0.0.1:9000/mcp