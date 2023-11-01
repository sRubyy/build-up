import '../../scss/checkout/input.scss';
function InputDropdown({ inputName, listItem, selectedItem }) {
  return (
    <div className={'input-container'}>
      <div className={'input-label'}>{inputName}</div>
      <div className="dropdown">
        <button
          className="input-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {selectedItem}
            <div className={'dropdown-toggle'}></div>
          </div>
        </button>
        <ul
          className="country-dropdown-menu dropdown-menu"
          style={{ width: '0px' }}
        >
          {listItem.map((item, i) => (
            <li key={i}>
              <div className="">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InputDropdown;
