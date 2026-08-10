import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";  

const solutions = [
  { 
    id: 1, title: "Transaction Recording & Data Entry", 
    services:[
      { title: "Journal Entries:", desc: "Logging daily sales, purchases, receipts, and payments into accounting software (e.g., QuickBooks, Xero)." },
      { title: "General Ledger Maintenance:", desc: "Posting journal entries to specific general ledger accounts (Assets, Liabilities, Equity, Revenue, Expenses)." },
      { title: "Document Management:", desc: "Filing and archiving physical and digital receipts, invoices, and purchase orders for audit trails." },
    ]
  },
  { 
    id: 2, title: "Managing Cash Flow Operations", 
    services:[
      { title: "Accounts Receivable (AR):", desc: "Generating and sending invoices to clients, tracking payment terms, sending payment reminders, and recording incoming payments." },
      { title: "Accounts Payable (AP):", desc: "Reviewing vendor bills, matching invoices against purchase orders, scheduling payments, and maintaining vendor relationships." },
      { title: "Petty Cash Management:", desc: "Tracking minor cash expenses and disbursing small cash payments with valid documentation." },
    ]
  },
  { 
    id: 3, title: "Reconciliations & Payroll Support", 
    services:[
      { title: "Bank & Credit Card Reconciliation:", desc: "Cross-referencing internal financial logs against monthly bank and credit card statements to catch discrepancies or unauthorized charges." },
      { title: "Payroll Processing Support:", desc: "Collecting timesheets, calculating basic wages, recording gross/net pay, and keeping track of employee benefits and paid time off." },
      { title: "Trial Balance Preparation:", desc: "Generating an unadjusted trial balance to ensure total debits equal total credits before handing data over to an accountant." },
    ]
  },
  { 
    id: 4, title: "Financial Reporting & Period-End Closing", 
    services:[
      { title: "Adjusting Journal Entries:", desc: "Accruing revenues/expenses, recording depreciation, amortizing assets, and adjusting bad debt allowances." },
      { 
        title: "Financial Statement Preparation:", desc: "Creating the core financial statements:" ,
        statements : [
        { title: "Income Statement (P&L):", desc: "Evaluates profitability over a period." },
        { title: "Balance Sheet:", desc: "Summarizes assets, liabilities, and equity at a specific point in time." },
        { title: "Statement of Cash Flows:", desc: "Tracks actual cash inflows and outflows across operating, investing, and financing activities." },
        ]
      },
      { title: "Month-End & Year-End Closing:", desc: "Reviewing and finalizing all books to lock the accounting period." },
    ]
  },
  { 
    id: 5, title: "Tax Strategy & Compliance", 
    services:[
      { title: "Tax Filing & Compliance:", desc: "Preparing and submitting corporate, state, sales/VAT, and payroll tax returns." },
      { title: "Tax Planning:", desc: "Developing tax minimization strategies and ensuring adherence to local/international tax laws." },
      { title: "Tax Provision & Deferred Taxes:", desc: "Calculating present and future tax obligations to report accurate tax liabilities on financial statements." },
      { title: "Transfer Pricing:", desc: "Setting and documenting compliant pricing for transactions between multinational business units." },
      { title: "Tax Audit & Dispute Management:", desc: "Representing the business in tax authority audits, appeals, and settlement negotiations." },
    ]
  },
  { 
    id: 6, title: "Financial Analysis & Business Strategy", 
    services:[
      { title: "Financial Analysis & Ratios:", desc: "Calculating Key Performance Indicators (KPIs) like Gross Margin, Debt-to-Equity Ratio, Quick Ratio, and Working Capital." },
      { title: "Budgeting & Forecasting:", desc: "Developing annual operating budgets, multi-year financial projections, and scenario planning models." },
      { title: "Audit & Internal Controls:", desc: "Conducting internal audits, setting anti-fraud protocols, and liaising with external auditors." },
      { title: "Variance Analysis:", desc: "Comparing actual results against budgets to pinpoint overspending and revenue gaps." },
      { title: "Capital Budgeting:", desc: "Evaluating long-term investments (e.g., equipment, acquisitions) using ROI metrics like NPV and IRR." },
    ]
  }
]

