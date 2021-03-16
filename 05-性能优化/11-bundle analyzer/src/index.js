import $ from "jquery";

$(".red").click(function () {
  const { chunk } = import("./util");
  console.log(chunk([1, 1, 2], 2));
});
