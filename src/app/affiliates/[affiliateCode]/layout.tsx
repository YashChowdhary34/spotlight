import React from "react";

type Props = {
  children: React.ReactNode;
  params: { affiliateCode: string };
};

const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
