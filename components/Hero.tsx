export default function Hero() {
  return (
    <section className="px-6 py-20 xl:p-28  bg-[url('/hero-bg.webp')] bg-center bg-cover min-h-[100vh]">
      <h1 className="text-h1 font-dynapuff text-primary">
        Fuel Your Fitness. Elevate Your Lifestyle
      </h1>
      <p className="text-p mt-4 max-w-xl mx-auto text-white/80 font-semibold">
        Discover premium fitness gear and lifestyle products tailored for you.
      </p>

      <div className="flex mt-24 w-full justify-center">
        <div className="bg-primary px-3 flex items-center rounded-3xl ">
          <h2 className="font-dynapuff text-card">Coming soon.</h2>
        </div>
      </div>
    </section>
  );
}
