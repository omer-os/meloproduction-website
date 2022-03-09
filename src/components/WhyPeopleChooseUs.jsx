import React from "react";

export default function WhyPeopleChooseUs() {
  return (
    <div className="flex py-5 md:px-[4em] sm:px-[3em] px-[2em] w-full flex-col">
      <div className="flex flex-col mx-auto lg:w-11/12">
        <h1 className="text-2xl  sm:text-left text-center font-bold">
          Why People Choose Us?
        </h1>
        <p className="text-gray-600 mt-3 sm:text-left text-center md:w-8/12 text-lg">
          In a market where everything moves quickly, and where businesses are
          opening everyday, staying ahead can be challenging. Your brand can
          move on its own in such a market, however, if you cannot let others
          move faster than you, then you will need us.
        </p>
      </div>

      <div
        className="grid mx-auto mt-[20px] 
      
        md:grid-cols-2
        sm:grid-cols-1
        gap-4 
        lg:w-11/12 my-3"
      >
        <div className="reason bg-gray-100 sm:sm:px-5 gap-3 items-center flex">
          <div className="text-[120px] font-extrabold text-gray-400">1</div>
          <div className="right flex flex-col">
            <h3 className="sm:text-lg font-bold">Dynamic Marketing</h3>
            <p className="sm:text-md text-sm text-gray-500">
              In order for your brand to be well-known, it should connect to
              people. We help you in creating a bond between your brand and your
              customers.
            </p>
          </div>
        </div>

        <div className="reason bg-gray-100 sm:px-5 gap-3 items-center flex">
          <div className="text-[120px] font-extrabold text-gray-400">2</div>
          <div className="right flex flex-col">
            <h3 className="sm:text-lg font-bold">Networking</h3>
            <p className="sm:text-md text-sm text-gray-500">
              The market is usually made of businesses that are related to each
              other, and we help connect you with other business partners.
            </p>
          </div>
        </div>

        <div className="reason bg-gray-100 sm:px-5 gap-3 items-center flex">
          <div className="text-[120px] font-extrabold text-gray-400">3</div>
          <div className="right flex flex-col">
            <h3 className="sm:text-lg font-bold">Be unique</h3>
            <p className="sm:text-md text-sm text-gray-500">
              Developing your brand in a way that enables you to stand out, and
              be recognized as a leader in business. Being unique requires
              innovation and this is what we are here for.
            </p>
          </div>
        </div>

        <div className="reason bg-gray-100 sm:px-5 gap-3 items-center flex">
          <div className="text-[120px] font-extrabold text-gray-400">4</div>
          <div className="right flex flex-col">
            <h3 className="sm:text-lg font-bold">Public Relations</h3>
            <p className="sm:text-md text-sm text-gray-500">
              Our experience with people, and awareness of how society and
              markets relate, makes us the suitable go-to team in time of
              crisis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
