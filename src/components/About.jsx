import OBJECTS from "../assets/media/OBJECTS.png"
import Ocasion from "./Ocasion";

export default function About() {
  return (
    <>
      <div className="mt-2">
        <h1 className="font-bold">About The name of the Venue</h1>
        <p className="text-gray-500">
          The Graind Sapphire Hall is the Premier event venue located in the
          heard of Delhi. Known for its luxurious, elegant ambiance, and
          top-notch services , it is the perfect location for wedding for
          corporate events.Receptions and social gathering . Read More......
        </p>
        <div className="border border-r border-gray-500 mt-1 "></div>

        <div className="w-full bg-gray-100 p-4 md:p-6 rounded-xl">
          {/* ===== Highlights Section ===== */}
          <div className="bg-gray-100">
            <h2 className="font-semibold text-black mb-2">Highlights</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
              <ul className="space-y-2 list-disc list-inside">
                <li>Capacity: Up to 500 guest</li>
                <li>In-house Catering & DJ</li>
                <li>Air Conditioned Banquet Halls</li>
              </ul>

              <ul className="space-y-2 list-disc list-inside sm:text-right">
                <li>Valet Parking Available</li>
                <li>Dedicated Bridal Room</li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* ===== Venue Features Section ===== */}
          <div>
            <h2 className="font-semibold text-black mb-2">Venue Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
              <ul className="space-y-2 list-disc list-inside">
                <li>Stage Setup</li>
                <li>Lawn + Indoor Halls</li>
                <li>Live counters</li>
              </ul>

              <ul className="space-y-2 list-disc list-inside sm:text-right">
                <li>Led Screens</li>
                <li>Custom Decor</li>
              </ul>
            </div>
          </div>

          {/* ===== Review Card ===== */}
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="max-w-md">
              <h3 className="font-semibold text-lg mb-2">
                Share Your Review, Earn Carrots!
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Tell us about your experience and help others make better
                choices. As a thank you, we'll reward you with carrots for every
                review you share!
              </p>

              <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full text-sm hover:bg-purple-700">
                ✏️ Write Review
              </button>
            </div>

            {/* Right Illustration */}
            <div className="w-40 md:w-48">
              <img
                src={OBJECTS}
                alt="Review"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Ocasion />
    </>
  );
}
