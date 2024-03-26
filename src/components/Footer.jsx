import React from "react";

export function Footer() {
  return (
    <>
      <hr className="mt-20" />
      <section className="relative overflow-hidden bg-white py-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <div className="inline-flex items-center">
                <span className="ml-4 text-2xl text-orange-600 font-bold">Lorem.</span>
              </div>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <a
                    className="font-medium text-gray-600 hover:text-gray-700"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="font-medium text-gray-600 hover:text-gray-700"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="font-medium text-gray-600 hover:text-gray-700"
                    href="#"
                  >
                    Return Policy
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="font-medium text-gray-600 hover:text-gray-700"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
