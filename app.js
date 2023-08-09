var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var event_listRouter = require("./routes/event-list");
var event_singleRouter = require("./routes/event-single");
var scheduleRouter = require("./routes/schedule");
var speaker_one = require("./routes/speaker-one");
var speaker_two = require("./routes/speaker-two");
var speaker_single = require("./routes/speaker-single");
var Gallery = require("./routes/gallery");
var Pricing = require("./routes/pricing");
var Faq = require("./routes/faq");
var login = require("./routes/login");
var Blog = require("./routes/blog");
var Blog_News = require("./routes/blog-news");
var Blog_Details = require("./routes/blog-details");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/event-list", event_listRouter);
app.use("/event-single", event_singleRouter);
app.use("/schedule", scheduleRouter);
app.use("/speaker-one", speaker_one);
app.use("/speaker-two", speaker_two);
app.use("/speaker-single", speaker_single);
app.use("/gallery", Gallery);
app.use("/pricing", Pricing);
app.use("/faq", Faq);
app.use("/login-register", login);
app.use("/blog-gird", Blog);
app.use("/blog-news", Blog_News);
app.use("/blog-details", Blog_Details);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
