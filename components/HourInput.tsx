import React from 'react';
import { Input, InputProps } from '@ui-kitten/components';
import { useBoolean } from 'hooks';

import numeral from 'numeral';

interface HourInputProps extends InputProps {
  value: string;
  ref?: React.RefObject<Input>;
}

const HourInput: React.FC<HourInputProps> = ({ ref, value, ...props }) => {
  const [isEditing, { on, off }] = useBoolean(!value);
  const formatDefault = React.useCallback(
    (amount: string) => {
      let textResult = ``;
      try {
        if (isNaN(parseFloat(amount))) {
          textResult += numeral(parseFloat(amount.replace(',', ''))).format(
            '0,0.00',
          );
        } else {
          textResult += numeral(parseFloat(amount)).format('0,0.00');
        }
      } catch (e) {
        console.log(e);
      }
      return textResult;
    },
    [value],
  );

  return (
    <Input
      ref={ref}
      size="small"
      status={'primary'}
      keyboardType="numeric"
      returnKeyType="done"
      {...props}
      value={isEditing ? value : formatDefault(value) + ' Hour'}
      onFocus={on}
      onEndEditing={() => {
        if (value) {
          off();
        }
      }}
    />
  );
};

export default HourInput;
