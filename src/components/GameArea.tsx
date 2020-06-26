import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { useRootStore } from "../hooks";
import Humans from "./Humans";
import Resources from "./Resources";

const GameArea: FunctionComponent = () => {
  const store = useRootStore();

  return (
    <>
      <Humans />
      <Resources />
    </>
  );
};

export default observer(GameArea);
