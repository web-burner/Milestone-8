// import React from 'react';

// import User from "./User";
// import { use } fr om 'react';
import {useLoaderData} from 'react-router';

const UsersDetails = () => {
    const user = useLoaderData()
    // console.log(user)
  return (
    <div>
      <p>here is the user details </p>
    </div>
  );
};

export default UsersDetails;
