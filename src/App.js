import React, {Component} from 'react';
import './App.css';
import LifeCycle from './components/LifeCycleComponent';

class App extends Component {
  constructor(){
    super();
    console.log("app Constructor intitiated");

    this.state ={
      toggle:true,
      addText: "Hello",
    };
  }
  componentDidMount(){
    console.log("Component did mount intialized");
  }

  render(){
    console.log("app compoenent rendering intitiated");
    return(
        <div>
          {this.state.toggle ?<LifeCycle text = {this.state.addText}/> : null}
          <button onClick={()=> this.setState({toggle:!this.state.toggle})}>Toggle Button</button>
          <button onClick={() => 
            this.setState({addText:this.state.addText + 'JavaScript'})
            }
          >Add Text</button>
        </div>
    );
  }

}

export default App;