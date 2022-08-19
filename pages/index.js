import Head from "next/head";
import axios from "axios";
import React, { useState, useEffect } from "react";
export default function Home() {
  const [publications, setPublications] = useState([]);
  const [albumNumber, setAlbumnumber] = useState(1);
  useEffect(() => {
    axios.get(`/api/getImages/${albumNumber}`).then((response) => {
      setPublications(response.data);
    });
  }, [albumNumber]);
  let pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handlePageNumChange = (pageNum) => {
    setAlbumnumber(pageNum);
  };
  return (
    <div className="main">
      <Head>
        <title>Images</title>
      </Head>

      {publications.map((publication) => (
        <React.Fragment key={publication.id}>
          <h5>{publication.id}</h5>
          <h4>{publication.title}</h4>
          <img src={publication.url} />
        </React.Fragment>
      ))}
      <div className="pageNumbers">
        {pageNumbers.map((pageNum) => (
          <h3
            key={pageNum}
            className="pageNum"
            onClick={() => handlePageNumChange(pageNum)}
          >
            {pageNum}
          </h3>
        ))}
      </div>
    </div>
  );
}
