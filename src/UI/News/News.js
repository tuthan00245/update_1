import React,{useEffect, useState} from 'react'
import axios from 'axios'
import NewsAPI from '../../API/NewsAPI'

function News() {
  const [posts,setPosts] = useState([]);
  const [DataNotice,setDataNotice] = useState([]);
    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //       .then(res =>{
        //         console.log(res)
        //       })
        //       .catch(err => {
        //         console.log(err);
        //       })
         (async()=>{
          const result2 = await NewsAPI.getNewsAPI(4); 
          setDataNotice(result2.data);
        })();
      })
  return (
    // <div>
    //   <div>{DataNotice.title}</div>
    //   <div>
    //     {DataNotice.shortDescription}
    //   </div>
    // </div>
    <div className="slider"> 
      <div className="item">
      <i class="fa-solid fa-image"></i>
      </div>
      <div className="item">

      </div>
      <div className="item">
      
      </div>
    </div>
  )
}

export default News