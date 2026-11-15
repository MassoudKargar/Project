'use client'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

type Language = 'en' | 'fa'

const content = {
  en: {
    nav: ['About', 'Experience', 'Projects', 'Skills'],
    eyebrow: 'Senior .NET Backend Developer',
    title: 'I build backend systems that stay understandable under pressure.',
    intro:
      'I am Masoud Kargar, a backend engineer with 6+ years of experience building and evolving enterprise software. I work where business rules are complex, systems are undocumented, and reliability matters.',
    cta: 'Let’s work together',
    github: 'View GitHub',
    available: 'Open to challenging backend roles',
    location: 'Tehran, Iran · Remote-friendly',
    aboutTitle: 'Engineering with context',
    about:
      'My strongest work begins with understanding: recovering business rules from existing code, tracing data through a system, and making careful changes that teams can maintain. My focus is C#/.NET, APIs, data-intensive workloads, event-driven integration, and practical architecture.',
    facts: [
      ['6+', 'years of experience'],
      ['.NET 8', 'backend focus'],
      ['Kafka', 'event-driven integration'],
      ['RAG', 'AI exploration'],
    ],
    experienceTitle: 'Experience',
    experienceIntro: 'Selected work across enterprise systems, platforms, and independent products.',
    experiences: [
      {
        role: 'Senior .NET Backend Developer',
        company: 'Rasta Novin Aria',
        dates: 'May 2025 — Present',
        place: 'Tehran, Iran',
        bullets: [
          'Continued development of an education-sector payroll system after the previous team departed, without technical documentation or knowledge transfer.',
          'Analyzed legacy code, payroll rules, and database structures to safely maintain and evolve the system.',
          'Worked on backend and database-processing optimization to address bottlenecks in payroll calculations.',
          'Developed and maintained .NET 8 services with Dapper, IdentityServer, and JWT authentication.',
        ],
        tags: ['.NET 8', 'Dapper', 'SQL Server', 'IdentityServer', 'JWT'],
      },
      {
        role: 'Senior Backend Developer',
        company: 'Satigh Farafogh',
        dates: 'Oct 2024 — Mar 2025',
        place: 'Tehran, Iran',
        bullets: [
          'Designed a reusable backend foundation for company services, informed by the Base architecture project.',
          'Reconstructed business rules from a monolith through UI and code analysis where handover was unavailable.',
          'Built service-integration boundaries with Kafka and applied the Outbox Pattern for reliable event publication.',
        ],
        tags: ['Architecture', 'Kafka', 'Outbox Pattern', 'Integration'],
      },
      {
        role: 'Software Developer · Freelance',
        company: 'Independent',
        dates: 'Jul 2023 — Oct 2024',
        place: 'Remote',
        bullets: [
          'Rebuilt a wallet application from Vue.js to Blazor WebAssembly, implementing the application behavior and features.',
          'Integrated and troubleshot WalletConnect through hands-on testing in a documentation-constrained environment.',
          'Collaborated with a designer to implement Figma designs using Tailwind CSS.',
        ],
        tags: ['Blazor WASM', 'WalletConnect', 'Vue.js', 'Tailwind'],
      },
      {
        role: '.NET Backend Developer',
        company: 'Behineh Kavan Keyfiyat',
        dates: 'Jul 2021 — Jul 2023',
        place: 'Tehran, Iran',
        bullets: [
          'Collaborated on moving the Kavi software structure from Windows to the web and designed the Kati software structure.',
          'Implemented a bulk SMS solution with application-level rate limiting for provider constraints.',
          'Contributed to the development and maintenance of multiple company applications.',
        ],
        tags: ['ASP.NET', 'SMS', 'Rate limiting', 'Web migration'],
      },
    ],
    projectsTitle: 'Selected projects',
    projectsIntro: 'Open-source work and technical experiments that show how I think and build.',
    projects: [
      ['Base', 'Reusable backend foundation and architecture experiments.', 'C# / .NET', 'https://github.com/MassoudKargar/Base'],
      ['RAG', 'Retrieval-augmented generation and AI-backed API exploration.', 'AI / RAG', 'https://github.com/MassoudKargar/RAG'],
      ['BaseTemplatePakage', 'Reusable project and template packaging experiments.', '.NET tooling', 'https://github.com/MassoudKargar/BaseTemplatePakage'],
      ['PollyNET', 'Exploration of resilience patterns for .NET services.', 'Resilience', 'https://github.com/MassoudKargar/PollyNET'],
      ['Redis', 'Redis-related development examples and experiments.', 'Data / Caching', 'https://github.com/MassoudKargar/Redis'],
      ['K8S', 'Kubernetes learning notes and configuration experiments.', 'Infrastructure', 'https://github.com/MassoudKargar/K8S'],
    ],
    skillsTitle: 'Tools I use',
    skills: [
      ['Backend', 'C# · .NET 8 · ASP.NET Core · REST API · Entity Framework · Dapper'],
      ['Architecture', 'Clean Architecture · Microservices · CQRS · Service boundaries'],
      ['Messaging', 'Apache Kafka · RabbitMQ · Outbox Pattern · Event-driven systems'],
      ['Data', 'SQL Server · T-SQL · Redis · PostgreSQL · MongoDB'],
      ['Security', 'JWT · Keycloak · IdentityServer · CORS'],
      ['Platform', 'Docker · Kubernetes · Linux · Nginx · Git · ELK'],
    ],
    learningTitle: 'Always learning',
    learning: 'Currently exploring AI applications, RAG systems, developer infrastructure, Rust, and the practical boundaries between reliable backend engineering and emerging tools.',
    educationTitle: 'Education & courses',
    education: [
      'Diploma — Wood Industries',
      'Machine Learning with Python — Maktabkhooneh',
      'Rust Programming Bootcamp — Maktabkhooneh',
      'Microservices Architecture — Nik Amooz',
      'PRO .NET Ecosystem — Nik Amooz',
      'ASP.NET MVC — Kando Danesh',
    ],
    contactTitle: 'Let’s build something reliable.',
    contactText: 'If you are working on a complex backend, a legacy system that needs careful evolution, or an integration where correctness matters, I would like to hear about it.',
    email: 'massoudkargar.web@gmail.com',
    footer: 'Built with care · Masoud Kargar',
  },
  fa: {
    nav: ['درباره من', 'تجربه کاری', 'پروژه‌ها', 'مهارت‌ها'],
    eyebrow: 'توسعه‌دهنده ارشد بک‌اند دات‌نت',
    title: 'سامانه‌های بک‌اندی می‌سازم که در شرایط پیچیده، قابل فهم و قابل اتکا بمانند.',
    intro:
      'من مسعود کارگر هستم؛ توسعه‌دهنده بک‌اند با بیش از ۶ سال تجربه در توسعه و نگهداری نرم‌افزارهای سازمانی. تمرکزم روی جایی است که قواعد کسب‌وکار پیچیده‌اند، مستندات ناقص است و قابلیت اطمینان اهمیت دارد.',
    cta: 'همکاری کنیم',
    github: 'مشاهده گیت‌هاب',
    available: 'آماده همکاری در پروژه‌های چالش‌برانگیز',
    location: 'تهران، ایران · امکان همکاری ریموت',
    aboutTitle: 'مهندسی با درک زمینه',
    about:
      'بهترین کار من با فهمیدن شروع می‌شود: استخراج قواعد کسب‌وکار از کد موجود، دنبال‌کردن مسیر داده در سامانه و اعمال تغییراتی که تیم بتواند در آینده نگهداری کند. تمرکز اصلی من C# و دات‌نت، APIها، پردازش‌های داده‌محور، یکپارچه‌سازی رویدادمحور و معماری عملی است.',
    facts: [
      ['۶+', 'سال تجربه'],
      ['.NET 8', 'تمرکز بک‌اند'],
      ['Kafka', 'یکپارچه‌سازی رویدادمحور'],
      ['RAG', 'پژوهش در هوش مصنوعی'],
    ],
    experienceTitle: 'تجربه کاری',
    experienceIntro: 'گزیده‌ای از فعالیت‌ها در سامانه‌های سازمانی، پلتفرم‌ها و محصولات مستقل.',
    experiences: [
      {
        role: 'توسعه‌دهنده ارشد بک‌اند دات‌نت',
        company: 'رستا نوین آریا',
        dates: 'اردیبهشت ۱۴۰۴ — اکنون',
        place: 'تهران، ایران',
        bullets: [
          'ادامه توسعه سامانه حقوق و دستمزد آموزش‌وپرورش پس از خروج تیم قبلی، بدون مستندات فنی یا انتقال دانش.',
          'تحلیل کدهای قدیمی، قواعد حقوق و دستمزد و ساختار پایگاه داده برای نگهداری و توسعه امن سامانه.',
          'مشارکت در بهینه‌سازی پردازش‌های بک‌اند و پایگاه داده برای رفع گلوگاه‌های محاسبات حقوق.',
          'توسعه و نگهداری سرویس‌های .NET 8 با Dapper، IdentityServer و احراز هویت JWT.',
        ],
        tags: ['.NET 8', 'Dapper', 'SQL Server', 'IdentityServer', 'JWT'],
      },
      {
        role: 'توسعه‌دهنده ارشد بک‌اند',
        company: 'ستیغ فراافق',
        dates: 'مهر ۱۴۰۳ — اسفند ۱۴۰۳',
        place: 'تهران، ایران',
        bullets: [
          'طراحی زیرساخت بک‌اند قابل استفاده مجدد برای سرویس‌های شرکت با الهام از معماری پروژه Base.',
          'استخراج قواعد کسب‌وکار مونولیت از طریق تحلیل رابط کاربری و کد، در نبود انتقال دانش.',
          'طراحی مرزهای یکپارچه‌سازی سرویس‌ها با Kafka و استفاده از Outbox Pattern برای انتشار قابل‌اعتماد رویدادها.',
        ],
        tags: ['معماری', 'Kafka', 'Outbox Pattern', 'یکپارچه‌سازی'],
      },
      {
        role: 'توسعه‌دهنده نرم‌افزار · فریلنسر',
        company: 'مستقل',
        dates: 'مرداد ۱۴۰۲ — مهر ۱۴۰۳',
        place: 'ریموت',
        bullets: [
          'بازنویسی اپلیکیشن کیف پول از Vue.js به Blazor WebAssembly و پیاده‌سازی منطق و قابلیت‌های نرم‌افزار.',
          'یکپارچه‌سازی و رفع اشکال WalletConnect با آزمون عملی در شرایط مستندات محدود.',
          'همکاری با طراح برای پیاده‌سازی طرح‌های Figma با Tailwind CSS.',
        ],
        tags: ['Blazor WASM', 'WalletConnect', 'Vue.js', 'Tailwind'],
      },
      {
        role: 'توسعه‌دهنده بک‌اند دات‌نت',
        company: 'بهینه کاوان کیفیت',
        dates: 'مرداد ۱۴۰۰ — مرداد ۱۴۰۲',
        place: 'تهران، ایران',
        bullets: [
          'همکاری در انتقال ساختار نرم‌افزار Kavi از ویندوز به وب و طراحی ساختار نرم‌افزار Kati.',
          'پیاده‌سازی سامانه ارسال پیامک انبوه با محدودسازی نرخ ارسال در سطح کد.',
          'مشارکت در توسعه و نگهداری چندین اپلیکیشن شرکت.',
        ],
        tags: ['ASP.NET', 'پیامک', 'Rate limiting', 'مهاجرت وب'],
      },
    ],
    projectsTitle: 'پروژه‌های منتخب',
    projectsIntro: 'پروژه‌های متن‌باز و آزمایش‌های فنی که شیوه فکر و ساختن من را نشان می‌دهند.',
    projects: [
      ['Base', 'زیرساخت بک‌اند قابل استفاده مجدد و آزمایش‌های معماری.', 'C# / .NET', 'https://github.com/MassoudKargar/Base'],
      ['RAG', 'بررسی RAG و APIهای مبتنی بر هوش مصنوعی.', 'AI / RAG', 'https://github.com/MassoudKargar/RAG'],
      ['BaseTemplatePakage', 'آزمایش بسته‌بندی قالب‌ها و پروژه‌های قابل استفاده مجدد.', 'ابزارهای دات‌نت', 'https://github.com/MassoudKargar/BaseTemplatePakage'],
      ['PollyNET', 'بررسی الگوهای تاب‌آوری برای سرویس‌های دات‌نت.', 'تاب‌آوری', 'https://github.com/MassoudKargar/PollyNET'],
      ['Redis', 'نمونه‌ها و آزمایش‌های مرتبط با Redis.', 'داده / کش', 'https://github.com/MassoudKargar/Redis'],
      ['K8S', 'یادداشت‌ها و آزمایش‌های یادگیری Kubernetes.', 'زیرساخت', 'https://github.com/MassoudKargar/K8S'],
    ],
    skillsTitle: 'ابزارهایی که استفاده می‌کنم',
    skills: [
      ['بک‌اند', 'C# · .NET 8 · ASP.NET Core · REST API · Entity Framework · Dapper'],
      ['معماری', 'Clean Architecture · Microservices · CQRS · مرزبندی سرویس‌ها'],
      ['پیام‌رسانی', 'Apache Kafka · RabbitMQ · Outbox Pattern · سامانه‌های رویدادمحور'],
      ['داده', 'SQL Server · T-SQL · Redis · PostgreSQL · MongoDB'],
      ['امنیت', 'JWT · Keycloak · IdentityServer · CORS'],
      ['پلتفرم', 'Docker · Kubernetes · Linux · Nginx · Git · ELK'],
    ],
    learningTitle: 'یادگیری ادامه دارد',
    learning: 'در حال بررسی کاربردهای هوش مصنوعی، سامانه‌های RAG، زیرساخت توسعه‌دهندگان، زبان Rust و مرزهای عملی میان مهندسی بک‌اند قابل اعتماد و ابزارهای نوظهور هستم.',
    educationTitle: 'تحصیلات و دوره‌ها',
    education: [
      'دیپلم — صنایع چوب',
      'آموزش یادگیری ماشین با پایتون — مکتب‌خونه',
      'آموزش برنامه‌نویسی Rust — مکتب‌خونه',
      'معماری میکروسرویس — نیک‌آموز',
      'PRO .NET Ecosystem — نیک‌آموز',
      'ASP.NET MVC — کندو دانش',
    ],
    contactTitle: 'بیایید چیزی قابل اعتماد بسازیم.',
    contactText: 'اگر روی بک‌اند پیچیده، سامانه قدیمی نیازمند توسعه دقیق یا یکپارچه‌سازی حساس به صحت داده کار می‌کنید، خوشحال می‌شوم درباره آن بشنوم.',
    email: 'massoudkargar.web@gmail.com',
    footer: 'با دقت ساخته شده · مسعود کارگر',
  },
} as const

