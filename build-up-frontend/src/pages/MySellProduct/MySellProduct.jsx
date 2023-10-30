import { useEffect, useState } from 'react';
import '../../scss/my_sell_product/my_sell_product.scss'
import { async } from 'q';
import ProductModel from '../../models/ProductModel';
import { error } from 'console';
export const MySelllProduct = () => {

    const [products, setProducts] = useState<ProductModel>([]);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {

        const fetchSellerProducts = async () => {
            
            const url = "http://localhost:8080/api/product/findAll";

            const response = await fetch(url);
        

            if (!response.ok) {
                throw new Error('Error found');
            }

            const responseJson = await response.json();

            const loadedSellerProducts = [];

            for(const key in responseJson){
                const product = new ProductModel(
                    responseJson[key].name,
                    responseJson[key].description,
                    responseJson[key].price,
                    responseJson[key].type,
                    responseJson[key].size,
                    responseJson[key].brandNew
                )

                product.setCreatedAt(responseJson[key].createdAt)

                loadedSellerProducts.push(product)
            }

            setProducts(loadedSellerProducts)

            console.log(loadedSellerProducts)
        };
        fetchSellerProducts().catch((error) => {
            etHttpError(error.message);
        })
    })

    return(
    <div>
        <div className="path">
            <div style={{height: '30px'}}>Home</div>
            <div style={{ marginLeft: '1%', marginRight: '1%' , height: '30px'}}>
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
            <div style={{height: '30px'}}>My Sell Products</div>
            
        </div>
        <div style={{marginLeft: '6%'}}>
            <div className="row" style={{width:'360px'}}>
                <div className="col mt-5">
                    <img
                        className="img_shoe"
                        src={require('./../../images/Rectangle 17.png')}
                    />
                </div>
                <div className="row" style={{marginLeft: '0.2%'}}>
                <div className="col mt-3">
                    <p className='fs-5 fw-semibold'>New Balance 530 White Silver Navy</p>
                </div>
            </div>
            <div>
                
            </div>
            <div className="row" style={{marginLeft: '0.2%'}}>
                <div className="col" style={{marginTop: '0.1%'}}>
                    <p className='fs-5 fw-bold'>5,000.-</p>
                </div>
            </div>
            </div>
            
        </div>
    </div>
    );
}