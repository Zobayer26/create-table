"use client";

import { Tabledata } from "@/utils/Table"; // import data from storage
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Table = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [toggle, setToggle] = useState(false);

  // Initialize selectedCategories with all category keys
  useEffect(() => {
    setSelectedCategories(Object.keys(Tabledata[0]));
  }, []);

  // change  categories
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    // if checkbox value true store that 
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value) //for false value filter categories
      );
    }
  };

  // filter columns
  const extractedData = Tabledata.map((item:any) => {
    const extractedItem:any = {};
    selectedCategories.forEach((prop) => {
      extractedItem[prop] = item[prop];
    });

    return extractedItem;
  });

  return (
    <div className="relative">
      <div className=" mb-5 flex justify-between">
        <h1 className="text-xl font-semibold">Table Title</h1>
        <div onClick={() => setToggle(!toggle)}> {/* open or close categories option*/}
          <FaBars className="" size={20} />
        </div>
      </div>
      {
        <div className="flex flex-col gap-2">
          {toggle && (
            <div
              className=" bg-white rounded shadow-md shadow-slate-500 px-4 py-2 
            gap-y-6  absolute flex flex-col  right-0"
            >
              <p
                className="text-xs my-2 tracking-tight
             font-semibold"
              >
                Add or remove columns
              </p>
              {Object.keys(Tabledata[0]).map((category) => (
                <div key={category}>
                  <input
                    className="accent-rose-600 mr-2"
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={(e) => handleChange(e)}
                  />
                  {category}
                </div>
              ))}
            </div>
          )}
          <div className="">
            {extractedData.map((item, index) => (
              <div
                className="flex my-8 items-center justify-between"
                key={index}
              >
                {selectedCategories.map((column) => (
                  <div className="basis-2/12" key={column}>
                    {item[column]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Table;
