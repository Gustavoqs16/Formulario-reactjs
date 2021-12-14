import React from "react";
import { FileUploader } from "react-drag-drop-files";

function DragDrop(props) {
  return (
    <FileUploader handleChange={props.handleChange} name="file" types={props.fileTypes} />
  );
}

export default DragDrop;