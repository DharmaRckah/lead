import useAOS from "../hooks/useAOS";

export default function Download() {
  useAOS();

  return (
    <section
      className="py-20 px-4 lg:px-8 max-w-7xl mx-auto bg-primary text-white rounded-xl shadow-lg"
      id="download"
      data-aos="fade-up"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Download the Leadkart App</h2>
        <p className="text-white/90 mb-8">
          Take your lead generation on the go! Get the power of Leadkart.ai in your pocket and never miss a lead again.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Download Now
        </a>
      </div>
    </section>
  );
}
