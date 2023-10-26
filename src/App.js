import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './Components/CustomNavbar'
import MyFooter from './Components/MyFooter'
import AdditionalContentExample from './Components/AdditionalContentExample'

import SingleBook from './Components/SingleBook'
import BookList from './Components/BookList'
import f from './data/fantasy.json'
import h from './data/history.json'
import ho from './data/horror.json'
import r from './data/romance.json'
import s from './data/scifi.json'

function App() {
  return (
    <div>
      <CustomNavbar addText="Mondadori" />
      <AdditionalContentExample />
      {/* <SingleBook book={h[1]} /> */}
      <BookList manyBooks={r} />
      <MyFooter />
    </div>
  )
}

export default App
