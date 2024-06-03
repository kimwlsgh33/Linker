// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Story, Comment, Term, Post, User } = initSchema(schema);

export {
  Tag,
  Story,
  Comment,
  Term,
  Post,
  User
};