import React from "react";
import PostForm from "./components/PostForm.tsx";

function App(){
  return(
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">悪口ノート</h1>
      <PostForm />
    </div>
  );
}

export default App;