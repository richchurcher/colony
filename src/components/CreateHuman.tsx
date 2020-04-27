import React, { FunctionComponent, useState, ChangeEvent } from "react";
import { useHumanStore } from "../hooks";

const CreateHuman: FunctionComponent = () => {
  const humanStore = useHumanStore();
  const [name, setName] = useState<string>("");

  const createHuman = () => {
    if (name) {
      humanStore.add(name);
    }
  };

  const onNameUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={onNameUpdate}
        value={name}
      />
      <button onClick={createHuman}>CREATE</button>
    </>
  );
};

export default CreateHuman;
