import React from "react";
import PropTypes from "prop-types";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SubMenu from "./SubMenu";

export default class EnhancedMenu extends React.Component {
  renderMenuItems = () => {
    const { menuItems } = this.props;
    return menuItems.map(menuItem => {
      if (menuItem.hasOwnProperty("subMenuItems")) {
        return (
          <SubMenu
            key={menuItem.key}
            caption={menuItem.caption}
            menuItems={menuItem.subMenuItems}
          />
        );
      }

      return (
        <MenuItem key={menuItem.key} onClick={menuItem.onClick}>
          {menuItem.caption}
        </MenuItem>
      );
    });
  };

  render() {
    const { anchorElement, open, onClose, ...others } = this.props;
    return (
      <MuiMenu
        {...others}
        anchorEl={anchorElement}
        open={open}
        onClose={onClose}
      >
        {this.renderMenuItems()}
      </MuiMenu>
    );
  }
}

EnhancedMenu.propTypes = {
  anchorElement: PropTypes.any,
  menuItems: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
