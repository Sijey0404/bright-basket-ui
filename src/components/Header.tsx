import { WashingMachine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <WashingMachine className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">LAUNDRY HUB</h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-3">
            <Button variant="nav" size="default">
              SERVICES
            </Button>
            <Button variant="nav" size="default">
              PROFILE
            </Button>
            <Button variant="outline" size="default">
              LOGOUT
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
