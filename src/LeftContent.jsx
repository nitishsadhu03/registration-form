import React, { useState } from "react";
import Select from "react-select";

function LeftContent() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const departmentOptions = [
    { value: "CSE", label: "Computer Science Engineering" },
    { value: "ECE", label: "Electronics and Communication Engineering" },
    { value: "IT", label: "Information Technology" },
    { value: "ME", label: "Mechanical Engineering" },
    { value: "CE", label: "Civil Engineering" },
  ];

  const degreeOptions = [
    {value: "BTECH", label:"Bachelors in Technology"},
    {value: "BBA", label:"Bachelors in Business Administration"},
    {value: "BCA", label:"Bachelor in Computer Application"}
  ];

  const positionOptions = [
    {value: "STUDENT", label: "Student"},
    {value: "TEACHER", label: "Teacher"},
    {value: "ADMINISTRATOR", label: "Administartor"},
  ];

  return (
    <>
    <div className="left-content-area">
      <h1 className="heading">General Information</h1>
      <div className="span-items">
          <input className="span-left-part" type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
      </div>
      <div className="contents">
        <input type="text" placeholder="College" required />
      </div>
      <div className="contents">
        <Select
          className="select-tags"
          options={departmentOptions}
          defaultValue={value1}
          onChange={setValue1}
          placeholder="Select your department"
          isSearchable
          noOptionsMessage={()=> "No department found.."}
        />
      </div>
      <div className="contents">
        <Select
        className="select-tags"
          options={degreeOptions}
          defaultValue={value2}
          onChange={setValue2}
          placeholder="Select your degree"
          isSearchable
          required
          noOptionsMessage={()=> "No degree found.."}
        />
      </div>
      <div className="contents">
        <Select
        className="select-tags"
          options={positionOptions}
          defaultValue={value3}
          onChange={setValue3}
          placeholder="Select your position"
          isSearchable
          required
          noOptionsMessage={()=> "No such position found.."}
        />
      </div>
      </div>
    </>
  );
}

export default LeftContent;
