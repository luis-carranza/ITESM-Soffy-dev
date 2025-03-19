import ExtendedSidebar from "@/components/extendedSideBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ExtendedSidebar />
      {children}
    </>
  );
};

export default Layout;
