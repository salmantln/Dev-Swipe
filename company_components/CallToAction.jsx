import { CircleBackground } from '@/componentsV2/CircleBackground'
import { Container } from '@/componentsV2/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Integrates with the following ATS:
          </h2>
          {/* <p className="mt-4 text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we’ll send you a tip guaranteed to double your
            first investment.
          </p> */}
          <p className="mt-4 text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and get the perfect developers job for you!
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 justify-center gap-y-4">
          {/* <div className="mt-8 flex justify-center"> */}
            {/* <AppStoreLink color="white" />
            <PlayStoreLink color="white" /> */}
          </div>
        </div>
      </Container>
    </section>
  )
}
