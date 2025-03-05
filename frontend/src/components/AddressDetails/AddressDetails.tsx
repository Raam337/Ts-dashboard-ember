import { useContext, useEffect, useState } from "react";
import { Address } from "shared-types";
import api from "../../services/api";
import AppContext from "../../hooks/context";
import { MdDeleteForever, MdOutlineClose, MdOutlineEmail } from "react-icons/md";
import "./AddressDetails.css"

const labelData = {
  "Address ID": "id",
  "Address": "address",
  "Country": "country",
  "Zip Code": "zip"
}

export default function AddressDetails() {
  const { activeAddress, setActiveAddress } = useContext(AppContext);
  const [addressData, setAddressData] = useState<Address | null>(null);

  useEffect(() => {
    if (activeAddress) {
      api
        .get(`/address/${activeAddress}`)
        .then((res) => setAddressData(res.data));
    }
  }, [activeAddress]);

  if(!addressData || !activeAddress) return "Select entry"

  return (
    <>
      <menu className="menu-bar">
        <button 
          className="action-button bg-blue-600"
          onClick={()=> alert(`Email to ${addressData?.address} to be submitted.`) }
        >
          <MdOutlineEmail color="white" size="25px"/>
        </button>

        <button 
          className="action-button bg-red-600"
          onClick={()=>{}}
        >
          <MdDeleteForever color="white" size="25px"/>
        </button>

        <button 
          className="action-button bg-gray-400 ml-auto"
          onClick={()=>{setActiveAddress(null)}}
        >
          <MdOutlineClose color="white" size="25px"/>
        </button>

      </menu>

      <section>
        <h2 className="text-xl my-3">Detailed information</h2>
        {Object.entries(labelData).map( ([key,value]) => (
          <div key={key}>
            <b>{key}:</b> {addressData[value as keyof Address]}
          </div>
        )) }
      </section>
    </>
  );
}
