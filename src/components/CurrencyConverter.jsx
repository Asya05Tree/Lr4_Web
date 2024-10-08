import React from 'react';

function CurrencyConverter({ uahAmount, usdAmount, handleCurrencyConversion, language }) {
  return (
    <div className="currency-converter">
      <h2>{language === 'uk' ? 'Конвертер валют' : 'Currency Converter'}</h2>
      <div className="converter-inputs">
        <div className="input-group">
          <label htmlFor="uah-input">
            {language === 'uk' ? 'Гривня (UAH):' : 'Hryvnia (UAH):'}
          </label>
          <input
            id="uah-input"
            type="number"
            value={uahAmount}
            onChange={(e) => handleCurrencyConversion(e.target.value, true)}
            placeholder="0.00"
          />
        </div>
        <div className="input-group">
          <label htmlFor="usd-input">
            {language === 'uk' ? 'Долар США (USD):' : 'US Dollar (USD):'}
          </label>
          <input
            id="usd-input"
            type="number"
            value={usdAmount}
            onChange={(e) => handleCurrencyConversion(e.target.value, false)}
            placeholder="0.00"
          />
        </div>
      </div>
      <p className="exchange-rate-info">
        {language === 'uk' 
          ? '1 Долар США дорівнює 41,16 Українська гривня' 
          : '1 US Dollar equals 41.16 Ukrainian Hryvnia'}
      </p>
    </div>
  );
}

export default CurrencyConverter;