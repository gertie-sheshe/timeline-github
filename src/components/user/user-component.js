import React from 'react';
import moment from 'moment';

const User = ({ userRepos }) => {
  
  return (
    <div className="user-component">
      <div className="wrapper">
        {userRepos.dates && userRepos.dates.map(date => {
          return (
            <React.Fragment key={date}>
              {userRepos.data[date].map(repo => {
                return (
                  <div key={repo.id} className="box-area">
                    <div className="custom"></div>
                    <div className="box-date">
                      <span>
                        <div></div>
                      </span>
                    </div>
                    <div className="box-text">
                      <p className="repo-year">{`${moment(repo.created_at).format('MMMM')} ${date}`}</p>
                      <a href={repo.html_url} className="repo-title">{repo.name}</a>
                      <p className="repo-description">{repo.description ? repo.description : 'Repository has no description'}</p>
                      <p className="repo-description">Language: {repo.language}</p>
                    </div>
                  </div>
                )
              })}
            </React.Fragment>
          )
        })}
      </div>   
    </div >
  )
}

export default User;
