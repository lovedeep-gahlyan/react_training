import { ADD_POST_DATA } from "./constant";

export const postData = (data = [], action) => {
  console.log("action data is", action.data);
  switch (action.type) {
    case ADD_POST_DATA:
      return [...action.data.data];
    default:
      return data;
  }
};
