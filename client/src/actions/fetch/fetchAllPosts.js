import url from '../config';

const loadAllPosts = async () => {
  console.log('fetching posts');
  const result = await fetch(`${url}/posts`);
  return result.json();
};

export default loadAllPosts;
