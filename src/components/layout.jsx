import Nav from "./Nav";

//styles
import { Container, Main } from "../styles/Home.styled";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
