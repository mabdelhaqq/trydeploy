export interface PostData {
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
  is_verified?: boolean;
}
