"use client";

const stats = [
  { percent: 95, label: "SEO Optimization" },
  { percent: 90, label: "Social Media" },
  { percent: 100, label: "Digital Marketing" },
];

function CircleProgress({ percent }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          {/* Track */}
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6"/>

          {/* Progress */}
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset}/>
        </svg>

        {/* Percent label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-700">{percent}%</span>
        </div>
      </div> 

      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
}

// Fixed: destructure label from props
function StatCircle({ percent, label }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">

        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
          
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset}/> 
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-700">{percent}%</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 font-medium text-center">{label}</p>
    </div>
  );
}

export default function GrowBusiness() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ── LEFT: Image collage ── */}
        <div className="relative h-64 md:h-72">
          {/* Bottom-left image */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
            alt="Team discussion"
            className="absolute bottom-0 left-0 w-48 h-44 object-cover rounded-lg shadow-md"
          />

          {/* Top-right image */}
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
            alt="Team presentation"
            className="absolute top-0 right-0 w-44 h-40 object-cover rounded-lg shadow-md"
          />

          {/* Middle overlap image */}
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
            alt="Meeting"
            className="absolute bottom-4 left-24 w-40 h-36 object-cover rounded-lg shadow-lg border-2 border-white"
          />
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Grow Your Business With Us
          </h2>

          {/* Blue underline accent */}
          <div className="w-12 h-0.5 bg-sky-400 rounded" />

          <p className="text-gray-500 leading-relaxed">
            Businesses play a significant role in the commercial field, and recognition of the companies
            plays its own part. We appreciate your time and investment on us, and we are all dedicated to
            helping your business grow bigger and better.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Trust your instincts and let us take the lead. We would not let you down; we promise!
          </p>

          {/* Stat circles */}
          <div className="flex items-center gap-6 mt-2">
            {stats.map((s) => (
              <StatCircle key={s.label} percent={s.percent} label={s.label} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}