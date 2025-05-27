import Image from "next/image";
import PhoneImage from "@/assets/landing-page/noChecksPhoneMockup.png";

export default function NoChecksSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Counter text */}
      <div className="text-center mb-6">
        <p className="text-lime-400 text-sm md:text-base tracking-wider">
          400,000 ACCOUNTS & COUNTING
        </p>
      </div>

      {/* Main heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          No hidden fees. No additional checks.
        </h2>
        <h3 className="text-base md:text-2xl lg:text-3xl font-normal">
          No more barriers to building passive income.
        </h3>
      </div>

      {/* Main content with phone and features */}
      <div className="max-w-6xl mx-auto relative">
        {/* Phone mockup - centered */}
        <div className="flex justify-center mb-8 md:mb-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center z-10 transform transition-transform duration-500 hover:scale-105">
          <div className="w-64 md:w-72 lg:w-80">
            <Image
              src={PhoneImage}
              alt="Sable banking app interface"
              width={300}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {/* Feature 1 - Top Left */}
          <div className="md:pr-16 lg:pr-24 md:text-right md:self-start transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex md:flex-row-reverse items-start mb-3">
              <div className="bg-black p-1 rounded-full mr-3 md:mr-0 md:ml-3">
                <svg
                  className="w-8 h-8 text-lime-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                  />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                Get a secured credit card and bank account in 5 minutes.
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              No credit history, credit check, or minimum deposit required.
            </p>
          </div>

          {/* Feature 2 - Top Right */}
          <div className="md:pl-16 lg:pl-24 md:self-start transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-start mb-3">
              <div className="bg-black p-1 rounded-full mr-3">
                <svg
                  className="w-8 h-8 text-lime-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Build your U.S. credit</h3>
            </div>
            <p className="text-sm text-gray-400">
              We believe in forming positive habits. Build your U.S. credit with
              Sable
            </p>
          </div>

          {/* Feature 3 - Bottom Left */}
          <div className="md:pr-16 lg:pr-24 md:text-right md:self-end transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex md:flex-row-reverse items-start mb-3">
              <div className="bg-black p-1 rounded-full mr-3 md:mr-0 md:ml-3">
                <svg
                  className="w-8 h-8 text-lime-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M5 10H19" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                The only premium card for building credit.
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              2% unlimited cash back on your favorite brands, 2x first year cash
              back match, premium benefits and more!
            </p>
          </div>

          {/* Feature 4 - Bottom Right */}
          <div className="md:pl-16 lg:pl-24 md:self-end transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-start mb-3">
              <div className="bg-black p-1 rounded-full mr-3">
                <svg
                  className="w-8 h-8 text-lime-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M18 20C18 16.6863 15.3137 14 12 14C8.68629 14 6 16.6863 6 20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">
                Bank like a global citizen with Sable.
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Start building credit before you even enter the country. Non-U.S.
              citizens can apply with their passport and visa.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="mt-16 border-t border-gray-800 max-w-6xl mx-auto"></div>
    </section>
  );
}
