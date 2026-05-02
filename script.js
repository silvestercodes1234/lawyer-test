/* ================================================
   Avocat Ion Proca — advocatus.md
   script.js
================================================ */

'use strict';

// ================================================
// TRANSLATIONS
// ================================================
const T = {
  ro: {
    'announcement': '<strong>Recrutare:</strong> Cabinetul angajează avocat stagiar sau jurist — <a href="mailto:procaionmail@yahoo.com">procaionmail@yahoo.com</a>',
    'hero.name': 'Avocat Ion Proca',
    'hero.sub': 'Consultație gratuită · 11 ani experiență · Mediator CEDR',
    'hero.cta.primary': 'Consultație Gratuită',
    'nav.servicii': 'Servicii', 'nav.despre': 'Despre', 'nav.contact': 'Contact',
    'servicii.label': 'Domenii de Practică',
    'servicii.title': 'Servicii Juridice Complete',
    'servicii.sub': 'Consultanță, reprezentare și asistență personală într-o gamă largă de domenii juridice, la nivel național și internațional.',
    'card.civil.title': 'Dreptul Civil', 'card.civil.desc': 'Litigii civile, contracte, proprietate imobiliară, succesiuni și protecția drepturilor civile.',
    'card.family.title': 'Dreptul Familiei', 'card.family.desc': 'Divorț, partaj, custodie copii, adopție, pensie alimentară. Abordare empatică și eficientă.',
    'card.penal.title': 'Dreptul Penal', 'card.penal.desc': 'Apărare în dosare penale la toate instanțele. Reprezentare completă, discreție garantată.',
    'card.munca.title': 'Dreptul Muncii', 'card.munca.desc': 'Litigii de muncă, concedieri ilegale, recuperare salarii, contracte colective.',
    'card.admin.title': 'Litigii Administrative', 'card.admin.desc': 'Contestarea actelor administrative, contencios administrativ, litigii cu autoritățile statului.',
    'card.contra.title': 'Litigii Contravenționale', 'card.contra.desc': 'Contestarea proceselor-verbale și sancțiunilor contravenționale la toate etapele procedurale.',
    'card.insolv.title': 'Insolvabilitate', 'card.insolv.desc': 'Proceduri de insolvabilitate, restructurare, lichidare, reprezentarea creditorilor și debitorilor.',
    'card.cet.title': 'Cetățenie Română', 'card.cet.desc': 'Redobândirea cetățeniei române, asistență completă în procedura de repatriere juridică.', 'card.cet.tag': 'Solicitat',
    'card.cedo.title': 'CEDO', 'card.cedo.desc': 'Reprezentare la Curtea Europeană a Drepturilor Omului. Cauze internaționale complexe.', 'card.cedo.tag': 'Internațional',
    'motto.label': 'Adagiu Latin', 'motto.translation': '„Fie dreptate, chiar de piere lumea."',
    'despre.label': 'Despre Avocat', 'despre.title': 'Ion Proca',
    'despre.para1': 'Avocatul Ion Proca este membru al Baroului de avocați de pe lângă Curtea de Apel Chișinău, cu o experiență de <strong>11 ani</strong> în practica juridică. Sediul biroului avocațial se află în mun. Chișinău, str. Ismail 98/4 (Clădirea Lunedor, etaj 2), iar serviciile avocațiale se prestează la nivel național și internațional.',
    'despre.para2': 'Ion Proca este acreditat în calitate de <strong>Mediator CEDR</strong> (Centre for Effective Dispute Resolution — Anglia), una dintre cele mai prestigioase acreditări internaționale în domeniul medierii.',
    'despre.cred1.strong': 'Barou de avocați — Curtea de Apel Chișinău', 'despre.cred1.span': 'Membru activ, practică autorizată la nivel național',
    'despre.cred2.strong': 'Mediator CEDR — Centre for Effective Dispute Resolution', 'despre.cred2.span': 'Acreditare internațională, Anglia',
    'despre.cred3.strong': 'Reprezentare CEDO', 'despre.cred3.span': 'Curtea Europeană a Drepturilor Omului, Strasbourg',
    'despre.cred4.strong': 'Servicii naționale & internaționale', 'despre.cred4.span': 'Practică în Republica Moldova și în afara hotarelor',
    'despre.cta': 'Programează o Consultație',
    'contact.label': 'Contact', 'contact.title': 'Adresează o Întrebare',
    'contact.sub': 'Consultația inițială este <strong>gratuită</strong>. Puteți programa o întrevedere telefonic sau completând formularul de mai jos.',
    'contact.phone.label': 'Telefonare gratuită · L–V 9:00–18:00',
    'contact.email.label': 'Răspuns în 24 ore lucrătoare',
    'contact.address': 'Clădirea Lunedor, etaj 2, Chișinău',
    'form.name.label': 'Nume', 'form.name.placeholder': 'Prenume și Nume', 'form.phone.label': 'Telefon',
    'form.message.label': 'Situația dvs.', 'form.message.placeholder': 'Descrieți pe scurt în ce domeniu aveți nevoie de asistență juridică...',
    'form.submit': 'Trimite Mesajul',
    'form.note': 'Completând formularul, confirmați că ați citit informațiile cu privire la prelucrarea datelor cu caracter personal.',
    'form.success': 'Mesajul dvs. a fost trimis. Vă vom contacta în cel mai scurt timp.',
    'footer.servicii': 'Servicii', 'footer.contact': 'Contact', 'footer.role': 'Avocat · Mediator CEDR',
    'footer.civil': 'Dreptul Civil', 'footer.family': 'Dreptul Familiei', 'footer.penal': 'Dreptul Penal',
    'footer.munca': 'Dreptul Muncii', 'footer.cetatenie': 'Cetățenie Română', 'footer.cedo': 'CEDO',
  },
  ru: {
    'announcement': '<strong>Набор персонала:</strong> Кабинет принимает на работу юриста или стажёра-адвоката — <a href="mailto:procaionmail@yahoo.com">procaionmail@yahoo.com</a>',
    'hero.name': 'Адвокат Ион Прока',
    'hero.sub': 'Бесплатная консультация · 11 лет опыта · Медиатор CEDR',
    'hero.cta.primary': 'Бесплатная Консультация',
    'nav.servicii': 'Услуги', 'nav.despre': 'Об адвокате', 'nav.contact': 'Контакты',
    'servicii.label': 'Области практики',
    'servicii.title': 'Полный спектр юридических услуг',
    'servicii.sub': 'Консультации, представительство и личная помощь в широком спектре правовых областей, на национальном и международном уровне.',
    'card.civil.title': 'Гражданское право', 'card.civil.desc': 'Гражданские споры, договоры, недвижимость, наследство и защита гражданских прав.',
    'card.family.title': 'Семейное право', 'card.family.desc': 'Развод, раздел имущества, опека детей, усыновление, алименты. Чуткий и эффективный подход.',
    'card.penal.title': 'Уголовное право', 'card.penal.desc': 'Защита по уголовным делам во всех инстанциях. Полное представительство, гарантированная конфиденциальность.',
    'card.munca.title': 'Трудовое право', 'card.munca.desc': 'Трудовые споры, незаконные увольнения, взыскание заработной платы, коллективные договоры.',
    'card.admin.title': 'Административные споры', 'card.admin.desc': 'Оспаривание административных актов, административное судопроизводство, споры с государственными органами.',
    'card.contra.title': 'Административные правонарушения', 'card.contra.desc': 'Обжалование протоколов и административных санкций на всех процессуальных этапах.',
    'card.insolv.title': 'Несостоятельность', 'card.insolv.desc': 'Процедуры несостоятельности, реструктуризация, ликвидация, представление кредиторов и должников.',
    'card.cet.title': 'Румынское гражданство', 'card.cet.desc': 'Восстановление румынского гражданства, полная помощь в процедуре репатриации.', 'card.cet.tag': 'Востребовано',
    'card.cedo.title': 'ЕСПЧ', 'card.cedo.desc': 'Представительство в Европейском суде по правам человека. Сложные международные дела.', 'card.cedo.tag': 'Международный',
    'motto.label': 'Латинская максима', 'motto.translation': '«Пусть восторжествует справедливость, хотя бы погиб мир.»',
    'despre.label': 'Об адвокате', 'despre.title': 'Ион Прока',
    'despre.para1': 'Адвокат Ион Прока является членом Адвокатуры при Апелляционном суде Кишинёва, с опытом работы <strong>11 лет</strong> в юридической практике. Офис находится в мун. Кишинёв, ул. Исмаил 98/4 (здание Lunedor, этаж 2). Услуги оказываются на национальном и международном уровне.',
    'despre.para2': 'Ион Прока аккредитован как <strong>Медиатор CEDR</strong> (Центр эффективного урегулирования споров — Англия), одна из наиболее престижных международных аккредитаций в области медиации.',
    'despre.cred1.strong': 'Адвокатура при Апелляционном суде Кишинёва', 'despre.cred1.span': 'Действующий член, практика авторизована на национальном уровне',
    'despre.cred2.strong': 'Медиатор CEDR — Центр эффективного урегулирования споров', 'despre.cred2.span': 'Международная аккредитация, Англия',
    'despre.cred3.strong': 'Представительство в ЕСПЧ', 'despre.cred3.span': 'Европейский суд по правам человека, Страсбург',
    'despre.cred4.strong': 'Национальные и международные услуги', 'despre.cred4.span': 'Практика в Республике Молдова и за рубежом',
    'despre.cta': 'Записаться на консультацию',
    'contact.label': 'Контакты', 'contact.title': 'Задайте Вопрос',
    'contact.sub': 'Первичная консультация <strong>бесплатна</strong>. Вы можете записаться по телефону или заполнив форму ниже.',
    'contact.phone.label': 'Бесплатно · Пн–Пт 9:00–18:00',
    'contact.email.label': 'Ответ в течение 24 рабочих часов',
    'contact.address': 'Здание Lunedor, этаж 2, Кишинёв',
    'form.name.label': 'Имя', 'form.name.placeholder': 'Имя и Фамилия', 'form.phone.label': 'Телефон',
    'form.message.label': 'Ваша ситуация', 'form.message.placeholder': 'Кратко опишите, в какой области вам нужна юридическая помощь...',
    'form.submit': 'Отправить Сообщение',
    'form.note': 'Заполняя форму, вы подтверждаете, что ознакомились с информацией об обработке персональных данных.',
    'form.success': 'Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
    'footer.servicii': 'Услуги', 'footer.contact': 'Контакты', 'footer.role': 'Адвокат · Медиатор CEDR',
    'footer.civil': 'Гражданское право', 'footer.family': 'Семейное право', 'footer.penal': 'Уголовное право',
    'footer.munca': 'Трудовое право', 'footer.cetatenie': 'Румынское гражданство', 'footer.cedo': 'ЕСПЧ',
  }
};

