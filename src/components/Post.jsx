import { useState } from "react";
import post from "../assets/media/post.png";
import post1 from "../assets/media/post1.png";
import post2 from "../assets/media/post2.png";
import post4 from "../assets/media/post4.png";
import post5 from "../assets/media/post5.png";
import post6 from "../assets/media/post6.png";
import { ChevronDown } from "lucide-react";
import feature from "../assets/media/Featured.png";
import Frame from "../assets/media/Frame.png";
import f from "../assets/media/f.png";

export default function Post() {
  const [openFaq, setOpenFaq] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  return (
    <>
      <h2 className="font-semibold mt-8 mb-3">Post</h2>
      <div className="flex flex-wrap gap-5">
        <div>
          <img src={post} alt="" />
        </div>
        <div>
          <img src={post1} alt="" />
        </div>
        <div>
          <img src={post2} alt="" />
        </div>
        <div>
          <img src={post4} alt="" />
        </div>
        <div>
          <img src={post5} alt="" />
        </div>
        <div>
          <img src={post6} alt="" />
        </div>
      </div>

      {/* drop */}
      <div className="mt-2 w-[95%] bg-white rounded-xl shadow-sm divide-y">
        {/* ===== FAQ ===== */}
        <div>
          <button
            onClick={() => setOpenFaq(!openFaq)}
            className="w-full flex justify-between items-center px-5 py-4 font-semibold text-gray-800"
          >
            <span>Frequently Asked Questions</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                openFaq ? "rotate-180" : ""
              }`}
            />
          </button>

          {openFaq && (
            <div className="px-5 pb-4 text-sm text-gray-600 space-y-2">
              <p>• What is the cancellation policy?</p>
              <p>• Is advance booking mandatory?</p>
              <p>• Are outside vendors allowed?</p>
            </div>
          )}
        </div>

        {/* ===== TERMS ===== */}
        <div>
          <button
            onClick={() => setOpenTerms(!openTerms)}
            className="w-full flex justify-between items-center px-5 py-4 font-semibold text-gray-800"
          >
            <span>Terms of Services</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                openTerms ? "rotate-180" : ""
              }`}
            />
          </button>

          {openTerms && (
            <div className="px-5 pb-4 text-sm text-gray-600 space-y-2">
              <p>• Booking amount is non-refundable.</p>
              <p>• Venue timings must be strictly followed.</p>
              <p>• Management is not responsible for personal belongings.</p>
            </div>
          )}
        </div>
      </div>

      {/* Features in */}
      <h2 className="font-semibold mt-8 mb-3 ">Featured In</h2>
      <div className="flex flex-wrap gap-5">
        <div>
          <img src={feature} alt="" />
        </div>
        <div>
          <img src={feature} alt="" />
        </div>
        <div>
          <img src={feature} alt="" />
        </div>
      </div>

      {/* Venue */}
      {/* ================= PACKAGE ================= */}
      <h2 className="font-semibold mt-3">Recommended Venue</h2>

      <div className="bg-white rounded-xl p-4 flex flex-col lg:flex-row gap-4">
        {/* IMAGE */}
        <img
          src={Frame}
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
    </>
  );
}
