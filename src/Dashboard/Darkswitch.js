import React, {useContext} from "react";

import styled from "styled-components";
import {ThemeContext} from "./Dashboard";

const DarkswitchContainer = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
`;

const Input = styled.input``;

const Label = styled.label`
  cursor: pointer;
  color: ${({dark}) => dark ? 'grey' : 'black'};
`;

export function Darkswitch() {

const [theme, setTheme] = useContext(ThemeContext);
const dark = theme === 'dark';

  return (
    <div>
      <DarkswitchContainer>
        <Label dark={dark}>
          <Input type="checkbox" onChange={e => {
              setTheme(e.target.checked ? 'dark' : 'light')
          }}
          
          checked={dark}
          
          />
          Dark mode
        </Label>
      </DarkswitchContainer>
    </div>
  );
}
