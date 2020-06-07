import { UPDATE_SEARCH_PARAMS } from "../actions/index";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

function getDates(theDate) {
  var month = "" + (theDate.getMonth() + 1),
    day = "" + theDate.getDate(),
    year = theDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const fullDate = [year, month, day].join("-");

  return fullDate;
}

export const initialSearchState = {
  starttime: getDates(today),
  endtime: getDates(tomorrow),
  minmagnitude: 3.5,
  maxmagnitude: 10,
  radius: 500,
  latitude: 0,
  longitude: 0,
};

export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_PARAMS:
      return {
        ...state,
        [action.params.name]: action.params.value,
      };
    default:
      return state;
  }
};