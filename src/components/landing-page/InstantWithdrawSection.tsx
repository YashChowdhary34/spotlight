export default function InstantWithdrawSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="relative w-full max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 transform rotate-[-5deg] transition-transform duration-500 hover:rotate-0">
            <div className="w-full h-full aspect-[1.586/1] bg-gradient-to-r from-white to-teal-400 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-6 left-6">
                <div className="w-10 h-8 bg-gray-200 rounded-md"></div>
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="flex">
                  <div className="w-8 h-8 bg-red-500 rounded-full opacity-90"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full opacity-90 -ml-4"></div>
                </div>
              </div>
              <div className="absolute bottom-10 right-6 text-black font-bold text-2xl">
                Spotlight.
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left text-black">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Get withdraw & deposit instantly
              <span className="block">
                with our <span className="text-lime-400">automatic </span>
                system.
              </span>
            </h2>
            <p className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight text-teal-500">
              <span className="whitespace-nowrap">NO DELAY</span>,{" "}
              <span className="whitespace-nowrap">NO FEES</span>,{" "}
              <span className="whitespace-nowrap">NO HASSLE</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
