import Message from "./Message";

function Header({ children }) {
  return (
    <header className="header">
      <h1 className="title"> {children}</h1>

      <Message>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Message>
    </header>
  );
}

export default Header;
