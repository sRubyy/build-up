import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GoCreditCard } from 'react-icons/go';
import { FiMapPin } from 'react-icons/fi'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import ProductModel from '../../models/ProductModel';

export const ProductCheckout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.data;

    const handleClick1 = () => {

        navigate('/productDescription');
    }




    async function addProduct(){
        const url = `http://localhost:8080/api/product/addProduct`;
        if(data.size !== 'Select size​ (US)' && data.condition !== 'Select condition' &&  data.price !== ''){
            const product= new ProductModel("New Balance 530 White Silver Navy", "NEW BALANCE | MR530SG", parseFloat(data.price), "shoes", data.size, data.conditionBoolean);
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const formattedTime = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`);
            product.setCreatedAt(formattedTime);

            const request = {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            console.log(JSON.stringify(product))

            const addNewProduct = await fetch(url, request)
            if (!addNewProduct.ok) {
                throw new Error('Error found');
            } 

            navigate('/mySellProduct');
        }
        
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
        <div className="col" style={{ fontFamily: 'Montserrat', marginTop: '3%' }}>
      <div className="row">
        <div className="d-flex justify-content-center">
          <p className="fs-4 fw-semibold">Checkout</p>
        </div>
      </div>
        <div className="d-flex justify-content-between mt-5 mb-1">
            <div className="d-flex justify-content-start ">
                <div>
                    
                    <FiMapPin
              size={27}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
                </div>
                <div>
                    <p className='fs-5' style={{color:"#9D9D9D"}}>Shipping address</p>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>
                    <p className='fs-5'>98/139 icondo salaya building c..</p>
                </div>
                <div>
                    
                    <IoIosArrowForward
              size={27}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between mb-4">
            <div className="d-flex justify-content-start ">
                <div>
                    
                    <GoCreditCard
              size={27}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
                </div>
                <div>
                    <p className='fs-5' style={{color:"#9D9D9D"}}>Paymentmethod</p>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>
                    <p className='fs-5' style={{color:"#9D9D9D"}}>Payment Method</p>
                </div>
                <div>
                    
                    <IoIosArrowForward
              size={27}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
                </div>
            </div>
        </div>
        <div className="row mt-2">
        <hr class="hr hr-blurry opacity-10" />
      </div>
      <div className="d-flex justify-content-between mt-5">
            <div className="d-flex justify-content-start ">
    
                <div>
                    <p className='fs-5' style={{color:"#9D9D9D"}}>Sub Total</p>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>
                    <p className='fs-5'>5000.-</p>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between ">
            <div className="d-flex justify-content-start ">
                <div>
                    <p className='fs-5' style={{color:"#9D9D9D"}}>Transcation fee 7%</p>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>
                    <p className='fs-5'>245.-</p>
                </div>
                
            </div>
        </div>
        <div className="d-flex justify-content-between ">
            <div className="d-flex justify-content-start ">
            
                <div>
                    <p className='fs-5' style={{color:"#9D9D9D"}}>Payment Processing fee 30%</p>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>
                    <p className='fs-5'>150.-</p>
                </div>
                
            </div>
        </div>
        <div className="d-flex justify-content-between mb-5">
            <div className="d-flex justify-content-start ">
                
                <div>
                    <p className='fs-5 fw-semibold' style={{color:'#00B227'}}>Total</p>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div>
                    <p className='fs-5 fw-semibold' style={{color:'#00B227'}}>4605.00.-</p>
                </div>
                
            </div>
        </div>
      
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex justify-content-around" style={{ width: '49%' }}>
          <button
            className="btn text-secondary"
            type="button"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: 'white',
              border: '1px solid #9D9D9D',
              fontSize: '18px',
            }}
            onClick={handleClick1}
          >
            Cancel
          </button>
        </div>
        <div className="d-flex justify-content-around" style={{ width: '49%' }}>
          <button
            className=" btn text-light"
            type="button"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: '#9D9D9D',
              fontSize: '18px',
            }}
            
            onClick={addProduct}

          >
            Submit
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};
