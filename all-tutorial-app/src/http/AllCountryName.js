import React, { Component } from 'react';
import axios from 'axios'

export default class AllCountryName extends Component {

    constructor(){
        super()
        this.state={
            myData:[]
        }
    }

componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
        // console.log(res.data)
        this.setState({myData:res.data});
    })
    .catch(err=>{
        console.log(err)
    })
}
  render() {
 
    const myList = this.state.myData;
    const myCountryName = myList.map((myList)=>{
        return<li>
        {myList.name}<br></br>
        </li>
    })

    return (
      <div>
        <ul>
            {myCountryName}
        </ul>
      </div>
    );
  }
}
