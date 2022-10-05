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
  {
    _id: uuid(),
    firstName: "Narendra",
    lastName: "Modi",
    username: "narendramodibjp",
    password: "modimodi",
    profileIMG:"https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "Prime minister of India",
    githubURL : 'https://github.com/modimodimodi'
  },
  {
    _id: uuid(),
    firstName: "KCR",
    lastName: "Telangana",
    username: "KCR",
    password: "kcrkcrkcr",
    profileIMG:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kalvakuntla_Chandrashekar_Rao.png/220px-Kalvakuntla_Chandrashekar_Rao.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "Chief minister of Telangana",
    githubURL : 'https://github.com/kkccrr'
  },
  {
    _id: uuid(),
    firstName: "KTR",
    lastName: "Telangana",
    username: "KTR",
    password: "ktrktrktr",
    profileIMG:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Kalvakuntla_Taraka_Rama_Rao.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "Minister for Municipal Administration & Urban Development, Industries & Commerce, and Information Technology of Telangana",
    githubURL : 'https://github.com/kkttrr'
  },
];
