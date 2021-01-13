import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import pagesList from "./paginas.json";

const pages = pagesList.map(page => {
  return {
    path: page.path,
    title: page.title,
    content: pageLoader(() => import("./" + page.content))
  };
});

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
