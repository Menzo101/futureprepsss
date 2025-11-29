import { createContext } from "react";

const Contextapi = createContext();

export const CreateContextProvider = ({ props }) => {
  return <Contextapi>{props.children}</Contextapi>;
};
