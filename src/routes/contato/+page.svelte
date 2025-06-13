<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let isVisible = false;
  let sectionsVisible = Array(2).fill(false);
  let formName = '';
  let formEmail = '';
  let formSubject = '';
  let formMessage = '';
  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = false;
  
  onMount(() => {
    isVisible = true;
    if (browser) {
      window.scrollTo(0, 0);
      
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index || '0');
            if (!isNaN(index)) {
              sectionsVisible[index] = true;
            }
          }
        });
      }, { threshold: 0.2 });
      
      document.querySelectorAll('.animated-section').forEach((section: Element, index: number) => {
        (section as HTMLElement).dataset.index = index.toString();
        observer.observe(section);
      });
    }
  });
  
  function handleSubmit() {
    isSubmitting = true;
    
    // Simulando envio do formulário
    setTimeout(() => {
      isSubmitting = false;
      submitSuccess = true;
      
      // Limpar o formulário
      formName = '';
      formEmail = '';
      formSubject = '';
      formMessage = '';
      
      // Resetar mensagem de sucesso após alguns segundos
      setTimeout(() => {
        submitSuccess = false;
      }, 5000);
    }, 1500);
    
    // Evitar submissão real do formulário
    return false;
  }
</script>

<div class="glass-shape shape-1"></div>
<div class="glass-shape shape-2"></div>

<section class="contact-hero" class:visible={isVisible}>
  <div class="contact-badge">Fale Comigo</div>
  <h1>Entre em <span class="highlight">Contato</span></h1>
  <p class="subtitle">Tem uma pergunta ou proposta, ou apenas quer dizer olá? Vamos conversar.</p>
</section>

