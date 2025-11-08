import { teamLeaders, teamProfessionals } from "@/data/team";
import { TeamMemberCard } from "@/components/ui/team-member-card";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              CAREERS - JOBS & OPPORTUNITIES
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our mission to transform Africa&apos;s blue economy
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Our Leaders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 rounded-2xl bg-yellow-50 p-8 dark:bg-yellow-950/20">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Our Leaders
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Blue Capital leads the team of Executives, Advisory Partners and Advisors who bring decades of artificial intelligence technology, management consulting, entrepreneurship and investment banking expertise.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              An energised, collaborative team, passionate about transformative deeptech. We dedicate ourselves to be difference-makers. We will not work together, alongside our founders, from seed through to growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamLeaders.map((leader) => (
              <TeamMemberCard
                key={leader.id}
                member={leader}
                variant="leader"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Professionals */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Our Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              Brought together from across industries, we are global leaders in finance, investment, technology, business, law and policy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamProfessionals.map((professional) => (
              <TeamMemberCard
                key={professional.id}
                member={professional}
                variant="professional"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Recent Team Updates
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border-l-4 border-primary bg-card p-6 shadow-lg">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                1. Dr. Dickson Wandeda to lead Blue Capital design of Kenya Government EPZA Feasibility study Usd 2Million project
              </h3>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-card p-6 shadow-lg">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                2. Beatrice Mornya appointed to head Investor Accounts, a subsidiary of Blue Capital
              </h3>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 bg-card p-6 shadow-lg">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                3. Dr. George Karuku joins Blue Capital Board effective 1st November, 2025
              </h3>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 bg-card p-6 shadow-lg">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                4. Blue Capital COO Dan Nguchu to lead Blue Finance strategy with KFS
              </h3>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 bg-card p-6 shadow-lg">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                5. BC appoints Iidah Ooko to spearhead EPZA EIA feasibility
              </h3>
            </div>

            <div className="rounded-lg border-l-4 border-cyan-500 bg-card p-6 shadow-lg">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                6. Felix Kauya joins Blue Capital as Head of Technology
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Join our team
            </h2>
            <p className="mb-8 text-xl font-semibold">
              We are hiring. We must invest to achieve sustainable goals. Our team is growing fast. Come help us save our people and planet.
            </p>
            <button className="rounded-lg bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-black/90 hover:shadow-xl">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
