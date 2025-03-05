import api from "../../services/api";
import { Address } from "shared-types";
import { useQuery } from "@tanstack/react-query";
import "./AddressList.css";
import { useContext } from "react";
import AppContext from "../../hooks/context";

const fetchAddresses = async () => {
  const response = await api.get("/address");
  return response.data;
};

export default function AddressList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["addresses"],
    queryFn: fetchAddresses,
  });

  const { activeAddress, setActiveAddress } = useContext(AppContext)

  const handleClick = (id:number) => {
    setActiveAddress(id)
  }

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  // Error state
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  // Data state
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
