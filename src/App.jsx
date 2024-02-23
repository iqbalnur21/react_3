import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [menus, setMenus] = useState([]);

  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenus(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);

  console.log("data", menus);

  return (
    <div>
      {menus.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img src={item.imageUrl} style={{width:'200px', height:'100%'}} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
