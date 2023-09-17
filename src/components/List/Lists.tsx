interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean }[];
  selected: boolean;
}

interface Props {
  lists: ICreateList[];
  toggleCheck: (listIndex: number, itemIndex: number) => void;
  toggleSelected: (index: number) => void;
}

const Lists = ({ lists, toggleCheck, toggleSelected }: Props) => {
  return (
    
    <ul className="list-group">
      {lists.map((list, listIndex) => (
        <li key={listIndex} >
          <input
            type="checkbox"
            checked={list.selected}
            onChange={() => toggleSelected(listIndex)}
          />
          {list.listName}
        
          <ul className ="hover-here">
            {list.items.map((item, itemIndex) => (
              <li   key={itemIndex} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheck(listIndex, itemIndex)}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Lists;


// did not end up needing this code, since i updated how the app works, but it did originally
// display correctly.
// const Lists = () => {
//   return (
//     <>
//       <ul className="list-group">
//         <li className="list-group-item">
//           <input
//             className="form-check-input me-1"
//             type="checkbox"
            
//             id="firstCheckboxStretched"
//           />
//           <label
//             className="form-check-label stretched-link"
//             htmlFor="firstCheckboxStretched"
//           >
//             First List
//           </label>
//         </li>
//         <li className="list-group-item">
//           <input
//             className="form-check-input me-1"
//             type="checkbox"
            
//             id="secondCheckboxStretched"
//           />
//           <label
//             className="form-check-label stretched-link"
//             htmlFor="secondCheckboxStretched"
//           >
//             Second List
//           </label>
//         </li>
//         <li className="list-group-item">
//           <input
//             className="form-check-input me-1"
//             type="checkbox"
            
//             id="thirdCheckboxStretched"
//           />
//           <label
//             className="form-check-label stretched-link"
//             htmlFor="thirdCheckboxStretched"
//           >
//             Third List
//           </label>
//         </li>
//       </ul>
//     </>
//   );
// }
// export default Lists