import styles from "./Todo_App.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CalendarClock from "./CalendarClock";

export default function Todo_App() {
  const location = useLocation();
  const navigate = useNavigate();

  let username = location.state?.username;
  if (!username) {
    try {
      username = sessionStorage.getItem("username") || "";
    } catch {
      username = "";
    }
  }

  const handleLogout = () => {
    try {
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("username");
    } catch {
      // ignore sessionStorage errors
    }
    navigate("/", { replace: true });
  };

  return (
    <div className={styles["login-body"]}>
      <div className={styles["login-container"]}>
        <h2 className={styles["login-title"]}>Hey, {username || "User"}</h2>
        <CalendarClock
          className={styles["login-meta"]}
          dateClassName={"date"}
          timeClassName={"time"}
          showTime={false}
        />
        <div className={styles["today-task"]}>
            <h3 className={styles["today-tasktitle"]}>Today Task</h3> </div>
     {/* <button
          className={styles["login-button"]}
          onClick={handleLogout}
          style={{ marginTop: "1rem" }}
        >
          Logout
        </button>*/}
      </div>
    </div>
  );
}
