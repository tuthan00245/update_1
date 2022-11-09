import React,{ useEffect, useState} from 'react'
import NewsAPI from '../../../API/NewsAPI'
import Loader from '../../loader/Loader'
// import Pagination from "react-js-pagination";
import { useParams } from 'react-router-dom';

function News() {

  const {id} =useParams();
  const [DataNotice,setDataNotice] = useState();
  const getData = async(id)=>{ await fetch(NewsAPI.getNewsAPI(id)
      .then(res => {
        const data = res.data;
        setDataNotice(data);
    })
  );
    console.log(DataNotice);
  };
  useEffect(() => { 
    console.log(id);
    getData(id);

  })

  return (
    // <div className="border-t-8 border-teal-500 bg-teal-400 p-8 inline-block">
    <div>
      {
      DataNotice ?
            <div className="w-3/4 m-[2rem_auto]">
              <div className="m-auto w-full">
                <h1 className="text-center m-0 text-2xl">
                  {DataNotice.title}
                </h1>
              </div>
              <div className="border-t border-black ml-[2px]"></div>
              <p>{DataNotice.content}</p>              
            </div>
       :
      <Loader/>
      }    
    </div>
  )
}

export default News