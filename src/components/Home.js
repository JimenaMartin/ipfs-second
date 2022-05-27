
import logo from "../GRO.svg";
import { Link } from "react-router-dom";

export function Home() {
    return (
      <header className="App-header">
        <img src={logo} width="20%" className="App-logo" alt="logo" />
        <p>IPFS deploy test.</p>
        <Link to="/extra">To extra</Link>
      </header>
    );
}