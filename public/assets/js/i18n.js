(function(){
  // Simple client-side i18n
  const LS_KEY = 'site_lang';
  const defaultLang = 'fr';
  const supported = ['fr','en','ar'];

  const translations = {
    fr: {
      // SEO metadata per page
      seo: {
        home: {
          title: 'Digitoyou | Marketing digital & solutions web au Maroc, Canada et Belgique',
          description: 'Développez votre visibilité en ligne avec Digitoyou. Sites web, publicité et stratégies adaptées aux entreprises au Maroc, Canada et Belgique.',
          keywords: 'Digitoyou, marketing digital, création de site, développement web, SEO, publicité en ligne, Maroc, Canada, Belgique, sites web, agence, croissance'
        },
        about: {
          title: 'À propos de Digitoyou | Votre partenaire de croissance digitale',
          description: 'Découvrez Digitoyou, une agence digitale qui accompagne les entreprises au Maroc, Canada et Belgique dans leur croissance.',
          keywords: 'Digitoyou, à propos, agence digitale, Maroc, Canada, Belgique, experts web, équipe marketing, partenaire de croissance'
        },
        services: {
          title: 'Nos services | Création de sites, marketing digital & publicité – Digitoyou',
          description: 'Digitoyou propose des solutions digitales complètes : sites web, marketing et publicité pour développer votre entreprise.',
          keywords: 'création de site, développement, e‑commerce, SEO, SEA, Google Ads, social ads, branding, contenu, maintenance, hébergement'
        },
        contact: {
          title: 'Contactez Digitoyou | Construisons votre succès digital',
          description: 'Prenez contact avec Digitoyou. Nous répondons à vos questions et lançons ensemble votre croissance digitale.',
          keywords: 'contact Digitoyou, prise de contact, devis, consultation, appel gratuit, projet digital'
        }
      },
      nav: { about: 'À propos', blog: 'Blog', case_client: 'Cas Client' },
    links: { about: '/about', blog: '/blog', case_client: '/contact' },
      index: {
        hero: {
          prefix: 'De votre ',
          local: 'commerce local',
          middle: " à une présence ",
          online: 'digitale',
          typing: 'en toute simplicité',
          // rotating words for hero typing (localized)
          typing_words: ['Simplement','Rapidement','Facilement'],
          lead: 'Avec <b>Digitoyou</b>, vos idées se transforment en expériences uniques et en clients fidèles.',
          cta_long: 'Réservez votre rendez-vous gratuit',
          cta_short: 'Réservez votre rendez-vous gratuit',
          expert_line: '',
          h1: 'Ne suivez pas le digital,<span class="text-gradient gradient-7">prenez-le en main.</span><br /><span class="underline-3 style-3 text-typing d-inline-block">Simplement</span>'
        }, 
        // Appointment / Reservation translations
        appointment: {
          hero: {
            // contains HTML, should be used with data-i18n-html
            h1: 'Réservez votre <span class="text-gradient gradient-7">Session</span> Stratégique',
            lead: 'Ensemble, définissons un <strong>plan d\'actions clair et un calendrier réaliste</strong> pour votre projet web.',
            contact_prompt: 'Vous préférez parler directement ?'
          },
          booking: {
            profile: {
              name: 'Brahim Berouini',
              talk_title: 'Parlons de votre projet 🚀',
              duration: '15 min',
              free: 'Consultation gratuite',
              bonus: 'Bonus : maquettes UX sous 72h'
            },
            steps: {
              step1: '1. Choisir un créneau',
              step2: '2. Vos coordonnées'
            },
            calendar: {
              slots_title: 'Créneaux disponibles',
              continue: 'Continuer'
            },
            contact: {
              title: 'Vos informations',
              back: 'Retour',
              name_placeholder: 'Votre nom',
              name_label: 'Nom complet',
              email_placeholder: 'Votre email',
              email_label: 'Email',
              phone_placeholder: 'Votre téléphone',
              phone_label: 'Numéro de téléphone',
              communication_label: 'Comment souhaitez-vous échanger ?',
              comm_phone: 'Téléphone',
              comm_whatsapp: 'WhatsApp',
              comm_meet: 'Google Meet',
              message_placeholder: 'Votre message',
              message_label: 'Que puis-je faire pour vous ? (optionnel)',
              slot_label: 'Créneau :',
              none: 'Aucun',
              submit: 'Confirmer le rendez-vous'
            },
            modal: {
              success_title: 'Rendez-vous confirmé !',
              success_body: 'Votre demande a été enregistrée avec succès.',
              close: 'Fermer'
            },
            alerts: {
              select_slot: 'Veuillez sélectionner une date et un créneau horaire',
              send_error: 'Erreur lors de l\'envoi à Slack',
              send_failed: 'Une erreur est survenue lors de l\'envoi du formulaire'
            }
          }
        },
        features: {
          f1: 'Gagnez en visibilité',
          f2: 'Clarifiez votre message',
          f3: 'Débloquez des ventes',
          f4: 'Étude de marché',
          lead: 'Nous créons <b>des sites vitrines 100% sur mesure</b>, adaptés à vos besoins, votre marché et votre réalité. Que vous soyez artisan, commerçant ou entrepreneur, Digitoyou vous connecte au monde en ligne, sans prise de tête.'
        },
        realizations: { small: 'Nos Réalisations', title: 'Nos derniers projets' },
        clients: {
          heading: 'Déjà <span class="text-warning">50 clients</span> satisfaits.<br>Et si vous étiez le prochain?'
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
            benefit1: '2 mois de maintenance',
            benefit2: '2 mois d’hébergement',
            benefit3: '2 mois d’articles de blog',
            benefit4: '2 mois de social media'
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
          q5: { q: 'Quels sont vos tarifs ?', a: 'Chaque projet est unique. Mais pour vous donner un ordre d’idée, nos accompagnements démarrent à partir de 300€, avec un vrai suivi, une vraie stratégie et un site sur mesure.' }
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
        },

        // Translations specific to the blog listing (blog.html)
        blog: {
          hero: {
            h1: 'Découvrez nos articles',
            lead: 'Explorez nos conseils et astuces pour créer un site web performant et développer votre présence en ligne avec Digitoyou.',
            cta_projects: 'Voir nos projets',
            cta_more: 'En savoir plus'
          },
          post: {
            read_more: 'Lire la suite',
            categories: {
              digitalization: 'Digitalisation',
              entrepreneurship: 'Entrepreneuriat',
              coding: 'Coding',
              workspace: 'Workspace',
              meeting: 'Meeting',
              business_tips: 'Conseils Business',
              websites: 'Sites Web',
              artisans: 'Conseils Artisans',
              case_studies: 'Études de cas',
              tutorials: 'Tutoriels',
              seo: 'SEO'
            },
            meta: {
              by: 'Par',
              comments: 'Commentaires',
              likes: 'Likes',
              author: 'Digitoyou'
            },
            posts: {
              p1: { title: 'Créer un site web efficace pour votre activité locale', excerpt: 'Découvrez les étapes clés pour concevoir un site web qui attire des clients et reflète votre savoir-faire local.', date: '5 juil. 2025' },
              p2: { title: 'Comment un commerçant a doublé ses ventes en ligne', excerpt: 'Retour sur la collaboration avec un commerçant local qui a vu son chiffre d’affaires digital doubler en 3 mois.', date: '25 juin 2025' },
              p3: { title: 'Tuto : Intégrer une réservation en ligne à votre site', excerpt: 'Apprenez pas à pas comment ajouter un module de réservation en ligne pour faciliter la prise de rendez-vous de vos clients.', date: '18 mai 2025' },
              grid1: { title: '5 astuces SEO pour artisans', excerpt: 'Optimisez votre visibilité sur Google grâce à ces conseils spécialement adaptés aux artisans.', date: '14 avr. 2025' }
            },
            tags: {
              coder: 'coder',
              digitaliser: 'digitaliser',
              online: 'online'
            },
            comment_form: {
              title: 'Laisser un commentaire',
              description: 'Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués *.',
              invite: 'Souhaitez-vous partager vos pensées ?',
              privacy: 'Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués *',
              name_placeholder: 'Nom*',
              name_label: 'Nom *',
              email_placeholder: 'E-mail*',
              email_label: 'E-mail*',
              website_placeholder: 'Site web',
              website_label: 'Site web',
              comment_placeholder: 'Commentaire',
              comment_label: 'Commentaire *',
              submit: 'Envoyer',
              submit_button: 'Envoyer'
            },
            // Français
          single: {
            title: 'Passez du local au numérique : Un guide pratique',
            date: '4 Juillet 2025',
            more_title: 'Autres articles susceptibles de vous intéresser',
            body_html: '<h2 class="h1 mb-4">Pourquoi digitaliser votre commerce local ?</h2>\n<p>Dans un monde en constante évolution, avoir une présence en ligne est devenu essentiel. Que vous soyez artisan, commerçant ou entrepreneur, le numérique ouvre la porte à de nouvelles opportunités : attirer plus de clients, améliorer votre visibilité et professionnaliser votre image.</p>\n<p>Avec un site web bien conçu, une présence sur les réseaux sociaux et une stratégie adaptée à votre audience, vous pouvez transformer votre activité locale en un projet visible à l’échelle nationale, voire internationale.</p>\n<h3 class="h2 mb-4 mt-6">Les étapes clés pour passer en ligne</h3>\n<ul class="list-unstyled mb-5"><li>✅ Créez un site moderne et responsive</li><li>✅ Mettez en valeur vos produits ou services avec des visuels professionnels</li><li>✅ Intégrez des moyens de contact simples et efficaces</li><li>✅ Optimisez votre référencement pour Google</li><li>✅ Utilisez les réseaux sociaux pour communiquer et fidéliser</li></ul>\n<blockquote class="fs-lg my-8"><p>« Aujourd’hui, votre boutique n’est jamais fermée : elle est en ligne 24h/24 et 7j/7. »</p><footer class="blockquote-footer">Équipe Digitoyou</footer></blockquote>\n<h3 class="h2 mb-4">Un accompagnement sur mesure</h3>\n<p>Chez Digitoyou, nous vous aidons à franchir cette étape en toute confiance. Nos experts conçoivent des sites adaptés à vos besoins, à votre image et optimisés pour vos clients. Passez du local au numérique, rapidement et simplement.</p>'
          },
          },
          // comment form translations
          
          // Sidebar specific translations
          sidebar: {
            search_placeholder: 'Rechercher',
            about_title: 'À propos',
            about_html: 'Passez du <strong>Local</strong> à l’<strong>Online</strong> Rapidement !<br/>Nous concevons des sites sur mesure pour artisans, commerçants et entrepreneurs.<br/>Transformez votre savoir-faire en succès digital.',
            popular_title: 'Articles populaires',
            categories_title: 'Catégories',
            tags_title: 'Tags',
            archive_title: 'Archive',
            tags: {
              wordpress: 'WordPress',
              woocommerce: 'WooCommerce',
              reservation: 'Réservation',
              seo: 'SEO',
              case_study: 'Étude de cas',
              tuto: 'Tuto',
              figma: 'Figma'
            },
            archive: {
              jul2025: 'Juillet 2025',
              jun2025: 'Juin 2025',
              may2025: 'Mai 2025',
              apr2025: 'Avril 2025',
              mar2025: 'Mars 2025'
            }
          },
          pagination: { prev: 'Précédent', next: 'Suivant' }
        }
      },
      // Footer translations
      footer: {
        logo_alt: 'Digitoyou',
        copyright: 'Digitoyou © 2025. Tous droits réservés.',
        contact: {
          title: 'Contact',
          email: 'hello@digitoyou.com',
          phone: '+1 866 306 4636'
        },
        resources: {
          title: 'Ressources',
          blog: 'Blog',
          legal: 'Mentions légales',
          privacy: 'Politique de confidentialité'
        },
        discover: {
          title: 'Découvrir',
          about: 'À propos de nous',
          services: 'Nos services'
        }
      }
    },
    // Arabic translations (expanded)
    ar: {
      // SEO metadata per page
      seo: {
        home: {
          title: 'Digitoyou | التسويق الرقمي وحلول الويب في المغرب وكندا وبلجيكا',
          description: 'طوّر حضورك الرقمي مع Digitoyou. مواقع إلكترونية، إعلانات واستراتيجيات مخصصة للأعمال في المغرب وكندا وبلجيكا.',
          keywords: 'Digitoyou, التسويق الرقمي, تصميم مواقع, تطوير مواقع, سيو, إعلانات أونلاين, المغرب, كندا, بلجيكا, مواقع إلكترونية, وكالة, نمو'
        },
        about: {
          title: 'حول Digitoyou | شريكك في النمو الرقمي',
          description: 'تعرف على Digitoyou، وكالة رقمية تساعد الشركات في المغرب وكندا وبلجيكا على النمو باستخدام التكنولوجيا والتسويق.',
          keywords: 'Digitoyou, حول, وكالة رقمية, المغرب, كندا, بلجيكا, خبراء الويب, فريق التسويق, شريك نمو'
        },
        services: {
          title: 'خدماتنا | تصميم المواقع، التسويق الرقمي والإعلانات – Digitoyou',
          description: 'تقدم Digitoyou حلولاً رقمية متكاملة: تصميم مواقع، تسويق رقمي وإعلانات لتطوير أعمالك في المغرب وكندا وبلجيكا.',
          keywords: 'تصميم مواقع, تطوير مواقع, تجارة إلكترونية, سيو, إعلانات جوجل, إعلانات سوشيال, هوية بصرية, محتوى, صيانة, استضافة'
        },
        contact: {
          title: 'اتصل بـ Digitoyou | لنحقق نجاحك الرقمي',
          description: 'تواصل مع Digitoyou للإجابة على أسئلتك والبدء في بناء نموك الرقمي.',
          keywords: 'اتصل بـ Digitoyou, تواصل, عرض سعر, استشارة, مكالمة مجانية, مشروع رقمي'
        }
      },
      nav: { about: 'معلومات', blog: 'مدونة', case_client: 'دراسات حالة' },
  links: { about: '/about', blog: '/blog', case_client: '/contact' },
      index: {
        hero: {
          prefix: 'من نشاطك ',
          local: 'المحلي',
          middle: " إلى حضور ",
          online: 'رقمي',
          typing: 'بكل سهولة',
          // rotating words for hero typing
          typing_words: ['بسهولة','بسرعة','بدون جهد'],
          lead: 'مع <b>Digitoyou</b> تتحول أفكارك إلى تجارب فريدة وعملاء مخلصين.',
          cta_long: 'احجز موعدك المجاني',
          cta_short: 'احجز موعدك',
          expert_line: 'خبير من <b>Digitoyou</b> يتواصل معك خلال 24 ساعة.',
          h1: 'لا تلاحق الرقمنة، <span class="text-gradient gradient-7">تحكّم بها</span><br /><span class="underline-3 style-3 text-typing d-inline-block">بسهولة</span>'
        },
        appointment: {
          hero: {
            h1: 'احجز جلستك <span class="text-gradient gradient-7">الاستراتيجية</span>',
            lead: 'معاً سنحدد <strong>خطة عمل واضحة وجدول زمني واقعي</strong> لمشروعك.',
            contact_prompt: 'هل تفضل التحدث مباشرة؟'
          },
          booking: {
            profile: {
              name: 'براهيم بيروين',
              talk_title: 'دعنا نتحدث عن مشروعك 🚀',
              duration: '15 دقيقة',
              free: 'استشارة مجانية',
              bonus: 'مكافأة: نماذج UX خلال 72 ساعة'
            },
            steps: { step1: '1. اختر فتحة زمنية', step2: '2. معلوماتك' },
            calendar: { slots_title: 'الفتحات المتاحة', continue: 'متابعة' },
            contact: {
              title: 'معلوماتك', back: 'عودة', name_placeholder: 'اسمك', name_label: 'الاسم الكامل',
              email_placeholder: 'بريدك الإلكتروني', email_label: 'البريد الإلكتروني',
              phone_placeholder: 'هاتفك', phone_label: 'رقم الهاتف',
              communication_label: 'كيف تود التواصل؟', comm_phone: 'هاتف', comm_whatsapp: 'واتساب', comm_meet: 'Google Meet',
              message_placeholder: 'رسالتك', message_label: 'ماذا أستطيع أن أفعل من أجلك؟ (اختياري)', slot_label: 'الفتحة :', none: 'لا شيء', submit: 'تأكيد الموعد'
            },
            modal: { success_title: 'تم تأكيد الموعد!', success_body: 'تم تسجيل طلبك بنجاح.', close: 'إغلاق' },
            alerts: { select_slot: 'يرجى اختيار تاريخ وفتحة زمنية', send_error: 'خطأ أثناء الإرسال إلى Slack', send_failed: 'حدث خطأ أثناء إرسال النموذج' }
          }
        },
        features: {
          f1: 'زد من ظهورك', f2: 'وضّح رسالتك', f3: 'افتح إمكانيات المبيعات', f4: 'بحث السوق',
          lead: 'نُنشئ <b>مواقع عرض مخصصة 100%</b>، مصممة لتلبية احتياجاتك وسوقك وواقعك. سواء كنت حرفياً أو صاحب متجر أو رائد أعمال، نربطك بعالم الإنترنت بسهولة.'
        },
        realizations: { small: 'أعمالنا', title: 'مشاريعنا الأخيرة' },
        clients: { heading: 'أكثر من <span class="text-warning">50 عميل</span> راضٍ.<br>هل ستكون التالي؟' },
        counters: { completed: 'المشروعات المنجزة', satisfied: 'عملاء راضون', experts: 'خبراء في خدمتك' },
        about: {
          card: { remote: { heading: 'عن بُعد 100%', sub: 'وكالة رقمية' } },
          hero: { h1: 'ديجيتويو، الرقمي يصبح لك.', lead: 'نصمم مواقع حديثة وفعّالة تعكس هويتك وتجذب عملاءك وتحول كل زيارة إلى فرصة.', cta_button: 'احجز استشارتك المجانية' },
          history: {
            title: 'قصتنا',
            p1: 'بدأ كل شيء بأربع أصدقاء شغوفين بالرقميات وحلم مشترك: جعل الويب متاحاً وفعّالاً للأعمال الصغيرة.',
            p2: 'بجمع خبراتنا في <strong>تطوير الويب، التصميم، البيانات والمبيعات</strong> أنشأنا <strong>Digitoyou</strong>، وكالة إنسانية وطموحة تضع احتياجاتك في مركز كل مشروع.',
            p3: 'اليوم نرافق رواد الأعمال والحرفيين والشركات الصغيرة لتحويل أفكارهم إلى مواقع حديثة وعالية الأداء.'
          },
          counters: { founders: 'المؤسسون', delivered: 'المشروعات المسلّمة', satisfaction: 'رضا العملاء' },
          advice: { button: 'المزيد', title: 'نصائح خبراء مصممة لرفع مشروعك.', lead: 'كل مشروع فريد. اكتشف استراتيجيات مجربة وأدوات مبتكرة لتحويل أفكارك إلى نجاح.' },
          features_cards: {
            card1: { title: 'استهداف استراتيجي', desc: 'حدّد جمهورك المثالي بدقة لزيادة تأثير كل إجراء.' },
            card2: { title: 'أمان متقدم', desc: 'احمِ بياناتك وبيانات عملائك بحلول قوية.' },
            card3: { title: 'أداء محسن', desc: 'قدّم تجربة سريعة وسلسة للمستخدمين.' },
            card4: { title: 'أتمتة ذكية', desc: 'تخلص من المهام المتكررة وركّز على ما يخلق قيمة.' },
            card5: { title: 'دعم مخصص', desc: 'متابعة سريعة وشخصية لكل استفساراتك.' },
            card6: { title: 'تحليلات فعّالة', desc: 'بيانات واضحة قابلة للتنفيذ لتسريع نموك.' }
          },
          shortcards: { delivery: { title: 'تسليم سريع', desc: 'موقع جاهز في أقل من 10 أيام.' }, support: { title: 'دعم سريع', desc: '90% من الرسائل والمكالمات يتم التعامل معها خلال ساعة.' } },
          cta_section: {
            heading: 'هل أنت مستعد لتعزيز وجودك على الإنترنت؟',
            lead: 'في <strong>Digitoyou</strong> نحد من عدد المشاريع لضمان متابعة شخصية ونتائج سريعة.',
            bullets: ['🚀 موقع جاهز خلال 10 أيام','🤝 دعم إنساني في كل خطوة','📈 تعديلات غير محدودة حتى الموافقة'],
            limited: '⚠️ المقاعد محدودة: مشروعان مفتوحان هذا الشهر.',
            button: 'احجز مكالمتك المجانية'
          },
          process: {
            small: 'عمليتنا',
            title: 'عملية بسيطة، <span class="text-gradient gradient-7">شفافة</span> وخالية من الضغوط.',
            step01: { title: 'أسعار واضحة', desc: 'عروض تفصيلية وواضحة – لا رسوم مخفية.' },
            step02: { title: 'فريق متاح للغاية', desc: '90% من الرسائل والمكالمات تتم معالجتها خلال ساعة.' },
            step03: { title: 'مواعيد التزامية', desc: 'تسليم سريع مضمون لتجاوز توقعاتك.' },
            step04: { title: 'كود مصمم ليصمد', desc: 'موقع محسن وقابل للتطوير لتقليل تكاليفك المستقبلية.' }
          },
          method: { small: 'طريقتنا', title: 'هدف واحد: تحويل رؤيتك إلى واقع ملموس.', lead: 'من المسودة الأولى إلى الإطلاق، نعمل معك خطوة بخطوة بعملية واضحة وتسليمات سريعة ومتابعة مستمرة.', button: 'ابدأ مشروعي' },
          services_cards: {
            wf: { title: 'تصاميم أولية & سير العمل', desc: 'نماذج مجانية لتصور مشروعك من البداية.' },
            weekly: { title: 'تسليمات أسبوعية', desc: 'استلم جزءًا جديدًا كل أسبوع ووافق على ملاحظاتك.' },
            flex: { title: 'مرونة كاملة', desc: 'نكيف عملنا حسب تغير احتياجاتك.' },
            post: { title: 'متابعة بعد التسليم', desc: '3 أشهر متابعة لإجراء التعديلات والتحسينات.' }
          },
          delivery: { title: 'تسليم مضمون أو خدمات مجانية', lead: 'نحترم المواعيد؛ وإلا ستحصل على <strong>شهرين مجاناً</strong> من كل خدمة أدناه:', benefits: ['شهرين من الصيانة','شهرين من الاستضافة','شهرين من المقالات','شهرين من وسائل التواصل'] }
        },
        offers: { small: 'عروضنا', title: 'حلول رقمية مصممة لتعزيز عملك.' },
        offer_cards: {
          landing_title: 'صفحة هبوط', landing_cta: 'تحدث إلى خبير', landing_desc: 'صفحة سريعة ومصممة لتحويل الزوار لعملاء.',
          redesign_title: 'إعادة تصميم الموقع', redesign_cta: 'حدد موعدي', redesign_desc: 'جدد موقعك بتصميم أفضل وأداء أعلى.',
          showcase_title: 'موقع عرض', showcase_cta: 'ابدأ مشروعك', showcase_desc: 'اعرض نشاطك بأناقة مع تصميم متوافق.' ,
          ecommerce_title: 'متجر إلكتروني', ecommerce_cta: 'أرغب بالمراسلة', ecommerce_desc: 'بع منتجاتك عبر متجر متكامل وسهل الإدارة.'
        },
        delivery: { title: 'تسليم مضمون أو خدمات مجانية', lead: 'نحترم المواعيد؛ وإلا ستحصل على <strong>شهرين مجاناً</strong> من كل خدمة:', benefit1: 'شهرين من الصيانة', benefit2: 'شهرين من الاستضافة', benefit3: 'شهرين من المقالات', benefit4: 'شهرين من وسائل التواصل' },
        cta: { heading: 'هل لا تزال لديك أسئلة؟<br>هيا نناقشها في مكالمة سريعة.', button: 'حجز مكالمة' },
        faq: {
          title: 'الأسئلة المتكررة',
          lead: 'جمعنا هنا كل ما تحتاج لمعرفته قبل بدء المشروع معنا. لا تزال لديك أسئلة؟ تواصل معنا، نرد سريعاً.',
          q1: { q: 'لماذا تختار Digitoyou بدل وكالة أخرى؟', a: 'نركز على الجودة، الشفافية والسرعة. لا نتعاطى أكثر من 3 مشاريع في آن واحد لنمنح كل عميل اهتمامنا الكامل.' },
          q2: { q: 'متى يمكنكم بدء مشروعي؟', a: 'يمكننا البدء خلال 5 إلى 10 أيام حسب التوافر.' },
          q3: { q: 'ما أنواع المشاريع التي تنفذونها؟', a: 'مواقع عرض، متاجر إلكترونية، صفحات هبوط، إعادة تصميمات، علامات تجارية... نتكيف لتقديم حل جاهز.' },
          q4: { q: 'ماذا إذا أردت تعديلات بعد التسليم؟', a: 'لا مشكلة. نضمّن 2-3 أشهر من الصيانة حسب المشروع.' },
          q5: { q: 'ما هي أسعاركم؟', a: 'كل مشروع فريد. لكن كبداية، تبدأ خدماتنا من 300€.' }
        },
        projects: {
          wgs: { title: 'Wolves Groups Services', desc: 'تطوير موقع <strong>WGS.ma</strong>، شركة خدمات أمنية.', cta: 'زيارة الموقع >' },
          storymedia: { title: 'Story Media', desc: 'تصميم وتنفيذ موقع <strong>Storymedia.ma</strong>، وكالة رواية القصص.', cta: 'زيارة الموقع >' },
          faciclean: { title: 'Faciclean', desc: 'تطوير موقع <strong>Faciclean</strong> لخدمات التنظيف المهنية.', cta: 'زيارة الموقع >' },
          agile5s: { title: 'Agile5S', desc: 'تطوير موقع <strong>Agile5S</strong>، شركة خدمات تقنية.', cta: 'زيارة الموقع >' },
          groupsaz: { title: 'Group SAZ', desc: 'تطوير موقع <strong>Group SAZ</strong>.', cta: 'زيارة الموقع >' },
          syndicaz: { title: 'SyndicAZ', desc: 'تطوير موقع <strong>SyndicAZ</strong>.', cta: 'زيارة الموقع >' }
        },

        // Translations specific to the blog listing (blog.html)
        blog: {
          hero: {
            h1: 'اكتشف مقالاتنا',
            lead: 'استكشف نصائحنا وحيلنا لإنشاء موقع ويب فعال وتطوير وجودك على الإنترنت مع Digitoyou.',
            cta_projects: 'عرض مشاريعنا',
            cta_more: 'المزيد'
          },
          post: {
            read_more: 'اقرأ المزيد',
            categories: {
              digitalization: 'الرقمنة',
              entrepreneurship: 'ريادة الأعمال',
              coding: 'البرمجة',
              workspace: 'بيئة العمل',
              meeting: 'الاجتماعات',
              business_tips: 'نصائح الأعمال',
              websites: 'مواقع الويب',
              artisans: 'نصائح للحرفيين',
              case_studies: 'دراسات حالة',
              tutorials: 'دروس',
              seo: 'تحسين محركات البحث'
            },
            meta: {
              by: 'بواسطة',
              comments: 'تعليقات',
              likes: 'إعجابات',
              author: 'Digitoyou'
            },
            posts: {
              p1: { title: 'إنشاء موقع ويب فعال لنشاطك المحلي', excerpt: 'اكتشف الخطوات الأساسية لتصميم موقع ويب يجذب العملاء ويعكس مهاراتك المحلية.', date: '5 يوليو 2025' },
              p2: { title: 'كيف ضاعف تاجر مبيعاته عبر الإنترنت', excerpt: 'نظرة على التعاون مع تاجر محلي شهد زيادة في مبيعاته الرقمية بنسبة 100% خلال 3 أشهر.', date: '25 يونيو 2025' },
              p3: { title: 'درس: دمج حجز عبر الإنترنت في موقعك', excerpt: 'تعلم خطوة بخطوة كيفية إضافة وحدة حجز عبر الإنترنت لتسهيل حجز مواعيد عملائك.', date: '18 مايو 2025' },
              grid1: { title: '5 نصائح لتحسين محركات البحث للحرفيين', excerpt: 'حسّن ظهورك على Google بفضل هذه النصائح المخصصة للحرفيين.', date: '14 أبريل 2025' }
            },// small tag labels used inside single post pages
            tags: {
              coder: 'مبرمج',
              digitaliser: 'رقمنة',
              online: 'عبر الإنترنت'
            },
            comment_form: {
              title: 'اترك تعليقًا',
              description: 'لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *.',
              invite: 'هل ترغب في مشاركة أفكارك؟',
              privacy: 'لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *',
              name_placeholder: 'الاسم*',
              name_label: 'الاسم *',
              email_placeholder: 'البريد الإلكتروني*',
              email_label: 'البريد الإلكتروني*',
              website_placeholder: 'الموقع الإلكتروني',
              website_label: 'الموقع الإلكتروني',
              comment_placeholder: 'التعليق',
              comment_label: 'التعليق *',
              submit: 'إرسال',
              submit_button: 'إرسال'
            },
            single: {
            title: 'من المحلي إلى الإنترنت: دليل عملي',
            date: '4 يوليو 2025',
            more_title: 'مقالات أخرى قد تهمك',
            body_html: '<h2 class="h1 mb-4">لماذا تحول نشاطك المحلي إلى الرقمي؟</h2>\n<p>في عالم يتطور باستمرار، أصبحت التواجد على الإنترنت ضرورة. سواء كنت حرفيًا، صاحب متجر أو رائد أعمال، يفتح لك العالم الرقمي أبوابًا لفرص جديدة: جذب المزيد من العملاء، تحسين ظهورك، وإبراز صورة أكثر احترافية.</p>\n<p>من خلال موقع إلكتروني مصمم جيدًا، وحضور على شبكات التواصل الاجتماعي، واستراتيجية موجهة لجمهورك المستهدف، يمكنك تحويل نشاطك المحلي إلى مشروع مرئي على المستوى الوطني، بل وحتى الدولي.</p>\n<h3 class="h2 mb-4 mt-6">الخطوات الأساسية للانتقال إلى الإنترنت</h3>\n<ul class="list-unstyled mb-5"><li>✅ إنشاء موقع عصري ومتجاوب</li><li>✅ إبراز منتجاتك أو خدماتك بصور احترافية</li><li>✅ دمج وسائل تواصل بسيطة وفعّالة</li><li>✅ تحسين محركات البحث (SEO) على جوجل</li><li>✅ استخدام شبكات التواصل للتواصل وبناء الولاء</li></ul>\n<blockquote class="fs-lg my-8"><p>“اليوم، متجرك لا يغلق أبدًا: إنه متواجد على الإنترنت 24/7.”</p><footer class="blockquote-footer">فريق Digitoyou</footer></blockquote>\n<h3 class="h2 mb-4">مرافقة مخصصة</h3>\n<p>في Digitoyou، نساعدك على أخذ هذه الخطوة بثقة. خبراؤنا يصممون مواقع تلائم احتياجاتك، صورتك، ومهيأة لعملائك. انتقل من المحلي إلى الإنترنت بسرعة وبساطة.</p>'
          }
          },
          // comment form translations
         
          // Sidebar specific translations
          sidebar: {
            search_placeholder: 'بحث',
            about_title: 'حول',
            about_html: 'انتقل من <strong>محلي</strong> إلى <strong>عالمي</strong> بسرعة!<br/>نقوم ببناء مواقع مخصصة للحرفيين وأصحاب المتاجر ورواد الأعمال.<br/>حوّل مهاراتك إلى نجاح رقمي.',
            popular_title: 'المشاركات الشائعة',
            categories_title: 'الفئات',
            tags_title: 'العلامات',
            archive_title: 'الأرشيف',
            tags: {
              wordpress: 'ووردبريس',
              woocommerce: 'ووكومرس',
              reservation: 'الحجز',
              seo: 'تحسين محركات البحث',
              case_study: 'دراسة حالة',
              tuto: 'درس',
              figma: 'فيجما'
            },
            archive: {
              jul2025: 'يوليو 2025',
              jun2025: 'يونيو 2025',
              may2025: 'مايو 2025',
              apr2025: 'أبريل 2025',
              mar2025: 'مارس 2025'
            }
          },
          pagination: { prev: 'السابق', next: 'التالي' }
        }
      },
      // Footer translations (Arabic)
      footer: {
        logo_alt: 'ديجيتويو',
        copyright: 'ديجيتويو © 2025. كل الحقوق محفوظة.',
        contact: { title: 'اتصل', email: 'hello@digitoyou.com', phone: '+1 866 306 4636' },
        resources: { title: 'الموارد', blog: 'مدونة', legal: 'ملاحظات قانونية', privacy: 'سياسة الخصوصية' },
        discover: { title: 'اكتشف', about: 'معلومات عنا', services: 'خدماتنا' }
      }
    },
    en: {
      // SEO metadata per page
      seo: {
        home: {
          title: 'Digitoyou | Digital Marketing & Web Solutions in Morocco, Canada & Belgium',
          description: 'Boost your online presence with Digitoyou. Websites, ads and strategies tailored for businesses in Morocco, Canada and Belgium.',
          keywords: 'Digitoyou, digital marketing, web design, web development, SEO, online advertising, Morocco, Canada, Belgium, websites, growth, agency'
        },
        about: {
          title: 'About Digitoyou | Your Digital Growth Partner',
          description: 'Learn more about Digitoyou, a digital agency helping businesses in Morocco, Canada and Belgium grow through technology and marketing.',
          keywords: 'Digitoyou, about, digital agency, Morocco, Canada, Belgium, web experts, marketing team, growth partner'
        },
        services: {
          title: 'Our Services | Web Design, Digital Marketing & Ads – Digitoyou',
          description: 'From websites to digital ads, Digitoyou provides complete marketing solutions to grow your business in Morocco, Canada and Belgium.',
          keywords: 'web design, website development, e‑commerce, SEO, SEA, Google Ads, social ads, branding, content, maintenance, hosting'
        },
        contact: {
          title: 'Contact Digitoyou | Let’s Build Your Digital Success',
          description: 'Get in touch with Digitoyou. We’re here to answer your questions and start building your digital growth.',
          keywords: 'contact Digitoyou, get in touch, quote, consultation, free call, digital project'
        }
      },
      nav: { about: 'About', blog: 'Blog', case_client: 'Case Studies' },
  links: { about: '/about', blog: '/blog', case_client: '/contact' },
      index: {
        hero: {
          prefix: 'From your ',
          local: 'local business',
          middle: " to a ",
          online: 'digital presence',
          typing: 'with ease',
          // rotating words for hero typing
          typing_words: ['Easily','Quickly','Effortlessly'],
          // mirrored phrasing to match site's hero
          lead: 'With <b>Digitoyou</b>, your ideas turn into unique experiences and loyal customers.',
          cta_long: 'Book your free appointment',
          cta_short: 'Book your free appointment',
          expert_line: 'A <b>Digitoyou</b> expert will get back to you within 24 hours.',
          h1: 'Don\'t follow digital, <span class="text-gradient gradient-7">take control of it.</span><br /><span class="underline-3 style-3 text-typing d-inline-block">Easily</span>'
        },        
        // Appointment / Reservation translations
        appointment: {
          hero: {
            // contains HTML, should be used with data-i18n-html
            h1: 'Book your <span class="text-gradient gradient-7">Strategic</span> Session',
            lead: 'Together, let’s define a <strong>clear action plan and a realistic timeline</strong> for your web project.',
            contact_prompt: 'Prefer to talk directly?'
          },
          booking: {
            profile: {
              name: 'Brahim Berouini',
              talk_title: 'Let’s talk about your project 🚀',
              duration: '15 min',
              free: 'Free consultation',
              bonus: 'Bonus: UX mockups within 72h'
            },
            steps: {
              step1: '1. Choose a slot',
              step2: '2. Your details'
            },
            calendar: {
              slots_title: 'Available slots',
              continue: 'Continue'
            },
            contact: {
              title: 'Your information',
              back: 'Back',
              name_placeholder: 'Your name',
              name_label: 'Full name',
              email_placeholder: 'Your email',
              email_label: 'Email',
              phone_placeholder: 'Your phone',
              phone_label: 'Phone number',
              communication_label: 'How would you like to communicate?',
              comm_phone: 'Phone',
              comm_whatsapp: 'WhatsApp',
              comm_meet: 'Google Meet',
              message_placeholder: 'Your message',
              message_label: 'What can I do for you? (optional)',
              slot_label: 'Slot:',
              none: 'None',
              submit: 'Confirm appointment'
            },
            modal: {
              success_title: 'Appointment confirmed!',
              success_body: 'Your request has been successfully recorded.',
              close: 'Close'
            },
            alerts: {
              select_slot: 'Please select a date and time slot',
              send_error: 'Error sending to Slack',
              send_failed: 'An error occurred while submitting the form'
            }
          }
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
          heading: 'Already <span class="text-warning">+50 satisfied customers</span>.<br>Could you be next?'
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
            heading: "Ready to grow your online presence?",
            lead: "At <strong>Digitoyou</strong>, we take on only a few projects at a time to guarantee personalized support and fast results.",
            bullets: [
              "🚀 A turnkey website delivered in under 10 days",
              "🤝 Dedicated guidance at every stage",
              "📈 Unlimited revisions until you're fully satisfied"
            ],
            limited: "⚠️ Only 2 project spots available this month!",
            button: "Book your free call"

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
            benefit1: '2 months of maintenance',
            benefit2: '2 months of hosting',
            benefit3: '2 months of blog articles',
            benefit4: '2 months of social media'
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
          benefit3: '2 months of blog articles',
          benefit4: '2 months of social media'
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
          q5: { q: 'What are your rates?', a: 'Each project is unique. But to give you an idea, our support starts from €300, with real follow-up, a real strategy, and a custom site.' }
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
            desc: 'Development of the website for <strong>SyndicAZ</strong>, a property management and co-ownership consulting platform dedicated to efficient property management services.',
            cta: 'Visit Website >'
          }
        },

        // Translations specific to the blog listing (blog.html)
        blog: {
          hero: {
            h1: 'Discover our articles',
            lead: 'Explore our tips and tricks for creating an effective website and growing your online presence with Digitoyou.',
            cta_projects: 'See our projects',
            cta_more: 'Learn more'
          },
          post: {
            read_more: 'Read more',
            categories: {
              digitalization: 'Digitalization',
              entrepreneurship: 'Entrepreneurship',
              coding: 'Coding',
              workspace: 'Workspace',
              meeting: 'Meeting',
              business_tips: 'Business Tips',
              websites: 'Websites',
              artisans: 'Artisan Tips',
              case_studies: 'Case Studies',
              tutorials: 'Tutorials',
              seo: 'SEO'
            },
            meta: {
              by: 'By',
              comments: 'Comments',
              likes: 'Likes',
              author: 'Digitoyou'
            },
            posts: {
              p1: { title: 'Creating an effective website for your local business', excerpt: 'Discover the key steps to designing a website that attracts customers and reflects your local expertise.', date: 'July 5, 2025' },
              p2: { title: 'How a shop owner doubled their online sales', excerpt: 'A look back at the collaboration with a local shop owner who saw their digital revenue double in 3 months.', date: 'June 25, 2025' },
              p3: { title: 'Tutorial: Integrate online booking into your site', excerpt: 'Learn step-by-step how to add an online booking module to make it easier for your clients to schedule appointments.', date: 'May 18, 2025' },
              grid1: { title: '5 SEO tips for artisans', excerpt: 'Optimize your visibility on Google with these tips specifically tailored for artisans.', date: 'April 14, 2025' }
            }
            ,
            // small tag labels used inside single post pages
            tags: {
              coder: 'coder',
              digitaliser: 'digitaliser',
              online: 'online'
            },
            // Single post content (used by blog-post.html)
            single: {
              title: 'Go from Local to Online: A Practical Guide',
              date: 'July 4, 2025',
              more_title: 'Other articles you might like',
              body_html: '<h2 class="h1 mb-4">Why digitize your local business?</h2>\n<p>In a constantly evolving world, having an online presence has become essential. Whether you are an artisan, shop owner, or entrepreneur, the digital world opens doors to new opportunities: attracting more customers, improving your visibility, and professionalizing your image.</p>\n<p>With a well-designed website, a presence on social media, and a strategy tailored to your target audience, you can transform your local business into a project visible on a national, or even international, scale.</p>\n<h3 class="h2 mb-4 mt-6">Key steps to go Online</h3>\n<ul class="list-unstyled mb-5"><li>✅ Create a modern and responsive website</li><li>✅ Highlight your products or services with professional visuals</li><li>✅ Integrate simple and effective contact methods</li><li>✅ Optimize your SEO for Google</li><li>✅ Use social media to communicate and build loyalty</li></ul>\n<blockquote class="fs-lg my-8"><p>“Today, your shop never closes: it’s online 24/7.”</p><footer class="blockquote-footer">Digitoyou Team</footer></blockquote>\n<h3 class="h2 mb-4">Tailored support</h3>\n<p>At Digitoyou, we help you take this step with confidence. Our experts design websites tailored to your needs, your image, and optimized for your clients. Go from local to online, quickly and simply.</p>'
            },
            comment_form: {
              title: 'Leave a comment',
              description: 'Your email address will not be published. Required fields are marked *.',
              invite: 'Would you like to share your thoughts?',
              privacy: 'Your email address will not be published. Required fields are marked *',
              name_placeholder: 'Name*',
              name_label: 'Name *',
              email_placeholder: 'Email*',
              email_label: 'Email*',
              website_placeholder: 'Website',
              website_label: 'Website',
              comment_placeholder: 'Comment',
              comment_label: 'Comment *',
              submit: 'Submit',
              submit_button: 'Submit'
            },
          },
          // comment form translations
          
          // Sidebar translations (English)
          sidebar: {
            search_placeholder: 'Search',
            about_title: 'About',
            about_html: 'Go from <strong>Local</strong> to <strong>Online</strong> quickly!<br/>We build custom sites for artisans, shop owners and entrepreneurs.<br/>Turn your craft into digital success.',
            popular_title: 'Popular posts',
            categories_title: 'Categories',
            tags_title: 'Tags',
            archive_title: 'Archive',
            tags: {
              wordpress: 'WordPress',
              woocommerce: 'WooCommerce',
              reservation: 'Reservation',
              seo: 'SEO',
              case_study: 'Case Study',
              tuto: 'Tutorial',
              figma: 'Figma'
            },
            archive: {
              jul2025: 'July 2025',
              jun2025: 'June 2025',
              may2025: 'May 2025',
              apr2025: 'April 2025',
              mar2025: 'March 2025'
            }
          },
          pagination: { prev: 'Previous', next: 'Next' }
        }
      },
      // Footer translations
      footer: {
        logo_alt: 'Digitoyou',
        copyright: 'Digitoyou © 2025. All rights reserved.',
        contact: {
          title: 'Contact',
          email: 'hello@digitoyou.com',
          phone: '+1 866 306 4636'
        },
        resources: {
          title: 'Resources',
          blog: 'Blog',
          legal: 'Legal Notice',
          privacy: 'Privacy Policy'
        },
        discover: {
          title: 'Discover',
          about: 'About us',
          services: 'Our services'
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
      el.textContent = lang === 'fr' ? 'Fr' : lang === 'en' ? 'En' : 'Ar';
    });

    // handle RTL for Arabic
    if(lang === 'ar'){
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.removeAttribute('dir');
      document.documentElement.setAttribute('lang', lang);
    }

    // swap hero background image for Arabic (and revert for other languages)
    try {
      const heroEl = document.querySelector('.wrapper.hero-enhanced');
      if(heroEl) {
        if(lang === 'ar'){
          heroEl.style.backgroundImage = "url('./assets/img/photos/hero1-1800×1000.png.png')";
        } else {
          heroEl.style.backgroundImage = "url('./assets/img/photos/hero-1800×1000.png')";
        }
      }
    } catch(e){ console.error('i18n: failed to swap hero image', e); }

    // Update SEO: document title and meta description based on current page
    try {
      const pageKey = (function(){
        // Prefer explicit data attribute if present
        const el = document.querySelector('[data-page]');
        if (el && el.getAttribute('data-page')) return el.getAttribute('data-page');
        // Derive from path: supports clean URLs and .html
        let p = (location.pathname || '').replace(/\/+$/, '');
        // handle local dev where path may include /dist/
        p = p.replace(/\/dist\//, '/');
        if (p === '' || p === '/' || /\/index(\.html)?$/i.test(p)) return 'home';
        const m = p.match(/\/([^\/]+?)(?:\.html)?$/i);
        const slug = m ? m[1].toLowerCase() : '';
        if (slug === 'about') return 'about';
        if (slug === 'services') return 'services';
        if (slug === 'contact') return 'contact';
        // Map known pages to nearest SEO bucket
        if (slug === 'appointment') return 'contact';
        if (slug === 'blog' || slug === 'blog-post') return 'home';
        return 'home';
      })();
      const seo = dict.seo && dict.seo[pageKey];
      if (seo) {
        if (seo.title) document.title = seo.title;
        if (seo.description) {
          let md = document.querySelector('meta[name="description"]');
          if (!md) {
            md = document.createElement('meta');
            md.setAttribute('name', 'description');
            document.head.appendChild(md);
          }
          md.setAttribute('content', seo.description);
          // keywords
          if (seo.keywords) {
            let mk = document.querySelector('meta[name="keywords"]');
            if (!mk) {
              mk = document.createElement('meta');
              mk.setAttribute('name', 'keywords');
              document.head.appendChild(mk);
            }
            mk.setAttribute('content', seo.keywords);
          }
          
          // Optional: update Open Graph and Twitter cards if present
          const ogt = document.querySelector('meta[property="og:title"]');
          if (ogt) ogt.setAttribute('content', seo.title || '');
          const ogd = document.querySelector('meta[property="og:description"]');
          if (ogd) ogd.setAttribute('content', seo.description || '');
          const twt = document.querySelector('meta[name="twitter:title"]');
          if (twt) twt.setAttribute('content', seo.title || '');
          const twd = document.querySelector('meta[name="twitter:description"]');
          if (twd) twd.setAttribute('content', seo.description || '');
        }
      }
    } catch (e) { console.error('i18n: failed to set SEO meta', e); }
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

  // Expose helper for other scripts to apply i18n to dynamically injected content
  // Usage: window.applyI18n() will re-run translations using the saved language
  window.applyI18n = function(){
    try{
      const lang = getSaved();
      translatePage(lang);
    } catch(e){ console.error('i18n: applyI18n failed', e); }
  };

})();