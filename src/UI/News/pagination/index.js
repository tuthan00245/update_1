import React, { Component } from "react";
// import axios from 'axios';
import PaginationComponent from "./paginationComponent";
import NewsAPI from '../../../API/NewsListPageAPI'

class Pagination extends Component {
    state = {
        data: [],
        totalRecords:0,
        limit: 10
    }
    componentDidMount(){
        this.loadData(1);
    }
    loadData = async(page) =>{
        fetch(
          NewsAPI.getNewsPageAPI(1)
          .then(res => {
              const data = res.data;
              this.setState({
                  data: data.data,
                  totalRecords : data.totalItem ? data.totalItem : 0,
                  limit : data.size ? data.size : 6
              })
          })
        )
    }
    getPaginatedData = page =>{
        this.loadData(page);
    }
    render(){
        const { data, totalRecords, limit } = this.state;
        return(
            <div className="">
                {/* <table className="table  flex  w-3/5 pt-10 pb-10 mb-10 shadow-lg" > */}
                <table className="table" >
                    <tbody>
                        {
                            data && data.length > 0 ?
                            data.map((item,index)=>(
                                <a href="" onClick={console.log('hello')}>
                                    <tr className="flex shadow-lg mt-10 mb-10 bg-lime-100">
                                        {/* <td scope="col">{item.id}</td> */}
                                        <td scope="col">
                                            <img  src={item.thumbnail}></img>
                                        </td>
                                        <td scope="col">
                                            {item.first_name} - {item.last_name}
                                        </td>
                                        <td scope="col">
                                            {item.content}
                                        </td>
                                    </tr>
                                </a>
                            )) :
                            <h4>No Data Found!!</h4>
                        }
                    </tbody>
                </table>
                {
                totalRecords > 10 &&
                <PaginationComponent 
                    getAllData={this.getPaginatedData} 
                    totalRecords={totalRecords}
                    itemsCountPerPage = {limit} />
                }
            </div>
        );
    }
}

export default Pagination;