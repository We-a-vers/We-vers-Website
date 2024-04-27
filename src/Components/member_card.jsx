import React from 'react';

function MemberCard() {
  return (
    <div className="flex flex-row">
      <div>Picture</div>
      <div className="flex flex-col">
        <h1>Tatsuo</h1>
        <h2>Math</h2>
        <button type="button"> Contact Tatsuo </button>
      </div>
    </div>
  );
}

export default MemberCard;
