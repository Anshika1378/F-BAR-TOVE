import { useState } from "react";
import MenuSection from "./MenuSection";
import Package from "./Package";
import Post from "./Post";

function NavTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Menu",
    "Package",
    "Event",
    "Gallery",
    "Teaser",
    "About",
    "Review",
    "Posts",
  ];

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex gap-4 px-4 py-2 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded ${
              activeTab === tab ? "bg-purple-600 text-white" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {activeTab === "Overview" && (
          <>
            <MenuSection />
            <Package />
          </>
        )}
        {activeTab === "Menu" && <MenuSection />}
        {activeTab === "Package" && <Package />}
        {activeTab === "Posts" && (
          <Post />
        )}
      </div>
    </>
  );
}

export default NavTabs;
