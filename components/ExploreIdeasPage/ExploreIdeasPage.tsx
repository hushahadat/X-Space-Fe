"use client";

import { useState } from "react";
import ideasData from "./data.json";
import IdeaCard from "./IdeaCard";
import IdeaDetailModal from "./IdeaDetailModal";
import { Search } from "lucide-react";

export default function ExploreIdeasPage() {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedIdea, setSelectedIdea] = useState<any>(null);
  const [search, setSearch] = useState("");

  const filteredIdeas = ideasData.filter((idea) =>
    idea.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-linear-to-b from-pinkLight to-pinkDark py-16 px-6 md:px-16">
      {/* Page Heading */}
      <h1 className="text-center text-4xl md:mt-12 md:text-5xl font-prata text-primary mb-16">
        Explore Ideas
      </h1>

      <div className="bg-secondary shadow-md rounded-2xl p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-prata text-primary">
            Explore our collection
          </h2>
          <p className="text-gray-500 text-sm">
            Found {filteredIdeas.length} results
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search ideas"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full shadow-sm focus:ring-1 focus:ring-[#D47A70] focus:outline-none"
          />
        </div>

        {/* Grid Listing */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.slice(0, visibleCount).map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              onClick={() => setSelectedIdea(idea)}
            />
          ))}
        </div>

        {/* See More */}
        {visibleCount < filteredIdeas.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition font-lato"
            >
              See more
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selectedIdea && (
        <IdeaDetailModal
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      )}
    </section>
  );
}
