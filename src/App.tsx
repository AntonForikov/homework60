import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {PostType} from "./types";
import Post from "./components/Post/Post";
import Loader from "./components/Loader/Loader";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    void res();
    console.log('Posts:', posts);
  }, []);

  const res = async () => {
    try {
      const response = await axios.get('http://146.185.154.90:8000/messages');
      setPosts((prevState) => [...prevState, ...response.data]);
      setLoader(false);
    } catch {
      alert('Please check requested URL.');
    }
  };

  return (
    <>
      {loader ? <Loader/> : null}
      {posts.map((post, index) => {
        return <Post
            key={`post-${index}`}
            author={post.author}
            message={post.message}
            date={post.datetime}
        />;
      })}
    </>
  );
}

export default App;
