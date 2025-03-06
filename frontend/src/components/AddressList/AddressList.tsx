import { fetchAddresses } from "@/services/api";
import AppContext from "@/hooks/context";

import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Address } from "shared-types";

import "./AddressList.css";

export default function AddressList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["addressList"],
    queryFn: fetchAddresses,
  });

  const { activeAddress, setActiveAddress } = useContext(AppContext)

  const handleClick = (id:number) => {
    setActiveAddress(id)
  }

  // Loading
  if (isLoading) return <div>Loading...</div>;

  // Error
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  // Data
  return (
    <ul className="flex flex-col gap-2 p-2">
      {data.map((address: Address) => (
        <li 
          key={address.id} 
          className={`
            list-entry 
            ${activeAddress === address.id ? "bg-amber-200 border-2" : "bg-amber-50"}
          `}
          onClick={() => handleClick(address.id)}
        >
          <b>Address:</b> {address.address}
        </li>
      ))}
    </ul>
  );
}
