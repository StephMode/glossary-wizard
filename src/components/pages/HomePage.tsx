import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledPageWrapper>
      <StyledHeader>
        <p>Logo</p>
        <nav aria-label="main-navigation">
          <ul>
            <li>
              <button>Edit/Read Mode</button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">GitHub</a>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <StyledPageOverlay>
        <StyledPageNav>
          <StyledPageNavList>
            <li>
              <h3>Preliminary Definitions</h3>
              <h4>Basic Defintions</h4>
            </li>
            <li>
              <h3>Preliminary Definitions</h3>
              <h4>Basic Defintions</h4>
            </li>
          </StyledPageNavList>
        </StyledPageNav>
        <StyledPageMain>
          <h1>Project Glossary</h1>
          <h2>Preliminary Definitions</h2>
          <h3>Basic Defintions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            tempora neque sapiente illum repellat architecto reiciendis ea nulla
            tempore dolorum necessitatibus quos, quasi, earum, iure cupiditate
            sunt modi voluptatem odio!
          </p>
          <h1>Project Glossary</h1>
          <h2>Preliminary Definitions</h2>
          <h3>Basic Defintions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            tempora neque sapiente illum repellat architecto reiciendis ea nulla
            tempore dolorum necessitatibus quos, quasi, earum, iure cupiditate
            sunt modi voluptatem odio!
          </p>
        </StyledPageMain>
        <aside>
          <h3>On This Page</h3>
          <h4>Preliminary Definitions</h4>
          <h5>Basic Defintions</h5>
          <h4>Preliminary Definitions</h4>
          <h5>Basic Defintions</h5>
        </aside>
      </StyledPageOverlay>
      <footer></footer>
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 600px;
  gap: 5px;
`;

const StyledHeader = styled.header`
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledPageOverlay = styled.div`
  display: grid;
  grid-template-columns: 20% 65% 15%;
  gap: 5px;
  border: 3px solid black;
  border-radius: 10px;
`;

const StyledPageNav = styled.nav`
  margin: 3px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 10px;
`;

const StyledPageMain = styled.main`
  padding: 10px;
`;

const StyledPageNavList = styled.ul`
  flex-flow: column nowrap;
  padding: 5px;
  gap: 0.6rem;
`;
