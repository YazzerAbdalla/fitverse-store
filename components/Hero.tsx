export default function Hero() {
  return (
    <section className="bg-[url('/hero-bg.webp')] bg-center bg-cover min-h-[100vh] backdrop-filter backdrop-blur-lg back w-full h-full">
      <div className=" px-6 py-20 xl:p-28  backdrop-blur-[2px] bg-black/40 w-full h-[100vh]">
        <h1 className="text-h1 font-dynapuff text-primary">
          Fuel Your Fitness<span className="text-accent">.</span> Elevate Your
          Lifestyle
        </h1>
        <p className="text-p mt-4 max-w-xl  text-white/80 font-semibold">
          Discover premium fitness gear and lifestyle products tailored for you.
        </p>
        <div className="flex mt-24 w-full justify-center">
          <div className="bg-primary px-3 flex items-center rounded-3xl ">
            <h2 className="font-dynapuff text-card">Coming soon.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
