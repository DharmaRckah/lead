import React from "react";
import useAOS from "../hooks/useAOS";

const services = [
  {
    title: "Campaign Management",
    description:
      "Optimize and manage ad campaigns across platforms with precision targeting and data-driven decisions.",
  },
  {
    title: "Lead Qualification",
    description:
      "Filter and validate high-quality leads to maximize your conversion potential and sales effectiveness.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Get deep insights and real-time analytics to refine marketing strategies and ROI tracking.",
  },
];

export default function Services() {
  useAOS();

  return (
    <section
      className="bg-white py-20 px-4 lg:px-8 max-w-7xl mx-auto"
      id="service"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We offer end-to-end solutions to drive better leads, higher
          engagement, and smarter campaign performance.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
