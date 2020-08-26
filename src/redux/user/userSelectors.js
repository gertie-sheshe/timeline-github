import { createSelector } from 'reselect';
import moment from 'moment';

export const selectUser = (state) => state.user.userData;

export const selectError = (state) => state.user.error;

export const selectHomePage = (state) => state.user.homePage;

export const selectLoading = (state) => state.user.fetching;

export const selectSortedUser = createSelector([selectUser], (user) => {
  const yearMap = {};

  // Create a hash map with a key of year and property of repos created in that year
  if (user) {
    user.forEach((data) => {
      if (!yearMap[moment(data.created_at).format('YYYY')]) {
        yearMap[moment(data.created_at).format('YYYY')] = [];
        yearMap[moment(data.created_at).format('YYYY')].push(data);
      } else {
        yearMap[moment(data.created_at).format('YYYY')].push(data);
      }
    });

    // Extract the years
    let yearArr = Object.keys(yearMap);

    // Sort the years in descending order
    yearArr.sort((a, b) => b - a);

    return { dates: yearArr, data: yearMap };
  }
  return [];
});
