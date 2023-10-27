import {Component} from "react"

import {BrowserRouter,Route} from "react-router-dom"

class App extends Component{
render(){
  return(
    <BrowserRouter>
      <Route exact path="/cart" Component={Cart}/>
    </BrowserRouter>
  )
}
}

export default App