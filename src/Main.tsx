import Form from "components/Form";
import Map from "components/Map";
import './Main.css';

function Main() {
    return (
        //フォームと地図がある
        <div className="main-area">
            <Form />
            <Map />
        </div>
    );
}

export default Main;
