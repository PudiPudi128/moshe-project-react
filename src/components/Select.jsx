import React, { useRef } from "react";
import { useNavigate } from "react-router";

const Select = ({id}) => {
  const navigate = useNavigate();
  const selcetRef = useRef();
  return (
    <select
      ref={selcetRef}
      onChange={() => {
        navigate(
          `/search/${id ? id : "naruto"}/year/${selcetRef.current.value}`
        );
      }}
      className="border-2 p-2 select select-bordered w-full max-w-xs select-error me-5"
    >
      <option disabled defaultValue className=" text-zinc-600" value="">
        Select a year
      </option>
      {Array.from({ length: 74 }, (_, i) => (
        <option className="" key={i} value={2023 - i}>
          {2023 - i}
        </option>
      ))}
    </select>
  );
};

export default Select;
