import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote:
      "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop"
  }
];

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

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0 });
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const handleResize = () => {
    setDimensions({
      width: containerRef.current?.offsetWidth || 0
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
    <div className="w-full max-w-5xl p-8" ref={containerRef}>
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
              offset === 0 ? "0%" : offset === 1 || offset === -2 ? "20%" : "-20%";
            const translateY =
              offset === 0
                ? "0%"
                : `-${(maxStickUp / 384) * 100}%`; // 384 = 24rem

            return (
              <img
                key={index}
                src={testimonial.src}
                alt={testimonial.name}
                className="absolute w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  zIndex,
                  transform: `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`,
                  opacity: 1
                }}
              />
            );
          })}
        </div>

        {/* Text & Buttons */}
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
                <span
                  key={i}
                  className="inline-block opacity-0 translate-y-2 blur-sm animate-fadeInWord"
                  style={{ animationDelay: `${i * 20}ms` }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={() => {
                stopAutoplay();
                prev();
              }}
              className="w-7 h-7 rounded-full bg-black flex items-center justify-center hover:bg-blue-500"
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
              className="w-7 h-7 rounded-full bg-black flex items-center justify-center hover:bg-blue-500"
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
  );
};

export default TestimonialCarousel;
