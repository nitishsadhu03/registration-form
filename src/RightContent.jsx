import React, { useState } from "react";
import Select from "react-select";

function RightContent() {
  const [value, setValue] = useState(null);

  const countryOptions = [
    { value: "INDIA", label: "India" },
    { value: "USA", label: "USA" },
    { value: "CHINA", label: "China" },
    { value: "RUSSIA", label: "Russia" },
    { value: "UK", label: "United Kingdom" },
  ];
  return (
    <>
      <div className="right-content-area">
        <h1 className="heading">Contact Details</h1>
        <div className="contents">
          <input type="text" placeholder="Street Name" required />
        </div>
        <div className="contents">
          <input type="text" placeholder="Additional Information" required />
        </div>
        <div className="span-items">
            <input className="span-left-part" type="text" placeholder="City" required />
            <input type="text" placeholder="Pin Code" required />
        </div>
        <div className="contents">
          <Select
          className="select-tags"
            options={countryOptions}
            defaultValue={value}
            onChange={setValue}
            placeholder="Select your country"
            isSearchable
            required
            noOptionsMessage={() => "No country found.."}
          />
        </div>
        <div className="contents">
          <input type="text" placeholder="Phone Number" required />
        </div>
        <div className="contents">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="span-items checkbox">
            <input className="checkbox-input" type="checkbox"></input>
            <p>
              I do accept the <a href="./index.html">Terms and Conditions</a> of your site.
            </p>
        </div>
        <div className="contents submit">
          <button type="submit">Register Yourself</button>
        </div>
      </div>
    </>
  );
}

export default RightContent;
