import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        schedule: 'Programme',
        membership: 'Adhésion',
        join: 'Rejoindre'
      },
      hero: {
        badge: 'Prochaine course : Mardi 18:00',
        title: 'Courez au cœur de ',
        titleAccent: 'Mosta.',
        desc: 'Rejoignez la communauté de coureurs la plus dynamique de Mostaganem. Que vous cherchiez un record personnel ou que vous débutiez, nous courons ensemble.',
        ctaStart: 'Commencer',
        ctaSchedule: 'Voir le programme',
        visit: "Découvrir l'Expérience"
      },
      stats: {
        members: 'Membres Actifs',
        runs: 'Courses Hebdomadaires',
        distance: 'Distance Totale',
        coffee: 'Pauses Café'
      },
      schedule: {
        title: 'Courses à venir',
        desc: 'Peu importe votre allure, il y a une place pour vous. Rejoignez-nous pour nos sessions hebdomadaires à travers Mosta.',
        fullCalendar: 'Calendrier complet',
        difficulty: {
          beginner: 'Débutant',
          intermediate: 'Intermédiaire',
          advanced: 'Avancé'
        },
        runs: {
          interval: {
            title: 'Entraînement par Intervalles',
            location: 'Complexe Raid Farradj',
            date: 'Mardi'
          },
          long: {
            title: 'Session de Course Longue',
            location: 'Salamandre',
            date: 'Vendredi'
          },
          strength: {
            title: 'Force et Conditionnement',
            location: 'Complexe Raid Farradj',
            date: 'Dimanche'
          }
        }
      },
      membership: {
        title: 'Prêt à fouler le pavé ?',
        desc: 'Rejoignez plus de 250 coureurs aujourd\'hui. L\'adhésion est gratuite, l\'ambiance est inestimable. Accédez à notre groupe WhatsApp et à des événements exclusifs.',
        placeholder: 'Entrez votre email',
        cta: 'Rejoindre le Club'
      },
      footer: {
        desc: 'Construire une ville de Mosta plus saine et plus connectée grâce à la course à pied. Chaque pas, chaque visage, chaque mardi.',
        links: 'Liens Rapides',
        contact: 'Contact',
        rights: '© 2026 Mosta Run Club. Tous droits réservés.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: 'حول النادي',
        schedule: 'البرنامج',
        membership: 'العضوية',
        join: 'انضم إلينا'
      },
      hero: {
        badge: 'الجري القادم: الثلاثاء 18:00',
        title: 'اجرِ في قلب ',
        titleAccent: 'مستغانم.',
        desc: 'انضم إلى أكثر مجتمع عداءين حيوية في مستغانم. سواء كنت تبحث عن رقم قياسي جديد أو كنت مبتدئاً، نحن نجري معاً.',
        ctaStart: 'ابدأ الآن',
        ctaSchedule: 'عرض البرنامج',
        visit: 'اكتشف التجربة'
      },
      schedule: {
        title: 'الحصص القادمة',
        desc: 'مهما كانت سرعتك، هناك مكان لك. انضم إلينا في حصصنا الأسبوعية عبر مستغانم.',
        fullCalendar: 'التقويم الكامل',
        difficulty: {
          beginner: 'مبتدئ',
          intermediate: 'متوسط',
          advanced: 'متقدم'
        },
        runs: {
          interval: {
            title: 'تدريب فترات',
            location: 'مركب رائد فراج',
            date: 'الثلاثاء'
          },
          long: {
            title: 'حصة جري طويل',
            location: 'سلاماندر',
            date: 'الجمعة'
          },
          strength: {
            title: 'القوة والتحمل',
            location: 'مركب رائد فراج',
            date: 'الأحد'
          }
        }
      },
      membership: {
        title: 'هل أنت مستعد للجري؟',
        desc: 'انضم إلى أكثر من 250 عداء اليوم. العضوية مجانية، والأجواء لا تقدر بثمن. احصل على وصول إلى مجموعة WhatsApp وفعاليات حصرية.',
        placeholder: 'أدخل بريدك الإلكتروني',
        cta: 'انضم إلى النادي'
      },
      footer: {
        desc: 'بناء مستغانم أكثر صحة وترابطاً من خلال قوة الجري. كل خطوة، كل وجه، كل ثلاثاء.',
        links: 'روابط سريعة',
        contact: 'اتصال',
        rights: '© 2026 نادي مستغانم للجري. جميع الحقوق محفوظة.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        schedule: 'Schedule',
        membership: 'Membership',
        join: 'Join Now'
      },
      hero: {
        badge: 'Next Run: Tuesday 18:00',
        title: 'Run the Heart of ',
        titleAccent: 'Mosta.',
        desc: 'Join the most vibrant community of runners in Mosta. Whether you\'re chasing a PB or just starting out, we run together.',
        ctaStart: 'Get Started',
        ctaSchedule: 'View Schedule',
        visit: 'Discover the Experience'
      },
      schedule: {
        title: 'Upcoming Runs',
        desc: 'No matter your pace, there\'s a place for you. Join us for our weekly sessions across Mosta.',
        fullCalendar: 'Full Calendar',
        difficulty: {
          beginner: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Advanced'
        },
        runs: {
          interval: {
            title: 'Interval Training',
            location: 'Complexe Raid Farradj',
            date: 'Tuesday'
          },
          long: {
            title: 'Long Run Session',
            location: 'Salamandre',
            date: 'Friday'
          },
          strength: {
            title: 'Strength & Conditioning',
            location: 'Complexe Raid Farradj',
            date: 'Sunday'
          }
        }
      },
      membership: {
        title: 'Ready to hit the pavement?',
        desc: 'Join 250+ runners today. Membership is free, the vibes are priceless. Get access to our WhatsApp group and exclusive events.',
        placeholder: 'Enter your email',
        cta: 'Join the Club'
      },
      footer: {
        desc: 'Building a healthier, more connected Mosta through the power of running. Every pace, every face, every Tuesday.',
        links: 'Quick Links',
        contact: 'Contact',
        rights: '© 2026 Mosta Run Club. All rights reserved.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
