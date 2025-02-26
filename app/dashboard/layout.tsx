import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>Marketing page</h1>
      <div>{children}</div>;
    </>
  );
};
export default DashboardLayout;
