import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
const RootLayout = () => {
  const [queryClient] = useState(() => new QueryClient());
  const location = useLocation();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#252628",
        overflowX: "hidden",
        overflowY: "auto",
      }}
      className="scrollable-div"
    >
      <QueryClientProvider client={queryClient}>
        {location.pathname !== "/" && <Header />}
        <Outlet />
      </QueryClientProvider>
    </div>
  );
};

export default RootLayout;
