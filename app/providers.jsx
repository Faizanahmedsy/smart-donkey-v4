import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  // {
  // defaultOptions: {
  //   queries: {
  //     refetchOnWindowFocus: false,
  //     retry: false,
  //   },
  // },
  // }

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default Providers;
