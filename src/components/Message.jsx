import Image from "next/image";

import { MessageCtn, UserProfileImg } from "../styles/Message.styled";

const user = {
  photoURL: "",
  displayName: "Petr Kolarik",
};

const Message = ({ children }) => {
  return (
    <MessageCtn>
      <div>
        <UserProfileImg>
          <Image
            src={user.photoURL}
            alt={user.displayName}
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className=""
          />
        </UserProfileImg>
        <h2>{user.displayName}</h2>
      </div>
      <div>
        <p>description goes here</p>
      </div>
      {children}
    </MessageCtn>
  );
};

export default Message;