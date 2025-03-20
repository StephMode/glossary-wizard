import styled from "styled-components";
import Button from "../ui/Button";
import Form from "../layout/Form";
import { useState } from "react";

export default function HomePage() {
  const [showAddEntryForm, setShowAddEntryForm] = useState(false);

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <p>Logo</p>
        <nav aria-label="main-navigation">
          <ul>
            <li>
              <Button buttonRole="Edit/Read Mode" theme="main" />
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
        <StyledPageNav aria-label="page-navigation">
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
        <main aria-label="main-content">
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
          {!showAddEntryForm && (
            <Button
              buttonRole="Add Entry"
              theme="secondary"
              onClick={() => {
                setShowAddEntryForm(!showAddEntryForm);
              }}
            />
          )}
          {showAddEntryForm && (
            <>
              <Form
                formType="add"
                formToggle={() => setShowAddEntryForm(!showAddEntryForm)}
              />
              <Button
                buttonRole="cancel"
                theme="secondary"
                onClick={() => {
                  setShowAddEntryForm(!showAddEntryForm);
                }}
              />
            </>
          )}
        </main>
        <aside aria-label="page-outline">
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
  grid-template-rows: 55px 600px;
  gap: 5px;
`;

const StyledHeader = styled.header`
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  font-size: 1.3rem;
`;

const StyledPageOverlay = styled.div`
  display: grid;
  grid-template-columns: 20% 65% 15%;
  gap: 5px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const StyledPageNav = styled.nav`
  margin: 3px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`;

const StyledPageNavList = styled.ul`
  flex-flow: column nowrap;
  gap: 0.6rem;
`;
