import CompanyInfoModal from "../modal/Modal";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const HeroCompany = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="">
        <div className="relative  px-6 pt-14 lg:px-8">
          {/* <div classNameName="relative isolate px-6 pt-14 lg:px-8"> */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-15 sm:py-11 lg:py-30">
            {/* <div classNameName="hidden sm:mb-8 sm:flex sm:justify-center">
              <div classNameName="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-200/10 hover:ring-gray-400/20">
                Announcing our next round of funding.{" "}
                <a href="#" classNameName="font-semibold text-indigo-200">
                  <span classNameName="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-400 sm:text-6xl">
                Your new hire within reach!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Showcase your unique workplace culture, effortlessly review
                matches for each job opening, schedule interviews seamlessly,
                and hire top talent efficiently.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <CompanyInfoModal />
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>

          
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCompany;
