import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  position: 'absolute'
}

const DropWord = ({ posY, posX, type, size, id, correct }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ type: type, correct: correct }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = 'dF-C-cc boxDrop' ref = { drop } style = {{ ...style, 'top': posY, 'left': posX, 'width': size }} id = { 'boxDrop-' + correct } >

    </div>
  )
}
export default DropWord;
