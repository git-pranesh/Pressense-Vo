import Link from 'next/link'

const faqs = [
  {
    q: 'What is OpenAI API integration?',
    a: "OpenAI API integration is the process of connecting OpenAI's language models (GPT-4o, GPT-4o mini, etc.) to a business application, workflow, or internal tool. A developer sends a prompt to the API and receives a structured response. Businesses use this to build conversational interfaces, automate content generation, extract structured data, and power AI-assisted decision-making — without training a model from scratch.",
  },
  {
    q: 'How much does OpenAI API integration cost?',
    a: "Pressense OpenAI integrations start from $2,000 for a focused single-use-case build (e.g. a chat assistant, email classifier, or data extractor). Custom multi-model applications start from $5,000. You also pay OpenAI directly for API usage, which is token-based. GPT-4o costs approximately $5 per million input tokens and $15 per million output tokens. Most business integrations at standard volumes cost under $200/month in API fees.",
  },
  {
    q: 'What is the difference between the OpenAI API and ChatGPT?',
    a: "ChatGPT is a consumer product. The OpenAI API is a developer interface. ChatGPT has no memory between sessions (without plugins), no access to your data, and no way to guarantee consistent output format. The API lets you define a system prompt, connect to your data sources, enforce output structure, and build a custom UI. The experience your users get from a custom OpenAI integration is completely different from ChatGPT.",
  },
  {
    q: 'What is function calling in OpenAI?',
    a: "Function calling (now called 'tool use') lets you define a set of actions the model can invoke — like querying a database, calling an API, or running a calculation. You define the function signatures; the model decides when to call them based on the user's input. This is what enables agentic workflows: the model can take multi-step actions to complete a task rather than just generating text.",
  },
  {
    q: 'Can OpenAI read images and documents?',
    a: "Yes. GPT-4o accepts image inputs via the API — you can send photos, screenshots, scanned documents, and diagrams. For PDFs and longer documents, we extract the text first and send it with the prompt. For OCR-heavy workflows (handwritten notes, printed forms), we can combine OpenAI with specialised vision models.",
  },
  {
    q: 'How do you prevent hallucinations in an OpenAI integration?',
    a: "Hallucinations are most common when the model is asked to recall facts it was not trained on. We prevent them by grounding the model in your data: we retrieve relevant documents from your knowledge base and include them in the prompt (Retrieval-Augmented Generation). The model answers only from what you provide. When the answer is not in the source documents, the model says so. This is a design choice, not a limitation.",
  },
  {
    q: "Should I use OpenAI or Claude for my project?",
    a: "It depends on the task. OpenAI GPT-4o is better for conversational UX, image input, and tool calling. Claude is better for long-document analysis, nuanced reasoning, and tasks requiring careful instruction-following. Many production systems use both. We assess your specific use case in the diagnostic and recommend the right model — we have no loyalty to either provider.",
  },
]

export function OpenAIFaqSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-14 leading-tight">
          OpenAI API integration questions
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}>
              <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-base text-muted-foreground mb-4">
            Not sure whether OpenAI or another model is right for your use case?
          </p>
          <Link href="/ai-tools-we-use" className="text-primary hover:underline text-sm font-medium">
            See the full Pressense AI tool stack
          </Link>
        </div>
      </div>
    </section>
  )
}
