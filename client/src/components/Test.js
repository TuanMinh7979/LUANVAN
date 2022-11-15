import React, { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import { Box, Button, Typography } from '@mui/material'
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
export default function Test() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [editorState2, setEditorState2] = useState(() => EditorState.createEmpty())
    const staticToolbarPlugin = createToolbarPlugin();
    const [activeUtils, setActiveUtils] = useState({
        bold: false,
        italic: false,
        underline: false,
        list: false
    })
    function toggleRichUtil(util) {
        switch (util) {
            case 'BOLD':
                console.log(util)
                setActiveUtils({
                    ...activeUtils,
                    bold: !activeUtils.bold,
                })
                break;
            case 'ITALIC':
                setActiveUtils({
                    ...activeUtils,
                    italic: !activeUtils.italic,
                })
                break;
            case 'UNDERLINE':
                setActiveUtils({
                    ...activeUtils,
                    underline: !activeUtils.underline,
                })
                break;
            case 'UL':
                setActiveUtils({
                    ...activeUtils,
                    list: !activeUtils.list,
                })
                break;

            default:
                break;
        }
    }
    const { Toolbar } = staticToolbarPlugin
    const plugins = [staticToolbarPlugin]
    const editor = React.useRef(null);
    function focusEditor() {
        editor.current.focus();
    }
    const customStyle = {

    }
    return (
        <>
            <Box
                sx={{
                    mt: 1,
                    p: 1,
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: "5px",
                    minHeight: '200px'
                }}
            >
                <Box
                    sx={{ display: 'flex', width: '10%', justifyContent: 'space-around' }}
                >
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
                            toggleRichUtil('BOLD')
                        }}
                        variant="p"
                        fontWeight={550}
                        
                        sx={{ cursor: "pointer" }}>
                        <FormatBoldIcon color={activeUtils.bold?'success':''} />
                    </Typography>
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
                            toggleRichUtil('ITALIC')
                        }}
                        variant="p"
                        fontWeight={550}
                        sx={{ cursor: "pointer" }}>
                        <FormatItalicIcon  color={activeUtils.italic?'success':''}/>
                    </Typography>
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
                            toggleRichUtil('UNDERLINE')
                        }}
                        variant="p"
                        fontWeight={550}
                        sx={{ cursor: "pointer" }}>
                        <FormatUnderlinedIcon  color={activeUtils.underline?'success':''}/>
                    </Typography>
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'))
                            toggleRichUtil('UL')
                        }}
                        variant="p"
                        fontWeight={550}
                        sx={{ cursor: "pointer" }}>
                        <FormatListBulletedIcon  color={activeUtils.list?'success':''} />
                    </Typography>
                </Box>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={setEditorState}
                    placeholder="Write something!"
                    plugins={[plugins]}
                    customStyleMap={customStyle}
                />
            </Box>
            {/* displaydata */}
            {/* <Button
                onClick={() => {
                    // console.log(convertToRaw(JSON.stringify(editorState.getCurrentContent())))
                    setEditorState2(EditorState.createWithContent(convertFromRaw(convertToRaw(editorState.getCurrentContent()))))
                }}
            >Click</Button>
            <Editor
                readOnly={true}
                editorState={editorState2}
            /> */}
        </>
    );
}