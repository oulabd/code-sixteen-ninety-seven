// --- Translation Dictionary ---
const i18n = {
  en: {
    companyName: "code sixteen ninty seven",
    nav: { home: "Home", about: "About", projects: "Projects", founder: "Founder", contact: "Contact" },
    header: { requestService: "Request a Service" },
    hero: {
      tagline: "Building digital solutions that matter.",
      scroll: "Scroll Down"
    },
    about: {
      title: "About Us",
      desc: "We were founded two years ago. We have completed several real projects for clients in various fields. Among the most prominent are: a platform that handles Canadian immigration applications for a company specializing in immigration services, as well as health and education platforms, and others."
    },
    projects: {
      title: "Projects",
      filters: { all: "All", healthcare: "Healthcare", education: "Education" },
      details: {
        diabetes: {
          title: "My Diabetes Friend / Diyabetliyim",
          desc: "A diabetes tracking platform for patients and doctors. Features daily readings, feedback, and multilingual support (Arabic, Turkish).",
          tags: ["Web App", "Healthcare", "Multilingual"]
        },
        hospital: {
          title: "Healthcare Appointment & Hospital Management System",
          desc: "Multi-language (English & Arabic) system for appointment booking, hospital administration, and patient records.",
          tags: ["Web App", "Healthcare", "Admin"]
        },
        school: {
          title: "School Management Website",
          desc: "A modern school landing page and student/parent information system. Designed for easy access and management.",
          tags: ["Web App", "Education"]
        }
      },
      viewDetails: "View Details"
    },
      leadership: {
        title: "Leadership Team",
        oula: {
          name: "Oula Abd Almoty",
          title: "Head of Software Development",
          bio: "Software Engineering Manager and Full-Stack Web Developer with over 5 years of experience in building scalable, multilingual, and healthcare-focused digital platforms. Leads the software development department and oversees system architecture, code quality, and technical strategy."
        },
        mohammad: {
          name: "Mohammad Rajab Bjeerami",
          title: "Head of General Administration & Project Management",
          bio: "University graduate with more than 8 years of experience in general administration and project management. Specialized in operational planning, organizational coordination, and managing large-scale projects with a strong focus on efficiency, governance, and delivery."
        },
        alaa: {
          name: "Alaa Sharifa",
          title: "Head of Public Relations & Sales",
          bio: "Telecommunications Engineering graduate with over 8 years of experience in public relations and sales management. Expert in client communication, strategic partnerships, brand representation, and managing customer relationships across technical and business environments."
        }
      },
    locations: {
      title: "Locations",
      zonguldak: "Zonguldak – Kozlu Branch",
      istanbul: "Istanbul – Avcılar Branch"
    },
    contact: {
      title: "Contact",
      form: {
        name: "Full Name",
        service: "Service Name",
        note: "Note (optional)",
        email: "Email",
        message: "Message",
        send: "Send"
      },
      success: "Thank you! Your message has been sent."
    },
        service: {
          form: {
            name: "Full Name",
            service: "Service you want",
            note: "Note (optional)",
            email: "Email",
            message: "Describe your website"
          },
          // ...existing keys...
        },
    service: {
      step1: "Choose project type:",
      select: "Select type...",
      types: {
        website: "Website",
        webapp: "Web Application",
        mobile: "Mobile App",
        uiux: "UI/UX Design",
        custom: "Custom System"
      },
      step2: "Describe the project you need:",
      step3: "Contact number:",
      prev: "Back",
      next: "Next",
      submit: "Submit",
      success: "Request submitted! We will contact you soon."
    }
  },
  ar: {
    companyName: "code sixteen ninty seven",
    nav: { home: "الرئيسية", about: "من نحن", projects: "المشاريع", founder: "المؤسس", contact: "تواصل" },
    header: { requestService: "طلب خدمة" },
    hero: {
      tagline: "نبني حلولاً رقمية تحدث فرقاً.",
      scroll: "مرر للأسفل"
    },
    about: {
      title: "من نحن",
      desc: "تأسسنا منذ عامين. أنجزنا عدة مشاريع حقيقية لعملاء في مجالات متنوعة. من أبرزها: منصة معالجة طلبات الهجرة الكندية لشركة متخصصة في خدمات الهجرة، بالإضافة إلى منصات الصحة والتعليم وغيرها."
    },
    projects: {
      title: "المشاريع",
      filters: { all: "الكل", healthcare: "الصحة", education: "التعليم" },
      details: {
        diabetes: {
          title: "صديقي السكري / Diyabetliyim",
          desc: "منصة متابعة السكري للمرضى والأطباء. تتضمن قراءات يومية، ملاحظات، ودعم لغات متعددة (العربية، التركية).",
          tags: ["تطبيق ويب", "الصحة", "متعدد اللغات"]
        },
        hospital: {
          title: "نظام المواعيد وإدارة المستشفيات",
          desc: "نظام متعدد اللغات (إنجليزي وعربي) لحجز المواعيد، إدارة المستشفى، وسجلات المرضى.",
          tags: ["تطبيق ويب", "الصحة", "إدارة"]
        },
        school: {
          title: "موقع إدارة المدارس",
          desc: "موقع حديث للمدرسة ونظام معلومات للطلاب/الأهالي. مصمم للوصول والإدارة بسهولة.",
          tags: ["تطبيق ويب", "التعليم"]
        }
      },
      viewDetails: "عرض التفاصيل"
    },
      leadership: {
        title: "فريق القيادة",
        oula: {
          name: "علا عبد المعطي",
          title: "رئيس قسم تطوير البرمجيات",
          bio: "مدير هندسة البرمجيات ومطور ويب متكامل بخبرة تزيد عن 5 سنوات في بناء منصات رقمية قابلة للتوسع ومتعددة اللغات وتركز على الصحة. يقود قسم تطوير البرمجيات ويشرف على هندسة الأنظمة وجودة الكود والاستراتيجية التقنية."
        },
        mohammad: {
          name: "محمد رجب بجيرامي",
          title: "رئيس الإدارة العامة وإدارة المشاريع",
          bio: "خريج جامعي بخبرة تزيد عن 8 سنوات في الإدارة العامة وإدارة المشاريع. متخصص في التخطيط التشغيلي والتنسيق التنظيمي وإدارة المشاريع الكبيرة مع تركيز قوي على الكفاءة والحوكمة والتنفيذ."
        },
        alaa: {
          name: "علاء شريفة",
          title: "رئيس العلاقات العامة والمبيعات",
          bio: "خريج هندسة اتصالات بخبرة تزيد عن 8 سنوات في العلاقات العامة وإدارة المبيعات. خبير في التواصل مع العملاء والشراكات الاستراتيجية وتمثيل العلامة التجارية وإدارة علاقات العملاء في البيئات التقنية والتجارية."
        }
      },
    locations: {
      title: "الفروع",
      zonguldak: "فرع زونغولداك – كوزلو",
      istanbul: "فرع اسطنبول – أفجلار"
    },
    contact: {
      title: "تواصل",
      form: {
        name: "الاسم الكامل",
        service: "اسم الخدمة",
        note: "ملاحظة (اختياري)",
        email: "البريد الإلكتروني",
        message: "رسالتك",
        send: "إرسال"
      },
      success: "شكراً لك! تم إرسال رسالتك."
    },
        service: {
          form: {
            name: "الاسم الكامل",
            service: "الخدمة المطلوبة",
            note: "ملاحظة (اختياري)",
            email: "البريد الإلكتروني",
            message: "وصف الموقع المطلوب"
          },
          // ...existing keys...
        },
    service: {
      step1: "اختر نوع المشروع:",
      select: "اختر النوع...",
      types: {
        website: "موقع إلكتروني",
        webapp: "تطبيق ويب",
        mobile: "تطبيق موبايل",
        uiux: "تصميم واجهات",
        custom: "نظام مخصص"
      },
      step2: "صف المشروع المطلوب:",
      step3: "رقم التواصل:",
      prev: "السابق",
      next: "التالي",
      submit: "إرسال",
      success: "تم إرسال الطلب! سنتواصل معك قريباً."
    }
  },
  tr: {
    companyName: "code sixteen ninty seven",
    nav: { home: "Anasayfa", about: "Hakkımızda", projects: "Projeler", founder: "Kurucu", contact: "İletişim" },
    header: { requestService: "Hizmet Talebi" },
    hero: {
      tagline: "Fark yaratan dijital çözümler üretiyoruz.",
      scroll: "Aşağı Kaydır"
    },
    about: {
      title: "Hakkımızda",
      desc: "İki yıl önce kuruldu. Farklı alanlarda birçok gerçek projeyi tamamladık. En önemlilerinden bazıları: Göçmenlik hizmetleri konusunda uzman bir şirket için Kanada göçmenlik başvuru platformu, sağlık ve eğitim platformları ve diğerleri."
    },
    projects: {
      title: "Projeler",
      filters: { all: "Tümü", healthcare: "Sağlık", education: "Eğitim" },
      details: {
        diabetes: {
          title: "My Diabetes Friend / Diyabetliyim",
          desc: "Hastalar ve doktorlar için diyabet takip platformu. Günlük ölçümler, geri bildirim ve çoklu dil desteği (Arapça, Türkçe).",
          tags: ["Web Uygulaması", "Sağlık", "Çok Dilli"]
        },
        hospital: {
          title: "Sağlık Randevu & Hastane Yönetim Sistemi",
          desc: "Çok dilli (İngilizce & Arapça) randevu, hastane yönetimi ve hasta kayıt sistemi.",
          tags: ["Web Uygulaması", "Sağlık", "Yönetim"]
        },
        school: {
          title: "Okul Yönetim Web Sitesi",
          desc: "Modern okul tanıtım ve öğrenci/veli bilgi sistemi. Kolay erişim ve yönetim için tasarlandı.",
          tags: ["Web Uygulaması", "Eğitim"]
        }
      },
      viewDetails: "Detayları Gör"
    },
      leadership: {
        title: "Liderlik Ekibi",
        oula: {
          name: "Oula Abd Almoty",
          title: "Yazılım Geliştirme Müdürü",
          bio: "Yazılım mühendisliği yöneticisi ve tam kapsamlı web geliştirici. 5+ yıl boyunca ölçeklenebilir, çok dilli ve sağlık odaklı dijital platformlar geliştirdi. Yazılım geliştirme departmanını yönetir, sistem mimarisi, kod kalitesi ve teknik stratejiden sorumludur."
        },
        mohammad: {
          name: "Mohammad Rajab Bjeerami",
          title: "Genel İdare ve Proje Yönetimi Müdürü",
          bio: "Üniversite mezunu, 8+ yıl genel idare ve proje yönetimi deneyimi. Operasyonel planlama, organizasyonel koordinasyon ve büyük ölçekli projelerin yönetiminde uzman. Verimlilik, yönetişim ve teslimata odaklanır."
        },
        alaa: {
          name: "Alaa Sharifa",
          title: "Halkla İlişkiler ve Satış Müdürü",
          bio: "Telekomünikasyon mühendisliği mezunu, 8+ yıl halkla ilişkiler ve satış yönetimi deneyimi. Müşteri iletişimi, stratejik ortaklıklar, marka temsili ve teknik/iş ortamlarında müşteri ilişkileri yönetiminde uzmandır."
        }
      },
    locations: {
      title: "Şubeler",
      zonguldak: "Zonguldak – Kozlu Şubesi",
      istanbul: "İstanbul – Avcılar Şubesi"
    },
    contact: {
      title: "İletişim",
      form: {
        name: "Ad Soyad",
        service: "Hizmet Adı",
        note: "Not (isteğe bağlı)",
        email: "E-posta",
        message: "Mesajınız",
        send: "Gönder"
      },
      success: "Teşekkürler! Mesajınız gönderildi."
    },
        service: {
          form: {
            name: "Ad Soyad",
            service: "İstediğiniz hizmet",
            note: "Not (isteğe bağlı)",
            email: "E-posta",
            message: "İstediğiniz web sitesini açıklayın"
          },
          // ...existing keys...
        },
    service: {
      step1: "Proje türünü seçin:",
      select: "Tür seçin...",
      types: {
        website: "Web Sitesi",
        webapp: "Web Uygulaması",
        mobile: "Mobil Uygulama",
        uiux: "UI/UX Tasarımı",
        custom: "Özel Sistem"
      },
      step2: "İhtiyacınız olan projeyi açıklayın:",
      step3: "İletişim numarası:",
      prev: "Geri",
      next: "İleri",
      submit: "Gönder",
      success: "Talebiniz alındı! Yakında sizinle iletişime geçeceğiz."
    }
  }
};

