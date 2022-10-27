// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Tag, Terms, User, Post, Story } = initSchema(schema);

export {
  Comment,
  Tag,
  Terms,
  User,
  Post,
  Story
};