'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Parks', [
        { 
          name: 'Newtown Dream Dog Park',
          city: 'Johns Creek',
          state: 'Georgia',
          description: 'This whimsical doggy wonderland got a makeover sponsored by Beneful and became one of the most beautiful dog parks in the country.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Beau\'s Dream Dog Park at Buchanan Park',
          city: 'Lancaster',
          state: 'Pennsylvania',
          description: 'Through the Beneful Dream Dog Park Project, the company built and improved multiple dog parks around the country',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Montrose Dog Beach', 
          city: 'Chicago',
          state: 'Illinois',
          description: 'Chicagoans and their dogs can escape to this dedicated, fenced in dog beach along Lake Michigan.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 3.83,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false
        },
        { 
          name: 'Bea Arthur Dog Park',
          city: 'Norfolk',
          state: 'Virginia',
          description: 'Named for "Golden Girls" actress Bea Arthur, this free, 24/7 dog park is most notable for its access ramp to the Elizabeth River, where pups can doggie paddle to their heart\'s content',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1.2,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Jackass Acres K-9 Korral',
          city: 'New River',
          state: 'Arizona',
          description: 'The members-only Jackass Acres is the nation\'s first green dog park. Its sustainable practices include structures built from recycled materials and fallen trees, solar-powered lights and fountains, biodegradable poop bags and NFL-grade artificial turf.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 2.5,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Schuylkill River Park Dog Run',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          description: 'This popular, turfed dog park has a can\'t-beat location with beautiful views of the Philadelphia skyline.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1.5,
          parkingLot: true,
          wasteDisposal: true, 
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Pilgrim Dog Park',
          city: 'Provincetown',
          state: 'Massachusetts',
          description: 'This dog park isn\'t aesthetically pleasing simply because it\'s clean; local artists designed pet-friendly sculptures and structures dogs can play on.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1.3,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Beneful Dream Dog Park',
          city: 'Alabaster',
          state: 'Alabama',
          description: 'Alabaster resident Jenny Wilson won the city of Alabaster this dreamy $500,000 dog park by winning a national essay contest by writing about her stray dog, Honey Belle, who she found on the park\'s site',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1.2,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Dog Beach',
          city: 'Fort Myers Beach',
          state: 'Florida',
          description: 'Give you dogs a little slice of paradise at this tranquil, secluded dog beach surrounded by mangrove trees.',
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 32,
          parkingLot: false,
          wasteDisposal: false,
          agilityEquipment: false,
          shaded: false,
        },
        { 
          name: 'Rosie\'s Dog Beach',
          city: 'Long Beach',
          state: 'California',
          description: 'For almost 20 years, Long Beach has had a designed zone for dogs to run free on the beach. In fact, it\'s the only off-leash dog beach in L.A. County.',
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 2.9,
          parkingLot: false,
          wasteDisposal: false,
          agilityEquipment: false,
          shaded: false,
        },
        { 
          name: 'Warren G. Magnuson Dog Park',
          city: 'Seattle',
          state: 'Washington',
          description: 'Seattle has many dog parks, but Magnuson is the only one with water access.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 8.6,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Shaggy Pines Dog Park',
          city: 'Grand Rapids',
          state: 'Michigan',
          description: 'According to Rover.com, this membership-based 20-acre park is "like Disneyland for your dog."',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 20,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Thousand Acres Dog Park',
          city: 'Troutdale',
          state: 'Oregon',
          description: 'Sandy River Delta Park, known as Thousand Acres to locals because of its size, is an off-leash park that will tucker out even the most energetic of pups thanks to its long wooded walking paths and water access for splashing and swimming.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 1400,
          parkingLot: false,
          wasteDisposal: false,
          agilityEquipment: false,
          shaded: false
        },
        { 
          name: 'Fiesta Island',
          city: 'San Diego',
          state: 'California',
          description: 'Just off the coast of San Diego in Mission Bay, Fiesta Island allows dogs off-leash anywhere in the park.',
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 470,
          parkingLot: false,
          wasteDisposal: false,
          agilityEquipment: false,
          shaded: false
        },
        { 
          name: 'Shawnee Mission Off-Leash Dog Area',
          city: 'Shawnee',
          state: 'Kansas',
          description: 'One of the most visited dog parks in the state, features a lake for swimming and nature trails through grasslands and wooded areas.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 44,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false,
        },
        { 
          name: 'Thornberry Off-Leash Dog Park',
          city: 'Iowa City',
          state: 'Iowa',
          description: 'This 11-acre dog park has four separate sections: a fenced in pond area, a playground, a small dog area and a run perfect for training or for giving more shy dogs room to roam.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 11,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false
        },
        { 
          name: 'Phil Hardberger Park',
          city: 'San Antonio',
          state: 'Texas',
          description: 'This 311-acre park is one of the most popular in the rapidly growing city of San Antonio.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 3.3,
          parkingLot: true, 
          wasteDisposal: true,
          agilityEquipment: true, 
          shaded: false
        },
        { 
          name: 'Nola City Bark',
          city: 'New Orleans',
          state: 'Louisiana',
          description: 'Described by some as a country club for dogs, Nola City Bark requires a permit and key card, and the yearly fees surely contribute to the park\'s cleanliness and features.',
          smallDogArea: true,
          doggieWaterFountain: true, 
          fullyFenced: true,
          parkSize: 4.6,
          parkingLot: true,
          wasteDisposal: true, 
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Dogwood Play Park',
          city: 'Jacksonville',
          state: 'Florida',
          description: 'At 42 acres, Dogwood Play Park is one of the world\'s largest fenced dog parks with plenty for visitors and members to see and do.',
          smallDogArea: true,
          doggieWaterFountain:  true,
          fullyFenced: true,
          parkSize: 42, 
          parkingLot: true,
          wasteDisposal: true, 
          agilityEquipment: true, 
          shaded: false
        },
        { 
          name: 'Madison Square Park Dog Run',
          city: 'New York City',
          state: 'New York',
          description: 'While certainly not the most spacious, this cute Manhattan dog park does have one major advantage: location, location, location.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced:  true,
          parkSize: 65,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Washington Dog Park',
          city: 'Cincinnati',
          state: 'Ohio',
          description: 'This 12,000-square-foot fenced dog park has special features just for Fido.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 0.3,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true,
        },
        { 
          name: 'Nampa Dog Park',
          city: 'Nampa',
          state: 'Idaho',
          description: 'Nampa Dog Park has three separate areas for big, small and senior dogs with fun features such as a water area with rocks, fire hydrants and cute decorative street signs.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 5.8,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Hawaii Kai Dog Park',
          city: 'Honolulu',
          state: 'Hawaii',
          description: 'Spacious and clean, the park\'s real draws are the spectacular views and the adorable meetups that take place for different breeds, including goldendoodles, corgis, beagles, French bulldogs and shiba inus.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 2,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false
        },
        { 
          name: 'Point Isabel Regional Shoreline and Dog Park',
          city: 'Richmond',
          state: 'California',
          description: 'Besides the spaciousness and gorgeous views, the park has an on-site cafe dishing puppy and human treats, as well as a dog wash and retail store.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 23,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Zilker Park',
          city: 'Austin',
          state: 'Texas',
          description: 'This 350-acre preserve is an outdoor playground located just south of downtown Austin.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 361,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true,
        },
        { 
          name: 'Freedom Bark Park',
          city: 'Lowell',
          state: 'Indiana',
          description: 'Built thanks to more than 3,000 volunteer hours, this dog park lives up to its name by offering pups freedom to roam, play and explore.',
          smallDogArea: true, 
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 8.3,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false,
        },
        { 
          name: 'Cherry Creek State Park- Off Leash Dog Area',
          city: 'Aurora',
          state: 'Colorado',
          description: 'Clocking in at a whopping 107 acres, this Colorado off-leash area inside Cherry Creek State Park is like a dog forest rather than a dog park.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 107,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        }, 
        { 
          name: 'Long Meadow and Dog Beach in Prospect Park',
          city: 'Brooklyn',
          state: 'New York',
          description: 'Brooklynites flock to the large, green meadow of Prospect Park for its designated off-leash hours sunup to 9 a.m. and 9 p.m. to 1 a.m., turning the area into what the New York Times describes as "a canine fantasia."',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 9.8,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Quiet Waters Park',
          city: 'Annapolis',
          state: 'Maryland',
          description: 'Voted one of the country\'s top 10 dog parks by USA Today readers, Quiet Waters Park has two off-leash areas and a dog beach with showers.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 340,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Double Bluff Beach',
          city: 'Whidbey Island',
          state: 'Washington',
          description: 'You and your furry friend can enjoy a full day seaside at Double Bluff Beach.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 3,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Willard Beach',
          city: 'South Portland',
          state: 'Maine',
          description: 'During the summer months before 9 a.m. and after 7 p.m., dogs are allowed to explore Willard Beach off-leash.',
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 4,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false,
        },
        { 
          name: 'Cosmo Dog Park',
          city: 'Gilbert',
          state: 'Arizona',
          description: 'On top of areas for large and small dogs, Cosmo Dog Park outside Phoenix has two more fenced areas for swimming and another for timid dogs.',
          smallDogArea: true,
          doggieWaterFountain: true, 
          fullyFenced: true,
          parkSize: 17,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true,
        },
        { 
          name: 'James Island County Park',
          city: 'James Island',
          state: 'South Carolina',
          description: 'Located in Charleston, James Island County Park has a large lake and dog beach, a 4-acre grass area and a fenced area as well as a washing and waste station.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 4,
          parkingLot: true,
          wasteDisposal: true, 
          agilityEquipment: true,
          shaded: true,
        },
        { 
          name: 'Del Mar Dog Beach',
          city: 'Del Mar',
          state: 'California',
          description: 'For nine months of the year, dogs are allowed on all two miles of beaches in the city of Del Mar, California, and pups are allowed to play leash-free on the 1/2-mile stretch of North Beach, also simply called Dog Beach.',
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 16,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Jackson Bark',
          city: 'Chicago',
          state: 'Illinois',
          description: 'This community dog park located within Jackson Park is the largest fully enclosed dog park in Chicago',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 11,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true, 
          shaded: true
        },
        { 
          name: 'Twin Lakes Recreational Area',
          city: 'Columbia',
          state: 'Missouri',
          description: 'Twin Lakes Recreational Area actually boasts three separate fenced areas: one for all dogs, one for small dogs, and one that\'s lakeside for swimming.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 10.7,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Congressman Bill Archer Dog Park',
          city: 'Houston',
          state: 'Texas',
          description: 'Houston\'s Congressman Bill Archer Dog Park makes exercising your dog a walk in the park.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 17,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true,
        },
        { 
          name: 'Southbury Dog Park',
          city: 'Southbury',
          state: 'Connecticut',
          description: 'Named one of BarkPost\'s top dog parks in the country, Southbury Dog Park in Connecticut doesn\'t feel like a cookie-cutter park.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 14,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },
        { 
          name: 'Elm Creek Reserve Dog Park',
          city: 'Maple Grove',
          state: 'Minnesota',
          description: 'This 29-acre park offers fenced and unfenced areas with something different and exciting for dogs and their owners every season.', 
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 29,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Montauk Beaches',
          city: 'Montauk',
          state: 'New York',
          description: 'The city of Montauk is a popular vacation getaway, and its beaches with accomodate any of your canine companions.', 
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 600,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false,
        },
        { 
          name: 'Freedom Barks Dog Park',
          city: 'Medford',
          state: 'New Jersey',
          description: 'This 20-acre dog park is also equipped to put your dog to the test with agility structures, including an A-frame, plank and jump set.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 20,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Fort Woof',
          city: 'Fort Worth',
          state: 'Texas',
          description: 'Fort Woof is an award-winning off-leash dog park covering 5 acres in east Fort Worth.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 5,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Fort De Soto Park',
          city: 'Tierra Verde',
          state: 'Florida',
          description: 'Already considered one of the country\'s top beaches, For De Soto Park has a dog beach with two fenced in areas where dogs can enjoy the white-sand beach leash-free.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 2.5,
          parkingLot: false,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: false,
        },
        { 
          name: 'NorthBark Park',
          city: 'Dallas',
          state: 'Texas',
          description: 'There\'s a lawn and walking trails, a beach and a pond, as well as covered seating and picnic areas for humans.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 22.3,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Tommy Schumpert Park',
          city: 'Knoxville',
          state: 'Tennessee',
          description: 'Tommy Schumpert Park has three separate sections, mulch-covered walking trails and a pond with a dock.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 173,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Bentonville Bark Park',
          city: 'Bentonville',
          state: 'Arkansas',
          description: 'The Bentonville dog park features areas for large and small dogs as well as a colorful agility course and features like painted fire hydrants for pups to smell.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 1.3,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: false
        },
        { 
          name: 'Hugh Rogers Wag Dog Park',
          city: 'Whitefish',
          state: 'Montana',
          description: 'This 5-acre dog park has a pond, agility course, free dog wash and both human and doggie fountains as well as lovely views of nearby mountains in Glacier National Park.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 5,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true
        },
        { 
          name: 'Loch Haven Dog Park',
          city: 'Hoover',
          state: 'Alabama',
          description: 'Plenty of trees and plenty of room to run describe this dog park in Hoover, Alabama.',
          smallDogArea: true,
          doggieWaterFountain: true,
          fullyFenced: true,
          parkSize: 17,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: true,
          shaded: true,
        },
        { 
          name: 'Warren Dunes State Park',
          city: 'Sawyer',
          state: 'Michigan',
          description: 'Warren Dunes State Park attracts more than one million visitors a year, many of whom come to play on the 3-mile stretch of designated dog-friendly beach along Lake Michigan.',
          smallDogArea: false,
          doggieWaterFountain: false,
          fullyFenced: false,
          parkSize: 1952,
          parkingLot: false,
          wasteDisposal: false,
          agilityEquipment: false,
          shaded: false
        },
        { 
          name: 'Memory Grove Park',
          city: 'Salt Lake City',
          state: 'Utah',
          description: 'Just to the east of the Utah state capitol building, Memory Grove Park features an off-leash dog area with creek access for pups and scenic views for people.',
          smallDogArea: false,
          doggieWaterFountain: true,
          fullyFenced: false,
          parkSize: 8.75,
          parkingLot: true,
          wasteDisposal: true,
          agilityEquipment: false,
          shaded: true
        },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Parks', null, {});
    
  }
};
