import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SearchBar.css";
import SearchCard from './SearchCard';
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value); // Apelează funcția onSearch la fiecare schimbare
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Căutați produse..."
      />
    </div>
  );
};

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // Funcție pentru a prelua datele de la backend
  const fetchProducts = async () => {
    try {
      const laptopuriRes = await axios.get('/api/laptops');
      const pcuriRes = await axios.get('');
      const perifericeRes = await axios.get('');
      const componenteRes = await axios.get('');

      // Combinăm produsele într-un singur array
      const combinedProducts = [
        ...laptopuriRes.data,
        ...pcuriRes.data,
        ...perifericeRes.data,
        ...componenteRes.data
      ];

      setAllProducts(combinedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Funcție de căutare
  const handleSearch = (searchText) => {
    const filtered = allProducts.filter(product => {
      const lowerCaseSearchText = searchText.toLowerCase();
      return (
        product.name?.toLowerCase().includes(lowerCaseSearchText) ||
        product.brand?.toLowerCase().includes(lowerCaseSearchText) ||
        product.model?.toLowerCase().includes(lowerCaseSearchText) ||
        product.specifications?.toLowerCase().includes(lowerCaseSearchText) ||
        product.laptopType?.toLowerCase().includes(lowerCaseSearchText) ||
        product.pcType?.toLowerCase().includes(lowerCaseSearchText) ||
        product.peripheralType?.toLowerCase().includes(lowerCaseSearchText) ||
        product.componentType?.toLowerCase().includes(lowerCaseSearchText)
      );
    });

    setFilteredProducts(filtered.slice(0, 5));
  };

  return (
    <div className='search-container'>
      <SearchBar onSearch={handleSearch} />
      <div className="product-list">
        <div className='list-container-div'>
          {filteredProducts.length === 0 ? (
            <p className="no-products">No products found.</p>
          ) : (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  
                  <SearchCard name={product.name}
                    model={product.model}
                    brand={product.brand}
                    specifications={product.specifications}
                    price={product.price} />
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductList;
