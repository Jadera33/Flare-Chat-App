import Parse from 'parse';

Parse.initialize(
  "sjIUHgzJJfkrqwD44qS4Tzat1F0L79tuO7Y5bmVo"
  "0gr7cpdBM1ynz3MNhGyfvFXJrkLSfSYjrCrKJtuQ"
);
Parse.serverURL = 'https://parseapi.back4app.com';

export const subscribeToMessages = (callback: (messages: any[]) => void) => {
  const query = new Parse.Query('Message');
  query.ascending('createdAt');
  return query.subscribe();
};

export const sendMessage = async (text: string, sender: string, avatar: string) => {
  const Message = Parse.Object.extend('Message');
  const message = new Message();
  
  message.set('text', text);
  message.set('sender', sender);
  message.set('avatar', avatar);
  
  return message.save();
};

export const createUser = async (username: string, password: string) => {
  const user = new Parse.User();
  user.set('username', username);
  user.set('password', password);
  
  return user.signUp();
};

export const loginUser = async (username: string, password: string) => {
  return Parse.User.logIn(username, password);
};

export const logoutUser = async () => {
  return Parse.User.logOut();
};