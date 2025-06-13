<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  let isVisible = false;
  let project = null;
  
  // Lista de projetos (idealmente viria de uma API ou banco de dados)
  const projects = [
    {
      id: 'projeto-1',
      title: 'Website Responsivo',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: 'Website responsivo desenvolvido para uma empresa de design, com foco em experiência do usuário e performance.',
      longDescription: 'Este projeto envolveu o desenvolvimento de um website responsivo completo para uma empresa de design. Utilizei HTML5, CSS3 e JavaScript para criar uma experiência de usuário fluida e agradável em todos os dispositivos. O site inclui animações suaves, carregamento otimizado de imagens e integração com API de formulário de contato.',
      challenges: 'Um dos principais desafios foi criar uma experiência consistente em todos os dispositivos, desde desktops até celulares. Também foi necessário otimizar o carregamento de imagens para garantir performance mesmo em conexões mais lentas.',
      solutions: 'Implementei técnicas de design responsivo com CSS Grid e Flexbox, além de Media Queries para ajustes específicos. Para otimização de imagens, utilizei lazy loading e imagens em diferentes tamanhos com srcset.',
      results: 'O resultado foi um site que carrega rapidamente, com boa pontuação no PageSpeed Insights e uma experiência fluida em todos os dispositivos. O cliente relatou um aumento de 40% no tempo de permanência dos usuários no site.',
      image: 'placeholder',
      images: ['placeholder', 'placeholder', 'placeholder'],
      link: 'https://exemplo.com/projeto1',
      github: 'https://github.com/seunome/projeto1',
      date: 'Janeiro 2023'
    },
    {
      id: 'projeto-2',
      title: 'Aplicação React',
      category: 'app',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Aplicação web desenvolvida com React, Node.js e MongoDB para gerenciamento de tarefas e projetos.',
      longDescription: 'Esta aplicação web full-stack permite aos usuários gerenciar tarefas e projetos de forma eficiente. Desenvolvida com React no frontend e Node.js com Express no backend, utiliza MongoDB como banco de dados. Implementei autenticação JWT, upload de arquivos e dashboard com métricas em tempo real.',
      challenges: 'O maior desafio foi implementar um sistema de autenticação seguro e eficiente, além de garantir uma experiência de usuário fluida com atualizações em tempo real dos dados.',
      solutions: 'Utilizei JWT para autenticação, com tokens de refresh para melhorar a segurança. Para atualizações em tempo real, implementei Socket.io para comunicação bidirecional entre cliente e servidor.',
      results: 'A aplicação resultou em um aumento de 60% na produtividade da equipe do cliente, com melhor organização de tarefas e projetos. O tempo médio para conclusão de projetos foi reduzido em 25%.',
      image: 'placeholder',
      images: ['placeholder', 'placeholder', 'placeholder'],
      link: 'https://exemplo.com/projeto2',
      github: 'https://github.com/seunome/projeto2',
      date: 'Março 2023'
    },
    {
      id: 'projeto-3',
      title: 'E-commerce',
      category: 'web',
      tags: ['React', 'Redux', 'Stripe', 'Firebase'],
      description: 'Plataforma de e-commerce completa com sistema de pagamentos integrado e painel administrativo.',
      longDescription: 'Desenvolvi uma plataforma de e-commerce completa utilizando React com Redux para gerenciamento de estado. Integrei o sistema de pagamentos Stripe, autenticação com Firebase e um painel administrativo para gerenciamento de produtos, pedidos e clientes. O projeto também inclui funcionalidades como filtros de produtos, wishlist e histórico de pedidos.',
      challenges: 'Os desafios incluíram a implementação de um sistema de pagamento seguro, gerenciamento de estoque em tempo real e otimização de performance com um grande catálogo de produtos.',
      solutions: 'Utilizei Stripe para processamento seguro de pagamentos, Firebase Realtime Database para atualizações de estoque em tempo real e implementei técnicas de lazy loading e code splitting para melhorar a performance.',
      results: 'A plataforma proporcionou um aumento de 45% nas vendas online do cliente em comparação com sua solução anterior, além de reduzir em 30% o tempo gasto com gerenciamento de pedidos.',
      image: 'placeholder',
      images: ['placeholder', 'placeholder', 'placeholder'],
      link: 'https://exemplo.com/projeto3',
      github: 'https://github.com/seunome/projeto3',
      date: 'Junho 2023'
    },
    {
      id: 'projeto-4',
      title: 'Aplicativo Mobile',
      category: 'mobile',
      tags: ['React Native', 'Expo', 'Firebase'],
      description: 'Aplicativo mobile desenvolvido com React Native para rastreamento de atividades físicas e saúde.',
      longDescription: 'Este aplicativo mobile foi desenvolvido com React Native e Expo, permitindo aos usuários rastrear suas atividades físicas, monitorar saúde e definir metas. Utilizei Firebase para autenticação e armazenamento de dados, implementei gráficos interativos para visualização de progresso e integrei com APIs de saúde dos dispositivos.',
      challenges: 'Os principais desafios foram a integração com sensores dos dispositivos para rastreamento preciso de atividades e a sincronização de dados offline para garantir uma boa experiência mesmo sem conexão com a internet.',
      solutions: 'Utilizei as APIs nativas de saúde do iOS (HealthKit) e Android (Google Fit) para rastreamento preciso. Implementei um sistema de sincronização offline-first com Firebase para garantir que os dados fossem salvos localmente e sincronizados quando o usuário tivesse conexão.',
      results: 'O aplicativo atingiu mais de 10.000 downloads nas lojas de aplicativos com avaliação média de 4.7 estrelas. Os usuários relatam melhoria na consistência de suas atividades físicas e maior facilidade para acompanhar seu progresso.',
      image: 'placeholder',
      images: ['placeholder', 'placeholder', 'placeholder'],
      link: 'https://exemplo.com/projeto4',
      github: 'https://github.com/seunome/projeto4',
      date: 'Setembro 2023'
    },
    {
      id: 'projeto-5',
      title: 'Dashboard Administrativo',
      category: 'app',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      description: 'Dashboard administrativo com visualizações de dados, relatórios e gerenciamento de usuários.',
      longDescription: 'Dashboard administrativo completo desenvolvido com Vue.js no frontend e Express com PostgreSQL no backend. Implementei visualizações de dados com Chart.js, sistema de relatórios exportáveis em PDF e Excel, gerenciamento de usuários com diferentes níveis de permissão e um sistema robusto de logs e auditoria.',
      challenges: 'O principal desafio foi criar visualizações de dados complexas que fossem performáticas mesmo com grandes volumes de dados, além de implementar um sistema de permissões granular e seguro.',
      solutions: 'Utilizei técnicas de paginação e carregamento sob demanda para lidar com grandes volumes de dados. Para as permissões, implementei um sistema baseado em papéis (RBAC) com verificações em múltiplos níveis.',
      results: 'O dashboard permitiu que a equipe do cliente identificasse tendências importantes nos dados de negócio, resultando em decisões mais informadas e um aumento de 20% na eficiência operacional.',
      image: 'placeholder',
      images: ['placeholder', 'placeholder', 'placeholder'],
      link: 'https://exemplo.com/projeto5',
      github: 'https://github.com/seunome/projeto5',
      date: 'Novembro 2023'
    },
    {
      id: 'projeto-6',
      title: 'Website Institucional',
      category: 'web',
      tags: ['WordPress', 'PHP', 'jQuery', 'SASS'],
      description: 'Website institucional desenvolvido com WordPress personalizado para uma empresa de consultoria.',
      longDescription: 'Desenvolvi um tema WordPress totalmente personalizado para uma empresa de consultoria, com design único e funcionalidades específicas para o negócio. Criei tipos de post customizados, integrei com formulários avançados e otimizei o site para mecanismos de busca (SEO). O projeto também incluiu otimização de performance e compatibilidade com múltiplos navegadores.',
      challenges: 'Os desafios incluíram a criação de uma experiência de administração intuitiva para o cliente atualizar o conteúdo, além de garantir excelente SEO para melhorar o posicionamento nos mecanismos de busca.',
      solutions: 'Desenvolvi campos personalizados com ACF (Advanced Custom Fields) para uma experiência de edição intuitiva. Para SEO, implementei práticas recomendadas de estrutura de dados, otimização de imagens e integração com o Yoast SEO.',
      results: 'O site melhorou significativamente o posicionamento da empresa nos mecanismos de busca, com um aumento de 70% no tráfego orgânico nos primeiros 3 meses após o lançamento. O cliente consegue atualizar o conteúdo facilmente sem assistência técnica.',
      image: 'placeholder',
      images: ['placeholder', 'placeholder', 'placeholder'],
      link: 'https://exemplo.com/projeto6',
      github: 'https://github.com/seunome/projeto6',
      date: 'Dezembro 2023'
    }
  ];
  
  onMount(() => {
    // Encontrar o projeto com base no ID da URL
    const projectId = $page.params.id;
    project = projects.find(p => p.id === projectId);
    
    isVisible = true;
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  });
</script>

