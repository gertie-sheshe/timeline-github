import React from 'react';

const User = ({userRepos}) => {
  return (
    <div>
      {userRepos && userRepos.map(repo => <p key={repo.id}>{repo.name}</p>)}
    </div>
  )
}

export default User;
