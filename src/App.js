import React from 'react';
import Search from './components/Search';
import Tabla from './components/Tabla';
import PRODUCTS from './services/PRODUCTS';

export const App = () => {
  const [check, setCheck] = React.useState(false);
  const [input, setInput] = React.useState('');

  return (
    <div>
      <Search checkValue={setCheck} inputValue={setInput} />
      <Tabla data={PRODUCTS} filterText={input} inStockOnly={check} />
    </div>
  );
};

export default App;
