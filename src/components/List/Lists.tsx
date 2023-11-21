// Created new check system with MUI

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Grid from '@mui/material/Grid';

interface ICreateList {
  listName: string;
  items: { name: string; checked: boolean; dueDate: Date }[];
  selected: boolean;
}

interface Props {
  lists: ICreateList[];
  toggleCheck: (listIndex: number, itemIndex: number) => void;
  toggleSelected: (index: number) => void;
}

const Lists = ({ lists, toggleCheck, toggleSelected }: Props) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {lists.map((list, listIndex) => (
            <ListItem
              key={listIndex}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
              sx={{ pr: 3 }}
            >
              <ListItemButton role={undefined} onClick={() => toggleSelected(listIndex)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={list.selected}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': `checkbox-list-label-${listIndex}` }}
                  />
                </ListItemIcon>
                <ListItemText id={`checkbox-list-label-${listIndex}`} primary={list.listName} />
              </ListItemButton>
              <List>
                {list.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <Checkbox
                      checked={item.checked}
                      onChange={() => toggleCheck(listIndex, itemIndex)}
                    />
                    <ListItemText primary={item.name} secondary={`Due: ${item.dueDate.toLocaleDateString()}`} />
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Lists;



// old version of lists

// interface ICreateList {
//   listName: string;
//   items: { name: string; checked: boolean; dueDate: Date }[];
//   selected: boolean;
// }

// interface Props {
//   lists: ICreateList[];
//   toggleCheck: (listIndex: number, itemIndex: number) => void;
//   toggleSelected: (index: number) => void;
// }

// const Lists = ({ lists, toggleCheck, toggleSelected }: Props) => {
//   return (
//     <ul className="list-group">
//       {lists.map((list, listIndex) => (
//         <li key={listIndex}>
//           <input
//             type="checkbox"
//             checked={list.selected}
//             onChange={() => toggleSelected(listIndex)}
//           />
//           {list.listName}
//           <ul>
//             {list.items.map((item, itemIndex) => (
//               <li key={itemIndex} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
//                 <input
//                   type="checkbox"
//                   checked={item.checked}
//                   onChange={() => toggleCheck(listIndex, itemIndex)}
//                 />
//                 {item.name} - Due: {item.dueDate.toLocaleDateString()}
//               </li>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Lists;



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