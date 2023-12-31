import { Component } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

// Crea un componente SingleBook utilizzando una funzione. 
// Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, 
// e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap 
// (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).

// function SingleBook(props) {
//   //props è l'oggetto che contiene book
//   return (
//             <Col sm={6} md={3} className="mb-5" key={props.book.asin}>
//           <Card>
//             <Card.Img variant="top" src={props.book.img} />
//             <Card.Body>
//               <Card.Title>{props.book.title}</Card.Title>
//             </Card.Body>
//           </Card>
//           </Col>
//   );
// }

// export default SingleBook;

//Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
class SingleBook extends Component {
    state = {
        selected: false,
    };
    render(){
        return (
       
                  <Col sm={6} md={3} className="mb-5" key={this.props.book.asin}>
                <Card onClick = {()=> {this.setState({selected: !this.state.selected})}} className={this.state.selected ? 'border-danger  border-3' : "" }>
                  <Card.Img variant="top" src={this.props.book.img} />
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                  </Card.Body>
                </Card>
                </Col>
        );
    }
  }
  export default SingleBook;

//   style="border-color:red"