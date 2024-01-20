const jsonServer = require("json-server");
const jsonPort = 4444;
const server = jsonServer.create();
const router = jsonServer.router("./server/db.json");
var cors = require("cors");
server.use(cors()); // Use this after the variable declaration

server.get("/products", (req, res) => {
  const { db } = router;
  let response;
  let productLimit = req.query.limit;
  // if (productLimit === "25") {
  //   response = db.get("twentyFiveProducts").value();
  //   console.log("TwentyFive", productLimit);
  // } else if (productLimit === "50") {
  //   console.log("fiftyProducts", productLimit);
  //   response = db.get("fiftyProducts").value();
  // } else if (productLimit === "75") {
  //   response = db.get("seventyFiveProducts").value();
  //   console.log("seventyFiveProducts", productLimit);
  // } else if (productLimit === "100") {
  //   response = db.get("hundredProducts").value();
  //   console.log("hundredProducts", productLimit);
  // } else {
  //   console.log("fetchProducts", productLimit);
  //   response = db.get("fetchProducts").value();
  // }

  response = db.get("hundredProducts").value();
  const slicedResponse = response.products.slice(0, productLimit)
  const newRes = {
    products: slicedResponse,
    total: 100,
    skip: 0,
    limit: productLimit
  }
  res.json(newRes);
});

server.listen(jsonPort, () => {
  console.log(`{Json Server Running on": ${jsonPort}}`);
});
