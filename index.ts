export interface Message {
  id: number;
  text: string;
  sender: string;
  avatar: string;
  timestamp: Date;
}

export interface User {
  username: string;
  avatar: string;
}