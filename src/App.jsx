export default function App() {
  return (
  <body className="bg-gray-900">
    <div className="flex bg-gray-300">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img className="h-10" src="/src/assets/images/logo.svg" alt="Workcation"/>
          <img 
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" 
            src="/src/assets/images/beach-work.jpg" alt="Woman workcationing on the beach"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline"/><span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 sm:mt-4 text-gray-600 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you&aposre not on vacation.
          </p>
          <div className="mt-4 sm:mt-6">
            <a href="#" 
              className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 
            hover:bg-indigo-400 focus:outline-none focus:shadow-lg shadow-indigo-500/50 text-sm sm:text-base text-white uppercase tracking-wider font-semibold"
            >Book your escape</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative" >
        <img 
          className="absolute inset-0 h-full w-full object-cover object-center" 
          src="/src/assets/images/beach-work.jpg" alt="Woman workcationing on the beach"
        />
      </div>
    </div>
  </body>
  )
}