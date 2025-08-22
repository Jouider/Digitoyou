(function(){
  // Simple client-side i18n
  const LS_KEY = 'site_lang';
  const defaultLang = 'fr';
  const supported = ['fr','en'];

  const translations = {
    fr: {
      nav: { about: 'A propos', blog: 'Blog', case_client: 'Cas Client' },
      links: { about: '/about.html', blog: 'blog2.html', case_client: '/contact.html' },
      index: {
        hero: {
          prefix: 'Passez du ',
          local: 'Local',
          middle: " à l'",
          online: 'Online',
          typing: 'Simplement',
          // rotating words for hero typing (localized)
          typing_words: ['Simplement','Rapidement','Facilement'],
          lead: 'Nous développons <strong>des sites sur mesure</strong> pour artisans, commerçants et entrepreneurs.',
          cta_long: 'Parlons de votre projet – 100% gratuit, 0 engagement',
          cta_short: 'Parlons de votre projet',
          expert_line: 'Un expert <b>Digitoyou</b> vous répond en 24h.',
          h1: 'Passez du <span class="text-warning">Local</span> à l\' <span class="text-warning">Online</span><br /><span class="underline-3 style-3 text-typing d-inline-block">Simplement</span>'
        },
        features: {
          f1: 'Gagnez en visibilité',
          f2: 'Clarifiez votre message',
          f3: 'Débloquez des ventes',
          f4: 'Market Research',
          lead: 'Nous créons <b>des sites vitrines 100% sur mesure</b>, adaptés à vos besoins, votre marché et votre réalité. Que vous soyez artisan, commerçant ou entrepreneur, Digitoyou vous connecte au monde en ligne, sans prise de tête.'
        },
        realizations: { small: 'Nos Réalisations', title: 'Nos derniers projets' },
        clients: {
          heading: 'Déjà <span class="text-warning">5000 clients</span> clients satisfaits.<br>Et si vous étiez le prochain?'
        },
        counters: {
          completed: 'Projets réalisés',
          satisfied: 'Clients satisfaits',
          experts: 'Experts à votre service'
        },
        offers: { small: 'Nos Offres', title: 'Des solutions digitales taillées pour faire décoller votre activité.' },
        offer_cards: {
          landing_title: 'Landing Page',
          landing_cta: 'Parlez à un expert',
          landing_desc: 'Une page unique, rapide et ciblée pour transformer vos visiteurs en clients dès leur première visite.',
          redesign_title: 'Refonte de Site',
          redesign_cta: 'Planifier mon rendez-vous',
          redesign_desc: 'Modernisez votre site avec un nouveau design, de meilleures performances et un impact renforcé.',
          showcase_title: 'Site Vitrine',
          showcase_cta: 'Commencez votre projet',
          showcase_desc: 'Présentez votre activité avec élégance. Design responsive, structure claire, résultats concrets.',
          ecommerce_title: 'Site E-Commerce',
          ecommerce_cta: 'Je veux être contacté',
          ecommerce_desc: 'Vendez vos produits en ligne avec une boutique performante, facile à gérer et optimisée pour convertir.'
        },
        delivery: {
          title: 'Livraison garantie, ou services offerts',
          lead: 'Chez Digitoyou, on respecte les délais. Sinon ? Vous recevez <strong>2 mois gratuits</strong> de chaque service ci-dessous :',
          benefit1: '2 mois de maintenance',
          benefit2: '2 mois d’hébergement',
          benefit3: '2 mois d’hébergement',
          benefit4: '2 mois d’articles de blog',
          benefit5: '2 mois de social media'
        },
        cta: {
          heading: 'Vous avez encore des questions ?<br>Discutons-en autour d’un appel rapide.',
          button: 'Prendre RDV'
        },
        faq: {
          title: 'Questions fréquentes',
          lead: "On a regroupé ici tout ce que vous devez savoir avant de lancer votre projet avec nous. Vous avez encore des questions ? Contactez-nous, on répond rapidement.",
          q1: { q: 'Pourquoi choisir Digitoyou plutôt qu’une autre agence ?', a: 'Digitoyou mise sur la qualité, la transparence et la vitesse. Nous ne prenons jamais plus de 3 projets en parallèle pour offrir une attention totale à chaque client.' },
          q2: { q: 'Quand pouvez-vous démarrer mon projet ?', a: 'Nous pouvons démarrer en 5 à 10 jours, selon nos disponibilités. On prend vite contact pour organiser ça ensemble.' },
          q3: { q: 'Quels types de projets réalisez-vous ?', a: 'Sites vitrines, e-commerce, landing pages, refontes, branding… On s’adapte à vos besoins pour livrer une solution clé en main, toujours orientée conversion.' },
          q4: { q: 'Et si je veux faire des ajustements après la livraison ?', a: 'Pas de souci. On inclut 2 à 3 mois de maintenance selon le projet, pour corriger, ajuster ou faire évoluer votre site. C’est compris dans notre engagement.' },
          q5: { q: 'Quels sont vos tarifs ?', a: 'Chaque projet est unique. Mais pour vous donner un ordre d’idée, nos accompagnements démarrent à partir de 3.000€, avec un vrai suivi, une vraie stratégie et un site sur mesure.' }
        },
        projects: {
          wgs: {
            title: 'Wolves Groups Services',
            desc: 'Développement du site pour <strong>WGS.ma</strong>, une entreprise de services de sécurité.',
            cta: 'Visiter le site >'
          },
            storymedia: {
            title: 'Story Media',
            desc: 'Conception et réalisation du site <strong>Storymedia.ma</strong>, une agence de storytelling.',
            cta: 'Visiter le site >'
          },
          faciclean: {
            title: 'Faciclean',
            desc: 'Développement du site pour <strong>Faciclean</strong>, entreprise spécialisée dans le nettoyage professionnel.',
            cta: 'Visiter le site >'
          },
          agile5s: {
            title: 'Agile5S',
            desc: 'Développement du site pour <strong>Agile5S</strong>, société américaine de services IT spécialisée dans des solutions logicielles évolutives.',
            cta: 'Visiter le site >'
          },
          groupsaz: {
            title: 'Group SAZ',
            desc: 'Développement du site pour <strong>Group SAZ</strong>, couvrant la gestion immobilière, le facility management, le conseil IT et l\'aviation.',
            cta: 'Visiter le site >'
          },
          syndicaz: {
            title: 'SyndicAZ',
            desc: 'Développement du site pour <strong>SyndicAZ</strong>, plateforme de gestion de copropriété et de conseil en immobilier dédiée à des services immobiliers.',
            cta: 'Visiter le site >'
          }
        }
      }
    },
    en: {
      nav: { about: 'About', blog: 'Blog', case_client: 'Case Studies' },
      links: { about: '/about.html', blog: 'blog2.html', case_client: '/contact.html' },
      index: {
        hero: {
          prefix: 'Go from ',
          local: 'Local',
          middle: ' to ',
          online: 'Online',
          typing: 'Simply',
          // rotating words for hero typing (localized)
          typing_words: ['Simply','Quickly','Easily'],
          lead: 'We build <strong>custom websites</strong> for artisans, shop owners and entrepreneurs.',
          cta_long: 'Let’s talk about your project – 100% free, no commitment',
          cta_short: 'Talk about your project',
          expert_line: 'A <b>Digitoyou</b> expert replies within 24h.',
          h1: 'Go from <span class="text-warning">Local</span> to <span class="text-warning">Online</span><br /><span class="underline-3 style-3 text-typing d-inline-block">Simply</span>'
        },
        features: {
          f1: 'Get more visibility',
          f2: 'Clarify your message',
          f3: 'Unlock sales',
          f4: 'Market Research',
          lead: 'We create <b>100% custom showcase websites</b>, tailored to your needs, your market, and your reality. Whether you are an artisan, shop owner, or entrepreneur, Digitoyou connects you to the online world, hassle-free.'
        },
        realizations: { small: 'Our Work', title: 'Our latest projects' },
        clients: {
          heading: 'Already <span class="text-warning">5000 clients</span> satisfied customers.<br>Could you be next?'
        },
        counters: {
          completed: 'Completed Projects',
          satisfied: 'Satisfied Customers',
          experts: 'Experts at your service'
        },
        offers: { small: 'Our Offers', title: 'Digital solutions crafted to boost your business.' },
        offer_cards: {
          landing_title: 'Landing Page',
          landing_cta: 'Talk to an expert',
          landing_desc: 'A unique, fast, and targeted page to convert your visitors into customers on their first visit.',
          redesign_title: 'Website Redesign',
          redesign_cta: 'Schedule my appointment',
          redesign_desc: 'Modernize your site with a new design, better performance, and enhanced impact.',
          showcase_title: 'Showcase Website',
          showcase_cta: 'Start your project',
          showcase_desc: 'Elegantly present your business. Responsive design, clear structure, concrete results.',
          ecommerce_title: 'E‑Commerce Site',
          ecommerce_cta: 'I want to be contacted',
          ecommerce_desc: 'Sell your products online with a high-performing, easy-to-manage, and conversion-optimized store.'
        },
        delivery: {
          title: 'Guaranteed delivery, or services offered',
          lead: 'At Digitoyou, we respect deadlines. Otherwise? You receive <strong>2 months free</strong> of each service below:',
          benefit1: '2 months of maintenance',
          benefit2: '2 months of hosting',
          benefit3: '2 months of hosting',
          benefit4: '2 months of blog articles',
          benefit5: '2 months of social media'
        },
        cta: {
          heading: 'Still have questions?<br>Let’s discuss them over a quick call.',
          button: 'Schedule a call'
        },
        faq: {
          title: 'Frequently Asked Questions',
          lead: "We've gathered everything you need to know before starting your project with us. Still have questions? Contact us, we reply fast.",
          q1: { q: 'Why choose Digitoyou over another agency?', a: 'Digitoyou focuses on quality, transparency, and speed. We never take on more than 3 projects at a time to give each client our full attention.' },
          q2: { q: 'When can you start my project?', a: 'We can start in 5 to 10 days, depending on our availability. We’ll get in touch quickly to organize it together.' },
          q3: { q: 'What types of projects do you handle?', a: 'Showcase sites, e-commerce, landing pages, redesigns, branding… We adapt to your needs to deliver a turnkey solution, always conversion-oriented.' },
          q4: { q: 'What if I want to make adjustments after delivery?', a: 'No problem. We include 2 to 3 months of maintenance depending on the project, to correct, adjust, or evolve your site. It’s part of our commitment.' },
          q5: { q: 'What are your rates?', a: 'Each project is unique. But to give you an idea, our support starts from €3,000, with real follow-up, a real strategy, and a custom site.' }
        },
        projects: {
          wgs: {
            title: 'Wolves Groups Services',
            desc: 'Development of the website for <strong>WGS.ma</strong>, a security services company.',
            cta: 'Visit Website >'
          },
          storymedia: {
            title: 'Story Media',
            desc: 'Designing and building <strong>Storymedia.ma</strong>\'s website, a storytelling agency.',
            cta: 'Visit Website >'
          },
          faciclean: {
            title: 'Faciclean',
            desc: 'Development of the website for <strong>Faciclean</strong>, a company specializing in professional cleaning services.',
            cta: 'Visit Website >'
          },
          agile5s: {
            title: 'Agile5S',
            desc: 'Development of the website for <strong>Agile5S</strong>, a leading US-based IT services company specializing in scalable software solutions.',
            cta: 'Visit Website >'
          },
          groupsaz: {
            title: 'Group SAZ',
            desc: 'Development of the website for <strong>Group SAZ</strong>, covering property management, facility management, IT consulting, and aviation.',
            cta: 'Visit Website >'
          },
          syndicaz: {
            title: 'SyndicAZ',
            desc: 'Development of the website for <strong>SyndicAZ</strong>, a property management and co-ownership consulting platform dedicated to efficient .',
            cta: 'Visit Website >'
          }
        }
      }
    }
  };

  // Expose helper to retrieve translation values outside this IIFE (for dynamic content)
  window.i18nGet = function(key, lang){
    try {
      const l = lang || (localStorage.getItem(LS_KEY) || defaultLang);
      const dict = translations[l] || translations[defaultLang];
      return key.split('.').reduce((o,k)=> o && o[k], dict);
    } catch(e){ return undefined; }
  };

  function getSaved() { return localStorage.getItem(LS_KEY) || defaultLang; }
  function save(lang){ localStorage.setItem(LS_KEY, lang); }

  function translatePage(lang){
    const dict = translations[lang] || translations[defaultLang];
    // text content replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = key.split('.').reduce((o,k)=>o && o[k], dict);
      if(val !== undefined) el.textContent = val;
    });
    // href replacements
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
      const key = el.getAttribute('data-i18n-href');
      const val = key.split('.').reduce((o,k)=>o && o[k], dict);
      if(val !== undefined) el.setAttribute('href', val);
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      const val = key.split('.').reduce((o,k)=>o && o[k], dict);
      if(val !== undefined) el.setAttribute('placeholder', val);
    });
    // titles
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      const key = el.getAttribute('data-i18n-title');
      const val = key.split('.').reduce((o,k)=>o && o[k], dict);
      if(val !== undefined) el.setAttribute('title', val);
    });
    // html replacements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = key.split('.').reduce((o,k)=>o && o[k], dict);
      if(val !== undefined) el.innerHTML = val;
    });

    // update hero typing words globally and set initial text
    try {
      if(dict.index && dict.index.hero && dict.index.hero.typing_words){
        window.i18nTypingWords = dict.index.hero.typing_words;
        const typingEl = document.querySelector('.text-typing');
        if(typingEl) typingEl.textContent = window.i18nTypingWords[0] || '';
      }
    } catch(e) { console.error('i18n: failed to set typing words', e); }
    // notify other scripts that translations updated
    try { document.dispatchEvent(new CustomEvent('i18n:updated')); } catch(e){}

    // update current language display
    const cur = document.querySelector('.language-select .current-lang');
    if(cur) cur.textContent = lang === 'fr' ? 'Fr' : 'En';

  // publish current language globally for dynamic modules
  window.i18nCurrentLang = lang;
  }

  function setLanguage(lang){
    if(!supported.includes(lang)) lang = defaultLang;
    save(lang);
    translatePage(lang);
  }

  // wire up language selector items
  document.addEventListener('click', function(e){
    const tgt = e.target.closest('[data-lang]');
    if(!tgt) return;
    e.preventDefault();
    const lang = tgt.getAttribute('data-lang');
    setLanguage(lang);
    // if the clicked element has an href and points to a translated page we allow navigation
    const href = tgt.getAttribute('href');
    const dict = translations[lang] || {};
    // give the rest of the app a tick to update and then navigate if href is not '#'
    if(href && href !== '#') setTimeout(()=>{ window.location.href = href; }, 20);
  });

  // initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function(){
    const lang = getSaved();
    setLanguage(lang);
  });
})();
