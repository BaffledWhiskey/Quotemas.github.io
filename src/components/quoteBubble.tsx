import './quoteBubble.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export interface Quote{
    quote: string;
    author: string;
}



const QuoteBubble = (props: Quote) =>{

    const [upArrowSelected, updateUpArrowSelected] = useState(false);
    const [downArrowSelected, updateDownArrowSelected] = useState(false);

    const upVote = (event: React.MouseEvent)=>{
        event.preventDefault();
        updateDownArrowSelected(false);
        updateUpArrowSelected(!upArrowSelected);
    }
    
    const downVote = (event: React.MouseEvent) =>{
        event.preventDefault();
        updateUpArrowSelected(false);
        updateDownArrowSelected(!downArrowSelected);   
    }
    

    return(
        <div className="quote-bubble">

            <div className='quote-text quote-box'>
                <h1>
                    {props.quote}
                </h1>
                <a href='' className={`btn + ${upArrowSelected ? 'arrow-selected' : 'arrow-not-selected'}`} 
                   onClick={(upVote)}><FontAwesomeIcon icon={faSquareCaretUp} className='up-arrow'/></a>
            </div>
                <hr/>
                <div className='quote-text author-box'>
                <p>
                    {props.author}
                </p>
                <a href='' className={`btn + ${downArrowSelected ? 'arrow-selected' : 'arrow-not-selected'}`} 
                   onClick={downVote}><FontAwesomeIcon icon={faSquareCaretDown} className='down-arrow'/></a>
                </div>
            
        </div>
    )
}

export default QuoteBubble;