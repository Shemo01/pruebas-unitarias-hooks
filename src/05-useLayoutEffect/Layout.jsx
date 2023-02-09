import { useCounter, useFetch } from '../hooks';
import LoadingQuote from '../03-examples/LoadingQuote';
import Quote from '../03-examples/Quote';

const Layout = () => {

    const {counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    // const { author, quote } = !!data && data[0];
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    <LoadingQuote />
                )
                : 
                (
                    <Quote quote={ 'Hola Mundo' } author={ 'Pedro Picapiedra' }/>
                )
            }

            <button className='btn btn-primary' disabled={ isLoading } onClick={() => increment()}>
                Next quote
            </button>
        </>
    )
}


export default Layout

