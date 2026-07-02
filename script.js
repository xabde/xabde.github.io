/* =========================================================================
   BAJJI ABDERRAHIM — PORTFOLIO — script.js
   Contient : dictionnaire de traductions FR/EN, moteur de traduction,
   effet machine à écrire, navigation, animations au scroll, formulaire.
   ========================================================================= */

/* -----------------------------------------------------------------------
   1. DICTIONNAIRE DE TRADUCTIONS
   Chaque clé correspond à un attribut data-key (ou data-key-aria) présent
   dans index.html. Pour ajouter une langue, dupliquez un bloc "fr" ou "en"
   et changez la clé du switch de langue dans le HTML + updateLangButtons().
----------------------------------------------------------------------- */
const translations = {
  fr: {
    meta: {
      title: "Bajji Abderrahim — Portfolio DevOps & Full-Stack",
      description: "Portfolio de Bajji Abderrahim, étudiant ingénieur DevOps et développeur Full-Stack basé à Casablanca — projets web, IA et cloud."
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      journey: "Parcours",
      contact: "Contact",
      cta: "Me contacter"
    },
    hero: {
      eyebrow: "// casablanca, maroc",
      roles: [
        "Étudiant Ingénieur DevOps & Full-Stack",
        "Passionné d'IA & Machine Learning",
        "Développeur Full-Stack"
      ],
      desc: "Je conçois, développe et déploie des applications web robustes — du code à l'infrastructure qui le fait tourner.",
      status: "Ouvert aux opportunités professionnelles",
      ctaProjects: "Voir mes projets",
      ctaCv: "Télécharger mon CV",
      ctaContact: "Me contacter"
    },
    about: {
      eyebrow: "// à propos",
      title: "Du code à l'infrastructure qui le fait tourner",
      p1: "Je suis étudiant en ingénierie DevOps, avec une vision globale des systèmes d'information : du code applicatif à l'infrastructure qui le fait tourner. Mon terrain de jeu va du développement full-stack à la conception de bases de données, jusqu'à l'intégration de solutions d'intelligence artificielle.",
      p2: "Rigoureux et orienté solutions, j'aime comprendre un système dans son ensemble avant d'en optimiser une partie — un pipeline de déploiement, une architecture d'API ou un modèle de machine learning. Je collabore volontiers en équipe technique, avec une approche agile, pour livrer des projets qui tiennent la route en production.",
      tag1: "Full-Stack",
      tag2: "DevOps & Cloud",
      tag3: "IA & Machine Learning",
      cta: "Télécharger mon CV",
      card: {
        role: "Étudiant Ingénieur DevOps",
        locationLabel: "Localisation",
        formationLabel: "Formation",
        formationValue: "Master DevOps & Big Data",
        stackLabel: "Stack",
        stackValue: "Full-Stack · Cloud · IA",
        status: "Ouvert aux opportunités professionnelles"
      }
    },
    skills: {
      eyebrow: "// compétences",
      title: "Une pile technique pensée de bout en bout",
      cat1: { title: "DevOps & Cloud", item5: "Intégration continue (CI/CD)" },
      cat4: { title: "IA & Data" },
      languagesLabel: "Langages"
    },
    projects: {
      eyebrow: "// projets",
      title: "Projets réalisés",
      linkText: "Voir le repo",
      item1: { desc: "Application full-stack sécurisée de gestion de comptes bancaires, avec API protégées et authentification via JWT et Spring Security." },
      item2: { desc: "Agent conversationnel basé sur une architecture RAG (Retrieval-Augmented Generation), déployé via Telegram pour automatiser les réponses à partir de données spécifiques." },
      item3: { desc: "Plateforme IoT de collecte de données capteurs en temps réel, avec un modèle prédictif pour estimer les horaires d'arrivée des trains." },
      item4: { desc: "Plateforme de prise de rendez-vous et de gestion des agendas médicaux, pensée pour simplifier l'accès aux soins au Maroc." },
      item5: { desc: "Modèle de régression en Python pour prédire les dates de réapprovisionnement des produits et automatiser la gestion des stocks." },
      more: {
        title: "Explorer plus de projets",
        desc: "Retrouvez l'ensemble de mon travail sur GitHub.",
        link: "Voir le profil"
      }
    },
    certifications: {
      eyebrow: "// certifications",
      title: "Certifications & badges",
      verify: "Vérifier l'identifiant",
      item8: { issuer: "Certification agile" }
    },
    journey: {
      eyebrow: "// parcours",
      title: "Expériences & formation",
      item1: { date: "10/2025 — Aujourd'hui", title: "Master spécialisé, Ingénierie Informatique, Big Data et Cloud Computing", desc: "Ingénierie DevOps, ingénierie logicielle, Big Data et Data Science." },
      item2: { date: "10/2024 — Aujourd'hui", title: "Agent Digital", desc: "Développeur et technicien IT ; gestion des campagnes publicitaires (Meta Ads Manager)." },
      item3: { date: "10/2024 — 07/2025", title: "Licence Professionnelle, Développement Avancé pour l'IoT et les Systèmes Intelligents", desc: "Développement de systèmes embarqués, architecture de systèmes intelligents." },
      item4: { date: "04/2024 — 08/2024", title: "Stage de fin d'étude", desc: "Réalisation du site web de l'entreprise ; management du projet IT de la conception au déploiement." },
      item5: { date: "09/2022 — 07/2024", title: "Diplôme de Technicien Spécialisé, Développement Full Stack", desc: "Développement d'applications web modernes, gestion de bases de données." },
      item6: { date: "11/2021 — 09/2022", title: "Télévente", desc: "Prise de rendez-vous B2C/B2B (thématique thermostat) ; sens du contact et de l'organisation." },
      item7: { date: "10/2020 — 06/2021", title: "Baccalauréat scientifique, option Sciences Physiques et Chimie" }
    },
    contact: {
      eyebrow: "// contact",
      title: "Discutons de votre prochain projet",
      intro: "Une question, une opportunité de stage ou d'alternance ? Écrivez-moi.",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        emailLabel: "Email",
        emailPlaceholder: "vous@exemple.com",
        messageLabel: "Message",
        messagePlaceholder: "Votre message...",
        submit: "Envoyer le message",
        fillAll: "Merci de remplir tous les champs.",
        success: "Merci {name}, votre message a bien été préparé. Je vous répondrai rapidement à {email}."
      },
      links: { phone: "Téléphone" }
    },
    footer: { tagline: " All rights reserved ." },
    aria: {
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      scrollNext: "Défiler vers la section suivante",
      backToTop: "Retour en haut de page",
      langGroup: "Choix de la langue"
    }
  },

  en: {
    meta: {
      title: "Bajji Abderrahim — DevOps & Full-Stack Portfolio",
      description: "Portfolio of Bajji Abderrahim, DevOps engineering student and Full-Stack developer based in Casablanca — web, AI and cloud projects."
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      journey: "Journey",
      contact: "Contact",
      cta: "Contact me"
    },
    hero: {
      eyebrow: "// casablanca, morocco",
      roles: [
        "DevOps & Full-Stack Engineering Student",
        "Passionate about AI & Machine Learning",
        "Full-Stack Developer"
      ],
      desc: "I design, build and ship robust web applications — from the code down to the infrastructure that runs it.",
      status: "Open to Professional Opportunities",
      ctaProjects: "View my projects",
      ctaCv: "Download my CV",
      ctaContact: "Contact me"
    },
    about: {
      eyebrow: "// about",
      title: "From code to the infrastructure that runs it",
      p1: "I'm a DevOps engineering student with a broad view of information systems: from application code down to the infrastructure that runs it. My playground ranges from full-stack development and database design to integrating artificial intelligence solutions.",
      p2: "Rigorous and solution-oriented, I like to understand a system as a whole before optimizing any single part of it — a deployment pipeline, an API architecture or a machine learning model. I enjoy collaborating within technical teams, using an agile approach, to ship projects that hold up in production.",
      tag1: "Full-Stack",
      tag2: "DevOps & Cloud",
      tag3: "AI & Machine Learning",
      cta: "Download my CV",
      card: {
        role: "DevOps Engineering Student",
        locationLabel: "Location",
        formationLabel: "Education",
        formationValue: "DevOps & Big Data Master's",
        stackLabel: "Stack",
        stackValue: "Full-Stack · Cloud · AI",
        status: "Open to Professional Opportunities"
      }
    },
    skills: {
      eyebrow: "// skills",
      title: "A tech stack built end to end",
      cat1: { title: "DevOps & Cloud", item5: "Continuous Integration (CI/CD)" },
      cat4: { title: "AI & Data" },
      languagesLabel: "Languages"
    },
    projects: {
      eyebrow: "// projects",
      title: "Featured projects",
      linkText: "View repo",
      item1: { desc: "Secure full-stack application for managing bank accounts, with protected APIs and authentication via JWT and Spring Security." },
      item2: { desc: "Conversational agent built on a RAG (Retrieval-Augmented Generation) architecture, deployed through Telegram to automate answers from specific data sources." },
      item3: { desc: "IoT platform collecting real-time sensor data, with a predictive model estimating train arrival times." },
      item4: { desc: "Appointment booking and medical schedule management platform, designed to simplify access to healthcare in Morocco." },
      item5: { desc: "Python regression model predicting restocking dates for products, to automate inventory management." },
      more: {
        title: "Explore more projects",
        desc: "Find all of my work on GitHub.",
        link: "View profile"
      }
    },
    certifications: {
      eyebrow: "// certifications",
      title: "Certifications & badges",
      verify: "Verify credential",
      item8: { issuer: "Agile certification" }
    },
    journey: {
      eyebrow: "// journey",
      title: "Experience & education",
      item1: { date: "10/2025 — Present", title: "Specialized Master's, Computer Engineering, Big Data and Cloud Computing", desc: "DevOps engineering, software engineering, Big Data and Data Science." },
      item2: { date: "10/2024 — Present", title: "Digital Agent", desc: "Developer and IT technician; management of advertising campaigns (Meta Ads Manager)." },
      item3: { date: "10/2024 — 07/2025", title: "Professional Bachelor's, Advanced Development for IoT and Smart Systems", desc: "Embedded systems development, smart systems architecture." },
      item4: { date: "04/2024 — 08/2024", title: "Final-year internship", desc: "Built the company's website; managed the IT project from design through deployment." },
      item5: { date: "09/2022 — 07/2024", title: "Specialized Technician Diploma, Full Stack Development", desc: "Modern web application development, database management." },
      item6: { date: "11/2021 — 09/2022", title: "Telesales", desc: "B2C/B2B appointment setting (thermostats); developed a strong sense of client contact and organization." },
      item7: { date: "10/2020 — 06/2021", title: "Scientific Baccalaureate, Physics and Chemistry track" }
    },
    contact: {
      eyebrow: "// contact",
      title: "Let's talk about your next project",
      intro: "A question, an internship or work-study opportunity? Write to me.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Your message...",
        submit: "Send message",
        fillAll: "Please fill in all fields.",
        success: "Thanks {name}, your message has been prepared. I'll get back to you shortly at {email}."
      },
      links: { phone: "Phone" }
    },
    footer: { tagline: "All rights reserved ." },
    aria: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      scrollNext: "Scroll to next section",
      backToTop: "Back to top",
      langGroup: "Language selection"
    }
  }
};

