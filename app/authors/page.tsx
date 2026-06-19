import Link from 'next/link';
import PageHero from '@/components/PageHero';
import {Navbar} from '@/components/Navbar'
import {
  FileText,
  FileCode2,
  Braces,
  Check,
  Clock,
  CalendarDays,
  Sparkles,
  Languages,
  EyeOff,
  BadgeCheck,
  Layers3,
  UploadCloud,
  MonitorPlay,
  Wifi,
  Save,
  Eye,
  MessageSquare,
  Rocket,
  Mail,

} from "lucide-react";
import { FaFileWord } from "react-icons/fa";
import { Download, ExternalLink } from "lucide-react";

export default function AuthorsPage() {

  // --- Timeline logic ---
  const milestones = [
    { date: new Date(2026, 6, 15), label: "15 Juillet 2026", short: "15 Juil.", event: "Date limite de soumission" },
    { date: new Date(2026, 7, 10), label: "10 Août 2026", short: "10 Août", event: "Notification aux auteurs" },
    { date: new Date(2026, 8, 1), label: "01 Septembre 2026", short: "01 Sept.", event: "Date limite d'inscription" },
    { date: new Date(2026, 9, 30), label: "30 Octobre 2026", short: "30 Oct.", event: "Ouverture de RIPU26" },
    { date: new Date(2026, 9, 31), label: "31 Octobre 2026", short: "31 Oct.", event: "Clôture de RIPU26" },
  ];

  const today = new Date();
  const start = milestones[0].date;
  const end = milestones[milestones.length - 1].date;
  const totalSpan = end.getTime() - start.getTime();
  const elapsed = Math.min(Math.max(today.getTime() - start.getTime(), 0), totalSpan);
  const progressPct = totalSpan > 0 ? (elapsed / totalSpan) * 100 : 0;

  const rawItems = milestones.map((m, idx) => {
    const prev = milestones[idx - 1];
    let status;
    if (today > m.date) {
      status = "done";
    } else if (!prev || today > prev.date) {
      status = "current";
    } else {
      status = "upcoming";
    }
    const posPct = totalSpan > 0 ? ((m.date.getTime() - start.getTime()) / totalSpan) * 100 : 0;
    return { ...m, status, posPct };
  });

  let currentFound = false;
  const timelineItems = rawItems.map((item) => {
    if (item.status === "current") {
      if (currentFound) {
        return { ...item, status: "upcoming" };
      }
      currentFound = true;
    }
    return item;
  });

  const activeIndex = timelineItems.findIndex((i) => i.status === "current");
  const activeMilestone = activeIndex !== -1 ? timelineItems[activeIndex] : null;
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = activeMilestone
    ? Math.max(Math.ceil((activeMilestone.date.getTime() - today.getTime()) / msPerDay), 0)
    : null;
  const allDone = !activeMilestone && today > end;
  const phaseLabel = allDone
    ? `${milestones.length} / ${milestones.length}`
    : `${activeIndex + 1} / ${milestones.length}`;

  // Points for the winding path, inset from edges so cards don't overflow
  const rowTop = 18;
  const rowBottom = 82;
  const edgeInset = 7; // % inset from each side
  const insetPos = (pct) => edgeInset + pct * ((100 - edgeInset * 2) / 100);

  const points = timelineItems.map((item, idx) => ({
    x: insetPos(item.posPct),
    y: idx % 2 === 0 ? rowTop : rowBottom,
  }));

  const buildPath = (pts) => {
    if (pts.length === 0) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const midX = prev.x + (curr.x - prev.x) / 2;
      d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const fullPath = buildPath(points);
  const ringRadius = 40;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference - (progressPct / 100) * ringCircumference;

  // --- Shared data for redesigned sections ---
  const submissionGuidelines = [
    { icon: Layers3, title: "Type de contribution", content: "Retour d'expérience ou Work in Progress aligné avec les axes scientifiques de RIPU26." },
    { icon: FileText, title: "Longueur", content: "2 à 4 pages, incluant figures, tableaux et références." },
    { icon: Languages, title: "Langues", content: "Les communications peuvent être soumises en français ou en anglais." },
    { icon: FileCode2, title: "Template", content: "Utilisation obligatoire du modèle Springer LNCS (Word ou LaTeX)." },
    { icon: EyeOff, title: "Soumission anonyme", content: "La version soumise pour évaluation ne doit contenir aucun nom d'auteur ou affiliation." },
    { icon: BadgeCheck, title: "Version finale", content: "La version acceptée devra inclure les auteurs, affiliations et coordonnées du correspondant." },
    { icon: Layers3, title: "Choisir un axe", content: "Chaque communication doit être rattachée à un axe thématique de RIPU26." },
    { icon: UploadCloud, title: "Plateforme de dépôt", content: "Les soumissions sont réalisées via ConfTool®. Les métadonnées renseignées doivent être exactes." },
  ];

  const presentationStats = [
    { value: "25", label: "Minutes de présentation" },
    { value: "5", label: "Minutes de discussion" },
    { value: "PDF", label: "ou PowerPoint" },
    { value: "AV", label: "Équipement fourni" },
  ];

  const presentationGuidelines = [
    { icon: MonitorPlay, title: "Support", content: "Les présentations peuvent être réalisées à l'aide d'un fichier PDF ou PowerPoint." },
    { icon: Wifi, title: "Équipement", content: "Vidéoprojecteur, écran, système audio et connexion internet seront disponibles dans toutes les salles." },
    { icon: Save, title: "Préparation", content: "Testez votre présentation avant votre session et prévoyez une copie de sauvegarde sur clé USB." },
    { icon: Eye, title: "Qualité visuelle", content: "Privilégiez des diapositives synthétiques, lisibles et visuellement épurées afin de favoriser les échanges." },
    { icon: MessageSquare, title: "Interaction", content: "Chaque communication est suivie d'une période de questions et d'échanges avec les participants." },
  ];

  const reviewSteps = [
    { num: "01", title: "Soumission", content: "Dépôt de la communication via la plateforme officielle avant la date limite." },
    { num: "02", title: "Expertise", content: "Évaluation en double aveugle par les membres du comité scientifique." },
    { num: "03", title: "Décision", content: "Notification d'acceptation, de révision ou de refus aux auteurs." },
    { num: "04", title: "Publication", content: "Intégration des versions finales dans les actes et présentation lors du colloque." },
  ];

  const reviewPrinciples = [
    "Double aveugle",
    "Originalité",
    "Rigueur scientifique",
    "Pertinence thématique",
    "Qualité rédactionnelle",
  ];

  return (
    <>
        <Navbar/>


      {/* Important Dates */}
<section
  id="dates"
  className="bg-white py-24 mt-20 md:py-32 w-full overflow-x-hidden "
>
  <div className="px-8 lg:px-16">

    {/* Header */}
    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10 rounded-[40px]">

      <div>
        <div className="label-text mb-4">
          CALENDRIER
        </div>

        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
          Dates importantes
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
          Les principales échéances de RIPU26.
        </p>
      </div>

      {/* Completion ring */}
      <div className="scroll-reveal flex items-center gap-6 flex-shrink-0">

        <div className="relative" style={{ width: "104px", height: "104px" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50" cy="50" r={ringRadius}
              fill="none"
              stroke="var(--divider-gray)"
              strokeWidth="6"
            />
            <circle
              cx="50" cy="50" r={ringRadius}
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={ringCircumference}
              strokeDashoffset={ringOffset}
              style={{ transition: "stroke-dashoffset 700ms ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-light text-black">{Math.round(progressPct)}%</span>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-1">
            Phase
          </div>
          <div className="text-2xl font-light text-black">
            {phaseLabel}
          </div>
          {activeMilestone && (
            <div className="mt-1 text-sm" style={{ color: "var(--accent-primary)" }}>
              {daysRemaining} {daysRemaining === 1 ? "jour restant" : "jours restants"}
            </div>
          )}
          {allDone && (
            <div className="mt-1 text-sm text-[#999]">
              Colloque clôturé
            </div>
          )}
        </div>

      </div>

    </div>

    {/* --- Desktop winding roadmap --- */}
    <div
      className="hidden md:block relative w-full overflow-hidden"
      style={{ height: "480px", padding: "20px 0" }}
    >

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d={fullPath}
          fill="none"
          stroke="var(--divider-gray)"
          strokeWidth="0.5"
        />
        <path
          d={fullPath}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="0.6"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${progressPct} ${100 - progressPct}`}
          style={{ transition: "stroke-dasharray 700ms ease" }}
        />
      </svg>

      {timelineItems.map((item, idx) => {
        const isTopRow = idx % 2 === 0;
        const isFirst = idx === 0;
        const isLast = idx === timelineItems.length - 1;
        const xPos = insetPos(item.posPct);

        let nodeTransform = "translate(-50%, -50%)";
        if (isFirst) nodeTransform = "translate(0, -50%)";
        if (isLast) nodeTransform = "translate(-100%, -50%)";

        let cardLeft = "50%";
        let cardTransform = isTopRow
          ? "translate(-50%, 14px)"
          : "translate(-50%, calc(-100% - 14px))";
        if (isFirst) {
          cardLeft = "0";
          cardTransform = isTopRow ? "translate(0, 14px)" : "translate(0, calc(-100% - 14px))";
        } else if (isLast) {
          cardLeft = "100%";
          cardTransform = isTopRow
            ? "translate(-100%, 14px)"
            : "translate(-100%, calc(-100% - 14px))";
        }

        return (
          <div
            key={idx}
            className="absolute"
            style={{
              left: `${xPos}%`,
              top: isTopRow ? `${rowTop}%` : `${rowBottom}%`,
              transform: nodeTransform,
            }}
          >

            {/* Node */}
            <div className="relative flex items-center justify-center overflow-visible">
              {item.status === "current" && (
                <span
                  className="absolute rounded-full animate-ping"
                  style={{
                    width: "34px",
                    height: "34px",
                    backgroundColor: "var(--accent-secondary)",
                    opacity: 0.35,
                  }}
                />
              )}
              <div
                className="relative rounded-full flex items-center justify-center z-10"
                style={{
                  width: "34px",
                  height: "34px",
                  backgroundColor: item.status === "upcoming" ? "#ffffff" : "var(--accent-primary)",
                  border:
                    item.status === "upcoming"
                      ? "2px solid var(--divider-gray)"
                      : "2px solid var(--accent-primary)",
                }}
              >
                {item.status === "done" && <Check size={16} className="text-white" />}
                {item.status === "current" && <Sparkles size={15} className="text-white" />}
                {item.status === "upcoming" && (
                  <div
                    className="rounded-full"
                    style={{ width: "8px", height: "8px", backgroundColor: "var(--divider-gray)" }}
                  />
                )}
              </div>
            </div>

            {/* Stub card */}
            <div
              className="absolute card-hover scroll-reveal px-5 py-4 w-[180px] sm:w-[200px]"
              style={{
                left: cardLeft,
                transform: cardTransform,
                borderColor: item.status === "current" ? "var(--accent-primary)" : "var(--divider-gray)",
                backgroundColor: item.status === "current" ? "var(--accent-primary-light)" : "#ffffff",
                boxShadow: item.status === "current" ? "0 16px 32px -16px rgba(47,4,97,0.3)" : "none",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays
                  size={14}
                  style={{ color: item.status === "upcoming" ? "#bbb" : "var(--accent-primary)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: item.status === "upcoming" ? "#999" : "var(--text-black)" }}
                >
                  {item.short}
                </span>
              </div>
              <p
                className="text-xs leading-5"
                style={{ color: item.status === "upcoming" ? "#bbb" : "var(--text-muted)" }}
              >
                {item.event}
              </p>
              {item.status === "current" && (
                <div
                  className="mt-2 text-[10px] uppercase tracking-[0.15em] font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  En cours
                </div>
              )}
            </div>

          </div>
        );
      })}

    </div>

    {/* --- Mobile stacked version --- */}
    <div className="md:hidden space-y-4">

      {timelineItems.map((item, idx) => (
        <div
          key={idx}
          className="card-hover scroll-reveal flex gap-4 p-5"
          style={{
            borderColor: item.status === "current" ? "var(--accent-primary)" : "var(--divider-gray)",
            backgroundColor: item.status === "current" ? "var(--accent-primary-light)" : "#ffffff",
          }}
        >
          <div className="flex-shrink-0 relative flex items-center justify-center">
            {item.status === "current" && (
              <span
                className="absolute rounded-full animate-ping"
                style={{ width: "32px", height: "32px", backgroundColor: "var(--accent-secondary)", opacity: 0.35 }}
              />
            )}
            <div
              className="relative rounded-full flex items-center justify-center z-10"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: item.status === "upcoming" ? "#ffffff" : "var(--accent-primary)",
                border:
                  item.status === "upcoming"
                    ? "2px solid var(--divider-gray)"
                    : "2px solid var(--accent-primary)",
              }}
            >
              {item.status === "done" && <Check size={14} className="text-white" />}
              {item.status === "current" && <Sparkles size={13} className="text-white" />}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span
                className="text-base font-medium"
                style={{ color: item.status === "upcoming" ? "#999" : "var(--text-black)" }}
              >
                {item.label}
              </span>
              {item.status === "current" && (
                <span
                  className="text-[10px] uppercase tracking-[0.15em] font-semibold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                >
                  En cours
                </span>
              )}
            </div>
            <p
              className="mt-1 text-sm leading-6"
              style={{ color: item.status === "upcoming" ? "#bbb" : "var(--text-muted)" }}
            >
              {item.event}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>


{/* Submission Guidelines */}
<section
  id="guidelines"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>

  <div className="px-8 lg:px-16">

    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

      <div>
        <div className="label-text mb-4">
          SOUMISSION
        </div>

        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
          Directives de soumission
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
          Toutes les informations nécessaires à la préparation et au dépôt
          de votre communication.
        </p>
      </div>

      <div className="scroll-reveal flex items-center gap-4 flex-shrink-0">
        <div
          className="rounded-full flex items-center justify-center flex-shrink-0"
          style={{ width: "56px", height: "56px", backgroundColor: "var(--accent-primary)" }}
        >
          <BadgeCheck size={24} className="text-white" />
        </div>
        <div>
          <div className="text-2xl font-light text-black">{submissionGuidelines.length}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#999]">Critères à respecter</div>
        </div>
      </div>

    </div>

    {/* Guideline cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {submissionGuidelines.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="card-hover scroll-reveal p-7"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div
              className="rounded-full flex items-center justify-center mb-6"
              style={{ width: "44px", height: "44px", backgroundColor: "var(--accent-primary-light)" }}
            >
              <Icon size={19} style={{ color: "var(--accent-primary)" }} />
            </div>

            <div className="text-lg font-medium text-black mb-2">
              {item.title}
            </div>

            <p className="text-sm leading-7 text-[#666]">
              {item.content}
            </p>
          </div>
        );
      })}

    </div>

    {/* Downloads */}
    <div className="mt-6 grid md:grid-cols-3 gap-5">

      <Link
        href="/paper/MSWord.zip"
        download
        className="card-hover scroll-reveal group p-7 flex flex-col"
      >
        <div className="flex items-start justify-between">
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: "48px", height: "48px", backgroundColor: "var(--accent-primary-light)" }}
          >
            <FileText size={22} style={{ color: "var(--accent-primary)" }} />
          </div>

          <Download
            size={18}
            className="text-[#999] group-hover:text-[#2F0461] transition-colors"
          />
        </div>

        <div className="mt-6 text-sm uppercase tracking-[0.15em] text-[#999]">
          Télécharger
        </div>

        <div className="mt-2 text-xl font-light text-black">
          Template Word
        </div>
      </Link>

      <Link
        href="/paper/LaTeX2e.zip"
        download
        className="card-hover scroll-reveal group p-7 flex flex-col"
      >
        <div className="flex items-start justify-between">
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: "48px", height: "48px", backgroundColor: "var(--accent-primary-light)" }}
          >
            <FileCode2 size={22} style={{ color: "var(--accent-primary)" }} />
          </div>

          <Download
            size={18}
            className="text-[#999] group-hover:text-[#2F0461] transition-colors"
          />
        </div>

        <div className="mt-6 text-sm uppercase tracking-[0.15em] text-[#999]">
          Télécharger
        </div>

        <div className="mt-2 text-xl font-light text-black">
          Template LaTeX
        </div>
      </Link>

      <Link
        href="https://your-conftool-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="scroll-reveal group p-7 flex flex-col justify-between text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--accent-secondary), var(--accent-primary), var(--accent-dark))", borderRadius: "40px" }}
      >
        <div className="flex items-start justify-between">
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: "48px", height: "48px", backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <ExternalLink size={22} className="text-white" />
          </div>

          <ExternalLink
            size={18}
            className="text-white/60 group-hover:text-white transition-colors"
          />
        </div>

        <div className="mt-6 text-sm uppercase tracking-[0.15em] text-white/60">
          Soumission
        </div>

        <div className="mt-2 text-xl font-light text-white">
          Accéder à ConfTool®
        </div>
      </Link>

    </div>
  </div>

</section>

      {/* Call for Papers */}
 <section
  id="call"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>

  <div className="px-8 lg:px-16">

    <div className="grid lg:grid-cols-12 gap-5">

        {/* Left */}

        <div
          className="
            card-hover
            scroll-reveal
            lg:col-span-7
            p-12
            md:p-16
          "
        >

          <div className="label-text mb-4">
            APPEL À COMMUNICATIONS
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
            Call for Papers
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            RIPU26 invite les chercheurs, enseignants,
            praticiens et responsables académiques à soumettre
            leurs travaux autour de l’intelligence artificielle,
            de l’innovation pédagogique et de l’enseignement supérieur.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            Les communications doivent être rattachées à l’un
            des axes thématiques du colloque et respecter les
            directives de soumission.
          </p>

        </div>

        {/* Right */}

        <div
          className="
            scroll-reveal
            lg:col-span-5
            p-12
            md:p-16
            flex
            flex-col
            justify-center
            text-white
            relative
            overflow-hidden
          "
          style={{ background: "linear-gradient(135deg, var(--accent-secondary), var(--accent-primary), var(--accent-dark))", borderRadius: "40px" }}
        >

          <div
            className="rounded-full flex items-center justify-center mb-6"
            style={{ width: "48px", height: "48px", backgroundColor: "rgba(255,255,255,0.12)", borderRadius: "50%" }}
          >
            <FileText size={22} className="text-white" />
          </div>

          <div className="text-sm uppercase tracking-[0.2em] text-white/60">
            Document officiel
          </div>

          <div className="mt-4 text-3xl font-light text-white">
            PDF · Appel à communications RIPU26
          </div>

          <p className="mt-6 text-white/70 leading-8">
            Consultez les thématiques, les modalités de
            participation et les informations destinées aux auteurs.
          </p>

          <div className="mt-10">

            <Link
              href="/documents/CFP-RIPU26.pdf"
              target="_blank"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-4
                bg-white
                text-[#2F0461]
                hover:bg-white/90
                transition-colors
              "
            >
              Télécharger le PDF
              <Download size={16} />
            </Link>

          </div>

        </div>

    </div>

  </div>

</section>



{/* Presentation Guidelines */}


{/* Review Process */}
<section
  id="review"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>

  <div className="px-8 lg:px-16">


<div className="mb-16">

  <div className="label-text mb-4">
    ÉVALUATION
  </div>

  <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
    Processus d'évaluation
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-[#666]">
    Chaque proposition est examinée par le comité scientifique
    selon un processus de relecture académique garantissant
    la qualité et la pertinence des contributions retenues.
  </p>

</div>

{/* Process — mirrors the timeline roadmap visual language */}

<div className="relative">

  {/* connecting line, desktop only */}
  <div
    className="hidden lg:block absolute top-[28px] left-0 right-0 h-px"
    style={{ backgroundColor: "var(--divider-gray)" }}
  />

  <div className="grid lg:grid-cols-4 gap-5 relative">

    {reviewSteps.map((step, idx) => (
      <div
        key={idx}
        className="card-hover scroll-reveal p-10 relative"
        style={{ animationDelay: `${idx * 80}ms` }}
      >

        <div
          className="rounded-full flex items-center justify-center mb-6 relative z-10"
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "var(--accent-primary-light)",
            border: "2px solid var(--accent-primary)",
          }}
        >
          <span className="text-lg font-light" style={{ color: "var(--accent-primary)" }}>
            {step.num}
          </span>
        </div>

        <h3 className="text-2xl font-light text-black">
          {step.title}
        </h3>

        <p className="mt-4 text-[#666] leading-8">
          {step.content}
        </p>

      </div>
    ))}

  </div>

</div>

{/* Principles */}

<div className="mt-12 max-w-4xl " style={{ borderRadius: "50px" }}>

  <div className="label-text mb-6">
    PRINCIPES
  </div>

  <div className="flex flex-wrap gap-3" style={{ borderRadius: "50px" }}>

    {reviewPrinciples.map((p, idx) => (
      <div
        key={idx}
        className="scroll-reveal flex items-center gap-2 border px-5 py-3" style={{ borderRadius: "50px", borderColor: "var(--divider-gray)", backgroundColor: "var(--accent-primary-light)" }}
      >
        <Check size={14} style={{ color: "var(--accent-primary)" }} />
        <span className="text-[#666]">{p}</span>
      </div>
    ))}

  </div>

</div>


  </div>

</section>


{/* Next step CTA */}
<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

   <div
  className="
    scroll-reveal
    relative
    overflow-hidden
    p-12
    md:p-20
    text-white
    rounded-[40px]
    border
    border-white/10
  "
  style={{
    background:
      "linear-gradient(135deg, var(--accent-secondary), var(--accent-primary), var(--accent-dark))",
  }}
>

      <div className="max-w-5xl relative z-10">

        <div className="flex items-center gap-2 mb-4">
          <Rocket size={16} className="text-white/70" />
          <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
            PROCHAINE ÉTAPE
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[0.95]">
    Soumettre une contribution à RIPU26
  </h2>

  <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
    Les soumissions sont ouvertes aux chercheurs,
    enseignants, doctorants et praticiens souhaitant
    partager leurs travaux et retours d'expérience.
  </p>

        <div className="mt-16 flex flex-col md:flex-row md:items-center gap-6">

          <Link
            href="#"
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              bg-white
              text-[#2F0461]
              text-lg
              font-medium
              hover:bg-white/90
              transition-colors
            "
          >
            Accéder à ConfTool®
            <ExternalLink size={18} />
          </Link>

          <Link
            href="/documents/CFP-RIPU26.pdf"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              text-lg
              text-white/70
              hover:text-white
              transition-colors
            "
          >
            <Download size={18} />
            Télécharger l'appel à communications
          </Link>

        </div>

      </div>

      {/* decorative ring, echoes the completion ring from the dates section */}
      <div
        className="hidden md:block absolute -right-16 -bottom-16 rounded-full"
        style={{
          width: "260px",
          height: "260px",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      />
      <div
        className="hidden md:block absolute -right-4 -bottom-4 rounded-full"
        style={{
          width: "180px",
          height: "180px",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      />

    </div>

  </div>

</section>
    </>
  );
}