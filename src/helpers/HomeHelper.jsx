import { Heart } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CheckSquare } from "lucide-react";

export const tools = [
  {
    title: "To-Do List",
    description:
      "A simple todo-list app to track, manage, and complete your daily tasks.",
    icon: CheckSquare,
    path: "/todolist",
    color: "text-primary",
    bgColor: "bg-primary/10",
    available: true,
    features: [
      "Add new tasks with descriptions",
      "Mark tasks as completed or active",
      "Filter tasks by All, Active, or Completed",
      "Display total, active, and completed task statistics",
    ],
  },
  {
    title: "Expense Tracker",
    description:
      "A simple money manager app to track and manage your daily expenses.",
    icon: DollarSign,
    path: "/expense-tracker",
    color: "text-success",
    bgColor: "bg-success/10",
    available: true,
    features: [
      "Add new transactions with description and amount",
      "Categorize transactions as Income or Expense",
      "Display total income, total expenses, and remaining balance",
      "Filter transaction history by All, Income, or Expense",
    ],
  },
  {
    title: "Health Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    icon: Heart,
    path: "/health-tracker",
    color: "text-error",
    bgColor: "bg-error/10",
    available: false,
    features: ["Cihuyy", "Cihuyy", "Cihuyy", "Cihuyy"],
  },
];
