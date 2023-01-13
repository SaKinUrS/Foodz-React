import React, { useState } from "react";
import Select from "react-select";

export default function SelectOrder({ options, placeholder }) {
  const [currentMeal, setCurrentMeal] = useState("");

  const getValue = () => {
    return currentMeal ? options.find((m) => m.value === currentMeal) : "";
  };
  const onChangeSelect = (newValue) => {
    setCurrentMeal(newValue.value);
  };

  return (
    <Select
      isSearchable={false}
      classNamePrefix="select-meal"
      onChange={onChangeSelect}
      options={options}
      placeholder={placeholder}
      value={getValue()}
    />
  );
}
