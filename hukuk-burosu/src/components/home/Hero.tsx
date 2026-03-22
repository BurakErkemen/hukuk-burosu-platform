import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1C1C2E] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,147,74,0.22),transparent_30%)]" />
      <Container className="relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <div className="inline-flex rounded-full border border-[#B5934A]/30 bg-[#B5934A]/10 px-4 py-1 text-sm text-[#F5F3EF]">
            Güvenilir temsil · Stratejik yaklaşım
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Hukuki süreçleri
            <span className="block text-[#B5934A]">daha net, daha kontrollü</span>
            yönetin.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">
            İş hukuku, ticaret hukuku ve sözleşme süreçlerinde müvekkillerimize ölçülebilir,
            sürdürülebilir ve sonuç odaklı hukuki danışmanlık sunuyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#practice-areas"
              className="rounded-xl bg-[#B5934A] px-6 py-3 font-medium text-[#1C1C2E]"
            >
              Hukuk Alanlarını İncele
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <div className="grid gap-4">
            <div className="rounded-2xl bg-white/6 p-5">
              <div className="text-sm text-white/60">Öne çıkan hizmet</div>
              <div className="mt-2 text-2xl font-semibold text-[#B5934A]">İşçilik Alacağı Hesaplama</div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Kıdem, ihbar ve ilgili alacak kalemleri için dinamik ve güncellenebilir hesaplama altyapısı.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 text-[#1C1C2E]">
                <div className="text-sm text-[#1C1C2E]/60">Yaklaşım</div>
                <div className="mt-2 text-lg font-semibold">Önleyici hukuk</div>
              </div>

              <div className="rounded-2xl bg-[#B5934A] p-5 text-[#1C1C2E]">
                <div className="text-sm text-[#1C1C2E]/70">Odak</div>
                <div className="mt-2 text-lg font-semibold">Kurumsal güven</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}