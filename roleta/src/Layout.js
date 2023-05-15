import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={classes.container}>
      <h1>Varejo+</h1>
      <Outlet />
    </div>
  );
}
