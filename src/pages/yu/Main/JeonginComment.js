import React from 'react';

const JeonginComment = props => {
  const { commentList } = props;

  return (
    <div className="JeonginComment">
      <ul className="commentList">{commentList}</ul>
    </div>
  );
};

export default JeonginComment;