// ================================================
// LANGUAGE SWITCHER
// ================================================
(function () {
  let currentLang = localStorage.getItem('lang') || 'ro';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(currentLang);
}());

// ================================================
// ANNOUNCEMENT BAR
// ================================================
(function () {
  const bar   = document.getElementById('announcementBar');
  const close = document.getElementById('announcementClose');
  if (!bar || !close) return;

  close.addEventListener('click', () => {
    bar.style.display = 'none';
  });
}());

// ================================================
// HEADER — scroll shadow
// ================================================
(function () {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 48);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}());

// ================================================
// MOBILE NAV — hamburger toggle
// ================================================
(function () {
  const btn    = document.getElementById('burgerBtn');
  const nav    = document.getElementById('mainNav');
  const header = document.getElementById('header');
  if (!btn || !nav || !header) return;

  function closeNav() {
    nav.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openNav() {
    const headerBottom = header.getBoundingClientRect().bottom;
    nav.style.top    = headerBottom + 'px';
    nav.style.height = (window.innerHeight - headerBottom) + 'px';
    nav.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', () => {
    nav.classList.contains('is-open') ? closeNav() : openNav();
  });

  // Recalculate height on resize (e.g. keyboard appearing)
  window.addEventListener('resize', () => {
    if (nav.classList.contains('is-open')) {
      const headerBottom = header.getBoundingClientRect().bottom;
      nav.style.top    = headerBottom + 'px';
      nav.style.height = (window.innerHeight - headerBottom) + 'px';
    }
  }, { passive: true });

  // Close when any nav link is clicked
  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });
}());

