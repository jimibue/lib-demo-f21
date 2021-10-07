import logo from "./logo.svg";
import "./App.css";
import AxiosLibDemo from "./demos/AxiosLibDemo";
import CalenderLibDemo from "./demos/CalenderLibDemo";
import FormLibDemo from "./demos/FormLibDemo";
// import MapLibDemo from "./demos/MapLibDemo";
import TableLibDemo from "./demos/TableLibDemo";
import AxiosPutDemo from "./demos/AxiosPutDemo";

function App() {
  return (
    <div className="App" style={{ maxWidth: "1000px", margin: "auto" }}>
      <FormLibDemo />
      <hr />
      <AxiosPutDemo />
      <hr />
      <AxiosLibDemo />
      <hr />
      <CalenderLibDemo />

      <hr />
      {/* <MapLibDemo /> */}
      <hr />
      <TableLibDemo />
    </div>
  );
}

export default App;
