// ============================================================
// en.ts — All user-facing text extracted for translation
// 
// INSTRUCTIONS FOR TRANSLATOR:
// 1. Copy this file and rename to zh.ts
// 2. Translate ALL string values (right side of colon) to Traditional Chinese
// 3. DO NOT change any keys (left side of colon)
// 4. DO NOT change any values that are proper nouns/brand names marked with [KEEP]
// 5. For arrays, translate each element
// 6. Some values have [CONTEXT: ...] hints — use them for translation accuracy
// ============================================================

export const translations = {

  // ==========================================
  // NAVBAR
  // ==========================================
  navbar: {
    logo: "James Hsieh", // [KEEP] — 改成中文名「謝宇傑」
    links: {
      experience: "Experience",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    resumeButton: "Resume",
    resumeUrl: "/Hsieh Yu Jie_James_Resume_2026.pdf",
    ctaButton: "Get in Touch",
  },

  // ==========================================
  // HERO SECTION
  // ==========================================
  hero: {
    greeting: "Hello, I'm",
    name: "James Hsieh", // [KEEP or 謝宇傑]
    roles: [
      "Digital Marketing",
      "MarTech x AI",
      "CRM & Automation",
      "B2B Lead Generation",
    ],
    subtitle: "7 years across digital marketing, B2B inbound, and CRM/MarTech. I turn content, data, automation, and AI-assisted workflows into practical marketing systems for pipeline, reporting, and cross-team execution.",
    viewWorkButton: "View My Work",
    downloadResumeButton: "Download Resume",
    contactButton: "Contact Me",
  },

  // ==========================================
  // SKILLS SECTION
  // ==========================================
  skills: {
    sectionLabel: "What I Bring",
    sectionTitle: "Skills & Expertise",
    cards: [
      {
        badge: "Digital Marketing & Growth",
        color: "blue",
        oneLiner: "B2B inbound, lead generation, and conversion funnel execution",
        tags: ["B2B Inbound", "Lead Generation", "LinkedIn B2B", "Email / Lead Nurturing", "Conversion Funnel", "SEO / Content Growth"],
      },
      {
        badge: "MarTech x AI",
        color: "violet",
        oneLiner: "Applying generative AI and tooling to content, analysis, and execution workflows",
        tags: ["Generative AI", "Claude Code", "Codex", "Cursor", "VS Code", "Antigravity", "AI Workflows", "Marketing Automation"],
      },
      {
        badge: "CRM, Data & Automation",
        color: "emerald",
        oneLiner: "Audience segmentation, lifecycle communication, reporting, and lead handoff",
        tags: ["HubSpot", "CRM / CDP Concepts", "Audience Segmentation", "Lifecycle Communication", "GA4 / GSC", "Python Reporting", "MQL / Lead Handoff"],
      },
      {
        badge: "Brand, Content & Social",
        color: "amber",
        oneLiner: "Large-brand communication, compliance-aware content, and cross-platform campaigns",
        tags: ["Large Brand Social", "Financial Brand Communication", "Compliance-aware Content", "IP Marketing", "O2O Campaigns", "Content Marketing"],
      },
    ],
  },

  // ==========================================
  // PROJECTS SECTION (Home page cards)
  // ==========================================
  projects: {
    sectionLabel: "Selected Work",
    sectionTitle: "Projects & Case Studies",
    viewCaseStudy: "View Case Study",
    secondaryLabel: "Brand & Content Operations",
  },

  // ==========================================
  // EXPERIENCE SECTION
  // ==========================================
  experience: {
    sectionLabel: "Career Path",
    sectionTitle: "Experience",
    educationLabel: "Education",
    jobs: [
      {
        period: "Jan 2024 — Present",
        title: "Senior Marketing Specialist",
        company: "Jazz Hipster (淇譽電子)", // [KEEP Chinese already included]
        type: "B2B Audio ODM · Digital Marketing",
        highlights: [
          "Led SEO strategy achieving 658% organic search growth and 263% new user increase",
          "Built inbound marketing engine that attracted tier-1 global brand inquiries across Europe, North America, and the Middle East",
          "Grew LinkedIn by 135% and built the company's first EDM system from scratch",
        ],
      },
      {
        period: "Mar 2022 — Present",
        title: "Marketing Freelancer",
        company: "Self-Employed",
        type: "Multi-Industry · Campaign Strategy",
        highlights: [
          "Delivered digital campaigns across tech, F&B, and entertainment",
          "Consistently exceeded client KPIs through data-driven execution",
        ],
      },
      {
        period: "Apr 2023 — Dec 2023",
        title: "Growth Marketing Specialist",
        company: "SenseAge (士覺)", // [KEEP Chinese already included]
        type: "Consumer Electronics · E-commerce",
        highlights: [
          "Achieved 5x revenue growth in new channels",
          "Drove 200% web traffic growth through brand digital transformation",
        ],
      },
      {
        period: "Mar 2019 — Dec 2021",
        title: "Social Media Marketing Manager",
        company: "Spring Tree Technology (春樹科技)", // [KEEP Chinese already included]
        type: "Agency · 10+ Premium Brands",
        highlights: [
          "Led social strategies for 10+ major brands including Richart, CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE",
          "Brain Communication Awards — Gold & Bronze (Social Media Team of the Year)",
          "Digital Singularity Awards — Finalist (Best Social Media Marketing)",
        ],
      },
    ],
    education: {
      school: "Shih Hsin University (世新大學)", // [KEEP Chinese already included]
      degree: "Bachelor's in English",
      period: "2013 — 2017",
    },
  },

  // ==========================================
  // FOOTER / CONTACT
  // ==========================================
  footer: {
    sectionLabel: "Let's Connect",
    sectionTitle: "Interested in working together?",
    subtitle: "I'm always open to discussing new opportunities, creative projects, or ways to add value to your team.",
    email: "syjjj31@gmail.com", // [KEEP]
    copyright: "© 2026 James Hsieh. Built with Next.js.",
    emailLink: "Email",
    linkedinLink: "LinkedIn",
  },

  // ==========================================
  // PROJECT DETAIL PAGE (shared UI text)
  // ==========================================
  projectDetail: {
    backToPortfolio: "Back to Portfolio",
    backToAllProjects: "← Back to All Projects",
    visitLiveSite: "Visit Live Site",
    roleLabel: "Role:",
    periodLabel: "Period:",
    companyLabel: "Company:",
    projectNotFound: "Project Not Found",
    confidentialityNotice: "Confidentiality Notice:",
    confidentialityText: "Some details, data, or client information are omitted or anonymized to fully comply with NDAs and industry confidentiality requirements.",
    copyright: "© 2026 James Hsieh",
  },

  // ==========================================
  // PROJECT DATA (the big one)
  // Each project's translatable content
  // ==========================================
  projectData: {
    "jazz-hipster-seo": {
      tag: "Growth Infrastructure / Organic Growth",
      title: "Turning SEO into Growth Infrastructure",
      company: "Jazz Hipster — B2B Audio ODM",
      description: "I rebuilt site structure, content systems, technical SEO, and cross-team workflows, driving 658% organic search growth while turning SEO from an outsourced task into a long-term growth foundation.",
      metrics: [
        { value: "+658%", label: "Organic Search" },
        { value: "+263%", label: "New Users" },
        { value: "73", label: "Keywords Ranked" },
      ],
      role: "Senior Marketing Specialist",
      period: "Jan 2024 — Present",
      sections: [
        {
          title: "Situation",
          content: [
            "Jazz Hipster is a Taiwan-based OEM/ODM manufacturer of audio and speaker products. The website targeted global B2B customers, but organic visibility and content structure were weak.",
            "Previous SEO work by external contractors did not move the needle. Internally, there was no shared workflow across content, technical, data, and channel teams.",
          ],
        },
        {
          title: "Action",
          content: [
            "I reframed organic growth as content systems, site architecture, technical fixes, GA4/GSC tracking, and cross-team workflow instead of treating SEO as an outsourced checklist.",
            "I restructured navigation, H-tags, pillar pages, metadata, robots.txt, sitemap.xml, and mobile experience so both search engines and B2B buyers could understand the site more clearly.",
            "I built bilingual content themes and internal linking flows that connected OEM/ODM technical articles, product knowledge, and broader audio content into one compounding system.",
            "I coordinated technical writers, engineers, and internal stakeholders, then used GA4/GSC to track the impact of content and site changes.",
          ],
        },
        {
          title: "Result",
          content: [
            "Organic impressions grew 658%. New users increased 263% overall, and 384% on the English site.",
            "73 keywords actively ranking. 10 new SEO-optimized articles published.",
            "The company started treating organic growth as long-term infrastructure, not a one-off SEO task.",
          ],
        },
      ],
    },

    "b2b-lead-gen": {
      tag: "B2B Lead Generation / Inbound Engine",
      title: "Building a Global B2B Inbound Lead Engine",
      company: "Jazz Hipster — B2B Audio ODM",
      description: "I connected the website, LinkedIn, email marketing, and lead handoff into Jazz Hipster's first repeatable B2B inbound system, generating inquiries from Tier-1 brands across Europe, North America, and the Middle East.",
      metrics: [
        { value: "Tier-1", label: "Global Brand Inquiries" },
        { value: "+135%", label: "LinkedIn Growth" },
        { value: "Multi-Region", label: "Inbound Reach" },
      ],
      role: "Senior Marketing Specialist",
      period: "Jan 2024 — Present",
      sections: [
        {
          title: "Situation",
          content: [
            "Jazz Hipster relied mostly on trade shows, relationships, and sales outreach. There was no repeatable digital lead generation process, and the website, LinkedIn, email, and sales handoff were not working as one system.",
            "My job was to connect content, social reach, lead nurturing, and sales follow-up into B2B inbound infrastructure that could keep compounding.",
          ],
        },
        {
          title: "Action",
          content: [
            "I translated the company's audio OEM/ODM capabilities into content themes that worked across LinkedIn and the website: industry insight, manufacturing know-how, product innovation, and buyer questions.",
            "I launched the company's first email marketing and lead nurturing workflow, so prospects from the website and LinkedIn could be followed up consistently instead of sitting in one-off forms or manual tracking.",
            "I connected SEO, LinkedIn, email, and lead handoff into one conversion flow: the website built trust, LinkedIn expanded reach, email nurtured prospects, and sales followed up with high-intent inquiries.",
          ],
        },
        {
          title: "Result",
          content: [
            "LinkedIn followers grew 135%, giving the company a B2B digital channel it could keep building over time.",
            "Tier-1 audio brands from Europe, North America, and the Middle East started reaching out inbound. These were accounts that normally required trade shows or existing relationships to reach.",
            "Digital marketing became connected to lead nurturing and sales conversations, not just awareness.",
          ],
        },
      ],
    },

    "richart-social-media": {
      tag: "Large Brand Social / Compliance Communication",
      title: "Large-Brand Social and Compliance-Aware Communication",
      company: "Spring Tree Technology — Agency",
      description: "At a digital agency, I managed social strategy for 10+ major brands including Richart, CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE, working across financial compliance, multi-level approvals, and IP-led communication.",
      metrics: [
        { value: "10+", label: "Premium Brands" },
        { value: "1.5M", label: "Campaign Reach" },
        { value: "Gold", label: "Brain Awards" },
      ],
      role: "Social Media Marketing Manager",
      period: "Mar 2019 — Dec 2021",
      sections: [
        {
          title: "Situation",
          content: [
            "At Spring Tree Technology, I ran social media strategy and daily execution for 10+ brands across banking, retail, F&B, automotive, and entertainment.",
            "The flagship account was Richart, Taishin Bank's digital banking brand. The challenge: make a bank exciting to Gen Z while dealing with strict financial compliance rules and multi-level approval processes.",
          ],
        },
        {
          title: "Action",
          content: [
            "I built campaigns around the Richart dog mascot IP: storylines, memes, and interactive content designed to feel native to younger audiences rather than corporate.",
            "I ran the annual 'Richart Birthday' O2O events, including UGC activations that collected 1,000+ fan-submitted photos and cross-channel content themes.",
            "I adapted content strategies for Facebook and Instagram separately, keeping content fast and engaging while working through financial compliance, multi-level approvals, and brand voice limits.",
            "I applied the same content collaboration framework across all managed brands: CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE.",
          ],
        },
        {
          title: "Result",
          content: [
            "Brain Communication Awards: Gold & Bronze for Social Media Management Team of the Year.",
            "Digital Singularity Awards: Finalist, Best Social Media Marketing.",
            "Richart Instagram achieved the highest engagement among financial brands during the campaign period.",
            "The 'Richart Birthday' campaign hit 1.5 million impressions and 30,000+ engagements in one month.",
          ],
        },
      ],
    },

    "brand-transformation": {
      tag: "Omnichannel Growth / Brand Transformation",
      title: "From Amazon Dependency to Omnichannel Growth",
      company: "SenseAge — Consumer Electronics",
      description: "I helped SenseAge build Shopify, Google Ads, organic search, and consistent brand messaging, moving the business from single-platform dependence toward a more durable omnichannel model.",
      metrics: [
        { value: "5x", label: "Revenue Growth" },
        { value: "+200%", label: "Web Traffic" },
      ],
      role: "Growth Marketing Specialist",
      period: "Apr 2023 — Dec 2023",
      sections: [
        {
          title: "Situation",
          content: [
            "SenseAge was 100% dependent on Amazon for revenue. No brand website, no direct-to-consumer channel, and no brand identity beyond their Amazon listings.",
          ],
        },
        {
          title: "Action",
          content: [
            "I built the brand's first Shopify storefront and set up Google Ads campaigns, conversion tracking, and channel-level performance checks.",
            "I developed an organic search strategy with product-focused content and basic technical SEO to reduce long-term dependence on paid ads.",
            "I created consistent brand identity, messaging, and product positioning across Amazon, the website, DTC channels, and ad creatives.",
          ],
        },
        {
          title: "Result",
          content: [
            "New channel revenue grew 5x within 8 months.",
            "Website traffic increased 200% through the combination of paid and organic efforts.",
          ],
        },
      ],
    },

    "marketing-automation": {
      tag: "MarTech x AI / Marketing Automation",
      title: "MarTech x AI Marketing Toolkit",
      company: "Cross-Project",
      description: "I apply GA4/GSC data, Python reporting, AI workflows, and React/Next.js prototypes to make content, analysis, reporting, and internal tools move faster from idea to execution.",
      metrics: [
        { value: "Python", label: "Automation & ETL" },
        { value: "React", label: "Next.js / TypeScript" },
        { value: "AI", label: "Workflow Automation" },
      ],
      role: "Digital Marketing / MarTech Implementation",
      period: "Ongoing",
      sections: [
        {
          title: "Overview",
          content: [
            "When the process allows it, I use Python, AI tools, and frontend frameworks directly in marketing workflows to shorten the time spent on content, reporting, data cleanup, and prototype testing.",
            "These skills help marketing teams test ideas faster, produce cleaner data, and communicate technical requirements with less friction.",
          ],
        },
        {
          title: "Data and Reporting Automation",
          content: [
            "I use Python to pull and clean GA4 / GSC data into repeatable marketing reports, cutting down manual spreadsheet work.",
            "For market research, competitor tracking, and content gap analysis, I build scrapers and cleanup flows that can be reused instead of rebuilt each time.",
          ],
        },
        {
          title: "AI-Assisted Workflows",
          content: [
            "I use Claude Code, Codex, Cursor, VS Code, and Antigravity for content operations, data analysis, internal tool prototypes, and marketing process documentation. It goes beyond basic ChatGPT copy generation.",
            "AI output stays inside a human review process, so tone, facts, brand constraints, and business goals are checked before anything ships.",
          ],
        },
        {
          title: "Web and Internal Tool Prototypes",
          content: [
            "I use React / Next.js / TypeScript to build production websites and prototypes, including this portfolio, marketing dashboards, and internal tool concepts.",
            "I also work with WordPress, Shopify, schema basics, and performance optimization, which helps me translate marketing needs into clearer technical specs.",
          ],
        },
      ],
    },

    "rsmedia": {
      tag: "Independent Content Operation",
      title: "Independent Content Platform and Search Growth System",
      company: "Independent Project",
      description: "I co-founded a Mandarin news site and built the WordPress setup, schema, editorial workflow, and search growth system, publishing 1,200+ articles in 9 months and earning Bing News publisher certification.",
      metrics: [
        { value: "1.8M", label: "Bing Impressions" },
        { value: "61.4K", label: "Organic Clicks" },
        { value: "1,200+", label: "Articles Published" },
      ],
      role: "Project Lead & Operator",
      period: "Independent Project",
      sections: [
        {
          title: "Situation",
          content: [
            "I wanted to test whether a lean founding team could build a functioning digital news operation from zero: the site, the editorial process, the SEO, and the growth strategy.",
            "The main challenge was getting a brand-new domain to rank in a media market dominated by established outlets — with a bootstrapped team of two to three people.",
          ],
        },
        {
          title: "Action",
          content: [
            "I built the site on WordPress with custom configuration, schema markup, and performance tuning.",
            "I set up a modular editorial process that could produce keyword-targeted articles at scale. Published 1,200+ articles in nine months.",
            "I focused early Google Search efforts on specific topic clusters and long-tail keywords. Later, I applied for and secured Bing News publisher certification to open up a second traffic channel.",
          ],
        },
        {
          title: "Result",
          content: [
            "Google Search: 52.6K clicks, 476K impressions in the early growth phase.",
            "Bing News: 61.4K clicks, 1.8M impressions after publisher certification.",
            "Proved that a lean, bootstrapped team can build a viable content operation with the right systems and processes in place.",
          ],
        },
      ],
    },
  },
};
