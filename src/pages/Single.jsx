import React, { useContext, useEffect, useState } from 'react'
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';
import Menu from '../components/Menu';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../app/AuthContext';
import DOMPurify from "dompurify";
import moment from "moment";
import axios from "axios";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // splice id post
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/post/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log("Post:", error);
      }
    };
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/post/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.log("Delete:", error);
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />

        <div className="user">
          {post.userImg === "" && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${postId}`} state={post}>
                <img className="edit-inner" src={Edit} alt="edit" />
              </Link>
              <Link>
                <img
                  className="delete-inner"
                  src={Delete}
                  alt="delete"
                  onClick={handleDelete}
                />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>{" "}
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}

export default Single