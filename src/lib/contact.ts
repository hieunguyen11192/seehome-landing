function filled(value: string): boolean {
  return value.trim().length > 0
}

export function hasPhone(phone: string): boolean {
  return filled(phone)
}

export function hasZalo(zaloUrl: string): boolean {
  return filled(zaloUrl)
}

export function telHref(phone: string): string {
  return hasPhone(phone) ? `tel:${phone.trim()}` : '#lien-he'
}

export function zaloHref(zaloUrl: string): string {
  return hasZalo(zaloUrl) ? zaloUrl.trim() : '#lien-he'
}

export function callLabel(phone: string): string {
  return hasPhone(phone) ? 'Gọi điện' : 'Gọi điện · Cập nhật sớm'
}

export function zaloLabel(zaloUrl: string): string {
  return hasZalo(zaloUrl) ? 'Zalo' : 'Zalo · Cập nhật sớm'
}