// ================================================
// SCROLL REVEAL — Intersection Observer
// ================================================
(function () {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger cards within a grid
      const parent = entry.target.parentElement;
      const isGrid = parent && parent.classList.contains('servicii__grid');

      if (isGrid) {
        const siblings = Array.from(parent.children).filter(el => el.classList.contains('reveal'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 75) + 'ms';
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
}());

// ================================================
// SMOOTH SCROLL — anchor links (offset for header)
// ================================================
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const headerEl = document.getElementById('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 72;

      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}());

// ================================================
// CONTACT FORM — client-side validation + submit
// ================================================
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  // Remove error state when user types
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('is-error'));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Validate required fields
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('is-error');
        if (isValid) field.focus(); // focus first invalid
        isValid = false;
      }
    });
    if (!isValid) return;

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Se trimite…';

    /*
     * Replace the setTimeout below with a real fetch() to your
     * backend endpoint or email service (e.g. Formspree, EmailJS).
     *
     * Example with Formspree:
     *   fetch('https://formspree.io/f/YOUR_ID', {
     *     method: 'POST',
     *     headers: { 'Accept': 'application/json' },
     *     body: new FormData(form),
     *   })
     *   .then(() => showSuccess())
     *   .catch(() => { submitBtn.disabled = false; submitBtn.textContent = originalText; });
     */
    setTimeout(showSuccess, 1400);

    function showSuccess() {
      success.hidden = false;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}());
