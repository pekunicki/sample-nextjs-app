"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type Race = {
  id: number;
  title: string;
  slug: string;
};

export type Races = {
  races: Race[];
};

const Nav = ({ races }: Races) => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white shadow-lg mb-10">
      <ul className="flex justify-between items-center px-4 py-3">
        <li>
          <Link href="/">
            <p className={`${pathname === `/`}` ? "text-orange-300" : ""}>
              Home
            </p>
          </Link>
        </li>
        {races.map((race) => (
          <li key={race.id}>
            <Link href={`/races/${race.slug}`}>
              <p
                className={`hover:text-orange-200 hover:bg-orange-900 p-2 transition delay-150 duration-300 ease-in-out rounded-md ${
                  pathname === `/races/${race.slug}` ? "text-orange-300" : ""
                }`}
              >
                {race.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
