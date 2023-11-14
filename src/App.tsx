import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./components/Button/Button.css"
import "./components/Form/Form.css"
import Register from "./views/RegisterForm";
import Login from "./views/Login";
import CreateTodo from "./views/CreateToDo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B2D42",
      light: "#8D99AE",
      dark: "#EDF2F4",
    },
  },
});

interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean; dueDate: Date }[];
  selected: boolean;
}

const App = () => {
  const [lists, setLists] = useState<ICreateList[]>([]);

  const addList = (listName: string) => {
    setLists([...lists, { listName, items: [], selected: false }]);
  };

  const addItem = (itemName: string, dueDate: Date) => {
    const newLists = [...lists];
    newLists.forEach((list) => {
      if (list.selected) {
        list.items.push({ name: itemName, checked: false, dueDate });
      }
    });
    setLists(newLists);
  };

  const toggleCheck = (listIndex: number, itemIndex: number) => {
    const newLists = [...lists];
    newLists[listIndex].items[itemIndex].checked =
      !newLists[listIndex].items[itemIndex].checked;
    setLists(newLists);
  };

  const toggleSelected = (index: number) => {
    const newLists = [...lists];
    newLists[index].selected = !newLists[index].selected;
    setLists(newLists);
  };

  const removeItems = () => {
    const newLists = lists.map((list) => ({
      ...list,
      items: list.items.filter((item) => !item.checked),
    }));
    setLists(newLists);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Nav />
        <Container maxWidth="md">
          
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-todo" element={<CreateTodo lists={lists} addList={addList} addItem={addItem} toggleCheck={toggleCheck} toggleSelected={toggleSelected} removeItems={removeItems} />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

// set list types to fix error forType '{ name: string; listName: string; }' is not assignable to type 'never'.
