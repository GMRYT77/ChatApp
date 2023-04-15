import React from "react";

const text = (props) => {
  return (
    <div>
      {props.user ? (
        <>
          <span>Signed in as : {props.user.email}</span>
          <button onClick={props.signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={props.signIn}>Sign In</button>
      )}
    </div>
  );
};

export default text;
