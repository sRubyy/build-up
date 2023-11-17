import { useEffect, useState } from 'react';
import ProductModel from '../../models/ProductModel';
import ItemShowcase from '../search_result/components/itemShowcase';
import { useLocation } from 'react-router-dom';
import { itemImageMapping } from '../../config/item_image_mapping';
import '../../scss/search_result/search_result.scss';

export const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [method, setMethod] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (location.state && location.state.data) {
        setQuery(location.state.data.query);
        setMethod(location.state.data.method);
      } else {
        console.error('Data is not available in location state.');
      }
    };

    fetchData();
  }, [location.state]);

  useEffect(() => {
    const fetchResults = async () => {
      const baseUrl = 'http://localhost:8080/api/product/';
      let url = '';

      if (method === 'name') {
        if (query === '') {
          url = baseUrl;
        } else {
          url = baseUrl + `findByName?name=${query}`;
        }
      } else if (method === 'category') {
        url = baseUrl + `findByType?category=${query}`;
      }

      try {
        const response = await fetch(url, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Error found');
        }

        const responseJson = await response.json();

        const loadedResults = Object.keys(responseJson).map((key) => {
          const product = new ProductModel(
            responseJson[key].name,
            responseJson[key].description,
            responseJson[key].price,
            responseJson[key].type,
            responseJson[key].size,
            responseJson[key].brandNew
          );

          product.setCreatedAt(responseJson[key].createAt);
          product.setPurchaseDate(responseJson[key].purchaseDate);
          product.setId(responseJson[key].productId);

          return product;
        });

        setResults(loadedResults);
      } catch (error) {
        console.error(error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="product-detail" style={{ margin: '5% 10%' }}>
      <div className={'search-title'}>Search results</div>
      <div className="showcase-list">
        {results.map((item, i) => (
          <div key={i}>
            <ItemShowcase
              name={item.name}
              price={item.price}
              imageUrl={itemImageMapping[item.name]?.snippetImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
