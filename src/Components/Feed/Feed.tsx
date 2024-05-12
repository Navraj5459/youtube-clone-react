import React, { useEffect, useState } from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import {Item} from "./ConstFeed";
import TimeAgo from "../../TimeAgo";

interface Props {
  category: number;
}
const Feed = ({ category: propcategory }: Props) => {
  const [data, setData] = useState([Item]);
  const fetchData = async () => {
    const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${propcategory}&key=${API_KEY}`;
    await fetch(videoList_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  };
  useEffect(()=>{
    fetchData()
  }, [propcategory]);
  return (
    <div className="feed">
      {data.map((value, index)=>{
        return (
          <Link to={`video/${value?.snippet?.categoryId}/${value?.id}`} className="card">
            <img src={value?.snippet?.thumbnails?.high?.url} alt="" />
            <h2>
              {value?.snippet?.title}
            </h2>
            <h3>{value?.snippet?.channelTitle}</h3>
            <p>{value?.statistics?.viewCount} views &bull; <TimeAgo dateTime={value?.snippet?.publishedAt} /></p>
          </Link>
        )
      })}
    </div>
  );
};

export default Feed;
