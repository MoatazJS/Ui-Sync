export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-400 dark:from-indigo-300 dark:via-indigo-400 dark:to-indigo-300">
          UI-Sync
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-center text-xs sm:text-2xs md:text-lg lg:text-xl xl:text-2xl text-black dark:text-gray-400 mx-2 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0">
          Perfect for designers, developers, and learners who want to see their
          code come alive the moment they type it.
        </p>
        <p className="text-center text-xs sm:text-2xs md:text-lg lg:text-xl xl:text-2xl text-black dark:text-gray-400 mx-2 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0">
          Instantly preview your design in four breakpoints all side by side.
        </p>
      </div>
      <div>
        <button className="py-4 px-7 bg-indigo-600 rounded-2xl cursor-pointer hover:bg-indigo-500 font-semibold text-gray-50 hover:text-gray-200">
          Get Started
        </button>
      </div>
    </main>
  );
}