/* -----------------------------------------------------------------------
   2. MOTEUR DE TRADUCTION
----------------------------------------------------------------------- */
const LANG_STORAGE_KEY = 'portfolio-lang';
let currentLang = 'fr';

// Récupère une valeur imbriquée depuis un chemin en pointillés ("hero.ctaCv")
function getTranslation(lang, key) {
  return key.split('.').reduce((obj, part) => (obj ? obj[part] : undefined), translations[lang]);
}

function applyTranslations(lang) {
  // Textes visibles, placeholders, title, meta description
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const value = getTranslation(lang, key);
    if (value === undefined) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.setAttribute('placeholder', value);
    } else if (el.tagName === 'META') {
      el.setAttribute('content', value);
    } else if (el.tagName === 'TITLE') {
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  });

  // Attributs aria-label traduits
  document.querySelectorAll('[data-key-aria]').forEach(el => {
    const key = el.getAttribute('data-key-aria');
    const value = getTranslation(lang, key);
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  document.documentElement.setAttribute('lang', lang);
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  updateLangButtons(lang);
  restartTypewriter();
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function initLanguage() {
  // Langue déjà choisie par l'utilisateur lors d'une visite précédente (localStorage) ;
  // sinon, le français reste la langue par défaut du site.
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const initial = (saved && translations[saved]) ? saved : 'fr';
  applyTranslations(initial);
}

document.querySelectorAll('.lang-switch__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang !== currentLang) applyTranslations(lang);
  });
});

