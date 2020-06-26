import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { useRootStore } from "../hooks";

const CreateResource: FunctionComponent = () => {
  const { resourceStore } = useRootStore();
  const [name, setName] = useState<string>("");

  const createResource = () => {
    if (name) {
      resourceStore.add(name);
    }
  };

  const onNameUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  return (
    <>
      <input
        type="text"
        placeholder="Resource name"
        onChange={onNameUpdate}
        value={name}
      />
      <button onClick={createResource}>CREATE</button>
    </>
  );
};

export default CreateResource;
