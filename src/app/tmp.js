// const currFigure = document.querySelector('.figure');
// const intervalId = setInterval(() => {
//   currFigure.style.left = 10 * 24 + 'px';
//   const prevPosTop = +currFigure.style.top.split('px')[0];
//   currFigure.style.top = prevPosTop + 24 + 'px';
//   if (prevPosTop >= 500) {
//     clearInterval(intervalId);
//   }
//   console.log(prevPosTop);
// }, 100);

// --------------------------
// gameBox.innerHTML = '';
// randomizeContainer(gameBoxModel);
// for (let row = 0; row < gameBoxModel.length; row += 1) {
//   const blocksRow = createBlocksRow(row);
//   gameBoxModel[row].forEach((color, colomn) => {
//     const block = createBlock(color, colomn);
//     blocksRow.appendChild(block);
//   });
//   gameBox.appendChild(blocksRow);
// }

// setTimeout(() => {
//   for (let row = 0; row < gameBoxModel.length; row += 1) {
//     if (gameBoxModel[row].every((item) => item > 0)) {
//       // Delete row
//       console.log(row);
//       const x = gameBox.querySelectorAll('.blocks-row');
//       x[row].remove();
//       gameBox.prepend(createBlocksRow(0));
//       x.forEach((item) => {
//         const prevTop = +item.style.top.slice(0, -2);
//         if (prevTop < row * BLOCK_SIZE) {
//           const newTop = prevTop + BLOCK_SIZE;
//           item.style.top = `${newTop}px`;
//         }
//       });
//     }
//   }
// }, 200);

// const btn = document.querySelector('.btn-init')
// btn.addEventListener('click', () => {
//   const shape = new Shape(Math.floor(Math.random() * 7), 0)
//   console.log(shape)
//   const container = document.querySelector('.game-box')
//   const DOMShape = createShape(shape.type)
//   container.appendChild(DOMShape)
//   setInterval(() => {
//     DOMShape.remove()
//   }, 10000)
// })
