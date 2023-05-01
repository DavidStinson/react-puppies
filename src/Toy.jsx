const Toy = (props) => {
  console.log(props);
  return (
    <>
      <h4>{props.name} loves playing with a {props.toy}!</h4>
    </>
  )
}

export default Toy