// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Story, Comment, Tag, Post, Terms, User } = initSchema(schema);

export {
  Story,
  Comment,
  Tag,
  Post,
  Terms,
  User
};