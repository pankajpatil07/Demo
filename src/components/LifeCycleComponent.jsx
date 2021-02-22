import React,{Component} from 'react';
import  './LifeCycleComponent.css';

class LifeCycle extends Component {
  constructor(){
    super();
    console.log("lifecycle Constructor intitiated");

    this.state ={
      toggle:true,
      addText: "",
    };
  }
  componentDidMount(){
    console.log("lifecycle Component did mount intialized");
  }
  componentDidUpdate(){
    console.log("lifecycle Component did update intialized");
  }
  shouldComponentUpdate(prevProps, nextProps){
      console.log(prevProps);
      console.group(nextProps);
      return true;

  }
  componentWillUnmount(){
    console.log("lifecycle Component will unmount intialized");
  }
  render(){
    console.log("lifecycle rendering intitiated");
    return <div className="LifeCycle"> <p> {this.props.text} </p></div>
  }
}

export default LifeCycle;