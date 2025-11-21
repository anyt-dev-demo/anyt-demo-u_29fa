export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Reno: Your Next Desert Adventure",
    excerpt:
      "Discover why Reno, Nevada is becoming one of the most exciting travel destinations in the West. From the Sierra Nevada mountains to world-class dining, explore everything this vibrant city has to offer.",
    date: "November 15, 2024",
    category: "Travel Guides",
  },
  {
    id: "2",
    title: "Hiking Paradise: Best Trails Near Reno",
    excerpt:
      "Lace up your boots and explore some of the most stunning hiking trails in the Reno area. From easy day hikes to challenging mountain expeditions, find the perfect trail for your adventure.",
    date: "November 8, 2024",
    category: "Outdoor Adventures",
  },
  {
    id: "3",
    title: "Where to Eat in Reno: Local Restaurants You Must Try",
    excerpt:
      "Reno's food scene is booming with innovative restaurants and local favorites. Discover the best places to eat, from farm-to-table dining to authentic international cuisine.",
    date: "October 28, 2024",
    category: "Food & Dining",
  },
  {
    id: "4",
    title: "Lake Tahoe Day Trip from Reno: A Complete Guide",
    excerpt:
      "Just one hour from Reno, Lake Tahoe offers stunning natural beauty and endless activities. Learn how to plan the perfect day trip or weekend getaway to this iconic destination.",
    date: "October 15, 2024",
    category: "Day Trips",
  },
  {
    id: "5",
    title: "Best Time to Visit Reno: A Month-by-Month Guide",
    excerpt:
      "Planning your Reno trip? Find out which season is best for your travel style, from summer outdoor adventures to winter activities and everything in between.",
    date: "October 1, 2024",
    category: "Travel Planning",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Reno Travel Blog
          </h1>
          <div className="flex gap-6">
            <a
              href="/"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-16 sm:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Explore Reno, Nevada
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Welcome to your ultimate guide for traveling to Reno, Nevada.
              Discover hidden gems, outdoor adventures, local cuisine, and
              everything you need to plan your perfect Reno getaway.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Latest Articles
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                        {post.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-50">
                      {post.title}
                    </h4>
                    <p className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {post.date}
                      </span>
                      <a
                        href={`/blog/${post.id}`}
                        className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 px-6 py-16 dark:bg-zinc-950 sm:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Ready to Plan Your Reno Adventure?
            </h3>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Subscribe to our blog for the latest travel tips, hidden gems, and
              insider recommendations for Reno.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/subscribe"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800 sm:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© 2024 Reno Travel Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
