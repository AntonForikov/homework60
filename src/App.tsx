import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import {Button, Card} from "react-bootstrap";
import {PostType} from "./types";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    void res();
    // console.log(posts);
  }, []);


  const res = async () => {
    try {
      const response = await axios.get('http://146.185.154.90:8000/messages');
      // console.log(response.data);
      setPosts((prevState) => [...prevState, ...response.data]);
      console.log(posts);
    } catch {
      alert('Please check requested URL.');
    }
  };

  return (
    <>
      <Post />
    </>
  );
}

export default App;
