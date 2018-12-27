import { types, flow } from 'mobx-state-tree'; // A
import fetchAllPosts from '../actions/fetch/fetchAllPosts';

const Recipe = types
  .model('Recipe', {
    id: types.number,
    content: types.string
  })
  .actions(self => ({
    incrementId() {
      self.id = self.id + 1;
    }
  }));

export const PostStore = types
  .model('Posts', {
    posts: types.array(Recipe)
  })
  .actions(self => ({
    afterCreate() {
      self.load();
    },
    load: flow(function* load() {
      self.posts = [];
      self.state = 'pending';
      try {
        self.posts = yield fetchAllPosts();
        self.state = 'done';
      } catch (error) {
        console.error('Failed to fetch projects', error);
        self.state = 'error';
      }
    })
  }));

export const store = PostStore.create({
  posts: [
    {
      id: 1,
      content: 'Title',
    },
    {
      id: 2,
      content: 'Title 2',
    }
  ]
});

export const simpleStore = PostStore.create({
  id: 1,
  title: 'Simple Title',
  description: 'Simple Description'
});

setInterval(() => {
  store.posts[0].incrementId();
}, 4000);

setInterval(() => {
  simpleStore.incrementId();
}, 2000);
