"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { DEMO_DAY_TEAMS } from "@/constants/demoDayData";
import { 
  Search,
  ArrowDown
} from "lucide-react";

export function DemoDayContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTeams = useMemo(() => {
    return DEMO_DAY_TEAMS.filter((team) => {
      return (
        team.startupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.founderName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Professional Editorial Split Hero Section with Blurred Grid Mesh */}
      <section className="relative w-full pt-24 md:pt-28 pb-12 sm:pb-16 bg-surface/60 border-b border-primary/10 dark:border-white/10 overflow-hidden">
        {/* Blurred Multi-Color Mesh Gradient Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top-left Crimson Orb */}
          <div className="absolute -top-12 left-10 w-[500px] h-[450px] bg-gradient-to-br from-[#C8102E]/25 to-pink-500/10 rounded-full blur-[90px] mix-blend-multiply dark:mix-blend-screen opacity-70" />
          {/* Center-Right Royal Cobalt Orb */}
          <div className="absolute top-1/4 right-0 w-[550px] h-[500px] bg-gradient-to-bl from-[#004A99]/25 via-blue-600/15 to-transparent rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-70" />
          {/* Bottom-Center Warm Amber/Indigo Accent */}
          <div className="absolute -bottom-16 left-1/3 w-[450px] h-[350px] bg-gradient-to-tr from-purple-500/15 via-[#C8102E]/10 to-transparent rounded-full blur-[90px] opacity-60" />
        </div>

        {/* Structural Grid Mesh Texture Layer (Balanced Refined Level) */}
        <div 
          className="absolute inset-0 z-0 opacity-50 dark:opacity-35 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 74, 153, 0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 74, 153, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 100%)"
          }}
        />

        {/* Diagonal Perspective Mesh Lines with Blur Filter */}
        <div 
          className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none blur-[0.6px]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(200, 16, 46, 0.10) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(200, 16, 46, 0.10) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 35%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 35%, transparent 90%)"
          }}
        />

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Clean Minimal Hero Headline & Action */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-start">
              {/* Main Heading */}
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[56px] text-foreground tracking-tight leading-[1.08] mb-3">
                Grand Demo Day
              </h1>

              {/* Sub Heading */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#C8102E] dark:text-[#FF4D5E] tracking-tight mb-4">
                Pitching the Next Unicorn Startups
              </h2>

              {/* Description */}
              <p className="text-secondary-text text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                20 shortlisted founders pitch live to top VCs and investors for Bennett Hatchery incubation.
              </p>

              {/* Action Link to Finalists Grid */}
              <a
                href="#startups-grid"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C8102E] hover:bg-[#E63946] text-white font-semibold text-sm transition-all shadow-lg shadow-[#C8102E]/25 hover:shadow-xl active:scale-[0.99]"
              >
                <span>Explore Finalist Startups</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Framed Official Poster Banner (Significantly Increased Size) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-xl lg:max-w-none rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/90 via-white/50 to-white/10 dark:from-white/20 dark:via-white/10 dark:to-transparent border border-white/70 dark:border-white/20 shadow-[0_28px_70px_rgba(0,0,0,0.2)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-950 flex items-center justify-center shadow-inner">
                  <img
                    src="/demo day.jpeg"
                    alt="Bennett University Demo Day 2026 Announcement Banner"
                    className="w-full h-auto object-contain block select-none hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Startups Showcase Section */}
      <section id="startups-grid" className="pt-12 md:pt-16 pb-20 md:pb-28 bg-background relative z-10">
        <Container>
          {/* Controls Bar: Heading & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-10 pb-6 border-b border-primary/10 dark:border-white/10">
            <div>
              <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
                Demo Day Finalist Cohort
              </h1>
              <p className="text-secondary-text text-sm sm:text-base mt-1">
                Showing {filteredTeams.length} of {DEMO_DAY_TEAMS.length} shortlisted startups competing at the Grand Finale
              </p>
            </div>

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search startup or founder..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-primary/15 dark:border-white/10 text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeams.map((team, idx) => {
              const formattedNo = String(team.sNo).padStart(2, "0");
              const isComingSoon = team.stage === "Coming Soon" || team.startupName === "Coming Soon";

              return (
                <MotionWrapper 
                  key={team.sNo} 
                  variant="slideUp" 
                  delay={0.03 * (idx % 10)}
                  className="h-full"
                >
                  <div className={`group relative flex flex-col justify-between h-full p-6 rounded-[22px] bg-surface border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${
                    isComingSoon 
                      ? "border-dashed border-primary/30 dark:border-white/20 bg-surface/70" 
                      : "border-primary/10 dark:border-white/10"
                  }`}>
                    {/* Top Accent Gradient Bar */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${
                      isComingSoon 
                        ? "bg-gradient-to-r from-amber-400 to-accent" 
                        : "bg-gradient-to-r from-primary via-primary-hover to-accent"
                    }`} />

                    {/* Background Number Watermark */}
                    <div className="absolute -bottom-4 -right-2 text-[80px] font-black text-primary/5 dark:text-white/5 opacity-40 pointer-events-none select-none leading-none tracking-tighter">
                      {formattedNo}
                    </div>

                    <div>
                      {/* Top Header: Logo */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        {/* Startup Logo Container */}
                        <div className={`relative w-16 h-16 rounded-2xl bg-white p-1.5 border border-primary/10 shadow-sm overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isComingSoon ? "opacity-80 group-hover:scale-105" : "group-hover:scale-105"
                        }`}>
                          {team.logo ? (
                            <Image
                              src={team.logo}
                              alt={`${team.startupName} Logo`}
                              fill
                              className="object-contain p-1"
                              sizes="64px"
                            />
                          ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center">
                              <span className="font-heading font-black text-lg text-primary/40 select-none">
                                {isComingSoon ? "⏳" : team.startupName.substring(0, 2).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Startup Name */}
                      <div className="mb-2">
                        <h3 className={`font-heading font-bold text-xl sm:text-2xl tracking-tight line-clamp-1 transition-colors ${
                          isComingSoon 
                            ? "text-foreground/90 italic group-hover:text-amber-600" 
                            : "text-foreground group-hover:text-primary"
                        }`}>
                          {team.startupName}
                        </h3>
                        {team.category && !isComingSoon && (
                          <span className="inline-block mt-1 text-[11px] font-semibold uppercase tracking-wider text-primary/80 dark:text-primary-hover/90">
                            {team.category}
                          </span>
                        )}
                      </div>

                      {/* Description with internal scroll for full content readability */}
                      {team.description && (
                        <div className="h-28 overflow-y-auto pr-2 mb-4 custom-scrollbar">
                          <p className="text-secondary-text text-xs sm:text-[13px] leading-relaxed select-text text-justify">
                            {team.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Founder Footer */}
                    <div className="relative z-10 pt-4 border-t border-primary/10 dark:border-white/10 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                          isComingSoon 
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          {isComingSoon ? "⏳" : team.founderName.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-muted uppercase tracking-wider">
                            {isComingSoon ? "Status" : "Founder"}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-foreground line-clamp-1">
                            {team.founderName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>

          {/* Empty state if search yields nothing */}
          {filteredTeams.length === 0 && (
            <div className="text-center py-20 bg-surface rounded-3xl border border-primary/10 p-8">
              <Search className="w-10 h-10 text-muted mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-1">No startups found</h3>
              <p className="text-secondary-text text-sm mb-4">
                No finalists matched your query &ldquo;{searchQuery}&rdquo;. Try another name or category.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
