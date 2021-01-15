import { NavLink} from "react-router-dom";
export default function Header({ loggedIn, loginMsg }) {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page1">
          Page 1
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page2">
          Page2
        </NavLink>
      </li>
      {loggedIn && (
        <>
          <li>
            <NavLink activeClassName="active" to="/page3">
              Page 3
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/page4">
              Page 4
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink exact activeClassName="active" to="/login">
          {loginMsg}
        </NavLink>
      </li>
    </ul>
  );
}