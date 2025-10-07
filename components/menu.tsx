"use client";

import Icon from "@/components/icon";
import { MENU_LIST, ROUTES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === ROUTES.DASHBOARD) {
      return pathname === ROUTES.DASHBOARD;
    }
    return pathname.startsWith(href);
  };
  return (
    <ul role="list" className="-mx-2 space-y-1">
      {MENU_LIST.map((item) => {
        const isActive = isActiveRoute(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold ${
                isActive
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              }`}
            >
              <Icon
                icon={item.icon}
                className={`size-6 shrink-0 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-400 group-hover:text-indigo-600"
                }`}
              />
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
