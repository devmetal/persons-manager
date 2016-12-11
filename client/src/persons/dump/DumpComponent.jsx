import React from 'react';

const Dump = ({ datas }) => <textarea className="dump" value={datas} readOnly={true} />;

export default Dump;
