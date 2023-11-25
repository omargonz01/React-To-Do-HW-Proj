import { FormEvent, useState } from "react";
import Datetime from "react-datetime";
import TimePicker from "react-time-picker";
import "react-datetime/css/react-datetime.css";
import "react-time-picker/dist/TimePicker.css";
import moment from 'moment';


interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean; dueDate?: Date | string }[];
  selected: boolean;
}

interface Props {
  lists: ICreateList[];
  addItem: (itemName: string, dueDate: Date) => void;
}

const ItemForm = ({ addItem }: Props) => {
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState<Date | string>(new Date());
  const [dueTime, setDueTime] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Combine date and time into a single string
    const combinedDateTime = `${
      dueDate instanceof Date ? dueDate.toISOString().substr(0, 10) : dueDate
    }${dueTime ? `T${dueTime}:00.000Z` : ""}`;

    // Convert the combined string to a Date object
    const formattedDueDate = new Date(combinedDateTime);

    addItem(itemName, formattedDueDate);
    setItemName("");
    setDueDate(new Date());
    setDueTime(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">
          <p>
            <u>Add Item</u>
          </p>
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
        <Datetime
  value={(dueDate instanceof Date || dueDate === null) ? dueDate : ''}
  onChange={(date) => setDueDate(date instanceof moment ? date.toDate() : new Date())}
  inputProps={{ className: 'form-control' }}
/>
      </div>

      <div className="mb-3">
        <label htmlFor="dueTime" className="form-label">
          Due Time:
        </label>
        <TimePicker
  value={(dueTime === null) ? undefined : dueTime}
  onChange={(time) => setDueTime(time || null)}
  clearIcon={null}
  className="form-control"
/>
      </div>

      <button type="submit" className="myButtonClass">
        Add To List
      </button>
    </form>
  );
};

export default ItemForm;
