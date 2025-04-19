import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">📚</span>
          <span className="text-xl font-bold text-blue-900 tracking-wide">
            HappyLearn
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-green-800 hover:text-green-900 font-medium transition">Dashboard</a>
          <a href="#" className="text-green-800 hover:text-green-900 font-medium transition">Courses</a>
          <a href="#" className="text-green-800 hover:text-green-900 font-medium transition">Assignments</a>
          <a href="#" className="text-green-800 hover:text-green-900 font-medium transition">Grades</a>
        </nav>

        {/* Right: Profile + Logout */}
        <div className="hidden md:flex items-center gap-4">
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
            HL
          </div>
          {/* Logout */}
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Log Out
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blue-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 border-t border-yellow-200">
          <nav className="flex flex-col space-y-3 mt-2">
            <a href="#" className="text-green-800 font-medium hover:text-green-900">Dashboard</a>
            <a href="#" className="text-green-800 font-medium hover:text-green-900">Courses</a>
            <a href="#" className="text-green-800 font-medium hover:text-green-900">Assignments</a>
            <a href="#" className="text-green-800 font-medium hover:text-green-900">Grades</a>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
              HL
            </div>
            <button className="ml-auto bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition">
              Log Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
