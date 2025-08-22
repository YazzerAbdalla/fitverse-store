import Link from "next/link";
import React from "react";
export default function About() {
  return (
    <section id="about" className="relative bg-card py-20 px-6 xl:px-28">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2 font-dynapuff text-primary mb-6">
          About <span className="text-accent">Me</span>
        </h2>

        <p className="text-p text-gray-700 leading-relaxed mb-6">
          Hi, I’m{" "}
          <span className="font-semibold text-primary">Yasser Abdalla</span>, a
          passionate <span className="font-medium">Frontend Developer</span>
          and fitness enthusiast. This project is a blend of my love for{" "}
          <span className="font-medium">technology</span>
          and <span className="font-medium">healthy living</span>.
        </p>

        <p className="text-p text-gray-700 leading-relaxed mb-8">
          If you enjoyed exploring this page, you might also like checking out
          my other work. I’ve built a variety of{" "}
          <span className="font-medium">web apps, dashboards, and tools</span> —
          all of which you can find in my portfolio.
        </p>

        <Link
          href="https://yasser-abdalla.vercel.app/"
          target="_blank"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-primary/90 transition"
        >
          Visit My Portfolio 🚀
        </Link>
      </div>
    </section>
  );
}
