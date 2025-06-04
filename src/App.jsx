import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { cardData } from "./components/data";

import "./App.css";
import "./media-querices.css";
import "./media-querices1.css";
import "./imageScroll.css";
import Imagescroll from "./components/imageScroll";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <header>
        <div class="navbar">
          <div className="nev-logo border">
            <div className="logo">
              <img
                className="logo-img"
                src="public/Images/amazon_logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="nav-addres border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <IoLocationSharp />
              <p className="add-sec">india</p>
            </div>
          </div>
          <div className="nav-search border">
            <select class="search-select">
              <option>All</option>
            </select>
            <input
              className="search-input"
              placeholder="Search Amazon.in"
            ></input>
            <div className="search-icon">
              <IoSearch />
            </div>
          </div>
          <div className="nav-flag border">
            <div className="flag">
              <img className="flag-img" src="public/Images/flag.png" alt="" />
            </div>
            <div className="city">IN</div>
          </div>
          <div className="nav-sign border">
            <p className="first">Hello, sign in</p>
            <p className="second">Account & Lists</p>
          </div>
          <div className="nav-sign border">
            <p className="first">Retums</p>
            <p className="second">& Orders</p>
          </div>
          <div className="nav-cart border">
            <div className="cart-icon">
              <BsCart3 />
            </div>
            <p className="cart">Cart</p>
          </div>
        </div>

        <div className="panel">
          <div>
            <FaBars />
          </div>
          <p
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            All
          </p>
          <div className="p-option">
            <p>Fresh</p>
            <p>MX Player</p>
            <p>Sell</p>
            <p>Bestsellers</p>
            <p className="hidden2">Today's Deals</p>
            <p>Mobiles</p>
            <p className="hidden2">Fashion</p>
            <p className="hidden2">Prime</p>
            <p className="hidden2">Beauty</p>
            <p className="hidden1">Customer Service</p>
            <p className="hidden1">New Releases</p>
            <p className="hidden1">Electronics</p>
            <p className="hidden">Home & Kitchen</p>
            <p className="hidden">Amazon Pay</p>
            <p className="hidden">Car & Motorbike</p>
          </div>
        </div>
      </header>

      <div className="top-div">
        <Imagescroll />

        <div className="shopping">
          {cardData.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>

      <div className="line1"></div>

      <div className="sign">
        <div className="detail">
          <h2>See personalized recommendations</h2>
        </div>
        <div className="button">
          <p>Sign in</p>
        </div>
        <div className="link">
          New customer?<a>Start here.</a>
        </div>
      </div>

      <div className="line"></div>

      <footer>
        <div className="back">
          <p>Back to top</p>
        </div>

        <div className="f-panel1">
          <ul>
            <p>Get to Know Us </p>
            <a>About Amazon</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>

          <ul>
            <p>Connect with Us</p>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </ul>

          <ul>
            <p>Make Money with Us</p>
            <a>Sell on Amazon</a>
            <a>Sell under Amazon Accelerator</a>
            <a>Protect and Build Your Brand</a>
            <a>Amazon Global Selling</a>
            <a>Supply to Amazon</a>
            <a>Become an Affiliate</a>
            <a>Fulfilment by Amazon</a>
            <a>Advertise Your Products</a>
            <a>Amazon Pay on Merchants</a>
          </ul>

          <ul>
            <p>Let Us Help You</p>
            <a>Your Account</a>
            <a>Returns Centre</a>
            <a>Recalls and Product Safety Alerts</a>
            <a>100% Purchase Protection</a>
            <a>Amazon App Download</a>
            <a>Help</a>
          </ul>
        </div>

        <div className="line"></div>

        <div className="f-panel2">
          <div>
            <img className="l-img" src="public/Images/amazon_logo.png" alt="" />
          </div>
          <div className="box-0">
            <TbWorld />
            <p style={{ marginLeft: 5 }}>English</p>
          </div>
          <div className="box-0" style={{ marginLeft: 7 }}>
            <img src="public/Images/flag.png" alt="" />
            <p style={{ marginLeft: 5 }}>India</p>
          </div>
        </div>

        <div className="f-panel3">
          <div className="pages">
            <a>Conditions of Use & Sale</a>
            <a>Privacy Notice </a>
            <a>Interest-Based Ads</a>
          </div>

          <div className="copyright">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
