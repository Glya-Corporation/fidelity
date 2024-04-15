import { useState } from 'react';

const Inventary = () => {
  const [isSelected, setIsSelected] = useState(true);

  const styles = {
    selected: {
      color: '#00aa00',
      backgroundColor: '#ffffff'
    },
    hidde: {}
  };

  return (
    <main className='background'>
      <header className='header-inventary'>
        <ul>
          <li onClick={() => setIsSelected(true)} style={isSelected ? styles.selected : styles.hidde}>
            Actual
          </li>
          <li onClick={() => setIsSelected(false)} style={!isSelected ? styles.selected : styles.hidde}>
            Historial
          </li>
        </ul>
      </header>
      <body></body>
    </main>
  );
};

export default Inventary;
