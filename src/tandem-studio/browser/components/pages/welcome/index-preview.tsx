import "@tandem/uikit/scss";
import "reflect-metadata";
import { reactEditorPreview } from "@tandem/editor/browser/preview";
import { TandemStudioBrowserStore } from "tandem-studio/browser/stores";
import React =  require("React");
import ReactDOM = require("react-dom");
import { WelcomeComponent } from "./index";

export const createBodyElement = reactEditorPreview(() => {
  const store = new  TandemStudioBrowserStore();
  store.projectStarterOptions = [];
  return <WelcomeComponent store={store} />;
});