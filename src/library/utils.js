import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

{/* cn stands for classname */}

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}