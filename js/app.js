document.addEventListener("DOMContentLoaded", () => {
  const state = {
    coverId: "uploaded-crisp-html",
    projectCategory: "all",
    searchQuery: "",
    activeModalProjectId: null
  };

  // Initialize Mermaid with Warm Alabaster & Forest Teal Theme Variables
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        background: "#F4F1EA",
        primaryColor: "#E3F1EE",
        primaryTextColor: "#1C1917",
        primaryBorderColor: "#0F5E59",
        lineColor: "#0F5E59",
        secondaryColor: "#ECE8DF",
        tertiaryColor: "#FCFBF8",
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontSize: "13px"
      },
      securityLevel: "loose"
    });
  }

  // DOM References
  const heroContainer = document.getElementById("hero-step-container");
  const experienceContainer = document.getElementById("experience-timeline");
  const projectFilterContainer = document.getElementById("project-filter-tabs");
  const projectSearchInput = document.getElementById("project-search-input");
  const projectsGrid = document.getElementById("projects-grid");
  const skillsGrid = document.getElementById("skills-grid");
  const educationGrid = document.getElementById("education-awards-grid");
  const contactContainer = document.getElementById("contact-section-container");

  // Modal References
  const projectModal = document.getElementById("project-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContent = document.getElementById("modal-content");

  function init() {
    renderHeroSection();
    renderExperienceSection();
    renderProjectFilters();
    renderProjectsGrid();
    renderSkillsSection();
    renderEducationAndAwards();
    renderContactSection();
    setupGlobalEvents();
  }

  // Render Personal Cover Banner HTML
  function renderPersonalCoverBanner(coverId) {
    if (coverId === "uploaded-banner") {
      return `
        <div class="w-full relative overflow-hidden bg-[#07111A]">
          <img
            src="assets/cover-banner.jpg"
            alt="Kasoir Abbas — Senior Software Engineer Cover"
            class="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover object-right"
          />
        </div>
      `;
    }

    if (coverId === "uploaded-crisp-html") {
      // Exact recreation of the uploaded banner in ultra-crisp vector HTML/CSS + SVG glass panes so it never pixelates on 4K/Retina screens and stays editable in code!
      return `
        <div class="w-full h-[210px] sm:h-[260px] md:h-[285px] relative overflow-hidden bg-[#081018] flex items-center justify-end px-6 sm:px-12 md:px-16 select-none"
             style="background: radial-gradient(circle at 38% 12%, rgba(26, 98, 175, 0.38) 0%, transparent 48%), radial-gradient(circle at 38% 92%, rgba(16, 138, 178, 0.34) 0%, transparent 48%), radial-gradient(circle at 82% 28%, rgba(20, 148, 160, 0.25) 0%, transparent 50%), linear-gradient(135deg, #070C12 0%, #0A1622 50%, #0D222F 100%);">
          <!-- Subtle Dot Matrix Texture -->
          <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px); background-size: 16px 16px;"></div>

          <!-- Right Translucent Geometric Glass Shapes (Matching Uploaded Image) -->
          <svg class="absolute right-0 top-0 h-full w-64 sm:w-80 pointer-events-none opacity-90" viewBox="0 0 320 285" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <rect x="210" y="-40" width="180" height="340" rx="18" transform="rotate(14 210 -40)" fill="url(#glass1)" stroke="rgba(255,255,255,0.22)" stroke-width="1.2"/>
            <rect x="235" y="10" width="180" height="320" rx="18" transform="rotate(-18 235 10)" fill="url(#glass2)" stroke="rgba(255,255,255,0.28)" stroke-width="1.2"/>
            <rect x="265" y="45" width="160" height="290" rx="16" transform="rotate(6 265 45)" fill="url(#glass3)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
            <defs>
              <linearGradient id="glass1" x1="210" y1="-40" x2="390" y2="300" gradientUnits="userSpaceOnUse">
                <stop stop-color="rgba(255,255,255,0.14)"/>
                <stop offset="1" stop-color="rgba(255,255,255,0.02)"/>
              </linearGradient>
              <linearGradient id="glass2" x1="235" y1="10" x2="415" y2="330" gradientUnits="userSpaceOnUse">
                <stop stop-color="rgba(255,255,255,0.18)"/>
                <stop offset="1" stop-color="rgba(255,255,255,0.03)"/>
              </linearGradient>
              <linearGradient id="glass3" x1="265" y1="45" x2="425" y2="335" gradientUnits="userSpaceOnUse">
                <stop stop-color="rgba(255,255,255,0.12)"/>
                <stop offset="1" stop-color="rgba(255,255,255,0.01)"/>
              </linearGradient>
            </defs>
          </svg>

          <!-- Crisp Vector Typography Matching Your Uploaded Cover -->
          <div class="relative z-10 text-left sm:pl-36 md:pl-44 pr-4 sm:pr-10">
            <h2 class="text-2xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-tight mb-1 drop-shadow-sm whitespace-nowrap">
              Senior Software Engineer
            </h2>
            <h4 class="text-sm sm:text-lg md:text-xl font-normal text-slate-400 tracking-wide mb-2.5 sm:mb-3 whitespace-nowrap">
              Full Stack
            </h4>
            <p class="text-xs sm:text-sm md:text-[15.5px] font-semibold text-[#38BDF8] tracking-wide mb-2 sm:mb-2.5 md:whitespace-nowrap">
              Distributed Systems &bull; Payment Platforms &bull; IoT &amp; Event-Driven Architecture
            </p>
            <div class="text-[11px] sm:text-xs md:text-[13px] font-mono-code text-slate-300/90 tracking-wider leading-relaxed space-y-1">
              <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span class="whitespace-nowrap">C# / .NET</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">Node.js</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">NestJS</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">Angular</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">TypeScript</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">Python</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">.NET MAUI</span>
              </div>
              <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span class="whitespace-nowrap">Kafka</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">MQTT</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">PostgreSQL</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">SQL Server</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">Docker</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">AWS</span><span class="text-slate-500">|</span>
                <span class="whitespace-nowrap">Agentic AI</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (coverId === "ecosystem-bridge") {
      return `
        <div class="cover-canvas-teal min-h-[255px] sm:min-h-[295px] w-full relative px-6 sm:px-10 py-6 flex flex-col justify-between text-white overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-2 relative z-10">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-mono-code text-teal-100">
              <span>END-TO-END SYSTEM ARCHITECTURE</span>
              <span class="opacity-50">&bull;</span>
              <span>WEB &bull; CLOUD &bull; PAYMENT &amp; IoT HARDWARE</span>
            </div>
            <div class="bg-white/95 text-stone-900 px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-600 status-dot"></span>
              <span>Dubai, UAE &middot; Senior Software Engineer</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-4 relative z-10 sm:pl-40 md:pl-44">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[11px] font-mono-code uppercase tracking-wider text-amber-300 font-semibold">01 // Web &amp; Cross-Platform</span>
                <i data-lucide="monitor-smartphone" class="w-4 h-4 text-teal-200"></i>
              </div>
              <div class="text-sm font-bold text-white mb-1">Angular, .NET MAUI &amp; POS</div>
              <p class="text-[11px] text-teal-100/90 leading-relaxed">
                eView smart parking platform (20+ &rarr; &lt;10 reusable components), 27+ SaaS UIs, ePay MAUI kiosks &amp; Android Sunmi POS.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[11px] font-mono-code uppercase tracking-wider text-amber-300 font-semibold">02 // Distributed Backend</span>
                <i data-lucide="network" class="w-4 h-4 text-teal-200"></i>
              </div>
              <div class="text-sm font-bold text-white mb-1">C# .NET, Node.js, NestJS &amp; Kafka</div>
              <p class="text-[11px] text-teal-100/90 leading-relaxed">
                Centralized Hub (Kafka, MQTT &amp; Agentic AI), 30+ financial/SaaS APIs, PostgreSQL &amp; multi-tenant RBAC (MT-URBAC).
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 hover:bg-white/15 transition-colors">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[11px] font-mono-code uppercase tracking-wider text-amber-300 font-semibold">03 // Hardware &amp; Payments</span>
                <i data-lucide="cpu" class="w-4 h-4 text-teal-200"></i>
              </div>
              <div class="text-sm font-bold text-white mb-1">Adyen, VeriFone, CPI, ITL &amp; Pi 5</div>
              <p class="text-[11px] text-teal-100/90 leading-relaxed">
                Cash, card, QR &amp; online payment terminals, Python Raspberry Pi 5 / CM4 barrier control &amp; SIP.js intercoms.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-end gap-2 text-[11px] font-mono-code text-teal-100/90 relative z-10">
            <span class="bg-black/25 px-3 py-1 rounded-md">Production Venues: City Walk &bull; Kite Beach &bull; Yas Island &bull; J1 Beach</span>
          </div>
        </div>
      `;
    }

    if (coverId === "career-impact") {
      return `
        <div class="cover-canvas-paper min-h-[255px] sm:min-h-[295px] w-full relative px-6 sm:px-10 py-6 flex flex-col justify-between border-b border-[var(--border-strong)] overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-2 relative z-10">
            <div class="inline-flex items-center gap-2 badge-accent px-3 py-1 rounded-full text-[11px] font-mono-code font-semibold">
              <span>7+ YEARS PRODUCTION PROGRESSION (2019 &mdash; PRESENT)</span>
            </div>
            <div class="bg-white text-stone-900 px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm border border-stone-200">
              <span class="w-2 h-2 rounded-full bg-emerald-600 status-dot"></span>
              <span>Dubai, UAE &middot; Open to Roles</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-4 relative z-10 sm:pl-40 md:pl-44">
            <div class="bg-white/90 backdrop-blur-sm border border-stone-300/80 rounded-xl p-3.5 shadow-xs">
              <div class="flex items-center justify-between text-[11px] font-mono-code text-stone-500 mb-1">
                <span>2019 &ndash; 2020</span>
                <span class="text-teal-800 font-semibold">Damascus</span>
              </div>
              <div class="text-sm font-bold text-stone-900">Syriatel Mobile Telecom</div>
              <p class="text-[11px] text-stone-600 mt-1 leading-relaxed">
                Software Developer &mdash; Pointing System SRS, 14+ UIs &amp; APIs, high-traffic Competition System &amp; Oracle DB architecture.
              </p>
            </div>

            <div class="bg-white/90 backdrop-blur-sm border border-stone-300/80 rounded-xl p-3.5 shadow-xs">
              <div class="flex items-center justify-between text-[11px] font-mono-code text-stone-500 mb-1">
                <span>2020 &ndash; 2024</span>
                <span class="text-teal-800 font-semibold">Dubai, UAE</span>
              </div>
              <div class="text-sm font-bold text-stone-900">Socienta</div>
              <p class="text-[11px] text-stone-600 mt-1 leading-relaxed">
                Software Developer &mdash; 27 UIs &amp; 30+ APIs, Firebase &rarr; PostgreSQL migration, +50% speed optimization, Mollak &amp; Azure Service Bus.
              </p>
            </div>

            <div class="bg-[#0F5E59] text-white rounded-xl p-3.5 shadow-md">
              <div class="flex items-center justify-between text-[11px] font-mono-code text-teal-200 mb-1">
                <span>2024 &ndash; Present</span>
                <span class="bg-amber-400/20 text-amber-200 px-1.5 py-0.5 rounded">Current</span>
              </div>
              <div class="text-sm font-bold text-white">Secure Parking, Dubai</div>
              <p class="text-[11px] text-teal-100 mt-1 leading-relaxed">
                Senior Software Engineer &mdash; Leading ePay (.NET MAUI), eView (Angular/Node.js, 99.9% uptime), Kafka/MQTT Hub &amp; Raspberry Pi 5 systems.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-end gap-3 text-[11px] font-mono-code text-stone-600 relative z-10">
            <span>M.Sc. in Web Science (2022&ndash;Present)</span>
            <span>&bull;</span>
            <span>B.Sc. Software Engineering (2014&ndash;2019)</span>
            <span>&bull;</span>
            <span class="text-teal-900 font-semibold">ACPC 4th Place (2016)</span>
          </div>
        </div>
      `;
    }

    if (coverId === "code-blueprint") {
      return `
        <div class="cover-canvas-teal min-h-[255px] sm:min-h-[295px] w-full relative px-6 sm:px-10 py-6 flex flex-col justify-between text-white overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-2 relative z-10">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-300/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
              <span class="ml-2 text-xs font-mono-code text-teal-200">kasoir-abbas // production-systems.config.ts</span>
            </div>
            <div class="bg-white/95 text-stone-900 px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-600 status-dot"></span>
              <span>Dubai, UAE</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 my-3 relative z-10 sm:pl-40 md:pl-44 items-center">
            <div class="lg:col-span-7 bg-black/30 backdrop-blur-md border border-white/15 rounded-xl p-4 font-mono-code text-xs leading-relaxed text-teal-100">
              <div><span class="text-amber-300">const</span> <span class="text-white font-semibold">kasoirAbbas</span> = {</div>
              <div class="pl-4"><span class="text-teal-300">backend</span>: [<span class="text-emerald-300">"C#"</span>, <span class="text-emerald-300">".NET / ASP.NET"</span>, <span class="text-emerald-300">"Node.js"</span>, <span class="text-emerald-300">"NestJS"</span>, <span class="text-emerald-300">"Python"</span>],</div>
              <div class="pl-4"><span class="text-teal-300">frontendAndKiosk</span>: [<span class="text-emerald-300">"Angular"</span>, <span class="text-emerald-300">".NET MAUI"</span>, <span class="text-emerald-300">"TypeScript"</span>],</div>
              <div class="pl-4"><span class="text-teal-300">distributedAndIoT</span>: [<span class="text-emerald-300">"Kafka"</span>, <span class="text-emerald-300">"MQTT"</span>, <span class="text-emerald-300">"Raspberry Pi 5/CM4"</span>, <span class="text-emerald-300">"SIP.js"</span>],</div>
              <div class="pl-4"><span class="text-teal-300">openSource</span>: [<span class="text-amber-200">"MT-URBAC"</span>, <span class="text-amber-200">"URBAC"</span>, <span class="text-amber-200">"Spring-Boot-RBAC"</span>]</div>
              <div>};</div>
            </div>

            <div class="lg:col-span-5 space-y-2">
              <div class="bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-white">ePay &amp; eView (Secure Parking)</div>
                  <div class="text-[11px] text-teal-200">ITL, VeriFone, CPI, Adyen &bull; 99.9% Uptime</div>
                </div>
                <span class="text-[10px] font-mono-code bg-emerald-400/20 text-emerald-200 px-2 py-0.5 rounded">PRODUCTION</span>
              </div>
              <div class="bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-white">Hub Remote Control Platform</div>
                  <div class="text-[11px] text-teal-200">Apache Kafka + MQTT + Agentic AI</div>
                </div>
                <span class="text-[10px] font-mono-code bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded">ARCHITECT</span>
              </div>
            </div>
          </div>

          <div class="flex justify-end text-[11px] font-mono-code text-teal-200/80 relative z-10">
            <span>PostgreSQL &bull; SQL Server &bull; Oracle &bull; AWS &bull; Docker &bull; CI/CD</span>
          </div>
        </div>
      `;
    }

    return `
      <div class="cover-canvas-teal min-h-[240px] sm:min-h-[270px] w-full relative px-6 sm:px-10 py-6 flex flex-col justify-between text-white overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-2 relative z-10">
          <span class="text-xs font-mono-code tracking-widest uppercase text-teal-200/90">KASOIR ABBAS // SENIOR SOFTWARE ENGINEER</span>
          <div class="bg-white/95 text-stone-900 px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-600 status-dot"></span>
            <span>Dubai, UAE</span>
          </div>
        </div>

        <div class="my-auto sm:pl-40 md:pl-44 relative z-10 py-2">
          <div class="text-lg sm:text-2xl font-semibold text-white/95 max-w-3xl leading-snug mb-3">
            Scalable Web Applications &bull; Distributed Backend Systems &bull; Payment Platforms &bull; Hardware-Integrated Solutions
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${["C#", ".NET", ".NET MAUI", "Node.js", "NestJS", "Angular", "TypeScript", "Python", "Kafka", "MQTT", "PostgreSQL", "SQL Server", "AWS", "Docker", "Agentic AI"].map(tag => `
              <span class="px-2.5 py-1 rounded-md bg-white/12 border border-white/15 text-xs font-mono-code text-teal-50">${tag}</span>
            `).join("")}
          </div>
        </div>

        <div class="flex justify-end text-[11px] font-mono-code text-teal-200/90 relative z-10">
          <span>Secure Parking (Dubai) &bull; Socienta (Dubai) &bull; Syriatel</span>
        </div>
      </div>
    `;
  }

  // 2. Render Hero Section
  function renderHeroSection() {
    if (!heroContainer) return;
    const p = PORTFOLIO_DATA.profile;

    heroContainer.innerHTML = `
      <div class="surface-card-elevated rounded-3xl overflow-hidden">
        ${renderPersonalCoverBanner(state.coverId)}

        <div class="px-6 sm:px-10 lg:px-12 pb-10 pt-0 relative">
          <!-- Overlapping Portrait + Action Buttons Row -->
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 mb-6 relative z-20">
            <div class="flex items-end gap-5 shrink-0 -mt-20 sm:-mt-24">
              <img
                src="${p.avatar}"
                alt="${p.name}"
                class="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover object-top profile-avatar-ring bg-stone-200"
              />
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <a href="${p.cvUrl}" target="_blank" download="Kasoir_Abbas_CV.pdf" class="bg-accent-primary px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 shadow-sm">
                <i data-lucide="file-down" class="w-4 h-4"></i>
                <span>Download CV</span>
              </a>
              <button data-copy="${p.email}" data-copy-label="Email copied!" class="copy-btn btn-secondary px-4 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2 cursor-pointer" title="Click to copy email">
                <i data-lucide="mail" class="w-4 h-4 text-accent"></i>
                <span>${p.email}</span>
              </button>
              <a href="tel:${p.phoneRaw}" class="btn-secondary px-3.5 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2">
                <i data-lucide="phone" class="w-4 h-4 text-accent"></i>
                <span>${p.phone}</span>
              </a>
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-3.5 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2" title="GitHub (@kasoir)">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-3.5 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2" title="LinkedIn">
                <svg class="w-4 h-4 fill-current text-accent" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <!-- Bio & Verbatim CV Summary -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8">
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary">${p.name}</h1>
                <span class="badge-accent px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                  ${p.role}
                </span>
                <span class="text-xs text-ink-muted inline-flex items-center gap-1">
                  <i data-lucide="map-pin" class="w-3.5 h-3.5 text-accent"></i> ${p.location}
                </span>
              </div>

              <p class="text-ink-primary text-base sm:text-lg leading-relaxed mb-6 font-normal">
                ${p.summary}
              </p>

              <div class="flex flex-wrap gap-2">
                ${p.coreSkills.map(skill => `
                  <span class="surface-subtle px-3 py-1.5 rounded-lg text-xs font-medium text-ink-secondary">
                    ${escapeHtml(skill)}
                  </span>
                `).join("")}
              </div>
            </div>

            <!-- Right Column: Verified Credentials -->
            <div class="lg:col-span-4 surface-subtle rounded-2xl p-5 space-y-3.5">
              <div class="text-xs font-mono-code uppercase tracking-wider text-accent font-semibold">
                Key Facts &amp; Credentials
              </div>
              <ul class="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                <li class="flex items-start gap-2.5">
                  <i data-lucide="briefcase" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                  <span><strong class="text-ink-primary">Secure Parking, Dubai</strong> (May 2024 &ndash; Present) &mdash; Senior Software Engineer</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="building-2" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                  <span><strong class="text-ink-primary">Socienta, Dubai</strong> (2020 &ndash; 2024) &amp; <strong class="text-ink-primary">Syriatel</strong> (2019 &ndash; 2020)</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                  <span><strong class="text-ink-primary">Master in Web Science</strong> (SVU) &amp; <strong class="text-ink-primary">B.Sc. Software Engineering</strong></span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i data-lucide="trophy" class="w-4 h-4 text-accent-warm shrink-0 mt-0.5"></i>
                  <span><strong class="text-ink-primary">ACPC 4th Place</strong> &mdash; Syrian Collegiate Programming Contest (2016)</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 4-Column Impact Metrics Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-subtle)]">
            ${p.highlights.map(h => `
              <div class="surface-subtle rounded-xl p-4">
                <div class="text-2xl font-bold text-ink-primary tracking-tight">${h.metric}</div>
                <div class="text-xs font-semibold text-accent mt-0.5">${h.label}</div>
                <div class="text-[11px] text-ink-muted mt-1">${h.detail}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    refreshIcons();
  }

  // 3. Render Experience Section
  function renderExperienceSection() {
    if (!experienceContainer) return;

    experienceContainer.innerHTML = PORTFOLIO_DATA.experience.map((exp, idx) => `
      <div class="surface-card rounded-3xl p-6 sm:p-8 lg:p-10 relative">
        <!-- Header Row -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <div class="flex flex-wrap items-center gap-2.5 mb-2">
              <span class="text-xs font-mono-code font-semibold px-2.5 py-1 rounded-md ${
                exp.current ? "bg-accent-primary text-white" : "surface-subtle text-ink-secondary"
              }">
                ${escapeHtml(exp.period)}
              </span>
              <span class="badge-accent px-3 py-1 rounded-full text-xs font-medium">
                ${escapeHtml(exp.domainBadge)}
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight">
              ${escapeHtml(exp.role)} <span class="text-accent font-normal">@ ${escapeHtml(exp.company)}</span>
            </h3>
            <p class="text-xs sm:text-sm text-ink-muted mt-1 inline-flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-accent"></i>
              <span>${escapeHtml(exp.location)}</span>
            </p>
          </div>

          ${exp.venues && exp.venues.length > 0 ? `
            <div class="surface-subtle rounded-xl p-3.5 max-w-md">
              <div class="text-[11px] font-mono-code uppercase tracking-wider text-accent font-semibold mb-1.5">
                Live Production Venues (99.9% Uptime)
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${exp.venues.map(v => `
                  <span class="px-2 py-0.5 bg-[var(--bg-card)] border border-[var(--border-strong)] rounded text-xs font-medium text-ink-primary">${escapeHtml(v)}</span>
                `).join("")}
              </div>
            </div>
          ` : ""}
        </div>

        <!-- Role Key Metrics Strip -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
          ${exp.keyMetrics.map(m => `
            <div class="surface-subtle rounded-xl p-3.5">
              <div class="text-lg font-bold text-ink-primary">${escapeHtml(m.value)}</div>
              <div class="text-xs text-ink-secondary mt-0.5">${escapeHtml(m.label)}</div>
            </div>
          `).join("")}
        </div>

        <!-- Detailed CV Responsibilities & Achievements -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          ${exp.bullets.map(b => `
            <div class="p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-subtle)] flex items-start gap-3">
              <div class="w-6 h-6 rounded-lg badge-accent flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="check" class="w-3.5 h-3.5"></i>
              </div>
              <div>
                <h4 class="text-sm font-bold text-ink-primary mb-1">${escapeHtml(b.title)}</h4>
                <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">${escapeHtml(b.text)}</p>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Technologies Used in Role -->
        <div class="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono-code uppercase text-ink-muted mr-1">Stack &amp; Integrations:</span>
          ${exp.techUsed.map(t => `
            <span class="px-2.5 py-1 rounded-md surface-subtle text-xs font-mono-code text-ink-secondary">${escapeHtml(t)}</span>
          `).join("")}
        </div>
      </div>
    `).join("");

    refreshIcons();
  }

  // 4. Render Project Filter Tabs & Projects Grid
  function renderProjectFilters() {
    if (!projectFilterContainer) return;
    const categories = [
      { id: "all", label: "All Systems", count: PORTFOLIO_DATA.projects.length },
      { id: "smart-mobility", label: "Smart Mobility, Kiosks & IoT", count: PORTFOLIO_DATA.projects.filter(p => p.category === "smart-mobility").length },
      { id: "open-source", label: "Open-Source RBAC Libraries", count: PORTFOLIO_DATA.projects.filter(p => p.category === "open-source").length },
      { id: "enterprise-saas", label: "Property & Financial SaaS", count: PORTFOLIO_DATA.projects.filter(p => p.category === "enterprise-saas").length }
    ];

    projectFilterContainer.innerHTML = categories.map(c => `
      <button
        data-cat="${c.id}"
        class="px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border-strong)] transition-all cursor-pointer ${
          state.projectCategory === c.id
            ? "filter-btn-active shadow-xs"
            : "bg-[var(--bg-card)] text-ink-secondary hover:bg-[var(--bg-surface)]"
        }">
        ${c.label} <span class="ml-1 opacity-75">(${c.count})</span>
      </button>
    `).join("");

    projectFilterContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        state.projectCategory = btn.dataset.cat;
        renderProjectFilters();
        renderProjectsGrid();
      });
    });
  }

  function getProjectHeaderClass(category) {
    if (category === "smart-mobility") return "project-header-mobility";
    if (category === "open-source") return "project-header-opensource";
    return "project-header-saas";
  }

  function renderProjectsGrid() {
    if (!projectsGrid) return;

    const query = state.searchQuery.toLowerCase().trim();
    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      const matchesCat = state.projectCategory === "all" || p.category === state.projectCategory;
      const matchesQuery = !query ||
        p.title.toLowerCase().includes(query) ||
        p.organization.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.techStack.some(t => t.toLowerCase().includes(query));
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="col-span-full surface-card rounded-2xl p-12 text-center">
          <p class="text-ink-secondary text-sm mb-3">No projects match your current filter ("${escapeHtml(state.searchQuery)}").</p>
          <button id="reset-projects-btn" class="bg-accent-primary px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-projects-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.projectCategory = "all";
          state.searchQuery = "";
          if (projectSearchInput) projectSearchInput.value = "";
          renderProjectFilters();
          renderProjectsGrid();
        });
      }
      return;
    }

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="surface-card surface-card-hover rounded-2xl overflow-hidden flex flex-col justify-between">
        <div>
          <!-- Visual Schematic Header Banner -->
          <div class="${getProjectHeaderClass(p.category)} p-5 text-white relative">
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-mono-code font-medium text-white border border-white/15">
                ${escapeHtml(p.badge)}
              </span>
              <span class="text-[11px] font-mono-code text-white/80">${escapeHtml(p.organization)}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white leading-snug">${escapeHtml(p.title)}</h3>
            <p class="text-[11px] font-mono-code text-white/80 mt-1.5 flex items-center gap-1.5">
              <i data-lucide="layers" class="w-3.5 h-3.5 shrink-0"></i>
              <span class="truncate">${escapeHtml(p.venues)}</span>
            </p>
          </div>

          <!-- Card Body -->
          <div class="p-6">
            <p class="text-sm text-ink-secondary leading-relaxed mb-4">
              ${escapeHtml(p.summary)}
            </p>

            <ul class="space-y-2 mb-5">
              ${p.highlights.map(h => `
                <li class="text-xs text-ink-secondary flex items-start gap-2">
                  <span class="text-accent font-bold mt-0.5">&bull;</span>
                  <span class="leading-relaxed">${escapeHtml(h)}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <!-- Card Footer: Tech Stack + Actions -->
        <div class="px-6 pb-6 pt-2">
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.techStack.map(t => `
              <span class="px-2 py-0.5 rounded surface-subtle text-[11px] font-mono-code text-ink-secondary">
                ${escapeHtml(t)}
              </span>
            `).join("")}
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-3 border-t border-[var(--border-subtle)]">
            <button
              data-inspect-project="${p.id}"
              class="inspect-project-btn flex-1 bg-accent-primary px-4 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-1.5 cursor-pointer">
              <i data-lucide="git-branch" class="w-3.5 h-3.5"></i>
              <span>System Architecture</span>
            </button>

            ${p.repoUrl ? `
              <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-3 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5" title="View GitHub Repository">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            ` : ""}

            ${p.secondaryRepoUrl ? `
              <a href="${p.secondaryRepoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-3 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1" title="${escapeHtml(p.secondaryRepoLabel || 'Secondary Repo')}">
                <span>URBAC</span>
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            ` : ""}
          </div>
        </div>
      </div>
    `).join("");

    refreshIcons();
  }

  // 5. Render Skills Matrix
  function renderSkillsSection() {
    if (!skillsGrid) return;

    skillsGrid.innerHTML = PORTFOLIO_DATA.skillsMatrix.map(group => `
      <div class="surface-card rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl badge-accent flex items-center justify-center">
              <i data-lucide="${group.icon}" class="w-5 h-5"></i>
            </div>
            <h3 class="text-base font-bold text-ink-primary">${escapeHtml(group.category)}</h3>
          </div>
          <p class="text-xs text-ink-muted leading-relaxed mb-4">
            ${escapeHtml(group.description)}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-subtle)]">
          ${group.items.map(item => `
            <button
              data-skill-filter="${escapeHtml(item)}"
              class="skill-chip px-3 py-1.5 rounded-lg surface-subtle hover:bg-[var(--accent-badge-bg)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] text-xs font-medium text-ink-primary transition-all cursor-pointer"
              title="Click to filter projects using ${escapeHtml(item)}">
              ${escapeHtml(item)}
            </button>
          `).join("")}
        </div>
      </div>
    `).join("");

    refreshIcons();
  }

  // 6. Render Education, Certifications, Awards & Languages
  function renderEducationAndAwards() {
    if (!educationGrid) return;
    const edu = PORTFOLIO_DATA.education;
    const ac = PORTFOLIO_DATA.awardsAndCerts;

    educationGrid.innerHTML = `
      <!-- Academic Education Column -->
      <div class="surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-6">
            <div class="w-9 h-9 rounded-xl badge-accent flex items-center justify-center">
              <i data-lucide="graduation-cap" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-ink-primary">Academic Education</h3>
              <p class="text-xs text-ink-muted">Computer Science &amp; Software Engineering</p>
            </div>
          </div>

          <div class="space-y-4">
            ${edu.map(item => `
              <div class="p-4 rounded-xl surface-subtle">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span class="text-xs font-mono-code font-semibold text-accent">${escapeHtml(item.period)}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] text-[11px] font-medium text-ink-secondary">
                    ${escapeHtml(item.note)}
                  </span>
                </div>
                <h4 class="text-base font-bold text-ink-primary">${escapeHtml(item.degree)}</h4>
                <p class="text-xs sm:text-sm text-ink-secondary mt-0.5">${escapeHtml(item.institution)}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Languages Spoken -->
        <div class="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <span class="text-xs font-mono-code uppercase text-ink-muted font-semibold">Languages</span>
          <div class="flex items-center gap-3">
            ${ac.languages.map(l => `
              <span class="px-3 py-1 rounded-lg surface-subtle text-xs font-medium text-ink-primary">
                <strong>${escapeHtml(l.language)}:</strong> ${escapeHtml(l.proficiency)}
              </span>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- Awards & Certifications Column -->
      <div class="surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-6">
            <div class="w-9 h-9 rounded-xl badge-warm flex items-center justify-center">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-ink-primary">Awards &amp; Certifications</h3>
              <p class="text-xs text-ink-muted">Competitive Programming &amp; Technical Credentials</p>
            </div>
          </div>

          <!-- Highlighted ACPC Award Box -->
          <div class="p-5 rounded-2xl badge-warm mb-6">
            <div class="flex items-start gap-3.5">
              <i data-lucide="trophy" class="w-6 h-6 shrink-0 mt-0.5"></i>
              <div>
                <div class="text-xs font-mono-code uppercase tracking-wider font-bold">${escapeHtml(ac.award.rank)}</div>
                <h4 class="text-base font-bold text-ink-primary mt-0.5">${escapeHtml(ac.award.title)}</h4>
                <p class="text-xs text-ink-secondary mt-1">${escapeHtml(ac.award.description)}</p>
              </div>
            </div>
          </div>

          <!-- Certifications List -->
          <div>
            <div class="text-xs font-mono-code uppercase tracking-wider text-ink-muted font-semibold mb-3">
              Professional Certifications
            </div>
            <div class="flex flex-wrap gap-2">
              ${ac.certifications.map(cert => `
                <span class="px-3.5 py-2 rounded-xl surface-subtle text-xs font-semibold text-ink-primary inline-flex items-center gap-2">
                  <i data-lucide="badge-check" class="w-4 h-4 text-accent"></i>
                  <span>${escapeHtml(cert)}</span>
                </span>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="mt-6 pt-5 border-t border-[var(--border-subtle)] text-xs text-ink-muted flex items-center justify-between">
          <span>Verified Credentials from CV</span>
          <a href="${PORTFOLIO_DATA.profile.cvUrl}" target="_blank" download="Kasoir_Abbas_CV.pdf" class="text-accent font-semibold hover:underline inline-flex items-center gap-1">
            <span>Download Full CV PDF</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    `;

    refreshIcons();
  }

  // 7. Render Executive Contact Section
  function renderContactSection() {
    if (!contactContainer) return;
    const p = PORTFOLIO_DATA.profile;

    contactContainer.innerHTML = `
      <div class="cover-canvas-teal rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div class="lg:col-span-7 space-y-3">
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-mono-code text-teal-100">
              <span class="w-2 h-2 rounded-full bg-emerald-400 status-dot"></span>
              <span>Based in Dubai, UAE &middot; Available for Senior &amp; Lead Opportunities</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Let’s discuss your next platform or engineering challenge.
            </h2>
            <p class="text-sm sm:text-base text-teal-100/90 leading-relaxed max-w-2xl">
              Whether you need a Senior Software Engineer for distributed backends, enterprise Angular applications, multi-tenant platforms, or payment &amp; IoT hardware integration in the UAE, reach out directly below.
            </p>
          </div>

          <div class="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <i data-lucide="mail" class="w-5 h-5 text-amber-300 shrink-0"></i>
                <div class="truncate">
                  <div class="text-[11px] font-mono-code text-teal-200 uppercase">Direct Email</div>
                  <a href="mailto:${p.email}" class="text-sm font-bold text-white hover:underline truncate block">${p.email}</a>
                </div>
              </div>
              <button data-copy="${p.email}" data-copy-label="Email copied!" class="copy-btn px-3 py-1.5 rounded-lg bg-white text-stone-900 text-xs font-semibold hover:bg-teal-50 shrink-0 cursor-pointer">
                Copy
              </button>
            </div>

            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <i data-lucide="phone" class="w-5 h-5 text-amber-300 shrink-0"></i>
                <div>
                  <div class="text-[11px] font-mono-code text-teal-200 uppercase">Phone / UAE</div>
                  <a href="tel:${p.phoneRaw}" class="text-sm font-bold text-white hover:underline">${p.phone}</a>
                </div>
              </div>
              <button data-copy="${p.phone}" data-copy-label="Phone copied!" class="copy-btn px-3 py-1.5 rounded-lg bg-white text-stone-900 text-xs font-semibold hover:bg-teal-50 shrink-0 cursor-pointer">
                Copy
              </button>
            </div>

            <div class="grid grid-cols-3 gap-2.5 pt-1">
              <a href="${p.cvUrl}" target="_blank" download="Kasoir_Abbas_CV.pdf" class="bg-white text-stone-900 hover:bg-teal-50 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                <i data-lucide="file-down" class="w-3.5 h-3.5"></i>
                <span>CV PDF</span>
              </a>
              <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="bg-white/15 hover:bg-white/25 border border-white/20 text-white py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5">
                <span>LinkedIn</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="bg-white/15 hover:bg-white/25 border border-white/20 text-white py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5">
                <span>GitHub</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    refreshIcons();
  }

  // 8. Interactive Modal & Event Listeners
  function setupGlobalEvents() {
    if (projectSearchInput) {
      projectSearchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderProjectsGrid();
      });
    }

    // Delegate Inspect Project Modal clicks
    if (projectsGrid) {
      projectsGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".inspect-project-btn");
        if (!btn) return;
        openProjectModal(btn.dataset.inspectProject);
      });
    }

    // Delegate Skill Chip clicks to filter projects
    if (skillsGrid) {
      skillsGrid.addEventListener("click", (e) => {
        const chip = e.target.closest(".skill-chip");
        if (!chip) return;
        const skill = chip.dataset.skillFilter;
        state.projectCategory = "all";
        state.searchQuery = skill;
        if (projectSearchInput) projectSearchInput.value = skill;
        renderProjectFilters();
        renderProjectsGrid();
        const projectsSection = document.getElementById("projects");
        if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
      });
    }

    // Delegate Copy-to-Clipboard clicks
    document.body.addEventListener("click", (e) => {
      const copyBtn = e.target.closest(".copy-btn");
      if (!copyBtn) return;
      const textToCopy = copyBtn.dataset.copy;
      const label = copyBtn.dataset.copyLabel || "Copied!";
      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).catch(() => {});
      }
      showToast(label);
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && projectModal && !projectModal.classList.contains("hidden")) {
        closeProjectModal();
      }
    });
  }

  async function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !projectModal || !modalContent) return;

    state.activeModalProjectId = projectId;

    modalContent.innerHTML = `
      <div class="space-y-6">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="badge-accent px-3 py-0.5 rounded-full text-xs font-mono-code font-semibold">
              ${escapeHtml(project.badge)}
            </span>
            <span class="text-xs font-mono-code text-ink-muted">${escapeHtml(project.organization)}</span>
          </div>
          <h2 class="text-2xl font-bold text-ink-primary">${escapeHtml(project.title)}</h2>
          <p class="text-xs font-mono-code text-accent mt-1">${escapeHtml(project.venues)}</p>
        </div>

        <div class="p-4 rounded-xl surface-subtle">
          <h4 class="text-xs font-mono-code uppercase tracking-wider text-ink-muted font-semibold mb-1.5">System Overview &amp; Architecture</h4>
          <p class="text-sm text-ink-primary leading-relaxed">${escapeHtml(project.architectureDetails)}</p>
        </div>

        <div>
          <h4 class="text-xs font-mono-code uppercase tracking-wider text-ink-muted font-semibold mb-2.5">Key Engineering Deliverables</h4>
          <ul class="space-y-2">
            ${project.highlights.map(h => `
              <li class="flex items-start gap-2.5 text-sm text-ink-secondary">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                <span>${escapeHtml(h)}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-mono-code uppercase tracking-wider text-accent font-semibold mb-2.5">System Topology Diagram</h4>
          <div class="mermaid-container" id="mermaid-modal-target">
            <span class="text-xs font-mono-code text-ink-muted">Rendering system topology...</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
          <div class="flex flex-wrap gap-1.5">
            ${project.techStack.map(t => `
              <span class="px-2.5 py-1 rounded-md surface-subtle text-xs font-mono-code text-ink-secondary">${escapeHtml(t)}</span>
            `).join("")}
          </div>
          ${project.repoUrl ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="bg-accent-primary px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5">
              <span>View on GitHub</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          ` : ""}
        </div>
      </div>
    `;

    refreshIcons();
    projectModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    try {
      const target = document.getElementById("mermaid-modal-target");
      if (target && project.mermaidDiagram && window.mermaid) {
        const uid = `mermaid-diagram-${Date.now()}`;
        const { svg } = await mermaid.render(uid, project.mermaidDiagram);
        target.innerHTML = svg;
      }
    } catch (err) {
      const target = document.getElementById("mermaid-modal-target");
      if (target) {
        target.innerHTML = `<pre class="text-xs font-mono-code text-ink-secondary overflow-x-auto">${escapeHtml(project.mermaidDiagram)}</pre>`;
      }
    }
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.add("hidden");
    document.body.style.overflow = "";
    state.activeModalProjectId = null;
  }

  function showToast(message) {
    let toast = document.getElementById("copy-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "copy-toast";
      toast.className = "fixed bottom-6 right-6 z-50 bg-[#0F5E59] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg transition-opacity duration-200 opacity-0 pointer-events-none";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove("opacity-0");
    toast.classList.add("opacity-100");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0");
    }, 2200);
  }

  function refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  init();
});
