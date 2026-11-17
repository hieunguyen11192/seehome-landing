import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-sm text-primary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-heading text-lg font-bold tracking-wide text-foreground">
          {site.brandName}
        </p>
        <p>{site.tagline}</p>
        <p>© {new Date().getFullYear()} {site.brandName}</p>
      </div>
    </footer>
  )
}
