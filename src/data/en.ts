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
      "Growth Marketer",
      "SEO Strategist",
      "Marketing Technologist",
    ],
    subtitle: "7 years in SEO, growth marketing, and B2B inbound. I also happen to code — Python, React, and whatever else gets the job done faster.",
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
    subtitle: "7 years in marketing · builds his own tools",
    cards: [
      {
        badge: "Growth & SEO",
        color: "emerald",
        oneLiner: "Organic acquisition, technical SEO, content that compounds",
        tags: ["Technical SEO", "Content SEO & EEAT", "Keyword & Competitive Analysis", "International SEO (EN/ZH)", "GA4", "Google Search Console", "A/B Testing & CRO"],
      },
      {
        badge: "B2B & Lead Gen",
        color: "blue",
        oneLiner: "Inbound marketing, LinkedIn thought leadership, lead nurture",
        tags: ["B2B Inbound Marketing", "LinkedIn B2B", "Email Marketing (EDM)", "Lead Nurturing", "Marketing Automation"],
      },
      {
        badge: "Social & Brand",
        color: "amber",
        oneLiner: "Community campaigns, IP storytelling, cross-platform execution",
        tags: ["Social Media (Meta, IG, LinkedIn)", "IP & Community Marketing", "Brand Positioning", "Content Strategy & Editorial", "O2O Campaigns", "Digital Advertising"],
      },
      {
        badge: "MarTech & Code",
        color: "violet",
        oneLiner: "Python, React/Next.js — I build what I need, not just brief it",
        tags: ["Python", "React / Next.js / TypeScript", "AI / LLM Workflows", "WordPress", "ETL & Data Pipelines", "Automation Scripts"],
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
      tag: "SEO / Content Strategy",
      title: "Driving 658% Organic Search Growth",
      company: "Jazz Hipster — B2B Audio ODM",
      description: "I ran a dual-track SEO strategy at a B2B audio manufacturer: expert content for niche authority, mainstream articles for traffic volume. Rebuilt the site UX, fixed technical SEO, and coordinated engineers, writers, and stakeholders.",
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
            "Jazz Hipster is a Taiwan-based OEM/ODM manufacturer of audio and speaker products. The website targeted global B2B customers but had almost no organic visibility.",
            "Previous SEO work by external contractors didn't move the needle. Internally, there was no alignment between content, technical, and channel teams, and nobody could agree on whether the site should target broad audiences or professional B2B buyers.",
          ],
        },
        {
          title: "Action",
          content: [
            "I built two parallel content tracks: expert B2B articles (OEM processes, acoustic engineering topics) for niche authority, and mainstream consumer-interest articles (electronics, lifestyle, audio guides) for traffic volume.",
            "I audited and restructured the entire site: fixed H-tag hierarchy, built pillar pages, redesigned navigation, and improved content flow for both search engines and users.",
            "I set up internal linking between technical and general articles to build topical authority and diversify search entry points.",
            "On the technical side: migrated hosting to handle international traffic, improved page speed and mobile responsiveness, and cleaned up robots.txt, sitemap.xml, and metadata.",
            "I also managed the team side. I coordinated technical writers and backend engineers, and trained the internal team on EEAT principles and content production workflows.",
          ],
        },
        {
          title: "Result",
          content: [
            "Organic impressions grew 658%. New users increased 263% overall, and 384% on the English site.",
            "73 keywords actively ranking. 10 new SEO-optimized articles published.",
            "The internal team started treating SEO as a real growth channel, which led to further investment in digital marketing.",
          ],
        },
      ],
    },

    "b2b-lead-gen": {
      tag: "B2B Lead Generation / LinkedIn",
      title: "Global B2B Inbound Lead Generation",
      company: "Jazz Hipster — B2B Audio ODM",
      description: "I built Jazz Hipster's first inbound marketing system from scratch: LinkedIn content strategy, email marketing platform, and a website-to-lead pipeline. The result was Tier-1 global brands reaching out to us instead of the other way around.",
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
            "Jazz Hipster had no inbound marketing infrastructure at all. Business development relied on trade shows and existing relationships. There was no email marketing system and the LinkedIn page was barely active.",
            "The goal was to build digital channels that bring prospects to us, which is a fundamentally different approach from the cold outreach that's standard in audio manufacturing.",
          ],
        },
        {
          title: "Action",
          content: [
            "I developed a LinkedIn content strategy around industry insights, product innovation stories, and manufacturing expertise to position the company as a knowledge leader in professional audio.",
            "I evaluated and implemented the company's first EDM platform, setting up the infrastructure for lead nurturing and client communication from scratch.",
            "I connected the dots between SEO, LinkedIn content, and email outreach so they worked as one system: the website builds authority, LinkedIn drives awareness, and email nurtures leads.",
          ],
        },
        {
          title: "Result",
          content: [
            "LinkedIn followers grew 135%.",
            "We started receiving inbound inquiries from Tier-1 audio brands in Europe, North America, and the Middle East. These were companies that would normally require trade show meetings or cold outreach to even get on their radar.",
            "Built the company's first scalable email marketing system from zero.",
          ],
        },
      ],
    },

    "richart-social-media": {
      tag: "Social Media / IP Marketing",
      title: "Award-Winning Social Media for 10+ Premium Brands",
      company: "Spring Tree Technology — Agency",
      description: "I managed social media for 10+ major brands at a digital agency, including Richart (Taishin Bank), CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE. Won Gold at the Brain Communication Awards.",
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
            "I adapted content strategies for Facebook and Instagram separately, using trending formats while staying within compliance guardrails.",
            "I applied the same engagement frameworks across all managed brands: CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE.",
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
      tag: "Growth Marketing",
      title: "Amazon to Omnichannel Brand Transformation",
      company: "SenseAge — Consumer Electronics",
      description: "SenseAge sold consumer electronics exclusively through Amazon. I built their independent brand presence: Shopify site, Google Ads, organic search strategy, and a consistent brand identity across channels.",
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
            "I built the brand's first Shopify storefront and set up Google Ads campaigns (Search + Shopping) to drive traffic to it.",
            "I developed an organic search strategy with product-focused content and basic technical SEO to reduce long-term dependence on paid ads.",
            "I created a consistent brand identity (visual language, messaging, product positioning) that worked across Amazon, the website, and ad creatives.",
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
      tag: "Technical Marketing",
      title: "Marketing Automation & Technical Toolkit",
      company: "Cross-Project",
      description: "I build the tools I need. Python scripts for reporting automation, AI workflows for content operations, and full-stack web apps with React/Next.js. This is a snapshot of the technical side of my marketing work.",
      metrics: [
        { value: "Python", label: "Automation & ETL" },
        { value: "React", label: "Next.js / TypeScript" },
        { value: "AI", label: "Workflow Automation" },
      ],
      role: "Marketing Technologist",
      period: "Ongoing",
      sections: [
        {
          title: "Overview",
          content: [
            "I build my own tools instead of waiting for someone else to build them. This page shows what that looks like in practice.",
          ],
        },
        {
          title: "Python Automation & Data Pipelines",
          content: [
            "GA4 Report Automation: Python scripts using the Google Analytics Data API to pull, process, and format performance data into reports. Cuts hours of manual spreadsheet work.",
            "ETL Pipelines: Automated data extraction, transformation, and loading across multiple marketing platforms.",
            "Web Scraping: Custom scrapers for market research, pricing analysis, and content gap identification.",
          ],
        },
        {
          title: "AI Workflow Automation",
          content: [
            "LLM-Integrated Content Pipelines: Workflows using large language models for content drafting, translation, and optimization at scale, with human review baked in.",
            "AI Agent Systems: Multi-step agent workflows for research, data analysis, and automated reporting.",
            "Prompt Engineering: Systematic prompt frameworks for consistent AI-assisted output across marketing tasks.",
          ],
        },
        {
          title: "Full-Stack Web Development",
          content: [
            "React / Next.js / TypeScript: Production web apps including this portfolio site, marketing dashboards, and internal tools.",
            "WordPress: End-to-end site builds with schema markup and performance optimization.",
            "Marketing Automation: Integrated email platforms, CRM systems, and analytics tools into automated workflows.",
          ],
        },
      ],
    },

    "rsmedia": {
      tag: "SEO / Independent Project",
      title: "Independent News Platform",
      company: "Independent Project",
      description: "I built and ran a Mandarin news site from scratch as a side project. Got Bing News publisher certification, published 1,200+ articles in 9 months, and hit 1.8M Bing impressions.",
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
            "I wanted to test whether I could build a functioning digital news operation from zero: the site, the editorial process, the SEO, and the growth strategy.",
            "The main challenge was getting a brand-new domain to rank in a media market dominated by established outlets, all while running everything solo.",
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
            "Proved that a solo operator can build a viable content operation with the right systems in place.",
          ],
        },
      ],
    },
  },
};
