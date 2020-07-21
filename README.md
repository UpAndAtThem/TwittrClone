# Twittr is a clone of Twitter using React and Typescript for the front-end.

## Twittr is a social media platform where a person can create an account, and that user has the abilities to create, read, update, and delete posts.

### Post: A post is a piece of writing, image, or other item of content, a post component has these attributes.

``` javascript
interface Post {
  id: number;
  userId: number;
  isRetweet: boolean;
  retweetedPostId?: number;
  userName: string;
  handle: string;
  date: Date,
  tweetText: string,
  image?: string | null,
  tweetContentUrl?: string | null,
  retweetCount: number,
  favoritesCount: number,
  replies?: Post[]
}
```
