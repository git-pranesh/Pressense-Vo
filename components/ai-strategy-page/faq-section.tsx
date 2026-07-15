import { FAQSection } from '@/components/faq-section'

const faqs = [
  {
    question: 'What is AI strategy consulting?',
    answer:
      'AI strategy consulting is a structured engagement that maps your existing business operations to specific AI applications, prioritises them by ROI and implementation readiness, and produces a phased roadmap your team can execute. At Pressense, every strategy engagement includes at least two working pilots built by us, not just a document. The goal is a business that runs measurably faster or cheaper by the end of week four.',
  },
  {
    question: 'How much does AI strategy consulting cost?',
    answer:
      'A focused AI strategy sprint starts from $1,500 and takes two weeks to deliver an opportunity map and roadmap. A strategy-plus-pilots engagement starts from $2,500 and takes four weeks, ending with two working AI systems your team uses from day one. Monthly retainers start from $1,500 for ongoing builds and optimisation. Enterprise firms charge $25,000 to $250,000 for strategy decks. We charge less and include the build.',
  },
  {
    question: 'What is the difference between AI strategy and AI implementation?',
    answer:
      'AI strategy identifies which problems are worth solving with AI and in what order. AI implementation is the act of building those solutions. Most firms sell strategy without implementation, which means you pay for a plan and then have to find someone else to build it. Pressense does both in the same engagement. The strategy sprint identifies the top five use cases. The build phase turns the top two into working systems before the engagement ends.',
  },
  {
    question: 'How do I know if my business is ready for AI?',
    answer:
      'Readiness comes down to four factors: your data is clean and accessible, your processes are documented well enough for a new hire to follow, at least one person on your team will own the AI outcome, and you are not adding AI on top of fundamentally broken software. Most businesses are ready for at least two to three use cases even if they are not ready for a full transformation. Our 30-minute diagnostic identifies exactly where you stand across all four dimensions.',
  },
  {
    question: 'What is the difference between AI and automation?',
    answer:
      'Automation handles tasks with fixed rules: if this input arrives, perform this action. It is consistent, cheap, and does not learn. AI handles tasks requiring judgement: summarising a document, deciding which leads to prioritise, drafting content that matches a specific tone. For most growing businesses, the right answer is both. Automation for rule-based repetitive work, AI for tasks that previously required a person to think. The strategy engagement maps which is which for your specific workflows.',
  },
  {
    question: 'How long does an AI strategy engagement take?',
    answer:
      'A strategy sprint takes two weeks: one week of diagnosis and one week of roadmap production. A strategy-plus-pilots engagement takes four weeks: two weeks of strategy and two weeks of building the first two pilots. Monthly retainers run on a rolling basis with two to three new builds delivered each month. All engagements start with a 30-minute diagnostic session that costs nothing.',
  },
  {
    question: 'Do you work with businesses outside the United States?',
    answer:
      'Yes. All Pressense engagements are remote-first. We work with founder-led businesses across the United States, the United Kingdom, Australia, and Canada. The diagnostic call, strategy sessions, and pilot reviews all happen over video. The build work is async. Time zones have never prevented a successful engagement.',
  },
]

export function AIStrategyFAQ() {
  return <FAQSection headline="Common questions about AI strategy consulting" faqs={faqs} />
}
