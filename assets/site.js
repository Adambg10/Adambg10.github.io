"use strict";

/* ---------- French text (English is what's written in the page) ---------- */
const FR = {
  "skip": "Aller à mes projets",
  "nav.work": "Projets",
  "nav.about": "Parcours",
  "nav.contact": "Me contacter",
  "hero.pill": "Disponible pour un PFE dès janvier 2027",
  "hero.title": "Je développe des applications mobiles et les back‑ends qui les font tourner.",
  "hero.sub": "Étudiant ingénieur en génie logiciel à l'EPI Sousse, je cherche un stage de fin d'études (PFE) en développement back-end ou mobile, d'une durée allant jusqu'à 6 mois.",
  "hero.work": "Voir mes projets",
  "hero.cv": "Télécharger mon CV (PDF)",
  "work.title": "Projets",
  "work.pause": "Mettre en pause",
  "work.play": "Reprendre la rotation",
  "more": "Voir ce projet →",
  "repo": "Code sur GitHub →",
  "prev": "Capture précédente",
  "next": "Capture suivante",
  "dot": "Afficher la capture {n} sur {t}",

  "p1.kicker": "Mobile · 2026, en cours",
  "p1.desc": "Une marketplace qui met en relation des clients avec des prestataires de services à domicile près de chez eux : électriciens, plombiers, mécaniciens et plus.",
  "p1.pt1": "Connexion par code à usage unique (OTP)",
  "p1.pt2": "Chat en temps réel avec Supabase Realtime",
  "p1.pt3": "Suivi du prestataire en direct sur Google Maps",
  "p1.pt4": "Portefeuille prépayé pour les prestataires : frais fixes par demande acceptée",
  "p1.short": "Application de services à domicile : connexion OTP, chat en temps réel, suivi en direct, portefeuille prépayé.",
  "p1.cap1": "Client · accueil",
  "p1.cap2": "Client · carte",
  "p1.cap3": "Prestataire · tableau de bord",
  "p1.alt1": "Application client ServiceConnect : écran d'accueil avec les catégories de services et les prestataires proches",
  "p1.alt2": "Application client ServiceConnect : carte des prestataires proches",
  "p1.alt3": "Application prestataire ServiceConnect : tableau de bord avec une nouvelle demande à accepter ou refuser",

  "p2.kicker": "Back-end · Billcom Consulting, juillet 2026",
  "p2.desc": "Réalisée pendant mon stage chez Billcom Consulting, encadré par un ingénieur senior : une application qui génère les factures et les livre aux clients.",
  "p2.pt1": "Factures générées en PDF et en XML",
  "p2.pt2": "Envoi par lots aux clients via un serveur SFTP",
  "p2.pt3": "Traces de traitement envoyées par e-mail",
  "p2.pt4": "Interface web réalisée avec Thymeleaf",
  "p2.short": "Application Spring Boot qui génère les factures en PDF et XML, les livre par SFTP et envoie les traces de traitement par e-mail.",
  "p2.cap1": "Tableau de bord",
  "p2.cap2": "Liste des factures",
  "p2.alt1": "Tableau de bord Invoice Sender : nombre de factures, accès PDF et XML, téléchargement par lots et envoi SFTP",
  "p2.alt2": "Invoice Sender : liste des factures avec recherche et liens PDF et XML",

  "p3.kicker": "Full-stack · 2026",
  "p3.title": "Plateforme de réservation de voitures",
  "p3.desc": "Une plateforme où les agences de location publient leurs voitures et les clients les réservent, avec des espaces séparés pour les agences, les clients et un administrateur.",
  "p3.pt1": "Authentification multi-rôles : agences, clients, admin",
  "p3.pt2": "Logique de données Mongoose pour les agences et les réservations",
  "p3.pt3": "Front-end React sur une API Node.js et Express",
  "p3.short": "Réservations avec trois rôles (agences, clients, admin) sur React, Node.js, Express et MongoDB.",
  "p3.cap1": "Client · parcourir les voitures",
  "p3.cap2": "Agence · gestion de la flotte",
  "p3.alt1": "Vue client : parcourir les voitures disponibles avec des filtres",
  "p3.alt2": "Vue agence : gestion de la flotte et demandes de réservation",

  "p4.kicker": "Web · satoripop, 2025",
  "p4.title": "Gestion de contacts",
  "p4.desc": "Une application web de gestion de contacts, réalisée pendant mon stage chez satoripop.",
  "p4.pt1": "Ajouter, consulter, modifier, supprimer et rechercher des contacts",
  "p4.pt2": "Tableau de bord admin pour les utilisateurs et les contacts",
  "p4.short": "Application web Laravel de gestion de contacts, avec un tableau de bord admin pour les utilisateurs et les contacts.",
  "p4.cap1": "Liste des contacts (données floutées)",
  "p4.cap2": "Tableau de bord admin",
  "p4.alt1": "Liste de contacts avec recherche et actions (données personnelles floutées)",
  "p4.alt2": "Tableau de bord administrateur",

  "about.exp": "Expérience",
  "about.exp1": "Billcom Consulting — stagiaire, juillet 2026",
  "about.exp2": "satoripop — stagiaire, juillet 2025",
  "about.edu": "Formation",
  "about.edu1": "EPI Sousse — cycle ingénieur en génie logiciel, 2024–2027",
  "about.edu2": "ISIMM — cycle préparatoire intégré, 2022–2024",
  "about.certs": "Certifications",
  "about.cert1": "ETS, novembre 2026",
  "about.cert2": "Microsoft, juin 2026",
  "about.cert3": "IBM, juillet 2025",
  "about.cert4": "Amazon Web Services, mai 2025",
  "about.langs": "Langues",
  "about.lang1": "Arabe — langue maternelle",
  "about.lang2": "Anglais — courant (TOEIC 945/990)",
  "about.lang3": "Français — niveau professionnel",
  "about.hello": "Me contacter",
  "foot": "Sousse, Tunisie",
};

