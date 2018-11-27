import { parse } from 'qs';
import Cookies from 'js-cookie'
export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
  
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    fetchCurrent(state, action) {
      let user_name = Cookies.get('user_name');
      return {
        ...state,
        currentUser: { name: user_name || '' },
      };
    },
  },
};
