import Image from "next/image";
import React from "react";

const FeaturesCompany = () => {
  return (
    <section className="mt-24 md:mt-40 text-center">
      <h2 className="text-center text-3xl text-white">
        Why choosing DevSwipe for your Company?
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 items-center justify-items-center mx-auto max-w-4xl">
        <Image className="md:order-1" width={100} height={100} src="/img/potential.svg" alt="" />
        <h4 className="md:order-4 font-semibold text-xl text-primary">
          10.000+
        </h4>
        <p className="md:order-7 self-start text-white">Potential candidates</p>
        <Image className="md:order-2" width={100} height={100}  src="/img/enterprise.svg" alt="" />
        <h4 className="md:order-5 font-semibold text-xl text-accent">120+</h4>
        <p className="md:order-8 self-start text-white">Joined Companies</p>
        <Image className="md:order-3" width={100} height={100}  src="/img/matches.svg" alt="" />
        <h4 className="md:order-6 font-semibold text-xl text-white">200+</h4>
        <p className="md:order-9 self-start text-white">Monthly matches</p>
      </div>
    </section>
  );
};

export default FeaturesCompany;
