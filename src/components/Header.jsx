import { useState } from "react";
import f from "../assets/media/f.png";
import MenuSection from "./MenuSection";
import NavTabs from "./Navtabs";
import Package from "./Package";

export default function Header() {
  const[isFollowing, setIsFollowing] = useState(false);
  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="w-full bg-white p-4 border-b">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* LEFT SECTION */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Image */}
            <img
              src={f}
              alt="F-bar"
              className="w-20 h-20 rounded-full object-cover border mx-auto sm:mx-0"
            />

            {/* Info */}
            <div className="text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
                <h1 className="text-xl font-semibold">F-bar</h1>
                <span className="text-sm text-yellow-500">⭐ 4.1</span>
                <span className="text-sm text-gray-500">(209 Reviews)</span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                📍 DLF Phase 3, Gurugram ·{" "}
                <span className="text-blue-500">1.2 kms</span>
              </p>

              {/* Stats */}
              <div className="flex justify-center sm:justify-start gap-6 mt-2 text-sm">
                <div>
                  <p className="font-semibold text-black">153</p>
                  <p className="text-gray-500">Publications</p>
                </div>
                <div>
                  <p className="font-semibold text-black">209</p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="font-semibold text-black">43</p>
                  <p className="text-gray-500">Mutual Mate</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-center lg:justify-end gap-3 flex-wrap">
            <button className={`px-5 py-2 rounded-full text-sm transition
    ${
      isFollowing
        ? "bg-gray-200 text-gray-500"
        : "bg-purple-600 text-white"
    }`} onClick={() => setIsFollowing(!isFollowing)}>
               {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="px-5 py-2 bg-gray-200 text-gray-500 rounded-full text-sm">
              Message
            </button>
            <button className="px-5 py-2 bg-gray-200 text-gray-500 rounded-full text-sm">
              Suggestion
            </button>
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <NavTabs />
    </>
  );
}
