
import heroImage from "../assets/heroimg.webp";   // girl + social bubbles
import leftOrange from "../assets/leftOrange.webp";
import rightBlue from "../assets/rightBlue.webp";
import useAOS from "../hooks/useAOS";

export default function Hero() {
  useAOS();

  return (
    <section className="relative overflow-hidden bg-[#f7f9ff] pb-32 pt-24">
      {/* decorative BG images */}
      <img
        src={leftOrange}
        alt=""
        className="pointer-events-none absolute -left-12 top-0 w-80 rotate-12 md:w-[400px] lg:w-[480px] z-0"
      />
      <img
        src={rightBlue}
        alt=""
        className="pointer-events-none absolute -right-32 bottom-0 w-[620px] max-w-none"
      />

      {/* orange translucent blob behind copy */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 -rotate-12 rounded-[3rem] bg-primary opacity-20 blur-2xl" />

      {/* main grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2 lg:px-8">
        {/* text + CTA */}
        <div
          data-aos="fade-up"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Effortless Lead
            <br />
            Generation from Ads
            <br />
            <span className="text-primary">Leadkart.ai</span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-gray-600 lg:mx-0">
            Maximize your advertising ROI with our advanced lead generation
            strategies. Turn clicks into qualified leads seamlessly by
            leveraging targeted campaigns, compelling creatives, and precise
            audience insights. Start capturing high‑quality leads today and grow
            your business with ease!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <a
              href="#discover"
              className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow transition hover:shadow-lg"
            >
              DISCOVER&nbsp;APP&nbsp;NOW
            </a>

            {/* play button */}
            <button className="grid h-14 w-14 place-content-center rounded-full ring-2 ring-primary transition hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-primary"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* hero art */}
        <div
          data-aos="fade-left"
          className="relative z-10 mx-auto w-full max-w-md lg:order-2"
        >
          <img
            src={heroImage}
            alt="Hero with social icons"
            className="w-full object-contain animate-spin-hero"
          />
        </div>
      </div>

      {/* floating discover card */}
      <div
        id="discover"
        data-aos="zoom-in-up"
        className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-primary px-6 py-4 text-center shadow-xl lg:px-10 lg:py-6"
      >
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Ready to boost your leads?
        </h2>
        <p className="mx-auto mt-1 max-w-xs text-sm text-white/90">
          Explore how LeadKart.ai drives real‑time results.
        </p>
        <a
          href="/download"
          className="mt-4 inline-block rounded-md bg-white px-6 py-2 text-sm font-semibold text-primary shadow transition hover:bg-gray-50"
        >
          DOWNLOAD&nbsp;THE&nbsp;APP
        </a>
      </div>
    </section>
  );
}
