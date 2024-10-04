
export default function AppStartPage() {
  return (
    <section className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            GPT-Pro AI Tool
            <span className="sm:block text-center">
              Integrated AI Application ChatBox
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            GPT-Pro is a powerful AI tool that can help you generate human-like text for your applications.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto transition-transform transform active:scale-95 cursor-pointer"
              onClick={() => window.location.href = '/chat'}
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 transition-transform transform active:scale-95 cursor-pointer sm:w-auto"
              onClick={() => window.location.href = '/learn-more'}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
