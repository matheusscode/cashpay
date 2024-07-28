import { ModuleItem } from "@/components/module-list";
import {
  HomeIcon,
  DollarSignIcon,
  BarChartIcon,
  TrendingUpIcon,
  FilePlusIcon,
  ListIcon,
  UserIcon,
  SettingsIcon,
  FileTextIcon,
  CreditCardIcon,
} from "lucide-react";

export const modules: ModuleItem[] = [
  {
    id: "1",
    label: "Painel de Controle",
    icon: HomeIcon,
    subModules: [
      {
        id: "1-1",
        label: "Visão Geral",
        icon: BarChartIcon,
        href: "/",
      },
      {
        id: "1-2",
        label: "Análise de Desempenho",
        icon: TrendingUpIcon,
        href: "/dashboard/performance",
      },
    ],
  },
  {
    id: "2",
    label: "Gestão de Transações",
    icon: DollarSignIcon,
    subModules: [
      {
        id: "2-1",
        label: "Adicionar Transação",
        icon: FilePlusIcon,
        href: "/transactions/add",
      },
      {
        id: "2-2",
        label: "Transações Recentes",
        icon: ListIcon,
        href: "/transactions/recent",
      },
      {
        id: "2-3",
        label: "Relatórios de Transações",
        icon: FileTextIcon,
        href: "/transactions/reports",
      },
    ],
  },
];
