import '../../scss/checkout/checkout.scss';
import '../../scss/checkout/checkout_form.scss';
import InputText from './InputText';
import InputDropdown from './InputDropdown';
import { useState } from 'react';

function CheckoutAddressForm() {
  const [isExpandMode, setIsExpandMode] = useState(false);

  const toggleExpandMode = () => {
    setIsExpandMode(!isExpandMode);
  };

  const clickCancelButton = () => {
    setIsExpandMode(!isExpandMode);
  };

  const AddressForm = () => {
    return (
      <>
        <div className={'border-top'} style={{ paddingTop: '16px' }}>
          <InputText
            inputName={'Name'}
            placeholder={'Enter surname and lastname'}
          />
        </div>
        <div>
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
      </>
    );
  };

  return (
    <>
      <div className={'form-container'}>
        <InputDropdown
          inputName={'Your address'}
          listItem={['My home', 'My office']}
          selectedItem={'My home'}
        />
        <div className={'add-new'} onClick={toggleExpandMode}>
          + Add your new address
        </div>
        {isExpandMode && AddressForm()}
      </div>
      {isExpandMode ? (
        <div className={'add-new__button'}>
          <div
            className={'form-button checkout-page__button--style-1'}
            onClick={clickCancelButton}
          >
            Cancel
          </div>
          <div className={'form-button checkout-page__button--style-2'}>
            Add
          </div>
        </div>
      ) : (
        <div className={'form-button checkout-page__button--style-2'}>OK</div>
      )}
    </>
  );
}

export default CheckoutAddressForm;
