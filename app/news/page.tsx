import { newsArticles } from "@/data/news";
import { NewsGrid } from "@/components/ui/news-grid";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              NEWS - THE LATEST FROM BLUE CAPITAL
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest announcements, partnerships, investments, and impact stories
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Latest News
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our recent announcements, partnerships, and achievements in the blue economy
            </p>
          </div>

          <NewsGrid articles={newsArticles} columns={3} />
        </div>
      </section>
    </main>
  );
}
