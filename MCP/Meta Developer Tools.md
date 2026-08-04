# Meta Developer Tools MCP Server

> **Endpoint Remote MCP:** `https://mcp.facebook.com/devtools`  
> **Autenticação:** OAuth 2.0 (Meta Developer Account)  
> **Transporte:** Streamable HTTP  
> **Prefix dos Tools:** `devtools_*`

---

## 📌 Configuração por Cliente / IDE

### 1. Cursor / Antigravity (`mcp.json`)
Adicione no arquivo `mcp.json` (`~/.cursor/mcp.json` ou `.cursor/mcp.json` do projeto):

```json
{
  "mcpServers": {
    "Meta Developer Tools": {
      "url": "https://mcp.facebook.com/devtools",
      "type": "http"
    }
  }
}
```

---

### 2. Claude Code (CLI)
Exectue o comando:
```bash
claude mcp add --transport http meta_developer_tools https://mcp.facebook.com/devtools
```
Depois digite `/mcp` e selecione `meta_developer_tools` para realizar o login via OAuth.

---

### 3. Clientes com Suporte Stdio Apenas (via `mcp-remote`)
```json
{
  "mcpServers": {
    "Meta Developer Tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.facebook.com/devtools"
      ]
    }
  }
}
```

---

## 🔑 Fluxo de Autenticação OAuth e Escopos

1. **Ativação:** Ao conectar o servidor, o cliente iniciará o fluxo OAuth (ou clique em *Authenticate/Connect*).
2. **Navegador:** O navegador abrirá a tela de login de Desenvolvedor Meta.
3. **Escopos:**
   - `Read`: Acesso de leitura às configurações de App, App Review, Compliance, Uso de API e Webhooks.
   - `Manage`: Acesso de escrita exclusivo para **Webhooks** (criar, alterar e deletar subscrições).

---

## 🧪 Roteiro Prático de Teste ( As 10 Ferramentas )

### Fase 1: Ferramentas Públicas (Sem necessidade de App ID)
1. **`devtools_discovery`**
   - *Prompt:* `"Pesquise na documentação de desenvolvedores da Meta como configurar webhooks da WhatsApp Cloud API."`
2. **`devtools_api_changelog`**
   - *Prompt:* `"Liste todos os produtos com changelog disponíveis na Meta e retorne a URL do feed RSS de mensagens comerciais."`

### Fase 2: Descoberta e Inspeção de Aplicações
3. **`devtools_app_list`**
   - *Prompt:* `"Liste todas as minhas aplicações da Meta acessíveis via MCP com a ferramenta devtools_app_list."`
4. **`devtools_app`**
   - *Prompt:* `"Mostre as configurações básicas e de segurança do app <APP_ID>."`
5. **`devtools_app_review`**
   - *Prompt:* `"Qual é o status do App Review e as permissões aprovadas para o app <APP_ID>?"`
6. **`devtools_compliance`**
   - *Prompt:* `"Verifique se o app <APP_ID> possui violações de compliance ou ações pendentes."`
7. **`devtools_api_usage`**
   - *Prompt:* `"Exiba a taxa de limites (rate limits), volume de chamadas e depreciações de API para o app <APP_ID>."`

### Fase 3: Gestão e Diagnóstico de Webhooks
8. **`devtools_webhook_list`**
   - *Prompt:* `"Liste os tópicos de webhook e subscrições ativas do app <APP_ID>."`
9. **`devtools_webhook_manage`** *(Requer escopo Manage)*
   - *Prompt:* `"Inscreva o app <APP_ID> no tópico page para os campos messages usando a callback https://meusite.com/webhook."`
10. **`devtools_webhook_test`**
    - *Prompt:* `"Envie um evento de teste para o campo messages do tópico page no app <APP_ID>."`
