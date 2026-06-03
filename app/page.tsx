"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const galleryImages = [
    "/images/Img1.jpeg",
    "/images/Img2.jpeg",
    "/images/Img3.jpeg",
    "/images/Img4.jpeg",
    "/images/Img5.jpeg",
    "/images/Img6.jpeg",
    "/images/Img7.jpeg",
    "/images/Img8.jpeg",
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-red-700 bg-black">

  <div className="flex justify-between items-center px-4 md:px-8 py-5">

    <h1 className="text-xl md:text-2xl font-bold text-red-600">
      R BOUNCERS
    </h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-6">
      <a href="#about" className="hover:text-red-500 transition-colors duration-300">
  About
</a>
      <a href="#services" className="hover:text-red-500 transition-colors duration-300">Services</a>

      <a href="#gallery" className="hover:text-red-500 transition-colors duration-300">Gallery</a>
      <a href="#videos" className="hover:text-red-500 transition-colors duration-300">Videos</a>
      <a href="#testimonials" className="hover:text-red-500 transition-colors duration-300">Testimonials</a>
      <a href="#contact" className="hover:text-red-500 transition-colors duration-300">Contact</a>
    </div>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-white text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-black">

      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

      <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>

      <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>

      <a href="#videos" onClick={() => setMenuOpen(false)}>Videos</a>

      <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

    </div>
  )}

</nav>
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">

{/* Background */}

  <div className="absolute inset-0">
    <img
      src="/images/hero-bg.jpg"
      alt="Event Security"
      className="w-full h-full object-cover opacity-60"
    />
    <div className="absolute inset-0 bg-black/65"></div>
  </div>

{/* Content */}

  <div className="relative z-10 max-w-5xl mx-auto pt-16">


{/* Badge */}
<div className="inline-block mb-6 px-5 py-2 rounded-full border border-red-500 text-red-300 text-sm font-semibold bg-black/30 backdrop-blur-sm">
  Wedding • VIP • Corporate Security
</div>

{/* Logo */}
<div className="flex justify-center mb-6">
  <img
    src="/images/9955.jpg"
    alt="R Bouncers Logo"
    className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.7)]"
  />
</div>

{/* Company Name */}
<h1 className="text-4xl md:text-7xl font-extrabold text-red-500 tracking-wide drop-shadow-[0_0_30px_rgba(255,0,0,0.9)]">
  R BOUNCERS
</h1>

{/* Line */}
<div className="w-32 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>

{/* Subtitle */}
<h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
  Professional Security Services
</h2>

{/* Description */}
<p className="mt-6 text-lg md:text-xl text-gray-200 leading-9">
  Wedding Security • VIP Protection • Corporate Events
  <br />
  Club Security • Crowd Management • Private Functions
</p>

{/* Tagline */}
<p className="mt-8 text-xl md:text-2xl italic text-red-200">
  Trusted Security Professionals for Weddings, VIP Events & Corporate Functions.
</p>

