export type Lang = "en" | "zh" | "ja";

export const translations = {
  // ── Navigation ──
  nav: {
    home: { en: "HOME", zh: "首頁", ja: "ホーム" },
    stylists: { en: "STYLISTS", zh: "造型師", ja: "スタイリスト" },
    services: { en: "SERVICES", zh: "服務項目", ja: "サービス" },
    portfolio: { en: "PORTFOLIO", zh: "作品集", ja: "ポートフォリオ" },
    joinTeam: { en: "JOIN OUR TEAM", zh: "加入我們", ja: "採用情報" },
    shop: { en: "SHOP", zh: "商店", ja: "ショップ" },
    bookAppointment: { en: "Book Appointment", zh: "預約服務", ja: "ご予約" },
  },

  // ── Hero Slides ──
  hero: {
    slide2: {
      subtitle: {
        en: "Premium Hair Care · Personalized Service",
        zh: "頂級護髮 · 個人化服務",
        ja: "プレミアムヘアケア · パーソナルサービス",
      },
      title: {
        en: "Where Style Meets Sophistication",
        zh: "風格與品味的完美邂逅",
        ja: "スタイルと洗練が出会う場所",
      },
      description: {
        en: "Our skilled stylists merge precision and innovation to create looks that exceed expectations.",
        zh: "我們的專業造型師以精湛技藝與創新理念，打造超越期待的完美造型。",
        ja: "熟練のスタイリストが精密な技術と革新を融合し、期待を超えるスタイルをお届けします。",
      },
    },
    slide3: {
      subtitle: {
        en: "Japanese & Taiwanese Expertise · Richmond, BC",
        zh: "日式與台式專業技藝 · 列治文 BC",
        ja: "日本・台湾の専門技術 · リッチモンド BC",
      },
      title: {
        en: "Bring Out the Best in Your Hair",
        zh: "綻放秀髮最美的光彩",
        ja: "あなたの髪の最高の美しさを引き出す",
      },
      description: {
        en: "Precision meets artistry. Experience personalized styling in a harmonious, relaxing ambience.",
        zh: "精準技術與藝術美感的結合，在和諧舒適的氛圍中，體驗量身訂製的造型服務。",
        ja: "精密な技術とアートの融合。調和のとれた癒しの空間で、パーソナライズされたスタイリングを体験してください。",
      },
    },
    viewServices: { en: "View Services", zh: "查看服務", ja: "サービスを見る" },
  },

  // ── About ──
  about: {
    label: { en: "About", zh: "關於我們", ja: "サロンについて" },
    title: { en: "Sculpting Stylish Solutions", zh: "雕琢時尚的完美方案", ja: "スタイリッシュなソリューションを創造" },
    p1: {
      en: "Welcome to Initial Hair Salon, where Japanese and Taiwanese expertise combine for exceptional styling. Our stylists merge precision and innovation to create personalized experiences that exceed expectations.",
      zh: "歡迎來到 Initial Hair Salon，在這裡日式與台式的頂級造型技藝完美融合。我們的造型師以精湛的技術與創新理念，為您打造超越期待的個性化體驗。",
      ja: "Initial Hair Salon へようこそ。日本と台湾の高い専門技術を融合し、卓越したスタイリングをご提供いたします。精密な技術と革新的な発想で、お客様一人ひとりに合わせた特別な体験をお届けします。",
    },
    p2: {
      en: "Step in and immerse yourself in our salon's harmonious and relaxing ambience. Every visit is crafted to make you feel your very best.",
      zh: "踏入我們的沙龍，沉浸在和諧舒適的氛圍之中。每一次到訪，都是為了讓您感受最美好的自己。",
      ja: "サロンの調和のとれた心地よい空間で、特別なひとときをお過ごしください。ご来店のたびに、最高の美しさを感じていただけるよう心を込めてお迎えいたします。",
    },
  },

  // ── Stylists ──
  stylists: {
    label: { en: "Our Team", zh: "我們的團隊", ja: "チーム紹介" },
    title: { en: "Stylists", zh: "造型師", ja: "スタイリスト" },
  },

  // ── Services ──
  services: {
    label: { en: "What We Offer", zh: "我們的服務", ja: "提供サービス" },
    title: { en: "Services & Pricing", zh: "服務項目與價格", ja: "サービス・料金" },
    priceNote: {
      en: "Prices may vary depending on hair length, thickness, and stylist.",
      zh: "價格可能因髮長、髮量及造型師而有所不同。",
      ja: "料金は髪の長さ、量、担当スタイリストにより異なる場合がございます。",
    },
    categories: {
      cut: {
        title: { en: "Cut", zh: "剪髮", ja: "カット" },
        note: {
          en: "Includes shampoo & blow-dry",
          zh: "含洗髮及吹整",
          ja: "シャンプー＆ブロー込み",
        },
        items: [
          { name: { en: "Men Cut", zh: "男士剪髮", ja: "メンズカット" }, price: "$55 – $80" },
          { name: { en: "Women Cut", zh: "女士剪髮", ja: "レディースカット" }, price: "$60 – $80" },
        ],
      },
      perm: {
        title: { en: "Perm", zh: "燙髮", ja: "パーマ" },
        note: {
          en: "Does not include hair cut, shampoo & blow-dry",
          zh: "不含剪髮、洗髮及吹整",
          ja: "カット・シャンプー＆ブローは含まれません",
        },
        items: [
          { name: { en: "Japanese Perm", zh: "日式燙髮", ja: "ジャパニーズパーマ" }, price: "From $110" },
          { name: { en: "Japanese Straight Perm", zh: "日式離子燙", ja: "縮毛矯正" }, price: "From $250" },
          { name: { en: "Digital Perm", zh: "數位溫塑燙", ja: "デジタルパーマ" }, price: "From $250" },
        ],
      },
      colour: {
        title: { en: "Colour", zh: "染髮", ja: "カラー" },
        note: {
          en: "Does not include shampoo & blow-dry",
          zh: "不含洗髮及吹整",
          ja: "シャンプー＆ブローは含まれません",
        },
        items: [
          { name: { en: "Retouch", zh: "補染", ja: "リタッチ" }, price: "From $95" },
          { name: { en: "Colour", zh: "全頭染", ja: "フルカラー" }, price: "From $95" },
          { name: { en: "Bleach + Colour", zh: "漂染", ja: "ブリーチ＋カラー" }, price: "From $360" },
          { name: { en: "Highlight / Balayage", zh: "挑染 / 巴黎染", ja: "ハイライト / バレイヤージュ" }, price: "From $400" },
        ],
      },
      treatment: {
        title: { en: "Treatment", zh: "護理", ja: "トリートメント" },
        note: {
          en: "Does not include shampoo price",
          zh: "不含洗髮費用",
          ja: "シャンプー料金は含まれません",
        },
        items: [
          { name: { en: "Nakano Treatment", zh: "Nakano 護理", ja: "ナカノトリートメント" }, price: "From $120" },
          { name: { en: "Tokio Treatment", zh: "Tokio 護理", ja: "TOKIOトリートメント" }, price: "From $130" },
          { name: { en: "Scalp Treatment", zh: "頭皮護理", ja: "スカルプトリートメント" }, price: "From $120" },
        ],
      },
      other: {
        title: { en: "Other", zh: "其他", ja: "その他" },
        note: { en: "", zh: "", ja: "" },
        items: [
          { name: { en: "Shampoo & Blow Dry", zh: "洗髮及吹整", ja: "シャンプー＆ブロー" }, price: "From $45" },
        ],
      },
    },
  },

  // ── Policy ──
  policy: {
    title: { en: "Cancellation & Reschedule Policy", zh: "取消與改期政策", ja: "キャンセル・変更ポリシー" },
    p1: {
      en: "Cancellations or reschedules must be made at least <strong>48 hours</strong> prior to the appointment.",
      zh: "取消或改期須於預約時間前 <strong>48 小時</strong> 完成。",
      ja: "キャンセルまたは変更は、ご予約の <strong>48 時間前</strong> までにお願いいたします。",
    },
    p2: {
      en: "Failure to do so will result in a penalty charge of <strong>30%</strong> of the booked service.",
      zh: "未於規定時間內處理將收取預約服務金額 <strong>30%</strong> 的違約費用。",
      ja: "期限内にご連絡がない場合、ご予約サービス料金の <strong>30%</strong> をキャンセル料として申し受けます。",
    },
    p3: {
      en: "Late arrivals exceeding <strong>15 minutes</strong> may require rescheduling and will be considered a policy violation.",
      zh: "遲到超過 <strong>15 分鐘</strong> 可能需要重新預約，並將視為違反政策。",
      ja: "<strong>15 分</strong> 以上の遅刻はご予約の変更が必要となり、ポリシー違反とみなされます。",
    },
    p4: {
      en: "For any changes, cancellations, or queries, please contact us via DM on Instagram or by phone.",
      zh: "如需更改、取消或有任何疑問，請透過 Instagram 私訊或電話與我們聯繫。",
      ja: "変更・キャンセル・その他のお問い合わせは、Instagramのダイレクトメッセージまたはお電話にてご連絡ください。",
    },
    p5: {
      en: "Your credit card information is securely stored and will only be used in the event of no-shows or violations of our cancellation policy.",
      zh: "您的信用卡資訊將被安全保管，僅在未到場或違反取消政策時使用。",
      ja: "お客様のクレジットカード情報は安全に保管され、無断キャンセルまたはポリシー違反の場合にのみ使用されます。",
    },
    p6: {
      en: "Thank you for your understanding and cooperation.",
      zh: "感謝您的理解與配合。",
      ja: "ご理解とご協力をお願い申し上げます。",
    },
  },

  // ── Portfolio ──
  portfolio: {
    label: { en: "Our Work", zh: "精選作品", ja: "作品紹介" },
    title: { en: "Portfolio", zh: "作品集", ja: "ポートフォリオ" },
  },

  // ── Testimonials ──
  testimonials: {
    label: { en: "Client Love", zh: "顧客好評", ja: "お客様の声" },
    title: { en: "What Our Clients Say", zh: "顧客怎麼說", ja: "お客様からの評価" },
  },

  // ── Contact ──
  contact: {
    label: { en: "Visit Us", zh: "蒞臨我們", ja: "アクセス" },
    title: { en: "Get In Touch", zh: "聯繫我們", ja: "お問い合わせ" },
    phone: { en: "Phone", zh: "電話", ja: "電話番号" },
    address: { en: "Address", zh: "地址", ja: "住所" },
    hours: { en: "Hours", zh: "營業時間", ja: "営業時間" },
    hoursValue: {
      en: "Monday – Sunday: 11:00 am – 7:00 pm",
      zh: "週一至週日：上午 11:00 – 下午 7:00",
      ja: "月曜日〜日曜日：11:00〜19:00",
    },
  },

  // ── Join Team ──
  joinTeam: {
    label: { en: "Careers", zh: "招募", ja: "採用情報" },
    title: { en: "Join Our Team", zh: "加入我們", ja: "チームに参加" },
    description: {
      en: "Are you a passionate and talented hair stylist looking to advance your career? At Initial Salon, we are always on the lookout for creative professionals to join our dynamic team. Our salon offers a vibrant environment where you can showcase your skills, learn from experienced stylists, and grow with us. If you have a keen eye for detail, a dedication to customer satisfaction, and a love for the art of hairdressing, we want to hear from you! Fill out the form below to apply and take the first step toward an exciting new chapter in your career.",
      zh: "您是一位充滿熱情和才華的髮型設計師，正在尋找職涯上的突破嗎？Initial Salon 持續尋找具有創意的專業人士加入我們充滿活力的團隊。在這裡，您將擁有一個展現專業技術的舞台，向經驗豐富的造型師學習，並與我們共同成長。如果您注重細節、致力於客戶滿意度，並對美髮藝術充滿熱愛，我們期待您的加入！請填寫以下表格申請，為您精彩的職涯新篇章踏出第一步。",
      ja: "情熱と才能溢れるヘアスタイリストの方、キャリアをさらに高めませんか？Initial Salon では、クリエイティブなプロフェッショナルを常に募集しています。当サロンでは、技術を発揮できる活気ある環境をご用意しており、経験豊富なスタイリストから学びながら共に成長できます。細部へのこだわり、お客様満足への情熱、そしてヘアスタイリングへの愛をお持ちの方、ぜひご連絡ください。以下のフォームにご記入いただき、新たなキャリアへの第一歩を踏み出してください。",
    },
    nameLabel: { en: "Name", zh: "姓名", ja: "お名前" },
    namePlaceholder: { en: "Your name", zh: "您的姓名", ja: "お名前をご入力ください" },
    emailLabel: { en: "Email", zh: "電子信箱", ja: "メールアドレス" },
    emailPlaceholder: { en: "Your email", zh: "您的電子信箱", ja: "メールアドレスをご入力ください" },
    messageLabel: { en: "Message", zh: "訊息", ja: "メッセージ" },
    messagePlaceholder: { en: "Tell us about yourself...", zh: "請簡單介紹自己⋯", ja: "自己紹介をご記入ください..." },
    submit: { en: "Send Application", zh: "送出申請", ja: "応募する" },
  },

  // ── Footer ──
  footer: {
    tagline: {
      en: "Japanese and Taiwanese expertise for exceptional styling in Richmond, BC.",
      zh: "融合日式與台式頂級技藝，為列治文帶來卓越造型體驗。",
      ja: "日本・台湾の専門技術で、リッチモンドに卓越したスタイリングをお届けします。",
    },
    navigation: { en: "Navigation", zh: "網站導覽", ja: "ナビゲーション" },
    quickLinks: { en: "Quick Links", zh: "快速連結", ja: "クイックリンク" },
    contactTitle: { en: "Contact", zh: "聯繫方式", ja: "お問い合わせ" },
    shopProducts: { en: "Shop Products", zh: "選購產品", ja: "商品を見る" },
    hoursShort: {
      en: "Mon – Sun: 11 am – 7 pm",
      zh: "週一至週日：上午 11 時 – 下午 7 時",
      ja: "月〜日：11:00〜19:00",
    },
  },

  // ── Scroll to top ──
  scrollToTop: { en: "Scroll to top", zh: "回到頂部", ja: "トップへ戻る" },
} as const;

export type Translations = typeof translations;
