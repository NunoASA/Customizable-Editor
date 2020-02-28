import 'draft-js/dist/Draft.css';

import './App.css';

import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';

function EditorComponent() {
    const [editor, setEditor] = useState((EditorState.createEmpty()));

    return (
      <div className="editor" onClick={()=>console.log(editor)}>
        <Editor
          editorState={editor}
          onChange={(editor)=> setEditor(editor)}
        //   ref={(element) => { this.editor = element; }}
          placeholder="Tell your story"
          spellCheck
        />
      </div>
    );
}

export default EditorComponent;