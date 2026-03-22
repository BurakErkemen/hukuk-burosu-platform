import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F5F3EF]/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight text-[#1C1C2E]">
          Yılmaz & Partners
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#practice-areas" className="text-sm text-[#1C1C2E]/80 hover:text-[#1C1C2E]">
            Hukuk Alanları
          </a>
          <a href="#articles" className="text-sm text-[#1C1C2E]/80 hover:text-[#1C1C2E]">
            Makaleler
          </a>
          <a href="#contact" className="text-sm text-[#1C1C2E]/80 hover:text-[#1C1C2E]">
            İletişim
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-[#1C1C2E] px-4 py-2 text-sm font-medium text-white"
        >
          Danışmanlık Talebi
        </a>
      </Container>
    </header>
  );
}