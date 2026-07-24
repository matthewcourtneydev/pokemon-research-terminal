import {
    BookOpen,
    Boxes,
    FlaskConical,
    Heart,
    Home,
    Settings,
    Shield,
    X,
  } from "lucide-react";
  import { NavLink } from "react-router-dom";
  
  type AppSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
  };
  
  const navigationItems = [
    {
      label: "Home",
      path: "/",
      icon: Home,
    },
    {
      label: "Pokédex",
      path: "/pokedex",
      icon: BookOpen,
    },
    {
      label: "Collection",
      path: "/collection",
      icon: Boxes,
    },
    {
      label: "Team Builder",
      path: "/teams",
      icon: Shield,
    },
    {
      label: "Raid Planner",
      path: "/raids",
      icon: FlaskConical,
    },
    {
      label: "Favorites",
      path: "/favorites",
      icon: Heart,
    },
  ];
  
  export function AppSidebar({
    isOpen,
    onClose,
  }: AppSidebarProps) {
    return (
      <>
        {isOpen && (
          <button
            className="sidebar-backdrop"
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
          />
        )}
  
        <aside
          className={`app-sidebar ${isOpen ? "app-sidebar--open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="sidebar-header">
            <NavLink
              className="brand"
              to="/"
              onClick={onClose}
            >
              <span className="brand-mark" aria-hidden="true">
                RT
              </span>
  
              <span className="brand-copy">
                <strong>Research Terminal</strong>
                <small>Pokémon Intelligence</small>
              </span>
            </NavLink>
  
            <button
              className="icon-button sidebar-close"
              type="button"
              aria-label="Close navigation"
              onClick={onClose}
            >
              <X size={22} />
            </button>
          </div>
  
          <nav className="sidebar-navigation">
            <p className="sidebar-label">Workspace</p>
  
            <ul className="navigation-list">
              {navigationItems.map((item) => {
                const Icon = item.icon;
  
                return (
                  <li key={item.path}>
                    <NavLink
                      className={({ isActive }) =>
                        `navigation-link ${
                          isActive ? "navigation-link--active" : ""
                        }`
                      }
                      to={item.path}
                      end={item.path === "/"}
                      onClick={onClose}
                    >
                      <Icon size={20} aria-hidden="true" />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
  
          <div className="sidebar-footer">
            <NavLink
              className={({ isActive }) =>
                `navigation-link ${
                  isActive ? "navigation-link--active" : ""
                }`
              }
              to="/settings"
              onClick={onClose}
            >
              <Settings size={20} aria-hidden="true" />
              <span>Settings</span>
            </NavLink>
  
            <div className="research-status">
              <span className="status-indicator" />
              <div>
                <strong>Terminal online</strong>
                <small>Systems operational</small>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }