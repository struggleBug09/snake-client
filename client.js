// const net = require("net");

// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on('data', (data) => {
//     console.log('Server says:', data);
//   });

//   conn.on('connect', () => {
//     console.log('Successfully connected to game server!');
//     conn.write("Name: ZXC");
//     conn.write("Move: up");
//     conn.write("Move: left");
//     conn.write("Move: left");
//     conn.write("Move: down");
//   });

//   return conn;
// };

// module.exports = connect;



//////////////////////////////////////////


const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');

    // Execute commands with a delay of 50ms between each
    setTimeout(() => conn.write("Name: ZXC"),0);
    setTimeout(() => conn.write("Move: up"), 50);
    setTimeout(() => conn.write("Move: left"), 150);
    setTimeout(() => conn.write("Move: left"), 250);
    setTimeout(() => conn.write("Move: down"), 350);
  });

  return conn;
};

module.exports = connect;