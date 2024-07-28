"use client";

import { useState } from "react";
import { ModuleList } from "./module-list";
import { modules } from "@/mock/modules";

export const SideBar = () => {
  const [collapside, setCollapside] = useState<boolean>(true);

  return (
    <div
      data-collapside={collapside}
      className="sticky top-0 flex h-screen w-full max-w-[90px] flex-col gap-6 border-r border-solid border-slate-500/20 px-4 py-10 data-[collapside=true]:max-w-[300px] max-[1350px]:hidden"
    >
      <div className="h-10 pb-12 pl-4 pt-2">
        <h1 className="text-2xl">CashPay</h1>
      </div>
      <div>
        <ModuleList items={modules} collapside={collapside} />
      </div>
    </div>
  );
};
