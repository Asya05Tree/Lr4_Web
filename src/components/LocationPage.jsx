import React, { useEffect } from 'react'; // краще для роботи з інтернет сайтами

function LocationPage({ language }) {
  const locations = [
    { id: 1, name: { uk: 'Київ', en: 'Kyiv' }, address: { uk: 'вул. Михайла Кіщука, 1', en: '1 Mykhailа Kishchuka St.' } },
    { id: 2, name: { uk: 'Львів', en: 'Lviv' }, address: { uk: 'вул. ЧНУ Петра Могили, 1', en: '1 CHNU Petra Mohyly St.' } },
    { id: 3, name: { uk: 'Одеса', en: 'Odesa' }, address: { uk: 'вул. Продажна, 6', en: '6 Prodazna St.' } }
  ];

useEffect(() => { console.log(language) })

  return (
    <div className="location-page">
      <h2>{language === 'uk' ? 'Наші магазини' : 'Our Stores'}</h2>
      <div className="location-list">
        {locations.map(location => (
          <div key={location.id} className="location-item">
            <h3>{location.name[language]}</h3>
            <p>{language === 'uk' ? 'Адреса' : 'Address'}: {location.address[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationPage;