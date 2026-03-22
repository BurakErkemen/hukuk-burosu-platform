import Container from "../layout/Container";
import { mockArticles } from "../../data/mockArticles";

export default function FeaturedArticles() {
  return (
    <section id="articles" className="bg-[#F5F3EF] py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B5934A]">
              Makaleler
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#1C1C2E] md:text-4xl">
              Güncel hukuki değerlendirmeler
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {mockArticles.map((article) => (
            <article key={article.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="h-44 rounded-2xl bg-[#1C1C2E]" />
              <h3 className="mt-5 text-xl font-semibold text-[#1C1C2E]">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#1C1C2E]/68">{article.excerpt}</p>
              <a href="/" className="mt-6 inline-flex text-sm font-medium text-[#B5934A]">
                Yazıyı oku
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}