const tst = (testData, callBack) => {
  callBack("From server: "+testData)
};

module.exports = {
  tst: tst
};