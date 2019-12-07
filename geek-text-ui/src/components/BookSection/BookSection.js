import React, { Component } from "react";
import Book from "../Book/Book";
import Pagination from "../Pagination/Pagination";
import './BookSection.css';

class BookSection extends Component {

  constructor(props) {
    super(props);
    
    // an example array of items to be paged
    var exampleItems = [...Array(25).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
    this.state = {
        exampleItems: exampleItems,
        pageOfBooks: []
    };

   
    this.onChangePage = this.onChangePage.bind(this);
}

onChangePage(pageOfBooks) {
    // update state with new page of items
    this.setState({ pageOfBooks: pageOfBooks });
}

render() {
  return (
    
    <div>
        <div class="scroll" >
          {this.props.data.map(book => book.id <= 25 ? <div key= {book.id}>  <Book book={book} key={book.id}/> </div>: undefined )}
        </div>
        <div class = "center1">
        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
        </div>
        
    
      <hr />
                
   </div>
        
        
        
    
  );
}
}
  
  export default BookSection;





    




/*export default function BookSection(props) {
    var books = props.data ? props.data.map(book => <div class="inside"> <Book book={book} key={book.id}/>  </div>) : undefined
    
    return (
            <div>
                <div class="scroll" >
                    {books}
                </div>
                
                
                
            </div>
        );
        
        
        
      
    };
    ///////////////////////////////////////////////////////////
    
class BookSection extends Component {

    constructor(props) {
      super(props);
      var Books = this.props.data ? this.props.data.map(book => <div class="inside"> <Book book={book} key={book.id}/>  </div>) : undefined
      this.state = {
        books: Books,
        pageOfItems: []
      };
  
      this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    
      render() {
          let books = this.props.data ? this.props.data.map(book => <div class="inside"> <Book book={book} key={book.id}/>  </div>) : undefined
          return(
            <div >
                {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>)}
                <Pagination items={books} onChangePage={this.onChangePage} />
                    
                 </div>
          );
      }
  }
  
  export default BookSection;

  /////////////////////////////////////////////////////////////////////////////////////////////////////


  class BookSection extends Component {

  constructor(props) {
    super(props);

    // an example array of items to be paged

    this.state = {
        pageOfBooks: []
    };

   
    this.onChangePage = this.onChangePage.bind(this);
}

onChangePage(pageOfBooks) {
    // update state with new page of items
    this.setState({ pageOfBooks: pageOfBooks });
}

render() {
  return (
    <div>
        <div class="scroll" >
          {this.props.data.map(book => <div key= {book.id}>  <Book book={book} key={book.id}/> </div> )}
        </div>
        <div class = "pagination">
        <Pagination elements={this.props.data.map(book => <div key= {book.id}>  <Book book={book} key={book.id}/> </div> )}
           onChangePage={this.onChangePage} />
           <p> Hello Bitch Im Backasvasdvbsadbsdbdsbdsbsdbsdbds </p>
        </div>
        
    
      <hr />
                
   </div>
        
        
        
    
  );
}
}
  
  export default BookSection;
    */
