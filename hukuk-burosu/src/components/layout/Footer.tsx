import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#1C1C2E]/10 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-base font-semibold text-[#1C1C2E]">Yılmaz & Partners</div>
            <div className="mt-1 text-sm text-[#1C1C2E]/60">
              İş hukuku, ticaret hukuku ve dava süreçlerinde uzman temsil
            </div>
          </div>

          <div className="text-sm text-[#1C1C2E]/60">
            © 2026 Tüm hakları saklıdır.
          </div>
        </div>
      </Container>
    </footer>
  );
}