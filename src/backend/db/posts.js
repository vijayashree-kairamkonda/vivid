import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    username: "vijayashree",
    bio:"what is meant to be will find a way",
    img:"https://avatars.githubusercontent.com/u/75258563?v=4",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    likes: {
      likeCount: 90,
      likedBy: [],
      dislikedBy: [],
    },
    
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "vivekgudipudi",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "flashhhh",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    username: "vivekgudipudi",
    bio:" this is my bio",
    img:"https://avatars.githubusercontent.com/u/37794298?v=4",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.",
    likes: {
      likeCount: 100,
      likedBy: [],
      dislikedBy: [],
    },
    

    comments: [
      {
        _id: uuid(),
        username: "flashhhh",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "vijayashree",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "flashhhh",
    bio:"I'm a goooddddd doggyyy",
    img:"https://static.vecteezy.com/system/resources/previews/006/936/406/non_2x/cute-golden-retriever-puppy-smiling-cartoon-illustration-vector.jpg",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    likes: {
      likeCount: 782,
      likedBy: [],
      dislikedBy: [],
    },
    
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "vivekgudipudi",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "narendramodibjp",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    username: "narendramodibjp",
    bio:"Prime minister of India",
    img:"https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
    content:
      "This is a great sign, reflective of the collective commitment of 130 crore Indians to strengthen our Nari Shakti.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "vijayashree",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "flashhhh",
        text: "Wowww pawrfect!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
