import { AddressList } from "@/components/components";
import { MyProvider } from "@/hooks/context";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { Mock, vi } from "vitest";
import * as apiModule from "@/services/api";


vi.mock("@/services/api", () => ({
  ...vi.importActual("@/services/api"),
  fetchAddresses: vi.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockAddresses = [
  { id: 1, address: "Duomo 15", country: "Italy", zip:"12345" },
  { id: 2, address: "Chapelle De 85", country: "France", zip:"FR1452" },
];

describe('AddressList', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
    (apiModule.fetchAddresses as Mock).mockResolvedValue(mockAddresses);
    render(
      <QueryClientProvider client={queryClient}>
        <MyProvider>
          <AddressList />
        </MyProvider>
      </QueryClientProvider>
    );
  });

  it('should display Skeleton on load', () => {
    const skeleton = screen.getAllByTestId("skeleton");
    expect(skeleton).toBeDefined();
  });

  it('should show two addresses after receiving a response', async () => {
    await waitFor(() => screen.findByText("Duomo 15"));

    const addressElements = screen.getAllByText(/Duomo 15|Chapelle De 85/);
    expect(addressElements).toHaveLength(2);
  });

  it('should show no addresses when the response is empty', async () => {

    (apiModule.fetchAddresses as Mock).mockResolvedValue([]);

    render(
      <QueryClientProvider client={queryClient}>
        <MyProvider>
          <AddressList />
        </MyProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const addressElements = screen.queryAllByText(/Duomo 15|Chapelle De 85/);
      expect(addressElements).toHaveLength(0); // No addresses should be displayed
    });
  })
})