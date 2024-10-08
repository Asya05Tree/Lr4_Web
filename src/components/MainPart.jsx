import React from 'react';

function MainPart({ 
  products, 
  brands, 
  selectedBrands, 
  handleBrandToggle, 
  language, 
  currency, 
  convertPrice, 
  handleProductSelect 
}) {
  const renderProductItem = (product) => (
    <div 
      key={product.id} 
      className="product"
      onClick={() => handleProductSelect(product)}
    >
      <h3>{product.name[language]}</h3>
      <p>{language === 'uk' ? 'Бренд' : 'Brand'}: {product.brand}</p>
      <p>{language === 'uk' ? 'Ціна' : 'Price'}: {convertPrice(product.price)} {currency}</p>
    </div>
  );

  return (
    <main className="home-page">
      <h2>{language === 'uk' ? 'Ласкаво просимо до нашого зоомагазину!' : 'Welcome to our Pet Store!'}</h2>
      
      <div className="brand-filters">
        <h3>{language === 'uk' ? 'Фільтр за брендами' : 'Filter by brands'}:</h3>
        {brands.map(brand => (
          <label key={brand} className="brand-item">
            <input
              type="checkbox"
              checked={!selectedBrands[brand]}
              onChange={() => handleBrandToggle(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className="product-list">
        {products.map(renderProductItem)}
      </div>
    </main>
  );
}

export default MainPart;