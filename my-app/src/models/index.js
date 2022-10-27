// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



<<<<<<< HEAD
const { Comment, Tag, Terms, User, Post, Story } = initSchema(schema);

export {
  Comment,
  Tag,
  Terms,
  User,
  Post,
  Story
=======
const { Story, Comment, Tag, Post, Terms, User } = initSchema(schema);

export {
  Story,
  Comment,
  Tag,
  Post,
  Terms,
  User
>>>>>>> 60c4501136423448532c4e663e703067213ebacd
};