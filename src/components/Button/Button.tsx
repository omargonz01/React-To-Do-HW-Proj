// import { Dropdown } from 'react-bootstrap';

interface Props {
  removeItems: () => void;
}

const Button = ({ removeItems}: Props) => {
  return (
    <>
      
      <button className="myButtonClass" onClick={removeItems}>Remove Items</button>
    </>
  );
};

export default Button;


// const Button = ({completeItems, removeItems}: Props) => {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//         List Actions
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Add Items</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Display Items</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Remove Items</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

