import { useState } from 'react'

export function Hero () {
  const [isDarkMode] = useState(true)

  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='text-center transform transition-transform duration-300 z-10'>
        <div className='mb-8'>
          <h1 className='text-6xl md:text-8xl font-black mb-4 relative'>
            <span
              className={`absolute inset-0 ${isDarkMode ? 'text-pink-500' : 'text-purple-600'} blur-sm animate-pulse`}
              style={{ filter: 'drop-shadow(0 0 20px currentColor)' }}
            >
              It's My Birthday
            </span>
            <span
              className={`relative text-transparent bg-clip-text ${isDarkMode ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'} drop-shadow-2xl`}
              style={{
                filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))',
                textShadow: '0 0 30px rgba(236, 72, 153, 0.8)',
              }}
            >
              It's My Birthday
            </span>
            <div className='absolute inset-0 pointer-events-none'>
              {[...Array(8)].map((_, i) => (
                <div
                  key={`title-glitter-${i}`}
                  className='absolute animate-ping'
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: '1.5s',
                  }}
                >
                  <div
                    className='w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full opacity-80'
                    style={{ boxShadow: '0 0 15px currentColor' }}
                  />
                </div>
              ))}
            </div>
          </h1>
          <div className='text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-bounce relative mt-8'>
            <span className={`absolute inset-0 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} blur-sm`}>
              🌟 30 de Lay 🌟
            </span>
            <span className={`relative ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>🌟 30 de Lay 🌟</span>
          </div>
        </div>
      </div>
    </section>
  )
}
