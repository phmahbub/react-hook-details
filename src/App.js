import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UseEffect from "./components/UseEffect/UseEffect";

function App() {
const [user, setUser] = useState({
  name:'Mahbub',
  email:'phmahbub@gamil.com'
})

const handlInput = (event)=>{
  setUser((current)=>{
    return {...current, [event.target.name]: event.target.value}
  })
}



  return (
    <div>
      <div className="App m-9 border-4 border-slate-100 bg-slate-50">
        <div className="flex justify-center mt-5">
          <button className="bg-cyan-200 px-7 py-2 mb-4 rounded border-2 hover:bg-slate-300 border-slate-300">
            Search
          </button>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="bg-cyan-100 rounded h-8 p-5 mx-3 border-2 border-red-300 "
            onChange={(e)=>handlInput(e)}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
            className="bg-cyan-100 rounded h-8 p-5 border-2 border-red-300"
            onChange={(e)=>handlInput(e)}
          />
        </div>
      </div>

      <div className="bg-fuchsia-100 my-9 p-9 text-3xl text-slate-400 rounded flex flex-col align-center">
        <h1>Name: <span className="text-red-400">{user.name}</span> </h1>
        <h1 className="mt-5">Email: <span className="text-red-500">{user.email}</span> </h1>
      </div>
      <UseEffect></UseEffect>
    </div>
  );
}

export default App;
