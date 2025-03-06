import { AddressDetails, AddressList } from "@/components/components";

export default function AddressPage() {
  return (
    <main className="
      grid grid-cols-1 grid-rows-[5fr_1fr] h-[calc(100vh-60px)]
      md:grid-cols-[300px_1fr] md:grid-rows-1 md:h-[calc(100vh-60px)]
    ">
      <aside className="bg-gray-200 overflow-auto h-full">
        <AddressList />
      </aside>

      <section className="p-2">
        <AddressDetails></AddressDetails>
      </section>
    </main>
  )
}