import { Mynerve } from "next/font/google";
import Image from "next/image";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { WaitlistForm } from "@/components/waitlist-form";

const cursive = Mynerve({
  subsets: ["latin"],
  weight: "400",
});
const features = [
  {
    name: "Customizable Frontend",
    description:
      "Our platform offers a range of professionally designed frontends that you can easily switch between. Customize every aspect to align with your brand's identity without any coding knowledge.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Affordable Pricing",
    description:
      "We provide high-quality e-commerce solutions at a fraction of the cost of building a custom website from scratch. Enjoy premium features and exceptional support without breaking the bank.",
    icon: LockClosedIcon,
  },
  {
    name: "Self-Hosted and Cloud Options",
    description:
      "Flexibility is at the core of our platform. Choose between a self-hosted solution that gives you full control over your data, or opt for our upcoming cloud-hosted solution that takes care of all the technical aspects.",
    icon: ArrowPathIcon,
  },
  {
    name: "Save Time and Money",
    description:
      "Developing an e-commerce website from the ground up can be time-consuming and expensive. Our platform reduces both time and cost by providing ready-to-use templates and a streamlined setup process.",
    icon: FingerPrintIcon,
  },
  {
    name: "Flexibility",
    description:
      "With our customizable frontends, you have the power to tailor your online store to your specific needs and preferences. Change layouts, colors, fonts, and more with ease.",
    icon: FingerPrintIcon,
  },
  {
    name: "Scalability",
    description:
      "Start small and expand as your business grows. Our platform is built to scale with your needs, ensuring you have the tools to handle increased traffic, a larger product catalog, and more complex operations.",
    icon: FingerPrintIcon,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-24">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-orange-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-center">
              Trusted by 50+ Businesses Already
            </div>
          </div>

          <div className="text-center">
            <h1 className="mt-4 max-w-3xl bg-gradient-to-br from-orange-700 to-orange-950 bg-clip-text pb-4 text-center text-4xl font-bold tracking-tight text-transparent bg-clip-text-gradient sm:text-5xl md:mt-6 md:pb-6 md:text-6xl lg:text-7xl">
              Launch Your Online <br /> Store with Ease
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover cost-effective, customizable, and user-friendly
              e-commerce solutions designed specifically for small to medium
              businesses.
            </p>

            <p
              className={cn(
                "mt-12 text-2xl leading-8 text-primary italic text-green-600",
                cursive.className
              )}
            >
              We will launch soon. Lock down early benefits now!
            </p>
            <div className="mx-auto max-w-sm">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>

      {/* Features and Benefits Section */}
      <div className="relative bg-whites py-12 sm:py-24">
        <div
          className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-0"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#e48602] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-700">
              Stay in Charge
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empower Your E-commerce Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose from customizable frontends, affordable solutions, and
              flexible hosting options tailored to your business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "relative",
                    "rounded-2xl bg-white/50 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_-1px_0_0_rgba(0,0,0,0.1)] backdrop-blur before:absolute before:inset-px before:-z-10 before:shadow-xl before:shadow-black/5 before:[border-radius:calc(theme(borderRadius.2xl)-1px)] sm:p-10"
                  )}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-900 p-2">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#e48602] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* How it works Section */}
      {/* Testimonials */}
      {/* About Us */}

      {/* Join the waitlist */}
      <div className="" id="join-waitlist">
        <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-24 overflow-hidden">
          <div className="relative isolate bg-transparent border border-orange-500 px-6 pb-16 sm:pb-0 sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 border-t-[80px] lg:border-t-[100px] border-t-transparent border-b-[80px] lg:border-b-[100px] border-b-transparent">
            <hr className="border-orange-500 border-t w-[110%] border-l-[50px] border-l-transparent absolute top-0 right-0"></hr>
            <hr className="border-orange-500 border-t w-[110%] border-r-[50px] border-r-transparent absolute bottom-0 left-0"></hr>
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto py-24 lg:py-32 lg:text-left">
              <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-orange-900">
                Boost your sales.
                <br />
                All at an affordable cost.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                Join our waitlist and be the first to try out the product when
                we launch!
              </p>
              <div className="w-full max-w-sm mx-auto flex justify-center">
                <WaitlistForm actionLabel="Join" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
    </>
  );
}
