// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '   // i = 0, j =0
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Bài toán này có thể giải quyết bằng cách sử dụng 2 vòng lặp lồng nhau
// Cần tìm ra điều kiện để in ra dấu # và khoảng trắng
// Độ dài của mỗi hàng sẽ là 2 * n - 1, với n là số hàng của pyramid
// Cần tìm ra điểm midPoint của pyramid để xác định điều kiện in ra dấu #
// midPoint = Math.floor((2 * n - 1) / 2)
// Ví dụ: n = 3, midPoint = 2
// Vòng lặp bên ngoài sẽ duyệt qua từng hàng của pyramid
// Ở hàng đầu tiên sẽ in ra 1 dấu # ở giữa
// Ở mỗi hàng tiếp theo sẽ tăng thêm 2 dấu # so với hàng trước đó
// Ví dụ hàng 1 có 1 dấu #, hàng 2 có 3 dấu #, hàng 3 có 5 dấu #, ...
// [midPoint - row, midPoint + row] la khoảng in ra #
// Vòng lặp bên trong sẽ duyệt qua từng cột của pyramid
// Ở mỗi cột sẽ kiểm tra xem cột đó có nằm trong khoảng in ra # hay không
// column >= midPoint - row && column <= midPoint + row
// Nếu có thì in ra dấu #
// Nếu không thì in ra khoảng trắng
// Ví dụ: midPoint = 2, row = 0, column = 0 => khoảng in ra # là [2, 2]

function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = "";
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += "#";
            } else {
                level += " ";
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;
