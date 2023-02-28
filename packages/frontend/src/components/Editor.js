import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

export default function Editor() {
  const editor = new EditorJS({

    tools: {

      header:{
        class: Header,
        inlineToolbar: ['link']
      },

      list: {
        class: List,
        inlineToolbar: [
          'link',
          'bold'
        ]
      }
      
      
    }

    

    
    

  });

  

  return (
    <div>
      <h1>My Editor</h1>
      <input type="button" value="save" id="saveBtn"></input>

      <div id="editorjs"></div>
      
    </div>
  );
}
