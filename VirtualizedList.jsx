import React, { useEffect, useState } from 'react';


const VirtualizedList = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 500;
  const itemHeight = 50;

  useEffect(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + Math.ceil(containerHeight / itemHeight);
    setVisibleItems(items.slice(startIndex, endIndex));
  }, [items, scrollTop]);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };

  return (
    <div
      className="virtualized-list"
      style={{ height: `${containerHeight}px`, overflowY: 'scroll' }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${items.length * itemHeight}px`, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div key={index} style={{ position: 'absolute', top: `${index * itemHeight}px` }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
