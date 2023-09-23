import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterCategory = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const categoryItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(categoryItems);
  };

  const allCategories = [
    'all',
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterCategory={filterCategory}
          allCategories={allCategories}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
