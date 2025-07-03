<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let isVisible = false;
  let activeFilter = 'todos';
  let sectionsVisible: boolean[] = [];
  
  onMount(() => {
    if (browser) {
      isVisible = true;
      window.scrollTo(0, 0);
      
      // Intersection Observer para animações
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as Element;
            const index = parseInt(element.getAttribute('data-section') || '0');
            sectionsVisible[index] = true;
            sectionsVisible = [...sectionsVisible];
          }
        });
      }, { threshold: 0.1 });
      
      // Observar seções
      const sections = document.querySelectorAll('.animated-section');
      sections.forEach((section, index) => {
        section.setAttribute('data-section', index.toString());
        observer.observe(section);
      });
      
      return () => observer.disconnect();
    }
  });
  
  const projects = [
    {
      id: 'projeto-1',
      title: 'Website Responsivo',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: 'Website responsivo desenvolvido para uma empresa de design, com foco em experiência do usuário e performance.',
      longDescription: 'Este projeto envolveu o desenvolvimento de um website responsivo completo para uma empresa de design. Utilizei HTML5, CSS3 e JavaScript para criar uma experiência de usuário fluida e agradável em todos os dispositivos. O site inclui animações suaves, carregamento otimizado de imagens e integração com API de formulário de contato.',
      image: 'placeholder',
      link: 'https://exemplo.com/projeto1',
      github: 'https://github.com/seunome/projeto1'
    },
    {
      id: 'projeto-2',
      title: 'Aplicação React',
      category: 'app',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Aplicação web desenvolvida com React, Node.js e MongoDB para gerenciamento de tarefas e projetos.',
      longDescription: 'Esta aplicação web full-stack permite aos usuários gerenciar tarefas e projetos de forma eficiente. Desenvolvida com React no frontend e Node.js com Express no backend, utiliza MongoDB como banco de dados. Implementei autenticação JWT, upload de arquivos e dashboard com métricas em tempo real.',
      image: 'placeholder',
      link: 'https://exemplo.com/projeto2',
      github: 'https://github.com/seunome/projeto2'
    },
    {
      id: 'projeto-3',
      title: 'E-commerce',
      category: 'web',
      tags: ['React', 'Redux', 'Stripe', 'Firebase'],
      description: 'Plataforma de e-commerce completa com sistema de pagamentos integrado e painel administrativo.',
      longDescription: 'Desenvolvi uma plataforma de e-commerce completa utilizando React com Redux para gerenciamento de estado. Integrei o sistema de pagamentos Stripe, autenticação com Firebase e um painel administrativo para gerenciamento de produtos, pedidos e clientes. O projeto também inclui funcionalidades como filtros de produtos, wishlist e histórico de pedidos.',
      image: 'placeholder',
      link: 'https://exemplo.com/projeto3',
      github: 'https://github.com/seunome/projeto3'
    },
    {
      id: 'projeto-4',
      title: 'Aplicativo Mobile',
      category: 'mobile',
      tags: ['React Native', 'Expo', 'Firebase'],
      description: 'Aplicativo mobile desenvolvido com React Native para rastreamento de atividades físicas e saúde.',
      longDescription: 'Este aplicativo mobile foi desenvolvido com React Native e Expo, permitindo aos usuários rastrear suas atividades físicas, monitorar saúde e definir metas. Utilizei Firebase para autenticação e armazenamento de dados, implementei gráficos interativos para visualização de progresso e integrei com APIs de saúde dos dispositivos.',
      image: 'placeholder',
      link: 'https://exemplo.com/projeto4',
      github: 'https://github.com/seunome/projeto4'
    },
    {
      id: 'projeto-5',
      title: 'Dashboard Administrativo',
      category: 'app',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      description: 'Dashboard administrativo com visualizações de dados, relatórios e gerenciamento de usuários.',
      longDescription: 'Dashboard administrativo completo desenvolvido com Vue.js no frontend e Express com PostgreSQL no backend. Implementei visualizações de dados com Chart.js, sistema de relatórios exportáveis em PDF e Excel, gerenciamento de usuários com diferentes níveis de permissão e um sistema robusto de logs e auditoria.',
      image: 'placeholder',
      link: 'https://exemplo.com/projeto5',
      github: 'https://github.com/seunome/projeto5'
    },
    {
      id: 'projeto-6',
      title: 'Website Institucional',
      category: 'web',
      tags: ['WordPress', 'PHP', 'jQuery', 'SASS'],
      description: 'Website institucional desenvolvido com WordPress personalizado para uma empresa de consultoria.',
      longDescription: 'Desenvolvi um tema WordPress totalmente personalizado para uma empresa de consultoria, com design único e funcionalidades específicas para o negócio. Criei tipos de post customizados, integrei com formulários avançados e otimizei o site para mecanismos de busca (SEO). O projeto também incluiu otimização de performance e compatibilidade com múltiplos navegadores.',
      image: 'placeholder',
      link: 'https://exemplo.com/projeto6',
      github: 'https://github.com/seunome/projeto6'
    }
  ];
  
  function filterProjects(category) {
    activeFilter = category;
    return category === 'todos' 
      ? projects 
      : projects.filter(p => p.category === category);
  }
  
  $: filteredProjects = filterProjects(activeFilter);
  
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'app', name: 'Aplicações' },
    { id: 'mobile', name: 'Mobile' }
  ];
