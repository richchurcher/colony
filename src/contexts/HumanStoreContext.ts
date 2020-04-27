import { createContext } from "react";
import { HumanType } from "../models";

export const HumanStoreContext = createContext<HumanType | null>(null);
