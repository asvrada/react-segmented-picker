import React from 'react';
import styled from 'styled-components';

import '../styles/segmented-picker.scss';

const SPACE = ' ';

const DivSegmentedPicker = styled.div`
    display: flex;
    align-items: center;
    padding: 2px;
    border-radius: 7px;
    background-color: rgb(238, 238, 239);
    overflow: hidden;
`;

const DivSeparator = styled.div`
    display: inline-block;
    opacity: ${props => props.opacity};
    transition: opacity 0.2s ease-in-out;
    background-color: rgb(212, 212, 215);
    width: 1px;
    height: 1em;
`;

const DivOption = styled.div`
    display: inline-block;
    text-align: center;
    flex-grow: 1;
    flex-basis: 0;
    padding: 2px 1em;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
`;

// options is a list of string
const SegmentedPicker = ({
  options,
  selection,
  onSelectionChange,
  className,
}) => {

  const componentOptions = options.map((each, index) => {
    // don't show if current or previous index is selected
    const showSeparator = !(index === selection || (index - 1) === selection);

    const opacity = showSeparator ? 1 : 0;

    return (
      <React.Fragment key={index}>
        {/* Hide the separator for item at index 0 */}
        {index !== 0 && <DivSeparator opacity={opacity}>{SPACE}</DivSeparator>}

        <DivOption
          className={((index === selection) ? 'rsp-selected-option' : null)}
          onClick={() => {
            onSelectionChange(index);
          }}
        >
          {each}
        </DivOption>
      </React.Fragment>
    );
  });

  return (
    <DivSegmentedPicker className={className}>
      {componentOptions}
    </DivSegmentedPicker>
  );
};

export default SegmentedPicker;
