import Container from "../layout/Container";
import { mockPracticeAreas } from "../../data/mockPracticeAreas";

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-[#F5F3EF] py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B5934A]">
            Hukuk Alanları
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#1C1C2E] md:text-4xl">
            Yapılandırılmış ve sonuç odaklı hizmet alanları
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockPracticeAreas.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-[#1C1C2E]/8 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            >
              <div className="text-lg font-semibold text-[#1C1C2E]">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-[#1C1C2E]/68">{item.description}</p>
              <a href="/" className="mt-6 inline-flex text-sm font-medium text-[#B5934A]">
                Detayları görüntüle
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}