import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  RichTextEditorComponent,
  Toolbar,
  QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Editor' />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[Image, Link, Toolbar, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
