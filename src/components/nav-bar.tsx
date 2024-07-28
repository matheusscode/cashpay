import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ModeToggle } from "./mode-toggle";
import { BottomBar } from "./bottom-bar";

export type NavBarProps = ComponentProps<"header"> & {};

export const NavBar = ({ className, ...props }: NavBarProps) => {
  return (
    <header
      {...props}
      className={cn(
        "sticky top-0 w-full bg-background p-4 shadow-sm",
        className,
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <BottomBar />
        <ModeToggle />
      </nav>
    </header>
  );
};
