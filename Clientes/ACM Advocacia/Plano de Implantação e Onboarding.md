# 🚀 Plano Completo de Implantação & Onboarding — ACM Soluções Estratégicas

> **Cliente:** ACM Soluções Estratégicas (ACM Advocacia)  
> **Nicho:** Advocacia Tributária, Transação Tributária, Gestão de Passivos e Recuperação de Crédito  
> **OAB:** 214.976  
> **Meta Ads Account:** `act_1898468774122947` (BM `329772624438826`)  
> **Identidade Visual:** Azul-Marinho (#000038), Azul elétrico (#0b1fd8), Cinza (#d1d3d4), Dourado/Azul (Logo Seta)

---

## 1. Resumo Executivo & Diagnóstico Estratégico

### A. Diagnóstico da Empresa
* **Empresa:** ACM Soluções Estratégicas é uma estrutura técnica e jurídica especializada em soluções para empresários que enfrentam passivos tributários, necessidade de reorganizar dívidas fiscais, transação tributária com a PGFN/Receita, recuperação de créditos e renegociação de dívidas bancárias.
* **Diferencial Competitivo:** Não atua como uma consultoria genérica ou escritório tradicional frio. Foca em **fluxo de caixa, alívio operacional e continuidade do negócio**, apresentando análises personalizadas sem promessas milagrosas ou agressivas.
* **Público-Alvo Prioritário:** 
  1. *Prioridade 1 (Foco Principal)*: Empresários de empresas ativas com passivo tributário > R$ 500 mil, dívidas em aberto ou parcelamentos difíceis.
  2. *Prioridade 2*: Empresários com créditos tributários a recuperar/compensar.
  3. *Prioridade 3*: Empresários com problemas bancários e juros abusivos.
* **Gargalo Comercial Identificado:** O processo comercial de 6 etapas pode esfriar o lead se não houver um primeiro contato rápido (SLA < 15 min) focado em **Oferta de Diagnóstico Gratuito**, e não em cobrança ou "dívida".

---

## 2. Checklist Completo de Implantação

### 📢 Meta Ads & Tracking
- [x] Vincular Conta de Anúncios `act_1898468774122947` ao Supabase MCP (`mcp-meta`)
- [ ] Configurar Pixel do Meta e Conversions API (CAPI) via server-side (n8n/Vercel)
- [ ] Configurar eventos customizados: `Lead_Form_Submit`, `Diagnostico_Solicitado`, `WhatsApp_Click`
- [ ] Verificar domínio oficial e configurar Mensuração de Eventos Agregados

### 💬 WhatsApp API Oficial & Automação
- [ ] Configurar WABA (WhatsApp Business Account) no Meta Business Manager
- [ ] Configurar Webhook no n8n (`https://n8n.resolvsolucoes.com.br/`)
- [ ] Criar templates de mensagem aprovados: `boas_vindas_diagnostico`, `lembrete_reuniao_estrada`
- [ ] Conectar número via Evolution API (`api.resolvsolucoes.com.br/manager/`) ou uazapi

### 📋 CRM & Funil Comercial
- [ ] Criar pipeline **ACM - Transação Tributária & Créditos** no CRM (Kommo / Escalando Empresas)
- [ ] Criar campos personalizados: `Valor do Passivo (R$)`, `Faturamento Estimado`, `Possui Contador?`, `Urgência da Solução`, `Link do Diagnóstico`
- [ ] Configurar automação de distribuição de leads para a equipe jurídica/comercial

### 🌐 Landing Page & Aplicação
- [ ] Desenvolver Landing Page responsiva focada no **Diagnóstico Gratuito**
- [ ] Configurar formulário de qualificação em 2 etapas
- [ ] Publicação na Vercel com SSL e otimização de velocidade (Score > 90 no PageSpeed)

---

## 3. Estratégia de Marketing & Segmentação

### Públicos de Meta Ads
1. **Público B2B - Interesses & Cargos (Foco Topo/Meio de Funil)**:
   - *Cargos*: Proprietário, Sócio-administrador, Diretor executivo (CEO/CFO), Fundador.
   - *Interesses*: Gestão financeira, Direito tributário, Contabilidade empresarial, Importação/Exportação, Indústria, Transporte e Logística.
   - *Idade*: 35 a 65 anos.
2. **Público de Retargeting (Foco Fundo de Funil)**:
   - Visitantes da Landing Page nos últimos 60 dias (Excluir quem já converteu).
   - Engajamento com Instagram/Facebook nos últimos 90 dias.
3. **Público Lookalike (Semelhante)**:
   - LAL 1% a 2% baseado nos leads que solicitaram agendamento de diagnóstico.

---

## 4. Estratégia Comercial & Quebra de Objeções

### Fluxo Comercial Recomendado
`Lead Ads / LP` ➔ `Triagem Autônoma WhatsApp` ➔ `Agendamento de Call` ➔ `Apresentação de Diagnóstico` ➔ `Proposta & Contrato`

### Quebra de Objeções
1. **"Preciso falar com meu contador"**:
   * *Resposta*: "Perfeito! Inclusive, nosso trabalho não substitui seu contador. Ele cuida da rotina fiscal. A ACM entra com uma análise jurídica e estratégica sobre parcelamentos e transação tributária que muitas vezes exigem atuação especializada."
2. **"Já tenho uma empresa cuidando disso"**:
   * *Resposta*: "Ótimo. Nesses casos, o diagnóstico gratuito serve como uma segunda opinião técnica para validar se não existe nenhuma oportunidade ou condição melhor de negociação disponível."
3. **"Não tenho dinheiro agora"**:
   * *Resposta*: "Justamente por isso vale entender o cenário. A análise da ACM busca reorganizar obrigações, reduzir impacto imediato e aliviar o caixa da sua empresa."

---

## 5. Estrutura do CRM (Pipelines & Campos)

### Etapas do Funil no CRM
1. `[Novo Lead]` — Entrada via Meta Lead Ads / LP.
2. `[Contato Iniciado]` — Mensagem enviada pelo WhatsApp.
3. `[Qualificado / Em Coleta]` — Autorizou análise inicial / envio de dados.
4. `[Diagnóstico em Elaboração]` — Equipe técnica analisando o cenário tributário.
5. `[Reunião Agendada]` — Call confirmada para apresentação das alternativas.
6. `[Proposta Apresentada]` — Proposta enviada.
7. `[Contrato Fechado 🏆]` — Cliente ativo.

---

## 6. Estrutura das Automações (n8n Workflow)

```
[Meta Lead Ads / LP Form] 
       │
       ▼
[Webhook n8n] ──► [Grava no Supabase / CRM] ──► [Envia WhatsApp de Boas-Vindas]
                                                        │
                                                        ▼
                                           [Notifica Advogado no Slack/WA]
```

---

## 7. Arquitetura da Landing Page (Wireframe Textual)

### Cores & Estilo
- **Fundo / Primária:** Azul-Marinho (`#000038`)
- **Destaque / CTA:** Azul Elétrico (`#0b1fd8`)
- **Texto / Suporte:** Cinza (`#d1d3d4`) e Branco
- **Detalhes:** Dourado/Azul (Seta da Marca)

### Seções da Página
1. **Hero Section**:
   - *Headline*: "Sua empresa tem passivos tributários ou créditos a recuperar? Antes de tomar decisões no escuro, faça uma análise estratégica."
   - *Subheadline*: "A ACM Soluções Estratégicas analisa o cenário fiscal do seu negócio e aponta caminhos concretos para negociação, recuperação de caixa e segurança jurídica."
   - *CTA*: `[Solicitar Diagnóstico Gratuito]`
2. **Dores do Empresário**: Bloco interativo com 4 perguntas sobre dívidas, parcelamentos difíceis e juros.
3. **Como Atuamos**: 3 Passos simples (Diagnóstico -> Análise Técnica -> Plano Estratégico).
4. **Soluções Prioritárias**: Cards para Transação Tributária, Gestão de Passivos e Recuperação de Créditos.
5. **Diferenciais & OAB**: Destaque para visão consultiva, foco em caixa e OAB 214.976.
6. **Objeções Frequentes (FAQ)**: Resposta estruturada sobre o papel do contador e segunda opinião.
7. **CTA Final**: Formulário objetivo + Botão WhatsApp.

---

## 8. Criativos & Copies para Meta Ads

### Copy 1 — Passivo Tributário (Ângulo Consultivo)
* **Headline:** Passivo tributário não precisa ser tratado no improviso.
* **Texto Principal:** Se o passivo fiscal da sua empresa está pressionando o fluxo de caixa ou travando investimentos, saiba que existem caminhos jurídicos e estratégicos para renegociar com segurança. A ACM analisa seu cenário antes de qualquer decisão.
* **CTA:** Solicitar Análise Gratuita
* **Rodapé:** OAB 214.976 | ACM Soluções Estratégicas

### Copy 2 — Contador x Solução Especializada
* **Headline:** Seu contador cuida da rotina fiscal. A ACM entra na estratégia do passivo.
* **Texto Principal:** Transação tributária e gestão de dívidas fiscais exigem leitura jurídica especializada. Uma segunda opinião técnica pode identificar alternativas de parcelamento e redução de impacto no caixa que você ainda não conhece.
* **CTA:** Saiba Mais

---

## 9. Perguntas de Qualificação do Formulário
1. *Qual é a situação fiscal atual da sua empresa?* (Possuo débitos tributários em aberto / Tenho parcelamentos ativos / Quero verificar créditos a recuperar)
2. *Qual o valor estimado do passivo tributário?* (Até R$ 200 mil / R$ 200 mil a R$ 500 mil / Acima de R$ 500 mil)
3. *Sua empresa está em operação e faturando atualmente?* (Sim / Não)

---

## 10. Riscos do Projeto & Melhores Práticas
* **Risco**: Demora no primeiro contato comercial (SLA alto) esfriando o lead.  
  * *Solução*: Automação de resposta instantânea via WhatsApp API Oficial em menos de 2 minutos.
* **Risco**: Promessa excessiva de desconto gerando passivo ético na OAB.  
  * *Solução*: Manter tom estritamente técnico, consultivo e informativo, incluindo sempre OAB 214.976.
