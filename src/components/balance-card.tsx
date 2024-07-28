import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { ComponentProps, ElementType } from "react";

export type BalanceCardProps = ComponentProps<"div"> & {
  title: string;
  value: number;
  icon?: ElementType;
};

export const BalanceCard = ({
  className,
  title,
  value,
  icon: Icon,
  ...props
}: BalanceCardProps) => {
  return (
    <Card
      {...props}
      className={cn(
        "flex h-28 w-full max-w-[400px] flex-col justify-center gap-2 rounded-sm border border-solid border-slate-500/20 p-4 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <CardDescription className="text-lg">{value}</CardDescription>
          </CardContent>
        </div>

        {Icon && <Icon />}
      </div>
    </Card>
  );
};
