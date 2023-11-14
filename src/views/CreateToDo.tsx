import React from 'react';
import Form from '../components/Form/Form';
import Lists from '../components/List/Lists';
import ItemForm from '../components/Form/ItemForm';
import Button from '../components/Button/Button';
import { Typography } from '@mui/material';

interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean; dueDate: Date }[];
  selected: boolean;
}

interface CreateTodoProps {
  lists: ICreateList[];
  addList: (listName: string) => void;
  addItem: (itemName: string, dueDate: Date) => void;
  toggleCheck: (listIndex: number, itemIndex: number) => void;
  toggleSelected: (index: number) => void;
  removeItems: () => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ lists, addList, addItem, toggleCheck, toggleSelected, removeItems }) => {
  return (
    <>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Create Easy To-Do Lists
      </Typography>
      <Form addList={addList} />
      <Typography variant="h5" component="h3" gutterBottom>
        Existing To-Do Lists
      </Typography>
      <Typography variant="subtitle1" component="h6" gutterBottom>
        Select a list to add items!
      </Typography>
      <Lists lists={lists} toggleCheck={toggleCheck} toggleSelected={toggleSelected}/>
      {lists.some(list => list.selected) && <ItemForm lists={lists} addItem={addItem} />}
      {lists.some(list => list.items.some(item => item.checked)) && <Button removeItems={removeItems} />}
    </>
  );
};

export default CreateTodo;
