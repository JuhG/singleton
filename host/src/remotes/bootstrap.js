import LIB from "useless-lib";

console.log("host", LIB.version);

import("client/module").then(({ default: module }) => {
  module();
});
