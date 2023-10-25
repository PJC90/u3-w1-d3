import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

function BookList(props) {
    return (
        <Container >
          <Row>
          {props.books.map((book)=>{
            return(
             <SingleBook img={book.img}
             title={book.title}/>
              
    )
    })}
    </Row>
    </Container >
      );
}

export default BookList;