# 📢 Meta Ads MCP Server — Referência Completa (29 Tools)

> **Endpoint Remote MCP Oficial:** `https://mcp.facebook.com/ads`  
> **Endpoint Supabase (Custom MCP Resolv):** `https://llzeqjpueamnytmansdy.supabase.co/functions/v1/mcp-meta`  
> **Autenticação:** OAuth 2.0 (Meta Account) / Streamable HTTP

---

## 🛠️ Catálogo das 29 Ferramentas do Meta Ads MCP

| Categoria | O que faz | Ferramentas (Tools Exemplos) |
| :--- | :--- | :--- |
| **1. Leitura & Relatórios** | Consulta contas de anúncio, campanhas, ad sets, ads e métricas históricas de desempenho | `get_ad_accounts`, `get_campaigns`, `get_ad_sets`, `get_ads`, `get_insights` |
| **2. Gestão de Campanhas** | Criação, edição, alteração de orçamento, pausa e reativação de objetos de anúncio | `create_campaign`, `update_campaign`, `update_ad_set`, `pause_ad`, `resume_ad` |
| **3. Catálogo & Produtos** | Gestão de catálogos e diagnósticos de feed de produtos para e-commerce/varejo | `get_catalogs`, `diagnose_feed_issues` |
| **4. Tracking & Pixel** | Inspeção de eventos de pixel, qualidade de correspondência (Match Quality) e CAPI | `get_pixel_events`, `validate_event_match_quality` |

---

## ⚡ Como Mesclar os MCPs a Nosso Favor

### 🤝 1. O MCP do Escalando Agências (`mcp-meta`) + Meta Ads Oficial
* **Escalando Agências (`mcp-meta`)**: Fornece o **DNA do Cliente** (meta de CPL, investimento mensal, status ativo/inativo, link do grupo de WhatsApp, ID da agência).
* **Meta Ads Oficial (`mcp.facebook.com/ads`)**: Fornece a **Profundidade Operacional** (análise de pixel, CAPI, criativos individuais, relatórios de posicionamento).

### 🤖 2. O Resolv Tráfego Squad como Camada de Decisão
Conforme documentado em [[Resolv Trafego Squad]]:
1. **Nunca use a IA como "apertadora de botão"** sem contexto de margem e LTV.
2. A IA lê a nota do cliente no Obsidian (`Clientes/<Nome_do_Cliente>/`).
3. O `meta-auditor` puxa os dados via MCP.
4. O `fiscal-cfo` valida se o CPL está dentro da margem financeira.
5. O `scale-optimizer` aplica as alterações de orçamento via `update_ad_set` / `update_budget`.
