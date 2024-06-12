import React, { useState, useRef, useEffect } from "react";
import {
  DropDownWrapper,
  DropDownButton,
  SVG,
  OptionMenu,
  OptionRow,
  SvgTest,
  Label
} from "./DropDownNew.styles";
import SubMenu from "./SubMenu";
import styled from "styled-components";

function DropDownNew({ defaultText = "", options = [], changeOptionName }) {
  const [actionDropDown, setActionDropDown] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const dropdownEl = useRef(null);
  const [mainDefaultText, setMainDefaultText] = useState(defaultText);

  const dropdown = () => {
    setActionDropDown(!actionDropDown);
  };

  const handleClickClose = (event) => {
    const path = event.composedPath();

    let isClickInside = path.find((element) => element === dropdownEl.current);

    if (isClickInside === undefined) {
      if (actionDropDown) {
        setActionDropDown(false);
      }
    }
  };

  // Set Default Text on Button
  useEffect(() => {
    setMainDefaultText(defaultText);
  }, [defaultText]);

  // Click event listener to close dropdown
  useEffect(() => {
    document.addEventListener("mouseup", handleClickClose);
    return () => {
      document.removeEventListener("mouseup", handleClickClose);
    };
  });

  return (
    <DropDownWrapper>
      <div ref={dropdownEl}>
        <DropDownButton onClick={dropdown}>
          {mainDefaultText}
          <SVG>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </SVG>
        </DropDownButton>

        <DropDownWrapper>
          {actionDropDown ? (
            <>
              <OptionMenu role="menu">
                {options.map((option, key) => (
                  <OptionRow>
                    <Label>{`${option}`}</Label>
                    <SvgTest
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </SvgTest>
                  </OptionRow>
                ))}
              </OptionMenu>
            </>
          ) : null}
          {isShown ? (
            <Content>I'll appear when you hover over the button.</Content>
          ) : null}
        </DropDownWrapper>
      </div>
    </DropDownWrapper>
  );
}

export default DropDownNew;

export const Content = styled.div`
  position: relative;
  height: 50px;
  right: -300px;
  top: 200px;
  background-color: white;
  z-index: 40;
`;
