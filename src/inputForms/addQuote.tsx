import { useState } from 'react';
import { QuoteListProps } from '../containers/quoteList';
import './addQuote.css'

export interface SetQuotesParams{
    setQuotes: React.Dispatch<React.SetStateAction<QuoteListProps>>;
    quotes: QuoteListProps;
}



const AddQuote = (props: SetQuotesParams) =>{
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');

    const handleSubmit = (event: React.FormEvent<any>) =>{
        event.preventDefault();
        if(name.length < 1 || quote.length < 1){
            return;
        }
        const newQuotes = {quoteList: [...props.quotes.quoteList, {quote: quote, author: name}]}
        props.setQuotes(newQuotes);
        setName('');
        setQuote('');
        
    }
    
    const handleNameChange = (event: React.FormEvent<HTMLInputElement>) =>{
        setName(event.currentTarget.value);
        event.preventDefault();
    }

    const handleQuoteChange = (event: React.FormEvent<HTMLInputElement>) =>{
        setQuote(event.currentTarget.value);
        event.preventDefault();
    }

    return(
        <div className='fancy-form'>
            <h2>Le Awesome Sauce Quote Submission Form</h2>
        <form onSubmit={handleSubmit}>
        <label>
            
          <input placeholder='Quote' type="text" value={quote} onChange={handleQuoteChange} />
        </label>
        <br/>
        <label>
            
          <input placeholder='Name' type="text" value={name} onChange={handleNameChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" className='submit-button' />
      </form>
      </div>
    )
}

export default AddQuote;