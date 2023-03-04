import Image from "next/image";

import { MessageCtn, UserProfileImg } from "../styles/Message.styled";

const Message = ({ children, avatar, username, description, timestamp }) => {
  return (
    <MessageCtn>
      <div>
        <UserProfileImg>
          <Image
            src={avatar}
            alt={username}
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className=""
          />
        </UserProfileImg>
        <h2>{username}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      {children}
    </MessageCtn>
  );
};

export default Message;
