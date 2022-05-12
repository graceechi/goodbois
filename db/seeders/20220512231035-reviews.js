'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        title: 'Okay',
        body: 'Rarely encounter other dogs here. Gravel/Dirt surface is messy if its rained within a month.',
        rating:3,
        parksId:1,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'One of my go-tos',
        body: 'Its medium sized, everyone there was nice!!   ',
        rating:4,
        parksId:1,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Could be better',
        body: 'Decent space for your pup to run but definitely no thrills.',
        rating:2,
        parksId:2,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Great find!!!',
        body: 'Being from the suburbs, this was a serendipitous find for my small lap dog and I.',
        rating:5,
        parksId:2,
        userId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '5 stars!!! Pup loves it',
        body: 'Hands down the best dog park Ive been to.',
        rating:5,
        parksId:2,
        userId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stay away',
        body: 'Horrible dog park.  No one picks up after their dogs. ',
        rating:1,
        parksId:3,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Maybe worth it',
        body: 'Nice oasis for pups within the city streets, but just average as far as dog parks go.',
        rating:2,
        parksId:3,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apples favorite park!!!',
        body: 'This park immediately got put into my favorites. Its perfect for new dog owners and seasoned ones.',
        rating:5,
        parksId:4,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nice park!',
        body: 'Good place to go if you want to be alone with your dog for a game of frisbee, fetch, or obedience drills.',
        rating:4,
        parksId:4,
        userId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Buddy said its ok',
        body: 'Decent space in the middle of city but it can definitely be better, e.g., grass instead of gravel.',
        rating:3,
        parksId:5,
        userId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Decent',
        body: 'Concrete and astroturf fenced play area. Astroturf is not the best material for picking up dog waste.',
        rating:3,
        parksId:5,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dont reccomend',
        body: 'Not the most comfortable place for dogs. Theres no grass anywhere in this park. The mural is lovely though.',
        rating:1,
        parksId:5,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'fun for people too!',
        body: 'The sea-saws seat up to 4 and play music.. so much fun at night!',
        rating:4,
        parksId:6,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Isolated',
        body: 'Rarely encounter other dogs here.',
        rating:2,
        parksId:6,
        userId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'good spot in the city',
        body: 'Clean and small, suitable for midsize and small size dogs.',
        rating:5,
        parksId:7,
        userId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Its okay',
        body: 'This is a pretty bad off leash park.  Hard to get to without a car,',
        rating:3,
        parksId:7,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'bippity boppity',
        body: 'A little bit run-down but nice and quiet',
        rating:3,
        parksId:8,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lovely park',
        body: 'I walked Ghost and Nala and the trees are beautiful and it was quiet.',
        rating:5,
        parksId:8,
        userId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Views and vibes',
        body: 'I love this place because it has great views ',
        rating:4,
        parksId:9,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'nice neighborhood park',
        body: ' great fenced in dog play area, parking on two sides',
        rating:3,
        parksId:9,
        userId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Like to wine and dine here',
        body: 'Good area,gorgeous views, great sunsets, and  well maintained Park.',
        rating:5,
        parksId:10,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Conflicting thoughts',
        body: 'Great park, dog park is small and muddy.',
        rating:2,
        parksId:10,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Was I here?',
        body: 'Dont remember',
        rating:2,
        parksId:11,
        userId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'ONE STAR!!!',
        body: 'Despite city laws against it, many allow their dogs to go off leash in the upper areas.',
        rating:1,
        parksId:11,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Spooky',
        body: 'Spooky',
        rating:3,
        parksId:12,
        userId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'If youre here its ok',
        body: 'Fairly large public space / park.',
        rating:2,
        parksId:12,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dont love it',
        body: 'People dont seem to pick up after their dogs or watch them.',
        rating:2,
        parksId:13,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'rocks = bad',
        body: 'I dont like the fact that there are rocks.',
        rating:1,
        parksId:13,
        userId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'ok',
        body: 'Super small but an okay place for a quick potty break.',
        rating:3,
        parksId:14,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
