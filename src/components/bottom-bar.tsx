"use client";

import * as React from "react";
import { FlowerIcon, Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ModuleList } from "./module-list";
import { modules } from "@/mock/modules";

export type BottomBarProps = {};

export function BottomBar() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger className="hidden max-[1350px]:block" asChild>
        <Button variant="outline">
          <FlowerIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex w-full items-center justify-center px-24 py-4">
        <DrawerHeader>
          <DrawerTitle className="py-4">Lista de Módulos</DrawerTitle>
        </DrawerHeader>
        <ModuleList collapside={true} items={modules} />
      </DrawerContent>
    </Drawer>
  );
}
