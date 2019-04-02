import React from "react";
import { connect } from "react-redux";

const MemberDetail = ({ member }) => {
  if (!member) {
    return (
      <div className="ui segment">
        <p />
        <div className="ui active dimmer">
          <div className="ui fluid loader" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Name: {member.name}
        <br />
        Role: {member.role}
        <br />
        Main Heroes: {member.main}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { member: state.selectedMember };
};

export default connect(mapStateToProps)(MemberDetail);
