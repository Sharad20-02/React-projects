import React from 'react';

const List = ({ data }) => {
  return (
    <>
      {data?.map((user) => {
        return (
          <article key={user.id} className="person">
            <img src={user.image} alt={user.image} />
            <div>
              <h4>{user.name}</h4>
              <p>{user.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
