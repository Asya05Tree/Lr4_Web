import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderPart from './components/HeaderPart';
import MainPart from './components/MainPart';
import FooterPart from './components/FooterPart';
import ProductDetail from './components/ProductDetail';
import LocationPage from './components/LocationPage';
import LoginModal from './components/LoginModal';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    return storedLoginState ? JSON.parse(storedLoginState) : false;
  });
  const [currentPage, setCurrentPage] = useState('home');
  const [uahAmount, setUahAmount] = useState('');
  const [usdAmount, setUsdAmount] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [selectedBrands, setSelectedBrands] = useState({});
  const [language, setLanguage] = useState('uk');
  const [currency, setCurrency] = useState('UAH');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const exchangeRate = 0.024;

  const products = [
    { id: 1, name: { uk: "Корм для собак", en: "Dog Food" }, brand: "Royal Canin", price: 500, description: { uk: "Сухий корм для дорослих собак", en: "Dry food for adult dogs" } },
    { id: 2, name: { uk: "Корм для котів", en: "Cat Food" }, brand: "Royal Canin", price: 450, description: { uk: "Вологий корм для котів", en: "Wet food for cats" } },
    { id: 3, name: { uk: "Іграшка для котів", en: "Cat Toy" }, brand: "Trixie", price: 150, description: { uk: "Інтерактивна іграшка для котів", en: "Interactive toy for cats" } },
    { id: 4, name: { uk: "Іграшка для собак", en: "Dog Toy" }, brand: "Trixie", price: 200, description: { uk: "М'яч для собак", en: "Ball for dogs" } },
    { id: 5, name: { uk: "Ласощі для гризунів", en: "Rodent Treats" }, brand: "Vitakraft", price: 80, description: { uk: "Смачні ласощі для гризунів", en: "Tasty treats for rodents" } },
    { id: 6, name: { uk: "Корм для гризунів", en: "Rodent Food" }, brand: "Vitakraft", price: 120, description: { uk: "Збалансований корм для гризунів", en: "Balanced food for rodents" } },
    { id: 7, name: { uk: "Шампунь для собак", en: "Dog Shampoo" }, brand: "8in1", price: 200, description: { uk: "М'який шампунь для собак", en: "Gentle shampoo for dogs" } },
    { id: 8, name: { uk: "Ошийник для собак", en: "Dog Collar" }, brand: "8in1", price: 180, description: { uk: "Міцний ошийник для собак", en: "Durable collar for dogs" } },
    { id: 9, name: { uk: "Акваріум", en: "Aquarium" }, brand: "Tetra", price: 1500, description: { uk: "Скляний акваріум на 100 літрів", en: "100-liter glass aquarium" } },
    { id: 10, name: { uk: "Фільтр для акваріума", en: "Aquarium Filter" }, brand: "Tetra", price: 500, description: { uk: "Потужний фільтр для акваріума", en: "Powerful aquarium filter" } },
  ];

  const brands = [...new Set(products.map(product => product.brand))];

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLoginToggle = (loginState) => {
    setIsLoggedIn(loginState);
    setShowLoginModal(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username.length > 20 || password.length > 20) {
      setLoginError(language === 'uk' ? "Логін та пароль повинні бути не більше 20 символів" : "Login and password must not exceed 20 characters");
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(username) || !/^[a-zA-Z0-9]+$/.test(password)) {
      setLoginError(language === 'uk' ? "Логін та пароль повинні містити тільки англійські літери та цифри" : "Login and password must contain only English letters and numbers");
      return;
    }
    handleLoginToggle(true);
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => ({
      ...prev,
      [brand]: !prev[brand]
    }));
  };

  const filteredProducts = products.filter(product => !selectedBrands[product.brand]);

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === 'uk' ? 'en' : 'uk');
  };

  const handleCurrencyToggle = () => {
    setCurrency(prev => prev === 'UAH' ? 'USD' : 'UAH');
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const convertPrice = (priceUAH) => {
    return currency === 'UAH' ? priceUAH : (priceUAH * exchangeRate).toFixed(2);
  };

  const handleCurrencyConversion = (amount, fromUAH) => {
    const exchangeRate = 41.16;
    if (fromUAH) {
      setUahAmount(amount);
      setUsdAmount((amount / exchangeRate).toFixed(2));
    } else {
      setUsdAmount(amount);
      setUahAmount((amount * exchangeRate).toFixed(2));
    }
  };

  return (
    <div className="App">
      <HeaderPart
        isLoggedIn={isLoggedIn}
        handleLoginToggle={handleLoginToggle}
        setShowLoginModal={setShowLoginModal}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        handleLanguageToggle={handleLanguageToggle}
        currency={currency}
        handleCurrencyToggle={handleCurrencyToggle}
        cartItemCount={cart.length}
      />
      {currentPage === 'home' && (
        <MainPart
          products={filteredProducts}
          brands={brands}
          selectedBrands={selectedBrands}
          handleBrandToggle={handleBrandToggle}
          language={language}
          currency={currency}
          convertPrice={convertPrice}
          handleProductSelect={handleProductSelect}
        />
      )}
      {currentPage === 'product' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          language={language}
          currency={currency}
          convertPrice={convertPrice}
          handleAddToCart={handleAddToCart}
          isLoggedIn={isLoggedIn}
        />
      )}
      {currentPage === 'locations' && (
        <LocationPage language={language} />
      )}
      {currentPage === 'converter' && (
        <CurrencyConverter
          uahAmount={uahAmount}
          usdAmount={usdAmount}
          handleCurrencyConversion={handleCurrencyConversion}
          language={language}
        />
      )}
      <FooterPart language={language} />
      {showLoginModal && (
        <LoginModal
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          loginError={loginError}
          handleLoginSubmit={handleLoginSubmit}
          setShowLoginModal={setShowLoginModal}
          language={language}
        />
      )}
    </div>
  );
}

export default App;