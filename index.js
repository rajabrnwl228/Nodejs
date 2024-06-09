const fs = require("fs");
const url = require("url");
const http = require("http");

// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error!");
//   console.log(data1);
//   fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     //   console.log(data2);
//     fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//     });
//   });
// });

//Lecture -11 Creating server

// let i = 1;
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.end(`Hello from the server!${i}`);
//   i++;
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to requests on port 8000");
// });

//lecture-12 Routing
// let i = 1;
// const server2 = http.createServer((req, res) => {
//   const pathname = req.url;
//   if (pathname === "/" || pathname === "/overview")
//     res.end(`This is OVERVIEW!${i}`);
//   else if (pathname === "/product") res.end(`This is PRODUCT${i}`);
//   else {
//     res.writeHead(404);
//     res.end("Page Not FOund");
//   }
//   i++;
// });
// server2.listen(8000, "127.0.0.1", () => {
//   console.log("listening to requests on port 8000");
// });

// const server3 = http.createServer((req, res) => {
//   const pathname = req.url;
//   if (pathname === "/" || pathname === "/overview")
//     res.end(`This is OVERVIEW!${i}`);
//   else if (pathname === "/product") res.end(`This is PRODUCT${i}`);
//   else {
//     res.writeHead(404, {
//       "content-type": "text/html",
//     });
//     res.end("<h1>Page Not Found</h>");
//   }
//   i++;
// });
// server3.listen(8000, "127.0.0.1", () => {
//   console.log("listening to requests on port 8000");
// });

//Lec-13 API

// let i = 1;
// const data = fs.readFileSync(
//   `${__dirname}/starter/dev-data/data.json`,
//   "utf-8"
// );
// const dataObj = JSON.parse(data);
// const server = http.createServer((req, res) => {
//   const pathname = req.url;
//   if (pathname === "/" || pathname === "/overview")
//     res.end(`This is OVERVIEW!${i}`);
//   else if (pathname === "/product") res.end(`This is PRODUCT${i}`);
//   else if (pathname === "/api") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(data);
//   } else {
//     res.writeHead(404, {
//       "content-type": "text/html",
//     });
//     res.end("<h1>Page Not Found</h>");
//   }
//   i++;
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to requests on port 8000");
// });

// //Lect-14,15
// const replaceTemplate = (temp, product) => {
//   let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//   output = output.replace(/{%IMAGE%}/g, product.image);
//   output = output.replace(/{%PRICE%}/g, product.price);
//   output = output.replace(/{%FROM%}/g, product.from);
//   output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//   output = output.replace(/{%QUANTITY%}/g, product.quantity);
//   output = output.replace(/{%DESCRIPTION%}/g, product.description);
//   output = output.replace(/{%ID%}/g, product.id);
//   if (!product.organic)
//     output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
//   return output;
// };
// const tempOverview = fs.readFileSync(
//   `${__dirname}/starter/templates/template-overview.html`,
//   "utf-8"
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/starter/templates/template-card.html`,
//   "utf-8"
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/starter/templates/template-overview.html`,
//   "utf-8"
// );

// const data = fs.readFileSync(
//   `${__dirname}/starter/dev-data/data.json`,
//   "utf-8"
// );
// const dataObj = JSON.parse(data);

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   const pathname = req.url;

//   //Overview page
//   if (pathname === "/" || pathname === "/overview") {
//     res.writeHead(200, { "content-type": "text/html" });
//      const cardsHtml = dataObj
//     .map((el) => replaceTemplate(tempCard, el))
//     .join(" ");
//     let output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
//     res.end(output);
//   }
//   //Product page
//   else if (pathname === "/product") res.end(`This is PRODUCT`);
//   //API
//   else if (pathname === "/api") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(data);
//   }
//   //Not Found
//   else {
//     res.writeHead(404, {
//       "content-type": "text/html",
//     });
//     res.end("<h1>Page Not Found</h1>");
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to requests on port 8000");
// });

//Lect-16
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};
const tempOverview = fs.readFileSync(
  `${__dirname}/starter/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/starter/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/starter/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8"
);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(url.parse(req.url, true));
  const { query, pathname } = url.parse(req.url, true);
  // const pathname = req.url;
  //Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "content-type": "text/html" });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join(" ");
    let output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
  }
  //Product page
  else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } //API
  else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  }
  //Not Found
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
