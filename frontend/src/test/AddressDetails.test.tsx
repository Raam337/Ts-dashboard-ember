import { AddressDetails } from "@/components/components";
import { MyProvider } from "@/hooks/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

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

const mockAddressDetails = [
  { id: 1, address: "Duomo 15", country: "Italy", zip:"12345" },
];

describe('AddressDetails', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
    (apiModule.fetchAddresses as Mock).mockResolvedValue(mockAddressDetails);
    render(
      <QueryClientProvider client={queryClient}>
        <MyProvider>
          <AddressDetails />
        </MyProvider>
      </QueryClientProvider>
    );
  });

  it('should display Select on load', () => {
    const entry = screen.getByText("Select entry");
    expect(entry).toBeDefined();
  });
})