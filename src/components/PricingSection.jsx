import { ArrowRight, Check, X } from "lucide-react";
import React from "react";

function PricingSection() {
  return (
    <>
      <main className="w-full h-full mx-auto pt-10 pb-36 px-8">
        <div className="max-w-md mx-auto mb-6  text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
            <span className="text-orange-600">Flexible</span> Plans
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Choose a plan that works best for you and your team.
          </p>
        </div>
        <div className="flex gap-2 flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="w-full flex-1  border border-gray-300  hover:shadow-2xl mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 ">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Basic</span>
                <span>
                  <span className="text-3xl font-bold">Free*</span>
                </span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <X color="red" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <X color="red" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <X color="red" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <X color="red" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
            </ul>
            <button className="flex w-full justify-center hover:bg-orange-600/80 items-center bg-orange-600 rounded-xl py-3 px-2 text-center text-white text-xl">
              <span>Choose Plan</span>
              <ArrowRight />
            </button>
          </div>
          <div className="w-full flex-1 border border-gray-300  hover:shadow-2xl mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 ">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Pro</span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    ₹ 
                  </span>
                  <span className="text-3xl font-bold">499</span>
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <X color="red" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <X color="red" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
            </ul>
            <button className="flex w-full justify-center hover:bg-orange-600/80 items-center bg-orange-600 rounded-xl py-3 px-2 text-center text-white text-xl">
              <span>Choose Plan</span>
              <ArrowRight />
            </button>
          </div>
          <div className="w-full flex-1 border border-gray-300  hover:shadow-2xl mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 ">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Pro Plus</span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    ₹ 
                  </span>
                  <span className="text-3xl font-bold">1299</span>
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <Check color="green" />
                <span className="ml-3">
                  Get started with{" "}
                  <span className="text-black">Lorem, ipsum dolor.</span>
                </span>
              </li>
            </ul>
            <button className="flex w-full justify-center hover:bg-orange-600/80 items-center bg-orange-600 rounded-xl py-3 px-2 text-center text-white text-xl">
              <span>Choose Plan</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default PricingSection;
