import React from 'react';
import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';

function MagnifyingGlass() {
  return (
    <MagnifyingGlassComponent>
      <GiMagnifyingGlass />
    </MagnifyingGlassComponent>
  );
}

const MagnifyingGlassComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 25px;
  height: 25px;
  font-size: 22px;
  background-color: #CCC;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  &:hover {
    color: #4885ed;
    border: 1px solid #4885ed;
  }
`;

export default MagnifyingGlass;
