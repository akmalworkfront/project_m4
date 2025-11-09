const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

if (parent && child) {
  const parentWidth = parent.offsetWidth - child.offsetWidth;
  const parentHeight = parent.offsetHeight - child.offsetHeight;

  let moveX = 0;
  let moveY = 0;

  let firstMove = false;
  let secondMove = false;
  let thirdMove = false;
  let fourthMove = false;

  const speed = 10;

  function moveBlock() {
    if (!firstMove && moveX < parentWidth) {
      child.style.left = `${moveX += speed}px`;
      if (moveX >= parentWidth) firstMove = true;
    }
    else if (firstMove && !secondMove && moveY < parentHeight) {
      child.style.top = `${moveY += speed}px`;
      if (moveY >= parentHeight) secondMove = true;
    }
    else if (secondMove && !thirdMove && moveX > 0) {
      child.style.left = `${moveX -= speed}px`;
      if (moveX <= 0) thirdMove = true;
    }
    else if (thirdMove && !fourthMove && moveY > 0) {
      child.style.top = `${moveY -= speed}px`;
      if (moveY <= 0) fourthMove = true;
    }
    else if (fourthMove) {
      firstMove = false;
      secondMove = false;
      thirdMove = false;
      fourthMove = false;
    }

    requestAnimationFrame(moveBlock);
  }

  moveBlock();
}