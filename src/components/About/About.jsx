import React, { useEffect, useRef, useState } from "react";

// Testimonials data
const testimonials = [
  {
    quote:
      "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
  },
];

// Gap calculator
function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0 });
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const handleResize = () => {
    setDimensions({
      width: containerRef.current?.offsetWidth || 0,
    });
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    intervalRef.current = setInterval(next, 5000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalRef.current);
    };
  }, []);

  const gap = calculateGap(dimensions.width);
  const maxStickUp = gap * 0.8;

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-60 bg-[url('/aboutbg2.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="w-1/3 h-full flex items-center justify-center p-6">
            <div className="text-center">
              <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
                About Us
              </h2>
              <p className="text-white text-lg font-semibold leading-snug">
                YOUR LAUNDRY, OUR PRIORITY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 md:px-12 xl:px-6">
          <div className="space-y-6 md:flex md:gap-10 lg:items-start">
            {/* Images */}
            <div className="relative w-full max-w-md h-96 mx-auto">
              <img
                src="/about1.jpg"
                alt="Background"
                className="absolute top-12 left-12 w-72 h-60 object-cover rounded-lg shadow-lg z-10 transition-transform duration-300 hover:-translate-x-11"
              />
              <img
                src="/about2.jpg"
                alt="Foreground"
                className="absolute top-10 left-48 w-72 h-60 object-cover rounded-lg shadow-xl z-20 transition-transform duration-500 hover:-translate-x-1 hover:-translate-y-11"
              />
            </div>

            {/* Description */}
            <div className="md:w-7/12">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">
                 Our Laundry Service
              </h2>
              <p className="text-blue-600 text-base leading-7">
<p className="text-black-600 text-base leading-7">
  Discover a new level of freshness with our premium laundry services.  
  We combine advanced technology with expert care to treat every garment with precision.  
  Say goodbye to stubborn stains and hello to spotless, soft clothes every time.  
  Our eco-friendly processes protect your fabric, skin, and the environment.  
  Whether it's your daily wear or delicate fabrics, we handle it all professionally.  
  With fast turnarounds and doorstep delivery, convenience is just a call away.  
  Enjoy peace of mind knowing your laundry is in the hands of trained professionals.  
  Experience freshness, hygiene, and care — all under one trusted name.
</p>              </p>
              <p className="mt-4 text-gray-700">
                With our commitment to high hygiene standards and advanced cleaning technology...
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>✅ Eco-friendly detergents that protect your skin and fabrics</li>
                <li>✅ Express delivery and doorstep convenience</li>
                <li>✅ Expert stain removal and fabric-specific treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Heading */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 hover:from-blue-600 hover:to-cyan-400 transition duration-300">
          Testimonials
        </h2>
      </div>

      {/* Testimonial Carousel */}
      <div className="w-full max-w-5xl p-8 mx-auto" ref={containerRef}>
        <div className="grid gap-20 md:grid-cols-2">
          {/* Image Stack */}
          <div className="relative w-full h-96 perspective-[1000px]">
            {testimonials.map((testimonial, index) => {
              const offset =
                (index - activeIndex + testimonials.length) % testimonials.length;
              const isActive = index === activeIndex;
              const zIndex = testimonials.length - Math.abs(offset);
              const scale = isActive ? 1 : 0.85;
              const rotateY =
                offset === 0
                  ? "0deg"
                  : offset === 1 || offset === -2
                  ? "-15deg"
                  : "15deg";
              const translateX =
                offset === 0
                  ? "0%"
                  : offset === 1 || offset === -2
                  ? "20%"
                  : "-20%";
              const translateY =
                offset === 0 ? "0%" : `-${(maxStickUp / 384) * 100}%`; // 384 = 24rem

              return (
                <img
                  key={index}
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="absolute w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    zIndex,
                    transform: `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`,
                    opacity: 1,
                  }}
                />
              );
            })}
          </div>

          {/* Text & Controls */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-black mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-sm text-gray-500 mb-8">
                {testimonials[activeIndex].designation}
              </p>
              <p className="text-lg text-gray-600 leading-7 space-x-1">
                {testimonials[activeIndex].quote.split(" ").map((word, i) => (
                  <span key={i}>{word} </span>
                ))}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={() => {
                  stopAutoplay();
                  prev();
                }}
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5 fill-[#f1f1f7] hover:rotate-[-12deg] transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>

              <button
                onClick={() => {
                  stopAutoplay();
                  next();
                }}
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5 fill-[#f1f1f7] hover:rotate-[12deg] transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
