import React, { useEffect } from 'react';
import useAlert from '../hooks/useAlert';
function LoginModal({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  loginError, 
  handleLoginSubmit, 
  setShowLoginModal, 
  language 
}) {
  
  const [alert, setAlert] = useAlert()
  useEffect(() => setAlert(true),[alert])

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{language === 'uk' ? 'Вхід' : 'Login'}</h2>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="username">{language === 'uk' ? 'Логін:' : 'Username:'}</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">{language === 'uk' ? 'Пароль:' : 'Password:'}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {loginError && <p className="error">{loginError}</p>}
          <button type="submit">{language === 'uk' ? 'Увійти' : 'Login'}</button>
          <button type="button" onClick={() => setShowLoginModal(false)}>
            {language === 'uk' ? 'Скасувати' : 'Cancel'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;