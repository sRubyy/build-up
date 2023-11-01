import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/edit_product/edit_product.scss';
import { useLocation } from 'react-router-dom';
import { EditInfo } from './components/EditInfo';

export const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [component, setComponent] = useState('/rem');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (location.state && location.state.data) {
      setData(location.state.data);
    } else {
      console.error('Data is not available in location state.');
    }
  }, [location.state]);

  const handleComponent = (value) => {
    setComponent(value);
  };

  const handleRemove = () => {
    navigate('/mySellProduct');
  };

  const handleEdit = () => {
    setComponent('/edit');
  };

  async function deleteProduct() {
    const url = `http://localhost:8080/api/product/delete/${data.item.id}`;
    const request = {
      method: 'DELETE',
    };

    const deleteProductById = await fetch(url, request);
    if (!deleteProductById) {
      throw new Error('Error found');
    }
    handleRemove();
  }

  return (
    <div className="product-detail">
      <div className="path">
        <div>Home</div>
        <div style={{ marginLeft: '1%', marginRight: '1%' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="17"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M0.325994 0.833001C0.238772 0.922299 0.189941 1.04217 0.189941 1.167C0.189941 1.29183 0.238772 1.4117 0.325994 1.501L5.19899 6.5L0.325994 11.498C0.238772 11.5873 0.189941 11.7072 0.189941 11.832C0.189941 11.9568 0.238772 12.0767 0.325994 12.166C0.368391 12.2095 0.41908 12.2442 0.475071 12.2678C0.531063 12.2914 0.59122 12.3036 0.651994 12.3036C0.712768 12.3036 0.772926 12.2914 0.828918 12.2678C0.884909 12.2442 0.935598 12.2095 0.977994 12.166L6.15999 6.849C6.25101 6.75563 6.30195 6.63039 6.30195 6.5C6.30195 6.36961 6.25101 6.24437 6.15999 6.151L0.977994 0.834001C0.935598 0.790458 0.884909 0.755849 0.828918 0.732218C0.772926 0.708586 0.712768 0.696411 0.651994 0.696411C0.59122 0.696411 0.531063 0.708586 0.475071 0.732218C0.41908 0.755849 0.368391 0.790458 0.325994 0.834001V0.833001Z"
              fill="#9D9D9D"
            />
          </svg>
        </div>
        <div>Shoes</div>
        <div style={{ marginLeft: '1%', marginRight: '1%' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="17"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M0.325994 0.833001C0.238772 0.922299 0.189941 1.04217 0.189941 1.167C0.189941 1.29183 0.238772 1.4117 0.325994 1.501L5.19899 6.5L0.325994 11.498C0.238772 11.5873 0.189941 11.7072 0.189941 11.832C0.189941 11.9568 0.238772 12.0767 0.325994 12.166C0.368391 12.2095 0.41908 12.2442 0.475071 12.2678C0.531063 12.2914 0.59122 12.3036 0.651994 12.3036C0.712768 12.3036 0.772926 12.2914 0.828918 12.2678C0.884909 12.2442 0.935598 12.2095 0.977994 12.166L6.15999 6.849C6.25101 6.75563 6.30195 6.63039 6.30195 6.5C6.30195 6.36961 6.25101 6.24437 6.15999 6.151L0.977994 0.834001C0.935598 0.790458 0.884909 0.755849 0.828918 0.732218C0.772926 0.708586 0.712768 0.696411 0.651994 0.696411C0.59122 0.696411 0.531063 0.708586 0.475071 0.732218C0.41908 0.755849 0.368391 0.790458 0.325994 0.834001V0.833001Z"
              fill="#9D9D9D"
            />
          </svg>
        </div>
        <div>New Balance</div>
        <div style={{ marginLeft: '1%', marginRight: '1%' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="17"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M0.325994 0.833001C0.238772 0.922299 0.189941 1.04217 0.189941 1.167C0.189941 1.29183 0.238772 1.4117 0.325994 1.501L5.19899 6.5L0.325994 11.498C0.238772 11.5873 0.189941 11.7072 0.189941 11.832C0.189941 11.9568 0.238772 12.0767 0.325994 12.166C0.368391 12.2095 0.41908 12.2442 0.475071 12.2678C0.531063 12.2914 0.59122 12.3036 0.651994 12.3036C0.712768 12.3036 0.772926 12.2914 0.828918 12.2678C0.884909 12.2442 0.935598 12.2095 0.977994 12.166L6.15999 6.849C6.25101 6.75563 6.30195 6.63039 6.30195 6.5C6.30195 6.36961 6.25101 6.24437 6.15999 6.151L0.977994 0.834001C0.935598 0.790458 0.884909 0.755849 0.828918 0.732218C0.772926 0.708586 0.712768 0.696411 0.651994 0.696411C0.59122 0.696411 0.531063 0.708586 0.475071 0.732218C0.41908 0.755849 0.368391 0.790458 0.325994 0.834001V0.833001Z"
              fill="#9D9D9D"
            />
          </svg>
        </div>
        <div>New Balance 530 White Silver Navy</div>
      </div>

      <div className="row">
        <div className="col mt-5">
          <img
            className="img_shoes"
            src={require('./../../images/Rectangle 17.png')}
          />
        </div>
        {component === '/rem' ? (
          <div
            className="col"
            style={{ fontFamily: 'Montserrat', marginTop: '3%' }}
          >
            <div className="row">
              <div className="d-flex justify-content-start">
                <p className="fs-4 fw-semibold">Information</p>
              </div>
            </div>
            <div className="row mt-2">
              <hr class="hr hr-blurry opacity-10" />
            </div>
            <div className="d-flex justify-content-between mt-4 mb-1">
              <div className="d-flex justify-content-start ">
                <div>
                  <p className="fs-5 fw-bold">{data?.item && data.item.name}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <div className="d-flex justify-content-start ">
                <div>
                  <p className="fs-5" style={{ color: '#9D9D9D' }}>
                    {data?.item && data.item.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex justify-content-start ">
                <div>
                  <p className="fs-5" style={{ color: '#9D9D9D' }}>
                    Ask Price
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div>
                  <p className="fs-5 fw-bold">
                    {data?.item && data.item.price}.-
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between ">
              <div className="d-flex justify-content-start ">
                <div>
                  <p className="fs-5" style={{ color: '#9D9D9D' }}>
                    Size
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div>
                  <p className="fs-5 fw-bold">
                    US {data?.item && data.item.size}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: '25%' }}
            >
              <div className="d-flex justify-content-start ">
                <div>
                  <p className="fs-5" style={{ color: '#9D9D9D' }}>
                    Condition
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div>
                  <p className="fs-5 fw-bold">
                    {data?.item && data.item.condition ? 'Brand new' : 'Used'}
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div
                className="d-flex justify-content-around"
                style={{ width: '49%' }}
              >
                <button
                  className="btn text-white"
                  type="button"
                  style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '8px',
                    backgroundColor: '#9D9D9D',
                    fontSize: '18px',
                  }}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
              <div
                className="d-flex justify-content-around"
                style={{ width: '49%' }}
              >
                <button
                  className=" btn text-light"
                  type="button"
                  style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '8px',
                    backgroundColor: '#D7455B',
                    fontSize: '18px',
                  }}
                  onClick={deleteProduct}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ) : (
          <EditInfo handleComponent={handleComponent} data={data} />
        )}
      </div>
    </div>
  );
};
