import { connect } from "react-redux";
import React from "react";
import Link from "./Link";

// ownProps として受け取るのではなく {filter} で必要なもののみ受け取っても良い
// children は無くても動く
function mapStateToProps({ visibilityFilter }, ownProps) {
  return {
    active: visibilityFilter === ownProps.filter,
    children: ownProps.children
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
