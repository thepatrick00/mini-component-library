import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);


  return ( 
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>{displayedValue}
      <Icon id='chevron-down' size={24} strokeWidth={2}/>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  border: none;
  padding: 12px 16px;
  font-size: 1rem;
  display: flex;
  align-items: center ;
  gap: 14px;

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color ;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`

export default Select;
