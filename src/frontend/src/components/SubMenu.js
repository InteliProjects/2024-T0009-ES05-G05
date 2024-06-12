import React, { useEffect, useState } from "react";
import {
  OptionRow,
  Label,
  SvgTest,
  DropDownWrapper
} from "./DropDownNew.styles";
import styled from "styled-components";

function SubMenu(props) {
  const [isShown, setIsShown] = useState(true);
 
  return (
    <DropDownWrapper>
      <OptionRow onClick={() => setIsShown(!isShown)}>
        <Label>{`${props.children}`}</Label>
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

      {isShown ? (
        <Content>I'll appear when you hover over the button.</Content>
      ) : null}
    </DropDownWrapper>
  );
}

export default SubMenu;

export const Content = styled.div`
  position: absolute;
  right: -100px;
  top: 52px;
`;
