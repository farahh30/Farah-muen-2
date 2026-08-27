/* Design: Electric City Atlas — asymmetric editorial layout, map-route motifs, bold cobalt/coral accents, bilingual RTL/LTR experience. */
import { useState } from "react";
import { ArrowUpRight, Check, Globe2, Linkedin, Mail, MapPin, Sparkles, Star } from "lucide-react";

const heroArt = "/images/baladna-hero.webp";
const deviceArt = "/images/baladna-device-art.webp";
const mapArt = "/images/baladna-map-art.webp";
const farahMark = "/images/farah-mark.png";
const farahProfile = "/images/farah-profile.webp";

type Language = "en" | "ar";

const copy = {
  en: {
    nav: ["Home", "Work", "About me", "Playground"],
    location: "Based between ideas & interfaces",
    greeting: "Hola, I’m Farah",
    hero: "I design digital journeys that make complex things feel clear.",
    intro: "UX/UI designer and Computer Systems Engineering graduate, blending technical thinking, creativity, and problem-solving to build experiences people can move through with confidence.",
    workCta: "See my work",
    contactCta: "Let’s talk",
    selected: "Selected work",
    selectedIntro: "A small collection of product stories, interface systems, and the decisions behind them.",
    caseLabel: "Product · UX/UI · 2026",
    caseTitle: "Baladna — Find your next place to go",
    caseText: "A global city discovery app that brings events, places, and useful local recommendations into one calm, personal flow.",
    viewCase: "View case study",
    coming: "More case studies in progress",
    aboutEyebrow: "About me",
    aboutTitle: "Curious about people, precise about the details.",
    aboutText: "I’m Farah, a UX/UI Designer and Computer Systems Engineering graduate from Al-Azhar University. I enjoy combining technical thinking, creativity, and problem-solving to create simple, intuitive digital experiences.",
    aboutText2: "For me, good design goes beyond appearance. It starts by understanding the problem and ends with an experience that helps people move forward with confidence.",
    education: "Computer Systems Engineering",
    university: "Al-Azhar University",
    skills: "What I bring",
    playgroundEyebrow: "Playground",
    playgroundTitle: "Small experiments. Useful sparks.",
    playgroundText: "A visual corner for interface explorations, tiny prototypes, and ideas that are still finding their shape.",
    contactEyebrow: "Say hi",
    contactTitle: "Have a problem worth making clearer?",
    contactText: "Tell me what you’re building, untangling, or imagining. I’d love to hear the story behind it.",
    email: "Email me",
    footer: "Farah Muen © 2026",
  },
  ar: {
    nav: ["الرئيسية", "أعمالي", "نبذة عني", "تجارب"],
    location: "بين الأفكار والواجهات",
    greeting: "مرحباً، أنا فرح",
    hero: "أصمم رحلات رقمية تجعل الأشياء المعقدة أكثر وضوحاً.",
    intro: "مصممة UX/UI وخريجة هندسة أنظمة الحاسوب، أجمع بين التفكير التقني والإبداع وحل المشكلات لبناء تجارب يتحرك الناس خلالها بثقة.",
    workCta: "شاهد أعمالي",
    contactCta: "تواصل معي",
    selected: "أعمال مختارة",
    selectedIntro: "مجموعة من قصص المنتجات، وأنظمة الواجهات، والقرارات التي تقف خلفها.",
    caseLabel: "منتج · UX/UI · 2026",
    caseTitle: "Baladna — اكتشف وجهتك القادمة",
    caseText: "تطبيق عالمي لاكتشاف المدن يجمع الفعاليات والأماكن والاقتراحات المحلية في تجربة شخصية وهادئة.",
    viewCase: "شاهد دراسة الحالة",
    coming: "دراسات حالات أخرى قيد البناء",
    aboutEyebrow: "نبذة عني",
    aboutTitle: "فضولية تجاه الناس، دقيقة في التفاصيل.",
    aboutText: "أنا فرح، مصممة UX/UI وخريجة هندسة أنظمة الحاسوب من جامعة الأزهر. أستمتع بدمج التفكير التقني والإبداع وحل المشكلات لصناعة تجارب رقمية بسيطة وواضحة.",
    aboutText2: "بالنسبة لي، التصميم الجيد يتجاوز المظهر. يبدأ بفهم المشكلة وينتهي بتجربة تساعد الناس على التقدم بثقة.",
    education: "هندسة أنظمة الحاسوب",
    university: "جامعة الأزهر",
    skills: "ما أقدمه",
    playgroundEyebrow: "تجارب",
    playgroundTitle: "تجارب صغيرة. أفكار قابلة للاستخدام.",
    playgroundText: "مساحة بصرية لاستكشاف الواجهات والنماذج الأولية والأفكار التي لا تزال تبحث عن شكلها.",
    contactEyebrow: "لنتحدث",
    contactTitle: "هل لديك مشكلة تستحق أن تصبح أوضح؟",
    contactText: "أخبرني بما تبنيه أو تحاول ترتيبه أو تتخيله. يسعدني أن أسمع القصة وراءه.",
    email: "راسليني",
    footer: "Farah Muen © 2026",
  },
};

