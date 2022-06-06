import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderThickness: '1px',
    fontSize: '14px',
    height: '24px',
    iconSize: '16px'
  },
  large: {
    borderThickness: '2px',
    fontSize: '18px',
    height: '36px',
    iconSize: '24px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper styles={{'--size': styles.iconSize}}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={size === 'small' ? 1 : 2}/>
      </IconWrapper>

      <TextInput 
      
        {...delegated} 
        style = {{
          '--width': width + 'px',
          '--border': styles.borderThickness,
          '--font-size': styles.fontSize,
          '--padding': styles.height
        }} 
      />
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative; 
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  color: ${COLORS.gray500};

  ${Wrapper}:hover & {
    color: black;
  }
`;

const TextInput = styled.input`
  border: none;
  width: var(--width);
  border-bottom: var(--border) solid black;
  font-size: var(--font-size);
  padding-left: var(--padding);
  height: var(--height);
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400; 
  }

  &:focus {
    outline-offset: 2px;
    outline-color: #4374CB;
  }

  ${Wrapper}:hover & {
    color: black;
  }
`;


export default IconInput;
