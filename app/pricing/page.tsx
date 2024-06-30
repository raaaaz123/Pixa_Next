import React from 'react';

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <h2 className="text-3xl font-bold mb-8">Choose what fits you right</h2>
      <p className="text-center mb-8">
        Our straightforward pricing plans are tailored to meet your needs. If you're not
        ready to commit you can get started for free.
      </p>
      <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-8 items-center">
        {/* Card 1 */}
        <div className="border bg-slate-800 border-gray-600 p-6 rounded-lg hover:border-blue-500 transition-all h-[400px] items-center text-white flex flex-col justify-center shadow-lg hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4">Unlimited Saas</h3>
    <p className="text-4xl font-bold mb-4">$199<span className="text-xl font-normal">/month</span></p>
    <ul className="mb-6">
        <li>✔️ Rebilling</li>
        <li>✔️ 24/7 Support team</li>
    </ul>
    <button className="w-full py-2 px-4 bg-blue-400 rounded hover:bg-blue-500 transition-all">
        Get Started
    </button>
</div>


        {/* Card 2 */}
        <div className="border bg-slate-800 border-gray-600 p-6 rounded-lg hover:border-blue-500 transition-all h-[400px] flex flex-col items-center justify-center text-white">
          <h3 className="text-xl font-semibold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-4">$49<span className="text-xl font-normal">/month</span></p>
          <ul className="mb-6">
            <li>✔️ Unlimited Sub accounts</li>
            <li>✔️ Unlimited Team members</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-400 rounded hover:bg-blue-500 transition-all">
            Get Started
          </button>
        </div>
        {/* Card 3 */}
        <div className="border bg-slate-800 border-gray-600 p-6 rounded-lg hover:border-blue-500 transition-all h-[400px] flex flex-col items-center justify-center text-white">
          <h3 className="text-xl font-semibold mb-4 justify-center">Starter</h3>
          <p className="text-4xl font-bold mb-4">$0<span className="text-xl font-normal">/month</span></p>
          <ul className="mb-6">
            <li>✔️ 3 Sub accounts</li>
            <li>✔️ 2 Team members</li>
            <li>✔️ Unlimited pipelines</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-400 rounded hover:bg-blue-500 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
