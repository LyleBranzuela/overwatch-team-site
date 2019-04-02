// Action Creator
export const selectMember = member => {
  // Return an action
  return {
    type: "MEMBER_SELECTED",
    payload: member
  };
};
