import React from "react"

class UserClass extends React.Component{
    constructor(props){                                 //this is how props will be received in class
        super(props)
       
       
        this.state={                                   //this is how state varibale declare
         count:0,
         count2:2
        }
   
   console.log("child const")
   
    }
   componentDidMount(){
    console.log("child mount")
   }
    render(){
        const {name} = this.props
        const {count,count2} = this.state
        console.log("child render")
        return (
            <div>
            <h2>{name}</h2>
            <h3>Sirauli</h3>
            <h4>Delh@gmial.com</h4>
            <h5>{count}</h5>
            <h5>{count2}</h5>
            <button onClick={()=>{
                this.setState({                          // this is how state variable can be change
                    count:this.state.count + 1,
                    count2:this.state.count2 + 2
                })
            }}>
                Count Change
            </button>
        </div>
        )
    }
}

export default UserClass