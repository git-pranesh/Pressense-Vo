import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'AI Automation Agency in Austin | Pressense',
  description: 'AI automation services for Austin tech startups and companies. Custom AI solutions built fast.',
  openGraph: { title: 'AI Automation Agency in Austin | Pressense', url: '/ai-automation-agency-austin', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-austin' },
}

export default function AIAustinPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Austin', areaServed: 'Austin, TX', address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' } }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does an AI automation project actually take in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects run one to two weeks from diagnostic to delivery. Bigger builds involving multiple system integrations run three to four weeks. Speed depends on how complex your tech stack is and how much custom logic you need, not how many manual steps you currently have. We move fast because we don\'t overthink the architecture.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work with non-tech companies in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yeah, we do. We\'ve worked with manufacturing operations in Round Rock, real estate companies, professional services firms, e-commerce shops in East Austin. The automation principles are the same across industries. What changes is the tool stack and the specific integrations. A manufacturing company automates production scheduling. A real estate firm automates lease document generation and tenant communication. The logic is identical.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if we don\'t have the right tools or systems in place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help you figure out what you actually need. Sometimes you already have good tools and they just aren\'t connected. Sometimes you need to add one tool. Rarely do you need to rebuild your entire tech stack. We assess what\'s worth integrating, what\'s worth replacing, and what\'s worth leaving alone. We don\'t sell you tools you don\'t need.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do we have to be physically located in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We work entirely remote with companies across the US and UK. Austin clients get the exact same engagement as our teams in New York, San Francisco, and London. We have video calls, shared documentation, and delivery happens over the same systems. Location doesn\'t matter.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you handle the diagnostic process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We spend two to three hours with your team asking questions and observing actual workflows. Not asking what you think the problem is, but actually watching people work. We look at which tasks repeat, where people complain about friction, where quality issues show up. From that we write a simple report showing top three automation opportunities and estimated time and cost to fix each one.'
        }
      }
    ]
  }

  return (
    <>
      <StructuredData data={schema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency Austin","description":"AI automation consulting for Austin tech companies and founder-led businesses.","url":"https://www.pressense.co/ai-automation-agency-austin","areaServed":{"@type":"City","name":"Austin"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-pretty">
            AI Automation Agency for Austin Businesses
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Austin grows fast. The tech corridor keeps expanding along Sixth Street and south toward the Domain. Round Rock has become a manufacturing and logistics hub. Suburbs keep pushing out as real estate gets expensive downtown. Companies here are scaling quickly, and they're all hitting the same wall: growth doesn't mean less work. It means more work. More manual data entry. More emails bouncing between people. More meetings to coordinate what should happen automatically.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Most Austin companies solve this by hiring more people. That works until it doesn't. You hit a point where hiring another ops person costs more than building a system to eliminate the manual work entirely. That's where we come in.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We help Austin businesses find the workflows that should be automated and build AI systems that actually do the work. Not plans. Not recommendations. Working systems. We deliver working software that saves your team hours every week.
          </p>
        </section>

        {/* Who we work with */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Who we work with in Austin
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We've worked with SaaS companies in the Domain that got product-market fit but didn't plan for operations infrastructure. They need CRM automation, pipeline visibility, contract generation, but they don't want to hire an entire operations team just to manage data entry and reporting. We build the systems that let two people manage what would normally require four.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We've worked with professional services firms downtown dealing with the coordination mess. Proposals that take manual work to build. Client onboarding that requires someone to shepherd new clients through five different processes. Time tracking that nobody actually does. We automate the entire client lifecycle from proposal to kickoff to reporting.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            E-commerce shops in East Austin have a different problem: inventory and orders in different systems with no integration. They're manually syncing product catalogs to three platforms. Orders come in through Amazon, Shopify, and their own site but they're all being entered into a spreadsheet for fulfillment. We connect their systems so orders flow automatically from anywhere straight into their fulfillment process.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Manufacturing companies in Round Rock and the suburbs deal with production scheduling, supply chain coordination, and inventory management spread across multiple disconnected systems. Someone's job becomes managing the bridge between those systems. We automate that bridge so information flows without human intervention.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What all these companies share: they're founder-led or founder-influenced, they're scaling, and they've hit that specific inflection point where manual work is their actual growth bottleneck. If your team spends more than ten hours a week on work that follows a pattern and could be automated, we're the right fit.
          </p>
        </section>

        {/* What slows them down */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            The specific bottlenecks we see in Austin companies
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            These aren't theoretical problems. These are things we see every week.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Sales teams manually logging every piece of data into your CRM
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Your sales leader wants visibility into the pipeline. Your sales reps hate updating the CRM because it takes time away from selling. You end up with bad data and actually no pipeline visibility. Worse, you waste time chasing reps to update records instead of giving them good tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We build systems that pull call recordings from your phone system, transcribe them, pull out the important information, and log it automatically into your CRM with the next steps and deal stage. Your reps spend zero time on data entry. You get clean data. Everyone wins.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Operations managers running weekly reports manually
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Every Tuesday morning someone's job is to pull data from your CRM, your accounting software, your project management tool, and your email. They clean it. They format it. They create charts. They put it into a presentation for the leadership meeting. This takes three to four hours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That person could be doing actual operations work. We automate the entire report generation. Systems talk to each other. Data flows. Charts generate themselves. Your leadership team gets the same report but it costs zero manual hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Customer onboarding that's 80 percent manual coordination
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                You close a customer on a Friday. Monday morning someone needs to send onboarding emails, schedule the kickoff call, create project folders, add people to your communication systems, send access links, assign tasks. Then they spend the week chasing down customers who miss a step.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We build the automation once and it runs forever. Customer signs agreement. Automation creates their account, sends welcome emails, schedules their kickoff, sets up folders, sends access, all in the first hour. Your team deals with actual support questions instead of logistics.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Founders spending ten hours a week on coordination work
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                You hired managers and team leads so you could focus on strategy and growth. But you end up spending Monday through Wednesday handling approvals, connecting teams, tracking status, answering the same questions repeatedly. That's time you can't spend on actual growth work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                None of that needs a human. You can automate approval workflows, automatic status updates, automated reminders for pending items. Your job becomes strategy. Coordination happens without you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Finance teams copying numbers between systems every month
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                At the end of every month someone pulls revenue numbers from Stripe and Shopify, manually enters them into your accounting system, creates a P&L sheet, and sends it to leadership. If something was wrong they do it all over again. In December they do it twice because people need updated forecasts mid-month.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We integrate your payment systems and accounting system. Data flows automatically. You can look at real numbers anytime. No manual entry. No delays. No mistakes.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            How we actually work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            This is what sets us apart from other automation consultants. We don't sell hours. We sell completed systems.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                We start with a real diagnostic
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't assume we know the problem. We talk to the people actually doing the work. We watch them work. We see which tasks repeat, where people get frustrated, where errors happen. We look at your systems. We understand what data actually exists and where it lives. Then we write a report showing your top three automation opportunities with rough time and cost estimates for each.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                We design the entire system before building
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You get to see how the automation works. What systems talk to each other. Where decisions get made. What happens if something goes wrong. We don't just build in a black box. You understand the design before we write any code.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                We build, test, and deliver the working system
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build it using your real data. We test it with edge cases. We train your team on how it works and what to do if something breaks. We hand it over and it works. Most projects take one to two weeks from diagnostic to delivery. Bigger integrations take three to four weeks. You get a working system, not recommendations or consulting advice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                We measure what actually happens
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                After the system goes live we track what happens. Did it save the time we predicted. Did anything break. What needs adjustment. We iterate based on real results, not assumptions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Questions we get asked
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                How long does an AI automation project actually take in Austin?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most projects run one to two weeks from diagnostic to delivery. Bigger builds involving multiple system integrations run three to four weeks. Speed depends on how complex your tech stack is and how much custom logic you need, not how many manual steps you currently have. We move fast because we don't overthink the architecture.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Do you work with non-tech companies in Austin?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yeah, we do. We've worked with manufacturing operations in Round Rock, real estate companies, professional services firms, e-commerce shops in East Austin. The automation principles are the same across industries. What changes is the tool stack and the specific integrations. A manufacturing company automates production scheduling. A real estate firm automates lease document generation and tenant communication. The logic is identical.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                What if we don't have the right tools or systems in place?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We help you figure out what you actually need. Sometimes you already have good tools and they just aren't connected. Sometimes you need to add one tool. Rarely do you need to rebuild your entire tech stack. We assess what's worth integrating, what's worth replacing, and what's worth leaving alone. We don't sell you tools you don't need.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Do we have to be physically located in Austin?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No. We work entirely remote with companies across the US and UK. Austin clients get the exact same engagement as our teams in New York, San Francisco, and London. We have video calls, shared documentation, and delivery happens over the same systems. Location doesn't matter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                How do you handle the diagnostic process?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We spend two to three hours with your team asking questions and observing actual workflows. Not asking what you think the problem is, but actually watching people work. We look at which tasks repeat, where people complain about friction, where quality issues show up. From that we write a simple report showing top three automation opportunities and estimated time and cost to fix each one.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Let's talk about your workflow
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Start with a diagnostic. We'll spend time understanding what's actually slowing you down, identify your top three automation opportunities with estimated impact and cost, and you'll know exactly whether automation makes sense for your business. No charge for the diagnostic. No obligation to move forward.
          </p>
          <a
            href="/diagnostic"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-lg"
          >
            Start Your Diagnostic
          </a>
        </section>
      </main>
    </>
  )
}
