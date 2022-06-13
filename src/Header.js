import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
 
const [{basket},dispatch]=useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="data:image/png;base64,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"
          alt="loading"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to='/login'>
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
