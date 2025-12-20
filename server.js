const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  // عندما يرسل التحكم إشارة اهتزاز
  socket.on("vibrate-action", (data) => {
    // الخادم يعيد إرسالها لصفحة الاستقبال فوراً
    io.emit("perform-vibration", data);
  });
});

const listener = http.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});