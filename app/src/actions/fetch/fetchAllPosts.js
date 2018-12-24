const loadAllPosts = async () => {
  const result = await fetch('http://142.93.84.63:8080/api/posts');
  return result.json();
};

export default loadAllPosts;
