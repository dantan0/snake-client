/**
 * Set up user interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  };
};

module.exports = { setupInput };