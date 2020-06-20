import React from "react";
import "./ex.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Title from "@ckeditor/ckeditor5-heading/src/title";

import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";

import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import List from "@ckeditor/ckeditor5-list/src/list";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";

import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageTextAlternative from "@ckeditor/ckeditor5-image/src/imagetextalternative";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";

import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";

import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import CKFindAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="editorContainer">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(editor) => {
            console.log("Focus.", editor);
          }}
          config={{
            width: 100,
            plugins: [
              Title,
              Heading,
              Alignment,
              Bold,
              Italic,
              Underline,
              Strikethrough,
              Indent,
              IndentBlock,
              Highlight,
              FontFamily,
              FontSize,
              FontColor,
              FontBackgroundColor,
              HorizontalLine,
              List,
              TodoList,
              Link,
              Code,
              BlockQuote,

              Image,
              ImageToolbar,
              ImageCaption,
              ImageStyle,
              ImageTextAlternative,
              ImageUpload,
              ImageResize,

              MediaEmbed,
              Table,
              TableToolbar,
              CodeBlock,

              Autoformat,
              Essentials,
              Paragraph,

              // EasyImage,
              // CKFindAdapter,
              CKFinder,
            ],
            toolbar: {
              items: [
                "heading",
                "|",
                "alignment",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "|",
                "outdent",
                "indent",
                "|",
                "highlight",
                "fontFamily",
                "fontsize",
                "fontcolor",
                "fontbackgroundcolor",
                "|",
                "horizontalLine",
                "|",
                "bulletedList",
                "numberedList",
                "todoList",
                "|",
                "link",
                "code",
                "blockQuote",
                "|",
                "imageUpload",
                "mediaEmbed",
                "|",
                "insertTable",
                "codeblock",
                "|",
                "undo",
                "redo",
              ],
            },

            title: {
              placeholder: "제목을 입력하세요",
            },
            placeholder: "내용을 입력하세요",
            heading: {
              options: [
                { model: "heading1", view: "h1", title: "제목1", class: "ck-heading_heading1" },
                { model: "heading2", view: "h2", title: "제목2", class: "ck-heading_heading2" },
                { model: "heading3", view: "h3", title: "제목3", class: "ck-heading_heading3" },
                { model: "paragraph", title: "본문", class: "ck-heading_paragraph" },
              ],
            },
            fontSize: {
              options: [9, 11, 13, "default", 17, 19, 21],
            },
            table: {
              contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
            image: {
              resizeUnit: "px",
              toolbar: ["imageTextAlternative"],
              styles: ["full", "alignLeft", "alignCenter", "alignRight"],
            },
            ckfinder: {
              // Upload the images to the server using the CKFinder QuickUpload command.
              uploadUrl:
                "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
            },
            //     fontFamily: {
            //     options: [
            //         'default',
            //         'Ubuntu, Arial, sans-serif',
            //         'Ubuntu Mono, Courier New, Courier, monospace'
            //     ]
            // },
            // image: {
            //   toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"],
            // },
          }}
        />
      </div>
    );
  }
}

export default App;
