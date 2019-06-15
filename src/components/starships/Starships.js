import React from "react";
//import components
import App from "../App";
import { connect } from 'react-redux';
import {  Table } from "react-bootstrap";
import { getStarships } from './starshipsThunk';
import { Redirect } from 'react-router-dom';


//stylesheet
import "../../styles/sass/body.scss";
import "../../styles/sass/search.scss";


class Starships extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         starships: false,
         search: '',
         redirect: false,
         setSearch: false

      }
    }
    setRedirect = () => {
     this.setState({
       redirect: true
     })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
    }
    componentDidMount = () => {
      const { getStarships } = this.props;
      getStarships();
    }
    handleChange=(e)=>{
      this.setState({ [e.target.name]: e.target.value })
    };

    onSearch = (e) => { this.setState({ setSearch: true}) }


    renderTableData() {
      let { starships } = this.props;
      let results = starships.results;
      let { setSearch, search } = this.state;
       try {
         const searchRE = new RegExp(search, 'i');
         if(setSearch) {
           results = starships.results.filter(starship => {
             return starship.name.match(searchRE)})
           }
         }
         catch(err){ console.log(err) }
       if(results.length > 0)
        return results.map((starship, data) => {
         const { name, model, cargo_capacity } = starship //destructuring
         return (
            <tr key={data}>
               <td>{starship.name}</td>
               <td>{starship.model}</td>
               <td>{starship.cargo_capacity}</td>
            </tr>
         )
      })
   }
  render(){
    const  { starships } = this.props;

    return(
      <div className="">
          <div className="body-head">
           <App />
           <div className="search-bar">
             <input type="text"  name='search' value={this.state.search} onChange={this.handleChange}  placeholder='search by name & gender' onKeyDown={(e) => this.onSearch(e)} />
             <div className="search"></div>
           </div>
          </div>
          <div className="container">
          {starships.count ?
         <div className="body-container">
           <Table  responsive striped bordered hover>
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Model</th>
                 <th>Cargo Capacity</th>
               </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
           </tbody>
           </Table>
         </div>
         :
         <p>loading</p>
         }
          </div>
     </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    loading: state.reducer.loading,
    starships: state.reducer.starships,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStarships: () => dispatch(getStarships()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Starships);
