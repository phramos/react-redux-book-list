import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map(book => {
            return (<li
                key={book.title}
                onClick={() => this.props.selectedBook(book)}
                className="list-group-item">{book.title}</li>);
        });
    }

    render(){

        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

//bind an action to a function available in the container
function  mapDispatchToProps(dispatch) {
    //pass the result to all reducers whenever a book is selected
    return bindActionCreators({selectedBook: selectBook}, dispatch);
}

//Promote book from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);