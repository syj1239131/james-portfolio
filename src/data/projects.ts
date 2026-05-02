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
  // #1 — B2B Lead Gen
  {
    slug: "b2b-lead-gen",
    tag: "B2B Lead Generation / Inbound Engine",
    title: "Building a Global B2B Inbound Lead Engine",
    company: "Jazz Hipster — B2B Audio ODM",
    description:
      "I connected the website, LinkedIn, email marketing, and lead handoff into Jazz Hipster's first repeatable B2B inbound system, generating inquiries from Tier-1 brands across Europe, North America, and the Middle East.",
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
        imageUrl: "__B2B_VISUAL__",
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

  // #2 — Marketing Automation / Technical Toolkit
  {
    slug: "marketing-automation",
    tag: "MarTech x AI / Marketing Automation",
    title: "MarTech x AI Marketing Toolkit",
    company: "Cross-Project",
    description:
      "I apply GA4/GSC data, Python reporting, AI workflows, and React/Next.js prototypes to make content, analysis, reporting, and internal tools move faster from idea to execution.",
    metrics: [
      { value: "Python", label: "Automation & ETL" },
      { value: "React", label: "Next.js / TypeScript" },
      { value: "AI", label: "Workflow Automation" },
    ],
    link: null,
    heroColor: "from-slate-500/20 to-gray-500/20",
    role: "Digital Marketing / MarTech Implementation",
    period: "Ongoing",
    sections: [
      {
        title: "Overview",
        content: [
          "When the process allows it, I use Python, AI tools, and frontend frameworks directly in marketing workflows to shorten the time spent on content, reporting, data cleanup, and prototype testing.",
          "These skills help marketing teams test ideas faster, produce cleaner data, and communicate technical requirements with less friction.",
        ],
        imageUrl: "__AUTOMATION_VISUAL__",
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

  // #3 — Jazz Hipster Growth Infrastructure
  {
    slug: "jazz-hipster-seo",
    tag: "Growth Infrastructure / Organic Growth",
    title: "Turning SEO into Growth Infrastructure",
    company: "Jazz Hipster — B2B Audio ODM",
    description:
      "I rebuilt site structure, content systems, technical SEO, and cross-team workflows, driving 658% organic search growth while turning SEO from an outsourced task into a long-term growth foundation.",
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
        title: "Situation",
        content: [
          "Jazz Hipster is a Taiwan-based OEM/ODM manufacturer of audio and speaker products. The website targeted global B2B customers, but organic visibility and content structure were weak.",
          "Previous SEO work by external contractors did not move the needle. Internally, there was no shared workflow across content, technical, data, and channel teams.",
        ],
        imageUrl: "/jazz-hipster-product.jpeg",
      },
      {
        title: "Action",
        content: [
          "I reframed organic growth as content systems, site architecture, technical fixes, GA4/GSC tracking, and cross-team workflow instead of treating SEO as an outsourced checklist.",
          "I restructured navigation, H-tags, pillar pages, metadata, robots.txt, sitemap.xml, and mobile experience so both search engines and B2B buyers could understand the site more clearly.",
          "I built bilingual content themes and internal linking flows that connected OEM/ODM technical articles, product knowledge, and broader audio content into one compounding system.",
          "I coordinated technical writers, engineers, and internal stakeholders, then used GA4/GSC to track the impact of content and site changes.",
        ],
        imageUrl: "/jazz-hipster-seo-article.webp",
      },
      {
        title: "Result",
        content: [
          "Organic impressions grew 658%. New users increased 263% overall, and 384% on the English site.",
          "73 keywords actively ranking. 10 new SEO-optimized articles published.",
          "The company started treating organic growth as long-term infrastructure, not a one-off SEO task.",
        ],
        imageUrl: "/jazz-hipster-gsc-dashboard.jpg",
      },
    ],
  },

  // #4 — SenseAge Brand Transformation
  {
    slug: "brand-transformation",
    tag: "Omnichannel Growth / Brand Transformation",
    title: "From Amazon Dependency to Omnichannel Growth",
    company: "SenseAge — Consumer Electronics",
    description:
      "I helped SenseAge build Shopify, Google Ads, organic search, and consistent brand messaging, moving the business from single-platform dependence toward a more durable omnichannel model.",
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
        imageUrl: "/senseage-brand.png",
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

  // #5 — Richart Social Media
  {
    slug: "richart-social-media",
    tag: "Large Brand Social / Compliance Communication",
    title: "Large-Brand Social and Compliance-Aware Communication",
    company: "Spring Tree Technology — Agency",
    description:
      "At a digital agency, I managed social strategy for 10+ major brands including Richart, CTBC Bank, Carrefour, Family Mart, McDonald's, KYMCO, and 17LIVE, working across financial compliance, multi-level approvals, and IP-led communication.",
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
        title: "Situation",
        content: [
          "At Spring Tree Technology, I ran social media strategy and daily execution for 10+ brands across banking, retail, F&B, automotive, and entertainment.",
          "The flagship account was Richart, Taishin Bank's digital banking brand. The challenge: make a bank exciting to Gen Z while dealing with strict financial compliance rules and multi-level approval processes.",
        ],
        imageUrl: "/richart-mascot.jpg",
        videoLinks: [
          { label: "年度傑出社群經營團隊", url: "https://www.youtube.com/watch?v=2zYQLOR_iC8" },
          { label: "數位奇點獎", url: "https://www.youtube.com/watch?v=OEO0gbhezUQ" },
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
        imageUrl: ["/richart-post-1.jpg", "/richart-post-2.jpg"],
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

  // #6 — RSMedia
  {
    slug: "rsmedia",
    tag: "Independent Content Operation",
    title: "Independent Content Platform and Search Growth System",
    company: "Independent Project",
    description:
      "I co-founded a Mandarin news site and built the WordPress setup, schema, editorial workflow, and search growth system, publishing 1,200+ articles in 9 months and earning Bing News publisher certification.",
    metrics: [
      { value: "1.8M", label: "Bing Impressions" },
      { value: "61.4K", label: "Organic Clicks" },
      { value: "1,200+", label: "Articles Published" },
    ],
    link: null,
    heroColor: "from-purple-500/20 to-pink-500/20",
    role: "Co-Founder & Lead Operator",
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
        imageUrl: "/rsmedia-ga-dashboard.png",
      },
      {
        title: "Result",
        content: [
          "Google Search: 52.6K clicks, 476K impressions in the early growth phase.",
          "Bing News: 61.4K clicks, 1.8M impressions after publisher certification.",
          "Proved that a lean, bootstrapped team can build a viable content operation with the right systems and processes in place.",
        ],
        imageUrl: "/rsmedia-bing-dashboard.png",
      },
    ],
  },
];
