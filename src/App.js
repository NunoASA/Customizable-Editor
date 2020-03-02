import 'draft-js/dist/Draft.css';
import './App.css';

import React, { useState } from 'react';
import {Editor, EditorState, CompositeDecorator} from 'draft-js';
import {RichUtils} from 'draft-js';

function EditorComponent() {
    const [editorRef, setEditorRef] = useState()
    const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));

    function handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
        setEditorState(newState);
            // return 'handled';
        }
        return 'not-handled';
    }

    return (
      <div className="editor" onClick={()=> editorRef.focus()}>
        <Editor
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            ref={(element) => setEditorRef(element)}
            placeholder="Tell your story"
            spellCheck
        />
      </div>
    );
}

export default EditorComponent;

// ---------------------------------------------


const createDecorator = () =>
    new CompositeDecorator([
        {
        strategy: handleStrategy,
        component: Decorated
        }
]);

function handleStrategy(contentBlock, callback) {
    findWithRegex(words, contentBlock, callback);
}


function findWithRegex(words, contentBlock, callback) {
    const text = contentBlock.getText();

    words.forEach(word => {
        const match = text.match(word);
        if (match) {
            callback(match.index, match.index + match[0].length);
        }
    });
}

const words = ["hello", "world"];

const Decorated = ({ children }) => {
    return <h2 style={{ background: "red" }}>{children}</h2>;
};