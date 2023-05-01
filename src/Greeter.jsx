function Greeter(props) {
  const things = ["Water", "Cattle", "Gold"]
  
  
  return (
    <>
      <h1>Hello, { props.friend ? props.friend : "friend" }</h1>
      <p>Today is {new Date().getDay() === 1 ? "Monday" : "It's not Monday"}</p>
      <ul>
        {things.map(thing => <li key={thing}>{thing}</li>)}
      </ul>
    </>
    
  )
}

export default Greeter