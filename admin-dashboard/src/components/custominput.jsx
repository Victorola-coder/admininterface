/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Custominput = ({
  field,
  value,
  onChange,
  type,
  name,
  placeholder,
  dropdownvalue,
}) => {
  // console.log(name);
  return (
    <fieldset className=" flex w-[90%] lg:w-auto flex-col">
      <label
        className=" text-[#0E0E0E] text-[16px]  leading-[150%] mb-3"
        htmlFor={field.replace(" ", "_")}
      >
        {field}
      </label>
      {type === "dropdown" ? (
        <select
          onChange={onChange}
          className=" w-full lg:w-[440px] px-5 py-[18px] h-[60px] placeholder:text-[16px] text-[#B1B1B1]  placeholder:leading-[150%] rounded-[10px]  border border-[#B1B1B1]"
          name={name}
          id=""
        >
          <option value="">Select One</option>
          {dropdownvalue.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      ) : (
        <input
          onChange={onChange}
          className=" w-full lg:w-[440px] px-5 py-[18px] h-[60px] placeholder:text-[16px] text-[#B1B1B1]  placeholder:leading-[150%] rounded-[10px]  border border-[#B1B1B1]"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
        />
      )}
    </fieldset>
  );
};

export default Custominput;