/* -----------------------------------------------------------------------
   3. EFFET MACHINE À ÉCRIRE (hero) — relancé à chaque changement de langue
----------------------------------------------------------------------- */
let typewriterTimeoutId = null;
let typewriterGeneration = 0; // permet d'annuler proprement une boucle en cours

function restartTypewriter() {
  typewriterGeneration++;
  const myGeneration = typewriterGeneration;
  if (typewriterTimeoutId) clearTimeout(typewriterTimeoutId);

  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;

  const roles = getTranslation(currentLang, 'hero.roles') || [];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || roles.length === 0) {
    typewriterEl.textContent = roles[0] || '';
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPING_SPEED = 55;
  const DELETING_SPEED = 30;
  const PAUSE_AFTER_TYPE = 1800;
  const PAUSE_AFTER_DELETE = 400;

  function tick() {
    if (myGeneration !== typewriterGeneration) return; // une nouvelle langue a pris le relais

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      typewriterEl.textContent = currentRole.slice(0, charIndex);

      if (charIndex === currentRole.length) {
        isDeleting = true;
        typewriterTimeoutId = setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      typewriterTimeoutId = setTimeout(tick, TYPING_SPEED);
    } else {
      charIndex--;
      typewriterEl.textContent = currentRole.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typewriterTimeoutId = setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      typewriterTimeoutId = setTimeout(tick, DELETING_SPEED);
    }
  }

  tick();
}

