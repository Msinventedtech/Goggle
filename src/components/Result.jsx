import React, { useEffect } from 'react';
import {  useLoaderData, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Result = () => {
   const  {results, isLoading, getResults, searchTerm} = useResultContext();
   const location =useLocation ();



   useEffect(() => {
    if(searchTerm){
      if(location.pathname === '/videos') {
        getResults(`?query=${searchTerm} videos`);
      } else {
        getResults(`?query=${searchTerm}&max=20`)
      }
    }
   }, [searchTerm, location.pathname]);
   

   if(isLoading) return <Loading />;
   console.log(location.pathname)

   switch (location.pathname) {
    case '/search' :
      return ( <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>{
        results?.map(({title, url}, index) => (
          <div key={index} className='md:w-2/5 w-full'>
            <a href={url} target="blank" rel="noreferrer">
              <p className='text-sm'>
                {url.length > 30 ? url.substring(0,30) : url}
              </p>
              <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                 {title}
              </p>
            </a>
          </div>
        ))}
      </div> 
      )
      case '/image' :
        return  'IMAGES'
        case '/news' :
          return 'SERCH';
          case '/video' :
            return 'SERCH';
    default:
      return  'ERROR';
   }
    
  
}