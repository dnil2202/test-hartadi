import Router from "./router";
import Layouts from "./layouts";
import { UserWrapper, useUserContext } from "./components/provider";



function App() {


  return (
  <UserWrapper>
        <Router/>
  </UserWrapper>

  )
}

export default App;
