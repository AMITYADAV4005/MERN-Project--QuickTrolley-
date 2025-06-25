// import React, { useEffect, useState } from 'react'
// import { IoSearch } from "react-icons/io5";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { TypeAnimation } from 'react-type-animation';
// import { FaArrowLeft } from "react-icons/fa";
// import useMobile from '../hooks/useMobile';


// const Search = () => {
//     const navigate = useNavigate()
//     const location = useLocation()
//     const [isSearchPage,setIsSearchPage] = useState(false)
//     const [ isMobile ] = useMobile()
//     const params = useLocation()
//     const searchText = params.search.slice(3)

//     useEffect(()=>{
//         const isSearch = location.pathname === "/search"
//         setIsSearchPage(isSearch)
//     },[location])


//     const redirectToSearchPage = ()=>{
//         navigate("/search")
//     }

//     const handleOnChange = (e)=>{
//         const value = e.target.value
//         const url = `/search?q=${value}`
//         navigate(url)
//     }

//   return (
//     <div className='w-full  min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200 '>
//         <div>
//             {
//                 (isMobile && isSearchPage ) ? (
//                     <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
//                         <FaArrowLeft size={20}/>
//                     </Link>
//                 ) :(
//                     <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
//                         <IoSearch size={22}/>
//                     </button>
//                 )
//             }
//         </div>
//         <div className='w-full h-full'>
//             {
//                 !isSearchPage ? (
//                      //not in search page
//                      <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
//                         <TypeAnimation
//                                 sequence={[
//                                     // Same substring at the start will only be typed out once, initially
//                                     'Search "milk"',
//                                     1000, // wait 1s before replacing "Mice" with "Hamsters"
//                                     'Search "bread"',
//                                     1000,
//                                     'Search "sugar"',
//                                     1000,
//                                     'Search "panner"',
//                                     1000,
//                                     'Search "chocolate"',
//                                     1000,
//                                     'Search "curd"',
//                                     1000,
//                                     'Search "rice"',
//                                     1000,
//                                     'Search "egg"',
//                                     1000,
//                                     'Search "chips"',
//                                 ]}
//                                 wrapper="span"
//                                 speed={50}
//                                 repeat={Infinity}
//                             />
//                      </div>
//                 ) : (
//                     //when i was search page
//                     <div className='w-full h-full'>
//                         <input
//                             type='text'
//                             placeholder='Search for atta dal and more.'
//                             autoFocus
//                             defaultValue={searchText}
//                             className='bg-transparent w-full h-full outline-none'
//                             onChange={handleOnChange}
//                         />
//                     </div>
//                 )
//             }
//         </div>
        
//     </div>
//   )
// }

// export default Search




import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';

const searchSuggestions = [
  'Search for "milk"',
  'Search for "bread"',
  'Search for "sugar"',
  'Search for "butter"',
  'Search for "paneer"',
  'Search for "chocolate"',
  'Search for "curd"',
  'Search for "rice"',
  'Search for "egg"',
  'Search for "chips" ',
];

const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [isSearchPaga,setIsSearchPage] = useState(false)
  const [isMobile] = useMobile()
  const [index, setIndex] = useState(0);  // This is scrolling motion on search 
  const params = useLocation()
  const searchText = params.search.slice(3)

/////////////////////////////////////////////////////////////////
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
/////////////////////////////////////////////////////////////////

  useEffect(()=>{
    const isSearch = location.pathname === "/search"
    setIsSearchPage(isSearch)
  },[location])



//////// Handle search with case-insensitive, partial match //////
        const handleSearch = (value) => {
          const lowerCaseValue = value.toLowerCase();
          setQuery(lowerCaseValue);
          
          if (value.trim() === "") {
            setFilteredResults([]);
            return;
          }
      

          const filtered = allProducts.filter(product =>
            product.toLowerCase().includes(lowerCaseValue)
          );
      
          setFilteredResults(filtered);
        };
///////////////////////////////////////////////////////////////////


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % searchSuggestions.length);
    }, 2000); // Change text every 2s

    return () => clearInterval(interval);
  }, []);

  const redirectToSearchPage = () => {
    navigate("/search")
  }

  const handleOnChange = (e) => {
    const value = e.target.value.toLowerCase();////////////////////////////////////


    const url = `/search?q=${value}`
    
    navigate(url)
  }


  return (
    <div className='w-full min-w-[300px] lg:min-w-[570px] xl:min-w-[700px] h-11 lg:h-14 rounded-lg border overflow-hidden flex items-center text-neutral-800 bg-slate-50 group focus-within:border-primary-200'>
      <div>
        {
          (isMobile && isSearchPaga) ? (
            <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
              <FaArrowLeft size={20}/>
            </Link>
          ):(
            <button   onClick={redirectToSearchPage} className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200 '>
              <IoSearch size={25}/>
           </button>
          )
        }
      </div>

      <div className='w-full h-full'>
        {
          !isSearchPaga ? (
              // not in search page
              <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                
                {/* <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Search for "milk"',
                    1000, // wait 1s before replacing "milk" with "bread"
                    'Search for "bread"',
                    1000,
                    'Search for "sugar"',
                    1000,
                    'Search for "panner"',
                    1000,
                    'Search for "choclate"',
                    1000,
                    'Search for "curd"',
                    1000,
                    'Search for "rice"',
                    1000,
                    'Search for "egg"',
                    1000,
                    'Search for "chips"',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                /> */}

                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-gray-500"
                  >
                    {searchSuggestions[index]}
                  </motion.span>
                </AnimatePresence> 

              </div>

          ):(
            // when i was search page
            <div className='w-full h-full'>
              <input
                type='text'
                placeholder='Search for atta dal and more.'
                autoFocus
                defaultValue={searchText}
                className='bg-transparent w-full h-full outline-none'
                onChange={handleOnChange}
              />


 {/* Search Suggestions */}
              {filteredResults.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg border rounded-md mt-1 max-h-48 overflow-auto">
                  {filteredResults.map((item, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/search?q=${item}`)} >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
{/* Search Suggestions */}


            </div>
          )
        }
      </div>

    </div>
  )
}

export default Search

 