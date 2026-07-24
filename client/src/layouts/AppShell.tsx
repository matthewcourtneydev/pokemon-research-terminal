import { Menu, Search, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { AppSidebar } from "../components/navigation/AppSidebar";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/pokedex": "Pokédex",
  "/collection": "Collection",
  "/teams": "Team Builder",
  "/raids": "Raid Planner",
  "/favorites": "Favorites",
  "/settings": "Settings",
};

export function AppShell() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const location = useLocation();

  const pageTitle =
    pageTitles[location.pathname] ?? "Research Terminal";

  useEffect(() => {
    setIsNavigationOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isNavigationOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavigationOpen]);

  return (
    <div className="app-shell">
      <AppSidebar
        isOpen={isNavigationOpen}
        onClose={() => setIsNavigationOpen(false)}
      />

      <div className="app-workspace">
        <header className="app-header">
          <div className="header-title-group">
            <button
              className="icon-button menu-button"
              type="button"
              aria-label="Open navigation"
              aria-expanded={isNavigationOpen}
              onClick={() => setIsNavigationOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="header-eyebrow">Pokémon Research Terminal</p>
              <h1>{pageTitle}</h1>
            </div>
          </div>

          <div className="header-actions">
            <button
              className="search-trigger"
              type="button"
              aria-label="Search Pokémon"
            >
              <Search size={19} />
              <span>Search Pokémon</span>
              <kbd>⌘ K</kbd>
            </button>

            <button
              className="profile-button"
              type="button"
              aria-label="Open user menu"
            >
              <UserRound size={20} />
            </button>
          </div>
        </header>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}