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
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview")
//     res.end(`This is OVERVIEW!${i}`);
//   else if (pathName === "/product") res.end(`This is PRODUCT${i}`);
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
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview")
//     res.end(`This is OVERVIEW!${i}`);
//   else if (pathName === "/product") res.end(`This is PRODUCT${i}`);
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

let i = 1;
const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8"
);
const dataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview")
    res.end(`This is OVERVIEW!${i}`);
  else if (pathName === "/product") res.end(`This is PRODUCT${i}`);
  else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h>");
  }
  i++;
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
