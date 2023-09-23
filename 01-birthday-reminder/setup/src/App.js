import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users, setUsers] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{users.length} Birthdays Today</h3>
        <List data={users}></List>
        <button onClick={() => setUsers([])}>Clear List</button>
      </section>
    </main>
  );
}

export default App;