{/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

  <a
    href="#contact"
    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
  >
    Book Now
  </a>

  <a
    href="#gallery"
    className="border border-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
  >
    View Gallery
  </a>

</div>

{/* Trust Points */}
<div className="mt-8 flex flex-wrap justify-center gap-6 text-white text-sm md:text-base">

  <span className="bg-black/30 px-3 py-1 rounded-full">
    ✓ Licensed Staff
  </span>

  <span className="bg-black/30 px-3 py-1 rounded-full">
    ✓ Event Specialists
  </span>

  <span className="bg-black/30 px-3 py-1 rounded-full">
    ✓ VIP Protection
  </span>

  <span className="bg-black/30 px-3 py-1 rounded-full">
    ✓ 24/7 Availability
  </span>

</div>

{/* Stats */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">

  <div className="bg-slate-900/90 border border-red-600 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]">
    <h3 className="text-4xl font-bold text-red-500">🏆 100+</h3>
    <p className="text-gray-300 mt-2">Successful Events</p>
  </div>

  <div className="bg-slate-900/90 border border-red-600 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]">
    <h3 className="text-4xl font-bold text-red-500">🛡️ 24/7</h3>
    <p className="text-gray-300 mt-2">Security Support</p>
  </div>

  <div className="bg-slate-900/90 border border-red-600 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]">
    <h3 className="text-4xl font-bold text-red-500">👮 500+</h3>
    <p className="text-gray-300 mt-2">Trained Bouncers</p>
  </div>

</div>
```

  </div>

</section>


{/* Why Choose Us */}

<section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 text-white">

  <h2 className="text-5xl font-bold text-center text-red-600 mb-4">
    Why Choose Us
  </h2>

  <p className="text-center text-gray-300 mb-14">
    Professional Security Solutions Backed By Experience & Trust
  </p>

  <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

<div className="bg-slate-900 border border-red-600 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300">
  <div className="text-5xl mb-4">🛡️</div>
  <h3 className="text-xl font-bold text-red-500 mb-3">
    Trained Personnel
  </h3>
  <p className="text-gray-300">
    Professionally trained and disciplined security staff.
  </p>
</div>

<div className="bg-slate-900 border border-red-600 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300">
  <div className="text-5xl mb-4">🎯</div>
  <h3 className="text-xl font-bold text-red-500 mb-3">
    Event Specialists
  </h3>
  <p className="text-gray-300">
    Expertise in weddings, VIP events and corporate functions.
  </p>
</div>

<div className="bg-slate-900 border border-red-600 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300">
  <div className="text-5xl mb-4">⏰</div>
  <h3 className="text-xl font-bold text-red-500 mb-3">
    24/7 Availability
  </h3>
  <p className="text-gray-300">
    Security support available whenever your event requires it.
  </p>
</div>

<div className="bg-slate-900 border border-red-600 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300">
  <div className="text-5xl mb-4">🏆</div>
  <h3 className="text-xl font-bold text-red-500 mb-3">
    Proven Experience
  </h3>
  <p className="text-gray-300">
    Trusted by clients across Maharashtra for successful events.
  </p>
</div>


  </div>

</section>

   
  {/* About */}
      {/* About Section */}
<section
  id="about"
  className="scroll-mt-24 py-24 px-6 bg-black text-white"
>
  <h2 className="text-5xl font-bold text-red-600 text-center mb-16">
    About Us
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side Image */}
    <div>
      <img
        src="/images/Img2.jpeg"
        alt="R Bouncers Team"
        className="w-full rounded-2xl border-2 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.3)]"
      />
    </div>

    {/* Right Side Content */}
    <div>
      <h3 className="text-3xl font-bold mb-6 text-red-500">
        Professional Security You Can Trust
      </h3>

      <p className="text-gray-300 text-lg leading-8 mb-8">
        R Bouncers provides highly trained security personnel for weddings,
        corporate events, VIP protection, clubs, private functions and crowd
        management. Our team is committed to maintaining discipline, safety
        and premium guest experience at every event.
      </p>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <span className="text-red-500 text-2xl">🛡️</span>
          <p>Professional & Disciplined Security Staff</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-500 text-2xl">🎯</span>
          <p>Specialized in Weddings, VIP & Corporate Events</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-500 text-2xl">🏆</span>
          <p>Trusted Team with Proven Event Experience</p>
        </div>

      </div>
    </div>

  </div>
</section>
      {/* Services */}
      <section id="services" className="scroll-mt-24 py-20 px-6 bg-black text-white">
  <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
    Our Security Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    <div className="border border-red-600 rounded-xl p-6 text-center hover:bg-red-600 hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Wedding Security</h3>
      <p>
        Professional bouncers for weddings, receptions and family functions.
      </p>
    </div>

    <div className="border border-red-600 rounded-xl p-6 text-center hover:bg-red-600 hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-4">VIP Protection</h3>
      <p>
        Trained security personnel for VIPs, celebrities and special guests.
      </p>
    </div>

    <div className="border border-red-600 rounded-xl p-6 text-center hover:bg-red-600 hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Corporate Events</h3>
      <p>
        Event security, crowd management and access control services.
      </p>
    </div>

    <div className="border border-red-600 rounded-xl p-6 text-center hover:bg-red-600 hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Club Security</h3>
      <p>
        Security staff for clubs, pubs, lounges and nightlife events.
      </p>
    </div>

    <div className="border border-red-600 rounded-xl p-6 text-center hover:bg-red-600 hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Private Functions</h3>
      <p>
        Reliable security services for private parties and gatherings.
      </p>
    </div>

    <div className="border border-red-600 rounded-xl p-6 text-center hover:bg-red-600 hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Crowd Management</h3>
      <p>
        Professional crowd control and guest management services.
      </p>
    </div>

  </div>
</section>

      {/* Gallery */}
      {/* Gallery Section */}
<section
  id="gallery"
  className="scroll-mt-24 py-20 px-6 bg-black text-white">
  <h2 className="text-5xl font-bold text-center text-red-500 mb-4">
    Our Gallery
  </h2>

  <p className="text-center text-gray-300 mb-6">
    Professional Security Services Across Weddings,
    Corporate Events, VIP Protection & Private Functions
  </p>

{/* Gallery Stats */}

  <div className="flex flex-wrap justify-center gap-10 mb-12 text-center">

<div>
  <h3 className="text-3xl font-bold text-red-500">100+</h3>
  <p className="text-gray-300">Events Covered</p>
</div>

<div>
  <h3 className="text-3xl font-bold text-red-500">500+</h3>
  <p className="text-gray-300">Security Staff</p>
</div>

<div>
  <h3 className="text-3xl font-bold text-red-500">24/7</h3>
  <p className="text-gray-300">Availability</p>
</div>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

<img src="/images/Img1.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img2.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img3.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img4.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img5.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/new1.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/new2.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img8.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img9.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img10.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img11.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

<img src="/images/Img12.jpeg" alt="R Bouncers Security Event" className="rounded-xl border-2 border-red-600 w-full h-96 object-cover object-top hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300 cursor-pointer" />

  </div>
</section>

<section id="videos" className="py-20 px-6 bg-black text-white">

  <h2 className="text-5xl font-bold text-center text-red-500 mb-12">
    Event Videos
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    <video
      controls
      className="w-full rounded-xl border-2 border-red-600"
    >
      <source src="/videos/video1.mp4" type="video/mp4" />
    </video>

    <video
      controls
      className="w-full rounded-xl border-2 border-red-600"
    >
      <source src="/videos/video2.mp4" type="video/mp4" />
    </video>

    <video
      controls
      className="w-full rounded-xl border-2 border-red-600"
    >
      <source src="/videos/video3.mp4" type="video/mp4" />
    </video>

    <video
      controls
      className="w-full rounded-xl border-2 border-red-600"
    >
      <source src="/videos/video4.mp4" type="video/mp4" />
    </video>

    <video
      controls
      className="w-full rounded-xl border-2 border-red-600"
    >
      <source src="/videos/video5.mp4" type="video/mp4" />
    </video>

  </div>

</section>

{/* Testimonials Section */}

<section id="testimonials" className="scroll-mt-24 py-20 px-6 bg-black text-white">

  <h2 className="text-5xl font-bold text-center text-red-600 mb-4">
    Client Testimonials
  </h2>

  <p className="text-center text-gray-300 mb-14">
    What Our Clients Say About Us
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

<div className="bg-slate-900 border border-red-600 rounded-2xl p-8 hover:-translate-y-2 transition duration-300">
  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
  <p className="text-gray-300 italic">
    "Excellent security management at our wedding. The team was disciplined,
    professional and handled everything smoothly."
  </p>
  <h4 className="mt-6 text-red-500 font-bold">
    Amit Patil
  </h4>
  <p className="text-gray-400 text-sm">
    Wedding Client
  </p>
</div>

<div className="bg-slate-900 border border-red-600 rounded-2xl p-8 hover:-translate-y-2 transition duration-300">
  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
  <p className="text-gray-300 italic">
    "Professional crowd management and excellent coordination during our corporate event."
  </p>
  <h4 className="mt-6 text-red-500 font-bold">
    Rahul Jadhav
  </h4>
  <p className="text-gray-400 text-sm">
    Corporate Event Client
  </p>
</div>

<div className="bg-slate-900 border border-red-600 rounded-2xl p-8 hover:-translate-y-2 transition duration-300">
  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
  <p className="text-gray-300 italic">
    "Very reliable team. Security arrangements for our VIP guest were handled perfectly."
  </p>
  <h4 className="mt-6 text-red-500 font-bold">
    Sandeep Deshmukh
  </h4>
  <p className="text-gray-400 text-sm">
    VIP Event Client
  </p>
</div>

  </div>

</section>

{/* Areas We Serve */}

<section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 text-white">

  <h2 className="text-5xl font-bold text-center text-red-600 mb-4">
    Serving Across Maharashtra
  </h2>

  <p className="text-center text-gray-300 max-w-4xl mx-auto mb-12 text-lg">
    R Bouncers provides professional security services across Maharashtra for
    weddings, corporate events, VIP protection, private functions, crowd
    management and special events.
  </p>

  <div className="max-w-5xl mx-auto">

<div className="bg-slate-900 border border-red-600 rounded-2xl p-10 text-center">

  <h3 className="text-3xl font-bold text-red-500 mb-6">
    Available Throughout Maharashtra
  </h3>

  <p className="text-gray-300 text-lg leading-8">
    We provide trained security personnel for events in
    Mumbai, Pune, Kolhapur, Nashik, Nagpur, Aurangabad,
    Sangli, Satara, Solapur and all major cities and districts
    across Maharashtra.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">

    <span className="bg-black border border-red-600 px-4 py-2 rounded-full">
      ✓ Weddings
    </span>

    <span className="bg-black border border-red-600 px-4 py-2 rounded-full">
      ✓ VIP Protection
    </span>

    <span className="bg-black border border-red-600 px-4 py-2 rounded-full">
      ✓ Corporate Events
    </span>

    <span className="bg-black border border-red-600 px-4 py-2 rounded-full">
      ✓ Crowd Management
    </span>

    <span className="bg-black border border-red-600 px-4 py-2 rounded-full">
      ✓ Private Functions
    </span>

  </div>

</div>

  </div>

</section>
<section className="py-20 px-6 bg-gray-950 text-white">
  <h2 className="text-5xl font-bold text-center text-red-600 mb-4">
    Events We Cover
  </h2>

  <p className="text-center text-gray-300 mb-12">
    Professional security services available across Maharashtra
  </p>

  <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">💍</div>
      <h3 className="text-xl font-bold text-red-500">
        Weddings
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🏢</div>
      <h3 className="text-xl font-bold text-red-500">
        Corporate Events
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">⭐</div>
      <h3 className="text-xl font-bold text-red-500">
        VIP Protection
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🎵</div>
      <h3 className="text-xl font-bold text-red-500">
        Concerts & Shows
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🏏</div>
      <h3 className="text-xl font-bold text-red-500">
        Sports Events
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🎂</div>
      <h3 className="text-xl font-bold text-red-500">
        Private Parties
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🏛️</div>
      <h3 className="text-xl font-bold text-red-500">
        Political Events
      </h3>
    </div>

    <div className="bg-slate-900 border border-red-600 rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="text-xl font-bold text-red-500">
        Festivals
      </h3>
    </div>

  </div>
</section>

      {/* Contact */}
<section id="contact" className="scroll-mt-24 pt-10 pb-12 bg-black text-center text-white">
  <h2 className="text-5xl font-bold text-red-600 mb-8">
    Contact Us
  </h2>

  <p className="text-xl mb-3">
    📞 Rohit: +91 8999131166
  </p>

  <p className="text-xl mb-3">
    📞 Ravi: +91 7020011441
  </p>

  <p className="text-gray-300 mb-8">
    📍 Kolhapur, Maharashtra
  </p>
<p className="text-gray-400 mb-4">
  Available 24/7 Across Maharashtra
</p>
  <a
    href="https://wa.me/917020011441"
    target="_blank"
    className="bg-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
  >
    Contact on WhatsApp
  </a>
</section>

{/* Floating WhatsApp Button */}
<a
href="https://wa.me/917020011441"
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-28 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg z-50 transition-all duration-300 hover:scale-110"

>

💬 </a>
{/* Footer Section */}
<footer className="bg-black border-t border-red-600 py-8 text-center text-gray-200">
  <p className="text-lg font-semibold text-white">
    R BOUNCERS
  </p>

  <p className="mt-2">
    Professional Security Services
  </p>

  <p className="mt-2 text-sm">
    © 2025 All Rights Reserved
  </p>
</footer>
    </main>
  );
}