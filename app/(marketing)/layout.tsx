import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>Marketing layout</h1>
      <div>{children}</div>
    </>
  );
};
export default Layout;
