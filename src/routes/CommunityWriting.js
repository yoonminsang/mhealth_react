import React, { Component } from "react";
import "./stylesheets/CommunityWriting.css";
import axios from "axios";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

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

class CommunityWriting extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", category_id: "1", content: "" };
    this.titleChange = this.titleChange.bind(this);
    // this.contentChange = this.contentChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.writingSubmit = this.writingSubmit.bind(this);
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  categoryChange(e) {
    this.setState({ category_id: e.target.value });
  }

  // contentChange(e) {
  //   this.setState({ content: e.target.value });
  // }

  goBack() {
    this.props.history.goBack();
  }

  writingSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const category_id = this.state.category_id;
    const content = this.state.content;
    console.log(content);
    const id = this.props.id;
    if (title === "") {
      alert("제목을 입력하세요");
      return false;
    }
    const self = this;
    axios({
      method: "post",
      url: "/server/community/create_process",
      data: {
        title: title,
        category_id: category_id,
        content: content,
        id: id,
      },
    })
      .then(function (res) {
        if (res.data.create === true) {
          let category;
          if (category_id === "1") {
            category = "training";
          } else if (category_id === "2") {
            category = "nutrition";
          }
          self.props.history.push(`/community/${category}/page/1/${res.data.post[0].id}`);
        } else {
          alert("시스템 오류. 다시 시도해주세요");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    if (this.props.logged === false) {
      this.props.history.goBack();
    }
    return (
      <div className="writing_inner">
        <form onSubmit={this.writingSubmit}>
          <p className="header">
            <input
              type="text"
              className="title"
              placeholder="제목을 입력하세요"
              onChange={this.titleChange}
              maxLength="10"
            ></input>
            <select name="category" value={this.state.category_id} onChange={this.categoryChange}>
              <option value="1">트레이닝</option>
              <option value="2">영양학</option>
            </select>
          </p>
          <div className="editorContainer">
            <CKEditor
              editor={ClassicEditor}
              data={this.state.content}
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                this.setState({ content: editor.getData() });
              }}
              // onChange={(event, editor) => {
              //   const data = editor.getData();
              //   console.log({ event, editor, data });
              // }}
              // onBlur={(editor) => {
              //   console.log("Blur.", editor);
              // }}
              // onFocus={(editor) => {
              //   console.log("Focus.", editor);
              // }}
              config={{
                width: 100,
                plugins: [
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
                  options: [8, 12, "default", 20, 24, 30],
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
          <input type="submit" value="저장"></input>
          <input type="button" value="취소" onClick={this.goBack.bind(this)}></input>
        </form>
      </div>
    );
  }
}

export default CommunityWriting;
