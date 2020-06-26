import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRootStore } from "../hooks";

interface HumanProps {
  id: string;
  selected?: boolean;
}

const Avatar = styled.div<{ selected?: boolean }>`
  align-items: center;
  display: flex;
  background: ${({ selected }) => (selected ? "green" : "grey")};
  border-radius: 50%;
  color: white;
  cursor: pointer;
  height: 50px;
  justify-content: center;
  width: 50px;
`;

const Human: FunctionComponent<HumanProps> = ({ id, selected }) => {
  const { humanStore, uiStore } = useRootStore();

  const human = humanStore.humans.get(id);

  if (!human) {
    return null;
  }

  return (
    <Avatar
      onClick={() =>
        selected ? uiStore.deselect(human) : uiStore.select(human)
      }
      selected={selected}
    >
      {human.name}
    </Avatar>
  );
};

export default observer(Human);
