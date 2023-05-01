import Toy from "./Toy"

const Puppy = (props) => {
  return (
    <>
      <h3>
        {props.puppy.name} is a {props.puppy.age} year old {props.puppy.breed}.
      </h3>
      {props.puppy.toys.map((toy, idx) => 
        <Toy key={idx} toy={toy} name={props.puppy.name}/>
      )}
    </>
  )
}

export default Puppy