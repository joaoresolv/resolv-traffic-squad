'use client';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #060606 0%, #0A0A0A 50%, #111111 100%)',
      color: '#F5F5F5',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header nav */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(6,6,6,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,92,0,0.15)',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#FF5C00',
            boxShadow: '0 0 12px #FF5C00',
          }} />
          <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '-0.5px' }}>
            Resolv <span style={{ color: '#FF5C00' }}>Traffic Squad</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Serviços', 'Resultados', 'Sobre', 'Contato'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF5C00')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '120px 40px 80px',
        maxWidth: '900px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,92,0,0.1)',
          border: '1px solid rgba(255,92,0,0.3)',
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '32px',
          fontSize: '13px',
          fontWeight: 500,
          color: '#FF8C42',
        }}>
          🚀 Especialistas em Tráfego Pago
        </div>

        <h1 style={{
          fontSize: 'clamp(42px, 6vw, 80px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          marginBottom: '24px',
        }}>
          Tráfego que
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #FF5C00, #FF8C42)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>converte de verdade</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#888',
          maxWidth: '600px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          Gestão estratégica de anúncios no Google, Meta e TikTok.
          Resultados mensuráveis para negócios que querem crescer.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contato" style={{
            background: 'linear-gradient(135deg, #FF5C00, #FF8C42)',
            color: 'white',
            padding: '16px 36px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            boxShadow: '0 8px 32px rgba(255,92,0,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,92,0,0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,92,0,0.4)';
          }}
          >
            Quero mais resultados →
          </a>
          <a href="#resultados" style={{
            background: 'transparent',
            color: '#F5F5F5',
            padding: '16px 36px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '16px',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            Ver casos de sucesso
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        display: 'flex',
        gap: '48px',
        padding: '60px 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1,
      }}>
        {[
          { value: '+200', label: 'Clientes atendidos' },
          { value: 'R$5M+', label: 'Em mídia gerenciada' },
          { value: '3.8x', label: 'ROAS médio' },
          { value: '97%', label: 'Taxa de retenção' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '42px',
              fontWeight: 900,
              letterSpacing: '-2px',
              background: 'linear-gradient(135deg, #FF5C00, #FF8C42)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '8px',
            }}>{stat.value}</div>
            <div style={{ color: '#666', fontSize: '14px', fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section id="serviços" style={{
        padding: '100px 40px',
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            marginBottom: '16px',
          }}>
            O que a <span style={{ color: '#FF5C00' }}>Resolv</span> faz
          </h2>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Soluções completas de performance para seu negócio crescer online.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              icon: '🎯',
              title: 'Google Ads',
              desc: 'Campanhas de Search, Display, YouTube e Shopping otimizadas para máxima conversão.',
            },
            {
              icon: '📱',
              title: 'Meta Ads',
              desc: 'Facebook e Instagram com criativos de alta performance e segmentação precisa.',
            },
            {
              icon: '🎵',
              title: 'TikTok Ads',
              desc: 'Conteúdo nativo que converte para o público mais engajado das redes sociais.',
            },
            {
              icon: '📊',
              title: 'Analytics & BI',
              desc: 'Dashboards em tempo real e relatórios que mostram exatamente onde seu dinheiro está rendendo.',
            },
            {
              icon: '🔄',
              title: 'Automações',
              desc: 'CRM, funis e automações que trabalham 24h por você, nutrindo leads e fechando vendas.',
            },
            {
              icon: '🚀',
              title: 'Estratégia de Crescimento',
              desc: 'Planejamento completo de mídia paga alinhado aos seus objetivos de negócio.',
            },
          ].map((service) => (
            <div key={service.title} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '32px',
              transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,92,0,0.4)';
              e.currentTarget.style.background = 'rgba(255,92,0,0.05)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contato" style={{
        padding: '100px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: 'rgba(255,92,0,0.04)',
        borderTop: '1px solid rgba(255,92,0,0.1)',
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          marginBottom: '20px',
        }}>
          Pronto para escalar?
        </h2>
        <p style={{ color: '#888', fontSize: '18px', marginBottom: '40px' }}>
          Fale com um especialista e descubra o potencial real do seu negócio.
        </p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'linear-gradient(135deg, #FF5C00, #FF8C42)',
          color: 'white',
          padding: '18px 48px',
          borderRadius: '14px',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '18px',
          boxShadow: '0 8px 40px rgba(255,92,0,0.4)',
        }}>
          💬 Falar no WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        textAlign: 'center',
        color: '#444',
        fontSize: '14px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        width: '100%',
      }}>
        © 2026 Resolv Traffic Squad. Todos os direitos reservados.
      </footer>
    </main>
  );
}
