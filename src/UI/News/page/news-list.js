import React, { Component,useState,useEffect} from 'react'
import NewsListAPI from '../../../API/NewsListPageAPI'
import Loader from "../../loader/Loader"


export class NewsList extends Component {
  state = {
    data: [],
    totalRecords:0,
    limit: 10
}

componentDidMount(){
  this.loadData(1,10);
}
getPaginatedData = (page,size) =>{
  this.loadData(page,size);
}
loadData = async(page,size) =>{
  await fetch(
    NewsListAPI.getNewsPageAPI(page,size)
    .then(res => {
        const data = res.data;
        this.setState({
            data: data.data,
            totalRecords : data.totalItem ? data.totalItem : 0,
            limit : data.size ? data.size : 10
        })
    })
  )
}
  render() {

    const {data} = this.state;

    return (
      <div className="m-0 p-0 border-box">
        {
          data && data.length > 0 ?
          data.map((item,index)=>(
            <a href={"news/"+item.id}>
              <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
                <div className="bg-blue-50 ">
                  <section className="container-1">
                    <div className="p-1">
                        <h4 className="text-xl">{item.title}</h4>
                        <p className="text-xs">{item.shortDescription}</p>
                        <p className="text-xs text-right pt-[1rem]">{item.createdDate}</p>
                    </div>
                  </section>
                </div>
              </div>
            </a>
          )) :
          <Loader/>
        }
      
          
        </div>
    )
  }
}

export default NewsList