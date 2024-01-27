import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {PostType} from "./types";
import Post from "./components/Post/Post";
import Loader from "./components/Loader/Loader";
import SendMsg from "./components/SendMsg/SendMsg";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log('3 seconds');
    //   // void res();
    // }, 3000);
    void res();
  }, []);

  const res = async () => {
    try {
      const firstResponse = await axios.get('http://146.185.154.90:8000/messages');
      const responseData = firstResponse.data;
      // console.log(responseData);
      // console.log(responseData[responseData.length - 1].datetime);
      // const lastDatetime = responseData[responseData.length - 2].datetime;
      // const targetResponse = await axios.get(`http://146.185.154.90:8000/messages?datetime=${lastDatetime}`);
      // const targetResponseData = targetResponse.data;
      const reversedData = responseData.reverse();
      setPosts((prevState) => [...prevState, ...reversedData]);
      setLoader(false);
    } catch {
      alert('Please check requested URL.');
    }
  };

  return (
    <>
      <SendMsg></SendMsg>
      {loader ? <Loader/> : null}
      {posts.map((post) => {
        return <Post
            id={post._id}
            key={post._id}
            author={post.author}
            message={post.message}
            date={post.datetime}
        />;
      })}
    </>
  );
}

export default App;
