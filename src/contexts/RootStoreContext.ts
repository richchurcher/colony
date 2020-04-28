import { createContext } from "react";
import { RootStoreType } from "../stores";

export const RootStoreContext = createContext<RootStoreType | null>(null);
