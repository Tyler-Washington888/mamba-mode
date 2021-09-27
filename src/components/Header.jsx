import { Link } from "react-router-dom";


function Header() {
  return (
    <div >
      <Link className="header-link" to="/">
        <div className="header-div">
          <img className="header-image" src="https://img.icons8.com/color/80/000000/year-of-snake.png" />
          <div className="header-text-div">
            <h1 className="title-text">Mamba Mode</h1>
            <h2 className="subtitle-text">Grind 24/8</h2>
          </div>
        </div></Link>
    </div>
  )
}

export default Header;