import React from "react";
class Header extends React.Component {
  state = { tittle: "" };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name} Hello React</h1>
        <h2>{this.state.tittle}</h2>
        <input
          type={"text"}
          onClick={(text) => {
            alert(text);
            this.setState({ tittle: text });
          }}
        />
      </div>
    );
  }
}

export default Header;
