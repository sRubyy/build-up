import '../../../scss/checkout/checkout.scss';
import '../../../scss/checkout/checkout_form.scss';
import HorizontalDropdown from './HorizontalDropdown';
import InputText from './InputText';
function OnlineBankingForm() {
  return (
    <>
      <HorizontalDropdown
        inputName={'Select Bank'}
        selectList={['Select bank', 'SCB']}
        selectItem={'Select bank'}
      />
      <InputText inputName={'Name'} placeholder={'Enter name'} />
      <InputText inputName={'Account number'} placeholder={'xxx-xxxxxx'} />
    </>
  );
}

export default OnlineBankingForm;
