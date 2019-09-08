import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import EnhancedMenu from "./EnhancedMenu";

const menuItems = [
  {
    key: "1",
    caption: "Глава 1",
    subMenuItems: [
      {
        key: "1.1",
        caption: "Снега в полях...",
        onClick: () => { }
      },
      {
        key: "1.2",
        caption: "Дороги",
        onClick: () => { }
      },
      {
        key: "6",
        caption: "Button 6",
        onClick: () => { }
      }
    ]
  }
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorElement: null
    };
  }

  handleButtonClick = event => {
    this.setState({
      anchorElement: event.currentTarget
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorElement: null
    });
  };

  render() {
    const { anchorElement } = this.state;
    return (
      <React.Fragment>
        <IconButton onClick={this.handleButtonClick}>
          <AddIcon />
        </IconButton>
        <EnhancedMenu
          open={Boolean(anchorElement)}
          menuItems={menuItems}
          anchorElement={anchorElement}
          onClose={this.handleMenuClose}
        />
      </React.Fragment>
    );
  }
}
