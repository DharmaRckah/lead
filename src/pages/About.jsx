import useAOS from "../hooks/useAOS";

export default function About() {
  useAOS();

  return (
    <section className="py-20 px-4 lg:px-8 max-w-5xl mx-auto bg-white" id="about">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold">
          About <span className="text-primary">Leadkart.ai</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Leadkart.ai is revolutionizing the way businesses acquire and convert leads. Our mission is to automate and optimize lead generation through cutting-edge AI tools and intelligent ad strategies.
        </p>
      </div>
    </section>
  );
}
