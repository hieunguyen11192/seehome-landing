export type ServiceItem = {
  id: string
  title: string
  description: string
}

export type ProcessStep = {
  id: string
  title: string
  description: string
}

export type ProjectItem = {
  id: string
  title: string
  image: string
}

export type SiteConfig = {
  brandName: string
  tagline: string
  headline: string
  subheadline: string
  phone: string
  zaloUrl: string
  values: { id: string; title: string; description: string }[]
  services: ServiceItem[]
  process: ProcessStep[]
  projects: ProjectItem[]
  heroImage: string
}
