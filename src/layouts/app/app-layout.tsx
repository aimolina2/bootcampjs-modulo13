import * as React from "react";
import { HeaderComponent } from "./components";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <h1>Aquí iría la cabecera</h1>
      {children}
      <h1>Aquí iría el footer</h1>
    </>
  );
};
