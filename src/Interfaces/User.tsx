interface User {
  userId: number;
  userName: string;
  handle: string;
  dateCreated: Date;
  avatarSrc?: string | null;
  email: string;
}

export default User;