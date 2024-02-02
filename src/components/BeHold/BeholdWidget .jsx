import React, { useEffect } from "react";

const BeholdWidget = () => {
  useEffect(() => {
    // Código del script
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <figure data-behold-id="5fVWWYFSgCfNTuoRnFBk"></figure>;
};

export default BeholdWidget;
