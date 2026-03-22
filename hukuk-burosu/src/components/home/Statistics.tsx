import Container from "../layout/Container";
import { mockStats } from "../../data/mockStats";

export default function Statistics() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {mockStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl border border-[#1C1C2E]/8 bg-[#F5F3EF] p-6"
            >
              <div className="text-4xl font-semibold text-[#B5934A]">{stat.value}</div>
              <div className="mt-2 text-sm text-[#1C1C2E]/65">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}