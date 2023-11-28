import React, { useEffect } from "react";

const Reviews: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://https-alleiaokon-rf.disqus.com/embed.js";
    script.setAttribute("data-timestamp", String(+new Date()));
    document.body.appendChild(script);
  }, []);

  return <div id="disqus_thread"></div>;
};

export default Reviews;
