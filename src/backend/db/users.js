import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "vivek",
    lastName: "gudipudi",
    username: "vivekgudipudi",
    password: "vivek",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    githubURL : "https://github.com/vivekgudipudi",
    bio : "this is my bio",
    profileIMG : "https://avatars.githubusercontent.com/u/37794298?v=4",

  },
  {
    _id: uuid(),
    firstName: "vijaya",
    lastName: "shree",
    username: "vijayashree",
    password: "vijayashree",
    profileIMG:"https://avatars.githubusercontent.com/u/75258563?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : 'what is meant to be will find a way',
    githubURL : 'https://github.com/vijayashree-kairamkonda'
  },
  {
    _id: uuid(),
    firstName: "Flash",
    lastName: "Kairamkonda",
    username: "flashhhh",
    password: "flash",
    profileIMG:"https://static.vecteezy.com/system/resources/previews/006/936/406/non_2x/cute-golden-retriever-puppy-smiling-cartoon-illustration-vector.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "I'm a goooddddd doggyyy",
    githubURL : 'https://github.com/flsjh'
  },
];
