import { site } from '../data/site'
import { ContactButtons } from './ContactButtons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[70vh] overflow-hidden bg-muted md:min-h-[88vh]"
    >
      <img
        src={site.heroImage}
        alt="Công trình SEE HOME"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/65" />

      <div className="mx-auto flex w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-orange-100">
            {site.tagline}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            {site.subheadline}
          </p>
          <div className="mt-8">
            <ContactButtons phone={site.phone} zaloUrl={site.zaloUrl} />
          </div>
        </div>
      </div>
    </section>
  )
}
