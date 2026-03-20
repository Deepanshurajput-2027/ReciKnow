import React from 'react'
import { Link } from 'react-router-dom'
import { UtensilsIcon, HeartIcon, GlobeIcon, LaptopIcon } from 'lucide-react'

const About = () => {
  return (
    <div className="w-full min-h-screen py-12 px-4 md:px-8 text-white">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20 mt-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
          Discover. Create. Taste.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Welcome to ReciKnow, your ultimate destination for exploring the harmony of flavors and technology. We believe cooking is an art, and our platform is your canvas. Whether you're hunting for a classic favorite, organizing your personal cookbook, or discovering essential kitchen products, we bring it all to one place.
        </p>
      </div>

      {/* Platform Core Values Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 hover:bg-gray-700/50 transition-all duration-300 flex flex-col items-center text-center group shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
            <UtensilsIcon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Curated Recipes</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Access hundreds of hand-picked recipes from around the globe, organized perfectly for your convenience.</p>
        </div>

        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 flex flex-col items-center text-center group shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
            <HeartIcon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Personalized Favorites</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Build your own digital cookbook by saving and managing your most loved culinary discoveries.</p>
        </div>

        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 transition-all duration-300 flex flex-col items-center text-center group shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
            <GlobeIcon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Community Driven</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Join a network of food enthusiasts where you can create, share, and update your own unique recipes.</p>
        </div>

        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500/50 hover:bg-gray-700/50 transition-all duration-300 flex flex-col items-center text-center group shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-purple-500/20 text-purple-500 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
            <LaptopIcon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Tech Meets Taste</h3>
          <p className="text-gray-400 text-sm leading-relaxed">A seamless, lightning-fast UI designed to make navigating the kitchen as fluid as an interactive app.</p>
        </div>
      </div>

      {/* Our Story Block */}
      <div className="max-w-5xl mx-auto bg-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-800 mb-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940&auto=format&fit=crop"
            alt="Cooking Station"
            className="rounded-2xl shadow-2xl object-cover h-[350px] w-full border-4 border-gray-700"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-4 py-1">Our Story</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            What started as a simple idea to digitize a messy drawer full of culinary notes quickly evolved into a full-scale digital platform spanning interactive storefronts and global recipe sharing.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            We realized that cooks and chefs don't just need static text files—they need dynamic tools. That's why we focused on making an app that looks stunning, works flawlessly across devices, and seamlessly integrates essential kitchen product shopping alongside deep culinary knowledge.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-red-600 to-red-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to start cooking?</h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
          Dive into our diverse collection, favorite your top choices, or add your very own secret recipe to your personal digital catalog.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link to="/recipes" className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-xl hover:scale-105 transition-transform text-lg active:scale-95">
            Explore Recipes
          </Link>
          <Link to="/create" className="px-8 py-4 bg-red-800 text-white font-bold rounded-xl shadow-xl border border-red-400/30 hover:bg-red-700 hover:scale-105 transition-all text-lg active:scale-95">
            Add Your Own
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
