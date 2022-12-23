import React, { useState } from 'react';
import './App.css';
import { Quote } from './components/quoteBubble';
import QuoteList, { QuoteListProps } from './containers/quoteList';
import AddQuote from './inputForms/addQuote';

export interface QuoteDataInput {
    quote: string;
    author: string;
    key: number;
    quoteId: number;
    votes: number;
}

export interface AllQuotes {
  quotes: QuoteDataInput[];
}

function App() {
  const [items, setItems] = useState<AllQuotes>({quotes: [{quote: 'test', author: 'max', key:1, votes: 0, quoteId: 0}, {quote: 'quote for what, this an example of an extremely long quote', author:'mum', key:2, votes:0, quoteId: 1}]});
  return (
    <div>
      <AddQuote setQuotes={setItems} quotes={items}/>
      <QuoteList quoteList={items.quotes} setQuotes={setItems}/>
    </div>
    
  );
}

export default App;
