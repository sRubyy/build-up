import React from 'react';
import { IoIosFlash } from 'react-icons/io';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { GoShieldCheck, GoPackage, GoShieldLock } from 'react-icons/go';

export const Details = () => {
  return (
    <div
      className="col"
      style={{ fontFamily: 'Montserrat', marginLeft: '5%', marginTop: '5%' }}
    >
      <div className="row">
        <div className="col Use d-flex justify-content-center">
          <p className="fs-4 fw-semibold">Listing Information</p>
        </div>
      </div>
      <div className="row mt-2">
        <hr class="hr hr-blurry opacity-10" />
      </div>
      <div className="row">
        <div className="col">
          <p className="fs-4 fw-medium">Product details</p>
        </div>
      </div>
      <div className="row mt-2">
        <hr class="hr hr-blurry opacity-10" />
      </div>
      <div className="row">
        <div className="col">
          <p className="fs-4 fw-medium">Delivery</p>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <p className="fs-4 fw-medium">
            <div>
              <div
                className="mt-3 me-4"
                style={{
                  borderRadius: '50%',
                  backgroundColor: '#E3E3E3',
                  paddingLeft: '6px',
                  paddingRight: '5px',
                  paddingTop: '4px',
                  paddingBottom: '6px',
                  width: '45px',
                }}
              >
                <IoIosFlash size={32} color="#00B227" />
              </div>
            </div>
          </p>
        </div>
        <div>
          <div className="row">
            <p className="fs-5 fw-medium text-dark">Express delivery</p>
          </div>
          <div className="row">
            <p className="fs-5 fw-medium text-secondary">
              Schedule delivery after authentication
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <p className="fs-4 fw-medium">
            <div>
              <div
                className="mt-3 me-4"
                style={{
                  borderRadius: '50%',
                  backgroundColor: '#E3E3E3',
                  paddingLeft: '9px',
                  paddingRight: '5px',
                  paddingTop: '4px',
                  paddingBottom: '6px',
                  width: '45px',
                }}
              >
                <GoPackage size={28} color="#00B227" />
              </div>
            </div>
          </p>
        </div>
        <div>
          <div className="row">
            <p className="fs-5 fw-medium text-dark">Standard delivery</p>
          </div>
          <div className="row">
            <p className="fs-5 fw-medium text-secondary">
              Ship via logistic partner (2-4 days)
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <hr class="hr hr-blurry opacity-10" />
      </div>
      <div className="d-flex justify-content-around mt-3">
        <div className="d-flex justify-content-around">
          <div>
            <GoShieldCheck
              size={32}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
          </div>
          <div>100% Authentic Guarantee</div>
        </div>
        <div className="d-flex justify-content-around">
          <div>
            <GoShieldLock
              size={32}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
          </div>
          <div>Anti Fraudulent transaction</div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex justify-content-around ">
          <button
            className="btn text-light"
            type="button"
            style={{
              width: '330px',
              height: '54px',
              borderRadius: '8px',
              backgroundColor: 'black',
              fontSize: '20px',
            }}
          >
            Sell
          </button>
        </div>
        <div className="d-flex justify-content-around">
          <button
            className=" btn text-light"
            type="button"
            style={{
              width: '330px',
              height: '54px',
              borderRadius: '8px',
              backgroundColor: '#00B227',
              fontSize: '20px',
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
