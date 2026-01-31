import { useState } from "react";
import veg1 from "../assets/media/veg1.png"
import finger from "../assets/media/finger.png"
import burger from "../assets/media/burger.png"
import coc from "../assets/media/coc.png"


const vegItems = [
  {
    id: 1,
    image: veg1,
    name: "Warm Quinoa Salad",
    price: 349,
    desc: "Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.",
  },
  {
    id: 2,
    image : finger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 3,
    image: veg1,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 4,
    image : finger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 5,
    image: burger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 6,
    image: coc,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 7,
    image: burger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 8,
    image: coc,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
];

const nonVegItems = [
  {
    id: 9,
    image: coc,
    name: "Miso Healthy Sauté",
    price: 594,
    desc: "Grilled chicken with miso sauce and veggies.",
  },
  {
    id: 10,
     image: burger,
    name: "Healthy Caesar Salad",
    price: 499,
    desc: "Chicken caesar salad with fresh greens.",
  },
  {
    id: 11,
    image: coc,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 12,
    image : finger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id: 13,
     image: burger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
  {
    id:14,
    image : finger,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
   {
    id:15,
    image: veg1,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
   {
    id:16,
    image: veg1,
    name: "Braised Kidney Beans & Sweet Potato",
    price: 569,
    desc: "Healthy beans cooked with sweet potato and spices.",
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("veg");

  const data = activeTab === "veg" ? vegItems : nonVegItems;

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-lg font-semibold mb-4">Menu - À la carte</h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab("veg")}
          className={`px-5 py-2 rounded-full text-sm ${
            activeTab === "veg"
              ? "bg-purple-600 text-white"
              : "bg-white border text-gray-600"
          }`}
        >
          Veg
        </button>

        <button
          onClick={() => setActiveTab("nonveg")}
          className={`px-5 py-2 rounded-full text-sm ${
            activeTab === "nonveg"
              ? "bg-purple-600 text-white"
              : "bg-white border text-gray-600"
          }`}
        >
          Non-Veg
        </button>
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 shadow-sm flex justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <img src={item.image} alt="" />
                <span className="w-3 h-3 bg-green-600 rounded-sm"></span>
                <h3 className="font-semibold">{item.name}</h3>
              </div>

              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                  Bestseller
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Fresh Ingredients
                </span>
              </div>
            </div>

            <div className="text-purple-600 font-semibold">
              ₹{item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm p-2">
        <h1>Main Course</h1>
      <h1>Rice</h1>
      <h1>Breads</h1>
      <h1>Sides</h1>
      </div>
    </div>
  );
}
