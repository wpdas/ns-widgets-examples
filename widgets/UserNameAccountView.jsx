const userName = props.name;
const userAccoundId = props.accountId;

return (
  <div>
    <span>{userName}</span> <span>(@{userAccoundId})</span>
  </div>
);
