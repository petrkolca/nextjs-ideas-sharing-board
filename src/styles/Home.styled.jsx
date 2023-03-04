import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

export const Container = tw.div`
  mx-6
  md:max-w-2xl
  md:mx-auto
  bg-white
  font-poppins
`;

export const Main = tw.main`
  flex
  w-full
  flex-1
  flex-col
  sm:px-20
`;

export const Section = styled.section`
  ${tw`
    my-12
    font-medium
  `}
`;

export const Title = tw.h2`
  text-xl
`;

export const TitleLink = styled(Link)(
  tw`
  text-blue-500
  hover:text-blue-700
  focus:text-blue-700
  `
);

export const Description = tw.p`
  mt-3
  text-2xl
`;

export const DescriptionCodeHighlight = tw.code`
  rounded-md
  bg-gray-100
  p-3
  font-mono 
  text-lg
`;

export const Cards = tw.div`
  mt-6 flex
  max-w-4xl
  flex-wrap
  items-center
  justify-around
  sm:w-full
`;

export const Card = styled(Link)(
  tw`
  mt-6
  w-96
  rounded-xl
  border
  p-6
  text-left
  hover:text-blue-600
  focus:text-blue-600 
  `
);

export const CardTitle = tw.h3`
  text-2xl
  font-bold
`;

export const CardDescription = tw.p`
  mt-4
  text-xl
`;

export const SubTitle = tw.h2`
  text-4xl
  font-bold
`;

export const ButtonGroup = tw.div`
  flex
  gap-2
  flex-wrap
  justify-center
  p-1
`;

export const Button = styled.button(
  ({ full = false, danger = false, outline = false, disabled = false }) => [
    danger
      ? tw`
        bg-red-500 
        hover:bg-red-700 
        text-white
      `
      : tw`
        bg-blue-500 
        hover:bg-blue-700 
        text-white
      `,
    outline
      ? danger
        ? tw`
          bg-transparent
          border
          border-red-500
          hover:border-transparent
          hover:bg-red-500
          text-red-700
          hover:text-white
        `
        : tw`
          bg-transparent
          border
          border-blue-500
          hover:border-transparent
          hover:bg-blue-500
          text-blue-700
          hover:text-white
        `
      : tw``,
    disabled ? tw`opacity-50 cursor-not-allowed` : tw`cursor-pointer`,
    full ? tw`w-full mt-2` : tw`w-auto`,
    tw`
      py-2
      px-4
      text-sm
      bg-gradient-to-tr 
      from-purple-600 
      to-purple-400 
      hover:bg-gradient-to-br 
      focus:ring-4 
      focus:outline-none 
      focus:ring-purple-200 
      dark:focus:ring-purple-500
      text-white
      rounded-lg
      shadow-lg 
      shadow-purple-500/50 
      dark:shadow-lg 
      dark:shadow-purple-800/80
      focus:shadow-none
      font-medium
    `,
  ]
);

export const Footer = tw.footer`
  flex
  h-24
  w-full
  items-center
  justify-center
  border-t
`;

export const FooterCopyRight = tw.a`
  flex
  items-center
  justify-center
  gap-2
`;
