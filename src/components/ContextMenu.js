import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Event from './Event'

export default function ContextMenu(props) {

  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : 
          null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const ContextComponent = props.contextComponent;

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      <ContextComponent></ContextComponent>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <Event date={props.date} />
        <MenuItem onClick={handleClose}>Go to today</MenuItem>
      </Menu>
    </div>
  );
}