</script>

<!-- Formas de fundo glassmorphism -->
<div class="glass-shape shape-1"></div>
<div class="glass-shape shape-2"></div>
<div class="glass-shape shape-3"></div>

<section class="projects-header animated-section" class:visible={sectionsVisible[0]}>
  <div class="projects-badge">💼 Portfólio</div>
  <h1>
    <span class="highlight">Projetos</span></h1>
  <p class="subtitle">Uma seleção dos meus trabalhos recentes e mais relevantes</p>
  
  <div class="filter-tabs">
    {#each categories as category}
      <button 
        class="filter-tab" 
        class:active={activeFilter === category.id} 
        on:click={() => activeFilter = category.id}
      >
        {category.name}
      </button>
    {/each}
  </div>
</section>

<section class="projects-grid animated-section" class:visible={sectionsVisible[1]}>
  {#each filteredProjects as project, index}
    <div class="project-card" style="animation-delay: {index * 0.1}s">
      <div class="project-image placeholder">
        <span>Imagem do {project.title}</span>
        <div class="project-overlay">
          <div class="overlay-content">
            <div class="external-links">
              {#if project.github}
                <a href={project.github} target="_blank" rel="noopener noreferrer" class="icon-link github-link">
                  <span>🔗</span>
                </a>
              {/if}
              {#if project.link}
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="icon-link live-link">
                  <span>🚀</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      </div>
      <div class="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div class="project-tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
        <div class="project-links">
          <a href={`/projetos/${project.id}`} class="project-link">Ver detalhes →</a>
        </div>
      </div>
    </div>
  {/each}
</section>

<section class="contact-cta animated-section" class:visible={sectionsVisible[2]}>
  <div class="cta-content">
    <h2>Interessado em trabalharmos juntos?</h2>
    <p>Se você gostou dos meus projetos e está interessado em colaborar, entre em contato!</p>
    <a href="/contato" class="btn primary">Entre em Contato</a>
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
  
  .shape-3 {
    top: 50vh;
    right: 10vw;
    width: 35vw;
    height: 35vh;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.03) 70%);
    animation: float 35s ease-in-out infinite alternate;
    animation-delay: -10s;
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
  
  .animated-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .animated-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .projects-header {
    text-align: center;
    margin: 3rem 0 5rem;
  }
  
  .projects-badge {
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
  }
  
  :global(body.dark-mode) .projects-badge {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  .projects-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 1.1;
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
  
  .subtitle {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
  }
  
  :global(body.dark-mode) .subtitle {
    color: #94a3b8;
  }
  
  .filter-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
  
  .filter-tab {
    padding: 0.7rem 1.5rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: #475569;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(241, 245, 249, 0.8);
    position: relative;
    overflow: hidden;
  }
  
  :global(body.dark-mode) .filter-tab {
    background-color: rgba(30, 41, 59, 0.7);
    color: #cbd5e1;
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .filter-tab::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s;
  }
  
  .filter-tab:hover::before {
    left: 100%;
  }
  
  .filter-tab:hover {
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(67, 97, 238, 0.15);
    border-color: rgba(67, 97, 238, 0.3);
  }
  
  :global(body.dark-mode) .filter-tab:hover {
    background-color: rgba(96, 165, 250, 0.15);
    box-shadow: 0 8px 20px rgba(96, 165, 250, 0.2);
    border-color: rgba(96, 165, 250, 0.3);
  }
  
  .filter-tab.active {
    background: linear-gradient(135deg, #4361ee, #3a0ca3);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
  }
  
  :global(body.dark-mode) .filter-tab.active {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    box-shadow: 0 4px 15px rgba(96, 165, 250, 0.4);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;
  }
  
  .project-card {
    border-radius: 1.2rem;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(241, 245, 249, 0.8);
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s forwards;
  }
  
  :global(body.dark-mode) .project-card {
    background-color: rgba(15, 23, 42, 0.7);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(67, 97, 238, 0.15);
    border-color: rgba(67, 97, 238, 0.2);
  }
  
  :global(body.dark-mode) .project-card:hover {
    box-shadow: 0 20px 40px rgba(96, 165, 250, 0.2);
    border-color: rgba(96, 165, 250, 0.2);
  }
  
  .project-image {
    height: 220px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(125, 60, 152, 0.1));
    position: relative;
  }
  
  :global(body.dark-mode) .project-image {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(167, 139, 250, 0.15));
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.08);
  }
  
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  :global(body.dark-mode) .placeholder {
    color: #94a3b8;
  }
  
  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.8), rgba(125, 60, 152, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  
  :global(body.dark-mode) .project-overlay {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.8), rgba(167, 139, 250, 0.8));
  }
  
  .project-card:hover .project-overlay {
    opacity: 1;
  }
  
  .overlay-content {
    text-align: center;
  }
  
  .external-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .icon-link {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .icon-link:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .icon-link span {
    font-size: 1.2rem;
  }
  
  .project-info {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-info h3 {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #1e293b;
  }
  
  :global(body.dark-mode) .project-info h3 {
    color: #f8fafc;
  }
  
  .project-info p {
    margin-bottom: 1.5rem;
    color: #64748b;
    flex-grow: 1;
    line-height: 1.6;
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
  
  .tag {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(125, 60, 152, 0.1));
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #4361ee;
    border: 1px solid rgba(67, 97, 238, 0.2);
    transition: all 0.3s;
  }
  
  :global(body.dark-mode) .tag {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(167, 139, 250, 0.15));
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
  }
  
  .tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(67, 97, 238, 0.15);
  }
  
  :global(body.dark-mode) .tag:hover {
    box-shadow: 0 4px 8px rgba(96, 165, 250, 0.2);
  }
  
  .project-links {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: auto;
  }
  
  .project-link {
    font-weight: 600;
    color: #4361ee;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
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
    height: 2px;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    transition: width 0.3s;
  }
  
  :global(body.dark-mode) .project-link::after {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
  }
  
  .project-link:hover::after {
    width: 100%;
  }
  
  .project-link:hover {
    transform: translateX(5px);
  }
  
  .contact-cta {
    margin: 6rem 0 4rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 4rem 2rem;
    border-radius: 1.5rem;
    text-align: center;
    border: 1px solid rgba(241, 245, 249, 0.8);
    position: relative;
    overflow: hidden;
  }
  
  :global(body.dark-mode) .contact-cta {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(30, 41, 59, 0.8);
  }
  
  .contact-cta::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(67, 97, 238, 0.05) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: -1;
  }
  
  :global(body.dark-mode) .contact-cta::before {
    background: radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%);
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .cta-content h2 {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    background: linear-gradient(135deg, #1e293b, #4361ee);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  :global(body.dark-mode) .cta-content h2 {
    background: linear-gradient(135deg, #f8fafc, #60a5fa);
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  .cta-content p {
    font-size: 1.2rem;
    color: #64748b;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
  
  :global(body.dark-mode) .cta-content p {
    color: #94a3b8;
  }
  
  .btn {
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
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
    box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
  }
  
  :global(body.dark-mode) .btn.primary {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    box-shadow: 0 4px 15px rgba(96, 165, 250, 0.4);
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
    box-shadow: 0 8px 25px rgba(67, 97, 238, 0.4);
  }
  
  :global(body.dark-mode) .btn.primary:hover {
    box-shadow: 0 8px 25px rgba(96, 165, 250, 0.5);
  }
  
  @media (max-width: 768px) {
    .projects-header h1 {
      font-size: 2.2rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .project-card {
      margin: 0 1rem;
    }
    
    .project-info {
      padding: 1.5rem;
    }
    
    .filter-tabs {
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    
    .filter-tab {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
    
    .contact-cta {
      margin: 4rem 1rem 2rem;
      padding: 3rem 1.5rem;
    }
    
    .cta-content h2 {
      font-size: 1.8rem;
    }
    
    .cta-content p {
      font-size: 1rem;
    }
    
    .btn {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    .projects-header h1 {
      font-size: 1.8rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .projects-grid {
      gap: 1.5rem;
    }
    
    .project-card {
      margin: 0 0.5rem;
    }
    
    .filter-tabs {
      flex-direction: column;
      align-items: center;
    }
    
    .filter-tab {
      width: 200px;
      text-align: center;
    }
  }
</style> 