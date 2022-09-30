import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar-container">
      <a href="/">
        <img src="/images/logoOk2.png" height="100px" alt="ByYourTime" />
      </a>
      <a href="/events">Events</a>

      <a href="/blog">Blog</a>
      <a href="/newsletter">Newsletter</a>
      <ul>
        <li>
          <a href="/login" className="login">
            Login
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="/register" className="register">
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}
