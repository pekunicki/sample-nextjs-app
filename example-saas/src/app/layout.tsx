import Nav from "@/components/nav";
import { RACES } from "../../public/data";

import "./globals.css";

export const metadata = {
  title: "Running Events Booking",
  description: "A simple booking app for running events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav races={RACES} />
        <main className="mx-auto max-w-full md:max-w-6xl h-full min-h-screen px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