/* English captions and labels that only exist in the script */
const EN_EXTRA = {
  "work.play": "Resume the rotation",
  "dot": "Show screenshot {n} of {t}",
  "p2.cap1": "Dashboard", "p2.cap2": "Invoice list",
  "p3.cap1": "Client · browsing cars", "p3.cap2": "Agency · fleet management",
  "p4.cap1": "Contact list (data blurred)", "p4.cap2": "Admin dashboard",
};

const PAGE_TEXT = {
  en: {
    title: "Adam Ben Guedria — Back-end & mobile developer",
    description: "Software engineering student at EPI Sousse, Tunisia. I build mobile apps and the back-ends behind them. Looking for a PFE internship from January 2027.",
    cv: "assets/cv/Adam_Ben_Guedria_CV_EN.pdf",
    toggle: "FR", toggleLabel: "Voir le site en français",
  },
  fr: {
    title: "Adam Ben Guedria — Développeur back-end et mobile",
    description: "Étudiant ingénieur en génie logiciel à l'EPI Sousse. Je développe des applications mobiles et leurs back-ends. À la recherche d'un PFE dès janvier 2027.",
    cv: "assets/cv/Adam_Ben_Guedria_CV_FR.pdf",
    toggle: "EN", toggleLabel: "View the site in English",
  },
};

/* ---------- language ---------- */
const EN = { ...EN_EXTRA };
document.querySelectorAll("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] ??= el.textContent; });
document.querySelectorAll("[data-i18n-alt]").forEach((el) => { EN[el.dataset.i18nAlt] ??= el.alt; });
document.querySelectorAll("[data-i18n-aria]").forEach((el) => { EN[el.dataset.i18nAria] ??= el.getAttribute("aria-label"); });

let lang = "en";
const t = (key) => (lang === "fr" ? FR[key] : EN[key]) ?? EN[key] ?? key;

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  const p = PAGE_TEXT[lang];
  document.title = p.title;
  document.querySelector('meta[name="description"]').content = p.description;
  document.getElementById("cv").href = p.cv;
  const btn = document.getElementById("lang");
  btn.textContent = p.toggle;
  btn.setAttribute("aria-label", p.toggleLabel);
  btn.lang = lang === "en" ? "fr" : "en";
  viewers.forEach((v) => v.render());
  updatePauseLabel();
  try { localStorage.setItem("lang", lang); } catch {}
}

