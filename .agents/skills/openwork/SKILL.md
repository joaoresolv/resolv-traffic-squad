---
name: openwork
description: Shared AI workflows, team skills, plugins, and cross-agent MCP capabilities (Google Workspace, Microsoft 365, Notion, Slack) via OpenWork desktop app and OpenWork Remote MCP server.
---

# OpenWork Skill

[OpenWork](https://github.com/different-ai/openwork) is an open-source platform and desktop application for sharing AI workflows, skills, plugins, and MCP connections across AI agents (Antigravity, Claude Code, Cursor, Codex, etc.).

## Key Features

1. **Shared Capabilities**:
   - Centralized skills, plugins, and remote MCP connections accessible across teammates and agent environments.
   - Support for Google Workspace, Microsoft 365, Notion, Slack, Linear, and custom enterprise integrations.

2. **OpenWork MCP Tools**:
   - `search_capabilities`: Search for available skills, plugins, and tools assigned to your account/organization.
   - `execute_capability`: Execute a specific shared capability or workflow with arguments.

3. **OpenWork Den (Control Plane)**:
   - Organization-wide access control, inference provisioning, policy management, and marketplace distribution of AI skills.

---

## Usage & Integration

### Mode 1: Remote MCP Server Configuration
To grant your agent access to OpenWork capabilities:

- **Remote MCP Endpoint**: `https://api.openworklabs.com/mcp/agent`

**MCP Client Configuration**:
```json
{
  "mcpServers": {
    "openwork": {
      "url": "https://api.openworklabs.com/mcp/agent"
    }
  }
}
```

### Mode 2: Local OpenWork Setup
To run or develop OpenWork locally from the repository:

```bash
cd scratch/openwork
pnpm install
pnpm dev
```

---

## Agent Guidance

When asked to access shared team workflows, corporate integrations (Google Workspace, Office 365), or organizational MCP tools:
1. Query the **OpenWork MCP** tools (`search_capabilities`) to find available team workflows.
2. Execute target workflows via `execute_capability`.
3. Synchronize new skills or custom automations with the team's OpenWork vault or workspace.