<section class="contact-container" class:visible={isVisible}>
  <div class="contact-info">
    <div class="info-card">
      <div class="info-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2 2 19.72 19.72 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63 2 2 0 0 1 5 6h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"></path></svg>
      </div>
      <h3>Telefone</h3>
      <p>(85) 99614-1977</p>
    </div>
    
    <div class="info-card">
      <div class="info-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
      </div>
      <h3>Email</h3>
      <p>paulorbarreto758@gmail.com</p>
    </div>
    
    <div class="info-card">
      <div class="info-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <h3>Localização</h3>
      <p>Fortaleza, Ceará</p>
    </div>
    
    <div class="social-media">
      <h3>Redes Sociais</h3>
      <div class="social-icons social-badges-align">
        <a href="https://github.com/midukaz" target="_blank" rel="noopener noreferrer" class="social-icon social-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/paulo-barreto-bbbb621a8/" target="_blank" rel="noopener noreferrer" class="social-icon social-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          <span>LinkedIn</span>
        </a>
        <a href="https://instagram.com/midukaz" target="_blank" rel="noopener noreferrer" class="social-icon social-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  </div>
  
  <div class="contact-form-container">
    <form class="contact-form" on:submit|preventDefault={handleSubmit}>
      <h2>Envie uma mensagem</h2>
      
      {#if submitSuccess}
        <div class="form-success">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      {/if}
      
      {#if submitError}
        <div class="form-error">
          Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
        </div>
      {/if}
      
      <div class="form-group">
        <label for="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          bind:value={formName} 
          required
          placeholder="Seu nome completo"
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          bind:value={formEmail} 
          required
          placeholder="seu.email@exemplo.com"
        />
      </div>
      
      <div class="form-group">
        <label for="subject">Assunto</label>
        <input 
          type="text" 
          id="subject" 
          bind:value={formSubject} 
          required
          placeholder="Assunto da mensagem"
        />
      </div>
      
      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea 
          id="message" 
          bind:value={formMessage} 
          rows="5" 
          required
          placeholder="Escreva sua mensagem aqui..."
          style="resize: vertical; min-height: 120px;"
        ></textarea>
      </div>
      
      <button type="submit" class="submit-btn" disabled={isSubmitting}>
        {#if isSubmitting}
          Enviando...
        {:else}
          Enviar Mensagem
        {/if}
      </button>
    </form>
  </div>
</section>

<section class="faq-section animated-section" class:visible={sectionsVisible[0]}>
  <h2>Perguntas Frequentes</h2>
  
  <div class="faq-container">
    <div class="faq-item">
      <h3>Qual é o seu processo de trabalho?</h3>
      <p>
        Meu processo de trabalho envolve várias etapas: entendimento do projeto, planejamento, design, desenvolvimento, testes e implementação. Durante todo o processo, mantenho uma comunicação clara e transparente para garantir que o resultado final atenda às suas expectativas.
      </p>
    </div>
    
    <div class="faq-item">
      <h3>Quais são seus prazos de entrega?</h3>
      <p>
        Os prazos de entrega variam de acordo com a complexidade do projeto. Normalmente, um site simples leva de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 1 a 3 meses. Durante nossa conversa inicial, posso fornecer um cronograma mais preciso para o seu projeto específico.
      </p>
    </div>
    
    <div class="faq-item">
      <h3>Você trabalha com projetos de longo prazo?</h3>
      <p>
        Sim, estou disponível para projetos de longo prazo e contratos de manutenção contínua. Ofereço suporte técnico, atualizações e melhorias para garantir que seu projeto permaneça atualizado e funcionando perfeitamente.
      </p>
    </div>
    
    <div class="faq-item">
      <h3>Como funciona o pagamento?</h3>
      <p>
        Normalmente, trabalho com um modelo de pagamento em etapas: um depósito inicial (geralmente 30-40%) para iniciar o projeto, outro pagamento no meio do desenvolvimento e o pagamento final após a conclusão. Para projetos maiores, podemos estabelecer um cronograma de pagamento personalizado.
      </p>
    </div>
  </div>
</section>

<style>
  .glass-shape {
    position: fixed;
    border-radius: 50%;
    filter: blur(70px);
    z-index: -1;
    opacity: 0.5;
  }
  
  .shape-1 {
    top: -10vh;
    right: -5vw;
    width: 45vw;
    height: 45vh;
    background: radial-gradient(circle, rgba(67, 97, 238, 0.2) 0%, rgba(67, 97, 238, 0.05) 70%);
    animation: float 30s ease-in-out infinite alternate;
  }
  
  .shape-2 {
    bottom: 10vh;
    left: -15vw;
    width: 50vw;
    height: 50vh;
    background: radial-gradient(circle, rgba(125, 60, 152, 0.15) 0%, rgba(125, 60, 152, 0.03) 70%);
    animation: float 25s ease-in-out infinite alternate-reverse;
  }
  
  :global(body.dark-mode) .shape-1 {
    background: radial-gradient(circle, rgba(129, 140, 248, 0.25) 0%, rgba(129, 140, 248, 0.05) 70%);
  }
  
  :global(body.dark-mode) .shape-2 {
    background: radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0.03) 70%);
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(3%, 3%) scale(1.03);
    }
    100% {
      transform: translate(-3%, -3%) scale(0.97);
    }
  }
  
  .animated-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .animated-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .contact-hero {
    text-align: center;
    margin: 3rem 0 5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s, transform 0.8s;
  }
  
  .contact-hero.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .contact-badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    border-radius: 2rem;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(67, 97, 238, 0.2);
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.3s;
  }
  
  :global(body.dark-mode) .contact-badge {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .contact-hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.5s;
  }
  
  .highlight {
    color: #4361ee;
    position: relative;
  }
  
  :global(body.dark-mode) .highlight {
    color: #60a5fa;
  }
  
  .highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, rgba(67, 97, 238, 0.3), rgba(58, 12, 163, 0.3));
    border-radius: 2px;
    z-index: -1;
  }
  
  :global(body.dark-mode) .highlight::after {
    background: linear-gradient(90deg, rgba(96, 165, 250, 0.3), rgba(129, 140, 248, 0.3));
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.7s;
  }
  
  :global(body.dark-mode) .subtitle {
    color: #94a3b8;
  }
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    margin-bottom: 6rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s, transform 0.8s;
  }
  
  .contact-container.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .info-card {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.8rem;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(241, 245, 249, 0.8);
  }
  
  :global(body.dark-mode) .info-card {
    background-color: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .info-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.1);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .info-card:hover {
    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .info-icon {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
    display: inline-block;
    background: linear-gradient(135deg, #4361ee, #3a0ca3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  :global(body.dark-mode) .info-icon {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  .info-card h3 {
    margin-bottom: 0.7rem;
    font-size: 1.3rem;
    color: #1e293b;
  }
  
  :global(body.dark-mode) .info-card h3 {
    color: #f8fafc;
  }
  
  .info-card p {
    color: #475569;
    font-size: 1.05rem;
  }
  
  :global(body.dark-mode) .info-card p {
    color: #cbd5e1;
  }
  
  .social-media {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.8rem;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(241, 245, 249, 0.8);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  :global(body.dark-mode) .social-media {
    background-color: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .social-media:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.1);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .social-media:hover {
    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .social-media h3 {
    margin-bottom: 1.2rem;
    font-size: 1.3rem;
    color: #1e293b;
  }
  
  :global(body.dark-mode) .social-media h3 {
    color: #f8fafc;
  }
  
  .social-icons.social-badges-align {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.2rem;
  }
  
  .social-badge {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    background: #fff;
    color: #222;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 2rem;
    padding: 0.7rem 1.7rem;
    border: none;
    box-shadow: none;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
  }
  
  :global(body.dark-mode) .social-badge {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }
  
  .social-badge:hover {
    background: #f3f6fa;
  }
  
  :global(body.dark-mode) .social-badge:hover {
    background: rgba(37,99,235,0.18);
  }
  
  @media (max-width: 600px) {
    .social-icons.social-badges-align {
      flex-direction: column;
      gap: 0.7rem;
      align-items: stretch;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .social-badge {
      width: 100%;
      justify-content: flex-start;
      font-size: 0.95rem;
      padding: 0.5rem 1rem;
      min-width: 0;
      max-width: 100%;
      box-sizing: border-box;
    }
    .contact-container, .info-card, .social-media {
      padding: 1rem;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .info-card h3, .social-media h3 {
      font-size: 1.1rem;
    }
  }
  
  .contact-form-container {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(241, 245, 249, 0.8);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  :global(body.dark-mode) .contact-form-container {
    background-color: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .contact-form-container:hover {
    box-shadow: 0 15px 35px rgba(67, 97, 238, 0.08);
    border-color: rgba(67, 97, 238, 0.15);
  }
  
  :global(body.dark-mode) .contact-form-container:hover {
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.12);
    border-color: rgba(96, 165, 250, 0.15);
  }
  
  .contact-form h2 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: #1e293b;
    position: relative;
    display: inline-block;
  }
  
  :global(body.dark-mode) .contact-form h2 {
    color: #f8fafc;
  }
  
  .contact-form h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    border-radius: 3px;
  }
  
  :global(body.dark-mode) .contact-form h2::after {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
  }
  
  .form-success {
    background-color: rgba(34, 197, 94, 0.15);
    color: #16a34a;
    padding: 1.2rem;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(34, 197, 94, 0.3);
  }
  
  :global(body.dark-mode) .form-success {
    background-color: rgba(34, 197, 94, 0.1);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.2);
  }
  
  .form-error {
    background-color: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    padding: 1.2rem;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(239, 68, 68, 0.3);
  }
  
  :global(body.dark-mode) .form-error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.2);
  }
  
  .form-group {
    margin-bottom: 1.8rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.7rem;
    font-weight: 500;
    color: #475569;
  }
  
  :global(body.dark-mode) .form-group label {
    color: #cbd5e1;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(203, 213, 225, 0.5);
    border-radius: 0.8rem;
    background-color: rgba(255, 255, 255, 0.8);
    color: #1e293b;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-sizing: border-box;
  }
  
  :global(body.dark-mode) .form-group input,
  :global(body.dark-mode) .form-group textarea {
    border-color: rgba(71, 85, 105, 0.5);
    background-color: rgba(30, 41, 59, 0.8);
    color: #f8fafc;
  }
  
  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #94a3b8;
    opacity: 0.8;
  }
  
  :global(body.dark-mode) .form-group input::placeholder,
  :global(body.dark-mode) .form-group textarea::placeholder {
    color: #64748b;
    opacity: 0.9;
  }
  
  .form-group input:hover:not(:focus),
  .form-group textarea:hover:not(:focus) {
    border-color: rgba(67, 97, 238, 0.3);
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  :global(body.dark-mode) .form-group input:hover:not(:focus),
  :global(body.dark-mode) .form-group textarea:hover:not(:focus) {
    border-color: rgba(96, 165, 250, 0.3);
    background-color: rgba(30, 41, 59, 0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: rgba(67, 97, 238, 0.8);
    outline: none;
    box-shadow: 0 0 0 4px rgba(67, 97, 238, 0.15), 0 4px 12px rgba(67, 97, 238, 0.1);
    background-color: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
  }
  
  :global(body.dark-mode) .form-group input:focus,
  :global(body.dark-mode) .form-group textarea:focus {
    border-color: rgba(96, 165, 250, 0.8);
    box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.15), 0 4px 12px rgba(96, 165, 250, 0.1);
    background-color: rgba(30, 41, 59, 0.95);
    transform: translateY(-2px);
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 120px;
    max-height: 300px;
    font-family: inherit;
    line-height: 1.5;
  }
  
  .submit-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #4361ee, #3a0ca3);
    color: white;
    border: none;
    border-radius: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.25);
  }
  
  :global(body.dark-mode) .submit-btn {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
  
  .submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s;
  }
  
  .submit-btn:hover::before {
    left: 100%;
  }
  
  .submit-btn:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
  }
  
  :global(body.dark-mode) .submit-btn:hover:not(:disabled) {
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
  }
  
  .submit-btn:disabled {
    background: linear-gradient(135deg, #94a3b8, #64748b);
    cursor: not-allowed;
  }
  
  :global(body.dark-mode) .submit-btn:disabled {
    background: linear-gradient(135deg, #475569, #334155);
    color: #94a3b8;
  }
  
  .faq-section {
    margin: 6rem 0;
  }
  
  .faq-section h2 {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .faq-section h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    border-radius: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :global(body.dark-mode) .faq-section h2::after {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
  }
  
  .faq-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2.5rem;
  }
  
  .faq-item {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(241, 245, 249, 0.8);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards;
    animation-delay: calc(0.1s * var(--n, 0));
  }
  
  .faq-item:nth-child(1) { --n: 1; }
  .faq-item:nth-child(2) { --n: 2; }
  .faq-item:nth-child(3) { --n: 3; }
  .faq-item:nth-child(4) { --n: 4; }
  
  :global(body.dark-mode) .faq-item {
    background-color: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .faq-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.1);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .faq-item:hover {
    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .faq-item h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #4361ee;
  }
  
  :global(body.dark-mode) .faq-item h3 {
    color: #60a5fa;
  }
  
  .faq-item p {
    color: #475569;
    line-height: 1.7;
  }
  
  :global(body.dark-mode) .faq-item p {
    color: #cbd5e1;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .contact-hero h1 {
      font-size: 2.2rem;
    }
    
    .contact-form-container {
      padding: 1.5rem;
    }
    
    .form-group input,
    .form-group textarea {
      padding: 0.8rem;
      font-size: 16px; /* Previne zoom no iOS */
    }
    
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group input:hover:not(:focus),
    .form-group textarea:hover:not(:focus) {
      transform: none; /* Remove transform em mobile para melhor performance */
    }
    
    .faq-container {
      grid-template-columns: 1fr;
    }
    
    .info-card,
    .social-media {
      padding: 1.2rem;
    }
    
    .social-icons {
      justify-content: center;
    }
  }
  
  @media (max-width: 480px) {
    .contact-hero h1 {
      font-size: 1.8rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .contact-form-container {
      padding: 1rem;
    }
    
    .form-group {
      margin-bottom: 1.2rem;
    }
    
    .submit-btn {
      padding: 0.8rem;
      font-size: 0.9rem;
    }
  }
</style> 