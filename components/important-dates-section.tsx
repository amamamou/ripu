import { CheckCircle } from 'lucide-react'

export function ImportantDatesSection() {
  const dates = [
    {
      date: "15 Juillet 2026",
      event: "Soumission des papiers",
      icon: "📝"
    },
    {
      date: "10 Août 2026",
      event: "Notification aux auteurs",
      icon: "✓"
    },
    {
      date: "01 Septembre 2026",
      event: "Date limite d'inscription",
      icon: "📋"
    },
    {
      date: "30–31 Octobre 2026",
      event: "Dates de la conférence",
      icon: "🎤"
    },
  ]

  return (
    <section className="bg-white px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="label-text mb-6 md:mb-8">
            CALENDRIER
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6 md:mb-8">
            Dates importantes
          </h2>

          <p className="max-w-2xl text-base md:text-lg text-gray-600 leading-8">
            Les principales échéances du colloque RIPU26.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 md:space-y-6">
          {dates.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-6 md:gap-8 items-start p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gray-50/80 via-white to-gray-50/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Timeline Indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2F0461] to-[#1B1142] flex items-center justify-center text-white font-semibold text-sm md:text-base shadow-sm">
                  {index + 1}
                </div>
                {index !== dates.length - 1 && (
                  <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-gray-300 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gray-500 mb-2 md:mb-3">
                  {item.date}
                </p>
                <h4 className="text-lg md:text-xl font-semibold text-black">
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

