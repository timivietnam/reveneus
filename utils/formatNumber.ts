import numeral from 'numeral';

const formatLimit = (amount: string, _currency = '$') => {
  let textResult = `${_currency}`;
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(',', ''))).format(
        '0,0.00a',
      );
    } else {
      textResult += numeral(parseFloat(amount)).format('0,0.00a');
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};

const formatBasic = (amount: string, _currency = '$', isIncome = true) => {
  let textResult = isIncome ? '' : '-';
  textResult += `${_currency}`;
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(',', ''))).format(
        '0,0.00',
      );
    } else if (parseFloat(amount) > 0) {
      textResult += numeral(parseFloat(amount)).format('0,0.00');
    } else {
      textResult += numeral(parseFloat(amount) * -1).format('0,0.00');
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};

const formatDefault = (amount: string, _currency = '$') => {
  let textResult = `${_currency}`;
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
};

export { formatLimit, formatDefault, formatBasic };
