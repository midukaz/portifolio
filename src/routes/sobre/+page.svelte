<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let isVisible = false;
  let sectionsVisible = Array(4).fill(false);
  
  onMount(() => {
    isVisible = true;
    
    if (browser) {
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
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
  
  const experiences = [
    {
      company: "Empresa Pharol Tech",
      position: "Desenvolvedor Front-end e Back-end",
      period: "2022 - Presente",
      description: "Desenvolvimento e manutenção de aplicações web utilizando React, VueJs, Laravel, TypeScript, AdonisJs, PHP, MySQL, PostgreSQL, Docker, Git, entre outras tecnologias."
    }
  ];
  
  const education = [
    {
      institution: "Faculdade Estácio de Sá",
      degree: "Analise e Desenvolvimento de Sistemas",
      period: "2020 - 2022",
      description: "Formação com foco em desenvolvimento de software, algoritmos e estruturas de dados."
    },
  ];
</script>

<div class="glass-shape shape-1"></div>
<div class="glass-shape shape-2"></div>

<section class="about-hero" class:visible={isVisible}>
  <div class="about-image">
    <div class="avatar-container">
      <div class="avatar-glow"></div>
      <div class="avatar-placeholder">
        <img src="/assets/img/IMG_2.jpeg" alt="Foto de perfil" />
      </div>
    </div>
  </div>
  <div class="about-content">
    <div class="about-badge">Minha Jornada</div>
    <h1>Sobre <span class="highlight">Mim</span></h1>
    <p class="subtitle">Analista de Sistemas & Desenvolvedor</p>
    <div class="about-text">
      <p>
        Olá, sou um Desenvolvedor e Analista de Sistemas apaixonado por criar experiências digitais intuitivas e atraentes. Com formação em Analise e Desenvolvimento de Sistemas e mais de 4 anos de experiência no mercado, tenho trabalhado em projetos que vão desde pequenos sites até grandes aplicações corporativas.
      </p>
      <p>
        Minha jornada na programação começou ainda na adolescência, quando comecei a estudar programação, usando C. Desde então, venho aprimorando constantemente minhas habilidades e acompanhando as tendências e tecnologias mais recentes do mercado.
      </p>
      <p>
        Acredito que o desenvolvimento não se trata apenas de código, mas também de empatia e entendimento das necessidades dos usuários. Por isso, busco sempre criar soluções que sejam não apenas funcionais, mas também acessíveis e agradáveis de usar.
      </p>
    </div>
    <div class="personal-info">
      <div class="info-item">
        <span class="info-label">Nome:</span>
        <span class="info-value">Paulo Ricardo Barreto Mendes</span>
      </div>
      <div class="info-item">
        <span class="info-label">Email:</span>
        <span class="info-value">paulorbarreto@gmail.com</span>
      </div>
      <div class="info-item">
        <span class="info-label">Telefone:</span>
        <span class="info-value">(85) 99614-1977</span>
      </div>
      <div class="info-item">
        <span class="info-label">Localização:</span>
        <span class="info-value">Fortaleza, Ceará</span>
      </div>
      <!-- <div class="info-item">
        <span class="info-label">Disponibilidade:</span>
        <span class="info-value">Disponível para projetos freelance</span>
      </div> -->
    </div>
    <div class="cta-buttons">
      <a href="/contato" class="btn primary">Entre em Contato</a>
      <!-- <a href="/docs/curriculo.pdf" class="btn secondary" download>Download CV</a> -->
    </div>
  </div>
</section>

<section class="experience animated-section" class:visible={sectionsVisible[0]}>
  <h2>Experiência Profissional</h2>
  <div class="experience-grid">
    {#each experiences as exp}
      <div class="experience-card">
        <div class="experience-period">{exp.period}</div>
        <h3>{exp.position}</h3>
        <h4>{exp.company}</h4>
        <p>{exp.description}</p>
      </div>
    {/each}
  </div>
</section>

<section class="education animated-section" class:visible={sectionsVisible[1]}>
  <h2>Formação Acadêmica</h2>
  <div class="education-grid">
    {#each education as edu}
      <div class="education-card">
        <div class="education-period">{edu.period}</div>
        <h3>{edu.degree}</h3>
        <h4>{edu.institution}</h4>
        <p>{edu.description}</p>
      </div>
    {/each}
  </div>
</section>

<section class="skills-interests animated-section" class:visible={sectionsVisible[2]}>
  <div class="skills-section">
    <h2>Habilidades Técnicas</h2>
    <div class="skills-tags">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>JavaScript</span>
      <span>TypeScript</span>
      <span>React</span>
      <span>Svelte</span>
      <span>Node.js</span>
      <span>Express</span>
      <span>MongoDB</span>
      <span>PostgreSQL</span>
      <span>Git</span>
      <span>Docker</span>
      <span>AWS</span>
      <span>UI/UX Design</span>
      <span>Responsive Design</span>
    </div>
  </div>
  
  <div class="interests-section animated-section" class:visible={sectionsVisible[3]}>
    <h2>Interesses</h2>
    <div class="interests-container">
      <div class="interest-item">
        <div class="interest-icon">🎮</div>
        <span>Jogos</span>
      </div>
      <div class="interest-item">
        <div class="interest-icon">🎵</div>
        <span>Música</span>
      </div>
      <div class="interest-item">
        <div class="interest-icon">📚</div>
        <span>Leitura</span>
      </div>
      <div class="interest-item">
        <div class="interest-icon">✈️</div>
        <span>Viagens</span>
      </div>
      <div class="interest-item">
        <div class="interest-icon">🏃</div>
        <span>Esportes</span>
      </div>
      <div class="interest-item">
        <div class="interest-icon">🎬</div>
        <span>Filmes</span>
      </div>
    </div>
  </div>
</section>

<style>
  * {
    box-sizing: border-box;
  }
  
  :global(body) {
    overflow-x: hidden;
  }
  
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
  
  .about-hero {
    display: flex;
    gap: 3rem;
    margin: 3rem 0 6rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s, transform 0.8s;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .about-hero.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .about-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    animation: float 6s ease-in-out infinite alternate;
  }
  
  .avatar-container {
    width: 380px;
    height: 450px;
    border-radius: 30px;
    overflow: hidden;
    border: 2px solid rgba(67, 97, 238, 0.3);
    box-shadow: 0 20px 50px rgba(67, 97, 238, 0.25);
    transition: all 0.5s;
    position: relative;
  }
  
  :global(body.dark-mode) .avatar-container {
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
  }
  
  .avatar-container:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(67, 97, 238, 0.35);
    border-color: rgba(67, 97, 238, 0.5);
  }
  
  :global(body.dark-mode) .avatar-container:hover {
    box-shadow: 0 30px 60px rgba(59, 130, 246, 0.4);
    border-color: rgba(96, 165, 250, 0.5);
  }
  
  .avatar-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(67, 97, 238, 0.2), transparent 70%);
    z-index: 0;
  }
  
  :global(body.dark-mode) .avatar-glow {
    background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25), transparent 70%);
  }
  
  .avatar-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(241, 245, 249, 0.8);
    color: #64748b;
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
  }
  
  .avatar-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  
  :global(body.dark-mode) .avatar-placeholder {
    background-color: rgba(30, 41, 59, 0.8);
    color: #94a3b8;
  }
  
  .about-content {
    flex: 2;
  }
  
  .about-badge {
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
  
  :global(body.dark-mode) .about-badge {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  .about-content h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.5s;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .subtitle {
    font-size: 1.3rem;
    color: #64748b;
    margin-bottom: 1.8rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.7s;
  }
  
  :global(body.dark-mode) .subtitle {
    color: #94a3b8;
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
  
  .about-text {
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.9s;
  }
  
  .about-text p {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: #475569;
  }
  
  :global(body.dark-mode) .about-text p {
    color: #cbd5e1;
  }
  
  .personal-info {
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 1.1s;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .info-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    border: 1px solid rgba(241, 245, 249, 0.8);
  }
  
  :global(body.dark-mode) .info-item {
    background-color: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .info-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(67, 97, 238, 0.1);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .info-item:hover {
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.15);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .info-label {
    font-weight: 600;
    color: #4361ee;
  }
  
  :global(body.dark-mode) .info-label {
    color: #60a5fa;
  }
  
  .info-value {
    color: #475569;
  }
  
  :global(body.dark-mode) .info-value {
    color: #cbd5e1;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 1.3s;
  }
  
  .btn {
    padding: 0.9rem 1.8rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
  }
  
  .btn.primary {
    background: linear-gradient(135deg, #4361ee, #3a0ca3);
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.25);
  }
  
  :global(body.dark-mode) .btn.primary {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
  
  .btn.primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s;
  }
  
  .btn.primary:hover::before {
    left: 100%;
  }
  
  .btn.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
  }
  
  :global(body.dark-mode) .btn.primary:hover {
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
  }
  
  .btn.secondary {
    background-color: rgba(255, 255, 255, 0.7);
    color: #4361ee;
    border: 1px solid rgba(67, 97, 238, 0.3);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  
  :global(body.dark-mode) .btn.secondary {
    background-color: rgba(30, 41, 59, 0.7);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  .btn.secondary:hover {
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(67, 97, 238, 0.15);
  }
  
  :global(body.dark-mode) .btn.secondary:hover {
    background-color: rgba(96, 165, 250, 0.15);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.25);
  }
  
  .animated-section {
    margin-bottom: 6rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .animated-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  section {
    position: relative;
    z-index: 1;
  }
  
  section h2 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
  }
  
  section h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    border-radius: 3px;
  }
  
  :global(body.dark-mode) section h2::after {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
  }
  
  .experience-grid,
  .education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .experience-card,
  .education-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(241, 245, 249, 0.8);
    transition: all 0.3s ease;
  }
  
  :global(body.dark-mode) .experience-card,
  :global(body.dark-mode) .education-card {
    background: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .experience-card:hover,
  .education-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(67, 97, 238, 0.1);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .experience-card:hover,
  :global(body.dark-mode) .education-card:hover {
    box-shadow: 0 12px 25px rgba(59, 130, 246, 0.15);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .experience-period,
  .education-period {
    color: #4361ee;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  :global(body.dark-mode) .experience-period,
  :global(body.dark-mode) .education-period {
    color: #60a5fa;
  }
  
  .experience-card h3,
  .education-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #1e293b;
  }
  
  :global(body.dark-mode) .experience-card h3,
  :global(body.dark-mode) .education-card h3 {
    color: #f8fafc;
  }
  
  .experience-card h4,
  .education-card h4 {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  :global(body.dark-mode) .experience-card h4,
  :global(body.dark-mode) .education-card h4 {
    color: #94a3b8;
  }
  
  .experience-card p,
  .education-card p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #475569;
  }
  
  :global(body.dark-mode) .experience-card p,
  :global(body.dark-mode) .education-card p {
    color: #cbd5e1;
  }
  
  .skills-interests {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 1024px) {
    .skills-interests {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    
    .about-hero {
      gap: 2rem;
    }
    
    .avatar-container {
      width: 320px;
      height: 380px;
    }
  }
  
  .skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .skills-tags span {
    padding: 0.6rem 1.2rem;
    background-color: rgba(241, 245, 249, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 2rem;
    color: #475569;
    font-weight: 500;
    transition: all 0.3s;
    border: 1px solid rgba(241, 245, 249, 0.8);
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.4s forwards;
    animation-delay: calc(0.1s * (var(--index, 0) + 5));
  }
  
  :global(body.dark-mode) .skills-tags span {
    background-color: rgba(30, 41, 59, 0.7);
    color: #cbd5e1;
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .skills-tags span:hover {
    background: linear-gradient(135deg, #4361ee, #3a0ca3);
    color: white;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 15px rgba(67, 97, 238, 0.2);
    border-color: transparent;
  }
  
  :global(body.dark-mode) .skills-tags span:hover {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    color: white;
    box-shadow: 0 8px 15px rgba(59, 130, 246, 0.3);
  }
  
  .interests-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 2rem;
    max-width: 100%;
  }
  
  .interest-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.4s forwards;
    animation-delay: calc(0.1s * (var(--index, 0) + 10));
  }
  
  .interest-icon {
    font-size: 2rem;
    width: 70px;
    height: 70px;
    background-color: rgba(241, 245, 249, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(241, 245, 249, 0.8);
  }
  
  :global(body.dark-mode) .interest-icon {
    background-color: rgba(30, 41, 59, 0.7);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .interest-item:hover .interest-icon {
    background: linear-gradient(135deg, #4361ee, #3a0ca3);
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(67, 97, 238, 0.2);
    border-color: transparent;
  }
  
  :global(body.dark-mode) .interest-item:hover .interest-icon {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
  
  @media (max-width: 900px) {
    .experience-grid,
    .education-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .personal-info {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .about-hero {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2rem;
      margin: 2rem 0 4rem;
    }
    
    .about-content h1 {
      font-size: 2.5rem;
    }
    
    .avatar-container {
      width: 300px;
      height: 350px;
    }
    
    .cta-buttons {
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn {
      min-width: 200px;
    }
    
    section h2::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    section h2 {
      display: block;
      text-align: center;
    }
    
    .experience-grid,
    .education-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .skills-interests {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .interests-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    
    .glass-shape {
      opacity: 0.3;
    }
    
    .personal-info {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .about-hero {
      margin: 1.5rem 0 3rem;
      gap: 1.5rem;
    }
    
    .about-content h1 {
      font-size: 2rem;
    }
    
    .subtitle {
      font-size: 1.1rem;
    }
    
    .avatar-container {
      width: 250px;
      height: 300px;
    }
    
    .cta-buttons {
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
    
    .btn {
      width: 100%;
      min-width: auto;
      padding: 1rem;
    }
    
    .experience-card,
    .education-card {
      padding: 1.2rem;
    }
    
    .skills-tags {
      gap: 0.8rem;
    }
    
    .skills-tags span {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
    
    .interests-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    
    .interest-icon {
      width: 60px;
      height: 60px;
      font-size: 1.8rem;
    }
    
    section h2 {
      font-size: 1.8rem;
    }
    
    .about-text p {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 360px) {
    .about-hero {
      margin: 1rem 0 2rem;
    }
    
    .about-content h1 {
      font-size: 1.8rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .avatar-container {
      width: 200px;
      height: 250px;
    }
    
    .about-text p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    .experience-card,
    .education-card {
      padding: 1rem;
    }
    
    .skills-tags span {
      padding: 0.4rem 0.8rem;
      font-size: 0.85rem;
    }
    
    .interests-container {
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
    }
    
    .interest-icon {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }
    
    .interest-item span {
      font-size: 0.9rem;
    }
    
    section h2 {
      font-size: 1.5rem;
    }
    
    .info-item {
      padding: 0.8rem;
    }
    
    .info-label,
    .info-value {
      font-size: 0.9rem;
    }
  }
</style> 