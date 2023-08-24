import LIB from "useless-lib";

const SHARE_SCOPE = "default";

const loadComponent = async (scope, module) => {
  await __webpack_init_sharing__(SHARE_SCOPE);

  const container = window[scope];

  if (!container) {
    throw new Error("Invalid scope: " + scope);
  }

  await container.init(__webpack_share_scopes__[SHARE_SCOPE]);

  const factory = await container.get(module);
  const Module = factory();
  return Module;
};

const useDynamicScript = (url, onload) => {
  if (!url) return;

  const element = document.createElement("script");

  element.src = url;
  element.type = "text/javascript";
  element.async = true;

  element.onload = onload;

  element.onerror = () => {
    console.log("ERROR with", url);
  };

  document.head.appendChild(element);
};

window.addEventListener("load", () => {
  console.log("host", LIB.version);

  useDynamicScript("http://localhost:8081/remoteEntry.js", () => {
    loadComponent("client", "./module").then(({ default: module }) => {
      module();
    });
  });
});
