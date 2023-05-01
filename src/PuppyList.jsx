import Puppy from "./Puppy"

const PuppyList = (props) => {
  console.log(props);
  return (
    <>
      <h2>This is a puppy list component!</h2>
      {props.puppies.map(puppy => 
        <Puppy key={puppy.name} puppy={puppy}/>
      )}
    </>
  )
}

export default PuppyList