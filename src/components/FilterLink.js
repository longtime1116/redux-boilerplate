import React from "react";
import Link from "./Link";
import PropTypes from "prop-types";

export default class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  // Since the subscription happens in `componentDidMount`,
  // it's important to unsubscribe in `componentWillUnmount`.
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const { filter, children } = this.props;
    const { visibilityFilter } = store.getState();
    return (
      <Link
        active={visibilityFilter === filter}
        onClick={() => {
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: filter
          });
        }}
      >
        {children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object
};
