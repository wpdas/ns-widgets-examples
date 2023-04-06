const IPFS_NEAR_SOCIAL_THUMBNAIL_URL =
  "https://i.near.social/thumbnail/https://ipfs.near.social/ipfs/";

const accountId = context.accountId || "wendersonpires.near";
const profile = socialGetr(`${accountId}/profile`);
const profileImage = `${IPFS_NEAR_SOCIAL_THUMBNAIL_URL}${profile.image.ipfs_cid}`;

return (
  <div>
    <img src={profileImage} alt="profile avatar" />
    {/* Load UserNameAccountView widget */}
    <Widget
      src={"wendersonpires.near/widget/NSLVWidget"}
      props={{
        src: "wendersonpires.near/widget/UserNameAccountView",
        srcProps: { name: "Wendz", accountId },
      }}
    />
  </div>
);
