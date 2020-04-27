import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { useHumanStore } from "../hooks";

const Humans: FunctionComponent = () => {
  const humanStore = useHumanStore();

  return (
    <div>
      {Array.from(humanStore.humans.keys()).map((k) => {
        const human = humanStore.humans.get(k);
        if (human) {
          return <li key={human.id}>{human.name}</li>;
        }
        return null;
      })}
    </div>
  );
};

export default observer(Humans);
