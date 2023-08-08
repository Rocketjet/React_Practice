import { useMemo, useRef, useState } from 'react';
function App() {
  const [items, setItems] = useState(['Test item']);
  const [query, setQuery] = useState('');
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter(
      item => item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (!value) return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = '';
  }
  return (
    <>
      Search:
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>

      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}
    </>
  );
}

export default App;
