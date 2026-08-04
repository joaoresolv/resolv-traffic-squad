# 🚀 Plano Completo de Implantação & Onboarding — LecoTour NY

> **Cliente:** LecoTour NY  
> **Nicho:** Turismo Receptivo, Transfers, City Tour, Apoio Local em Português nos EUA (NYC, Miami, Filadélfia & Copa 2026)  
> **Meta Ads Account:** `act_542764284696321`  
> **Frase Âncora:** *"LECOTOUR - você curte a viagem, a cidade e os jogos. A gente cuida do caminho."*  
> **Identidade Visual:** Preto base (#000000), Dourado/Amarelo (#FFC000), Símbolo de Coroa/Escudo

---

## 1. Resumo Executivo & Diagnóstico Estratégico

### A. Diagnóstico da Empresa
* **Empresa:** LecoTour é uma empresa brasileira baseada em New York/EUA, especializada em suporte de transporte, receptivo, transfers aeroporto-hotel, city tours e deslocamento para jogos/eventos para brasileiros que viajam para os Estados Unidos.
* **Diferencial Competitivo:** Atendimento 100% em português, suporte local sem improviso, frota com carros, vans e ônibus para pequenos ou grandes grupos, foco especial em **dias de jogos da Seleção Brasileira e Copa do Mundo 2026**.
* **O que a LecoTour NÃO é:** Não é agência de viagem, não vende passagens aéreas e não vende ingressos para jogos. Resolve a logística de quem já tem a viagem ou evento marcado.

---

## 2. Checklist Completo de Implantação

### 📢 Meta Ads & Geolocalização
- [x] Vincular Conta de Anúncios `act_542764284696321` ao Supabase MCP (`mcp-meta`)
- [ ] Configurar campanha geolocalizada em raio em volta de estádios em dias de jogos
- [ ] Configurar Pixel e Conversions API para cliques em WhatsApp e agendamentos de transfer

### 💬 WhatsApp API & Atendimento
- [ ] Configurar Webhook no n8n para captura de leads em tempo real
- [ ] Criar templates de resposta rápida: `solicitacao_transfer`, `city_tour_nyc`, `logistica_jogos`

### 🌐 Landing Page & Aplicação
- [ ] Criar Landing Page de conversão direta para WhatsApp
- [ ] Hero alinhado com "Você curte a viagem. A gente cuida do caminho."
- [ ] Publicação na Vercel

---

## 3. Estratégia de Marketing & Geolocalização

### Públicos de Meta Ads
1. **Público Prioritário (Copa & Jogos)**:
   - Brasileiros que estão ou estarão em NY/NJ, Miami ou Filadélfia durante datas de jogos.
   - Geolocalização de alta precisão em dia de jogo no raio do estádio (MetLife Stadium, Hard Rock Stadium, etc.).
2. **Público Turístico (City Tour & Passeios)**:
   - Brasileiros planejando viagem para Nova York (Interesses em turismo nos EUA, compras em NY, Broadway, turismo em família).
3. **Público de Transfer (Alta Intenção)**:
   - Pessoas chegando via aeroportos JFK, LGA e EWR precisando de transporte privado em português.

---

## 4. Criativos & Copies para Meta Ads

### Copy 1 — Dia de Jogo / Geolocalizado no Estádio
* **Headline:** Está no estádio hoje em New York?
* **Texto Principal:** A LecoTour ajuda brasileiros com transporte organizado, city tour e apoio local em português. Depois do jogo, continue sua experiência sem depender de improviso ou aplicativo.
* **CTA:** Falar com a LecoTour no WhatsApp

### Copy 2 — Transfer Aeroporto-Hotel
* **Headline:** Chegando em New York? A gente cuida do seu caminho.
* **Texto Principal:** Evite perrengues com idioma e trânsito. A LecoTour oferece transfer organizado para brasileiros com motoristas em português do aeroporto ao hotel.
* **CTA:** Agendar Transfer

---

## 5. Perguntas de Qualificação
1. *Para qual cidade/estado você precisa de transporte ou tour?* (New York / Miami / Filadélfia / Outra)
2. *Qual o tipo de serviço desejado?* (Transporte para jogos/eventos / Transfer aeroporto-hotel / City tour privado / Grupo em van ou ônibus)
3. *Data da viagem ou do evento:* (Data exata)
