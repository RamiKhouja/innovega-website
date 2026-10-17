import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({color}) => {
  const [loading, setLoading] = useState(true);

  return (
    <ClipLoader
        color={color}
        loading={loading}
        size={16}
    />
  );
};

export default Spinner;
