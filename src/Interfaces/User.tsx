interface User {
  userId: number;
  userName: string;
  handle: string;
  dateCreated: Date;
  avatarSrc?: string;
  email: string;
}

export default User;