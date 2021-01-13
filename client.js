const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Connection is successfully established');
    conn.write('Name: DT');
  });
  
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  //   setTimeout(conn.write("Move: right"), 1000);
  //   setTimeout(conn.write("Move: down"), 2000);
  // });

  return conn;
};

module.exports = { connect };