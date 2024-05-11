import React, { useState } from "react";
import _ContentEditable, { ContentEditableEvent } from "react-contenteditable";

type PROPS = {
  html: string;
  disabled?:boolean
};

const ContentEditable = (props: PROPS) => {
  const { html, disabled } = props;
  const [_html, setHtml] = useState(html);

  const handleChange = (evt: ContentEditableEvent) => {
    setHtml(evt.target.value);
  };

  return (
    <_ContentEditable
      html={_html}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

export default ContentEditable;
