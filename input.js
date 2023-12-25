
// let connection;

// const setupInput = function (conn) {
//   connection = conn;
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function (key) {
//   if (key === '\u0003') {
//     process.exit();
//   } else if (key === 'w') {
//     console.log("Move: up");
//   } else if (key === 'a') {
//     console.log("Move: left");
//   } else if (key === 's') {
//     console.log("Move: down");
//   } else if (key === 'd') {
//     console.log("Move: right");
//     // conn.write("Move: right");
//   }
// };

// module.exports = setupInput;

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'q') {
    connection.write("Say: I'm gonna get ya!");
  } else if (key === 'e') {
    connection.write("Say: I wanna be big!");
  }
};

module.exports = setupInput;