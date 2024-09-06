import { useState } from "react";
import { useGetQuotesQuery } from "./QuotesSlice";


const Quotes = () => {
    const [quoteLimit] = useState(10);
    const { data, isError, isLoading, isSuccess} = useGetQuotesQuery(quoteLimit);
    return (
        <div>
            {
                isSuccess ? data.quotes.map(({id, quote, author}) => (
                    <blockquote key={id}>
                        {quote}
                        <footer>
                            <cite> {author} </cite>
                        </footer>
                    </blockquote>
                    
                )) : isLoading ? <h3> Loading... </h3> : <h2> Failed... {isError} </h2>
            
            }
        </div>    
    )
}
export default Quotes;