import { Width } from "@/types";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export type ContentProps = ComponentProps<"div"> & {
  width: Width;
};

export const Content = ({ width, className, ...props }: ContentProps) => {
  return (
    <div
      {...props}
      data-width={width}
      className={cn(
        "mx-auto w-full data-[width='full']:max-w-full data-[width='lg']:max-w-7xl data-[width='md']:max-w-6xl data-[width='sm']:max-w-5xl data-[width='xl']:max-w-[1400px]",
        className,
      )}
    />
  );
};
