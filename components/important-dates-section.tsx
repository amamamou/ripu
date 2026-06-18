export function ImportantDatesSection() {
  const dates = [
    {
      date: "15 Juillet 2026",
      event: "Soumission des papiers",
    },
    {
      date: "10 Août 2026",
      event: "Notification aux auteurs",
    },
    {
      date: "01 Septembre 2026",
      event: "Date limite d'inscription",
    },
    {
      date: "30–31 Octobre 2026",
      event: "Dates de la conférence",
    },
  ]

  return (
    <section className="bg-white px-12 py-20">
      <div className="max-w-7xl mx-auto">
 {/* Header */}
    <div className="mb-20">
      <div className="label-text mb-4">
        CALENDRIER
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Dates importantes
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        Les principales échéances du colloque RIPU26.
      </p>
    </div>
        <div className="bg-[#f5f5f5] rounded-[24px] overflow-hidden">

          {dates.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-6 p-8 ${
                index !== dates.length - 1
                  ? "border-b border-[#e7e7e7]"
                  : ""
              }`}
            >
              <div>
                <p className="text-sm text-[#666]">
                  {item.date}
                </p>
              </div>

              <div className="md:text-right">
                <h4 className="text-xl font-semibold text-black leading-tight">
                  {item.event}
                </h4>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

