import { site } from '../data/site'

export function Projects() {
  return (
    <section id="cong-trinh" className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Công trình
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Những không gian SEE HOME đã hoàn thiện
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project, index) => (
            <figure
              key={project.id}
              className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-200 hover:border-accent hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <figcaption className="px-5 py-4 font-heading text-lg font-semibold text-foreground">
                {project.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
