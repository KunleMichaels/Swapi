import React from "react";
import { Pagination } from "react-bootstrap";

class ButtonContainer extends React.Component{
  render(){
    const { pagination, action } = this.props;
    const totalItems = Math.ceil(pagination.count / 10)
    const items = []
    for(let i=1; i <= totalItems; i++){
      items.push(<Pagination.Item key={i} onClick={() => action(i)}>{i}</Pagination.Item>)
    }
    return(
      <div>
        <Pagination>
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </div>
    );
  }
}

export default ButtonContainer
