import React from 'react';
import MemberCard from '../../Components/member_card';

function MemberPage() {
  return (
    <div className="flex flex-col">
      <h1>Meet our team</h1>
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
}

export default MemberPage;
