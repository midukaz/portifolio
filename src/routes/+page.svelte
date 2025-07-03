<script lang="ts">
  import { onMount } from 'svelte';
  import OptimizedImage from '$lib/components/OptimizedImage.svelte';
  
  let isVisible = false;
  let sectionsVisible = Array(4).fill(false);
  
  onMount(() => {
    isVisible = true;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt((entry.target as HTMLElement).dataset.index!);
          if (!isNaN(index)) {
            sectionsVisible[index] = true;
          }
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animated-section').forEach((section, index) => {
      (section as HTMLElement).dataset.index = index.toString();
      observer.observe(section);
    });
  });
  
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Svelte/SvelteKit', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Vue.js', level: 75 },
    { name: 'React Native', level: 70 },
    { name: 'PHP', level: 75 },
    { name: 'Laravel', level: 70 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'UI/UX Design', level: 70 },
  ];
</script>

<div class="glass-shape shape-1"></div>
<div class="glass-shape shape-2"></div>
<div class="glass-shape shape-3"></div>

<section class="hero" class:visible={isVisible}>
  <div class="hero-content">
    <div class="hero-image">
      <div class="avatar-container">
        <div class="avatar-glow"></div>
        <div class="avatar-placeholder">
          <OptimizedImage src="/assets/img/IMG_9591.jpg" alt="Foto de perfil" loading="eager" />
        </div>
      </div>
    </div>
    <div class="hero-text">
      <div class="hero-badge">Desenvolvedor Web</div>
      <h1>Olá, sou <span class="highlight">Paulo Ricardo</span></h1>
      <h2>Analista de sistemas & Desenvolvedor</h2>
      <p>Transformando ideias em experiências digitais incríveis com soluções elegantes e modernas</p>
      <div class="cta-buttons">
        <!-- <a href="/projetos" class=" primary">Ver Projetos</a> -->
        <a href="/contato" class=" secondary">Entrar em Contato</a>
      </div>
    </div>
  </div>

  <style>
    .hero-content {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      .hero-content {
        flex-direction: column;
      }
    }
  </style>
</section>

<section class="about-short animated-section" class:visible={sectionsVisible[0]}>
  <div class="section-card">
    <h2>Sobre Mim</h2>
    <p>
      Sou um Desenvolvedor e Analista de Sistemas apaixonado por criar interfaces interativas e responsivas.
      Com 4 anos de experiência em desenvolvimento front-end e back-end,
      busco constantemente aprimorar minhas habilidades e acompanhar as tecnologias mais recentes.
    </p>
    <a href="/sobre" class="read-more">Saiba mais sobre mim →</a>
  </div>
</section>

<section class="skills animated-section" class:visible={sectionsVisible[1]}>
  <h2 class="skills-title">Habilidades Técnicas</h2>
  <div class="skills-badges-grid dark-badges">
    <span class="skill-badge">HTML5</span>
    <span class="skill-badge">CSS3</span>
    <span class="skill-badge">JavaScript</span>
    <span class="skill-badge">TypeScript</span>
    <span class="skill-badge">React</span>
    <span class="skill-badge">Svelte</span>
    <span class="skill-badge">Node.js</span>
    <span class="skill-badge">Express</span>
    <span class="skill-badge">MongoDB</span>
    <span class="skill-badge">PostgreSQL</span>
    <span class="skill-badge">Git</span>
    <span class="skill-badge">Docker</span>
    <span class="skill-badge">AWS</span>
    <span class="skill-badge">UI/UX Design</span>
    <span class="skill-badge">Responsive Design</span>
  </div>
</section>

<!-- <section class="featured-projects animated-section" class:visible={sectionsVisible[2]}>
  <h2>Projetos Destacados</h2>
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-image placeholder">
        <span>Imagem do Projeto 1</span>
      </div>
      <div class="project-info">
        <h3>Projeto 1</h3>
        <p>Descrição breve do projeto e tecnologias utilizadas.</p>
        <div class="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
        <a href="/projetos/projeto-1" class="project-link">Ver detalhes →</a>
      </div>
    </div>
    
    <div class="project-card">
      <div class="project-image placeholder">
        <span>Imagem do Projeto 2</span>
      </div>
      <div class="project-info">
        <h3>Projeto 2</h3>
        <p>Descrição breve do projeto e tecnologias utilizadas.</p>
        <div class="project-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
        <a href="/projetos/projeto-2" class="project-link">Ver detalhes →</a>
      </div>
    </div>
  </div>
  <div class="view-all">
    <a href="/projetos" class=" secondary">Ver todos os projetos</a>
  </div>
