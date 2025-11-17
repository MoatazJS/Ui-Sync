import Header from "./components/HomeComponents/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 bg-zinc-50 font-sans dark:bg-black">
      <div>
        <Header />
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
