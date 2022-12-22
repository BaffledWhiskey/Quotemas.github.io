import QuoteBubble, { Quote } from '../components/quoteBubble';
import './quoteList.css'

export interface QuoteListProps {
    quoteList: Quote[]
}


const QuoteList = (props: QuoteListProps) =>{
    return(
        <ul className='quote-list'>
            {props.quoteList.map((quote: Quote)=>(
                <li><QuoteBubble quote={quote.quote} author={quote.author}/></li>
            ))}
        </ul>
    )
}

export default QuoteList;