import React from "react";

export default function HowToUse() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-5xl font-semibold">How to Use</h2>
          <p className="text-center text-2xl font-medium">
            Get started in three simple steps.
          </p>
        </div>
        <div className="flex justify-center align-center gap-6">
          <div className="w-100 h-100 flex flex-col justify-center items-center gap-6 bg-orange-600">
            <div>Logo</div>
            <div>Step 1</div>
            <div>title</div>
            <div>paragraph</div>
          </div>
          <div className="w-100 h-100 flex flex-col justify-center items-center gap-6 bg-orange-600">
            <div>Logo</div>
            <div>Step 2</div>
            <div>title</div>
            <div>paragraph</div>
          </div>
          <div className="w-100 h-100 flex flex-col justify-center items-center gap-6 bg-orange-600">
            <div>Logo</div>
            <div>Step 3</div>
            <div>title</div>
            <div>paragraph</div>
          </div>
        </div>
      </main>
    </>
  );
}
