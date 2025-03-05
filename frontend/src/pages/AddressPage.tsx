import { useContext, useEffect, useState } from "react";
import { AddressDetails, AddressList } from "../components/components";
import AppContext from "../hooks/context";
import api from "../services/api";
import { Address } from "shared-types";

export default function AddressPage() {


  return (

    <main className="grid grid-cols-[20%_80%] h-[calc(100vh-60px)]">
      <aside className="bg-gray-200 overflow-auto h-full">
        <AddressList />
      </aside>

      <div className="p-2">
        <AddressDetails></AddressDetails>
      </div>
    </main>
  )
}