// --- Language State ---
let currentLang = "en";

// --- Helper: Update all i18n texts ---
function updateTexts() {
  const dict = i18n[currentLang];
  // Text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    let val = dict;
    for (const k of keys) val = val && val[k];
    if (val) el.textContent = val;
  });
  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const keys = el.getAttribute("data-i18n-placeholder").split(".");
    let val = dict;
    for (const k of keys) val = val && val[k];
    if (val) el.placeholder = val;
  });
  // Project cards (re-render for language)
  renderProjects();
  // Footer
  document.getElementById("footerText").textContent =
    `© ${new Date().getFullYear()} ${dict.companyName}. ${currentLang === "ar" ? "جميع الحقوق محفوظة." : currentLang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}`;
  // Direction
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
}

// --- Language Switcher ---
document.getElementById("lang-switcher").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    currentLang = e.target.getAttribute("data-lang");
    document.querySelectorAll(".lang-switcher button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    updateTexts();
  }
});

// --- Hamburger Menu (Mobile) ---
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// --- Sticky Header Glass Effect ---
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 30) header.classList.add("glass");
  else header.classList.remove("glass");
});

// --- Smooth Scroll for Nav Links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- Section Reveal on Scroll ---
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// --- Hero: Scroll Down Button ---
document.getElementById("scrollDown").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// --- Hero: Animated Particles (lightweight) ---
const canvas = document.getElementById("particles");
function resizeParticles() {
  canvas.width = window.innerWidth;
  canvas.height = document.getElementById("hero").offsetHeight;
}
window.addEventListener("resize", resizeParticles);
let particles = [];
function createParticles() {
  particles = [];
  for (let i = 0; i < 32; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      alpha: 0.15 + Math.random() * 0.15
    });
  }
}
function drawParticles() {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(247,185,201,${p.alpha})`;
    ctx.shadowColor = "#f7b9c9";
    ctx.shadowBlur = 8;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(drawParticles);
}
resizeParticles();
createParticles();
drawParticles();
window.addEventListener("resize", () => {
  resizeParticles();
  createParticles();
});

// --- Projects Data ---
const projectsData = [
  {
    key: "diabetes",
    filter: "healthcare",
    img: '<img src="media/diyabetliyim.png" alt="Diabetes Project" style="width:100%;height:100%;object-fit:contain;max-height:120px;">',
  },
  {
    key: "hospital",
    filter: "healthcare",
    img: '<img src="media/hospital.png" alt="Health Program" style="width:100%;height:100%;object-fit:contain;max-height:120px;">',
  },
  {
    key: "school",
    filter: "education",
    img: '<img src="media/school.png" alt="Educational Program" style="width:100%;height:100%;object-fit:contain;max-height:120px;">',
  }
];

// --- Render Projects Grid ---
function renderProjects(filter = "all") {
  const dict = i18n[currentLang].projects.details;
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  projectsData.forEach(proj => {
    if (filter !== "all" && proj.filter !== filter) return;
    const p = dict[proj.key];
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-img">${proj.img}</div>
      <div class="project-content">
        <div>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-tags">
            ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="project-actions">
          <button class="project-details-btn" data-key="${proj.key}">${i18n[currentLang].projects.viewDetails}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  // Details modal
  document.querySelectorAll(".project-details-btn").forEach(btn => {
    btn.onclick = function() {
      showProjectModal(this.getAttribute("data-key"));
    };
  });
}
renderProjects();

// --- Project Filter Buttons ---
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    renderProjects(this.getAttribute("data-filter"));
  });
});

// --- Project Modal ---
function showProjectModal(key) {
  const dict = i18n[currentLang].projects.details[key];
  const modal = document.getElementById("projectModal");
  document.getElementById("modalProjectContent").innerHTML = `
    <h3 style="margin-top:0">${dict.title}</h3>
    <p>${dict.desc}</p>
    <div class="project-tags" style="margin-bottom:1.2rem;">
      ${dict.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
    </div>
    <button class="btn-glow" onclick="document.getElementById('projectModal').classList.remove('active')">${currentLang === "ar" ? "إغلاق" : currentLang === "tr" ? "Kapat" : "Close"}</button>
  `;
  modal.classList.add("active");
}
document.getElementById("closeProjectModal").onclick = () => {
  document.getElementById("projectModal").classList.remove("active");
};
window.onclick = function(e) {
  if (e.target.classList.contains("modal")) e.target.classList.remove("active");
};

// --- Contact Form: Send admin + auto-reply emails via EmailJS ---
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    service: document.getElementById("contactService").value,
    note: document.getElementById("contactNote").value,
    message: document.getElementById("contactMessage").value
  };

  // 1️⃣ Send to admin (update template ID to 4u91ms2)
  emailjs.send(
    "service_r5fj15v",
    "template_4u91ms2",
    params
  ).then(() => {
    // 2️⃣ Auto-reply to customer (keep using auto-reply template)
    return emailjs.send(
      "service_r5fj15v",
      "template_n3ogb2t",
      params
    );
  }).then(() => {
    showToast("contactToast", i18n[currentLang].contact.success);
    contactForm.reset();
  }).catch(error => {
    console.error("EmailJS Error:", error);
    showToast("contactToast", "Something went wrong. Please try again.");
  });
});

// --- Toast Message ---
function showToast(id, msg) {
  const toast = document.getElementById(id);
  toast.textContent = msg;
  toast.classList.add("active");
  setTimeout(() => toast.classList.remove("active"), 3200);
}

// --- Request Service Modal Wizard ---
const serviceModal = document.getElementById("serviceModal");
const serviceBtn = document.getElementById("requestServiceBtn");
const closeServiceModal = document.getElementById("closeServiceModal");
const serviceForm = document.getElementById("serviceForm");
const steps = Array.from(serviceForm.querySelectorAll(".modal-step"));
let currentStep = 0;
function showStep(idx) {
  steps.forEach((step, i) => step.style.display = i === idx ? "" : "none");
  document.getElementById("prevStep").style.display = idx === 0 ? "none" : "";
  document.getElementById("nextStep").style.display = idx < steps.length - 1 ? "" : "none";
  document.getElementById("submitService").style.display = idx === steps.length - 1 ? "" : "none";
}
serviceBtn.onclick = () => {
  serviceModal.classList.add("active");
  currentStep = 0;
  showStep(currentStep);
  serviceForm.reset();
  serviceForm.querySelectorAll(".form-error").forEach(el => el.textContent = "");
};
closeServiceModal.onclick = () => serviceModal.classList.remove("active");
document.getElementById("prevStep").onclick = () => {
  if (currentStep > 0) showStep(--currentStep);
};
document.getElementById("nextStep").onclick = () => {
  // Validate current step
  const step = steps[currentStep];
  step.querySelectorAll(".form-error").forEach(el => el.textContent = "");
  let valid = true;
  if (currentStep === 0) {
    const val = document.getElementById("serviceName").value.trim();
    if (!val) {
      valid = false;
      step.querySelector(".form-error").textContent = "*";
    }
  }
  if (currentStep === 1) {
    const val = document.getElementById("serviceTypeText").value.trim();
    if (!val) {
      valid = false;
      step.querySelector(".form-error").textContent = "*";
    }
  }
  if (currentStep === 2) {
    // Note is optional, skip validation
  }
  if (currentStep === 3) {
    const val = document.getElementById("serviceEmail").value.trim();
    if (!val || !/^\S+@\S+\.\S+$/.test(val)) {
      valid = false;
      step.querySelector(".form-error").textContent = "*";
    }
  }
  if (currentStep === 4) {
    const val = document.getElementById("serviceMessage").value.trim();
    if (!val) {
      valid = false;
      step.querySelector(".form-error").textContent = "*";
    }
  }
  if (valid) {
    if (currentStep === 5) {
      // Show summary
      const name = document.getElementById("serviceName").value.trim();
      const service = document.getElementById("serviceTypeText").value.trim();
      const note = document.getElementById("serviceNote").value.trim();
      const email = document.getElementById("serviceEmail").value.trim();
      const message = document.getElementById("serviceMessage").value.trim();
      document.getElementById("serviceSummary").innerHTML = `
        <b>${name}</b><br>
        <span>${service}</span><br>
        <span>${note}</span><br>
        <span>${email}</span><br>
        <span>${message}</span>
      `;
    }
    if (currentStep < steps.length - 1) showStep(++currentStep);
  }
};
serviceForm.onsubmit = function(e) {
  e.preventDefault();
  const params = {
    name: document.getElementById("serviceName").value,
    service: document.getElementById("serviceTypeText").value,
    note: document.getElementById("serviceNote").value,
    email: document.getElementById("serviceEmail").value,
    message: document.getElementById("serviceMessage").value
  };
  // 1️⃣ Send to admin
  emailjs.send(
    "service_r5fj15v",
    "template_145yz56",
    params
  ).then(() => {
    // 2️⃣ Auto-reply to customer
    return emailjs.send(
      "service_r5fj15v",
      "template_n3ogb2t",
      params
    );
  }).then(() => {
    showToast("serviceToast", i18n[currentLang].service.success);
    serviceForm.reset();
    setTimeout(() => serviceModal.classList.remove("active"), 1800);
  }).catch(error => {
    console.error("EmailJS Error:", error);
    showToast("serviceToast", "Something went wrong. Please try again.");
  });
};

// --- Also open service modal from hero (optional) ---
document.querySelectorAll('[data-i18n="header.requestService"]').forEach(btn => {
  btn.addEventListener('click', () => {
    serviceModal.classList.add("active");
    currentStep = 0;
    showStep(currentStep);
    serviceForm.reset();
    serviceForm.querySelectorAll(".form-error").forEach(el => el.textContent = "");
  });
});

// --- Multi-language: update texts only (no select options) ---
function updateAll() {
  updateTexts();
}
updateAll();

// --- On language change, update texts only ---
document.getElementById("lang-switcher").addEventListener("click", updateAll);

// --- On load, set footer year and initial texts ---
document.addEventListener("DOMContentLoaded", updateAll);