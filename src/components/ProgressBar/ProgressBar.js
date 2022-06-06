/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 16,
    padding: 0,
    radius: 4
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8
  }
}

const ProgressBar = ({ value, size }) => {
  const sizeStyles = STYLES[size];

  const style = {
    '--width': value + '%',
    '--height': sizeStyles.height + 'px'
  }

  return (
    <Wrapper role="meter"
      aria-valuenow="90"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-labelledby="cpu_usage_label"
      style={{'--padding': sizeStyles.padding + 'px', '--radius': sizeStyles.radius + 'px'}}
    >
      <BarWrapper>
        <Bar style={style}></Bar>
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  padding: var(--padding);
  border-radius: var(--radius);
  `

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners for each end of progress bar  */
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`



export default ProgressBar;
