import SideBar from "@/components/dashboard/SideBar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex gap-4 w-screen h-screen p-4  overflow-x-hidden ">
      <SideBar />
      {/* <div className="sm:w-1/5  hidden sm:block h-full shadow-xl rounded-xl  p-4 ">

      </div> */}
      {children}
    </section>
  )
}