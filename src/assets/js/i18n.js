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
        about: {
          card: {
            remote: {
              heading: '100% Remote',
              sub: 'Agence Digitale'
            }
          },
          hero: {
            h1: 'Digitoyou, le digital devient vôtre.',
            lead: 'Nous concevons des sites web modernes et efficaces, pensés pour refléter votre identité, séduire vos prospects et transformer chaque visite en opportunité.',
            cta_button: 'Réservez votre consultation gratuite'
          },
          history: {
            title: 'Notre Histoire',
            p1: 'Tout a commencé avec <strong>quatre amis passionnés par le digital</strong> et un rêve commun : rendre le web accessible et performant pour les petites entreprises.',
            p2: 'En unissant nos expertises en <strong>développement web, design, data et vente</strong>, nous avons créé <strong>Digitoyou</strong>, une agence humaine et ambitieuse qui place vos besoins au centre de chaque projet.',
            p3: 'Aujourd’hui, nous accompagnons entrepreneurs, artisans et PME pour <strong>transformer leurs idées en sites web modernes et performants</strong>, pensés pour séduire, convaincre et convertir.'
          },
          counters: {
            founders: 'Amis fondateurs',
            delivered: 'Projets livrés',
            satisfaction: 'Satisfaction client'
          },
          advice: {
            button: "En savoir plus",
            title: 'Des conseils experts taillés sur mesure pour faire décoller votre projet.',
            lead: 'Chaque projet est unique. Découvrez des stratégies éprouvées et des outils innovants pour transformer vos idées en succès concret. Laissez-nous vous guider vers l’excellence.'
          },
          features_cards: {
            card1: { title: 'Ciblage stratégique', desc: 'Identifiez précisément votre audience idéale pour maximiser l’impact de chaque action, sans dispersion inutile.' },
            card2: { title: 'Sécurité avancée', desc: 'Protégez vos données et celles de vos clients avec des solutions robustes, pour bâtir une relation de confiance durable.' },
            card3: { title: 'Performance optimisée', desc: 'Offrez à vos utilisateurs une expérience fluide et rapide, facteur clé pour garder leur attention et les convertir.' },
            card4: { title: 'Automatisation intelligente', desc: 'Libérez-vous des tâches répétitives et concentrez-vous sur ce qui crée de la valeur, grâce à des outils performants et intuitifs.' },
            card5: { title: 'Support dédié', desc: 'Un accompagnement réactif et personnalisé, parce que chaque question mérite une réponse claire et rapide.' },
            card6: { title: 'Analyse performante', desc: 'Des données claires et exploitables pour ajuster votre stratégie et accélérer votre croissance avec précision.' }
          },
          // Short cards used in about.html (small cards such as delivery and support)
          shortcards: {
            delivery: {
              title: 'Livraison Express',
              desc: 'Un site clé en main prêt en moins de 10 jours pour démarrer rapidement.'
            },
            support: {
              title: 'Support Réactif',
              desc: '90% des messages et appels traités en moins d\'une heure, 7j/7.'
            }
          },
          cta_section: {
            heading: 'Prêt à booster votre présence en ligne ?',
            lead: 'Chez <strong>Digitoyou</strong>, nous limitons volontairement le nombre de projets pour vous garantir un suivi personnalisé et des résultats rapides.',
            bullets: ['🚀 Un site clé en main livré en moins de 10 jours','🤝 Un accompagnement humain à chaque étape','📈 Ajustements illimités jusqu\'à votre validation'],
            limited: '⚠️ Places limitées : 2 projets ouverts ce mois-ci.',
            button: 'Réservez votre appel gratuit'
          },
          process: {
            small: 'Notre Processus',
            title: 'Un processus simple, <span class="text-gradient gradient-7">transparent</span> et sans stress.',
            step01: { title: 'Des tarifs limpides', desc: 'Des devis clairs et détaillés – aucun frais caché, jamais.' },
            step02: { title: 'Une équipe ultra-disponible', desc: '90% des messages et appels traités en moins d’une heure.' },
            step03: { title: 'Des délais respectés', desc: 'Livraison rapide garantie pour dépasser vos attentes.' },
            step04: { title: 'Un code conçu pour durer', desc: 'Un site optimisé, évolutif et pensé pour réduire vos coûts futurs.' }
          },
          method: {
            small: 'Notre Méthode',
            title: 'Un seul objectif : transformer votre vision en réalité tangible.',
            lead: 'De la première esquisse à la mise en ligne, nous avançons main dans la main avec vous grâce à un processus clair, des livraisons rapides et un suivi continu pour que chaque détail soit parfaitement exécuté.',
            button: 'Démarrer mon projet'
          },
          services_cards: {
            wf: { title: 'Wireframes & Workflows', desc: 'Des maquettes offertes pour visualiser votre projet dès le départ.' },
            weekly: { title: 'Livraisons Hebdomadaires', desc: 'Chaque semaine, recevez une nouvelle partie du projet et validez vos retours.' },
            flex: { title: 'Flexibilité Totale', desc: 'Vos besoins évoluent ? Nous adaptons notre travail en temps réel.' },
            post: { title: 'Suivi Post-Livraison', desc: 'Bénéficiez de 3 mois de suivi inclus pour ajuster et optimiser votre projet.' }
          },
          delivery: {
            title: 'Livraison garantie, ou services offerts',
            lead: 'Chez Digitoyou, on respecte les délais. Sinon ? Vous recevez <strong>2 mois gratuits</strong> de chaque service ci-dessous :',
            benefits: ['2 mois de maintenance','2 mois d’hébergement','2 mois d’articles de blog','2 mois de social media']
          }
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
        about: {
          card: {
            remote: {
              heading: '100% Remote',
              sub: 'Digital Agency'
            }
          },
          hero: {
            h1: 'Digitoyou, making digital yours.',
            lead: 'We design modern and effective websites, crafted to reflect your identity, captivate your prospects, and turn every visit into an opportunity.',
            cta_button: 'Book your free consultation'
          },
          history: {
            title: 'Our Story',
            p1: 'It all started with <strong>four friends passionate about digital</strong> and a shared dream: to make the web accessible and effective for small businesses.',
            p2: 'By combining our expertise in <strong>web development, design, data, and sales</strong>, we created <strong>Digitoyou</strong>, a human and ambitious agency that puts your needs at the center of every project.',
            p3: 'Today, we support entrepreneurs, artisans, and SMEs to <strong>turn their ideas into modern and high-performing websites</strong>, designed to attract, convince, and convert.'
          },
          counters: {
            founders: 'Founders',
            delivered: 'Projects delivered',
            satisfaction: 'Customer satisfaction'
          },
          advice: {
            button: "Learn more",
            title: 'Expert advice tailored to elevate your project.',
            lead: 'Every project is unique. Discover proven strategies and innovative tools to turn your ideas into tangible success. Let us guide you to excellence.'
          },
          features_cards: {
            card1: { title: 'Strategic Targeting', desc: 'Precisely identify your ideal audience to maximize the impact of every action, without unnecessary dispersion.' },
            card2: { title: 'Advanced Security', desc: 'Protect your data and your clients’ data with robust solutions, building lasting trust.' },
            card3: { title: 'Optimized Performance', desc: 'Provide your users with a smooth and fast experience, a key factor in keeping their attention and converting them.' },
            card4: { title: 'Smart Automation', desc: 'Free yourself from repetitive tasks and focus on what creates value, with powerful and intuitive tools.' },
            card5: { title: 'Dedicated Support', desc: 'Responsive and personalized support, because every question deserves a clear and quick answer.' },
            card6: { title: 'Effective Analytics', desc: 'Clear and actionable data to adjust your strategy and accelerate your growth with precision.' }
          },
          // Short cards used in about.html (small cards such as delivery and support)
          shortcards: {
            delivery: {
              title: 'Express Delivery',
              desc: 'A turnkey site ready in less than 10 days to get started quickly.'
            },
            support: {
              title: 'Responsive Support',
              desc: '90% of messages and calls handled in under an hour, 7 days a week.'
            }
          },
          cta_section: {
            heading: 'Ready to boost your online presence?',
            lead: 'At <strong>Digitoyou</strong>, we intentionally limit the number of projects to ensure personalized follow-up and fast results.',
            bullets: ['🚀 A turnkey site delivered in less than 10 days','🤝 Human support at every step','📈 Unlimited adjustments until your approval'],
            limited: '⚠️ Limited slots: 2 projects open this month.',
            button: 'Book your free call'
          },
          process: {
            small: 'Our Process',
            title: 'A simple, <span class="text-gradient gradient-7">transparent</span>, and stress-free process.',
            step01: { title: 'Clear Pricing', desc: 'Detailed and clear quotes – no hidden fees, ever.' },
            step02: { title: 'Highly Available Team', desc: '90% of messages and calls handled in less than an hour.' },
            step03: { title: 'Respected Deadlines', desc: 'Guaranteed fast delivery to exceed your expectations.' },
            step04: { title: 'Code Built to Last', desc: 'An optimized, scalable site designed to reduce your future costs.' }
          },
          method: {
            small: 'Our Method',
            title: 'One goal: turning your vision into tangible reality.',
            lead: 'From the first sketch to going live, we work hand in hand with you through a clear process, fast deliveries, and continuous follow-up to ensure every detail is perfectly executed.',
            button: 'Start my project'
          },
          services_cards: {
            wf: { title: 'Wireframes & Workflows', desc: 'Complimentary mockups to visualize your project from the start.' },
            weekly: { title: 'Weekly Deliveries', desc: 'Receive a new part of the project every week and validate your feedback.' },
            flex: { title: 'Total Flexibility', desc: 'Your needs evolve? We adapt our work in real-time.' },
            post: { title: 'Post-Delivery Support', desc: 'Benefit from 3 months of included support to adjust and optimize your project.' }
          },
          delivery: {
            title: 'Guaranteed delivery, or services offered',
            lead: 'At Digitoyou, we respect deadlines. Otherwise? You receive <strong>2 months free</strong> of each service below:',
            benefits: ['2 months of maintenance','2 months of hosting','2 months of blog articles','2 months of social media']
          }
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
        }
      }
    }
  };

  function getSaved() { return localStorage.getItem(LS_KEY) || defaultLang; }
  function save(lang){ localStorage.setItem(LS_KEY, lang); }

  function translatePage(lang){
    const dict = translations[lang] || translations[defaultLang];
    // text content replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = key.split('.').reduce((o,k)=>o && o[k], dict);
      if(val !== undefined) {
        // If the translation is an array and the target is a list, render LI elements
        if(Array.isArray(val)){
          // clear existing children
          while(el.firstChild) el.removeChild(el.firstChild);
          val.forEach(item => {
            const li = document.createElement('li');
            // Use textContent to avoid injecting arbitrary HTML from translations
            li.textContent = item;
            el.appendChild(li);
          });
        } else {
          el.textContent = val;
        }
      }
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
    document.querySelectorAll('.current-lang').forEach(el => {
      el.textContent = lang === 'fr' ? 'Fr' : 'En';
    });
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

  // Fallback: directly bind click handlers to language links in case event delegation
  // is blocked by other scripts/plugins. This will be run on DOMContentLoaded.
  function bindLanguageLinks(){
    document.querySelectorAll('.language-select [data-lang]').forEach(el=>{
      // avoid double-binding
      if(el._i18nBound) return;
      el._i18nBound = true;
      el.addEventListener('click', function(e){
        e.preventDefault();
        const lang = el.getAttribute('data-lang');
        setLanguage(lang);
        const href = el.getAttribute('href');
        if(href && href !== '#') setTimeout(()=>{ window.location.href = href; }, 20);
      });
    });
  }

  // initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function(){
    const lang = getSaved();
    setLanguage(lang);
    // bind direct listeners as a fallback
    try { bindLanguageLinks(); } catch(e){ console.error('i18n: bindLanguageLinks failed', e); }
  });

  // Also re-bind when translations update (useful if menu gets replaced dynamically)
  document.addEventListener('i18n:updated', function(){ try{ bindLanguageLinks(); }catch(e){} });
})();
