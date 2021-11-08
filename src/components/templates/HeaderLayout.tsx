import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

interface Props {
  children: ReactNode;
}

export const HeaderLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
