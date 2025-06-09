import useAOS from "../hooks/useAOS";

export default function Blog() {
  useAOS();

  const posts = [
    {
      title: "Maximizing Ad ROI with Leadkart.ai",
      excerpt: "Learn how our platform optimizes your advertising strategy to bring in high-quality leads.",
    },
    {
      title: "5 Proven Lead Generation Tactics",
      excerpt: "Explore top-performing tactics used by marketers to grow their business faster.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto bg-white" id="blog">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold">
          Latest <span className="text-primary">Blog Posts</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stay up to date with trends, tips, and insights in digital marketing and lead generation.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
