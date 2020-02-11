export const getObjectFromLocalStorage = (object) => {
  return JSON.parse(window.localStorage.getItem(object)) || [];
}