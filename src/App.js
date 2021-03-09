import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Carousel from './Components/Header/Carousel';
import Content_1 from './Components/Content/Content_1';
import Content_2 from './Components/Content/Content_2';
import Content_3 from './Components/Content/Content_3';
import Content_4 from './Components/Member/Content_4';
import Foodter from './Components/Footer/Foodter';
import FromContact from './Components/Contact/FromContact';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Carousel></Carousel>
           <Content_1></Content_1>
           <Content_2></Content_2>
           <Content_3></Content_3>
           <Content_4></Content_4>
           <FromContact></FromContact>
           <Foodter></Foodter>
        </div>
    );
}

export default App;
