import useAOS from "../hooks/useAOS";

export default function Contact() {
  useAOS();

  return (
    <section className="py-20 px-4 lg:px-8 max-w-4xl mx-auto bg-white" id="contactus">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold">
          <span className="text-primary">Contact</span> Us
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Have questions or need help? Reach out and our team will assist you shortly.
        </p>
      </div>

      <form className="grid gap-6" data-aos="fade-up">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-primary"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white font-semibold px-6 py-3 rounded-md shadow hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
