import Button from "../ui/Button";
import Form from "../layout/Form";
import { useState } from "react";


export default function HomePage() {
  const [showAddEntryForm, setShowAddEntryForm] = useState(false);

  return (
    <div className="home-page--page-wrapper">
      <header className="home-page--header">
        <p>Logo</p>
        <nav aria-label="main-navigation">
          <ul className="home-page--header--nav-link-bar">
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
      </header>
      <div className="home-page--page-overlay">
        <nav className="home-page--page-navigation" aria-label="page-navigation">
          <ul className="home-page--page-navigation-list">
            <li>
              <h3>Preliminary Definitions</h3>
              <h4>Basic Defintions</h4>
            </li>
            <li>
              <h3>Preliminary Definitions</h3>
              <h4>Basic Defintions</h4>
            </li>
          </ul>
        </nav>
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
      </div>
      <footer></footer>
    </div>
  );
}