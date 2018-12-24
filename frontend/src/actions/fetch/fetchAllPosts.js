import url from '../config';

const loadAllPosts = async () => {
  const result = await fetch(`${url}/api/posts`);
  return result.json();
};

export default loadAllPosts;
