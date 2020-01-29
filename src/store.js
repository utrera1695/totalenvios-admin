import {
  createStore
} from 'redux';
import update from 'react-addons-update';

const initialState = {
  page: 'slider',
  showMenu: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return update(state, {
        page: {
          $set: action.page
        },
        showMenu: {
          $set: false
        }
      });
    }
    case 'SHOW_MENU': {
      return update(state, {
        showMenu: {
          $set: true
        }
      });
    }
    default:
      return {
        ...state
      };
  }
};

export default createStore(reducer);