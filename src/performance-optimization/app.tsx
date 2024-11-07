import { useState } from 'react';

interface ItemProps {
  value: string;
}

interface ListItemsProps {
  items: string[];
}

const Item = ({ value }: ItemProps) => {
  console.log('Rendering Item:', value);

  return <div>{value}</div>;
};

const ListItems = ({ items }: ListItemsProps) => {
  return (
    <div>
      {items.map((item, index) => <Item key={index} value={item} />)}
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const items = [];
  
  for (let i = 0; i < 20000; i++) {
    items.push(`Item ${i}`);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <ListItems items={items} />
    </div>
  );
};

export default App;