import React from "react";
import Link from "./Link";
import store from "../store";

export default class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  // Since the subscription happens in `componentDidMount`,
  // it's important to unsubscribe in `componentWillUnmount`.
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
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
