import React, { useState } from 'react';
import '../App.css';

function Reactbasic() {
  const [items, setItems] = useState(["Book 1", "Book 2", "Movie 1", "Movie 2", "Task 1"]);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reactbasic;
