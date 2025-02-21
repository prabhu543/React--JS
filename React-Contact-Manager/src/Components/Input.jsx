
const Input = ({ name , detail}) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input id={name} type={detail} placeholder={`Enter your ${name}......`}/>
    </>
  )
}

export default Input
