

export default function LearnMore() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl mb-8">Welcome to GPTpro AI</h1>
      <p className="text-xl mb-6 px-5 lg:px-32 text-blue-400">
        GPTpro is a leading AI technology company dedicated to driving innovation in artificial intelligence. 
        We specialize in developing cutting-edge AI solutions that transform businesses and enhance human productivity. 
        At GPTpro, our mission is to deliver advanced AI products that solve real-world problems and empower companies 
        to unlock new opportunities.
      </p>
      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl mb-4">Our Vision</h2>
      <p className="text-lg mb-6 px-5 lg:px-32 text-blue-400">
        At GPTpro, we envision a future where AI augments human potential, enabling people to focus on creativity, 
        strategy, and high-level decision-making while machines handle complex, repetitive tasks. 
        Our goal is to democratize AI, making advanced machine learning accessible to organizations of all sizes.
      </p>

      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl mb-4">Our Technology</h2>
      <p className="text-lg mb-6 px-5 lg:px-32 text-blue-400">
        GPTpro&apos;s technology stack is built on state-of-the-art natural language processing models, 
        machine learning algorithms, and neural networks. Our AI systems are designed to learn and adapt, 
        providing unparalleled accuracy and insights. Whether it&apos;s automating customer support, optimizing supply chains, 
        or enhancing decision-making processes, GPTpro&apos;s solutions deliver measurable results.
      </p>

      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl mb-4">Why Choose GPTpro?</h2>
      <p className="text-lg mb-6 px-5 lg:px-32 text-blue-400">
        Choosing GPTpro means partnering with a company that values innovation, integrity, and impact. 
        We work closely with our clients to understand their unique challenges and provide tailored solutions that drive success. 
        Our team of AI experts and engineers are dedicated to pushing the boundaries of what AI can achieve, 
        ensuring our clients stay ahead in an increasingly competitive landscape.
      </p>

      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl mb-4">Industries We Serve</h2>
      <p className="text-lg mb-6 px-5 lg:px-32 text-blue-400">
        GPTpro AI serves a wide range of industries, including healthcare, finance, retail, and manufacturing. 
        Our AI systems are customized to meet the specific needs of each sector, whether it&apos;s enhancing patient outcomes, 
        improving financial forecasts, or optimizing production lines.
      </p>

      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl mb-4">Our Commitment to Ethics</h2>
      <p className="text-lg mb-6 px-5 lg:px-32 text-blue-400">
        As pioneers in AI, GPTpro is committed to ethical AI development. 
        We believe that AI should be transparent, fair, and unbiased. 
        Our ethical guidelines ensure that our AI solutions are not only effective but also responsible, 
        fostering trust and accountability in the AI systems we build.
      </p>




      <button 
        className="block w-full rounded border border-blue-600 mt-4 px-28 py-4 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto  transition-transform transform active:scale-95 cursor-pointer"
        onClick={() => window.location.href = '/'}
      >
        Return to Homepage
      </button>
    </div>
  )
}
