export function GtmContentProblemsSection() {
  const problems = [
    {
      heading: 'What is a GTM content system and how is it different from a content strategy?',
      body1:
        'A content strategy is a document that describes what you plan to publish and why. A GTM content system is the operational infrastructure that makes the plan run without constant founder input. The difference is the difference between a recipe and a kitchen. A strategy tells you what to cook. A system is the mise en place, the workflows, the distribution triggers, the CRM tagging, and the measurement framework that mean content goes from brief to published to followed-up without every step requiring a decision.',
      body2:
        'Most early-stage SaaS companies have a content strategy but no content system. The strategy says "publish two blog posts per month and distribute on LinkedIn." The system defines what the posts are, who briefs them, who writes them, how they are reviewed, what happens when they go live (email newsletter, LinkedIn post, outbound sequence trigger), and how performance gets reviewed. The system is what makes the strategy real.',
    },
    {
      heading: 'Why does founder-led content stop working at a certain scale?',
      body1:
        'Founder-led content works because it is specific, opinionated, and credible. The founder knows the domain. The audience trusts the founder. The posts get engagement because they are real. The problem is throughput and sustainability. A founder running sales, product, and fundraising simultaneously cannot maintain a consistent content cadence. The posts become irregular. The audience decays. The pipeline it was generating stops.',
      body2:
        'The transition from founder-led to system-led is not about removing the founder from content. It is about building infrastructure that captures the founder\'s insight and distributes it without requiring the founder to be the bottleneck. The system handles the brief, the writing, the editing, the publishing, and the distribution. The founder reviews and approves. The cadence holds even in a busy quarter.',
    },
    {
      heading: 'How do you connect content to pipeline in a CRM?',
      body1:
        'Most SaaS companies track content performance in Google Analytics and track pipeline in Salesforce or HubSpot. The two systems do not talk. A deal closes and nobody knows whether the buyer ever read a piece of content, clicked a LinkedIn post, or came through an organic search. Without that attribution, you cannot make investment decisions about content with confidence.',
      body2:
        'The attribution layer is a practical configuration problem, not a technical one. UTM parameters on every content link, first-touch and last-touch attribution in the CRM, and a content tag on every contact who converted through a content channel. Once these are configured, your monthly report shows not just how many people read the post but how many of them ended up in a demo and how many of those demos closed. This is the measurement layer that makes a GTM content system defensible to a board.',
    },
    {
      heading: 'What is the right content cadence for a B2B SaaS company at Series A?',
      body1:
        'The research consistently shows that frequency matters less than quality and consistency. A B2B SaaS company at Series A with a content team of one to two people can sustain two substantive long-form pieces per month (blog posts or pillar articles), one to two sales enablement pieces per quarter (case studies, comparison pages, use-case pages), and weekly LinkedIn distribution repurposed from the long-form content. This is achievable and generates compounding returns over twelve to eighteen months.',
      body2:
        'The mistake is trying to publish five times a week with thin content because someone read that frequency improves SEO. Google does not reward frequency. It rewards depth, relevance, and authority. Two 2,000-word pieces per month that fully cover their topic outperform ten 400-word posts that cover nothing in depth. The system we build is designed for quality at a cadence that a lean team can sustain without burning out.',
    },
    {
      heading: 'How do we build topical authority fast without a large content team?',
      body1:
        'Topical authority is built through coverage depth, not publishing volume. Google and AI search engines assess whether a site addresses every major question and subtopic within a category. A site with fifteen well-structured articles covering a topic comprehensively signals more authority than one with fifty thin posts that each touch the surface. The fastest path to topical authority for a lean team is the cluster model: one pillar page per category, eight to twelve cluster articles per pillar, all interlinked.',
      body2:
        'A single pillar-plus-cluster build for one topic category takes four to six weeks to research, write, publish, and interlink. After that, one new cluster article per month maintains and extends the authority. This is manageable for a single content person or a founder with a writing partner. The compounding starts within three to four months of the cluster going live and grows without proportional additional investment.',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          The questions every founder asks before building a GTM content system
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          These are the questions every B2B SaaS founder asks before committing to a content system. We answer them directly here.
        </p>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.heading}
              className={`py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-xl font-medium text-foreground mb-4 text-balance">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.body1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
