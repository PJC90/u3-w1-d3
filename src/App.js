import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './Components/CustomNavbar'
import MyFooter from './Components/MyFooter'
import AdditionalContentExample from './Components/AdditionalContentExample'

// import SingleBook from './Components/SingleBook'
import BookList from './Components/BookList'
import fantasy from './data/fantasy.json'
import h from './data/history.json'

function App() {
  return (
    <div>
      <CustomNavbar addText="Mondadori" />
      <AdditionalContentExample />
      {/* <SingleBook
        img="https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"
        title="The Last Wish: Introducing the Witcher"
      /> */}
      <BookList books={h} />
      <MyFooter />
    </div>
  )
}

export default App
