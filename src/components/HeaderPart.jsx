import React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';

function HeaderPart({ 
  isLoggedIn, 
  handleLoginToggle, 
  setShowLoginModal, 
  currentPage, 
  setCurrentPage, 
  language, 
  handleLanguageToggle, 
  currency, 
  handleCurrencyToggle, 
  cartItemCount 
}) {
  useConsoleLog()
  return (
    <header className="header">
      <h1>{language === 'uk' ? 'Зоомагазин' : 'Pet Store'}</h1>
      <nav className="nav">
        <button 
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('home')}
        >
          {language === 'uk' ? 'Головна' : 'Home'}
        </button>
        <button 
          className={`nav-button ${currentPage === 'locations' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('locations')}
        >
          {language === 'uk' ? 'Локації' : 'Locations'}
        </button>
        <button 
          className={`nav-button ${currentPage === 'converter' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('converter')}
        >
          {language === 'uk' ? 'Конвертер валют' : 'Currency Converter'}
        </button>
        <button onClick={handleLanguageToggle}>
          {language === 'uk' ? 'EN' : 'UA'}
        </button>
        <button onClick={handleCurrencyToggle}>
          {currency === 'UAH' ? 'USD' : 'UAH'}
        </button>
        <button>
          {language === 'uk' ? `Кошик (${cartItemCount})` : `Cart (${cartItemCount})`}
        </button>
        {isLoggedIn ? (
          <button onClick={() => handleLoginToggle(false)} className="button">
            {language === 'uk' ? 'Вийти' : 'Logout'}
          </button>
        ) : (
          <button onClick={() => setShowLoginModal(true)} className="button">
            {language === 'uk' ? 'Увійти' : 'Login'}
          </button>
        )}
      </nav>
    </header>
  );
}

export default HeaderPart;