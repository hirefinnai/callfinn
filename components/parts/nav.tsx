// Component Imports
import AccountWidget from "../auth/widget";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../mode-toggle";

// Image Imports
import Logo from "@/public/logo.svg";
import LogoDark from "@/public/logo-dark.svg";

// Icon Imports
import {
  BarChart,
  Contact,
  Layers,
  Settings,
  LifeBuoy,
  Disc3,
} from "lucide-react";

const links = [
  { href: "/", text: "Dashboard", icon: BarChart },
  { href: "/endpoints", text: "Endpoints", icon: Layers },
  { href: "/leads", text: "Leads", icon: Contact },
  { href: "/logs", text: "Logs", icon: Disc3 },
];

const otherLinks = [
  { href: "/support", text: "Support", icon: LifeBuoy },
  { href: "/settings", text: "Settings", icon: Settings },
];

export default function Nav() {
  return (
    <nav className="p-4 flex flex-col gap-4 justify-between h-screen">
      <div className="border bg-muted/25 rounded-lg p-6">
        <Image
          className="dark:invert"
          src={Logo}
          alt="Router.so Logo"
          width={120}
          height={22.24}
        ></Image>
      </div>
      <div className="border bg-muted/25 rounded-lg flex flex-col justify-between p-6 h-full">
        <div className="flex flex-col gap-8">
          <div className="grid gap-2">
            {links.map((link) => (
              <NavLink key={link.href} icon={link.icon} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid gap-2">
            {otherLinks.map((link) => (
              <NavLink key={link.href} icon={link.icon} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <AccountWidget />
            <div className="flex justify-between items-center gap-2">
              <ModeToggle />
              <p className="text-xs text-muted-foreground opacity-50">
                © router.so, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children, icon: Icon }: NavLinkProps) => {
  return (
    <Link
      className="flex items-center gap-2 group p-2 rounded-md -ml-2 hover:bg-accent transition-all"
      href={href}
    >
      <Icon
        className="text-muted-foreground group-hover:text-foreground transition-all"
        size={20}
      />
      {children}
    </Link>
  );
};
