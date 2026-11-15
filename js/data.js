const PORTFOLIO_DATA = {
  profile: {
    name: "Kasoir Abbas",
    role: "Senior Software Engineer",
    location: "Dubai, UAE",
    phone: "(+971) 56 732 3593",
    phoneRaw: "+971567323593",
    email: "kasoirabbas.96@gmail.com",
    github: "https://github.com/kasoir",
    linkedin: "https://www.linkedin.com/in/kasoir-abbas",
    cvUrl: "assets/Kasoir_Abbas_CV.pdf",
    avatar: "assets/profile.jpg",
    // Exact summary from Kasoir Abbas's CV
    summary: "Senior Software Engineer with 7+ years of experience building scalable web applications, distributed backend systems, payment platforms, and hardware-integrated solutions. Strong expertise in C#, .NET, Node.js, Angular, event-driven architecture, IoT, payment terminal integration, and system performance optimization.",
    coreSkills: [
      "C# & .NET / ASP.NET / .NET MAUI",
      "Node.js, NestJS & Express.js",
      "Angular, TypeScript & JavaScript",
      "Python (Raspberry Pi 5 & CM4 IoT)",
      "Microservices, Event-Driven, Kafka & MQTT",
      "PostgreSQL, SQL Server, Oracle, AWS, Docker & CI/CD",
      "Multi-Agent Systems, Prompt Engineering & Agentic Coding"
    ],
    highlights: [
      {
        metric: "7+ Years",
        label: "Full-Stack & Backend Exp.",
        detail: "Secure Parking, Socienta & Syriatel"
      },
      {
        metric: "99.9% Uptime",
        label: "eView Smart Parking",
        detail: "Live at City Walk, Kite Beach, Yas Island & J1 Beach"
      },
      {
        metric: "4+ Hardware",
        label: "Payment Terminal Systems",
        detail: ".NET MAUI ePay with ITL, VeriFone, CPI & Adyen"
      },
      {
        metric: "27+ UIs / 30+ APIs",
        label: "SaaS & Financial Systems",
        detail: "+50% performance gain & Firebase-to-PostgreSQL migration"
      }
    ]
  },

  covers: [
    {
      id: "uploaded-banner",
      shortName: "Your Cover (Image)",
      name: "Your Uploaded Cover Banner"
    },
    {
      id: "uploaded-crisp-html",
      shortName: "Your Cover (Crisp Vector/HTML)",
      name: "Your Cover Design (Editable Crisp HTML + Vector Glass)"
    },
    {
      id: "ecosystem-bridge",
      shortName: "3-Pillar Architecture",
      name: "My System Architecture (Web + Cloud + Hardware)"
    },
    {
      id: "career-impact",
      shortName: "Career Timeline",
      name: "My 7+ Year Career & Dubai Production Impact"
    }
  ],

  experience: [
    {
      id: "secure-parking",
      company: "Secure Parking",
      location: "Dubai, UAE",
      role: "Senior Software Engineer",
      period: "May 2024 – Present",
      current: true,
      domainBadge: "Smart Mobility, Payment Terminals, Distributed Systems & IoT",
      venues: ["City Walk Mall", "Kite Beach", "Yas Island", "J1 Beach", "UAE Theme Parks"],
      keyMetrics: [
        { value: "4+ Platforms", label: "ITL, VeriFone, CPI & Adyen (.NET MAUI)" },
        { value: "20+ → <10", label: "Reusable Angular Components (99.9% Uptime)" },
        { value: "Kafka + MQTT", label: "Centralized Agentic AI Hub Platform" },
        { value: "Pi 5 & CM4", label: "Python IoT Access & Barrier Control" }
      ],
      bullets: [
        {
          title: ".NET MAUI Payment Machine System (ePay)",
          text: "Led end-to-end development of a .NET MAUI Payment Machine System, supporting cash, card, QR, and online payments with integrations across 4+ payment hardware platforms, including ITL, VeriFone, CPI, and Adyen."
        },
        {
          title: "Technical Architecture & Microservices",
          text: "Led technical architecture across the team, designed and implemented microservices, reusable integration libraries, and REST APIs, while authoring architecture documentation covering data models, API contracts, UI structure, integration layers, and system workflows."
        },
        {
          title: "eView Dynamic Smart-Parking Platform",
          text: "Architected and led development of eView, a dynamic Angular/Node.js platform that replaced legacy static eValet and ePark systems, refactoring 20+ components into fewer than 10 reusable components and supporting multiple parking workflows for hundreds of users and thousands of tickets with 99.9% uptime."
        },
        {
          title: "Hub — Real-Time Remote Control & Agentic AI",
          text: "Designed and implemented Hub, a centralized remote-control platform using Apache Kafka and MQTT, and Agentic AI capabilities, enabling real-time communication and remote management across Secure Parking products, including access control, eView, and payment machines."
        },
        {
          title: "Raspberry Pi 5 & CM4 IoT Access-Control Systems",
          text: "Led development of Raspberry Pi 5 and CM4–based access-control and payment systems using Python for real-time barrier control, QR scanning, access cards, ticket dispensing, and pay-in-lane operations."
        },
        {
          title: "Sunmi POS Android Valet & SIP.js Intercoms",
          text: "Led development of customer-facing and operational applications, including an Android valet application integrating Sunmi POS devices for mobile payments and ticket printing, as well as a centralized machine intercom system using Node.js and SIP.js to connect distributed parking machines with operations workstations."
        },
        {
          title: "Production Engineering & CI/CD",
          text: "Managed development and production engineering across multiple systems, coordinating technical implementation, CI/CD pipelines, Git repository structure, deployment, maintenance, and cross-system integration across Secure Parking's software ecosystem."
        }
      ],
      techUsed: ["C#", ".NET MAUI", "Angular", "Node.js", "TypeScript", "Python", "Apache Kafka", "MQTT", "Agentic AI", "PostgreSQL", "SIP.js", "Sunmi POS", "Raspberry Pi 5 / CM4", "Adyen", "VeriFone", "CPI", "ITL", "CI/CD"]
    },
    {
      id: "socienta",
      company: "Socienta",
      location: "Dubai, UAE",
      role: "Software Developer",
      period: "July 2020 – May 2024",
      current: false,
      domainBadge: "Property & Community Management SaaS, Financial & Banking Systems",
      venues: [],
      keyMetrics: [
        { value: "27 UIs & 30+ APIs", label: "Delivered across Financial & SaaS Workflows" },
        { value: "+50% Speed", label: "System Performance Optimization" },
        { value: "20+ Entities", label: "Migrated from Firebase to PostgreSQL" },
        { value: "30+ Tests", label: "Unit, Integration & Security Testing" }
      ],
      bullets: [
        {
          title: "Full-Stack SaaS & Financial Platform Delivery",
          text: "Led full-stack development across management, financial, and banking domains, delivering 27 user interfaces and 30+ APIs for SaaS applications and business workflows."
        },
        {
          title: "Firebase to PostgreSQL Migration & Accounting Engine",
          text: "Migrated 20+ entities from Firebase to PostgreSQL and developed 10+ complex accounting queries supporting financial reporting and business operations."
        },
        {
          title: "50% System Performance Optimization",
          text: "Improved system performance by 50% by refactoring 10+ components, separating business logic from queries and database connections from data processing."
        },
        {
          title: "Regulatory & Cloud Messaging Integrations",
          text: "Integrated third-party services including Mollak, Mailgun, and Azure Service Bus, enabling real-time updates, mail tracking, and enhanced system functionality."
        },
        {
          title: "Quality Assurance & Security Hardening",
          text: "Conducted code reviews and implemented 30+ unit and integration tests, along with performance testing and security improvements to strengthen application reliability."
        },
        {
          title: "Azure DevOps & SDLC Ownership",
          text: "Managed application deployment and source control using Azure DevOps and Git, contributing across the full software development lifecycle."
        }
      ],
      techUsed: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "Firebase Migration", "Azure Service Bus", "Mollak Integration", "Mailgun", "Azure DevOps", "Git"]
    },
    {
      id: "syriatel",
      company: "Syriatel Mobile Telecom",
      location: "Damascus",
      role: "Software Developer",
      period: "September 2019 – July 2020",
      current: false,
      domainBadge: "Enterprise Telecom Systems, High-Traffic Platforms & Oracle DB",
      venues: [],
      keyMetrics: [
        { value: "10+ UIs & APIs", label: "Enterprise Pointing System & SRS" },
        { value: "Oracle DB & SIS", label: "Enterprise Views & Stored Procedures" },
        { value: "High-Traffic", label: "Real-Time Call & Competition System" },
        { value: "DB Architecture", label: "Enterprise Complaint System Design" }
      ],
      bullets: [
        {
          title: "Enterprise Pointing System & SRS Authorship",
          text: "Initiated and developed the company's Pointing System, authoring the Software Requirements Specification (SRS) and delivering 10+ user interfaces and supporting APIs for services, locations, users, roles, and other workflows."
        },
        {
          title: "Enterprise SIS & Oracle Database Integration",
          text: "Integrated the Pointing System with existing enterprise systems, including SIS, using Oracle database views and optimized stored procedures."
        },
        {
          title: "High-Traffic Real-Time Competition System",
          text: "Contributed to the company's Competition System, developing 4+ user interfaces and 4 APIs for prize management, real-time call handling, and game selection in a high-traffic environment."
        },
        {
          title: "Complaint System Database Architecture",
          text: "Designed the Oracle database architecture and contributed to project planning for the company's Complaint System."
        }
      ],
      techUsed: ["C#", ".NET / ASP.NET", "Oracle Database", "Stored Procedures", "Enterprise SIS", "REST APIs", "High-Traffic Systems"]
    }
  ],

  projects: [
    {
      id: "eview",
      title: "eView — Smart-Parking Platform",
      organization: "Secure Parking, Dubai",
      category: "smart-mobility",
      badge: "Production · 99.9% Uptime",
      repoUrl: null,
      secondaryRepoUrl: null,
      venues: "City Walk Mall · Kite Beach · Yas Island · J1 Beach · Theme Parks",
      techStack: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "ParkIn Integration", "Multi-Tenant"],
      summary: "Configurable smart-parking platform that replaced legacy static eValet and ePark systems using dynamic reusable components, modular APIs, tenant isolation, and tariff engines.",
      highlights: [
        "Refactored 20+ legacy static components into fewer than 10 dynamic, reusable Angular components.",
        "Onboards self-parking, valet-parking, memberships, validations, vouchers, and custom payment workflows.",
        "Integrated with ParkIn and custom payment solutions; operating at 99.9% uptime across premier UAE destinations."
      ],
      architectureDetails: "eView unifies previously fragmented self-parking (ePark) and valet (eValet) applications into a single multi-tenant, configuration-driven platform. Workflows, tariffs, and UI layouts adapt dynamically per venue without redeploying code.",
      mermaidDiagram: `graph TD
    A["Venue Entry / Valet / Self-Park"] --> B["eView Dynamic Angular Shell (<10 Reusable Components)"]
    B --> C["Modular Node.js API Gateway & Tenant Isolation"]
    C --> D["Configurable Tariff, Voucher & Membership Engine"]
    C --> E["ParkIn & Custom Payment Gateway Integrations"]
    D --> F["PostgreSQL Multi-Venue Transactional Store (99.9% Uptime)"]
    E --> F`
    },
    {
      id: "epay",
      title: "ePay — Smart Payment Terminal System",
      organization: "Secure Parking, Dubai",
      category: "smart-mobility",
      badge: "Hardware-Integrated · 4+ Terminals",
      repoUrl: null,
      secondaryRepoUrl: null,
      venues: "Deployed across Smart Payment & Parking Kiosks in UAE",
      techStack: ["C#", ".NET", ".NET MAUI", "Adyen", "VeriFone", "CPI", "ITL", "Thermal Printing"],
      summary: "Cross-platform multi-service kiosk application deployed on smart payment and parking terminals supporting cash, card, QR, and online fee settlement.",
      highlights: [
        "Led end-to-end development in C# and .NET MAUI for touch-screen payment kiosks.",
        "Integrated 4+ payment hardware platforms: ITL, VeriFone, CPI, and Adyen.",
        "Orchestrates hardware peripherals including cash acceptors/dispensers, card readers, QR scanners, and thermal receipt printers."
      ],
      architectureDetails: "ePay abstracts vendor-specific hardware protocols (ITL, VeriFone, CPI, Adyen) behind unified C#/.NET hardware abstraction interfaces, allowing kiosk workflows (self-parking, valet, pay-in-lane) to process cash, card, QR, and online transactions reliably.",
      mermaidDiagram: `graph TD
    A["Customer at Smart Kiosk (.NET MAUI UI)"] --> B["Unified Payment Orchestrator (C# / .NET)"]
    B --> C["Cash Acceptor / Dispenser (ITL / CPI)"]
    B --> D["Card Terminal Reader (VeriFone / Adyen)"]
    B --> E["QR Scanner & Thermal Receipt Printer"]
    C --> F["Central Settlement & Barrier Release API"]
    D --> F
    E --> F`
    },
    {
      id: "hub-platform",
      title: "Hub — Remote Control & Agentic AI Platform",
      organization: "Secure Parking, Dubai",
      category: "smart-mobility",
      badge: "Kafka + MQTT + Agentic AI",
      repoUrl: null,
      secondaryRepoUrl: null,
      venues: "Centralized Operations Across Access Control, eView & ePay",
      techStack: ["Apache Kafka", "MQTT", "Agentic AI", "Python", "Node.js", "Raspberry Pi 5 / CM4", "SIP.js"],
      summary: "Centralized real-time telemetry, remote management, and Agentic AI control plane connecting distributed parking barriers, payment machines, intercoms, and web consoles.",
      highlights: [
        "Combines Apache Kafka for high-throughput event streaming with MQTT for lightweight edge/IoT device telemetry.",
        "Integrates Agentic AI capabilities for intelligent remote diagnostics, operational assistance, and automated device actions.",
        "Connects Raspberry Pi 5 & CM4 Python access-control controllers and SIP.js audio intercoms with central operations workstations."
      ],
      architectureDetails: "Hub bridges cloud microservices and edge hardware. Edge devices (Raspberry Pi 5 / CM4 controllers and ePay kiosks) communicate over MQTT and SIP.js, while backend services coordinate state, telemetry, and Agentic AI workflows via Apache Kafka.",
      mermaidDiagram: `graph TD
    A["Edge Devices: Raspberry Pi 5/CM4 & ePay Kiosks"] <-->|MQTT Telemetry & Commands| B["Hub Edge Broker & Gateway"]
    B <-->|Event Streams| C["Apache Kafka Backbone"]
    C <--> D["Agentic AI Operations & Diagnostics Engine"]
    C <--> E["eView & Central Operations Dashboard"]
    A <-->|SIP.js Real-Time Audio| E`
    },
    {
      id: "mt-urbac",
      title: "MT-URBAC & URBAC — Multi-Tenant RBAC",
      organization: "Open Source Author & Maintainer",
      category: "open-source",
      badge: "Open Source · NestJS & Angular",
      repoUrl: "https://github.com/kasoir/mt-urbac",
      secondaryRepoUrl: "https://github.com/kasoir/urbac",
      secondaryRepoLabel: "URBAC Core Repo",
      venues: "Open-Source Libraries on GitHub (@kasoir)",
      techStack: ["NestJS", "Angular", "PostgreSQL", "TypeORM", "Optimus UI", "TypeScript"],
      summary: "Modular role-based access control libraries supporting multi-tenant authentication, strict tenant isolation, and dynamic permission enforcement across enterprise architectures.",
      highlights: [
        "Author and maintainer of both URBAC and MT-URBAC open-source authorization ecosystems.",
        "Supports strict per-tenant security isolation alongside global administrative governance.",
        "Pairs a NestJS policy-enforcement backend with a reactive Angular + Optimus UI management console."
      ],
      architectureDetails: "Designed for drop-in integration across multi-tenant SaaS applications, enforcing tenant boundaries at the guard and query layer while providing dynamic role-permission matrix management.",
      mermaidDiagram: `graph TD
    A["Incoming Authenticated Request"] --> B["NestJS Tenant & Role Guard"]
    B -->|Tenant-Scoped User| C["Isolated Tenant Context (tenantId Filter)"]
    B -->|Global SuperAdmin| D["Cross-Tenant Governance Policy"]
    C --> E["PostgreSQL Role & Permission Matrix"]
    D --> E`
    },
    {
      id: "socienta-platform",
      title: "Socienta — Property & Financial SaaS",
      organization: "Socienta, Dubai",
      category: "enterprise-saas",
      badge: "27 UIs · 30+ APIs · +50% Speed",
      repoUrl: null,
      secondaryRepoUrl: null,
      venues: "Property, Community Management & Financial Accounting SaaS",
      techStack: ["Angular", "Node.js", "PostgreSQL", "Azure Service Bus", "Mollak", "Mailgun"],
      summary: "Full-stack SaaS operations platform for property and community management integrating financial accounting, procurement, customer servicing, and regulatory reporting.",
      highlights: [
        "Delivered 27 user interfaces and 30+ APIs across management, financial, and banking workflows.",
        "Migrated 20+ core entities from Firebase to PostgreSQL and authored 10+ complex accounting queries for service charges and contracts.",
        "Boosted system performance by 50% by decoupling business logic from database queries and integrating Azure Service Bus & Mollak."
      ],
      architectureDetails: "Transitioned the platform from a document-store bottleneck (Firebase) to a relational PostgreSQL accounting architecture with clean separation of concerns, asynchronous messaging via Azure Service Bus, and Dubai regulatory integration via Mollak.",
      mermaidDiagram: `graph TD
    A["27 Angular SaaS Interfaces"] --> B["30+ Node.js Domain APIs"]
    B --> C["Decoupled Accounting & Service-Charge Logic (+50% Speed)"]
    C --> D["PostgreSQL (20+ Migrated Entities & 10+ Financial Queries)"]
    C --> E["Azure Service Bus, Mollak & Mailgun Integrations"]`
    },
    {
      id: "spring-boot-rbac",
      title: "Spring Boot RBAC API",
      organization: "Open Source Author",
      category: "open-source",
      badge: "Open Source · Java Spring Boot",
      repoUrl: "https://github.com/kasoir/spring-boot-rbac-api",
      secondaryRepoUrl: null,
      venues: "Open-Source Boilerplate on GitHub (@kasoir)",
      techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "REST APIs"],
      summary: "Enterprise-ready Role-Based Access Control boilerplate in Java Spring Boot featuring secure authentication, fine-grained authorization policies, and clean RESTful persistence.",
      highlights: [
        "Designed and open-sourced a clean, production-ready RBAC foundation for Java Spring Boot microservices.",
        "Implements fine-grained endpoint authorization policies, JWT authentication, and structured PostgreSQL persistence.",
        "Demonstrates polyglot backend architecture across C#/.NET, Node.js/NestJS, and Java/Spring Boot."
      ],
      architectureDetails: "Provides a clean layered architecture (Controller -> Service -> Repository) with declarative security filters and role-permission entity mappings backed by PostgreSQL.",
      mermaidDiagram: `graph TD
    A["REST API Client"] --> B["Spring Security JWT & Policy Filter"]
    B --> C["RBAC Authorization Service Layer"]
    C --> D["Spring Data JPA Repositories"]
    D --> E["PostgreSQL Role & Permission Schema"]`
    }
  ],

  skillsMatrix: [
    {
      category: "Backend, APIs & Languages",
      icon: "server",
      description: "Polyglot backend engineering for high-availability microservices and enterprise APIs.",
      items: ["C#", ".NET / ASP.NET", "Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript", "Python", "Java / Spring Boot", "REST APIs", "GraphQL"]
    },
    {
      category: "Frontend, Mobile & Kiosk UI",
      icon: "layout",
      description: "Reusable component architectures for enterprise web consoles, kiosks, and POS devices.",
      items: ["Angular", ".NET MAUI", "Optimus UI", "Android Sunmi POS", "Dynamic UI Components", "HTML5 / CSS3", "Tailwind CSS", "RxJS & State Management"]
    },
    {
      category: "Distributed, IoT & Payment Hardware",
      icon: "cpu",
      description: "Real-time event streaming and direct hardware integration across kiosks and barriers.",
      items: ["Apache Kafka", "MQTT", "Microservices", "Event-Driven Architecture", "Adyen", "VeriFone", "CPI", "ITL", "Raspberry Pi 5 & CM4", "SIP.js Intercoms"]
    },
    {
      category: "Databases, Cloud, DevOps & AI",
      icon: "database",
      description: "Relational data modeling, cloud messaging, CI/CD automation, and Agentic AI systems.",
      items: ["PostgreSQL", "SQL Server", "Oracle Database", "AWS", "Azure Service Bus", "Azure DevOps", "Docker", "CI/CD Pipelines", "Git", "Multi-Agent Systems", "Agentic Coding", "Prompt Engineering"]
    }
  ],

  education: [
    {
      degree: "Master in Web Science",
      institution: "Syrian Virtual University",
      period: "2022 – Present",
      note: "Thesis in progress"
    },
    {
      degree: "Bachelor in Software Engineering",
      institution: "Al-Baath University",
      period: "2014 – 2019",
      note: "5-Year Engineering Degree"
    }
  ],

  awardsAndCerts: {
    award: {
      title: "ACPC (Syrian Collegiate Programming Contest)",
      rank: "4th Place, Syria (2016)",
      description: "National collegiate algorithmic programming competition."
    },
    certifications: [
      "Full Stack Engineer",
      "Kubernetes",
      "GraphQL",
      "Blockchain Basics",
      "React.js"
    ],
    languages: [
      { language: "Arabic", proficiency: "Native" },
      { language: "English", proficiency: "Fluent" }
    ]
  }
};
