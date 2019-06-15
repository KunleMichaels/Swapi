import React from "react";
import { Pagination } from "react-bootstrap";

class ButtonContainer extends React.Component{
  render(){
    return(
      <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />
  
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      </div>
    );
  }
}

export default ButtonContainer
