import React from 'react';
import NavBar from '../../shared/navBar/navBar';
import style from './postArticle.module.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

const PostArticle = () => {
    const [value, setValue] = useState("");

    const handleChange = (e, editor) => {
        const data = editor.getData()
        setValue(data);
    }

    return ( 
        <div>
            <NavBar navStatus={true} />
            <section className={style.paddingForNavbar}>
                <h1>checkBoxMargin</h1>
                <div className={style.editorContainer}>
                <CKEditor
                    editor={ClassicEditor} 
                    onChange={handleChange}
                />
                </div>

                {value}
            </section>
        </div>
    );
}
 
export default PostArticle;