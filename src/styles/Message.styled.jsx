import styled from "styled-components";
import tw, { css } from "twin.macro";

export const MessageCtn = styled.div`
  ${tw`
    bg-white
    px-8
    pt-8
    pb-2
    my-5
    rounded-lg
    shadow-md
  `}

  > div {
    ${tw`
      flex
      items-center
      gap-2
    `}

    & ~ div {
      ${tw`
        py-4
        text-gray-500
        `}
    }
  }

  h2 {
    ${tw`
      text-sm
      font-medium
    `}
  }

  p {
    ${tw`
      font-normal
    `}
  }
`;

export const UserProfileImg = styled.div`
  ${tw`
    relative
    m-0
    p-0
    block
    cursor-pointer
    overflow-hidden
    rounded-full
  `}

  ${({ sml = false }) =>
    sml
      ? tw`
        h-5
        w-5
        `
      : tw`
        h-8
        w-8
      `}
`;

export const UtilsCtn = styled.div`
  ${tw`
    flex
    !gap-5
    items-center
  `}

  ${({ edit = false }) =>
    edit
      ? tw`
        justify-end
        `
      : ``}

  button, a {
    ${tw`
      flex
      gap-2
      items-center
      font-normal
      text-xs
      text-gray-400
      focus:ring-0
    focus:outline-none
      focus-visible:ring-4 
    focus-visible:ring-purple-200 
    `}

    svg {
      ${tw`
        stroke-gray-500
        w-4
        h-4
      `}
    }

    &.btn-delete {
      ${tw`
        text-red-500
      `}

      svg {
        ${tw`
          stroke-red-500
        `}
      }
    }
  }
`;

export const CommentCtn = styled.div`
  ${tw`
    py-3
  `}

  > div:first-of-type {
    ${tw`
      relative
      bg-gray-200
      p-2
      pb-12
      rounded-lg
    `}
  }

  textarea {
    ${tw`
      bg-gray-200
      text-sm
      text-gray-600
      w-full
      p-2
      z-0
      focus:outline-none
    `}
  }

  button {
    ${tw`
      absolute
      bottom-2
      right-2
      z-1
    `}
  }
`;

export const CommentsListing = styled.div`
  ${tw`
    py-3
  `}
`;

export const CommentWrapper = styled.div`
  ${tw`
    p-3
    my-4
    rounded-lg
    bg-white
    border-gray-300
    text-gray-500
    text-sm
  `}

  > div:first-of-type {
    ${tw`
      flex
      gap-2
      items-center
      mb-1
      text-gray-500
    `}

    h3 {
      ${tw`
        text-xs
        font-medium
        text-gray-900
      `}
    }
  }
`;
