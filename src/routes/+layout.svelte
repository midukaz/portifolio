<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  
  let isDarkMode = false;
  let mobileMenuOpen = false;
  let scrollY = 0;
  
  onMount(() => {
    if (browser) {
      const savedTheme = localStorage.getItem('theme');
      isDarkMode = savedTheme === 'dark';
      applyTheme();
    }
  });
  
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (browser) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      applyTheme();
    }
  }
  
  function applyTheme() {
    if (browser) {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<!-- <svelte:window bind:scrollY={scrollY} /> -->

<div class="gradient-blob"></div>
<div class="gradient-blob blob-2"></div>

<!-- Navbar Moderno -->
<nav class="modern-navbar">
  <div class="navbar-container">
    <!-- Logo/Brand -->
    <div class="navbar-brand">
      <a href="/" class="brand-link">
        <span class="brand-primary">Mi</span>
        <span class="brand-accent">Dukaz</span>
      </a>
    </div>
    
    <!-- Navigation Links (Desktop) -->
    <div class="navbar-menu-desktop">
      <a href="/" class="nav-item" class:active={$page?.url?.pathname === '/'}>
        <span class="nav-label">Início</span>
        <div class="nav-indicator"></div>
      </a>
      <a href="/sobre" class="nav-item" class:active={$page?.url?.pathname === '/sobre'}>
        <span class="nav-label">Sobre</span>
        <div class="nav-indicator"></div>
      </a>
      <!-- <a href="/projetos" class="nav-item" class:active={$page?.url?.pathname?.startsWith('/projetos')}>
        <span class="nav-label">Projetos</span>
        <div class="nav-indicator"></div>
      </a> -->
      <a href="/contato" class="nav-item" class:active={$page?.url?.pathname === '/contato'}>
        <span class="nav-label">Contato</span>
        <div class="nav-indicator"></div>
      </a>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" class:active={mobileMenuOpen}>
      <div class="mobile-menu-header">
        <div class="mobile-brand">
          <span class="brand-primary">Meu</span>
          <span class="brand-accent">Portfólio</span>
        </div>
        <button class="mobile-close-btn" on:click={toggleMobileMenu} aria-label="Fechar menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav class="mobile-nav">
        <a href="/" class="mobile-nav-item" class:active={$page?.url?.pathname === '/'} on:click={() => mobileMenuOpen = false}>
          <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Início</span>
        </a>
        <a href="/sobre" class="mobile-nav-item" class:active={$page?.url?.pathname === '/sobre'} on:click={() => mobileMenuOpen = false}>
          <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
          </svg>
          <span>Sobre</span>
        </a>
        <a href="/projetos" class="mobile-nav-item" class:active={$page?.url?.pathname?.startsWith('/projetos')} on:click={() => mobileMenuOpen = false}>
          <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>Projetos</span>
        </a>
        <a href="/contato" class="mobile-nav-item" class:active={$page?.url?.pathname === '/contato'} on:click={() => mobileMenuOpen = false}>
          <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>Contato</span>
        </a>
      </nav>
      <div class="mobile-menu-footer">
        <div class="mobile-theme-toggle">
                     <button class="mobile-theme-btn" on:click={toggleTheme}>
            {#if isDarkMode}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              <span>Modo Claro</span>
            {:else}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <span>Modo Escuro</span>
            {/if}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Actions -->
    <div class="navbar-actions">
      <!-- Theme Toggle -->
      <button class="theme-btn" on:click={toggleTheme} aria-label="Alternar tema">
        {#if isDarkMode}
          <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {:else}
          <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {/if}
      </button>
      
      <!-- Mobile Menu Button -->
      <button class="mobile-btn" on:click={toggleMobileMenu} aria-label="Menu">
        <div class="hamburger-lines" class:active={mobileMenuOpen}>
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </div>
      </button>
    </div>
  </div>
  
  <!-- Mobile Backdrop -->
  <div class="mobile-backdrop" class:active={mobileMenuOpen} on:click={toggleMobileMenu}></div>
</nav>

<main>
  <slot />
</main>

<div class="social-links">
  <a href="#" class="social-link" aria-label="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#222"/></svg>
  </a>
  <a href="#" class="social-link" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#222"/>
      <rect x="2" y="9" width="4" height="12" stroke="#222"/>
      <circle cx="4" cy="4" r="2" stroke="#222"/>
    </svg>
  </a>
  <a href="#" class="social-link" aria-label="Twitter">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="#222"/>
    </svg>
  </a>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    color: #212529;
    transition: background-color 0.3s, color 0.3s;

    position: relative;
  }
  
  :global(body.dark-mode) {
    background-color: #0f172a;
    color: #e9ecef;
  }
  
  :global(a) {
    color: #4361ee;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  :global(body.dark-mode) :global(a) {
    color: #60a5fa;
  }
  
  .gradient-blob {
    position: fixed;
    top: -20vh;
    right: -10vw;
    width: 50vw;
    height: 50vh;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(79, 70, 229, 0) 70%);
    border-radius: 50%;
    filter: blur(60px);
    z-index: -1;
    animation: float 20s ease-in-out infinite alternate;
  }
  
  .blob-2 {
    bottom: -20vh;
    left: -10vw;
    top: auto;
    right: auto;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%);
    animation-delay: -5s;
  }
  
  :global(body.dark-mode) .gradient-blob {
    background: radial-gradient(circle, rgba(129, 140, 248, 0.2) 0%, rgba(129, 140, 248, 0) 70%);
  }
  
  :global(body.dark-mode) .blob-2 {
    background: radial-gradient(circle, rgba(244, 114, 182, 0.2) 0%, rgba(244, 114, 182, 0) 70%);
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(5%, 5%) scale(1.05);
    }
    100% {
      transform: translate(-5%, -5%) scale(0.95);
    }
  }
  
     /* ===== NAVBAR MODERNO ===== */
   .modern-navbar {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 1000;
     background: rgba(255, 255, 255, 0.85);
     backdrop-filter: blur(20px) saturate(180%);
     -webkit-backdrop-filter: blur(20px) saturate(180%);
     border-bottom: 1px solid rgba(255, 255, 255, 0.2);
     box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
   }
   
   :global(body.dark-mode) .modern-navbar {
     background: rgba(15, 23, 42, 0.85);
     border-bottom: 1px solid rgba(255, 255, 255, 0.1);
     box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
   }
   
   .navbar-container {
     max-width: 1200px;
     margin: 0 auto;
     padding: 0 2rem;
     display: flex;
     align-items: center;
     justify-content: space-between;
     height: 75px;
   }
   
   /* ===== BRAND/LOGO ===== */
   .navbar-brand {
     flex-shrink: 0;
   }
   
   .brand-link {
     display: flex;
     align-items: center;
     text-decoration: none;
     font-size: 1.75rem;
     font-weight: 800;
     letter-spacing: -0.025em;
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
   }
   
   .brand-link:hover {
     transform: translateY(-1px);
   }
   
   .brand-primary {
     color: #1e293b;
     margin-right: 0.1em;
   }
   
   .brand-accent {
     background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
     background-size: 200% 200%;
     animation: gradient-shift 3s ease-in-out infinite;
   }
   
   :global(body.dark-mode) .brand-primary {
     color: #f8fafc;
   }
   
   @keyframes gradient-shift {
     0%, 100% { background-position: 0% 50%; }
     50% { background-position: 100% 50%; }
   }
   
   /* ===== NAVIGATION MENU (DESKTOP) ===== */
   .navbar-menu-desktop {
     display: flex;
     align-items: center;
     gap: 2.5rem;
   }
   
   .nav-item {
     position: relative;
     text-decoration: none;
     color: #64748b;
     font-weight: 500;
     font-size: 0.95rem;
     padding: 0.75rem 0;
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     overflow: hidden;
   }
   
   .nav-label {
     position: relative;
     z-index: 2;
     transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
   }
   
   .nav-indicator {
     position: absolute;
     bottom: 0;
     left: 50%;
     width: 0;
     height: 3px;
     background: linear-gradient(90deg, #6366f1, #8b5cf6);
     border-radius: 2px;
     transform: translateX(-50%);
     transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
   }
   
   .nav-item:hover {
     color: #1e293b;
   }
   
   .nav-item:hover .nav-label {
     transform: translateY(-1px);
   }
   
   .nav-item:hover .nav-indicator,
   .nav-item.active .nav-indicator {
     width: 100%;
   }
   
   .nav-item.active {
     color: #1e293b;
     font-weight: 600;
   }
   
   :global(body.dark-mode) .nav-item {
     color: #94a3b8;
   }
   
   :global(body.dark-mode) .nav-item:hover,
   :global(body.dark-mode) .nav-item.active {
     color: #f1f5f9;
   }
   
   /* ===== MOBILE MENU ===== */
   .mobile-menu {
     position: fixed;
     top: 0;
     right: 0;
     width: 85%;
     max-width: 360px;
     height: 100vh;
     background: rgba(255, 255, 255, 0.95);
     backdrop-filter: blur(10px) saturate(180%);
     -webkit-backdrop-filter: blur(10px) saturate(180%);
     box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
     z-index: 1001;
     display: flex;
     flex-direction: column;
     transform: translateX(100%);
     transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
     overflow-y: auto;
   }
   
   .mobile-menu.active {
     transform: translateX(0);
   }
   
   :global(body.dark-mode) .mobile-menu {
     background: rgba(15, 23, 42, 0.95);
     box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
   }
   
   .mobile-menu-header {
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 1.5rem;
     border-bottom: 1px solid rgba(0, 0, 0, 0.05);
   }
   
   :global(body.dark-mode) .mobile-menu-header {
     border-bottom: 1px solid rgba(255, 255, 255, 0.05);
   }
   
   .mobile-brand {
     font-size: 1.5rem;
     font-weight: 700;
   }
   
   .mobile-close-btn {
     background: none;
     border: none;
     width: 40px;
     height: 40px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 50%;
     cursor: pointer;
     color: #64748b;
     transition: all 0.2s ease;
   }
   
   .mobile-close-btn:hover {
     background: rgba(0, 0, 0, 0.05);
     color: #1e293b;
   }
   
   :global(body.dark-mode) .mobile-close-btn:hover {
     background: rgba(255, 255, 255, 0.05);
     color: #f1f5f9;
   }
   
   .mobile-close-btn svg {
     width: 24px;
     height: 24px;
   }
   
   .mobile-nav {
     flex: 1;
     padding: 1.5rem;
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
   }
   
        .mobile-nav-item {
       display: flex;
       align-items: center;
       gap: 1rem;
       padding: 1rem;
       border-radius: 12px;
       text-decoration: none;
       color: #64748b;
       font-weight: 500;
       font-size: 1rem;
       transition: all 0.2s ease;
     }
   
   .mobile-nav-item:hover {
     background: rgba(0, 0, 0, 0.03);
     color: #1e293b;
   }
   
   .mobile-nav-item.active {
     background: rgba(99, 102, 241, 0.1);
     color: #6366f1;
     font-weight: 600;
   }
   
   :global(body.dark-mode) .mobile-nav-item {
     color: #94a3b8;
   }
   
   :global(body.dark-mode) .mobile-nav-item:hover {
     background: rgba(255, 255, 255, 0.03);
     color: #f1f5f9;
   }
   
   :global(body.dark-mode) .mobile-nav-item.active {
     background: rgba(129, 140, 248, 0.1);
     color: #818cf8;
   }
   
        .mobile-nav-icon {
       width: 22px;
       height: 22px;
       flex-shrink: 0;
       stroke-width: 1.75;
       stroke-linecap: round;
       stroke-linejoin: round;
     }
   
   .mobile-menu-footer {
     padding: 1.5rem;
     border-top: 1px solid rgba(0, 0, 0, 0.05);
   }
   
   :global(body.dark-mode) .mobile-menu-footer {
     border-top: 1px solid rgba(255, 255, 255, 0.05);
   }
   
   .mobile-theme-toggle {
     display: flex;
     justify-content: center;
   }
   
   .mobile-theme-btn {
     display: flex;
     align-items: center;
     gap: 0.75rem;
     padding: 0.75rem 1.5rem;
     background: rgba(0, 0, 0, 0.03);
     border: none;
     border-radius: 12px;
     color: #64748b;
     font-weight: 500;
     cursor: pointer;
     transition: all 0.2s ease;
   }
   
   .mobile-theme-btn:hover {
     background: rgba(0, 0, 0, 0.05);
     color: #1e293b;
   }
   
   :global(body.dark-mode) .mobile-theme-btn {
     background: rgba(255, 255, 255, 0.05);
     color: #94a3b8;
   }
   
   :global(body.dark-mode) .mobile-theme-btn:hover {
     background: rgba(255, 255, 255, 0.08);
     color: #f1f5f9;
   }
   
   .mobile-theme-btn svg {
     width: 20px;
     height: 20px;
   }
   
   /* ===== NAVBAR ACTIONS ===== */
   .navbar-actions {
     display: flex;
     align-items: center;
     gap: 1rem;
   }
   
   /* ===== THEME TOGGLE ===== */
   .theme-btn {
     background: none;
     border: none;
     cursor: pointer;
     padding: 0.5rem;
     border-radius: 50%;
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     background: rgba(241, 245, 249, 0.8);
     min-width: 44px;
     min-height: 44px;
     display: flex;
     align-items: center;
     justify-content: center;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
   }
   
   .theme-btn:hover {
     background: rgba(226, 232, 240, 0.9);
     transform: translateY(-2px);
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   }
   
   .theme-btn:active {
     transform: translateY(0);
   }
   
   :global(body.dark-mode) .theme-btn {
     background: rgba(51, 65, 85, 0.8);
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
   }
   
   :global(body.dark-mode) .theme-btn:hover {
     background: rgba(71, 85, 105, 0.9);
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
   }
   
   .theme-icon {
     width: 20px;
     height: 20px;
     color: #64748b;
     transition: all 0.3s ease;
   }
   
   :global(body.dark-mode) .theme-icon {
     color: #e2e8f0;
   }
   
   /* ===== MOBILE BUTTON ===== */
   .mobile-btn {
     display: none;
     background: rgba(99, 102, 241, 0.08);
     border: 1px solid rgba(99, 102, 241, 0.15);
     cursor: pointer;
     padding: 0.45rem;
     border-radius: 10px;
     transition: all 0.2s ease;
     min-width: 38px;
     min-height: 38px;
     align-items: center;
     justify-content: center;
     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
   }
   
   .mobile-btn:hover {
     background: rgba(99, 102, 241, 0.15);
     transform: translateY(-1px);
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
   }
   
   :global(body.dark-mode) .mobile-btn {
     background: rgba(129, 140, 248, 0.08);
     border: 1px solid rgba(129, 140, 248, 0.15);
     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
   }
   
   :global(body.dark-mode) .mobile-btn:hover {
     background: rgba(129, 140, 248, 0.15);
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   }
   
   .hamburger-lines {
     position: relative;
     width: 24px;
     height: 18px;
   }
   
   .line {
     position: absolute;
     left: 0;
     width: 100%;
     height: 2px;
     background: #6366f1;
     border-radius: 4px;
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     box-shadow: 0 0 2px rgba(99, 102, 241, 0.3);
   }
   
   :global(body.dark-mode) .line {
     background: #818cf8;
     box-shadow: 0 0 3px rgba(129, 140, 248, 0.5);
   }
   
   .line-1 { top: 0; }
   .line-2 { top: 50%; transform: translateY(-50%); }
   .line-3 { bottom: 0; }
   
   .hamburger-lines.active .line-1 {
     transform: rotate(45deg);
     top: 50%;
     margin-top: -1px;
   }
   
   .hamburger-lines.active .line-2 {
     opacity: 0;
   }
   
   .hamburger-lines.active .line-3 {
     transform: rotate(-45deg);
     bottom: 50%;
     margin-bottom: -1px;
   }
   
   /* ===== MOBILE BACKDROP ===== */
   .mobile-backdrop {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0, 0, 0, 0.5);
     backdrop-filter: blur(4px);
     -webkit-backdrop-filter: blur(4px);
     z-index: 999;
     opacity: 0;
     pointer-events: none;
     transition: opacity 0.3s ease;
   }
   
   .mobile-backdrop.active {
     opacity: 1;
     pointer-events: auto;
   }
   
   @keyframes fadeIn {
     from { opacity: 0; }
     to { opacity: 1; }
   }
  
     /* ===== MAIN CONTENT ===== */
   main {
     padding-top: 95px;
     max-width: 1200px;
     margin: 0 auto;
     padding-left: 2rem;
     padding-right: 2rem;
     min-height: calc(100vh - 95px);
     position: relative;
     z-index: 1;
   }
   
   /* ===== RESPONSIVE DESIGN ===== */
   @media (max-width: 768px) {
     .navbar-container {
       padding: 0 1.5rem;
       height: 70px;
     }
     
     .navbar-menu {
       gap: 2rem;
     }
     
     .brand-link {
       font-size: 1.5rem;
     }
     
     /* Botões maiores para tablet */
     .theme-btn {
       min-width: 48px;
       min-height: 48px;
       padding: 0.75rem;
     }
     
     .switch-track {
       width: 56px;
       height: 32px;
     }
     
     .switch-thumb {
       width: 28px;
       height: 28px;
       top: 2px;
       left: 2px;
     }
     
     .switch-thumb.dark {
       transform: translateX(24px);
     }
     
     .theme-icon {
       width: 16px;
       height: 16px;
     }
     
     .mobile-btn {
       min-width: 38px;
       min-height: 38px;
       padding: 0.5rem;
     }
     
     .hamburger-lines {
       width: 22px;
       height: 18px;
     }
     
     main {
       padding-top: 85px;
       padding-left: 1.5rem;
       padding-right: 1.5rem;
     }
   }
   
   @media (max-width: 640px) {
     .mobile-btn {
       display: flex;
       min-width: 40px;
       min-height: 40px;
       padding: 0.5rem;
     }
     
     .hamburger-lines {
       width: 24px;
       height: 18px;
     }
     
     .theme-btn {
       min-width: 40px;
       min-height: 40px;
       padding: 0.5rem;
     }
     
     .theme-icon {
       width: 18px;
       height: 18px;
     }
     
     .navbar-menu-desktop {
       display: none;
     }
     
     main {
       padding-top: 85px;
       padding-left: 1rem;
       padding-right: 1rem;
     }
   }
   
   @media (max-width: 480px) {
     .navbar-container {
       padding: 0 1rem;
       height: 60px;
     }
     
     .brand-link {
       font-size: 1.1rem;
     }
     
     /* Botões menores para telas pequenas */
     .mobile-btn {
       min-width: 40px;
       min-height: 40px;
       padding: 0.45rem;
     }
     
     .hamburger-lines {
       width: 22px;
       height: 18px;
     }
     
     .theme-btn {
       min-width: 40px;
       min-height: 40px;
       padding: 0.45rem;
     }
     
     .theme-icon {
       width: 16px;
       height: 16px;
     }
     
     .mobile-menu {
       width: 100%;
       max-width: 100%;
     }
     
     .mobile-menu-header {
       padding: 1.25rem;
     }
     
     .mobile-nav {
       padding: 1.25rem;
     }
     
     .mobile-menu-footer {
       padding: 1.25rem;
     }
     
     main {
       padding-top: 75px;
     }
   }
</style> 