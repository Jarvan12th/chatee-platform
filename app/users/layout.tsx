import Sidebar from "../components/sidebar/Sidebar";

// This is known as File System-Based Routing.
// https://nextjs.org/docs/app/building-your-application/routing#file-conventions
export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>;
    </Sidebar>
  );
}
