import React from 'react';

const DummyContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Lorem Ipsum</h3>
        <a href="/" className="block text-sm hover:underline">
          Lorem ipsum dolor sit amet
        </a>
        <a href="/" className="block text-sm hover:underline">
          Lorem ipsum
        </a>
      </div>

      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export default DummyContent;
