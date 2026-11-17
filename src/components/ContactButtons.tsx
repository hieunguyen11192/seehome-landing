import {
  callLabel,
  hasPhone,
  hasZalo,
  telHref,
  zaloHref,
  zaloLabel,
} from '../lib/contact'

type Props = {
  phone: string
  zaloUrl: string
  size?: 'sm' | 'lg'
}

export function ContactButtons({ phone, zaloUrl, size = 'lg' }: Props) {
  const pad =
    size === 'lg' ? 'min-h-11 px-5 py-3 text-base' : 'min-h-11 px-3 py-2 text-sm'
  const base = `${pad} inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`

  const phoneReady = hasPhone(phone)
  const zaloReady = hasZalo(zaloUrl)

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={zaloHref(zaloUrl)}
        className={`${base} bg-accent text-white hover:bg-orange-700`}
        aria-disabled={!zaloReady}
        rel={zaloReady ? 'noopener noreferrer' : undefined}
        target={zaloReady ? '_blank' : undefined}
      >
        {zaloLabel(zaloUrl)}
      </a>
      <a
        href={telHref(phone)}
        className={`${base} border border-border bg-card text-foreground hover:bg-muted`}
        aria-disabled={!phoneReady}
      >
        {callLabel(phone)}
      </a>
    </div>
  )
}
