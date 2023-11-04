import '../../scss/checkout/checkout.scss';
import '../../scss/checkout/checkout_form.scss';
import HorizontalDropdown from './HorizontalDropdown';
import CreditCardForm from './CreditCardForm';
import OnlineBankingForm from './OnlineBankingForm';
import { useState } from 'react';
import InputDropdown from './InputDropdown';

function PaymentMethodForm() {
  const [paymentMethod, setPaymentMethod] = useState('Credit card');

  const [isExpandMode, setIsExpandMode] = useState(false);

  const toggleExpandMode = () => {
    setIsExpandMode(!isExpandMode);
  };

  const changePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const PaymentForm = () => {
    return (
      <>
        <div className={'border-top'} style={{ paddingTop: '16px' }}>
          <HorizontalDropdown
            inputName={'Select Transaction'}
            selectList={['Credit card', 'Online banking']}
            selectItem={paymentMethod}
            onClick={changePaymentMethod}
          />
        </div>
        {paymentMethod === 'Credit card' ? (
          <CreditCardForm />
        ) : (
          <OnlineBankingForm />
        )}
      </>
    );
  };

  return (
    <>
      <div className={'form-container'}>
        <InputDropdown
          inputName={'Your payment method'}
          listItem={[
            'Credit card - (xxxx-xxx)',
            'Online banking - (SCB xxxx-xxx)',
          ]}
          selectedItem={'Credit card - (xxxx-xxx)'}
        />
        <div className={'add-new'} onClick={toggleExpandMode}>
          + Add a new payment method
        </div>
        {isExpandMode && PaymentForm()}
      </div>
      <div className={'form-button checkout-page__button--style-2'}>OK</div>
    </>
  );
}

export default PaymentMethodForm;
