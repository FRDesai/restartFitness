"use client";

import Image from "next/image";
import { Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 animate-zoom">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Logo (top-left) */}
      <div className="absolute top-10 left-15 text-white flex items-center gap-2 z-20">
        <Dumbbell size={32} />
        <span className="text-xl font-bold text-yellow-400">Restart Fitness</span>
      </div>

      {/* Content Split (Left + Right) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center min-h-screen text-white px-8 md:px-16 pb-10">
        {/* Left Side Content */}
        <div className=" flex flex-col items-start text-left max-w-lg space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your{" "}
            <span className="text-yellow-400 drop-shadow-lg">Body</span> 
            and <span className="text-yellow-400 drop-shadow-lg">Mind</span>
          </h1>
          <p className="text-lg md:text-xl">
            Achieve your <span className="font-semibold text-yellow-400">fitness goals</span> with expert
            guidance and a community that drives results.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
            Join Now
          </button>
        </div>

        {/* Right Side Content */}
        <div className="hidden md:flex flex-col items-end text-right max-w-lg space-y-6 animate-fade-up delay-300">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase border-4 border-yellow-400 p-4 rounded-lg shadow-lg">
            Be <span className="text-yellow-400">Stronger</span>
          </h2>
          <p className="text-lg md:text-xl max-w-md leading-relaxed">
            Unlock your <span className="text-yellow-400 font-bold">potential</span>, push past limits, and
            become the best version of yourself.
          </p>
          {/* <h3 className="text-2xl md:text-4xl font-bold bg-yellow-400 text-black px-6 py-2 rounded-md shadow-md">
            Start Today 🚀
          </h3> */}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx global>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-zoom {
          animation: zoom 60s ease-in-out infinite alternate;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
