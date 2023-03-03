import React, { useState } from 'react';
import Comment from '../Comment/Comment';
// import dsd from "../../../public/images/shin/KakaoTalk_20230213_204309040.jpg"
// import profile from '../../assets/shin/KakaoTalk_20230213_204309040.jpg';
// import posted from '../../assets/shin/KakaoTalk_20230214_161243133.jpg';

const Feed = props => {
  const { list } = props;
  const [saveComment, setSaveComment] = useState([]);
  const [isheart, setIsHeart] = useState(false);
  const [comment, setComment] = useState('');
  const [numberComments, setNumberComments] = useState(0);
  const [numberlike, setNumberLike] = useState(0);

  const heartToggle = () => {
    setIsHeart(!isheart);
  };

  const changeComment = e => {
    setComment(e.target.value);
  };

  const commitCreate = e => {
    return e.key === 'Enter' && comment.length > 0
      ? (commentInformation(), setComment(''))
      : '';
  };

  const postButton = () => {
    return comment.length > 0 ? (commentInformation(), setComment('')) : '';
  };

  const commentInformation = () => {
    const input = {
      id: random(),
      value: comment,
      up: false,
    };
    setSaveComment([...saveComment, input]);
    setNumberComments(numberComments + 1);
  };

  const likeToggle = item => {
    saveComment.filter(items => {
      return items.id === item.id && !item.up
        ? ((item.up = !item.up), setNumberLike(numberlike + 1))
        : items.id === item.id && item.up
        ? ((item.up = !item.up), setNumberLike(numberlike - 1))
        : item;
    });
  };

  const deleteComment = item => {
    setSaveComment(
      saveComment.filter(items => {
        return items.id !== item.id;
      })
    );
    setNumberComments(numberComments - 1);
    return item.up === true ? setNumberLike(numberlike - 1) : '';
  };

  const random = () => {
    return Math.random().toString(36).substr(2, 16);
  };
  return (
    <div key={list.id} className="feeds">
      <div className="article">
        <div className="information">
          <div className="profile">
            <img src={`${list.profileImg}`} alt="profile" />
            <p>{list.profile}</p>
          </div>
          <i className="bi bi-three-dots" />
        </div>
        <img src={`${list.postImg}`} alt="posted" />

        <div className="content">
          <div className="emotion">
            <i
              onClick={heartToggle}
              className={
                isheart
                  ? 'bi bi-suit-heart-fill clicked'
                  : 'bi bi-suit-heart-fill'
              }
            />
            <i className="bi bi-chat" />
            <i className="bi bi-upload" />
          </div>
          <i className="bi bi-bookmark" />
        </div>

        <span className="hearts">좋아요 {numberlike}개</span>
        <div className="commentSection">
          <img src={`${list.profileImg}`} alt="profile" />
          <p>
            <strong>{list.profile} 외 </strong>
            <strong>{numberComments}명</strong>이 댓글을 다셨습니다.
          </p>
        </div>
        <div className="commentContent">
          {saveComment.map(item => (
            <Comment
              item={item}
              key={item.id}
              saveComment={saveComment}
              likeToggle={likeToggle}
              deleteComment={deleteComment}
            />
          ))}
        </div>
        <div className="wrap">
          <input
            onKeyPress={commitCreate}
            className="comment"
            type="text"
            placeholder="댓글 달기"
            value={comment}
            onChange={changeComment}
          />
          <button className="postingBtn" onClick={postButton}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