const skillList = ["Figma", "User Research", "User Personas", "User Flows", "Wireframing", "Prototyping", "Usability Testing", "Design Systems", "UI Design", "Responsive Design", "Accessibility"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];
  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Farah Muen home">
          <img src={farahMark} alt="" className="brand-mark" />
          <span className="brand-wordmark">Farah<br /><em>Muen</em><small>عربي / English</small></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {t.nav.map((item, index) => <a key={item} href={["#home", "#work", "#about", "#playground"][index]}>{item}</a>)}
        </nav>
        <div className="top-actions">
          <a className="email-chip" href="mailto:farahmuen@gmail.com"><Mail size={15} /> farahmuen@gmail.com</a>
          <button className="language-switch" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label="Switch language">
            <Globe2 size={16} /> {isArabic ? "EN" : "ع"}
          </button>
        </div>
      </header>

      <section id="home" className="hero section-pad">
        <div className="hero-meta"><span className="live-dot" /> {t.location} <span className="meta-bilingual">تجارب رقمية / digital experiences</span><span className="meta-time">✦ 2026</span></div>
        <div className="hero-grid">
          <div className="hero-art-wrap">
            <img src={heroArt} alt="Abstract Baladna city map artwork" className="hero-art" />
            <div className="art-sticker"><MapPin size={15} /> <span>designing<br />with direction</span></div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={16} /> {t.greeting}</p>
            <h1>{t.hero}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="cta-row">
              <a className="button button-primary" href="#work">{t.workCta} <ArrowUpRight size={17} /></a>
              <a className="button button-text" href="#contact">{t.contactCta} <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="scroll-note"><span className="scroll-line" /> scroll to explore</div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="section-heading"><div><p className="eyebrow"><span className="station-dot" /> 01 — {t.selected}</p><h2>{t.selectedIntro}</h2></div><span className="section-index">route / 03</span></div>
        <a className="feature-card" href="#baladna">
          <div className="feature-image"><img src={deviceArt} alt="Baladna app interface concept" /><span className="card-arrow"><ArrowUpRight size={22} /></span></div>
          <div className="feature-info"><div className="tag-row"><span>{t.caseLabel}</span><span>↗ featured</span></div><h3>{t.caseTitle}</h3><p>{t.caseText}</p><span className="inline-link">{t.viewCase} <ArrowUpRight size={16} /></span></div>
        </a>
        <div className="secondary-work">
          <div className="mini-card coral-card"><span className="mini-num">02</span><div><span className="tag-row">Concept · 2026</span><h4>Digital products with a human pulse.</h4><span className="progress-label">Case study in progress <span /></span></div></div>
          <div className="mini-card map-card"><img src={mapArt} alt="Abstract map study" /><div><span className="tag-row">Visual study · 2026</span><h4>Mapping the way people discover.</h4></div></div>
        </div>
      </section>

      <section id="baladna" className="case-strip section-pad">
        <div className="case-number">01</div><div className="case-strip-copy"><p className="eyebrow">Baladna / product story</p><h2>One place to find<br /><em>your place.</em></h2></div><div className="case-strip-note"><p>Research-led product design for people who want to spend less time searching and more time going.</p><a href="#contact">View process <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="about" className="about-section section-pad">
        <div className="about-marker"><span>02</span><span className="marker-line" /><span className="marker-caption">station / about</span></div>
        <div className="about-content"><p className="eyebrow">✦ {t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2><div className="about-columns"><div><p>{t.aboutText}</p><p>{t.aboutText2}</p></div><div className="about-side"><figure className="about-portrait"><img src={farahProfile} alt="Farah Muen, UX/UI Designer" /><figcaption><span className="portrait-dot" /> Farah Muen · UX/UI Designer</figcaption></figure><div className="education-card"><span className="card-label">Education</span><strong>{t.education}</strong><span>{t.university}</span><span className="edu-year">2019 — 2024</span></div></div></div></div>
      </section>

      <section className="skills-section section-pad"><div className="skills-intro"><p className="eyebrow"><span className="station-dot" /> 03 — {t.skills}</p><h2>Tools for making<br /><em>meaning visible.</em></h2></div><div className="skill-cloud">{skillList.map((skill, i) => <span key={skill} className={i % 4 === 0 ? "skill-pill accent" : "skill-pill"}>{skill}{i % 4 === 0 && <Check size={13} />}</span>)}</div></section>

      <section id="playground" className="playground-section section-pad"><div className="playground-head"><div><p className="eyebrow"><span className="station-dot" /> 04 — {t.playgroundEyebrow}</p><h2>{t.playgroundTitle}</h2></div><p>{t.playgroundText}</p></div><div className="playground-grid"><div className="play-card play-one"><span>01</span><div className="orbit"><span /><span /><span /></div><p>Interfaces<br />in motion</p></div><div className="play-card play-two"><span>02</span><div className="cursor-art">✦</div><p>Notes from<br />the process</p></div><div className="play-card play-three"><span>03</span><div className="type-art">Aa</div><p>Type, rhythm<br />& hierarchy</p></div></div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-top"><p className="eyebrow">✦ {t.contactEyebrow}</p><span className="contact-star"><Star size={23} fill="currentColor" /></span></div><h2>{t.contactTitle}</h2><p className="contact-text">{t.contactText}</p><a className="contact-email" href="mailto:farahmuen@gmail.com">farahmuen@gmail.com <ArrowUpRight size={23} /></a><div className="social-row"><a href="https://www.behance.net/farahmuen" target="_blank" rel="noreferrer">Behance</a><a href="https://www.linkedin.com/in/farah-muen/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div></section>

      <footer className="footer"><span>{t.footer}</span><span>Designed with curiosity <span className="footer-mark">✦</span></span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
