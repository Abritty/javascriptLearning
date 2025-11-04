var reverse = function(x) {
  const reversed = String(Math.abs(x)).split('').reverse().join('');

  if (reversed > Math.pow(2, 31)) {
    return 0;
  }

  console.log(reversed);
  return reversed * Math.sign(x);
};
