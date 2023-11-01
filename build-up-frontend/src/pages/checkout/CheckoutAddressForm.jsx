import '../../scss/checkout/checkout.scss';
import '../../scss/checkout/checkout_form.scss';
import InputText from './InputText';
import InputDropdown from './InputDropdown';

function CheckoutAddressForm() {
  return (
    <>
      <div className={'form-container'}>
        <InputText
          inputName={'Name'}
          placeholder={'Enter surname and lastname'}
        />
        <div style={{ paddingBottom: '32px' }} className={'border-bottom'}>
          <InputText inputName={'Phone number'} placeholder={'placeholder'} />
        </div>
        <InputDropdown
          inputName={'Country'}
          listItem={['Thailand', 'Singapore', 'Malaysia']}
          selectedItem={'Thailand'}
        />
        <InputText
          inputName={'Address information'}
          placeholder={'Enter house no., building, street'}
        />
        <InputText
          inputName={'Province, District, Sub-district'}
          placeholder={'Enter province, district, sub-district'}
        />
        <InputText inputName={'Postcode'} placeholder={'Enter postcode'} />
      </div>
      <div className={'form-button checkout-page__button--style-2'}>OK</div>
    </>
  );
}

export default CheckoutAddressForm;
