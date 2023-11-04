import InputText from './InputText';
import '../../scss/checkout/checkout.scss';
import '../../scss/checkout/checkout_form.scss';
import { useState } from 'react';
function CreditCardForm() {
  return (
    <>
      <InputText
        inputName={'Credit card number'}
        placeholder={'xxxx xxxx xxxx xxxx'}
      />
      <InputText inputName={'Credit card holder'} placeholder={'holder name'} />
      <div className={'form-group'}>
        <div style={{ width: '50%' }}>
          <InputText inputName={'Expiration date'} placeholder={'mm/yy'} />
        </div>
        <div style={{ width: '50%' }}>
          <InputText inputName={'CVC'} placeholder={'xxx'} />
        </div>
      </div>
    </>
  );
}

export default CreditCardForm;
