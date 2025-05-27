"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const locations = [
  { id: 1, name: "København", path: "/events?location=1" },
  { id: 2, name: "Aarhus", path: "/events?location=2" },
  { id: 3, name: "Odense", path: "/events?location=3" },
];

const Burger = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-1 rounded-md border border-kurator-primary bg-kurator-bg px-4 py-2 text-sm text-kurator-primary font-semibold hover:bg-kurator-primary hover:text-kurator-bg transition">
        Lokationer
        <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
        {locations.map((loc) => (
          <MenuItem key={loc.id}>
            {({ active }) => (
              <Link
                href={loc.path}
                className={`block px-4 py-2 text-sm ${
                  active
                    ? "bg-kurator-primary text-kurator-bg"
                    : "text-kurator-primary"
                }`}
              >
                {loc.name}
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Burger;
