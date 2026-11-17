import { site } from '../data/site'

const icons = [
  <path
    key="check"
    d="M5 13l4 4L19 7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="home"
    d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="shield"
    d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
]

export function ValueStrip() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        {site.values.map((value, index) => (
          <article key={value.id} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-muted text-accent">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {icons[index]}
              </svg>
            </span>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                {value.title}
              </h2>
              <p className="mt-2 leading-7 text-primary">{value.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
