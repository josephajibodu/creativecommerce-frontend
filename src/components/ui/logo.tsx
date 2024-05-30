import { cn } from "@/lib/utils";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Chivo_Mono } from "next/font/google";

const logoFont = Chivo_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  return (
    <div className="flex items-end gap-1">
      <ShoppingBagIcon className="h-6 w-6 text-orange-700" />
      <span
        className={cn(
          "sr-onlyd font-bold text-lg leading-none italic bg-gradient-to-r from-orange-700 to-orange-950 bg-clip-text text-transparent",
          logoFont.className
        )}
      >
        Commerce
      </span>
    </div>
  );
};

Logo.displayName = "Logo";

export { Logo };
