import React from 'react';
import { Input, InputProps } from '@ui-kitten/components';
import { useBoolean } from 'hooks';

import numeral from 'numeral';

interface CurrencyInputProps extends InputProps {
  value: string;
  currency?: string;
  currencyPosition?: 'left'|"right";
  ref?: React.RefObject<Input>;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  ref,
  value,
  currency = '$',
  currencyPosition='left',
  ...props
}) => {
  const [isEditing, { on, off }] = useBoolean(!value);
  const formatDefault = React.useCallback(
    (amount: string,) => {
      let textResult = `${currency}`;

      try {
        if (isNaN(parseFloat(amount))) {
            textResult += numeral(parseFloat(amount.replace(',', ''))).format(
            '0,0.00'
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
      value={isEditing ? value : formatDefault(value)}
      onFocus={on}
      onEndEditing={() => {
        if (value) {
          off();
        }
      }}
    />
  );
};

export default CurrencyInput;
