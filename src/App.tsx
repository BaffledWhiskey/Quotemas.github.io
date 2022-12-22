import React, { useState } from 'react';
import './App.css';
import QuoteList, { QuoteListProps } from './containers/quoteList';
import AddQuote from './inputForms/addQuote';



function App() {
  const [items, setItems] = useState<QuoteListProps>({quoteList: [{quote: 'test', author: 'max'}, {quote: 'quote for what, this an example of an extremely long quote', author:'mum'}]});
  return ( //{setQuotes: setItems, quotes: items}
    <div>
      <AddQuote setQuotes={setItems} quotes={items}/>
      <QuoteList quoteList={items.quoteList}/>
    </div>
    
  );
}

export default App;
