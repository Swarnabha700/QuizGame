import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-100">
  <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to QuizQuest!</h1>
      <p className="text-lg mb-8">Embark on a knowledge adventure!</p>
      <a href="/quizpage" className="bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100">Get Started</a>
    </div>
  </header>
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-bold ml-4">Multiple Choice</h3>
          </div>
          <p className="text-gray-700">Choose the correct answer from a list of options.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-purple-500">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-bold ml-4">True/False</h3>
          </div>
          <p className="text-gray-700">Determine whether a statement is true or false.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-yellow-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-bold ml-4">Leaderboard</h3>
          </div>
          <p className="text-gray-700">Compete with others and track your progress.</p>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Home
