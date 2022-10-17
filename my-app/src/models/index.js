// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Followers, User, Post, Influencer, Likes, Comment, Followings, Image } = initSchema(schema);

export {
  Followers,
  User,
  Post,
  Influencer,
  Likes,
  Comment,
  Followings,
  Image
};