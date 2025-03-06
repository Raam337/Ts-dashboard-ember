import { AddressDetails, AddressList } from "@/components/components";

export default function AddressPage() {
  return (
    <main className="grid grid-cols-[20%_80%] h-[calc(100vh-60px)]">
      <aside className="bg-gray-200 overflow-auto h-full">
        <AddressList />
      </aside>

      <section className="p-2">
        <AddressDetails></AddressDetails>
      </section>
    </main>
  )
}