import Message from "./Message"
import ListGroup from "./Components/ListGroup"
function App()
{
  let items=[
    'Nairobi',
    'Eldoret',
    'Kisumu',
    'Mombasa'
];
const handleSelectItem=(item:string)=>{
  console.log('I am clicked'+ item)
}
  return <div><ListGroup items={items} heading="Cities" onselectItem={handleSelectItem}/></div>
}

export default App
