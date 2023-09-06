import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dataAPI } from './data-api';
import Spinner from './Spinner';
import { Post } from '../helpers/post-store';
import './PostDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faTrashAlt,
  faHeart,
  faComment,
  faShare,
  faEarth,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import Authorize from './Authorize';
import { format } from 'date-fns';

const PostDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        return;
      }
      const postId = +id;
      const fetchedPost = await dataAPI.getPost(postId);
      setPost(fetchedPost);
    };
    fetchPost();
  }, [id]);
  const handleRemove = async () => {
    if (!id) {
      return;
    }
    const postId = +id;
    try {
      await dataAPI.removePost(postId);
      navigate('/posts');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if (!post) {
    return <Spinner />;
  }

  const date = post.timestamp || '';
  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <img src={post.user_avatar} alt="User Avatar" />
          <div>
            <h3>{post.user_name}</h3>
            <p>{format(new Date(date), 'yyyy-MM-dd HH:mm:ss')}</p>
          </div>
        </div>
        <div className="back">
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className="icon"
            onClick={() => {
              navigate('/posts');
            }}
            title="Back to the posts"
          />
          <Authorize allowedRoles={['admin']}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="icon"
              onClick={handleRemove}
              title="Delete post"
            />
          </Authorize>
        </div>
      </div>
      <div className="all-content row">
        <div className="img-post col-12 col-lg-6">
          <img src={post.image_url} alt="Post Image" />
        </div>
        <div className="post-content col-12 col-lg-6">
          <p className="hashtags">#{post.hashtags}</p>
          <p>{post.body}</p>
        </div>
      </div>
      <div className="footer row">
        <div className="post-footer col-12 col-lg-6">
          <div className="info-re">
            <FontAwesomeIcon className="reaction" icon={faHeart} />
            <h6>{post.likes}</h6>
          </div>
          <div className="info-re">
            <FontAwesomeIcon className="reaction" icon={faComment} />
            <h6>{post.comments}</h6>
          </div>
          <div className="info-re">
            <FontAwesomeIcon className="reaction" icon={faShare} />
            <h6>{post.shares}</h6>
          </div>
        </div>
        <div className="post-second-footer col-12 col-lg-6">
          <div className="info-re">
            <FontAwesomeIcon className="reaction" icon={faEarth} />
            <h6>{post.country}</h6>
          </div>
          <div className="info-re">
            <FontAwesomeIcon className="reaction" icon={faLanguage} />
            <h6>{post.language}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
