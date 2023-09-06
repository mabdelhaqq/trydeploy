import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/images/love.png';
import img2 from '../assets/images/comment.png';
import img3 from '../assets/images/share.png';
import './Post.scss';
import { PostData } from './type';
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { dataAPI } from './data-api';
import { usePostsStore } from '../helpers/post-store';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  post: PostData;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { setPosts } = usePostsStore();
  const [displayDialog, setDisplayDialog] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id: number | undefined) => {
    setDisplayDialog(false);
    if (!id) return;
    const postId = +id;
    try {
      await dataAPI.removePost(postId);
      const allPosts = await dataAPI.getAllPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <article
      className="col-xs-12 col-md-6 art"
      onClick={() => {
        navigate(`/posts/${post.user_id}`);
      }}
    >
      <img src={post.image_url} className="imgpr" alt="Post" />
      <div className="post-info row">
        <div className="na col-5">
          <img src={post.user_avatar} className="au" alt="User Avatar" />
          <h6>{post.user_name}</h6>
          {post.is_verified && <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" />}
        </div>
        <div className="like col-2">
          <img src={img1} alt="Likes" className="like-img" />
          <h6>{post.likes}</h6>
        </div>
        <div className="comment col-2">
          <img src={img2} alt="Comments" className="comment-img" />
          <h6>{post.comments}</h6>
        </div>
        <div className="share col-2">
          <img src={img3} alt="Comments" className="share-img" />
          <h6>{post.shares}</h6>
        </div>
        <div className="delete col-1">
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={(e) => {
              e.stopPropagation();
              setDisplayDialog(true);
            }}
            title="Delete post"
          />
        </div>
      </div>
      <div className="sus">
        <h4 className="he">#{post.hashtags}</h4>
        <p className="body">{post.body}</p>
      </div>
      <div></div>
      <ConfirmDialog
        onClick={(e) => {
          e.stopPropagation();
        }}
        visible={displayDialog}
        onHide={() => {
          setDisplayDialog(false);
        }}
        message="Are you sure you want to delete this post?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        acceptLabel="Yes"
        rejectLabel="No"
        acceptClassName="p-button-danger"
        accept={() => {
          handleDelete(post.user_id);
        }}
      />
    </article>
  );
};

export default Post;
