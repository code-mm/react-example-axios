import './App.css';
import {Button} from 'antd'
import axios from 'axios'


function App() {
    function click() {
        console.log("click")
        axios.post("/api/login", {
                username: "admin",
                password: "admin"
            }
        ).then(function (response) {

            if(response.status===200)
            {
                console.log("登录成功")
            }

            console.log(response.status);
            console.log(response.data);
        })
    }

    return (
        <div className="App">
            <Button type="primary"
                    onClick={click()}
            >Primary Button</Button>
        </div>
    );
}

export default App;
