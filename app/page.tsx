import Header from "./components/HomeComponents/Header";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen items-center justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,#6366f1,#8b5cf6,transparent)]" />
      <div className="z-10">
        <Header />
      </div>
      <div className="flex flex-col gap-2 z-10">
        <p className="text-center text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-black dark:text-gray-100 mx-2 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0">
          Perfect for designers, developers, and learners who want to see their
          code come alive the moment they type it.
        </p>
        <p className="text-center text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-black dark:text-gray-100 mx-2 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0">
          Instantly preview your design in four breakpoints all side by side.
        </p>
      </div>
      <div className="z-10 flex gap-2">
        <button className="py-4 px-7 w-40 bg-indigo-800 rounded-2xl cursor-pointer hover:bg-indigo-500 font-semibold text-gray-50 hover:text-gray-200">
          Get Started
        </button>
        <button className="py-4 px-7 w-40 bg-transparent border-2 border-indigo-500  rounded-2xl cursor-pointer hover:bg-indigo-500 font-semibold text-gray-50 hover:text-gray-200">
          Demo
        </button>
      </div>
    </main>
  );
}
