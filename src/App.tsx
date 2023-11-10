import { useState } from "react"
import Nav from "./components/Nav/Nav"
import "./components/Nav/Nav.css"
import Button from "./components/Button/Button"
import Form from "./components/Form/Form"
import Lists from "./components/List/Lists"
import ItemForm from './components/Form/ItemForm';
import "./components/Button/Button.css"
import "./components/Form/Form.css"
import { BsListCheck } from "react-icons/bs"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Register from "./views/RegisterForm"
import Login from "./views/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      main: '#d67b60',
      light: '#ecc4b8',
      dark: '#91290c'
    }
  }
})

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

  const addItem = ( itemName: string, dueDate: Date ) => {
    const newLists = [...lists];
    newLists.forEach(list => {
      if (list.selected) {
        list.items.push({ name: itemName, checked: false, dueDate });
      }
    });
    setLists(newLists);
  };

  const toggleCheck = (listIndex: number, itemIndex: number) => {
    const newLists = [...lists];
    newLists[listIndex].items[itemIndex].checked = !newLists[listIndex].items[itemIndex].checked;
    setLists(newLists);
  };

  const toggleSelected = (index: number) => {
    const newLists = [...lists];
    newLists[index].selected = !newLists[index].selected;
    setLists(newLists);
  };

  const removeItems = () => {
    const newLists = lists.map(list => ({
      ...list,
      items: list.items.filter(item => !item.checked),
    }));
    setLists(newLists);
  };

  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Nav/>
      <h1 className="head text-center"> Create Easy To-Do Lists <BsListCheck/></h1>
      <Form addList={addList} />
      <h3>Existing To-Do Lists</h3>
      <h6>Select a list to add items!</h6>
      <Lists lists={lists} toggleCheck={toggleCheck} toggleSelected={toggleSelected}/>
      {lists.some(list => list.selected) && <ItemForm lists={lists} addItem={addItem} />}
      {lists.some(list => list.items.some(item => item.checked)) && <Button removeItems={removeItems} />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;


// set list types to fix error forType '{ name: string; listName: string; }' is not assignable to type 'never'.
