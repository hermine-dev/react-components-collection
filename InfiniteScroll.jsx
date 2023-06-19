import React, { useEffect, useRef, useState } from 'react';


const InfiniteScroll = ({ fetchData }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading) {
        setIsLoading(true);
        fetchData(page)
          .then((newData) => {
            setData((prevData) => [...prevData, ...newData]);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
          })
          .catch((error) => {
            // Handle error
            setIsLoading(false);
          });
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, page]);

  return (
    <div className="infinite-scroll" ref={containerRef}>
      {/* Render data */}
    </div>
  );
}

export default InfiniteScroll;