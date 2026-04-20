import Header from './assets/Header'
import Entry from './assets/Entry'
import { data } from './data.js'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <section className='entry-section'>
      {data.map((char, index)=>(
        <Entry key={index} data={char} />
      ))}
    </section>
    </>
  )
}

export default App
