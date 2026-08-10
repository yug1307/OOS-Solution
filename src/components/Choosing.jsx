
const reasons = [
  { 
    id: 2, title: "Comprehensive Service Portfolio", 
    desc: [`Choose a company that offers end-to-end IT services, including website development, e-commerce solutions, 
    digital marketing, cloud services, marketplace management, and ongoing technical support. Having one trusted partner 
    simplifies project management and ensures consistency.`] 
  },
  { 
    id: 3, title: "Technical Expertise", 
    desc: [`Ensure the company is proficient in modern technologies, frameworks, and platforms. Their team should stay 
    updated with the latest industry trends to deliver secure, scalable, and future-ready solutions.`]
  },
  { 
    id: 4, title: "Custom Solutions", 
    desc: [`Every business is unique. Avoid providers that rely solely on generic templates. The best IT companies take time 
    to understand your business objectives and build customized solutions that align with your goals.`]
  },
  { 
    id: 5, title: "Transparent Communication", 
    desc: [`A trustworthy IT partner maintains clear communication throughout the project. Regular updates, milestone tracking, 
    and prompt responses help ensure transparency and keep projects on schedule.`]
  },
  { 
    id: 6, title: "Strong Portfolio & Client Success", 
    desc: [`Review previous projects, client testimonials, and case studies to assess the quality of work. A strong portfolio 
    demonstrates the company's ability to deliver successful solutions across different business domains.`]
  },
  { 
    id: 7, title: "Security & Data Protection", 
    desc: [`Your technology partner should prioritize cybersecurity by implementing industry best practices, secure coding 
    standards, data protection measures, and regular system updates.`] 
  },
  { 
    id: 8, title: "Scalability & Future Growth", 
    desc: [`Choose a company that builds solutions capable of growing with your business. Scalable websites and applications 
    help you expand without requiring major redevelopment in the future.`] 
  },
  { 
    id: 9, title: "Post-Launch Support & Maintenance", 
    desc: [`The relationship shouldn't end after deployment. Reliable IT companies provide continuous maintenance, 
    performance monitoring, security updates, and technical support to ensure your systems run smoothly.`] 
  },
  { 
    id: 10, title: "Cost vs. Value", 
    desc: [`Instead of choosing the lowest-priced option, evaluate the overall value offered. A quality IT partner provides 
    reliable solutions, long-term support, and measurable business outcomes that deliver a higher return on investment.`] 
  }
]

export default function Choosing() {
  return (
    <section className="bg-[#0a0f1e] py-12 px-5 md:px-8 border-b border-gray-400">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');
      .ff { font-family: 'Fraunces', serif; }`}</style>

      <div className="max-w-7xl mx-auto text-center space-y-2">
        <h2 className="ff text-gray-300 lg:text-[5vh] text-[2.7vh] font-semibold">
          <span className="text-amber-400">How to Choose</span> the Best IT Services Company
        </h2>

        <p className="text-gray-300">Selecting the right IT services company is a critical decision that can significantly 
          impact your business growth, security, and long-term success. A reliable technology partner should not only meet 
          your current requirements but also provide scalable solutions that support your future goals. Here are the key 
          factors to consider before making your choice.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto my-10 gap-6">
        {reasons.map((why, index) => (
          <div 
            key={index} 
            className="bg-white/5 p-5 border border-cyan-400 rounded-xl space-y-4 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow duration-300">

            <h3 className="text-white text-xl">{why.title}</h3>
            <p className="text-gray-400">{why.desc}</p>
          </div>
        ))}
      </div>

      {/* Expert Insight */}
      <div className="bg-gradient-to-r from-cyan-700 to-slate-700 p-5 rounded-lg space-y-2">
        <h2 className="text-gray-300 text-2xl font-semibold">Expert Insight: Technology Should Empower, Not Complicate</h2>

        <p className="text-lg">"The best IT solutions are the ones your business doesn't have to think about. 
          They work seamlessly in the background, keeping your operations secure, efficient, and ready for growth. 
          When technology is built right, you focus on your business—not your systems."</p>
      </div>
    </section>
  );
}
