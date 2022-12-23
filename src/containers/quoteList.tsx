import QuoteBubble, { Quote } from '../components/quoteBubble';
import './quoteList.css'
import React, { useState } from 'react';
import { AllQuotes, QuoteDataInput } from '../App';

export interface QuoteListProps {
    quoteList: QuoteDataInput[]
    setQuotes: React.Dispatch<React.SetStateAction<AllQuotes>>;
}


const QuoteList = (props: QuoteListProps) =>{

    const sortQuotes = (quotes: QuoteDataInput[]) => {
        quotes.sort((quoteA: QuoteDataInput, quoteB: QuoteDataInput) =>{
            return quoteB.votes - quoteA.votes;
        });
        props.setQuotes({quotes: [...quotes]});
        return quotes;
    }

    const GetVotes = (votes: number, id: number) =>{
        const updatedQuote = props.quoteList.find((quote) => quote.quoteId === id)
        if(updatedQuote){
            updatedQuote.votes = votes;
            props.setQuotes({quotes:[...props.quoteList, updatedQuote]});
        }
        sortQuotes(props.quoteList)
    }


    return(
        <ul className='quote-list'>
            {props.quoteList.map((quote: QuoteDataInput)=>(
                <li><QuoteBubble quote={quote.quote} author={quote.author} key={Math.random()} votes={quote.votes} passVotes={GetVotes} quoteId={quote.quoteId}/></li>
            ))}
        </ul>
    )
}

export default QuoteList;