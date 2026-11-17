import { site } from '../data/site'
import { ContactButtons } from './ContactButtons'

const navItems = [
  { href: '#dich-vu', label: 'Dịch vụ' },
  { href: '#cong-trinh', label: 'Công trình' },
  { href: '#lien-he', label: 'Liên hệ' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur">
      <nav
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Điều hướng chính"
      >
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-heading text-xl font-bold tracking-wide text-foreground cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {site.brandName}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:block">
          <ContactButtons phone={site.phone} zaloUrl={site.zaloUrl} size="sm" />
        </div>
      </nav>
    </header>
  )
}
