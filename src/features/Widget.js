import React, { useEffect, useState } from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widget = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=6&apikey=572925d8a5487194b27036e2106222a7";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="widgets">
      <div className="header__info">
        <InfoIcon />
        <h2>Linkedin News</h2>
      </div>
      {news &&
        news.map((item, index) => (
          <div className="news" key={index}>
            <li className="title">
              <a href={item.url}>{item.title}</a>
            </li>
            {/* <div>
            <img src={item.urlToImage} alt="" />
          </div> */}
          </div>
        ))}
    </div>
  );
};

export default Widget;
