import { WashingMachine, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <WashingMachine className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">LAUNDRY HUB</h1>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="default" className="font-medium">
              Home
            </Button>
            <Button variant="ghost" size="default" className="font-medium">
              Services
            </Button>
            <Button variant="ghost" size="default" className="font-medium">
              Pricing
            </Button>
            <Button variant="ghost" size="default" className="font-medium">
              FAQ
            </Button>
          </nav>

          {/* Right Side - CTA and Profile */}
          <div className="flex items-center gap-3">
            <Button variant="cta" size="default" className="gap-2">
              <Plus className="h-4 w-4" />
              Place New Order
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
