import React,{useCallback, useEffect, useState} from 'react'
import "quill/dist/quill.snow.css"
import Quill from 'quill';
import { io } from 'socket.io-client'

const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean'] 
]

const TextEditor = () => {
    const [socket, setSocket] = useState();
    const [quill, setQuill] = useState();

    useEffect(()=> {
        const s = io("http://localhost:3001");
        setSocket(s);
        return ()=> {
            s.disconnect();

        }
    },[])

    useEffect(()=> {
        if( socket==null || quill==null) return
        const handler = (delta, source)=> {
            if(source!== 'user') return
            socket.emit("send-changes", delta)
        }
        quill.on('text-change', handler )

        return () => {
            quill.off('text-change', handler)
        }
}, [socket, quill])

useEffect(()=> {
    if( socket==null || quill==null) return
    const handler = (delta)=> {
      quill.updateContents(delta)
    }
    socket.on('recieve-changes', handler )

    return () => {
        quill.off('recieve-changes', handler)
    }
}, [socket, quill])


    const wrapperRef = useCallback(wrapper => {
        if(wrapper ==null) return
//fgedfedekjfj j
        wrapper.innerHTML = " "
        const editor = document.createElement("div")
        wrapper.append(editor)
        const q = new Quill(editor, {theme: "snow" , modules: {toolbar : TOOLBAR_OPTIONS}})
        setQuill(q);
    }, [])


  return (
    <div className="container" ref={wrapperRef} ></div>
  )
}

export default TextEditor
