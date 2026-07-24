import {
    Badge,
    Button,
    Card,
    CardContent,
    CardHeader,
  } from "../components/ui";
  
  const pokemonTypes = [
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ghost",
    "dragon",
    "fairy",
  ] as const;
  
  export function SettingsPage() {
    return (
      <section className="page">
        <div className="page-heading">
          <p className="page-eyebrow">Design system</p>
          <h2>Interface components</h2>
          <p>
            A working preview of the reusable components used throughout
            the research terminal.
          </p>
        </div>
  
        <Card>
          <CardHeader>
            <h3 className="preview-title">Buttons</h3>
          </CardHeader>
  
          <CardContent>
            <div className="component-preview-row">
              <Button>Primary action</Button>
  
              <Button variant="secondary">
                Secondary action
              </Button>
  
              <Button variant="ghost">
                Ghost action
              </Button>
            </div>
          </CardContent>
        </Card>
  
        <Card variant="raised">
          <CardHeader>
            <h3 className="preview-title">Pokémon types</h3>
          </CardHeader>
  
          <CardContent>
            <div className="component-preview-row">
              {pokemonTypes.map((type) => (
                <Badge key={type} variant={type}>
                  {type}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }