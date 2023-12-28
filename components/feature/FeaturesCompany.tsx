import React from "react";

const FeaturesCompany = () => {
  return (
    <section className="mt-24 md:mt-40 text-center">
      <h2 className="text-center text-white">
        Why choosing DevSwipe for your Company?
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 items-center justify-items-center mx-auto max-w-4xl">
        <img className="md:order-1" src="/assets/job_count.svg" alt="" />
        <h4 className="md:order-4 font-semibold text-xl text-white">10.000+</h4>
        <p className="md:order-7 self-start text-white">Potential candidates</p>
        <img className="md:order-2" src="/assets/company_count.svg" alt="" />
        <h4 className="md:order-5 font-semibold text-xl text-white">120+</h4>
        <p className="md:order-8 self-start text-white">Joined Companies</p>
        <img className="md:order-3" src="/assets/no_cure_no_pay.svg" alt="" />
        <h4 className="md:order-6 font-semibold text-xl text-white">200+</h4>
        <p className="md:order-9 self-start text-white">Monthly matches</p>
      </div>
    </section>
  );
};

export default FeaturesCompany;
