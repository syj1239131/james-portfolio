// ============================================================
// zh.ts — All user-facing text extracted for translation
// 
// INSTRUCTIONS FOR TRANSLATOR:
// 1. Copy this file and rename to zh.ts
// 2. Translate ALL string values (right side of colon) to Traditional Chinese
// 3. DO NOT change any keys (left side of colon)
// 4. DO NOT change any values that are proper nouns/brand names marked with[KEEP]
// 5. For arrays, translate each element
// 6. Some values have [CONTEXT: ...] hints — use them for translation accuracy
// ============================================================

export const translations = {

  // ==========================================
  // NAVBAR
  // ==========================================
  navbar: {
    logo: "謝宇傑", // [KEEP] — 改成中文名「謝宇傑」
    links: {
      about: "關於我",
      projects: "專案作品",
      experience: "經歷",
      contact: "聯絡我",
    },
    resumeButton: "履歷",
    resumeUrl: "/謝宇傑履歷_2026.pdf",
    ctaButton: "與我聯絡",
  },

  // ==========================================
  // HERO SECTION
  // ==========================================
  hero: {
    greeting: "你好，我是",
    name: "謝宇傑", // [KEEP or 謝宇傑]
    roles:[
      "成長行銷人",
      "SEO 策略家",
      "內容建構師",
      "數據驅動思考者",
    ],
    subtitle: "擁有 5 年以上經驗，專注於打造數據驅動、能帶來實質成效的行銷策略。擅長 SEO、成長行銷（Growth Marketing），以及跨越 B2B 與 B2C 領域的跨部門整合執行。",
    viewWorkButton: "查看作品",
    downloadResumeButton: "下載履歷",
    contactButton: "聯絡我",
  },

  // ==========================================
  // SKILLS SECTION
  // ==========================================
  skills: {
    sectionLabel: "專業能力",
    sectionTitle: "技能與專長",
    groups:[
      {
        icon: "🎯",
        label: "行銷策略",
        skills:[
          "B2B 集客式行銷 (Inbound Marketing)",
          "成長行銷 (Growth Marketing)",
          "內容策略與編輯規劃",
          "品牌定位",
          "行銷活動企劃與執行",
          "LinkedIn B2B 意見領袖經營",
        ],
      },
      {
        icon: "📈",
        label: "SEO 與集客式行銷",
        skills:[
          "技術 SEO (Schema, Core Web Vitals)",
          "內容 SEO 與 EEAT 建立",
          "跨國 SEO (中/英)",
          "關鍵字與競品分析",
          "網站架構與爬蟲抓取優化",
        ],
      },
      {
        icon: "📱",
        label: "社群與通路經營",
        skills:[
          "社群媒體 (Meta, LinkedIn, Instagram)",
          "EDM 行銷與潛在客戶培育",
          "數位廣告 (SEM / 付費廣告)",
          "O2O 行銷活動整合",
          "IP 與社群行銷",
        ],
      },
      {
        icon: "📊",
        label: "數據分析與技術工具",
        skills:[
          "GA4",
          "Google Search Console",
          "A/B 測試與 CRO",
          "Python (自動化, API 串接, ETL)",
          "AI 工作流程自動化",
          "React / Next.js / TypeScript",
          "WordPress 與 CMS",
          "行銷自動化流程",
        ],
      },
    ],
  },

  // ==========================================
  // PROJECTS SECTION (Home page cards)
  // ==========================================
  projects: {
    sectionLabel: "精選專案",
    sectionTitle: "專案與案例研究",
    viewCaseStudy: "查看案例",
  },

  // ==========================================
  // EXPERIENCE SECTION
  // ==========================================
  experience: {
    sectionLabel: "職涯軌跡",
    sectionTitle: "工作經歷",
    educationLabel: "學歷",
    jobs:[
      {
        period: "2024年1月 — 仍在職",
        title: "資深行銷專員",
        company: "Jazz Hipster (淇譽電子)", // [KEEP Chinese already included]
        type: "B2B 音響 OEM/ODM · 數位行銷",
        highlights:[
          "主導 SEO 策略，達成自然搜尋成長 658%、新用戶數提升 263%",
          "建立集客式行銷引擎，吸引來自歐洲、北美與中東等地區的一線國際品牌主動洽詢",
          "帶動 LinkedIn 專業人脈與追蹤者成長 135%，並從零導入公司首套整合 EDM 行銷系統",
        ],
      },
      {
        period: "2022年3月 — 仍在職",
        title: "自由接案",
        company: "個人接案",
        type: "跨產業 · 行銷活動策略",
        highlights:[
          "執行跨越科技、餐飲與娛樂產業的數位行銷專案",
          "透過數據驅動的執行策略，持續超越客戶設定的 KPI",
        ],
      },
      {
        period: "2023年4月 — 2023年12月",
        title: "成長行銷專員",
        company: "SenseAge (士覺)", // [KEEP Chinese already included]
        type: "消費性電子產品 · 電子商務",
        highlights:[
          "於新通路達成 5 倍營收成長",
          "透過品牌數位轉型，帶動網站流量成長 200%",
        ],
      },
      {
        period: "2019年3月 — 2021年12月",
        title: "社群行銷經理",
        company: "Spring Tree Technology (春樹科技)", //[KEEP Chinese already included]
        type: "代理商 · 10+ 知名品牌",
        highlights:[
          "主導 10+ 知名品牌（包含 Richart、CTBC Bank、Carrefour、Family Mart、McDonald's、KYMCO 與 17LIVE）社群行銷策略，持續帶來高互動與轉換成果",
          "動腦行銷傳播傑出貢獻獎 — 年度傑出社群經營團隊（一金一銅）",
          "數位奇點獎 — 最佳社群經營行銷獎（入圍）",
        ],
      },
    ],
    education: {
      school: "Shih Hsin University (世新大學)", // [KEEP Chinese already included]
      degree: "英國語文學系 學士",
      period: "2013 — 2017",
    },
  },

  // ==========================================
  // FOOTER / CONTACT
  // ==========================================
  footer: {
    sectionLabel: "與我聯繫",
    sectionTitle: "有興趣一起合作嗎？",
    subtitle: "我隨時歡迎討論新的機會、充滿創意的專案，或是探討如何為您的團隊創造更多價值。",
    email: "syjjj31@gmail.com", // [KEEP]
    copyright: "© 2026 謝宇傑. 透過 Next.js 建置。",
    emailLink: "Email",
    linkedinLink: "LinkedIn",
  },

  // ==========================================
  // PROJECT DETAIL PAGE (shared UI text)
  // ==========================================
  projectDetail: {
    backToPortfolio: "回到作品集",
    backToAllProjects: "← 回到所有專案",
    visitLiveSite: "造訪網站",
    roleLabel: "擔任角色：",
    periodLabel: "專案期間：",
    companyLabel: "公司／客戶：",
    projectNotFound: "找不到該專案",
    confidentialityNotice: "聲明：",
    confidentialityText: "為遵守保密協議 (NDA) 與相關規範，部分細節、數據或客戶資訊已省略或匿名處理。",
    copyright: "© 2026 謝宇傑",
  },

  // ==========================================
  // PROJECT DATA (the big one)
  // Each project's translatable content
  // ==========================================
  projectData: {
    "jazz-hipster-seo": {
      tag: "SEO / 內容策略",
      title: "帶動 658% 自然搜尋成長",
      company: "Jazz Hipster — B2B 音響 OEM/ODM",
      description: "主導雙軌 SEO 策略，結合專業 B2B 內容與主流關鍵字優化。全面翻新網站 UX、建立基礎柱石網頁 (Pillar Pages)，並管理外部合作夥伴、工程師與寫手的跨部門協作。",
      metrics:[
        { value: "+658%", label: "自然搜尋成長" },
        { value: "+263%", label: "新用戶數提升" },
        { value: "73", label: "排名關鍵字" },
      ],
      role: "資深行銷專員",
      period: "2024年1月 — 仍在職",
      sections:[
        {
          title: "背景與挑戰",
          content:[
            "Jazz Hipster 是位於台灣的 OEM/ODM 製造商，專注於高效能音響與揚聲器解決方案。公司網站最初設計主要針對本地受眾，但在瞄準全球 B2B 客戶時，卻面臨自然搜尋能見度低落的問題。",
            "先前由外部承包商執行的 SEO 成效不彰。內部團隊在內容、技術與通路策略上缺乏整合，且經常混淆「廣大受眾」與「專業 B2B」內容的需求差異。",
          ],
        },
        {
          title: "解決方案與執行",
          content:[
            "雙軌內容策略：建立兩條平行的內容主線——提升利基權威度的專家級 B2B 文章，以及帶動流量的主流消費者興趣文章（如電子產品、生活風格、音響知識）。",
            "全面審查並翻新網站 UI/UX 架構——改善站內 SEO 基礎（H 標籤、內容層級、全新的柱石網頁），優化網站導覽與使用者流程。",
            "在技術文章與大眾文章之間建立精密的內部連結佈局，以最大化進入點的多樣性與主題權威性。",
            "整合可用資源管理技術寫手與後端工程師，提升團隊在 SEO 最佳實踐 (EEAT) 與內容製作上的能力，並優化行銷執行流程。",
          ],
        },
        {
          title: "技術優化",
          content:[
            "轉移主機以支援國際流量負載。",
            "縮短網站載入時間並優化行動裝置響應式設計。",
            "應用技術 SEO 更新 (robots.txt, sitemap.xml, metadata 最佳化)。",
          ],
        },
        {
          title: "成果與影響",
          content:[
            "總自然搜尋曝光次數：+658%",
            "新用戶獲取：+263% (全站用戶)；+384% (英文網站)",
            "主要關鍵字排名：成功管理 73 組關鍵字",
            "內容製作：發布 10 篇全新符合 SEO 優化的文章",
            "提升公司在全球 B2B 客戶間的搜尋權威性。改善跨部門共識——團隊認可 SEO 作為關鍵驅動力，進而促成更多數位投資。",
          ],
        },
        {
          title: "關鍵學習",
          content:[
            "跨部門溝通至關重要——向技術與非技術關係人清晰說明 SEO 的價值，能有效達成共識並爭取資源。",
            "深度與廣度並重——將專家級 B2B 資訊與高搜尋量的大眾主題相結合，能同時提升短期流量與長期網站權威性。",
          ],
        },
      ],
    },

    "b2b-lead-gen": {
      tag: "B2B 潛在客戶開發 / LinkedIn",
      title: "全球 B2B 集客式潛在客戶開發",
      company: "Jazz Hipster — B2B 音響 OEM/ODM",
      description: "建立結合 LinkedIn 意見領袖經營與 EDM 行銷的整合型集客式行銷引擎，成功吸引來自歐洲、北美與中東等地的一線國際音響品牌主動洽詢。",
      metrics:[
        { value: "Tier-1", label: "全球品牌洽詢" },
        { value: "+135%", label: "LinkedIn 成長" },
        { value: "Multi-Region", label: "多區域集客觸及" },
      ],
      role: "資深行銷專員",
      period: "2024年1月 — 仍在職",
      sections: [
        {
          title: "背景與挑戰",
          content:[
            "服務全球市場的 B2B 音響 OEM/ODM 廠 Jazz Hipster，過去缺乏系統化的集客式行銷 (Inbound Marketing) 基礎設施。公司主要仰賴實體參展與既有關係進行業務開發，沒有 EDM 系統，LinkedIn 的經營也相當有限。",
            "挑戰在於建立能主動吸引高價值 B2B 潛在客戶的數位管道——這與傳統音響製造業的推播式業務銷售模式有著根本上的差異。",
          ],
        },
        {
          title: "解決方案與執行",
          content:[
            "LinkedIn 意見領袖經營：制定專注於產業洞察、產品創新故事與製造專業知識的內容策略，將公司定位為專業音響領域的知識領導者。",
            "EDM 行銷基礎設施：評估、導入並從零建置公司首套整合式 EDM 平台，為潛在客戶培育 (Lead Nurturing) 與客戶溝通建立可擴展的基礎。",
            "網站到潛在客戶的轉換漏斗：配合 SEO 與內容策略，打造完整的數位生態系，讓網站權威性、LinkedIn 曝光度與精準外展協同運作，進而產生合格的名單。",
          ],
        },
        {
          title: "B2B 潛在客戶開發突破",
          content:[
            "整合性的數位行銷投入成功吸引了跨區域、跨領域的全球知名品牌主動洽詢：",
            "• 以工藝與奢華級音響系統聞名的歐洲頂級高階音響製造商",
            "• 在聲學工程領域擁有百年歷史的全球領先專業音響品牌",
            "• 涵蓋教育科技與特殊製造領域的北美客戶",
            "• 包含頂級飯店與生活風格品牌聯名的中東合作夥伴",
            "• 全球大型科技公司的企業級特殊聲學專案",
            "這些洽詢完全是「集客式」的——這代表品牌方是透過數位足跡（網站 + LinkedIn）主動發現 Jazz Hipster，充分驗證了以內容為驅動的 B2B 行銷策略的有效性。",
          ],
        },
        {
          title: "成果與影響",
          content:[
            "優化 LinkedIn 經營，專業人脈與追蹤者提升 135%，在 B2B 音響製造領域建立具公信力的社群聲量。",
            "成功產生來自一線全球品牌的合格集客式洽詢（包含與世界級聲學工程齊名的品牌），而這些客戶過去通常需要透過參加國際展會或陌生開發才能觸及。",
            "從零建置公司首套具擴展性的 EDM 系統，實現系統化的潛在客戶培育。",
            "證明了數位集客式行銷即使在傳統的 B2B 製造業中，也能成為切實可行的潛在客戶開發管道。",
          ],
        },
        {
          title: "關鍵學習",
          content:[
            "在 B2B 製造業中，能展現深厚領域專業知識的內容（不僅僅是產品型錄），才是自然吸引高價值潛在客戶的關鍵。",
            "當 LinkedIn 與產業意見領袖策略結合使用時，可以媲美實體展會的潛在客戶開發效果，且成本大幅降低。",
          ],
        },
      ],
    },

    "richart-social-media": {
      tag: "社群媒體 / IP 行銷",
      title: "屢獲殊榮的 10+ 知名品牌社群行銷",
      company: "Spring Tree Technology — 代理商",
      description: "主導 10+ 知名品牌社群行銷策略與執行，包含 Richart、CTBC Bank、Carrefour、Family Mart、McDonald's、KYMCO 與 17LIVE。策劃 IP 驅動的行銷活動、O2O 整合行銷以及跨平台內容，專案屢獲業界獎項肯定。",
      metrics:[
        { value: "10+", label: "知名品牌" },
        { value: "1.5M", label: "活動觸及" },
        { value: "Gold", label: "動腦行銷金獎" },
      ],
      role: "社群行銷經理",
      period: "2019年3月 — 2021年12月",
      sections: [
        {
          title: "背景與挑戰",
          content:[
            "在提供全方位數位行銷服務的 Spring Tree Technology (春樹科技)，我負責管理跨越金融、零售、餐飲、汽車與娛樂等產業的 10+ 知名品牌社群策略與日常執行。",
            "指標性客戶 Richart 的挑戰在於，必須將 Z 世代的喜好與數位流行文化轉化為社群的持續成長，同時需應對金融業嚴格的合規要求與多層級的審核流程。",
          ],
        },
        {
          title: "解決方案與執行",
          content:[
            "IP 驅動的社群活動：開發以 Richart 狗狗 IP 為核心的故事線、迷因與互動內容，提升年輕受眾的共鳴與分享意願。",
            "O2O 行銷活動整合：執行年度數位與實體整合的「Richart 生日慶」，包含 UGC 活動（募集超過 1,000 張粉絲投稿照片）以及跨平台的故事性內容主題。",
            "跨平台互動：針對 Facebook 與 Instagram 調整敘事與視覺內容，在符合金融合規標準的前提下，靈活運用當前熱門的社群格式。",
            "跨品牌專業知識：將所學的互動框架與成功經驗應用於所有管理的品牌（包含 CTBC Bank、Carrefour、Family Mart、McDonald's、KYMCO 與 17LIVE），持續創造高互動率。",
          ],
        },
        {
          title: "成果與影響",
          content:[
            "Instagram：在活動期間，達成金融品牌中最高的追蹤者與互動數成長。",
            "Facebook：每月穩定創造數千次互動，多次在同產業的互動率排名中奪冠。",
            "「Richart 生日慶」活動在一個月內達到約 150 萬總曝光次數，並在跨平台產生超過 30,000 次互動。",
            "在所有管理的品牌帳號中，皆穩定交付高互動與高轉換的優異成效。",
          ],
        },
        {
          title: "獎項與肯定",
          content:[
            "動腦行銷傳播傑出貢獻獎：年度傑出社群經營團隊 — 金獎與銅獎。",
            "數位奇點獎：最佳社群經營行銷獎 — 入圍。",
          ],
        },
        {
          title: "關鍵學習",
          content:[
            "當端到端的社群平台掌控權搭配敏捷的社群反饋循環時，能大幅加速品牌影響力。",
            "一致的 IP 故事塑造與新穎的創意格式有助於維持年輕族群的互動，尤其在具備複雜審核流程且高度監管的產業中更為重要。",
            "同時管理多元化的品牌組合，能大幅提升在不同產業間快速調整語氣、策略與創意方向的敏銳度。",
          ],
        },
      ],
    },

    "brand-transformation": {
      tag: "成長行銷",
      title: "從 Amazon 到全通路品牌轉型",
      company: "SenseAge — 消費性電子產品",
      description: "將原本單一依賴 Amazon 平台的營運模式，轉型為全方位的數位品牌佈局，成功建立新銷售通路並帶動流量顯著成長。",
      metrics:[
        { value: "5x", label: "營收成長" },
        { value: "+200%", label: "網站流量" },
      ],
      role: "成長行銷專員",
      period: "2023年4月 — 2023年12月",
      sections:[
        {
          title: "背景與挑戰",
          content:[
            "SenseAge 的消費性電子產品過去完全仰賴 Amazon 作為單一銷售平台。公司亟需建立獨立的數位品牌形象，並讓營收管道多樣化。",
          ],
        },
        {
          title: "解決方案與執行",
          content:[
            "制定並執行全方位的數位轉型策略，從單一平台依賴轉型為多通路的品牌佈局。",
            "建立全新銷售通路、優化網站流量獲取，並在各個數位接觸點建立一致的品牌識別。",
          ],
        },
        {
          title: "成果與影響",
          content:[
            "在新建的銷售通路中達成 5 倍的營收成長。",
            "透過整合數位行銷，帶動網站流量成長 200%。",
            "成功為品牌奠定可持續多通路成長的基礎。",
          ],
        },
      ],
    },

    "marketing-automation": {
      tag: "技術行銷",
      title: "行銷自動化與技術工具開發",
      company: "跨專案",
      description: "建立客製化自動化流程、AI 驅動工作流，以及全端網頁應用程式，完美橋接行銷策略與技術執行——從 Python ETL 腳本、React/Next.js 工具，到整合 LLM 的系統開發。",
      metrics:[
        { value: "Python", label: "自動化與 ETL" },
        { value: "React", label: "Next.js / TypeScript" },
        { value: "AI", label: "工作流程自動化" },
      ],
      role: "行銷科技專家",
      period: "持續中",
      sections:[
        {
          title: "總覽",
          content:[
            "從 Python 自動化腳本到全端網頁應用程式，我的技術工具箱讓我能以更快的速度執行任務、進行更深度的分析，並擴展行銷營運規模。",
          ],
        },
        {
          title: "Python 自動化與資料管線",
          content:[
            "GA4 報表自動化：撰寫 Python 腳本串接 Google Analytics Data API，自動擷取、處理並將績效數據格式化為可執行的報表——省去數小時的手動試算表整理時間。",
            "ETL 管線：針對跨平台的行銷數據集，建立自動化的資料萃取、轉換與載入工作流程。",
            "網路爬蟲與競品分析：開發客製化爬蟲工具，用於市場研究、定價分析與內容缺口識別。",
          ],
        },
        {
          title: "AI 工作流程自動化",
          content:[
            "整合 LLM 的內容產製管線：建立運用大型語言模型 (LLM) 進行大規模內容草擬、翻譯與優化的工作流——並輔以人工審核以確保品質。",
            "AI Agent 工作流程：設計並部署多步驟的 AI 代理系統，處理資料搜集、數據分析與自動化報表任務。",
            "提示詞工程與微調：開發系統化的提示詞框架，確保 AI 輔助輸出的內容在行銷營運中保持一致且高品質。",
          ],
        },
        {
          title: "全端網頁開發",
          content:[
            "React / Next.js / TypeScript：開發正式上線的網頁應用程式，包含本作品集網站、行銷數據儀表板與內部工具。",
            "WordPress 與 CMS：端到端的網站建置，包含客製化設定、Schema 結構化資料標記與效能最佳化。",
            "行銷自動化流程：將 EDM 行銷平台、CRM 系統與分析工具整合成連貫的自動化工作流。",
          ],
        },
        {
          title: "成效",
          content:[
            "透過自動化資料管線，減少大量手動報表製作時間。",
            "實現行銷工具的快速原型開發——從概念到可運作的產品只需數天而非數週。",
            "建立可複製的 AI 輔助內容營運框架，在大規模生產的同時維持內容品質。",
          ],
        },
      ],
    },

    "rsmedia": {
      tag: "SEO / 個人專案",
      title: "獨立新聞平台",
      company: "個人專案",
      description: "作為專業探索的一部分，從零建立並擴展一個獨立的中文新聞網站。成功取得 Bing News 發布商認證，管理超過 1,200 篇文章，並透過技術 SEO 帶動自然搜尋成長。",
      metrics:[
        { value: "1.8M", label: "Bing 曝光次數" },
        { value: "61.4K", label: "自然搜尋點擊" },
        { value: "1,200+", label: "發布文章數" },
      ],
      role: "專案負責人與營運者",
      period: "個人專案",
      sections:[
        {
          title: "背景與挑戰",
          content:[
            "這是一項獨立發起的個人專案，旨在提供超越台灣主流媒體範疇的高品質、值得信賴的新聞與分析——以精簡的架構啟動，作為對數位媒體營運的專業探索。",
            "主要挑戰：在擁擠的媒體市場中為一個全新網域建立搜尋權威性；在資源極有限的情況下管理技術、編輯與成長活動；以及在確保品質與合規性的同時，快速擴展內容產製規模。",
          ],
        },
        {
          title: "擴展內容與 Google 搜尋成長",
          content:[
            "大規模內容產製：管理模組化的編輯流程，在九個月內交付超過 1,200 篇具備時效性且鎖定特定關鍵字的文章。",
            "早期成長階段：透過聚焦關鍵字與主題塑模 (Topic Modeling)，在 Google 搜尋帶來高達 5.26 萬次點擊與超過 47.6 萬次曝光。",
          ],
        },
        {
          title: "Bing News 突破",
          content:[
            "主流平台突破：成功取得官方 Bing News 發布商認證，解鎖 6.14 萬次自然搜尋點擊與 180 萬次曝光。",
            "端到端網站建置：管理完整的網站架構，包含客製化 WordPress 設定、Schema 標記與效能調校。",
          ],
        },
        {
          title: "成果與影響",
          content:[
            "為數位新聞網站的長期成長奠定穩固的技術、編輯與 SEO 基礎。",
            "建立專為快速擴充與可持續擴展而設計的系統與工作流程。",
            "創造具備彈性的框架與營運紀律，能隨時適應不斷改變的平台生態系。",
          ],
        },
        {
          title: "關鍵學習",
          content:[
            "Bing News 仍是新興數位媒體的有效成長管道，尤其在 Google 搜尋演算法頻繁變動的時期。這凸顯了在當今受 AI 影響的搜尋環境中，SEO 策略動態調整的需求日益增加。",
            "具備對技術與編輯工作流的端到端掌控力，能實現快速迭代並具備高度韌性。",
          ],
        },
      ],
    },
  },
};