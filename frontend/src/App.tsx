import AddressPage from "./pages/AddressPage";
import { Navbar } from "./components/components";
import { MyProvider } from "./hooks/context";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <MyProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <AddressPage></AddressPage>
      </QueryClientProvider>
    </MyProvider>
  );
}

export default App;
