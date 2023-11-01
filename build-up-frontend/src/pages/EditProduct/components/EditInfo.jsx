import React, { useState, useHistory } from 'react';
import { GoShieldCheck, GoPackage, GoShieldLock } from 'react-icons/go';
import { HiOutlinePencil } from 'react-icons/hi'
import { useNavigate } from 'react-router';
import { ReturnSize } from '../../ProductDescription/components/ReturnSize'
import { ReturnCondition } from '../../ProductDescription/components/ReturnCondition'
import ProductModel from '../../../models/ProductModel';

export const EditInfo = (props) => {

    // const history = useHistory();
    const navigate = useNavigate();
    const [size, setSize] = useState(props.data.item.size);
    const [condition, setCondition] = useState(props.data.item.brandNew ? "NEW": "USED");
    const [ conditionBoolean, setConditionBoolean] = useState(true);
    const [component, setComponent] = useState("/des");
    const [ price, setPrice ] = useState(props.data.item.price);

    const handleSize = (value) => {
        setSize(value)
    } 

    const handleCondition = (value) => {
        setCondition(value)
        if(value == "USED"){
            setConditionBoolean(false);
        }
    } 


    const handleClick = () => {
        props.data.item.price = price
        const data = {
            item: props.data.item,
            conditionBoolean: conditionBoolean,
            method: "put"
        };

        navigate('/productCheckout', { state: { data } });
    }

    

  return (
    <div className="col" style={{ fontFamily: 'Montserrat', marginTop: '3%' }}>
      <div className="row">
        <div className="col">
          <p className="fs-4 fw-semibold d-flex justify-content-center">Editing Information</p>
        </div>
      </div>
      <div className="row mt-2">
        <hr class="hr hr-blurry opacity-10" />
      </div>
      <div className="row">
        <div className="col">
          <p className="fs-5 fw-medium">Product details</p>
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <div className="d-flex justify-content-start " style={{paddingTop: '1%'}}>
            <div style={{marginRight: '8.7%'}}>
                <p className="fs-5">Size</p>
            </div>
            <div>
                <p className="fs-5 text-danger">*</p>
            </div>
        </div>
        <div >
        <div className="dropdown">
            <button className="btn fst-italic dropdown-toggle" style={{fontSize: '19px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {size}
            </button>
            <ReturnSize handleSize={handleSize}/>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
      <div className="d-flex justify-content-start" style={{paddingTop: '1%'}}>
        <div style={{marginRight: '4.7%'}}>
          <p className="fs-5">Condition</p>
        </div>
        <div>
          <p className="fs-5 text-danger">*</p>
        </div>
      </div>
      <div >
        <div className="dropdown">
            <button className="btn fst-italic dropdown-toggle" style={{fontSize: '19px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {condition}
            </button>
            <ReturnCondition handleCondition={handleCondition}/>
            </div>
        </div>
      </div>
      <div className="row mt-2">
        <hr class="hr hr-blurry opacity-10" />
      </div>
      <div className="d-flex justify-content-between" style={{marginBottom: '27%'}}>
        <div className="d-flex justify-content-start">
        <div style={{marginRight: '4.7%'}}>
                <p className="fs-5 fw-medium">Ask</p>
            </div>
            <div style={{marginRight: '4.7%'}}>
                <p className="fs-5 fw-medium">Price</p>
            </div>
            <div>
                <p className="fs-5 text-danger">*</p>
            </div>
        </div>
        <div className="d-flex justify-content-end">
        
            <textarea className='fs-5' required onChange={e => setPrice(e.target.value)} value={price} placeholder="Add price" style={{border: 'none', outline: 'none', width: '42%', textAlign: 'center', height: '73%', resize: 'none'}}name="objectives"  rows={1} ></textarea>
            <div className='mt-1'>
            <HiOutlinePencil 
              size={22}
              color="#CCCCCC"
              style={{ marginRight: '17px' }}
            />
            </div>
        </div>
      </div>
      
    
      <div className="row mt-2">
        <hr className="hr hr-blurry opacity-10" />
      </div>
      <div
        className="d-flex justify-content-center mt-3"
        style={{ gap: '22px' }}
      >
        <div
          className="d-flex justify-content-around"
          style={{ alignItems: 'center' }}
        >
          <div>
            <GoShieldCheck
              size={32}
              color="#9D9D9D"
              style={{ marginRight: '17px' }}
            />
          </div>
          <div>100% Authentic Guarantee</div>
        </div>
        <div
          className="d-flex justify-content-around"
          style={{ alignItems: 'center' }}
        >
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
        <div className="d-flex justify-content-around" style={{ width: '49%' }}>
          <button
            className="btn text-light"
            type="button"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: 'black',
              fontSize: '18px',
            }}

            onClick={() => props.handleComponent("/rem")}
          >
            Back
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
              backgroundColor: '#00B227',
              fontSize: '18px',
            }}

            onClick={() => handleClick()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
