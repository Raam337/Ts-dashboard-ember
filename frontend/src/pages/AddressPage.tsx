import { AddressDetails, AddressList } from "@/components/components";

export default function AddressPage() {
  return (
    <main className="
      grid  grid-cols-1 h-[calc(100vh-60px)]
      md:grid-cols-[300px_1fr] md:h-[calc(100vh-60px)]
    ">
      <aside className="bg-gray-200 overflow-auto h-full md:h-full">
        <AddressList />
      </aside>

      <section className="p-2 min-h-[60px]">
        <AddressDetails></AddressDetails>
      </section>
    </main>
  )
}