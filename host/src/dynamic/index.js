import { useDynamicScript, loadComponent } from "./helpers";
import LIB from "useless-lib";

console.log("host", LIB.version);

useDynamicScript("http://localhost:8081/remoteEntry.js", () => {
  loadComponent("client", "./module").then(({ default: module }) => {
    module();
  });
});
