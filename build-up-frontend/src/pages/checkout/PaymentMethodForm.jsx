import '../../scss/checkout/checkout.scss';
import '../../scss/checkout/checkout_form.scss';
import HorizontalDropdown from './HorizontalDropdown';
import CreditCardForm from './CreditCardForm';
import OnlineBankingForm from './OnlineBankingForm';
import { useState } from 'react';

function PaymentMethodForm() {
  const [paymentMethod, setPaymentMethod] = useState('Credit card');

  const changePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  return (
    <>
      <div className={'form-container'}>
        <HorizontalDropdown
          inputName={'Select Transaction'}
          selectList={['Credit card', 'Online banking']}
          selectItem={paymentMethod}
          onClick={changePaymentMethod}
        />
        {paymentMethod === 'Credit card' ? (
          <CreditCardForm />
        ) : (
          <OnlineBankingForm />
        )}
      </div>
      <div className={'form-button checkout-page__button--style-2'}>OK</div>
    </>
  );
}

export default PaymentMethodForm;
