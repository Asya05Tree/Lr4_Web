import React from 'react';
import { useEffect } from 'react';

function FooterPart() {
  useEffect(() => { console.log("footer text") })

  return (
    <footer className="footer">
      <p>&copy; 2024 - Зоомагазин "ВусоЛапоХвіст". Всі права не захищені.</p>
    </footer>
  );
}

export default FooterPart;