</section> -->

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
  
  .shape-3 {
    top: 30vh;
    right: 20vw;
    width: 30vw;
    height: 30vh;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.03) 70%);
    animation: float 35s ease-in-out infinite alternate;
    animation-delay: -5s;
  }
  
  :global(body.dark-mode) .shape-1 {
    background: radial-gradient(circle, rgba(129, 140, 248, 0.25) 0%, rgba(129, 140, 248, 0.05) 70%);
  }
  
  :global(body.dark-mode) .shape-2 {
    background: radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0.03) 70%);
  }
  
  :global(body.dark-mode) .shape-3 {
    background: radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(96, 165, 250, 0.03) 70%);
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
  
  .hero {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin: 3rem 0 6rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s, transform 0.8s;
  }
  
  .hero.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero-content {
    flex: 1;
  }
  
  .hero-badge {
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
  
  :global(body.dark-mode) .hero-badge {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.1;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.5s;
  }
  
  .hero-content h2 {
    font-size: 1.5rem;
    color: #64748b;
    margin-bottom: 1.5rem;
    font-weight: 500;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.7s;
  }
  
  :global(body.dark-mode) .hero-content h2 {
    color: #94a3b8;
  }
  
  .highlight {
    color: #4361ee;
    position: relative;
    display: inline-block;
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
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.6;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.9s;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
    animation-delay: 1.1s;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  
  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: float 6s ease-in-out infinite alternate;
  }
  
  .avatar-container {
    width: 320px;
    height: 320px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    overflow: hidden;
    border: 2px solid rgba(67, 97, 238, 0.3);
    position: relative;
    box-shadow: 0 20px 50px rgba(67, 97, 238, 0.25);
    transition: all 0.5s, border-radius 2s;
    animation: morph 8s ease-in-out infinite alternate;
  }
  
  @keyframes morph {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 50% 50% 70% 30% / 50% 50% 30% 70%;
    }
    50% {
      border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%;
    }
    75% {
      border-radius: 40% 60% 30% 70% / 70% 30% 70% 30%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
  
  :global(body.dark-mode) .avatar-container {
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
  }
  
  .avatar-container:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 60px rgba(67, 97, 238, 0.35);
    border-color: rgba(67, 97, 238, 0.5);
  }
  
  :global(body.dark-mode) .avatar-container:hover {
    box-shadow: 0 25px 60px rgba(59, 130, 246, 0.4);
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
  
  section h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
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
  
  .section-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2.5rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(241, 245, 249, 0.8);
  }
  
  :global(body.dark-mode) .section-card {
    background: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .about-short p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .read-more {
    font-weight: 500;
    color: #4361ee;
    transition: all 0.3s;
    position: relative;
    display: inline-block;
  }
  
  :global(body.dark-mode) .read-more {
    color: #60a5fa;
  }
  
  .read-more::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    transition: width 0.3s;
  }
  
  :global(body.dark-mode) .read-more::after {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
  }
  
  .read-more:hover::after {
    width: 100%;
  }
  
  .skills {
    padding: 4rem 0;
    text-align: center;
  }
  
  .skills h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #1e293b;
  }
  
  :global(body.dark-mode) .skills h2 {
    color: #e2e8f0;
  }
  
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .skills-category {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(241, 245, 249, 0.8);
  }
  
  :global(body.dark-mode) .skills-category {
    background: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .skills-category h3 {
    font-size: 1.1rem;
    color: #4361ee;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  :global(body.dark-mode) .skills-category h3 {
    color: #60a5fa;
  }
  
  .skills-badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.8rem;
  }
  
  .skill-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.25rem;
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid rgba(67, 97, 238, 0.2);
    white-space: nowrap;
    width: fit-content;
    margin: 0 auto;
  }
  
  :global(body.dark-mode) .skill-badge {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  .skill-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.15);
  }
  
  :global(body.dark-mode) .skill-badge:hover {
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.2);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .project-card {
    border-radius: 1rem;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(241, 245, 249, 0.8);
  }
  
  :global(body.dark-mode) .project-card {
    background-color: rgba(15, 23, 42, 0.8);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(67, 97, 238, 0.15);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .project-card:hover {
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.2);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .project-image {
    height: 200px;
    overflow: hidden;
    background-color: rgba(241, 245, 249, 0.8);
    position: relative;
  }
  
  :global(body.dark-mode) .project-image {
    background-color: rgba(30, 41, 59, 0.8);
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.08);
  }
  
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
  }
  
  :global(body.dark-mode) .placeholder {
    color: #94a3b8;
  }
  
  .project-info {
    padding: 1.8rem;
  }
  
  .project-info h3 {
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
  }
  
  .project-info p {
    margin-bottom: 1.2rem;
    color: #64748b;
    line-height: 1.5;
  }
  
  :global(body.dark-mode) .project-info p {
    color: #94a3b8;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
  }
  
  .project-tags span {
    padding: 0.3rem 0.8rem;
    background-color: rgba(241, 245, 249, 0.8);
    border-radius: 2rem;
    font-size: 0.8rem;
    color: #475569;
  }
  
  :global(body.dark-mode) .project-tags span {
    background-color: rgba(30, 41, 59, 0.8);
    color: #cbd5e1;
  }
  
  .project-link {
    font-weight: 500;
    color: #4361ee;
    display: inline-block;
    position: relative;
  }
  
  :global(body.dark-mode) .project-link {
    color: #60a5fa;
  }
  
  .project-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    transition: width 0.3s;
  }
  
  :global(body.dark-mode) .project-link::after {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
  }
  
  .project-link:hover::after {
    width: 100%;
  }
  
  .view-all {
    text-align: center;
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .hero {
      flex-direction: column-reverse;
      text-align: center;
      gap: 3rem;
    }
    
    .hero-content h1 {
      font-size: 2.8rem;
    }
    
    .hero-content p {
      margin-left: auto;
      margin-right: auto;
    }
    
    .cta-buttons {
      justify-content: center;
    }
    
    section h2::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    section h2 {
      display: block;
      text-align: center;
    }
    
    .read-more {
      display: block;
      text-align: center;
    }
    
    .glass-shape {
      opacity: 0.3;
    }
    
    .skills-badges-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    
    .skill-badge {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 480px) {
    .hero-content h1 {
      font-size: 2.3rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      gap: 1rem;
    }
    
    .btn {
      width: 100%;
    }
    
    .skills-badges-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .skills-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
  }
  .skills-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #2563eb;
    border-radius: 3px;
    margin-top: 8px;
  }
  
  .skills-badges-grid.dark-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    justify-content: flex-start;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .skills-badges-grid.dark-badges .skill-badge {
    background: #fff;
    color: #222;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 2rem;
    padding: 0.7rem 2rem;
    border: none;
    box-shadow: none;
    transition: background 0.2s, color 0.2s;
  }
  
  :global(body.dark-mode) .skills-badges-grid.dark-badges .skill-badge {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }
  
  .skills-badges-grid.dark-badges .skill-badge:hover {
    background: #e5eaf1;
  }
  
  :global(body.dark-mode) .skills-badges-grid.dark-badges .skill-badge:hover {
    background: rgba(37,99,235,0.18);
  }
  
  @media (max-width: 600px) {
    .glass-shape {
      width: 90vw !important;
      max-width: 90vw !important;
      left: auto !important;
      right: auto !important;
      min-width: 0 !important;
      max-height: 40vh !important;
    }
    .skills-badges-grid.dark-badges {
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .skills-badges-grid.dark-badges .skill-badge {
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
      min-width: 0;
      max-width: 100%;
      box-sizing: border-box;
    }
    .hero {
      flex-direction: column;
      gap: 1.5rem;
      margin: 1.2rem 0 2rem;
      text-align: center;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .hero-content, .hero-image {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .section-card {
      padding: 1.2rem;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
  }
</style>
