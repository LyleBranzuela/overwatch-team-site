import { combineReducers } from "redux";

const membersReducer = () => {
  return [
    {
      userName: "AsianLANLord",
      name: "Khoa Anh Pham",
      role: "DPS",
      roleName: "crosshairs icon",
      main: "Genji/Soldier 76",
      facebook: "cody.vatc2"
    },
    {
      userName: "ToastRoaster",
      name: "Brendan O'Neill",
      role: "DPS",
      roleName: "crosshairs icon",
      main: "Sombra/Junkrat",
      facebook: "https://www.facebook.com/brendan.oneill.5496"
    },
    {
      userName: "Ginn",
      name: "Lyle Branzuela",
      role: "Main Tank",
      roleName: "shield alternate icon",
      main: "Winston/Reinhardt",
      facebook: "https://www.facebook.com/LyleBranzuela"
    },
    {
      userName: "TrashNTree",
      name: "Xin Hai Hu",
      role: "Off-Tank",
      roleName: "shield alternate icon",
      main: "D.VA/Reinhardt"
    },
    {
      userName: "Noctis",
      name: "Aaron Oscar",
      role: "Main Healer",
      roleName: "plus square icon",
      main: "Ana/Lucio",
      facebook: "https://www.facebook.com/joshua.oscar.102"
    },
    {
      userName: "Yimpy",
      name: "Nicholas Chittenden",
      role: "Off-Healer",
      roleName: "plus square icon",
      main: "Zenyatta/Lucio",
      facebook: "https://www.facebook.com/nicholas.chittenden.35"
    }
  ];
};

const selectedMemberReducer = (selectedMember = null, action) => {
  if (action.type === "MEMBER_SELECTED") {
    return action.payload;
  }

  return selectedMember;
};

export default combineReducers({
  members: membersReducer,
  selectedMember: selectedMemberReducer
});
