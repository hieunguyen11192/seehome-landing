import { site } from '../data/site'

export function Process() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Quy trình
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Từng bước rõ ràng đến khi bàn giao
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {site.process.map((step, index) => (
            <li
              key={step.id}
              className="relative rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:border-accent hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-heading text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-primary">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
