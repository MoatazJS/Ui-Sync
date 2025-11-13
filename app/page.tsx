export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-700 dark:from-blue-300 dark:to-blue-500">
          UI-Sync
        </h1>
      </div>
      <div>
        <p className="text-center text-xs sm:text-2xs md:text-lg lg:text-xl xl:text-2xl text-black dark:text-slate-50 mx-2 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0">
          Perfect for designers, developers, and learners who want to see their
          code come alive the moment they type it.
        </p>
        <p className="text-center text-xs sm:text-2xs md:text-lg lg:text-xl xl:text-2xl text-black dark:text-slate-50 mx-2 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0">
          Instantly preview your design in four breakpoints — mobile, tablet,
          laptop, and desktop — all side by side.
        </p>
      </div>
      <div>BUTTONS</div>
    </main>
  );
}
