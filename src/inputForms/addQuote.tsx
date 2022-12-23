import { Box, Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { QuoteListProps } from '../containers/quoteList';
import './addQuote.css'
import React from 'react'
import { AllQuotes } from '../App';

export interface SetQuotesParams{
    setQuotes: React.Dispatch<React.SetStateAction<AllQuotes>>;
    quotes: AllQuotes;
}



const AddQuote = (props: SetQuotesParams) =>{
    const [name, setName] = useState('');
    const [quoteText, setQuoteText] = useState('');

    const handleSubmit = (event: React.FormEvent<any>) =>{
        event.preventDefault();
        if(name.length < 1 || quoteText.length < 1){
            return;
        }
        const newQuotes = {quotes: [...props.quotes.quotes, {quote: quoteText, author: name, key: Math.random(), votes: 0, quoteId: Math.random()}]}
        props.setQuotes(newQuotes);
        setName('');
        setQuoteText('');
    }
    
    const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setName(event.currentTarget.value);
        event.preventDefault();
    }

    const handleQuoteChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setQuoteText(event.currentTarget.value);
        event.preventDefault();
    }


    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className='fancy-form'
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={1}
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            id="outlined-textarea"
            label="Quote"
            placeholder="Enter Quote Here"
            multiline
            maxRows={4}
            value={quoteText}
            onChange={handleQuoteChange}
          />
          </div>
          <Button variant="contained" onClick={handleSubmit} className='submit-button'>Submit!</Button>
        </Box>
    )
}

export default AddQuote;