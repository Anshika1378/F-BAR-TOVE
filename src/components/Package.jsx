import black from "../assets/media/black.png";
import girl from "../assets/media/girl.png";
import f from "../assets/media/f.png";
import Ambiance from "../assets/media/Ambiance.png";
import Food from "../assets/media/Food.png";
import Beverages from "../assets/media/Beverages.png";
import teaser from "../assets/media/teaser.png";
import teaser1 from "../assets/media/teaser1.png";
import teaser2 from "../assets/media/teaser2.png";
import teaser3 from "../assets/media/teaser3.png";
import About from "./About";

export default function PackageEvents() {
  return (
    <div className="w-full px-3 sm:px-6 py-4 bg-[#f2f2f2]">
      {/* ================= PACKAGE ================= */}
      <h2 className="font-semibold mb-3">Package</h2>

      <div className="bg-white rounded-xl p-4 flex flex-col lg:flex-row gap-4">
        {/* IMAGE */}
        <img
          src={black}
          className="w-full lg:w-[345px] h-[220px] lg:h-[322px] object-cover rounded-xl"
        />

        {/* CENTER CONTENT */}
        <div className="flex-1 relative">
          <p className="text-sm mb-2">
            Rohit Sharma Attended a party here last mo
          </p>

          <div className="flex items-center gap-2 mb-1">
            <img src={f} className="w-6 h-6 rounded-full" />
            <span className="font-semibold">F-Bar</span>
            <span className="text-yellow-500">★ 4.1</span>
            <span className="text-gray-400 text-sm">Review (03)</span>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            📍 DLP Phase 3, Gurugram
            <span className="ml-2 text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
              1.2 Kms
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mb-3">
            <span className="border px-3 py-1 rounded-full text-sm">
              IMFL Drinks + FOOD
            </span>
            <span className="border px-3 py-1 rounded-full text-sm">3 hrs</span>
            <span className="border px-3 py-1 rounded-full text-sm">
              1.5 hrs
            </span>
          </div>

          {/* Desktop same position, mobile bottom */}
          <div className="bg-[#4F46E5] w-full text-white text-sm px-4 py-2 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-2 lg:absolute lg:bottom-0">
            <span>Choose This Now ₹390 Would Be Saved Instantly !</span>
            <button className="bg-white text-[#4F46E5] px-4 py-1 rounded-lg">
              Book Now
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[220px]">
          <h3 className="font-semibold mb-2 lg:text-right">Inclusion</h3>

          <div className="flex flex-col gap-2 lg:items-end">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              3 Starters + 2 Main Course
            </span>
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
              3 Starters + 2 Main Course
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              Alcoholic Beverages (13)
            </span>
            <span className="text-blue-500 text-sm">+3 More</span>
          </div>
        </div>
      </div>

      {/* ================= EVENTS ================= */}
      <h2 className="font-semibold mt-8 mb-3">Events</h2>

      <div className="bg-white rounded-xl p-4 flex flex-col lg:flex-row gap-4">
        {/* EVENT IMAGE */}
        <img
          src={girl}
          className="w-full lg:w-[345px] h-[220px] lg:h-[322px] object-cover rounded-xl"
        />

        {/* EVENT DETAILS */}
        <div className="flex-1">
          <div className="flex justify-between">
            <span className="line-through text-green-500">MRP ₹10000</span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm text-center">
              29 Dec 25 <br /> 10:00 PM onwards
            </span>
          </div>

          <span className="text-xl text-blue-500">₹8000</span>

          <h3 className="font-bold text-lg mb-1">
            Booking Amount <span className="text-3xl text-blue-500">₹3000</span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-2 mb-2">
            <button className="bg-blue-500 text-white rounded px-4 py-1 w-fit">
              New year 2026 Pass
            </button>
            <p className="text-sm font-semibold">
              Sitar Magic by Rishabh Rikhiram Sharma <br /> Gurugram Party
            </p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <img src={f} className="w-6 h-6 rounded-full" />
            <span className="font-semibold">F-Bar</span>
            <span className="text-yellow-500">★ 4.1</span>
            <span className="text-gray-400 text-sm">Review (03)</span>
          </div>

          <p className="text-sm text-gray-500 mb-3">
            📍 DLP Phase 3, Gurugram
            <span className="ml-2 text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
              1.2 Kms
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-between items-center bg-[#4F46E5] text-white px-4 py-2 rounded-lg">
            <span>Flat 25% Off on Food · Pay Bill Through Partywitty Pay</span>
            <button className="bg-white text-[#4F46E5] px-4 py-1 rounded-lg">
              Buy Ticket →
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <h2 className="font-semibold mt-8 mb-3">Gallery</h2>
      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-center font-bold">Ambiance</h1>
          <img src={Ambiance} alt="" />
        </div>
        <div>
          <h1 className="text-center font-bold">Food</h1>
          <img src={Food} alt="" />
        </div>
        <div>
          <h1 className="text-center font-bold">Beverages</h1>
          <img src={Beverages} alt="" />
        </div>
      </div>

      {/* Teaser */}
      <h2 className="font-semibold mt-8 mb-3">Teaser</h2>
      <div className="grid grid-cols-4">
        <div>
          <img src={teaser} alt="" />
        </div>
        <div>
          <img src={teaser1} alt="" />
        </div>
        <div>
          <img src={teaser2} alt="" />
        </div>
        <div>
          <img
            src={teaser3}
            alt=""
            className="h-33 sm:h-45 md:h-[100%]  object-cover"
          />
        </div>
      </div>
      <About />
    </div>
  );
}
