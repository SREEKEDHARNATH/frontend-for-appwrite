import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const featureCards = [
  {
    title: 'Performance first',
    description: 'Powered by React + Vite for fast loads and instant feedback.',
  },
  {
    title: 'Responsive by default',
    description: 'Mobile-first layouts that scale beautifully across devices.',
  },
  {
    title: 'Design system ready',
    description: 'Reusable cards, buttons, and forms built for consistency.',
  },
]

function Button({ children, href, primary = false }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500'
  const style = primary
    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 hover:-translate-y-0.5'
    : 'border border-violet-300/70 bg-white/70 text-violet-700 backdrop-blur hover:bg-violet-50 dark:border-violet-700 dark:bg-slate-900/60 dark:text-violet-200 dark:hover:bg-slate-800'

  return (
    <a href={href} className={`${base} ${style}`}>
      {children}
    </a>
  )
}

function Card({ title, description }) {
  return (
    <article className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-md shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-black/30">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </article>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme ? savedTheme === 'dark' : prefersDark
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-fuchsia-100 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950 dark:text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/30 bg-white/60 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <a href="#home" className="text-lg font-bold tracking-tight">frontend.</a>
          <div className="flex items-center gap-4 sm:gap-7">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-300">
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-violet-300/60 px-3 py-2 text-xs font-semibold transition hover:bg-violet-100 dark:border-violet-700 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </nav>
      </header>

      <main id="home" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8">
        <section className="animate-fade-in text-center">
          <p className="inline-flex rounded-full border border-violet-300/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:border-violet-700 dark:bg-slate-900/70 dark:text-violet-200">
            Modern frontend experience
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Build stunning digital products with speed and style.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            A beautiful, production-ready React interface with responsive design, reusable components,
            and polished animations.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" primary>
              Get Started
            </Button>
            <Button href="#features">Explore Features</Button>
          </div>
        </section>

        <section id="features" className="mt-20 grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </section>

        <section id="why-us" className="mt-20 rounded-3xl border border-white/50 bg-white/60 p-8 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-3xl font-bold">Smooth navigation. Better experiences.</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            Semantic sections, motion-friendly interactions, and clean component composition create a
            polished UX while remaining easy to maintain and scale.
          </p>
        </section>

        <section id="contact" className="mt-20 rounded-3xl border border-white/50 bg-white/70 p-8 shadow-lg shadow-slate-200/50 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-black/20">
          <h2 className="text-3xl font-bold">Let’s build something amazing</h2>
          <form className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="Contact form">
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-medium">Name</span>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950"
                placeholder="Your name"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-medium">Email</span>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950"
                placeholder="you@example.com"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-medium">Message</span>
              <textarea
                rows="4"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950"
                placeholder="Tell us about your project"
              ></textarea>
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/30 bg-white/60 py-8 text-center text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
        © {new Date().getFullYear()} frontend. Crafted with React, Vite, and Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