/* ---------- screenshot viewers (arrows + dots, never move on their own) ---------- */
const viewers = [...document.querySelectorAll("[data-viewer]")].map((root) => {
  const shots = [...root.querySelectorAll(".shots a")];
  const caption = root.querySelector(".caption");
  const dotsBox = root.querySelector(".dots");
  let i = 0;
  const dots = shots.map((_, k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.innerHTML = "<span></span>";
    b.addEventListener("click", () => go(k));
    dotsBox.appendChild(b);
    return b;
  });
  function go(k) { i = (k + shots.length) % shots.length; render(); }
  function render() {
    shots.forEach((a, k) => {
      a.classList.toggle("on", k === i);
      a.tabIndex = k === i ? 0 : -1;
      a.setAttribute("aria-hidden", k === i ? "false" : "true");
    });
    dots.forEach((b, k) => {
      b.setAttribute("aria-current", k === i ? "true" : "false");
      b.setAttribute("aria-label", t("dot").replace("{n}", k + 1).replace("{t}", shots.length));
    });
    caption.textContent = t(shots[i].dataset.cap);
  }
  root.querySelector(".prev").addEventListener("click", () => go(i - 1));
  root.querySelector(".next").addEventListener("click", () => go(i + 1));
  render();
  return { render };
});

/* ---------- projects taking turns in the big card ---------- */
const rot = document.getElementById("rot");
const cards = [...rot.querySelectorAll(".card")];
const pauseBtn = document.getElementById("pause");
const desktop = window.matchMedia("(min-width: 881px)");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
const EVERY_MS = 7000;
let start = 0;
let userPaused = false;
let hovering = false;
let inView = true;

function layout() {
  const n = cards.length;
  cards.forEach((card, i) => {
    const slot = (i - start + n) % n;
    card.dataset.slot = slot;
    const big = slot === 0 || !desktop.matches;
    const feat = card.querySelector(".feat");
    const compact = card.querySelector(".compact");
    feat.inert = !big;
    feat.setAttribute("aria-hidden", big ? "false" : "true");
    compact.tabIndex = big ? -1 : 0;
    compact.setAttribute("aria-hidden", big ? "true" : "false");
  });
}

function show(i) { start = i; layout(); }

cards.forEach((card, i) => card.querySelector(".compact").addEventListener("click", () => show(i)));

function running() {
  return desktop.matches && !reduced.matches && !userPaused && !hovering && inView && !document.hidden;
}
setInterval(() => { if (running()) show((start + 1) % cards.length); }, EVERY_MS);

rot.addEventListener("mouseenter", () => { hovering = true; });
rot.addEventListener("mouseleave", () => { hovering = false; });
rot.addEventListener("focusin", () => { hovering = true; });
rot.addEventListener("focusout", (e) => { if (!rot.contains(e.relatedTarget)) hovering = false; });
new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; }, { threshold: 0.35 }).observe(rot);

function updatePauseLabel() {
  pauseBtn.textContent = userPaused ? t("work.play") : t("work.pause");
  pauseBtn.setAttribute("aria-pressed", userPaused ? "true" : "false");
}
pauseBtn.addEventListener("click", () => { userPaused = !userPaused; updatePauseLabel(); });
if (reduced.matches) pauseBtn.hidden = true;
desktop.addEventListener("change", layout);

/* ---------- start ---------- */
layout();
let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
const initial = saved || ((navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en");
setLang(initial);
document.getElementById("lang").addEventListener("click", () => setLang(lang === "en" ? "fr" : "en"));