{#if project}
  <div class="project-details" class:visible={isVisible}>
    <div class="project-header">
      <h1>{project.title}</h1>
      <div class="project-meta">
        <span class="project-date">{project.date}</span>
        <div class="project-tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
    
    <div class="project-banner">
      <div class="image-placeholder">
        <span>Imagem principal do projeto</span>
      </div>
    </div>
    
    <div class="project-content">
      <div class="project-info">
        <section class="info-section">
          <h2>Sobre o Projeto</h2>
          <p>{project.longDescription}</p>
        </section>
        
        <section class="info-section">
          <h2>Desafios</h2>
          <p>{project.challenges}</p>
        </section>
        
        <section class="info-section">
          <h2>Soluções</h2>
          <p>{project.solutions}</p>
        </section>
        
        <section class="info-section">
          <h2>Resultados</h2>
          <p>{project.results}</p>
        </section>
      </div>
      
      <div class="project-sidebar">
        <div class="sidebar-card">
          <h3>Informações</h3>
          <ul class="project-details-list">
            <li>
              <span class="detail-label">Categoria:</span>
              <span class="detail-value">{project.category === 'web' ? 'Website' : project.category === 'app' ? 'Aplicação Web' : 'Aplicativo Mobile'}</span>
            </li>
            <li>
              <span class="detail-label">Data:</span>
              <span class="detail-value">{project.date}</span>
            </li>
          </ul>
          
          <div class="project-links">
            {#if project.link}
              <a href={project.link} target="_blank" rel="noopener noreferrer" class="btn primary">
                Ver Demo
              </a>
            {/if}
            
            {#if project.github}
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="btn secondary">
                Ver Código
              </a>
            {/if}
          </div>
        </div>
        
        <div class="sidebar-card">
          <h3>Tecnologias Utilizadas</h3>
          <div class="technologies">
            {#each project.tags as tech}
              <span class="technology">{tech}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
    
    <section class="project-gallery">
      <h2>Galeria do Projeto</h2>
      <div class="gallery-grid">
        {#each project.images as image, index}
          <div class="gallery-item">
            <div class="image-placeholder">
              <span>Imagem {index + 1} do projeto</span>
            </div>
          </div>
        {/each}
      </div>
    </section>
    
    <div class="navigation-links">
      <a href="/projetos" class="nav-link">← Voltar para Projetos</a>
      <a href="/contato" class="nav-link">Contato →</a>
    </div>
  </div>
{:else}
  <div class="project-not-found">
    <h1>Projeto não encontrado</h1>
    <p>O projeto que você está procurando não existe ou foi removido.</p>
    <a href="/projetos" class="btn primary">Voltar para Projetos</a>
  </div>
{/if}

<style>
  .project-details {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s, transform 0.6s;
  }
  
  .project-details.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .project-header {
    margin-bottom: 2rem;
  }
  
  .project-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .project-meta {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .project-date {
    color: #6c757d;
    font-weight: 500;
  }
  
  :global(body.dark-mode) .project-date {
    color: #adb5bd;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tag {
    padding: 0.3rem 0.6rem;
    background-color: #e9ecef;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    color: #495057;
  }
  
  :global(body.dark-mode) .tag {
    background-color: #343a40;
    color: #ced4da;
  }
  
  .project-banner {
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  :global(body.dark-mode) .project-banner {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .image-placeholder {
    height: 400px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6c757d;
    font-size: 1.2rem;
  }
  
  :global(body.dark-mode) .image-placeholder {
    background-color: #343a40;
    color: #adb5bd;
  }
  
  .project-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .project-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .info-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #212529;
    position: relative;
    display: inline-block;
  }
  
  :global(body.dark-mode) .info-section h2 {
    color: #e9ecef;
  }
  
  .info-section h2::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 3px;
    background-color: #4361ee;
    border-radius: 2px;
  }
  
  :global(body.dark-mode) .info-section h2::after {
    background-color: #90e0ef;
  }
  
  .info-section p {
    line-height: 1.6;
    color: #495057;
  }
  
  :global(body.dark-mode) .info-section p {
    color: #adb5bd;
  }
  
  .project-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .sidebar-card {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  :global(body.dark-mode) .sidebar-card {
    background-color: #2a2a2a;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .sidebar-card h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #212529;
  }
  
  :global(body.dark-mode) .sidebar-card h3 {
    color: #e9ecef;
  }
  
  .project-details-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }
  
  .project-details-list li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #e9ecef;
  }
  
  :global(body.dark-mode) .project-details-list li {
    border-bottom-color: #343a40;
  }
  
  .detail-label {
    font-weight: 600;
    color: #6c757d;
  }
  
  :global(body.dark-mode) .detail-label {
    color: #adb5bd;
  }
  
  .project-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .btn {
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
  }
  
  .btn.primary {
    background-color: #4361ee;
    color: white;
    border: none;
  }
  
  :global(body.dark-mode) .btn.primary {
    background-color: #90e0ef;
    color: #212529;
  }
  
  .btn.primary:hover {
    background-color: #3a56d4;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
  }
  
  :global(body.dark-mode) .btn.primary:hover {
    background-color: #73c7d7;
    box-shadow: 0 5px 15px rgba(144, 224, 239, 0.3);
  }
  
  .btn.secondary {
    background-color: transparent;
    color: #4361ee;
    border: 2px solid #4361ee;
  }
  
  :global(body.dark-mode) .btn.secondary {
    color: #90e0ef;
    border-color: #90e0ef;
  }
  
  .btn.secondary:hover {
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-2px);
  }
  
  :global(body.dark-mode) .btn.secondary:hover {
    background-color: rgba(144, 224, 239, 0.1);
  }
  
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  .technology {
    padding: 0.5rem 1rem;
    background-color: #f1f3f5;
    border-radius: 0.3rem;
    color: #495057;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  :global(body.dark-mode) .technology {
    background-color: #343a40;
    color: #ced4da;
  }
  
  .project-gallery {
    margin-bottom: 3rem;
  }
  
  .project-gallery h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
  }
  
  .project-gallery h2::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 3px;
    background-color: #4361ee;
    border-radius: 2px;
  }
  
  :global(body.dark-mode) .project-gallery h2::after {
    background-color: #90e0ef;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .gallery-item {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  :global(body.dark-mode) .gallery-item {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  :global(body.dark-mode) .gallery-item:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }
  
  .gallery-item .image-placeholder {
    height: 200px;
  }
  
  .navigation-links {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e9ecef;
  }
  
  :global(body.dark-mode) .navigation-links {
    border-top-color: #343a40;
  }
  
  .nav-link {
    color: #4361ee;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s;
  }
  
  :global(body.dark-mode) .nav-link {
    color: #90e0ef;
  }
  
  .nav-link:hover {
    color: #3a56d4;
    text-decoration: underline;
  }
  
  :global(body.dark-mode) .nav-link:hover {
    color: #73c7d7;
  }
  
  .project-not-found {
    text-align: center;
    padding: 4rem 0;
  }
  
  .project-not-found h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .project-not-found p {
    color: #6c757d;
    margin-bottom: 2rem;
  }
  
  :global(body.dark-mode) .project-not-found p {
    color: #adb5bd;
  }
  
  @media (max-width: 768px) {
    .project-content {
      grid-template-columns: 1fr;
    }
    
    .project-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }
</style> 