import logo from "../logo.svg";
import { Link } from "react-router-dom";

export function Extra() {
  return (
    <header className="App-header">
      <img src={logo} width="20%" className="App-logo" alt="logo" />
      <p>This is an extra page to test navigation</p>
      <Link to="/">To home</Link>
    </header>
  );
}
