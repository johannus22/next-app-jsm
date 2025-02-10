import React from 'react';

const page = ({ params }: {params : {id: string}}) => {

  const { id } = params;
  return (
    <div>
        <h2>User Detail {id}</h2>
    </div>
  )
}

export default page