const Home: NextPage = () => {
  const [language, setLanguage] = useState<Language>('en')
  const t = content[language]
  const isFa = language === 'fa'

  return (
    <div className={styles.page} dir={isFa ? 'rtl' : 'ltr'}>
      <Head>
        <title>Masoud Kargar — Senior .NET Backend Developer</title>
        <meta name="description" content="Portfolio of Masoud Kargar, a Senior .NET Backend Developer focused on reliable enterprise systems." />
        <meta name="theme-color" content="#0b0d0f" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.nav}>
        <a href="#top" className={styles.brand}><span>MK</span> masoudkargar.com</a>
        <nav className={styles.navLinks} aria-label="Primary navigation">
          {t.nav.map((item, index) => <a href={['#about', '#experience', '#projects', '#skills'][index]} key={item}>{item}</a>)}
        </nav>
        <button className={styles.language} onClick={() => setLanguage(isFa ? 'en' : 'fa')} aria-label="Switch language">
          {isFa ? 'EN' : 'FA'} <span>↗</span>
        </button>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.kicker}><span className={styles.pulse} /> {t.available}</div>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className={styles.lede}>{t.intro}</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#contact">{t.cta} <span>↗</span></a>
              <a className={styles.textButton} href="https://github.com/MassoudKargar" target="_blank" rel="noreferrer">{t.github} <span>↗</span></a>
            </div>
            <div className={styles.location}><span>⌖</span> {t.location}</div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.orbit orbitOne} />
            <div className={styles.orbit orbitTwo} />
            <div className={styles.orbit orbitThree} />
            <div className={styles.codeOrb}><span>&lt;/&gt;</span><small>BUILD<br />WITH<br />INTENT</small></div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className={styles.sectionLabel}>01 / {isFa ? 'درباره من' : 'ABOUT'}</div>
          <div className={styles.aboutGrid}>
            <h2>{t.aboutTitle}</h2>
            <div><p className={styles.aboutText}>{t.about}</p><a className={styles.inlineLink} href="#contact">{t.cta} <span>↗</span></a></div>
          </div>
          <div className={styles.facts}>{t.facts.map(([value, label]) => <div className={styles.fact} key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.sectionLabel}>02 / {isFa ? 'تجربه کاری' : 'EXPERIENCE'}</div>
          <div className={styles.sectionHeading}><h2>{t.experienceTitle}</h2><p>{t.experienceIntro}</p></div>
          <div className={styles.timeline}>{t.experiences.map((job, index) => <article className={styles.job} key={job.company}><div className={styles.jobIndex}>0{index + 1}</div><div className={styles.jobBody}><div className={styles.jobTop}><div><h3>{job.role}</h3><p className={styles.company}>{job.company}</p></div><div className={styles.jobMeta}><span>{job.dates}</span><span>{job.place}</span></div></div><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className={styles.tags}>{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section id="projects" className={styles.section projectsSection}>
          <div className={styles.sectionLabel}>03 / {isFa ? 'پروژه‌ها' : 'PROJECTS'}</div>
          <div className={styles.sectionHeading}><h2>{t.projectsTitle}</h2><p>{t.projectsIntro}</p></div>
          <div className={styles.projectGrid}>{t.projects.map(([name, description, type, href], index) => <a className={styles.projectCard} href={href} target="_blank" rel="noreferrer" key={name}><div className={styles.projectNumber}>0{index + 1}</div><div><span className={styles.projectType}>{type}</span><h3>{name} <span>↗</span></h3><p>{description}</p></div></a>)}</div>
        </section>

        <section id="skills" className={styles.section skillsSection}>
          <div className={styles.sectionLabel}>04 / {isFa ? 'مهارت‌ها' : 'TOOLKIT'}</div>
          <div className={styles.sectionHeading}><h2>{t.skillsTitle}</h2></div>
          <div className={styles.skillsGrid}>{t.skills.map(([label, list]) => <div className={styles.skill} key={label}><h3>{label}</h3><p>{list}</p></div>)}</div>
          <div className={styles.learning}><div><span className={styles.learningMark}>✦</span><h3>{t.learningTitle}</h3></div><p>{t.learning}</p></div>
        </section>

        <section className={styles.education}><div><div className={styles.sectionLabel}>{isFa ? 'پیشینه' : 'BACKGROUND'}</div><h2>{t.educationTitle}</h2></div><ul>{t.education.map(item => <li key={item}><span>↗</span>{item}</li>)}</ul></section>

        <section id="contact" className={styles.contact}><div className={styles.contactGlow} /><div className={styles.sectionLabel}>05 / {isFa ? 'ارتباط' : 'CONTACT'}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className={styles.email} href={`mailto:${t.email}`}>{t.email} <span>↗</span></a></section>
      </main>

      <footer className={styles.footer}><span>{t.footer}</span><div><a href="https://linkedin.com/in/masoudkargar" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/MassoudKargar" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:massoudkargar.web@gmail.com">Email</a></div></footer>
    </div>
  )
}

export default Home
