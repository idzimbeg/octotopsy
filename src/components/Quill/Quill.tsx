import React, { useEffect, useState } from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";

import { QuillProps } from "./types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useController } from "react-hook-form";

export const Quill = ({
  name,
  placeholder,
  control,
  widthFull = false,
  containerClass,
  label,
  labelClass,
  error,
  errorClass,
  errorMessage,
  errorMessageClass,
  success,
  successClass,
  successMessage,
  successMessageClass,
  ...otherProps
}: QuillProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [updated, setUpdated] = useState(false);
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    defaultValue: "",
    name,
  });

  useEffect(() => {
    if (!updated) {
      const defaultValue = value || "";
      const blocksFromHtml = htmlToDraft(defaultValue);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, [value, updated]);

  const onEditorStateChange = (e: EditorState) => {
    setUpdated(true);
    setEditorState(e);

    const retVal = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    return onChange(retVal);
  };

  return (
    <div
      className={twMerge(
        clsx(
          "editor border border-sky-500 min-h-[400px] p-5 rounded-md",
          { "w-full": widthFull },
          {
            [`border-red-300 text-red-900 focus:border-red-500 focus:outline-none focus:ring-red-500 ${errorClass}`]:
              error,
          },
          {
            [`border-green-300 text-green-900 focus:border-green-500 focus:outline-none focus:ring-green-500 ${successClass}`]:
              success,
          },
          containerClass
        )
      )}
    >
      <input
        {...otherProps}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
        className="hidden"
      />
      <Editor
        placeholder={placeholder}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="toolbarClassName"
      ></Editor>

      {errorMessage && (
        <p
          className={twMerge(
            clsx("mt-1 text-sm text-red-600", errorMessageClass)
          )}
        >
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p
          className={twMerge(
            clsx("mt-1 text-sm text-green-600", successMessageClass)
          )}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};
