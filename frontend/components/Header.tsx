import style from "./Header.module.scss";
import { BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={style.container}>
      <h1>Title</h1>
      <div className={style.nav}>
        <div className={style.searchContainer}>
          <BsSearch />
          <input className={style.searchInput} type="text" />
        </div>
        <div className={style.user}>
          <FontAwesomeIcon icon={faBars} color="rgb(113, 113, 113)" size="sm" />
          <FontAwesomeIcon icon={faUser} color="rgb(113, 113, 113)" size="lg" />
        </div>
      </div>
    </header>
  );
}
