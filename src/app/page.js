import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">blue forest farms</h1>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#hero" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#products" className="hover:underline">Products</a>
          </li>
          <li>
            <a href="#testimonial" className="hover:underline">Testimonial</a>
          </li>
          <li>
            <a href="#quote" className="hover:underline">Request Quote</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="bg-gray-100 relative text-center py-32 mt-16">
        <Image
          src="/plants-hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-black">blue forest farms</h1>
          <h2 className="text-2xl mt-6 font-light">Wholesale Hemp Oil Extracts</h2>
          <p className="max-w-xl mx-auto mt-4 text-gray-700">
            Exponentially increase the value of your products with Blue Forest Extracts. Organically refined, molecularly stable, and always pure.
          </p>
          <button className="mt-6 px-6 py-2 border border-black hover:bg-black hover:text-white">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-20 bg-white">
        <h2 className="text-3xl text-center mb-12">Wholesale Hemp Oil Products</h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {[
            {
              title: "whole plant extract (crude oil)",
              desc:
                "This is our most plant complete concentrate featuring all the natural terpenes...",
              img: "/crude-oil.jpg",
            },
            {
              title: "full spectrum distillate",
              desc:
                "We take our Whole Plant Extract and put it through a further refining process...",
              img: "/distillate.jpg",
            },
            {
              title: "isolate",
              desc:
                "This concentrate is 97%+ pure isolate. Isolate is a white crystalline powder...",
              img: "/isolate.jpg",
            },
            {
              title: "finished products",
              desc:
                "Not ready to formulate your own products? We can take any of our extracts...",
              img: "/capsules.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold capitalize mb-2">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-700">{item.desc}</p>
                <button className="px-4 py-2 border border-black hover:bg-black hover:text-white">
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div id="testimonial" className="bg-gray-50 py-20 text-center">
        <p className="italic text-lg max-w-2xl mx-auto">
          "I can’t say enough good things about this company… always get great customer
          service and support. Very high quality product A+."
        </p>
        <p className="mt-4 font-semibold">- ROBERT</p>
      </div>

      {/* Quote Form */}
      <div id="quote" className="bg-white py-20">
        <h2 className="text-2xl text-center mb-10">Request Quote</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className="border p-2" type="text" placeholder="FIRST NAME" required />
          <input className="border p-2" type="text" placeholder="LAST NAME" required />
          <input className="border p-2" type="email" placeholder="EMAIL" required />
          <input className="border p-2" type="text" placeholder="PHONE NUMBER" required />
          <select className="border p-2 col-span-1 md:col-span-2">
            <option>Whole Plant Extract</option>
            <option>Full Spectrum Distillate</option>
            <option>Isolate</option>
            <option>Finished Products</option>
          </select>
          <textarea
            className="border p-2 col-span-1 md:col-span-2"
            rows={4}
            placeholder="ADDITIONAL NOTES"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 px-4 py-2 border border-black hover:bg-black hover:text-white"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-600">
        <p>ABOUT US: With our years of... exceptional hemp products.</p>
        <p className="mt-2">LOCATION: 3771 Monarch St Suite A, Erie, CO 80516 | info@blueforestfarms.com</p>
      </footer>
    </div>
  );
}
