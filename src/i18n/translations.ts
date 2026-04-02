export type Lang = "en" | "zh";

export const translations = {
  // ── Navigation ──
  nav: {
    home: { en: "HOME", zh: "首頁" },
    stylists: { en: "STYLISTS", zh: "造型師" },
    services: { en: "SERVICES", zh: "服務項目" },
    portfolio: { en: "PORTFOLIOS", zh: "作品集" },
    contact: { en: "CONTACT", zh: "聯繫我們" },
    joinTeam: { en: "JOIN OUR TEAM", zh: "加入我們" },
    bookAppointment: { en: "Book Appointment", zh: "預約服務" },
  },

  // ── Hero Slides ──
  hero: {
    slide2: {
      subtitle: {
        en: "Sculpting Stylish Solution",
        zh: "雕琢時尚的完美方案",
      },
      title: {
        en: "BRING OUT THE BEST IN YOU HAIR!",
        zh: "綻放秀髮最美的光彩！",
      },
      description: {
        en: "Welcome to Bisou Hair Salon, your go-to destination for the best hair services in Metrotown Mall. Experience expert haircutting, stunning colouring, and fabulous perms that will leave you looking and feeling amazing.",
        zh: "歡迎來到 Bisou Hair Salon，您在 Metrotown Mall 享受最佳髮型服務的首選之地。體驗專業剪髮、絢麗染髮及出色燙髮，讓您煥然一新。",
      },
    },
    slide3: {
      subtitle: {
        en: "Taiwan · Korea · Japan Expertise · Metrotown",
        zh: "台灣 · 韓國 · 日本專業技藝 · Metrotown",
      },
      title: {
        en: "Sculpting Stylish Solution",
        zh: "雕琢時尚的完美方案",
      },
      description: {
        en: "Our talented team of hair designers from Taiwan, Korea, and Japan, along with the vibrant House music ambiance, ensure a stylish and enjoyable experience at Bisou Hair Salon.",
        zh: "我們來自台灣、韓國和日本的才華橫溢的髮型設計師團隊，搭配充滿活力的 House 音樂氛圍，確保您在 Bisou Hair Salon 享受時尚而愉快的體驗。",
      },
    },
    viewServices: { en: "View Services", zh: "查看服務" },
  },

  // ── About ──
  about: {
    label: { en: "About", zh: "關於我們" },
    title: { en: "Sculpting Stylish Solutions", zh: "雕琢時尚的完美方案" },
    p1: {
      en: "Welcome to Bisou Hair Salon, your go-to destination for the best hair services in Metrotown Mall. Experience expert haircutting, stunning colouring, and fabulous perms that will leave you looking and feeling amazing.",
      zh: "歡迎來到 Bisou Hair Salon，您在 Metrotown Mall 享受最佳髮型服務的首選之地。體驗專業剪髮、絢麗染髮及出色燙髮，讓您煥然一新。",
    },
    p2: {
      en: "Our talented team of hair designers from Taiwan, Korea, and Japan, along with the vibrant House music ambiance, ensure a stylish and enjoyable experience at Bisou Hair Salon.",
      zh: "我們來自台灣、韓國和日本的才華橫溢的髮型設計師團隊，搭配充滿活力的 House 音樂氛圍，確保您在 Bisou Hair Salon 享受時尚而愉快的體驗。",
    },
  },

  // ── Stylists ──
  stylists: {
    label: { en: "Our Team", zh: "我們的團隊" },
    title: { en: "Stylists", zh: "造型師" },
  },

  // ── Services ──
  services: {
    label: { en: "What We Offer", zh: "我們的服務" },
    title: { en: "Services & Pricing", zh: "服務項目與價格" },
    priceNote: {
      en: "Prices may vary depending on hair length, thickness, and stylist.",
      zh: "價格可能因髮長、髮量及造型師而有所不同。",
    },
    categories: {
      cut: {
        title: { en: "Cut", zh: "剪髮" },
        note: { en: "Includes shampoo & blow-dry", zh: "含洗髮及吹整" },
        items: [
          { name: { en: "Men", zh: "男士剪髮" }, price: "$60+" },
          { name: { en: "Women", zh: "女士剪髮" }, price: "$65+" },
          { name: { en: "Kids (10 and under)", zh: "兒童（10 歲以下）" }, price: "20% OFF" },
          { name: { en: "Bang Cut", zh: "瀏海修剪" }, price: "$20" },
        ],
      },
      styling: {
        title: { en: "Styling", zh: "造型" },
        note: { en: "Full shampoo & blow-dry", zh: "全套洗髮及吹整" },
        items: [
          { name: { en: "Men", zh: "男士造型" }, price: "$35+" },
          { name: { en: "Women", zh: "女士造型" }, price: "$45+" },
        ],
      },
      perm: {
        title: { en: "Perm", zh: "燙髮" },
        note: { en: "NOT include haircut", zh: "不含剪髮" },
        items: [
          { name: { en: "Japanese Perm", zh: "日式燙髮" }, price: "$110+" },
          { name: { en: "Japanese Straight Perm", zh: "日式離子燙" }, price: "$250+" },
          { name: { en: "Digital Perm", zh: "數位溫塑燙" }, price: "$250+" },
          { name: { en: "Bangs Straight Perm", zh: "瀏海離子燙" }, price: "$60+" },
        ],
      },
      colour: {
        title: { en: "Colour", zh: "染髮" },
        note: { en: "NOT include haircut & shampoo", zh: "不含剪髮及洗髮" },
        items: [
          { name: { en: "Retouch", zh: "補染" }, price: "$90+" },
          { name: { en: "Colour", zh: "全頭染" }, price: "$95+" },
          { name: { en: "Bleach", zh: "漂髮" }, price: "$135+" },
          { name: { en: "Highlight Bleach", zh: "挑染漂髮" }, price: "$150+" },
          { name: { en: "Balayage", zh: "巴黎染" }, price: "$450+" },
        ],
      },
      treatment: {
        title: { en: "Treatment", zh: "護理" },
        note: { en: "NOT include shampoo price", zh: "不含洗髮費用" },
        items: [
          { name: { en: "Nakano Treatment", zh: "Nakano 護理" }, price: "$140+" },
          { name: { en: "Kerastase Cavier Treatment", zh: "Kérastase 魚子醬護理" }, price: "$90+" },
          { name: { en: "ASTERA Serum (Leave-in)", zh: "ASTERA 精華液（免沖洗）" }, price: "$45 / each bottle" },
          { name: { en: "ASTERA Fluid (Pre-shampoo)", zh: "ASTERA 頭皮精華（洗前護理）" }, price: "$45 / each bottle" },
          { name: { en: "OKARA Professional Care", zh: "OKARA 專業護理" }, price: "$45 / each bottle" },
          { name: { en: "Metal Detox", zh: "金屬排毒護理" }, price: "$30" },
        ],
      },
      updos: {
        title: { en: "Up-Dos", zh: "盤髮造型" },
        note: { en: "", zh: "" },
        items: [
          { name: { en: "Formal Wear Design", zh: "正裝造型設計" }, price: "$60+" },
          { name: { en: "Bride Styling Up-Do Design", zh: "新娘盤髮造型設計" }, price: "$80+" },
          { name: { en: "Special Up-Do Design", zh: "特別盤髮造型設計" }, price: "$120+" },
        ],
      },
    },
  },

  // ── Policy ──
  policy: {
    title: { en: "Cancellation & Reschedule Policy", zh: "取消與改期政策" },
    p1: {
      en: "Cancellations or reschedules must be made at least <strong>48 hours</strong> prior to the appointment.",
      zh: "取消或改期須於預約時間前 <strong>48 小時</strong> 完成。",
    },
    p2: {
      en: "Failure to do so will result in a penalty charge of <strong>30%</strong> of the booked service.",
      zh: "未於規定時間內處理將收取預約服務金額 <strong>30%</strong> 的違約費用。",
    },
    p3: {
      en: "Late arrivals exceeding <strong>15 minutes</strong> may require rescheduling and will be considered a policy violation.",
      zh: "遲到超過 <strong>15 分鐘</strong> 可能需要重新預約，並將視為違反政策。",
    },
    p4: {
      en: "For any changes, cancellations, or queries, please contact us via DM on Instagram or by phone.",
      zh: "如需更改、取消或有任何疑問，請透過 Instagram 私訊或電話與我們聯繫。",
    },
    p5: {
      en: "Your credit card information is securely stored and will only be used in the event of no-shows or violations of our cancellation policy.",
      zh: "您的信用卡資訊將被安全保管，僅在未到場或違反取消政策時使用。",
    },
    p6: {
      en: "Thank you for your understanding and cooperation.",
      zh: "感謝您的理解與配合。",
    },
  },

  // ── Portfolio ──
  portfolio: {
    label: { en: "Our Work", zh: "精選作品" },
    title: { en: "Portfolios", zh: "作品集" },
  },

  // ── Promotion ──
  promotion: {
    label: { en: "Products", zh: "產品推薦" },
    title: { en: "Hair Care Products", zh: "護髮產品" },
    description: {
      en: 'Transform your hair care routine with our top-quality Hair Oil, Shampoo, Hair Mask, and Spray. Our expert stylists will help you find the perfect products for your hair type. Experience salon-quality results at home. Remember to use the Promo Code: "ONLINESELL" to get 15% OFF for Store Pickup',
      zh: '用我們的優質護髮油、洗髮精、髮膜和噴霧改變您的護髮日常。我們的專業造型師將幫助您找到最適合您髮質的產品。在家也能享受沙龍級效果。記得使用優惠碼 "ONLINESELL" 享門市自取 85 折優惠',
    },
  },

  // ── Testimonials ──
  testimonials: {
    label: { en: "Client Love", zh: "顧客好評" },
    title: { en: "What Our Clients Say", zh: "顧客怎麼說" },
  },

  // ── Contact ──
  contact: {
    label: { en: "Visit Us", zh: "蒞臨我們" },
    title: { en: "Get In Touch", zh: "聯繫我們" },
    phone: { en: "Phone", zh: "電話" },
    address: { en: "Address", zh: "地址" },
    hours: { en: "Hours", zh: "營業時間" },
    hoursValue: {
      en: "Monday – Saturday: 10:00 am – 9:00 pm\nSunday – Holiday: 11:00 am – 7:00 pm",
      zh: "週一至週六：上午 10:00 – 晚上 9:00\n週日及假日：上午 11:00 – 下午 7:00",
    },
  },

  // ── Join Team ──
  joinTeam: {
    label: { en: "Careers", zh: "招募" },
    title: { en: "Join Our Team", zh: "加入我們" },
    description: {
      en: "Are you a passionate and talented hair stylist looking to advance your career? At Bisou Hair Salon, we are always on the lookout for creative professionals to join our dynamic team. Our salon offers a vibrant environment where you can showcase your skills, learn from experienced stylists, and grow with us. If you have a keen eye for detail, a dedication to customer satisfaction, and a love for the art of hairdressing, we want to hear from you! Fill out the form below to apply and take the first step toward an exciting new chapter in your career.",
      zh: "您是一位充滿熱情和才華的髮型設計師，正在尋找職涯上的突破嗎？Bisou Hair Salon 持續尋找具有創意的專業人士加入我們充滿活力的團隊。在這裡，您將擁有一個展現專業技術的舞台，向經驗豐富的造型師學習，並與我們共同成長。如果您注重細節、致力於客戶滿意度，並對美髮藝術充滿熱愛，我們期待您的加入！請填寫以下表格申請，為您精彩的職涯新篇章踏出第一步。",
    },
    nameLabel: { en: "Name", zh: "姓名" },
    namePlaceholder: { en: "Your name", zh: "您的姓名" },
    emailLabel: { en: "Email", zh: "電子信箱" },
    emailPlaceholder: { en: "Your email", zh: "您的電子信箱" },
    messageLabel: { en: "Message", zh: "訊息" },
    messagePlaceholder: { en: "Tell us about yourself...", zh: "請簡單介紹自己⋯" },
    submit: { en: "Send Application", zh: "送出申請" },
  },

  // ── Footer ──
  footer: {
    tagline: {
      en: "Taiwan, Korea, and Japan expertise for exceptional styling in Metrotown, Burnaby.",
      zh: "融合台灣、韓國與日本頂級技藝，為 Metrotown 帶來卓越造型體驗。",
    },
    navigation: { en: "Navigation", zh: "網站導覽" },
    quickLinks: { en: "Quick Links", zh: "快速連結" },
    contactTitle: { en: "Contact", zh: "聯繫方式" },
    hoursShort: {
      en: "Mon–Sat: 10 am–9 pm\nSun/Holiday: 11 am–7 pm",
      zh: "週一至週六：10am–9pm\n週日/假日：11am–7pm",
    },
  },

  // ── Scroll to top ──
  scrollToTop: { en: "Scroll to top", zh: "回到頂部" },
} as const;

export type Translations = typeof translations;
