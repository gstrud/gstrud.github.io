import React, { Component } from "react";
import "./list-item-element.css";

export default class ListItemElement extends Component {
  state = {
    show: false,
  };

  onLabelClick = () => {
    this.setState(({ show }) => {
      return {
        show: !show,
      };
    });
  };

  render() {
    const { title, description } = this.props;
    const { show } = this.state;

    let hideInfo = "accordion-button collapsed";
    let hideDescription =
      "accordion-body hide-description list-group-item collapse";
    if (show) {
      hideDescription += " show";
      hideInfo = "accordion-button";
    }
    let label = (
      <button
        className={hideInfo}
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        onClick={this.onLabelClick}
      >
        {title}
      </button>
    );

    if (!description) {
      label = <div className="bt">{title}</div>;
    }
    return (
      <div className="accordion-item">

          <h6 className="accordion-header">{label}</h6>

        <span className={hideDescription}>{description}</span>
      </div>
    );
  }
}
