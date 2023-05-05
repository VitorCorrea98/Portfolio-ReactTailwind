import { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "../../Components/Footer-All-Pages";

class Home extends Component {
    render() {
        return (
                <div>
                    <Header />
            
                    <Main />
            
                    <Footer />
                </div>
        )
    }
}

export default Home