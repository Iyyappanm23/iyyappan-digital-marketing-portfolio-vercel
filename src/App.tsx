import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Brain, BriefcaseBusiness,
  Check, ChevronDown, Code2, Download, ExternalLink, Globe2, Mail, MapPin,
  Menu, MousePointer2, Search, Send, Sparkles, Target, TrendingUp, X
} from 'lucide-react'

const email = 'iyyappanm108@gmail.com'
const phone = '+91 8220208394'

const services = [
  { icon: Search, title: 'Search Engine Optimization', text: 'On-page SEO, technical optimization, keyword research, competitor analysis and link-building support.' },
  { icon: Target, title: 'Performance Marketing', text: 'Google Ads and Meta Ads campaign planning, audience targeting, budget monitoring and optimization.' },
  { icon: Globe2, title: 'Social Media Marketing', text: 'Platform-specific content planning, reels, posts, stories and audience engagement strategies.' },
  { icon: Brain, title: 'Content & Email Marketing', text: 'Website content, landing pages, promotional messaging and email campaign support.' },
  { icon: BarChart3, title: 'Analytics & Reporting', text: 'Campaign tracking and actionable insights using analytics and search performance tools.' },
  { icon: MousePointer2, title: 'Website & Local Presence', text: 'WordPress content updates, website optimization and local business profile support.' },
]

const skillGroups = [
  { title: 'Marketing', items: ['SEO', 'Technical SEO', 'Google Ads', 'Meta Ads', 'Paid Search', 'Paid Social', 'Social Media', 'Email Marketing', 'CRO', 'B2B Demand Generation'] },
  { title: 'Analytics & Platforms', items: ['Google Analytics 4', 'Google Search Console', 'SEMrush', 'Ahrefs', 'WordPress', 'LinkedIn Ads', 'CRM & Automation'] },
  { title: 'Creative & Technical', items: ['Canva', 'Figma', 'Adobe Photoshop', 'HTML', 'CSS', 'JavaScript', 'GitHub'] },
]

const experience = [
  {
    company: 'iGlow Studioz Photography', role: 'Digital Marketing Specialist', date: 'July 2026 — October 2026', tag: 'SOCIAL & PAID MEDIA',
    points: [
      'Managed social media marketing activities to strengthen brand visibility, audience engagement and online presence.',
      'Planned and managed Facebook and Instagram advertising campaigns to generate leads and enquiries.',
      'Created and scheduled reels, posts, stories and promotional content for photography and videography services.',
      'Monitored audience targeting, budget utilization and campaign insights to guide optimization.',
    ],
  },
  {
    company: 'Medfins International LLP', role: 'Digital Marketing Executive', date: 'June 2025 — June 2026', tag: 'B2B & PERFORMANCE',
    points: [
      'Managed and optimized Google Ads campaigns with a focus on ad relevance, efficiency and audience targeting.',
      'Collaborated with marketing and creative teams to align paid media activity with business goals.',
      'Handled paid advertising, website content updates and social media management to strengthen brand presence.',
      'Used digital marketing analytics and market insights to support brand awareness and online engagement.',
    ],
  },
  {
    company: 'Medfins International LLP', role: 'Digital Marketing Intern', date: 'March 2025 — May 2025', tag: 'FOUNDATION',
    points: [
      'Supported Google Ads campaign setup, bid adjustments and routine performance tracking.',
      'Assisted with website content updates and brand activity across LinkedIn, Facebook and Instagram.',
      'Reviewed campaign data to understand user behaviour, traffic trends and campaign effectiveness.',
    ],
  },
]

const projects = [
  {
    number: '01', type: 'WORDPRESS · ON-PAGE SEO', title: 'E-commerce Product Application',
    desc: 'A website development and optimization project focused on clear content structure, search visibility and usability.',
    bullets: ['WordPress website development and maintenance', 'On-page SEO for key website pages', 'Content, blog and landing-page updates'],
    accent: 'project-blue',
  },
  {
    number: '02', type: 'META ADS · SOCIAL MEDIA', title: 'Photography Brand Campaigns',
    desc: 'Social media and paid campaign activities to promote photography and videography services and encourage enquiries.',
    bullets: ['Instagram content planning and publishing', 'Facebook and Instagram campaign management', 'Audience, budget and performance monitoring'],
    accent: 'project-violet',
  },
  {
    number: '03', type: 'GOOGLE ADS · B2B MARKETING', title: 'Medical Device & IVD Marketing',
    desc: 'Digital marketing execution for a specialist medical-device regulatory consulting brand.',
    bullets: ['Google Ads campaign management', 'Website and social media content support', 'Brand awareness and audience engagement'],
    accent: 'project-cyan',
  },
]

