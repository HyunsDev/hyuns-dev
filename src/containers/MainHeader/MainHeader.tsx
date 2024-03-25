import { useTheme } from "@/components/themeProvider";
import { Title } from "@/components/title/Title";
import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ThemeButton() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      onClick={() => {
        setTheme(
          theme === "dark" ? "light" : theme === "light" ? "system" : "dark"
        );
      }}
    >
      {theme === "dark" && <MoonIcon />}
      {theme === "light" && <SunIcon />}
      {theme === "system" && <DesktopIcon />}
    </Button>
  );
}

export function MainHeader() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window?.scrollY === 0);
    };
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed z-10 w-[100dvw] top-0 left-0 h-[60px]",
        isTop ? "border-transparent bg-transparent" : "backdrop-blur"
      )}
    >
      <div className="flex justify-between items-center max-w-max-screen w-full h-full px-4 md:px-8 m-auto">
        <div>
          <Link to="/">
            <Title fill="hsl(var(--foreground))" />
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <a href="https://hyuns.space">
            <Button variant="ghost" className="px-2">
              hyuns.space
            </Button>
          </a>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
