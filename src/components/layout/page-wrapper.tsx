import { Width } from "@/types";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export type PageWrapperProps = ComponentProps<"main"> & {
  width: Width;
};

export const PageWrapper = ({
  width,
  className,
  ...props
}: PageWrapperProps) => {
  return (
    <main
      {...props}
      data-width={width}
      className={cn(
        "mx-auto w-full data-[width='full']:max-w-full data-[width='lg']:max-w-7xl data-[width='md']:max-w-6xl data-[width='sm']:max-w-5xl data-[width='xl']:max-w-[1400px]",
        className,
      )}
    />
  );
};
