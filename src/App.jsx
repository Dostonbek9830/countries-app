import "./App.css";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/search.jsx";
import { List } from "./components/List/List";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Search />
        <List />
      </div>
    </div>
  );
};
