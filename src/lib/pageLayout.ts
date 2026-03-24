import { cn } from "@/lib/utils";

/** Single site-wide horizontal rhythm: use with `container` (padding: 0 in tailwind). */
export const pageContainerClass = "container mx-auto px-4 sm:px-6 lg:px-8";

export function cnPageContainer(...inputs: (string | undefined)[]) {
  return cn(pageContainerClass, ...inputs);
}
