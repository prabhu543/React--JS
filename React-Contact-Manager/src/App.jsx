import Users from "./Components/Users" ;
import AddContact from "./Components/AddContact" ;

const App = () => {
  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <AddContact/>
      <hr />
      <div className="contactDiv">
        <h2>Contact List</h2>
        <Users/>
      </div>
    </div>
  )
}

export default App;