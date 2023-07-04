import React, { Component } from "react";
import { connect } from "react-redux";
import { setLanguage } from "../redux/reviewsSlice";
import Watch from "./Watch";

interface HeaderProps {
  setLanguage: (lang: string) => void;
}

interface HeaderState {
  lang: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      lang: "ru",
    };
  }

  handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ lang: e.target.value });
    this.props.setLanguage(e.target.value);
  };

  render() {
    return (
      <header>
        <img src="./img/logo.png" alt="logo" />
        <div>
          <select value={this.state.lang} onChange={this.handleLangChange}>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <Watch />
        </div>
      </header>
    );
  }
}

export default connect(null, { setLanguage })(Header);
