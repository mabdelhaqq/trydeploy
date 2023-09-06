import { sleep } from '../utils';
import Post from './Post';
import { PostData } from './type';

interface PostProps {
  post: PostData;
}
interface Post {
  is_verified: boolean;
  user_id?: number;
  user_name?: string;
  user_avatar?: string;
  body?: string;
  hashtags?: string;
  image_url?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  timestamp?: string;
  country?: string | null;
  language?: string;
}

const postsKey = 'my_posts';

export const dataAPI = {
  getAllPosts: async (): Promise<Post[]> => {
    const postsJSON = localStorage.getItem(postsKey);
    return postsJSON ? JSON.parse(postsJSON) : [];
  },

  getPost: async (id: number): Promise<Post | null> => {
    const allPosts = await dataAPI.getAllPosts();
    const post = allPosts.find((p: Post) => p.user_id === id);
    return post || null;
  },

  addPost: async (newPost: Post): Promise<void> => {
    await sleep(2000);
    const postsJSON = localStorage.getItem(postsKey);
    const posts = postsJSON ? JSON.parse(postsJSON) : [];
    const updatedPosts = [...posts, newPost];
    localStorage.setItem(postsKey, JSON.stringify(updatedPosts));
  },

  removePost: async (id: number): Promise<void> => {
    const allPosts = await dataAPI.getAllPosts();
    const updatedPosts = allPosts.filter((post: Post) => post.user_id !== id);
    localStorage.setItem(postsKey, JSON.stringify(updatedPosts));
  },

  setPosts: async (posts: PostProps[]): Promise<void> => {
    localStorage.setItem(postsKey, JSON.stringify(posts));
  }
};
