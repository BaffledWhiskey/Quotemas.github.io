import './quoteBubble.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FormEventHandler, useEffect, useState } from 'react';
import { Card, Chip } from '@mui/material';

type changeFunction = (votes: number, id: number) => void;

export interface Quote{
    quote: string;
    author: string;
    key: number;
    quoteId: number;
    votes: number;
    passVotes: changeFunction;
}

const QuoteBubble = (props: Quote) =>{

    const [upArrowSelected, updateUpArrowSelected] = useState(false);
    const [downArrowSelected, updateDownArrowSelected] = useState(false);

        
    

    const upVote = (event: any)=>{
        event.preventDefault();
        if(upArrowSelected){
            updateDownArrowSelected(false);
            updateUpArrowSelected(false);
            props.passVotes(props.votes - 1, props.quoteId);
            return;
        }
        updateDownArrowSelected(false);
        updateUpArrowSelected(true);
        props.passVotes(props.votes + 1, props.quoteId);
    }
    
    const downVote = (event: any ) =>{
        event.preventDefault();
        if(downArrowSelected){
            props.passVotes(props.votes + 1, props.quoteId);
            updateUpArrowSelected(false);
            updateDownArrowSelected(false);  
            return;
        }
        props.passVotes(props.votes - 1, props.quoteId);
        updateUpArrowSelected(false);
        updateDownArrowSelected(true);     
    }
    

    return(
        <Card variant="outlined" className='quote-bubble'>

            <div className='quote-text quote-box'>
            <a href='' className={`btn + ${upArrowSelected ? 'arrow-selected' : 'arrow-not-selected'}`} 
                   onChange={upVote} onClick={e => e.preventDefault()}><FontAwesomeIcon icon={faSquareCaretUp} className='up-arrow'/></a>
                <h1>
                    {props.quote}
                </h1>
            </div>
                <div className='quote-text author-box'>
                <a href='' className={`btn + ${downArrowSelected ? 'arrow-selected' : 'arrow-not-selected'}`} 
                   onChange={downVote}><FontAwesomeIcon icon={faSquareCaretDown} className='down-arrow'/></a>
                <Chip label={props.votes} variant="outlined" className='votes-pill' />
                <p>
                    {props.author}
                </p>
                
                </div>
            
        </Card>
    )
}

export default QuoteBubble;