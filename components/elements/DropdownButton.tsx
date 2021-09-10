import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { Context, ReposContext } from "../../contexts/ReposContext";
import { getFilters } from "../../helpers/utils";
import useAutoClose from "../../hooks/UseAutoClose";
import IDropdown from "../../types/IDropdown";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineCheck } from "react-icons/hi";

const DropdownButton = (props: IDropdown) => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState("");
  const menu = useRef<HTMLDivElement | null>(null);
  const { setFilter, setSort }: Context = useContext(ReposContext)!;

  useAutoClose({ setOpen, menu });

  useEffect(() => setCheck(props.links[0]), []);

  return (
    <div className="relative inline-block text-left h-8 mr-1 bg-bg100 ">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border h-8 border-button bg-bg100 px-4 py-2 text-xs font-medium capitalize hover:bg-light hover:border-gray-400 focus:outline-none focus:border-gray-500 focus:ring-4 ring-bg100"
          id="menu-button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((open) => !open);
          }}
        >
          {props.title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  z-10 text-primary border bg-bg100 border-gray-500 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
        hidden={!open}
        ref={menu}
      >
        <div role="none">
          <div className="border-b border-button block px-4 py-2 text-xs relative">
            Select {props.label}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 opacity-70 hover:opacity-100 focus:opacity-100"
            >
              <IoCloseOutline size={18} className="right-0 -top-4" />
            </button>
          </div>
          {props.links.map((l) => (
            <a
              className="block relative border-b border-button  pl-8 pr-4 py-2 text-xs capitalize cursor-pointer hover:bg-light focus:outline-none focus:bg-light"
              role="checkbox"
              tabIndex={0}
              aria-checked={l === check}
              id={getFilters(l)}
              onClick={(e) => {
                props.isSort
                  ? setSort(e.currentTarget.id)
                  : setFilter({ field: props.title, value: l });
                setOpen(false);
                setCheck(l);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  props.isSort
                    ? setSort(e.currentTarget.id)
                    : setFilter({ field: props.title, value: l });
                  setOpen(false);
                }
              }}
            >
              {check === l && (
                <div className="absolute top-2 left-2">
                  <HiOutlineCheck size={16} />
                </div>
              )}
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
