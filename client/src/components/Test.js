import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import { Box, Typography } from '@mui/material'
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
export default function Test() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );
    const staticToolbarPlugin = createToolbarPlugin();
    const { Toolbar } = staticToolbarPlugin
    const plugins = [staticToolbarPlugin]
    const editor = React.useRef(null);
    function focusEditor() {
        editor.current.focus();
    }
    const customStyle = {
        'UL': {
            listStyeType: 'disc',
            listStylePosition: 'inside',
            marginLeft: '15px'
        }
    }
    return (
        <>
            <Box
                sx={{
                    mt:1,
                    p: 1,
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: "5px",
                    minHeight: "300px"
                }}
            >
                <Box
                    sx={{ display: 'flex' }}
                >
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
                        }}
                        variant="p"
                        fontWeight={550}
                        sx={{ cursor: "pointer" }}>
                        <FormatBoldIcon />
                    </Typography>
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
                        }}
                        variant="p"
                        fontWeight={550}
                        sx={{ cursor: "pointer" }}>
                        <FormatItalicIcon />
                    </Typography>
                    <Typography
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
                        }}
                        variant="p"
                        fontWeight={550}
                        sx={{ cursor: "pointer" }}>
                        <FormatUnderlinedIcon />
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
        </>
    );
}