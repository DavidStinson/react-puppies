import PuppyList from './PuppyList'
import './App.css'

function App() {
  const puppies = [
    {
      name: 'Ruby', 
      breed: 'Cheese Hound', 
      age: 2, 
      toys: ['squeaky ball', 'stick', 'giant rope toy']
    },{
      name: 'Liam', 
      breed: 'Schnauzer', 
      age: 2, 
      toys: ['green duck', 'purple duck', 'yellow duck']
    },{
      name: 'Taco', 
      breed: 'Golden Retriever', 
      age: 9, 
      toys: ['deer antler', 'stuffed pig', 'squeaky duck']
    }
  ]
  return (
    <div>
      <PuppyList puppies={puppies}/>
    </div>
  )
}

export default App
