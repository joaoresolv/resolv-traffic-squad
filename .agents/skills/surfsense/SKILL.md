---
name: surfsense
description: Live web research, platform connectors (Reddit, YouTube, Instagram, TikTok, Google Maps, Google Search, Indeed, Amazon, Walmart, Web Crawl), and NotebookLM-style research workspace primitives for agents via SurfSense REST API or MCP server.
---

# SurfSense Skill

[SurfSense](https://github.com/MODSetter/SurfSense) is an open-source web research workspace and live-data connector platform designed for AI agents and human research. It exposes typed primitives for platforms where live web answers actually live, avoiding slow browser-automation loops and brittle scraping APIs.

## Key Capabilities

1. **Live Data Connectors**:
   - **Reddit**: Search posts, comments, and subreddits without rate limits.
   - **YouTube**: Extract video data, transcripts, and comment threads.
   - **Instagram**: Public profiles, posts, and reels.
   - **TikTok**: Public video metadata, comments, hashtags, and user profiles.
   - **Google Maps**: Local business places, ratings, and detailed user reviews.
   - **Google Search**: Live SERPs and ranking monitoring.
   - **Indeed**: Job postings, salary data, and company hiring trends.
   - **Amazon & Walmart**: Product pricing, ratings, sellers, BSR, and full review histories.
   - **Web Crawl**: Clean, structured markdown extraction from any web page.
   - **External MCP**: One-click integrations for Notion, Slack, Linear, Jira, and Google Drive.

2. **NotebookLM-Style Research Workspace**:
   - **Knowledge Base**: Hybrid semantic + full-text search across uploaded PDFs, Office docs, transcripts, and web captures with Perplexity-style citations.
   - **Deliverables Studio**: Reports (PDF, DOCX, Markdown), podcasts, slide presentations, and video overviews.
   - **Obsidian Integration**: Deep synchronization with Obsidian vaults (`surfsense_obsidian`).

---

## Usage Modes

### Mode 1: Cloud MCP Server Integration
Connect directly to the SurfSense cloud MCP endpoint:

```json
{
  "mcpServers": {
    "surfsense": {
      "url": "https://mcp.surfsense.com/mcp",
      "headers": {
        "Authorization": "Bearer ${SURFSENSE_API_KEY}"
      }
    }
  }
}
```

### Mode 2: Local MCP Server Execution (`surfsense_mcp`)
Run the MCP server locally from the repository:

```bash
cd scratch/SurfSense/surfsense_mcp
python -m surfsense_mcp
```

### Mode 3: Self-Hosted Docker Setup
Run the full platform locally using Docker:

* **Windows (PowerShell)**:
  ```powershell
  irm https://raw.githubusercontent.com/MODSetter/SurfSense/main/docker/scripts/install.ps1 | iex
  ```

* **Linux / macOS**:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/MODSetter/SurfSense/main/docker/scripts/install.sh | bash
  ```

---

## REST API Example

Call connector endpoints directly via HTTP POST:

```bash
curl -X POST "$SURFSENSE_API_URL/workspaces/$WORKSPACE_ID/scrapers/reddit/scrape" \
  -H "Authorization: Bearer $SURFSENSE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "search_queries": ["market research topic"],
    "community": "SaaS",
    "sort": "top",
    "time_filter": "week"
  }'
```

---

## Agent Instructions

When the user asks to research social sentiment (Reddit, TikTok, Instagram), platform data (Amazon, Walmart, Google Maps reviews, Indeed jobs), or compile research reports:
1. Prefer using **SurfSense connectors** or the **SurfSense MCP server** over full browser automation when read-only retrieval is needed.
2. If self-hosting locally, ensure Docker containers or `surfsense_backend` services are active.
3. For vault management, synchronize structured outputs into the local Obsidian workspace.
