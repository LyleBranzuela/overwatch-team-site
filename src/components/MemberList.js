import "./MemberList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMember } from "../actions";

class MemberList extends Component {
  renderList() {
    return this.props.members.map(member => {
      return (
        <div className="item five wide column" key={member.name}>
          <div className="ui raised red fluid card">
            <div className="ui slide masked reveal fluid image">
              <img
                src={require("../images/" + member.name + ".jpg")}
                className="visible content"
                alt={member.name}
              />
              <span className="hidden content" />
            </div>
            <div className="content">
              <span className="header">{member.userName}</span>
              <span className="meta">{member.name}</span>
            </div>
            <div className="extra content middle aligned">
              <span>
                <i className={member.roleName} />
                {member.role}
                <button
                  className="ui circular facebook icon button right floated"
                  href='https://www.facebook.com/'
                >
                  <i className="facebook icon" />
                </button>
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui selection grid image-list stackable cards">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { members: state.members };
};

export default connect(
  mapStateToProps,
  { selectMember }
)(MemberList);
