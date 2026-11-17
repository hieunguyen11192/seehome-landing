import { site } from '../data/site'

const serviceIcons = [
  <path
    key="build"
    d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-7h6v7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="renovate"
    d="M5 19l5-5M7 9l2-2 8 8-2 2-8-8zM14 6l4-2 2 2-2 4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="interior"
    d="M4 12h16M6 12V7h12v5M7 12v7M17 12v7M9 19h6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="quote"
    d="M7 4h10a2 2 0 012 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 012-2zM9 9h6M9 13h4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
]

export function Services() {
  return (
    <section id="dich-vu" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Dịch vụ
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Giải pháp xây dựng cho từng nhu cầu
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, index) => (
            <article
              key={service.id}
              className="rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:border-accent hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-muted text-accent">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {serviceIcons[index]}
                </svg>
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-primary">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
