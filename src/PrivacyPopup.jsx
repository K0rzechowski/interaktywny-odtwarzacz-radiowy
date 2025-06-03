import { useEffect, useState } from 'react';

export default function PrivacyPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('privacyAccepted='));
    if (!cookie) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `privacyAccepted=1; expires=${date.toUTCString()}; path=/`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      display: 'block',
      zIndex: 99999,
      minHeight: '35px',
      width: '300px',
      position: 'fixed',
      background: '#fff3e0',
      border: '1px solid #ff9800',
      textAlign: 'center',
      right: '10px',
      top: '10px',
      color: '#777',
    }}>
      <div style={{ padding: 10, margin: '0 15px', fontSize: 14 }}>
        <span>Ta strona używa plików cookies.</span><br />
        <a href="http://jakwylaczyccookie.pl/polityka-cookie/" style={{ color: '#ff9800' }}>Polityka Prywatności</a>&nbsp;&nbsp;
        <a href="http://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/" style={{ color: '#ff9800' }}>Jak wyłączyć cookies?</a>&nbsp;&nbsp;
        <a href="https://nety.pl/cyberbezpieczenstwo" style={{ color: '#ff9800' }}>Cyberbezpieczeństwo</a>
        <div style={{ height: 10 }}></div>
        <button onClick={acceptCookies} style={{
          background: '#ff9800',
          color: '#fff',
          padding: '5px 15px',
          fontSize: 12,
          border: 'none',
          cursor: 'pointer',
        }}>
          AKCEPTUJĘ
        </button>
      </div>
    </div>
  );
}
