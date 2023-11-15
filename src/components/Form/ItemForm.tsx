import { FormEvent, useState } from 'react';

interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean; dueDate: Date }[];
  selected: boolean;
}

interface Props {
  lists: ICreateList[];
  addItem: (itemName: string, dueDate: Date) => void;
}

const ItemForm = ({ addItem }: Props) => {
  const [itemName, setItemName] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addItem(itemName, dueDate);
    setItemName('');
    setDueDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">
          <p><u>Add Item</u></p>
          <em>Item Name:</em>
        </label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date:
        </label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate.toISOString().substr(0, 10)}
          onChange={(event) => setDueDate(new Date(event.target.value))}
        />
      </div>
      <button type="submit" className="myButtonClass">
        Add To List
      </button>
    </form>
  );
};

export default ItemForm;