/* -----------------------------------------------------------------------
   MAIN
----------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Langue (traduit la page, puis lance la machine à écrire une première fois)
  initLanguage();

  /* -----------------------------------------------------------------------
     NAVBAR : fond au scroll + menu mobile
  ----------------------------------------------------------------------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function handleNavScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    const key = isOpen ? 'aria.closeMenu' : 'aria.openMenu';
    navToggle.setAttribute('aria-label', getTranslation(currentLang, key));
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', getTranslation(currentLang, 'aria.openMenu'));
    });
  });

  /* -----------------------------------------------------------------------
     SCROLL-SPY : met en surbrillance le lien de nav actif
  ----------------------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinkMap = new Map();
  document.querySelectorAll('.nav__link').forEach(link => {
    navLinkMap.set(link.getAttribute('href').slice(1), link);
  });

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkMap.forEach(link => link.classList.remove('active'));
        const activeLink = navLinkMap.get(entry.target.id);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => spyObserver.observe(section));

  /* -----------------------------------------------------------------------
     RÉVÉLATION AU SCROLL (fade + translate)
  ----------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
      revealObserver.observe(el);
    });
  }

  /* -----------------------------------------------------------------------
     FORMULAIRE DE CONTACT
     GitHub Pages étant un hébergement statique, ce script ne fait
     qu'une validation simple + un message de confirmation local.
     Pour un envoi réel, branchez un service comme Formspree ou EmailJS
     (voir le commentaire dans index.html, juste au-dessus du <form>).
  ----------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => { // Ajout de 'async' ici
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = getTranslation(currentLang, 'contact.form.fillAll');
        formStatus.style.color = '#ffb454';
        return;
      }

      // Optionnel : afficher un message d'attente
      formStatus.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';
      formStatus.style.color = 'var(--text-color, #ccc)'; // Ajustez selon vos variables CSS

      try {
        // Envoi des données vers Formspree en utilisant l'attribut action du HTML
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm)
        });

        if (response.ok) {
          // Succès : on affiche votre message traduit
          const successTpl = getTranslation(currentLang, 'contact.form.success');
          formStatus.textContent = successTpl.replace('{name}', name).replace('{email}', email);
          formStatus.style.color = 'var(--status, #4caf50)';
          contactForm.reset();
        } else {
          // Erreur venant de Formspree (ex: captcha requis ou email invalide)
          formStatus.textContent = currentLang === 'fr' ? "Oups! Un problème est survenu lors de l'envoi." : "Oops! There was a problem submitting your form.";
          formStatus.style.color = '#ff5555';
        }
      } catch (error) {
        // Erreur réseau (ex: pas de connexion internet)
        formStatus.textContent = currentLang === 'fr' ? "Erreur réseau. Vérifiez votre connexion." : "Network error. Please check your connection.";
        formStatus.style.color = '#ff5555';
      }
    });
  }

  /* -----------------------------------------------------------------------
     RETOUR EN HAUT DE PAGE
  ----------------------------------------------------------------------- */
  const backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    backToTop.style.opacity = window.scrollY > 500 ? '1' : '0';
    backToTop.style.pointerEvents = window.scrollY > 500 ? 'auto' : 'none';
  }
  backToTop.style.transition = 'opacity 0.3s ease';
  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* -----------------------------------------------------------------------
     ANNÉE COURANTE DANS LE FOOTER
  ----------------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
