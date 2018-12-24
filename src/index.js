import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
  <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning</h4>
        Are you sure you want to do this?
      </div>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:55PM" 
        content="Nice blog post"
        avatar={faker.image.avatar()}

      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        author="Pete" 
        timeAgo="Today at 2:00Am" 
        content="Subject is good"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday" 
        content="I like the writing"
        avatar={faker.image.avatar()}
      /> 
    </ApprovalCard>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
