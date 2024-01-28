import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {PostType} from "./types";
import Post from "./components/Post/Post";
import Loader from "./components/Loader/Loader";
import SendMsg from "./components/SendMsg/SendMsg";
import {Alert} from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loader, setLoader] = useState(true);

  let url:string;

  useEffect(() => {
    setInterval(() => {
      void targetResponse(url);
    }, 3000);
    void getLastDate();
  }, []);

  const getLastDate = async () => {
    try {
      const firstResponse = await axios.get('http://146.185.154.90:8000/messages');
      const responseData = firstResponse.data;
      const lastDatetime = responseData[responseData.length - 1].datetime;
      url = `http://146.185.154.90:8000/messages?datetime=${lastDatetime}`;
      setLoader(false);
    } catch {
      alert('Please check requested URL.');
    }
  };

  const targetResponse = async (url: string) => {
    const res = await axios.get(url);
    const response = res.data;
    setPosts([...response.reverse()]);
  };

  return (
    <>
      <SendMsg></SendMsg>
      {loader ? <Loader/> : null}
      {posts.length ?
          posts.map((post) => {
            return <Post
                id={post._id}
                key={post._id}
                author={post.author}
                message={post.message}
                date={post.datetime}
            />;
          }) :
          !loader ? <Alert className="warning"><strong>There are no messages</strong></Alert> : null
      }
    </>
  );
}

export default App;