const AccountingBookkeeping = () => { 
  return (
    <> 
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{` 
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); }

        .accounting-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/accounting-bookkeeping.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style>
      
      {/* Hero Section */}
      <div className="accounting-hero relative overflow-hidden flex items-center min-h-[36.7vh] md:min-h-[75vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Accounting & Bookkeeping
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Accurate Accounting & Bookkeeping Solutions for Smarter Business Decisions
              </h2>

              <p className="open-sans text-white my-3">Financial accuracy is the foundation of every successful business. At OOS Solution, we provide 
                reliable Accounting & Bookkeeping services that help businesses maintain organized financial records, monitor cash flow, 
                ensure compliance, and make informed business decisions. Whether you're a startup, SME, or growing enterprise, our experts 
                simplify financial management so you can focus on expanding your business.
              </p>

              <span className="roboto text-2xl font-bold text-pink-400">Accurate Records. Better Insights. Sustainable Growth.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
              
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wider">
                Simplify Your Accounting <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> 
    
    <section className="py-20 px-6" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      {/* Overview */}
      <div className="space-y-8">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Building Strong Financial Foundations for <span className="text-pink-400">Business Success</span>
        </h2>

        <p className="open-sans max-w-4xl mx-auto text-white text-lg">Managing business finances requires more than recording transactions. 
          Accurate bookkeeping, organized financial records, timely reporting, and effective financial management enable 
          businesses to understand their financial health, maintain compliance, and plan for future growth.

          <br /> <br />

          At OOS Solution, we offer comprehensive Accounting & Bookkeeping services designed to streamline your financial operations. 
          Our experienced professionals ensure that every transaction is recorded accurately, accounts are reconciled regularly, and 
          financial reports provide meaningful insights into your business performance.

          <br /><br />

          Whether you require ongoing bookkeeping, financial reporting, payroll assistance, or accounts management, we provide 
          dependable financial support tailored to your business needs.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">Accounting & Bookkeeping Solutions</span>
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {solutions.map((s, i) => (
          <div
          key={i}
          className="group relative bg-white/3 backdrop-blur-sm border border-white/8 rounded-xl p-6 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:border-pink-400/40 hover:bg-white/8 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1"
          >
            
            {/* Top gradient line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         
            {/* Title */}
            <h3 className="roboto text-white text-lg font-bold leading-snug group-hover:text-pink-300 transition-colors duration-200">
              {s.title}
            </h3>

            {/* List of Services */}
            <ul className="space-y-2"> 
              {s.services.map((feat, index) => (

                <li key={index} className="space-x-2">
                  <span className="roboto text-pink-400 font-semibold">🌟 {feat.title}</span> 
                  <span className="open-sans text-white/75">{feat.desc}</span>

                  {feat.statements && (
                    <div id="statements" className="p-3">
                      
                      <ul className="space-y-1">
                        {feat.statements.map((statement, statementIndex) => (

                          <li key={statementIndex} className="flex items-start gap-2">
                            <span className="text-pink-400">•</span>

                            <span className="open-sans text-white/75">
                              <strong>{statement.title}</strong> {statement.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                </li>
              ))}
            </ul>

            {/* Bottom underline */}
            <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
          </div>
        ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="py-10 px-5 rounded text-white" style={{background: "linear-gradient(135deg, #4a109b 0%, #670dbc 30%, #e32685 100%)"}}>
        <h2 className="roboto text-xl">Ready to Simplify Your Business Finances?</h2>

        <p className="open-sans my-3">
          Managing your finances shouldn't slow down your business growth. With OOS Solution's Accounting & Bookkeeping services, 
          you gain a trusted financial partner dedicated to maintaining accurate records, improving operational efficiency, and 
          providing valuable financial insights.
            <br />
          Whether you need daily bookkeeping, financial reporting, account reconciliation, payroll support, or complete accounting management, 
          our experienced professionals are here to help your business stay organized, financially healthy, and growth-ready.
        </p>

        <span className="roboto font-semibold">Become a Partner with OOS Solution to build a stronger financial foundation for your business.</span>
      </div>
    </section> 
    <Footer/> 
    </>
  )
}

export default AccountingBookkeeping