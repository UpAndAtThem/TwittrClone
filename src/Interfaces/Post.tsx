interface Post {
  id: number;
  userId: number;
  isRetweet: boolean;
  retweetedPostId?: number;
  userName: string;
  handle: string;
  date: Date;
  tweetText: string;
  image?: string;
  tweetContentUrl?: string;
  retweetCount: number;
  favoritesCount: number;
  replies?: Post[];
}

export default Post;