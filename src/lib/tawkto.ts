const TawkTo = {
    initialize: () => {
      const Tawk_API = window.Tawk_API || {};
      Tawk_API.visitor = {
        name: "Anonymous",
      };
  
      const tawkToScript = document.createElement("script");
      tawkToScript.setAttribute("src", `https://embed.tawk.to/6403772a31ebfa0fe7f0ab9a/1gqmoj07n`);
      tawkToScript.async = true;
      document.head.appendChild(tawkToScript);
    },
  };
  
  export default TawkTo;
  