import React from 'react';
import {useState}from "react"

const PostForm = () => {
    const [content, setContent] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        setSubmitted(true);
        console.log("悪口投稿内容:",content);
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="書き込め"
                className="w-full h-32 p-4 border rounded"
            />
            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                投稿する
            </button>
            {submitted && <p className="text-green-600">投稿しました</p>}
        </form>
    );
};

export default PostForm;
