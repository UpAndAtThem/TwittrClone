interface Post {
  id: number;
  userId: number;
  isRetweet: boolean;
  retweetedPostId?: number;
  userName: string;
  handle: string;
  date: Date;
  tweetText: string;
  image?: string | null;
  tweetContentUrl?: string | null;
  retweetCount: number;
  favoritesCount: number;
  replies?: Post[];
}

export default Post;