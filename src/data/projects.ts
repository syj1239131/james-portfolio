export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectSection {
  title: string;
  content: string[];
  imagePlaceholder?: string;
  imageUrl?: string | string[];
  videoLinks?: { label: string; url: string }[];
}

export interface ProjectData {
  slug: string;
  tag: string;
  title: string;
  company: string;
  description: string;
  metrics: ProjectMetric[];
  link: string | null;
  // Detail page fields
  heroColor: string;
  role?: string;
  period?: string;
  sections: ProjectSection[];
}

export const projects: ProjectData[] = [
  // #1 — B2B SEO (strongest card for target companies)
  {
    slug: "jazz-hipster-seo",
    tag: "SEO / Content Strategy",
    title: "Driving 658% Organic Search Growth",
    company: "Jazz Hipster — B2B Audio ODM",
    description:
      "Led a dual-track SEO strategy combining expert B2B content with mainstream keyword optimization. Overhauled site UX, built pillar pages, and managed cross-functional collaboration with engineers and writers.",
    metrics: [
      { value: "+658%", label: "Organic Search" },
      { value: "+263%", label: "New Users" },
      { value: "73", label: "Keywords Ranked" },
    ],
    link: "https://jazzhipster.com/",
    heroColor: "from-blue-500/20 to-indigo-500/20",
    role: "Senior Marketing Specialist",
    period: "Jan 2024 — Present",
    sections: [
      {
        title: "Context & Challenge",
        content: [
          "Jazz Hipster is a Taiwan-based OEM/ODM manufacturer specializing in high-performance audio and speaker solutions. The company's website, originally designed for local audiences, targeted global B2B customers yet suffered from low organic visibility.",
          "Previous SEO efforts by external contractors failed to deliver. In-house teams lacked integration across content, technical, and channel strategies. There was persistent confusion between 'broad audience' and 'professional B2B' content needs.",
        ],
        imageUrl: "/jazz-hipster-product.jpeg",
      },
      {
        title: "Solution & Execution",
        content: [
          "Combined high-authority, professional B2B articles with mainstream keyword optimization, leveraging industry lingo and long-tail keywords for both visibility and authority.",
          "Full audit and revamp of website UI/UX structure — improved on-page SEO fundamentals (H tags, content hierarchy, new pillar pages), streamlined site navigation, and enhanced user flow.",
          "Sophisticated interlinking between technical and general articles to maximize entry-point diversity and topical authority.",
          "Managed communications with technical writers and backend engineers, upskilled the team in SEO best practices (EEAT) and content production.",
        ],
        imageUrl: "/jazz-hipster-seo-article.webp",
      },
      {
        title: "Technical Enhancements",
        content: [
          "Migrated hosting to support international traffic.",
          "Reduced site load time and improved mobile responsiveness.",
          "Applied technical SEO updates (robots.txt, sitemap.xml, metadata optimization).",
        ],
      },
      {
        title: "Results & Impact",
        content: [
          "Total organic impressions: +658%",
          "New user acquisition: +263% (all users); +384% (EN site)",
          "Top keyword rankings: 73 keywords managed",
          "Content production: 10 new SEO-optimized articles published",
          "Enhanced company's search authority among global B2B clients. Improved internal alignment — teams recognized SEO as a key driver, facilitating further digital investments.",
        ],
        imageUrl: "/jazz-hipster-gsc-dashboard.jpg",
      },
      {
        title: "Key Learnings",
        content: [
          "Cross-functional communication is critical — clearly articulating the value of SEO to both technical and non-technical stakeholders enabled alignment and resource buy-in.",
          "Combining depth with breadth — integrating expert-level B2B information with widely searched general topics boosted both short-term traffic and long-term authority.",
        ],
      },
    ],
  },

  // #2 — B2B Lead Gen & LinkedIn Growth (refocused from "EDM System")
  {
    slug: "b2b-lead-gen",
    tag: "B2B Lead Generation / LinkedIn",
    title: "Global B2B Inbound Lead Generation",
    company: "Jazz Hipster — B2B Audio ODM",
    description:
      "Built an integrated inbound marketing engine combining LinkedIn thought leadership and email marketing that attracted proactive inquiries from Tier-1 global audio brands across Europe, North America, and the Middle East.",
    metrics: [
      { value: "Tier-1", label: "Global Brand Inquiries" },
      { value: "+135%", label: "LinkedIn Growth" },
      { value: "Multi-Region", label: "Inbound Reach" },
    ],
    link: null,
    heroColor: "from-cyan-500/20 to-blue-500/20",
    role: "Senior Marketing Specialist",
    period: "Jan 2024 — Present",
    sections: [
      {
        title: "Context & Challenge",
        content: [
          "Jazz Hipster, a B2B audio ODM serving global markets, had no systematic inbound marketing infrastructure. The company relied primarily on trade shows and existing relationships for business development, with no email marketing system and limited LinkedIn presence.",
          "The challenge was to build digital channels that could proactively attract high-value B2B prospects — a fundamentally different motion from traditional outbound sales in the audio manufacturing industry.",
        ],
      },
      {
        title: "Solution & Execution",
        content: [
          "LinkedIn Thought Leadership: Developed a content strategy focused on industry insights, product innovation stories, and manufacturing expertise to position the company as a knowledge leader in professional audio.",
          "Email Marketing Infrastructure: Evaluated, selected, and implemented the company's first integrated EDM platform, establishing a scalable foundation for lead nurturing and client communication.",
          "Website-to-Lead Pipeline: Coordinated with the SEO and content strategy to create a digital ecosystem where website authority, LinkedIn visibility, and targeted outreach work in concert to generate qualified inbound leads.",
        ],
        imageUrl: "__B2B_VISUAL__",
      },
      {
        title: "B2B Lead Generation Breakthrough",
        content: [
          "The integrated digital marketing effort successfully attracted proactive inbound inquiries from globally recognized brands across multiple regions and verticals:",
          "• Premium European high-end audio manufacturers renowned for craftsmanship and luxury-tier sound systems",
          "• Leading global professional audio brands with century-long heritage in acoustic engineering",
          "• North American clients spanning education technology and specialized manufacturing sectors",
          "• Middle Eastern partnerships including premium hospitality and lifestyle brand collaborations",
          "• Enterprise-level special acoustics projects for major global technology corporations",
          "These inquiries were entirely inbound — meaning the brands discovered Jazz Hipster through its digital presence (website + LinkedIn), validating the effectiveness of the content-driven B2B marketing approach.",
        ],
      },
      {
        title: "Results & Impact",
        content: [
          "Professional network and followers grew by 135%, establishing a credible LinkedIn presence in the B2B audio manufacturing space.",
          "Generated qualified inbound inquiries from Tier-1 global brands — including names synonymous with world-class acoustic engineering — that previously would have required trade show presence or cold outreach to reach.",
          "Built the company's first scalable email marketing system, enabling systematic lead nurturing.",
          "Demonstrated that digital inbound marketing can be a viable lead generation channel even in traditional B2B manufacturing industries.",
        ],
      },
      {
        title: "Key Learnings",
        content: [
          "In B2B manufacturing, content that demonstrates deep domain expertise (not just product catalogs) is what attracts high-value prospects organically.",
          "LinkedIn, when used strategically with industry thought leadership, can rival trade shows as a lead generation channel — at a fraction of the cost.",
        ],
      },
    ],
  },

  // #3 — Social Media / Agency (10+ premium brands, awards)
  {
    slug: "richart-social-media",
    tag: "Social Media / IP Marketing",
    title: "Award-Winning Social Media for 10+ Premium Brands",
    company: "Spring Tree Technology — Agency",
    description:
      "Led social media strategy and execution for 10+ major brands including Richart (Taishin Bank), CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE. Developed IP-driven campaigns, O2O activations, and cross-platform content recognized by multiple industry awards.",
    metrics: [
      { value: "10+", label: "Premium Brands" },
      { value: "1.5M", label: "Campaign Reach" },
      { value: "Gold", label: "Brain Awards" },
    ],
    link: null,
    heroColor: "from-emerald-500/20 to-teal-500/20",
    role: "Social Media Marketing Manager",
    period: "Mar 2019 — Dec 2021",
    sections: [
      {
        title: "Context & Challenge",
        content: [
          "At Spring Tree Technology, a full-service digital marketing agency, I managed social media strategy and day-to-day execution for a portfolio of 10+ premium brands across banking, retail, F&B, automotive, and entertainment sectors.",
          "The flagship account, Richart (Taishin Bank's digital banking brand), required translating Gen Z preferences and digital pop culture into sustained social community growth, while navigating strict financial industry compliance and multi-level stakeholder processes.",
        ],
        imageUrl: "/richart-mascot.jpg",
        videoLinks: [
          { label: "年度傑出社群經營團隊", url: "https://www.youtube.com/watch?v=2zYQLOR_iC8" },
          { label: "數位奇點獎", url: "https://www.youtube.com/watch?v=OEO0gbhezUQ" },
        ],
      },
      {
        title: "Solution & Execution",
        content: [
          "IP-Driven Community Campaigns: Developed storytelling arcs, memes, and interactive content featuring the Richart mascot to drive relevance and shareability among younger audiences.",
          "O2O Campaign Integration: Executed annual digital/physical 'Richart Birthday' events, including UGC activation (collecting 1,000+ fan-submitted photos) and story-driven, cross-channel content themes.",
          "Multi-Platform Engagement: Aligned and adapted narrative and visual content for Facebook and Instagram, leveraging trending social formats while meeting compliance standards.",
          "Cross-Brand Expertise: Applied learnings and proven engagement frameworks across all managed brands — CTBC Bank, Carrefour, Family Mart, McDonald's campaigns, KYMCO, and 17LIVE — delivering consistently high engagement rates.",
        ],
        imageUrl: ["/richart-post-1.jpg", "/richart-post-2.jpg"],
      },
      {
        title: "Results & Impact",
        content: [
          "Instagram: Achieved highest follower and engagement growth among financial brands during the campaign period.",
          "Facebook: Consistently generated thousands of monthly interactions, multiple times ranking top in sector engagement.",
          "'Richart Birthday' campaign reached approximately 1.5 million total impressions and generated more than 30,000 cross-channel engagements in one month.",
          "Delivered consistently high engagement and conversion results across all managed brand accounts.",
        ],
      },
      {
        title: "Awards & Recognition",
        content: [
          "Brain Communication Awards: Social Media Management Team of the Year — Gold & Bronze.",
          "Digital Singularity Awards: Finalist, Best Social Media Marketing.",
        ],
      },
      {
        title: "Key Learnings",
        content: [
          "End-to-end social platform ownership accelerates brand impact when paired with agile community feedback loops.",
          "Consistent IP storytelling and fresh creative formats help sustain youth engagement, especially in highly regulated sectors with complex approval layers.",
          "Managing a diverse brand portfolio simultaneously sharpens the ability to rapidly adapt tone, strategy, and creative direction across industries.",
        ],
      },
    ],
  },

  // #4 — Growth Marketing / Brand Transformation
  {
    slug: "brand-transformation",
    tag: "Growth Marketing",
    title: "Amazon to Omnichannel Brand Transformation",
    company: "SenseAge — Consumer Electronics",
    description:
      "Transformed a single-platform Amazon operation into a comprehensive digital brand presence, establishing new sales channels and driving significant traffic growth.",
    metrics: [
      { value: "5x", label: "Revenue Growth" },
      { value: "+200%", label: "Web Traffic" },
    ],
    link: null,
    heroColor: "from-orange-500/20 to-amber-500/20",
    role: "Growth Marketing Specialist",
    period: "Apr 2023 — Dec 2023",
    sections: [
      {
        title: "Context & Challenge",
        content: [
          "SenseAge relied solely on Amazon as its sales platform for consumer electronics products. The company needed to establish an independent digital brand presence and diversify its revenue channels.",
        ],
      },
      {
        title: "Solution & Execution",
        content: [
          "Developed and executed a comprehensive digital transformation strategy, transitioning from single-platform dependency to a multi-channel brand presence.",
          "Built new sales channels, optimized website traffic acquisition, and established brand identity across digital touchpoints.",
        ],
        imageUrl: "/senseage-brand.png",
      },
      {
        title: "Results & Impact",
        content: [
          "Achieved 5x revenue growth in newly established sales channels.",
          "Drove 200% web traffic growth through integrated digital marketing.",
          "Successfully positioned the brand for sustainable multi-channel growth.",
        ],
      },
    ],
  },

  // #5 — Marketing Automation / Technical differentiation
  {
    slug: "marketing-automation",
    tag: "Automation / Full-Stack Development",
    title: "Marketing Automation & Technical Toolkit",
    company: "Cross-Project",
    description:
      "Built custom automation pipelines, AI-powered workflows, and full-stack web applications that bridge the gap between marketing strategy and technical execution — from Python ETL scripts to React/Next.js tools and LLM-integrated systems.",
    metrics: [
      { value: "Python", label: "Automation & ETL" },
      { value: "React", label: "Next.js / TypeScript" },
      { value: "AI", label: "Workflow Automation" },
    ],
    link: null,
    heroColor: "from-slate-500/20 to-gray-500/20",
    role: "Marketing Technologist",
    period: "Ongoing",
    sections: [
      {
        title: "Overview",
        content: [
          "I build the tools I need instead of waiting for them. From Python automation scripts to full-stack web applications, my technical toolkit enables faster execution, deeper analysis, and scalable marketing operations.",
        ],
        imageUrl: "__AUTOMATION_VISUAL__",
      },
      {
        title: "Python Automation & Data Pipelines",
        content: [
          "GA4 Report Automation: Python scripts using the Google Analytics Data API to pull, process, and format performance data into actionable reports — eliminating hours of manual spreadsheet work.",
          "ETL Pipelines: Automated data extraction, transformation, and loading workflows for marketing datasets across multiple platforms.",
          "Web Scraping & Competitive Intelligence: Custom scrapers for market research, pricing analysis, and content gap identification.",
        ],
      },
      {
        title: "AI Workflow Automation",
        content: [
          "LLM-Integrated Content Pipelines: Built workflows leveraging large language models for content drafting, translation, and optimization at scale — with human oversight for quality control.",
          "AI Agent Workflows: Designed and deployed multi-step AI agent systems for research, data analysis, and automated reporting tasks.",
          "Prompt Engineering & Fine-Tuning: Developed systematic prompt frameworks for consistent, high-quality AI-assisted output across marketing operations.",
        ],
      },
      {
        title: "Full-Stack Web Development",
        content: [
          "React / Next.js / TypeScript: Built production web applications including this portfolio site, marketing dashboards, and internal tools.",
          "WordPress & CMS: End-to-end site builds with custom configurations, schema markup, and performance optimization.",
          "Marketing Automation Pipelines: Integrated email marketing platforms, CRM systems, and analytics tools into cohesive automated workflows.",
        ],
      },
      {
        title: "Impact",
        content: [
          "Reduced manual reporting time by 80%+ through automated data pipelines.",
          "Enabled rapid prototyping of marketing tools — from concept to working product in days, not weeks.",
          "Created a replicable framework for AI-assisted content operations that maintains quality at scale.",
          "Demonstrated that technical fluency in a marketing role isn't just a nice-to-have — it's a force multiplier.",
        ],
      },
    ],
  },

  // #6 — Independent Project / Full-stack capability
  {
    slug: "rsmedia",
    tag: "SEO / Independent Project",
    title: "Independent News Platform",
    company: "Independent Project",
    description:
      "Built and scaled an independent Mandarin news website from scratch as a professional exploration. Achieved Bing News publisher certification, managed 1,200+ articles, and drove organic growth through technical SEO.",
    metrics: [
      { value: "1.8M", label: "Bing Impressions" },
      { value: "61.4K", label: "Organic Clicks" },
      { value: "1,200+", label: "Articles Published" },
    ],
    link: null,
    heroColor: "from-purple-500/20 to-pink-500/20",
    role: "Project Lead & Operator",
    period: "Independent Project",
    sections: [
      {
        title: "Context & Challenge",
        content: [
          "An independent initiative to deliver high-quality, trustworthy news and analysis beyond the scope of mainstream Taiwanese outlets — launched with a lean structure as a professional exploration into digital media operations.",
          "Key challenges: building search authority for a completely new domain in a crowded media landscape, managing technical, editorial, and growth activities with minimal resources, and rapidly scaling content production while ensuring quality and compliance.",
        ],
      },
      {
        title: "Scaling Content & Google Search Growth",
        content: [
          "Content Production at Scale: Managed modular editorial processes to deliver over 1,200 timely, keyword-targeted articles within nine months.",
          "Early growth phase: Google Search delivered up to 52.6K clicks and over 476K impressions through focused keyword and topic modeling.",
        ],
        imageUrl: "/rsmedia-ga-dashboard.png",
      },
      {
        title: "Bing News Breakthrough",
        content: [
          "Mainstream breakthrough: Secured official Bing News publisher certification, unlocking 61.4K organic clicks and 1.8M impressions.",
          "End-to-end Site Build: Managed the complete website setup, including custom WordPress configuration, schema markup, and performance tuning.",
        ],
        imageUrl: "/rsmedia-bing-dashboard.png",
      },
      {
        title: "Results & Impact",
        content: [
          "Established a strong technical, editorial, and SEO foundation for long-term digital news growth.",
          "Built systems and workflows designed for rapid scaling and sustainable expansion.",
          "Created a flexible framework and operational discipline that adapts to changing platform ecosystems.",
        ],
      },
      {
        title: "Key Learnings",
        content: [
          "Bing News remains an effective growth avenue for new digital media, especially when Google search cycles are in flux. This underscores the increasing need for dynamic adaptation in SEO strategies within today's AI-influenced search landscape.",
          "End-to-end ownership over technical and editorial workstreams allows rapid iterations and high resilience.",
        ],
      },
    ],
  },
];
