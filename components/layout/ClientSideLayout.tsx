import { TopHeader } from "../navigation/TopHeader";
import { Header } from "../navigation/Header";

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
        <TopHeader />
        <Header />
        {children}
        {/* <Footer /> */}
    </div>
  );
}