const tools = ['Google Ads', 'Meta Ads Manager', 'GA4', 'Search Console', 'SEMrush', 'Ahrefs', 'WordPress', 'LinkedIn Ads', 'Canva', 'Figma', 'Photoshop', 'CRM Tools']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const navItems = [['About', '#about'], ['Services', '#services'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">IM</span><span>IYYAPPAN<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="/Iyyappan-Digital-Marketing-Resume.pdf" download>Resume <Download size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> DIGITAL MARKETING SPECIALIST <span className="eyebrow-line" /></div>
            <h1>Turning digital<br /><span className="gradient-text">attention into</span><br />meaningful action<span className="blue-period">.</span></h1>
            <p className="hero-lead">I'm Iyyappan — a digital marketer focused on building brand visibility, connecting with the right audience and making every campaign more intentional.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/Iyyappan-Digital-Marketing-Resume.pdf" download><Download size={16} /> Download resume</a>
            </div>
            <div className="hero-meta"><span><MapPin size={14} /> Kallakurichi, India</span><span className="meta-separator" /><span><span className="status-dot" /> Open to opportunities</span></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="card-top"><span className="card-kicker">MARKETING MINDSET</span><Sparkles size={17} /></div>
              <div className="monogram">IM<span>.</span></div>
              <div className="hero-card-name">Iyyappan M</div>
              <div className="hero-card-role">Digital Marketing Specialist</div>
              <div className="card-divider" />
              <div className="mini-metrics">
                <div><strong>SEO</strong><small>Organic growth</small></div>
                <div><strong>ADS</strong><small>Paid campaigns</small></div>
                <div><strong>DATA</strong><small>Insights & action</small></div>
              </div>
              <div className="card-footer"><span>STRATEGY</span><span>CREATIVITY</span><span>PERFORMANCE</span></div>
            </div>
            <div className="float-chip chip-top"><TrendingUp size={15} /> Growth-minded</div>
            <div className="float-chip chip-bottom"><Target size={15} /> Audience first</div>
            <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner"><span>WHAT I BRING</span><p>Strategy <b>✳</b> Creativity <b>✳</b> Optimization <b>✳</b> Measurable thinking</p></div>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Marketing with<br /><span className="muted-heading">purpose & perspective.</span></h2></div>
          <div className="about-grid">
            <div className="about-main"><p className="large-copy">I bring together creative thinking and analytical execution to help brands show up with clarity in the digital space.</p><p>With 2 years of hands-on experience, I've worked across SEO, paid advertising, social media, content and website optimization. I enjoy understanding the audience, finding opportunities and turning insights into practical marketing actions.</p><p>My experience includes both B2B marketing and consumer-facing creative campaigns — giving me exposure to different audiences, platforms and business goals.</p></div>
            <div className="about-aside"><div className="aside-icon"><BriefcaseBusiness size={21} /></div><span className="aside-label">MY APPROACH</span><h3>Understand.<br />Plan. Execute.<br /><em>Optimize.</em></h3><p>Thoughtful strategy, consistent execution and continuous learning.</p></div>
          </div>
        </section>

        <section className="section-wrap section-block" id="services">
          <div className="section-heading heading-row"><div><span className="section-index">02 / WHAT I DO</span><h2>Skills that move<br /><span className="muted-heading">brands forward.</span></h2></div><p className="heading-note">A practical mix of marketing channels and capabilities to support visibility, engagement and lead generation.</p></div>
          <div className="service-grid">{services.map((s, i) => { const Icon = s.icon; return <article className="service-card" key={s.title}><div className="service-card-top"><span>0{i + 1}</span><Icon size={21} /></div><h3>{s.title}</h3><p>{s.text}</p><div className="service-arrow"><ArrowUpRight size={17} /></div></article> })}</div>
        </section>

        <section className="skills-band">
          <div className="section-wrap skills-layout"><div><span className="section-index">03 / TOOLKIT</span><h2>My digital<br /><span className="muted-heading">marketing toolkit.</span></h2><p className="skills-intro">Platforms and skills I use to plan, execute, monitor and improve digital marketing activities.</p><div className="tool-cloud">{tools.map(t => <span key={t}>{t}</span>)}</div></div><div className="skill-groups">{skillGroups.map((g, i) => <div className="skill-group" key={g.title}><div className="skill-group-head"><span>0{i + 1}</span><h3>{g.title}</h3></div><div className="skill-pills">{g.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><span className="section-index">04 / EXPERIENCE</span><h2>Where I've<br /><span className="muted-heading">made an impact.</span></h2></div>
          <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company + job.role}><div className="timeline-marker"><span>{String(i + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div className="job-top"><div><span className="job-tag">{job.tag}</span><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="job-date">{job.date}</span></div><ul>{job.points.map(point => <li key={point}><Check size={15} />{point}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading heading-row"><div><span className="section-index">05 / SELECTED WORK</span><h2>Projects &<br /><span className="muted-heading">marketing experience.</span></h2></div><p className="heading-note">A snapshot of the websites, campaigns and marketing activities I've contributed to.</p></div>
          <div className="project-grid">{projects.map(p => <article className={`project-card ${p.accent}`} key={p.number}><div className="project-top"><span>{p.number} / FEATURED</span><ArrowUpRight size={19} /></div><div className="project-art"><div className="art-window"><div className="art-window-bar"><i /><i /><i /></div><div className="art-graphic"><div className="art-lines"><b /><b /><b /></div><div className="art-circle" /><div className="art-bars"><i /><i /><i /><i /></div></div></div></div><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><ul>{p.bullets.map(b => <li key={b}><Check size={14} />{b}</li>)}</ul><span className="project-disclaimer">Experience highlights · No unpublished performance figures</span></article>)}</div>
        </section>

        <section className="credentials-section">
          <div className="section-wrap credentials-grid"><div><span className="section-index">06 / CREDENTIALS</span><h2>Learning is<br /><span className="muted-heading">part of the process.</span></h2><div className="credential-list"><div><span className="credential-icon"><Check size={16} /></span><p><strong>Google Ads Certification</strong><small>Google</small></p><ArrowUpRight size={16} /></div><div><span className="credential-icon"><Check size={16} /></span><p><strong>Google Analytics Certification</strong><small>Google</small></p><ArrowUpRight size={16} /></div><div><span className="credential-icon"><Check size={16} /></span><p><strong>HubSpot Email Marketing Certification</strong><small>HubSpot</small></p><ArrowUpRight size={16} /></div></div></div><div className="education-card"><span className="education-label">EDUCATION</span><div className="education-icon"><Code2 size={22} /></div><h3>Bachelor of Engineering</h3><p>Biomedical Engineering</p><div className="education-rule" /><strong>Dr. N.G.P. Institute of Technology</strong><div className="education-bottom"><span>2019 — 2023</span><span>CGPA <b>8.5 / 10</b></span></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-glow" /><div className="section-wrap contact-inner"><span className="section-index">07 / LET'S CONNECT</span><h2>Have a goal?<br /><span className="gradient-text">Let's make it grow.</span></h2><p>I'm open to digital marketing opportunities, collaborations and conversations about ideas that create meaningful impact.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}?subject=Digital%20Marketing%20Opportunity`}>Let's talk <ArrowUpRight size={17} /></a><button className="button button-ghost" onClick={copyEmail}><Mail size={16} /> {copied ? 'Email copied!' : 'Copy email'}</button></div><div className="contact-details"><a href={`mailto:${email}`}><Mail size={16} />{email}</a><a href={`tel:${phone.replaceAll(' ', '')}`}><Send size={15} />{phone}</a><span><MapPin size={15} />Kallakurichi, India</span><a href="https://www.linkedin.com/in/Iyyappan" target="_blank" rel="noreferrer"><ExternalLink size={15} />LinkedIn profile</a></div></div></section>
      </main>
      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">IM</span><span>IYYAPPAN<span className="brand-dot">.</span></span></a><p>Built with clarity, curiosity & a growth mindset.</p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a><small>© {new Date().getFullYear()} Iyyappan M. All rights reserved.</small></div></footer>
    </div>
  )
}

export default App
