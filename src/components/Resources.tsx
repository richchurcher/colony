import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { useRootStore } from "../hooks";
import { ResourceType } from "../models";
import ResourceArea from "./ResourceArea";

const Resources: FunctionComponent = () => {
  const { resourceStore, uiStore } = useRootStore();

  return (
    <div>
      {resourceStore.resources.map((r: ResourceType) => {
        const selected = !!uiStore.selection.find((s) => s.id === r.id);
        return <ResourceArea id={r.id} key={r.id} selected={selected} />;
      })}
    </div>
  );
};

export default observer(Resources);
