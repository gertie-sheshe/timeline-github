import React from 'react';

const User = ({userRepos}) => {
  return (
    <div>
      {userRepos && userRepos.dates.map(date => {
        return <div key={date}>
          <h3>{date}</h3>
          {userRepos.data[date].map(repo => <p key={repo.id}>{repo.name}</p>)}
        </div>
      })}
    </div>
  )
}

export default User;
