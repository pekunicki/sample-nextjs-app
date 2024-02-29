"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        A simple playground for running events using Next.js and Taildwind CSS
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
