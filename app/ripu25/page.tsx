import Navbar from "@/components/Navbar";
import Image from "next/image";

const speakers = [
  {
    name: "Denis Gillet",
    role: "President of Graasp.org",
    institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    image: "/team/22.png",
    bio: "University educator and president of Graasp.org, Denis Gillet directs the Interaction Systems group at EPFL. Also an IEEE Education Committee member and co-founder of the Swiss EdTech Collider.",
  },
  {
    name: "Sonia Sahli",
    role: "Expert in Educational Engineering",
    institution: "ISET Sousse, Tunisia",
    image: "/team/11.png",
    bio: "University instructor in computer science and educational engineering expert, Sonia Sahli is creator of SonyPlanner and UI/UX Design specialist.",
  },
  {
    name: "Thierry Spriet",
    role: "Senior Lecturer",
    institution: "Avignon Université, France",
    image: "/team/33.png",
    bio: "Expert in university pedagogy and digital innovation with nearly thirty years of experience in higher education.",
  },
  {
    name: "Nawel Souissi",
    role: "International Accreditation Expert",
    institution: "PRISTINI School of AI",
    image: "/team/66.png",
    bio: "PhD in Electronics and specialist in quality assurance in higher education, recognized for expertise in artificial intelligence.",
  },
];

const conferences = [
  {
    day: "Day 1",
    time: "14:00",
    duration: "60 min",
    title: "Impacts of Generative AI on Learning",
    speaker: "Thierry Spriet",
    description: "Exploration of how artificial intelligence is reshaping education and the future of university training.",
  },
  {
    day: "Day 1",
    time: "15:00",
    duration: "60 min",
    title: "AI for Tomorrow's Professions",
    speaker: "Nawel Souissi",
    description: "Exploration of the growing role of AI in tomorrow's professional world.",
  },
  {
    day: "Day 2",
    time: "11:00",
    duration: "60 min",
    title: "Open Educational Resources and Intelligent Tools for Developing Transversal Skills",
    speaker: "Denis Gillet",
    description: "Presentation of innovative educational resources integrating artificial intelligence.",
  },
];

const workshops = [
  {
    day: "Day 1",
    time: "16:15",
    duration: "45 min",
    title: "Generative AI for Exam Preparation",
    speaker: "Sonia Sahli",
    description: "Sharing experiences on the development of innovative tools for educators integrating the latest advances in generative AI.",
  },
  {
    day: "Day 2",
    time: "10:00",
    duration: "45 min",
    title: "AI as a Learning Assistant",
    speaker: "Thierry Spriet",
    description: "Methodology for engaging students toward responsible use of generative AI.",
  },
  {
    day: "Day 2",
    time: "11:00",
    duration: "45 min",
    title: "Human-AI Collaboration for Design Thinking",
    speaker: "Denis Gillet",
    description: "Exploration of the role of generative AI in creative processes and collaborative ideation.",
  },
];

export default function RIPU25Page() {
  return (
    <>
      <Navbar />

      {/* ============================================================ */}
      {/* SECTION 1: Opening - Archive Edition */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="inline-block mb-8">
            <span className="text-xs uppercase tracking-widest text-secondary px-4 py-2 border border-[#ececec] rounded-sm">
              Archived Edition • 2025
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Typography */}
            <div>
              <div className="label-text mb-6">Conference Archive</div>
              <h1 className="text-6xl md:text-7xl font-bold text-primary leading-[1.1]">
                RIPU25
              </h1>
              <p className="mt-8 text-xl text-secondary leading-8 max-w-2xl">
                University Teaching at the Era of Artificial Intelligence and Applied Research
              </p>
              <div className="mt-10 pt-10 border-t border-[#ececec] grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-primary">May 30–31</p>
                  <p className="text-sm text-secondary uppercase tracking-wider mt-2">2025</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary">Sousse, Tunisia</p>
                  <p className="text-sm text-secondary mt-2">Marriott Resort & Spa</p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/ripu.jpg"
                alt="RIPU25 Conference"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Keynote Speakers */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="label-text mb-4">SPEAKERS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">
              Featured Speakers
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {speakers.map((speaker, idx) => (
              <div key={idx} className="grid lg:grid-cols-5 gap-12 md:gap-16 items-start">
                {/* Portrait */}
                <div className="lg:col-span-2">
                  <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-3">
                  <p className="text-xs uppercase tracking-widest text-secondary mb-4">
                    {speaker.institution}
                  </p>
                  <h3 className="text-4xl font-bold text-primary mb-3">
                    {speaker.name}
                  </h3>
                  <p className="text-lg font-semibold text-secondary mb-6">
                    {speaker.role}
                  </p>
                  <p className="text-lg text-secondary leading-8">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Conferences */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="label-text mb-4">PROGRAMME</div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">
              Conferences
            </h2>
          </div>

          <div className="space-y-8">
            {conferences.map((item, idx) => (
              <div key={idx} className="border-b border-[#ececec] pb-8 last:border-0">
                <div className="grid md:grid-cols-4 gap-8 items-start">
                  {/* Time */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-2">
                      {item.day}
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {item.time}
                    </p>
                    <p className="text-sm text-secondary mt-2">
                      {item.duration}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold text-secondary mb-4">
                      {item.speaker}
                    </p>
                    <p className="text-base text-secondary leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Workshops */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="label-text mb-4">PROGRAMME</div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">
              Workshops
            </h2>
          </div>

          <div className="space-y-8">
            {workshops.map((item, idx) => (
              <div key={idx} className="border-b border-[#ececec] pb-8 last:border-0">
                <div className="grid md:grid-cols-4 gap-8 items-start">
                  {/* Time */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-2">
                      {item.day}
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {item.time}
                    </p>
                    <p className="text-sm text-secondary mt-2">
                      {item.duration}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold text-secondary mb-4">
                      {item.speaker}
                    </p>
                    <p className="text-base text-secondary leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
