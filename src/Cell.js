import React, { Component, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { timingSafeEqual } from "crypto";
import { playSounds } from "./util/SoundPlayer.js";

class Cell extends Component {
  render() {
    const cellClass = classNames({
      Cell: true,
      populated: this.props.populated,
    });

    const cellStyle = {
      width: this.props.width,
      height: this.props.height || this.props.width,
    };

    if (this.props.populated) {
      playSounds(this.props.num * 2, 100, this.props.soundType);
    }

    return (
      <>
        <div
          className={cellClass}
          onClick={this.props.onClick}
          style={cellStyle}
          id={this.props.num}
        />
      </>
    );
  }
}

Cell.propTypes = {
  populated: PropTypes.bool,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
};

Cell.defaultProps = {
  populated: false,
};

export default Cell;
