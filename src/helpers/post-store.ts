import { create } from 'zustand';

export interface Post {
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
interface PostsStore {
  verified: boolean;
  posts: Post[];
  toggleVerified: () => void;
  setPosts: (posts: Post[]) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  verified: false,
  posts: [],
  toggleVerified: () => set((state) => ({ verified: !state.verified })),
  setPosts: (posts) => set({ posts })
}));
