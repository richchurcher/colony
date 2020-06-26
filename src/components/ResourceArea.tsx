import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRootStore } from "../hooks";

interface ResourceAreaProps {
  id: string;
  selected?: boolean;
}

const Avatar = styled.div<{ selected?: boolean }>`
  align-items: center;
  display: flex;
  background: ${({ selected }) => (selected ? "orange" : "brown")};
  border-radius: 1%;
  color: white;
  cursor: pointer;
  height: 50px;
  justify-content: center;
  width: 50px;
`;

const ResourceArea: FunctionComponent<ResourceAreaProps> = ({
  id,
  selected,
}) => {
  const { resourceStore, uiStore } = useRootStore();

  const resource = resourceStore.resources.find((r) => r.id === id);

  if (!resource) {
    return null;
  }

  return (
    <Avatar
      onClick={() =>
        selected ? uiStore.deselect(resource) : uiStore.select(resource)
      }
      selected={selected}
    >
      {resource.name}
    </Avatar>
  );
};

export default observer(ResourceArea);
