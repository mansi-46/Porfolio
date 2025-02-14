export const getImageUrl = (path) => {
  console.log("Image Path:", path); // Debugging line
  const url = new URL(`${path}`, import.meta.url).href;
  console.log("Resolved URL:", url); // Debugging line
  return url;  
  };