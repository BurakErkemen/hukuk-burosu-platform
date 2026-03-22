import Container from "../layout/Container";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#1C1C2E] py-20 text-white">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B5934A]">
              İletişim
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Sürecinizi birlikte değerlendirelim
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              Uyuşmazlığın niteliğine göre ön değerlendirme, sözleşme incelemesi veya dava
              stratejisi planlaması için bizimle iletişime geçin.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@hukukburosu.com"
                className="rounded-xl bg-[#B5934A] px-6 py-3 font-medium text-[#1C1C2E]"
              >
                E-posta Gönder
              </a>
              <a
                href="tel:+905551112233"
                className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white"
              >
                Telefonla Ulaş
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}