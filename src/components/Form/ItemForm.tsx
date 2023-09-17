import { FormEvent, useState } from 'react';


interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean }[];
  selected: boolean;
}
  
interface Props {
  lists: ICreateList[];
  addItem: (itemName: string) => void;
}

const ItemForm = ({ addItem } : Props) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addItem(itemName)
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto mb-3">
        
        {/* <select
          id="listName"
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        >
          {lists.map((list) => (
            <option key={list.listName} value={list.listName}>
              {list.listName}
            </option>
          ))}
        </select> */}
      </div>
      
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">
          Item Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      </div>
      <button type="submit" className="myButtonClass">
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
