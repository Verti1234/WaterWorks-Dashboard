import SideBar from "@/components/dashboard/SideBar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex gap-4 w-screen h-screen p-4">
      <SideBar />
      {children}
    </section>
  )
}