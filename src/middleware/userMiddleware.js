import { createListenerMiddleware } from '@reduxjs/toolkit';
import setUserApi from '../utils/setUser';
import { setUser } from '../reducer/user';

export const userMiddleware = createListenerMiddleware();

userMiddleware.startListening({
  actionCreator: setUser,
  effect: (action, listenerApi) => {
    return Promise.resolve().then(() => {
      var user = action.payload;
      if (!user?.name || !user.token) throw new Error('not valid user name or token');
      return user;
    }).then((user) => {
      setUserApi(user);
    }).catch((e) =>
      console.log(e)
    );
  }
});
