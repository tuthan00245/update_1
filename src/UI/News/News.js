import React,{useEffect, useState} from 'react'
import axios from 'axios'
import NewsAPI from '../../API/NewsPageAPI'
import Pagination from "react-js-pagination";

function News() {
  const [DataNotice,setDataNotice] = useState([]);
  const getData = async(page)=>{
    const result = await NewsAPI.getNewsPageAPI(page); 
    setDataNotice(result.data);
    console.log(DataNotice);

  };
  useEffect(() => { 
    getData(1);
  },[])

  return (
    // <div className="border-t-8 border-teal-500 bg-teal-400 p-8 inline-block">
    <>
      <div className="flex column-center w-3/5 pt-10 pb-10 mb-10 shadow-lg">
        <div className="w-1/3 bg-teal-500 ">
           
        </div>
        <div className="bg-yellow-500 w-2/3">
          <div className="bg-blue-50 h-11">
            {
            DataNotice && DataNotice.length > 0 ?
            DataNotice.map((item,index)=>(
                <a href="">
                  {item.first_name}
                </a>
            )) :
            <h4>No Data Found!!</h4>
            }
          </div>
        </div>
      </div>      
    </>
    
  )
}

export default News