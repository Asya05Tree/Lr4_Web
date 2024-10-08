import React, { useState } from 'react';

function ProductDetail({ product, language, currency, convertPrice, handleAddToCart, isLoggedIn }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [wish, setWish] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      setComments([...comments, comment]);
      setComment('');
    } else {
      alert(language === 'uk' ? 'Будь ласка, увійдіть, щоб залишити коментар' : 'Please log in to leave a comment');
    }
  };

  const handleWishSubmit = (e) => {
    e.preventDefault();
    console.log(wish);
    alert(`${language === 'uk' ? 'Ваші побажання' : 'Your wishes'}: "${wish}" ${language === 'uk' ? 'додано успішно!' : 'added successfully!'}`);
    setWish('');
  };

  return (
    <div className="product-detail">
      <h2>{product.name[language]}</h2>
      <p>{language === 'uk' ? 'Бренд' : 'Brand'}: {product.brand}</p>
      <p>{language === 'uk' ? 'Ціна' : 'Price'}: {convertPrice(product.price)} {currency}</p>
      <p>{language === 'uk' ? 'Опис' : 'Description'}: {product.description[language]}</p>
      <button onClick={() => handleAddToCart(product)}>
        {language === 'uk' ? 'Додати до кошика' : 'Add to cart'}
      </button>

      <h3>{language === 'uk' ? 'Коментарі' : 'Comments'}</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={language === 'uk' ? 'Залиште свій коментар' : 'Leave your comment'}
        />
        <button type="submit">{language === 'uk' ? 'Додати коментар' : 'Add comment'}</button>
      </form>
      <div className="comments-list">
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>

      <h3>{language === 'uk' ? 'Побажання' : 'Wishes'}</h3>
      <form onSubmit={handleWishSubmit}>
        <textarea 
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder={language === 'uk' ? 'Залиште свої побажання' : 'Leave your wishes'}
        />
        <button type="submit">{language === 'uk' ? 'Додати побажання' : 'Add wish'}</button>
      </form>
    </div>
  );
}

export default ProductDetail;