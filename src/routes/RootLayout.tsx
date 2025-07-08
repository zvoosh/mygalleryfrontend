import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const RootLayout = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
      },
    },
  });
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
        <Header />
        <Outlet />
      </QueryClientProvider>
    </div>
  );
};

export default RootLayout;
