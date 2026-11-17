import { site } from '../data/site'
import { ContactButtons } from './ContactButtons'

export function CtaBand() {
  return (
    <section id="lien-he" className="scroll-mt-20 bg-foreground py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
            Liên hệ SEE HOME
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Sẵn sàng trao đổi về ngôi nhà của bạn?
          </h2>
          <p className="mt-4 leading-7 text-slate-200">
            Gửi nhu cầu thiết kế, xây mới hoặc cải tạo để SEE HOME tư vấn phương án phù hợp.
          </p>
        </div>
        <ContactButtons phone={site.phone} zaloUrl={site.zaloUrl} />
      </div>
    </section>
  )
}
