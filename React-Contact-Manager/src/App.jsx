
import Users from "./Components/Users" ;
import AddContact from "./Components/AddContact" ;
import UserDataContextProvider from "./store/UserData";


const App = () => {
  return (
    <UserDataContextProvider>
      <div className="container">
      <h1>Contact Manager</h1>
      <AddContact/>
      <hr />
      <div className="contactDiv">
        <h2>Contact List</h2>
        <Users/>
      </div>
    </div>
    </UserDataContextProvider>
  )
}

export default App;