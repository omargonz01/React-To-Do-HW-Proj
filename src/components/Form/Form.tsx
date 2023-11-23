import { FormEvent, useState } from "react";

interface IAddList{
  addList: (listName: string) => void
}

// will need to adjust handleSubmit on submit to save user liste to db
const Form = ({ addList } : IAddList) => {
  const [listName, setListName] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addList(listName)
    setListName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="listName" className="form-label">
            List Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="listName"
            onChange={(event) => setListName(event.target.value)}
          />
        </div>
        
        <button type="submit" className="myButtonClass">
          Create List
        </button>
      </form>
    </>
  );
};
export default Form;
