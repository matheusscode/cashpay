"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { ComponentProps, ElementType, useState, useEffect } from "react";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";

export type ModuleItem = {
  id: string;
  label: string;
  icon?: ElementType;
  href?: string;
  subModules?: ModuleItem[];
};

export type ModuleListProps = ComponentProps<"ul"> & {
  collapside?: boolean;
  items: ModuleItem[];
};

export const ModuleList = ({
  className,
  collapside,
  items,
  ...props
}: ModuleListProps) => {
  const pathname = usePathname();
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());

  useEffect(() => {
    const initialOpenModules = new Set<string>();
    items.forEach((module) => {
      if (module.subModules) {
        module.subModules.forEach((subModule) => {
          if (subModule.href === pathname) {
            initialOpenModules.add(module.id);
          }
        });
      }
      if (module.href === pathname) {
        initialOpenModules.add(module.id);
      }
    });
    setOpenModules(initialOpenModules);
  }, [pathname, items]);

  const toggleModule = (id: string) => {
    setOpenModules((prevOpenModules) => {
      const newOpenModules = new Set(prevOpenModules);
      if (newOpenModules.has(id)) {
        newOpenModules.delete(id);
      } else {
        newOpenModules.add(id);
      }
      return newOpenModules;
    });
  };

  const moduleContent = (module: ModuleItem) => {
    const collapsedItem = module.subModules && openModules.has(module.id);

    return (
      <div className="flex w-full items-center">
        <div className="flex items-center gap-1.5">
          {module.icon && <module.icon className="module-icon" size={25} />}
          <span className="line-clamp-1 w-full overflow-hidden text-ellipsis text-left text-[14px] leading-7 tracking-wide">
            {module.label}
          </span>
        </div>
        {module.subModules && (
          <ChevronDownIcon
            size={25}
            data-collapside={collapsedItem}
            className="module-icon ml-auto transition-transform data-[collapside=true]:rotate-180"
          />
        )}
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <ul {...props} className={cn("flex flex-col gap-1.5", className)}>
        {items.map((module) => {
          const collapsedItem = module.subModules && openModules.has(module.id);

          return (
            <div key={module.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Collapsible>
                    <div>
                      {module.href ? (
                        <Link
                          href={module.href}
                          className="module"
                          data-active={pathname === module.href}
                        >
                          {moduleContent(module)}
                        </Link>
                      ) : (
                        <CollapsibleTrigger
                          className="module"
                          onClick={() => toggleModule(module.id)}
                        >
                          {moduleContent(module)}
                        </CollapsibleTrigger>
                      )}
                      {module.subModules && (
                        <CollapsibleContent>
                          <ul
                            data-collapside={collapsedItem}
                            className="sub-module-list relative"
                          >
                            <div className="absolute left-6 h-full w-1 border-l border-solid border-slate-500/20" />
                            {module.subModules.map((subModule) => (
                              <Tooltip key={subModule.id}>
                                <TooltipTrigger>
                                  <li className="sub-module">
                                    <Link
                                      href={subModule.href!}
                                      className="module border-b-0"
                                      data-active={pathname === subModule.href!}
                                    >
                                      {moduleContent(subModule)}
                                    </Link>
                                  </li>
                                </TooltipTrigger>
                                {!collapside && (
                                  <TooltipContent side="right">
                                    <p>{subModule.label}</p>
                                  </TooltipContent>
                                )}
                              </Tooltip>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      )}
                    </div>
                  </Collapsible>
                </TooltipTrigger>
                {!collapside && (
                  <TooltipContent side="right">
                    <p>{module.label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
