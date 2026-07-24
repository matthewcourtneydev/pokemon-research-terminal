import {
    BookOpen,
    Boxes,
    ChevronRight,
    FlaskConical,
    Shield,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  const quickActions = [
    {
      title: "Explore Pokédex",
      description: "Research species, types, abilities, and statistics.",
      path: "/pokedex",
      icon: BookOpen,
    },
    {
      title: "Manage Collection",
      description: "Track the Pokémon you own and want to build.",
      path: "/collection",
      icon: Boxes,
    },
    {
      title: "Build a Team",
      description: "Analyze team composition and defensive coverage.",
      path: "/teams",
      icon: Shield,
    },
    {
      title: "Plan a Raid",
      description: "Find counters and prepare your raid party.",
      path: "/raids",
      icon: FlaskConical,
    },
  ];
  
  export function HomePage() {
    return (
      <section className="page">
        <div className="hero-panel">
          <div className="hero-glow" />
  
          <div className="hero-content">
            <p className="page-eyebrow">Research system online</p>
            <h2>Welcome to the Pokémon Research Terminal</h2>
            <p>
              Research species, organize your collection, and prepare
              stronger battle teams from one unified workspace.
            </p>
  
            <div className="hero-actions">
              <Link className="button button--primary" to="/pokedex">
                Open Pokédex
                <ChevronRight size={18} />
              </Link>
  
              <Link className="button button--secondary" to="/collection">
                View collection
              </Link>
            </div>
          </div>
        </div>
  
        <div className="section-heading">
          <div>
            <p className="page-eyebrow">Quick access</p>
            <h3>Research tools</h3>
          </div>
        </div>
  
        <div className="quick-action-grid">
          {quickActions.map((action) => {
            const Icon = action.icon;
  
            return (
              <Link
                className="quick-action-card"
                to={action.path}
                key={action.path}
              >
                <span className="quick-action-icon">
                  <Icon size={22} />
                </span>
  
                <span className="quick-action-copy">
                  <strong>{action.title}</strong>
                  <small>{action.description}</small>
                </span>
  
                <ChevronRight
                  className="quick-action-arrow"
                  size={19}
                />
              </Link>
            );
          })}
        </div>
      </section>
    );
  }