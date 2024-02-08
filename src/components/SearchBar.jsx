import { useState} from 'react'

const SearchBar = () => {

    const [onFocus, setOnFocus] = useState(false); 
  return (
    <div>
        <div className='bg-white w-search mt-16 h-12 rounded-r-3xl'>
            <form className='h-full' action="">
                { onFocus ? (
                <input className='w-full h-full bg-transparent focus:border-0 text-center' type="text" />
                ) :
                (
                 <p className='m-auto text-center h-full'>O que você está procurando?</p>   
                )
                }
            </form>
        </div>
    </div>
  )
}

export default SearchBar