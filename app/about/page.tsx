import Image from "next/image";
import { companyMission, companyPurpose, companyValues } from "@/data/values";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              WHY DO WE EXIST - ABOUT US
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading Africa's blue economy transformation through innovative financial solutions
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* About Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl bg-card p-8 shadow-xl lg:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Blue Capital is a leading Africa-focused firm committed to advancing the blue economy through innovative investment solutions. We provide a comprehensive suite of financial advisory services, including strategic planning, business plan development, financial model creation, due diligence, valuation advisory, feasibility studies, and restructuring. With decades of experience, we deliver tailored, end-to-end project and corporate finance advisory support, enabling public and private sector clients across Africa to design and implement transformative transactions and investment strategies. Our expertise empowers clients to raise capital, develop financing strategies, and execute high-impact blue economy investment opportunities, fostering sustainable value creation in critical blue economy sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 rounded-2xl bg-blue-50 p-8 dark:bg-blue-950/20 lg:p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                {companyMission.statement}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {companyMission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide our work and drive our impact
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {companyValues.map((value) => (
              <Card
                key={value.id}
                className="group relative overflow-hidden border-2 border-transparent p-8 transition-all duration-300 hover:border-primary hover:shadow-xl"
              >
                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:scale-150" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              {companyPurpose.statement}
            </h2>
            <p className="text-xl font-semibold leading-relaxed">
              {companyPurpose.description}
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                alt="Blue economy worker"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Blue economy innovation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Blue economy collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
