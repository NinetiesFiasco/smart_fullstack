const service = require("./service");

const tst = (req,res) => {
  
  let testData = "tst" || req.body;

  service.tst(testData, (err,result)=>{

    return err
      ? err
      : res.json({
          success: 1,
          message: "OK",
          data: result
        });
  });
};

module.exports = {
  tst: tst
};