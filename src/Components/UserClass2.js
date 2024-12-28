import React from "react"

class UserClass extends React.Component {
    constructor(props) {                                 //this is how props will be received in class
        super(props)


        this.state = {                                   //this is how state varibale declare
            userInfo:{
            name: "Shahzad",
            location: "delhi"
        }
    }

       console.log("child const")

}
    async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aamina-sayeed")
    const json = await data.json()

    this.setState({
        userInfo: json
    })
    console.log("child mount")
}

componentDidUpdate(){
    console.log("component updated")
}

componentWillUnmount(){
    console.log("comp will unmount")
}
render() {
    // const { name } = this.props
    const {name, location} = this.state.userInfo

    console.log("child render")
    return (
        <div>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Delh@gmial.com</h4>

        </div>
    )
}
}

export default UserClass