import { Injectable } from '@angular/core';
import { AllServices } from '../model/all-services';

@Injectable({
  providedIn: 'root'
})

export class AvailableServicesService {

  constructor() { }
  
  selectedService:any;
  selectedSubService:any;
  selectedVendor:any;
  vendorDesc:any;
  
  getAllAvailableServices():any[]{ 
    return [
      {
        name: "House Keeping",
        baseCost: 200,
        minTime: "2Hrs",
        imageUrl: "/assets/MainServices/housekeeping.jpg",
        subServiceList:[
          {
            name:"Cooking",
            price:200,
            description:"responsible for cooking",
            minTime:"2Hrs",
            imageUrl: "assets/sub-services/cooking.jpg",
          },
          {
            name:"Utensils Cleanin and Sanitizing",
            price:200,
            description:"responsible for washing utensils",
            minTime:"2Hrs",
            imageUrl: "assets/sub-services/cleaning.jpg",
        
          },
          {
            name:"Mopping",
            price:200,
            description:"responsible for Mopping Floor",
            minTime:"2Hrs",
            imageUrl: "assets/sub-services/mopping.jpg",
          }
        ]
        },
        {
          name: "AC Maintenance",
          baseCost: 200,
          minTime: "2Hrs",
          imageUrl: "assets/MainServices/ac-service.jpg",
          subServiceList:[
            {
              name:"Compressor Repair and Maintenance",
              price:200,
              description:"responsible for compresser Problem",
              minTime:"2Hrs",
              imageUrl: "assets/sub-services/ac-maintain.jpg",
            
            },
            {
              name:"Maintanance & Cleaning",
              price:200,
              description:"responsible for filter related Problem",
              minTime:"2Hrs",
              imageUrl: "assets/sub-services/ac-compresser.jpg",
            
            },
            {
              name:"Condenser Repair and Maintenance",
              price:200,
              description:"responsible for Condenser Problem",
              minTime:"2Hrs",
              imageUrl: "assets/sub-services/ac-condenser.jpg",
            
            }
            ]
          },

          {
            name: "Tv Repair and Service",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/tv.jpg",
            subServiceList:[
              {
                name:"Smart TV",
                price:200,
                description:"responsible for SmartTV",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/led.jpg",
            
              },
              {
                name:"Television set",
                price:200,
                description:"responsible for OldTV",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/oldTv.jpg",
            
              },
              {
                name:"Android TV",
                price:200,
                description:"responsible for AndroidTV",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/oled.jpg",
            
              }

            ]
          },
          {
            name: "Plumbing",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/plumbing.jpg",
            subServiceList:[
              {
                name:"Water tap and Water leak",
                price:200,
                description:"related to water provision",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/waterpro.jpg",
              },
              {
                name:"Fixtures",
                price:200,
                description:"related to fixtures sinks & heater",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/fixtures.jpg",
              },
              {
                name:"Drainage",
                price:200,
                description:"related to drainage lines",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/drain.jpg",
              }

            ]
          },
          {
            name: "Electronic Repairs",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/electronic.jpg",
            subServiceList:[
              {
                name:"Mobile Service",
                price:200,
                description:"related to mobile",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/mobile.jpg",
              },
              {
                name:"Laptop Service",
                price:200,
                description:"related to laptop",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/laptop.jpg",
              },
              {
                name:"PC Service",
                price:200,
                description:"related to pc",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/pc.jpg",
              }

            ]
          },
          {
            name: "Spa",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/spa.jpg",
            subServiceList:[
              {
                name:"Facial",
                price:200,
                description:"related to face",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/facial.jpg",

              },
              {
                name:"Hair Gromming",
                price:200,
                description:"related to hair ",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/hair.jpg",

              },
              {
                name:"Nail Extension",
                price:200,
                description:"related to nails",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/nail.jpg",

              }

            ]
          },
          {
            name: "Electric Work",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/electric.jpg",
            subServiceList:[
              {
                name:"House Wiring",
                price:200,
                description:"related to house wiring",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/housewiring.jpg",

              },
              {
                name:"Solar Plates Installation",
                price:200,
                description:"related to electric appliances",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/solar.jpg",

              },
              {
                name:"Lighting System",
                price:200,
                description:"related to lighting",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/light.jpg",

              }


            ]
          },
          {
            name: "Painting",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/paint.jpg",
            subServiceList:[
              {
                name:"Interior",
                price:200,
                description:"Interior painting works",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/interior.jpg",

              },
              {
                name:"Exterior",
                price:200,
                description:"Exterior painting works",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/exterior.jpg",

              },
              {
                name:"Wood",
                price:200,
                description:"Wood painting works ",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/woodpaint.jpg",

              }

            ]
          },
          {
            name: "Carpentry Works",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/carpentry.jpg",
            subServiceList:[
              {
                name:"Layout Installation",
                price:200,
                description:"installing layout",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/layout.jpg",

              },
              {
                name:"Reparing & Finishing",
                price:200,
                description:"reparing and finishing of structure",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/wood polish.jpg",

              },
              {
                name:"Furniture Manufacturing",
                price:200,
                description:"manufacturing",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/woodcrafting.jpg",

              }

            ]
          },
          {
            name: "Welding",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/welding.jpg",
            subServiceList:[
              {
                name:"Arc Welding",
                price:200,
                description:"Arc Welding Works",
                minTime:"2Hrs",
                imageUrl: "/assets/pexels-karolina-grabowska-4239032.jpg",

              },
              {
                name:"Gas Welding",
                price:200,
                description:"Gas Welding Works",
                minTime:"2Hrs",
                imageUrl: "/assets/pexels-karolina-grabowska-4239032.jpg",

              },
              {
                name:"Laser Beam Welding",
                price:200,
                description:"Lasor Welding Works",
                minTime:"2Hrs",
                imageUrl: "/assets/pexels-karolina-grabowska-4239032.jpg",

              }

            ]
          },
          {
            name: "Vehicle Mechanic",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/mechanic.jpg",
            subServiceList:[
              {
                name:"Bikes",
                price:200,
                description:"Two wheeler works",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/bike.jpg",
              },
              {
                name:"Cars",
                price:200,
                description:"Four wheeler works",
                minTime:"2Hrs",
                imageUrl: "/assets/sub-services/car.jpg",
              },
              {
                name:"Heavy Vehicle Works",
                price:200,
                description:"Transport Vehicles",
                minTime:"2Hrs",
                imageUrl: "assets/sub-services/heavy.jpg",
              }

            ]
          },


          // {
          //   name: "CARPENTER",
          //   baseCost: 200,
          //   minTime: "2Hrs",
          //   imageUrl: "assets/MainServices/mechanic.jpg",
          //   subServiceList:[
          //     {
          //       name:"Bikes",
          //       price:200,
          //       description:"Two wheeler works",
          //       minTime:"2Hrs",
          //       imageUrl: "assets/sub-services/bike.jpg",
          //     },
          //     {
          //       name:"Mehul",
          //       price:200,
          //       description:"Four wheeler works",
          //       minTime:"2Hrs",
          //       imageUrl: "/assets/sub-services/car.jpg",
          //     },
          //     {
          //       name:"Heavy Vehicle Works",
          //       price:200,
          //       description:"Transport Vehicles",
          //       minTime:"2Hrs",
          //       imageUrl: "assets/sub-services/heavy.jpg",
          //     }

          //   ]
          // },


          {
            name: "Event Management",
            baseCost: 200,
            minTime: "2Hrs",
            imageUrl: "assets/MainServices/event.jpg",
            subServiceList:[
              {
                name:"Wedding",
                price:200,
              description:"Wedding Ceremonies",
              minTime:"2Hrs",
              imageUrl: "assets/sub-services/wedding.jpg",
            },
            {
              name:"Festval",
              price:200,
            description:"Festivals and Celebrations",
            minTime:"2Hrs",
            imageUrl: "assets/sub-services/festival.jpg",
          },
          {
            name:"Party",
            price:200,
          description:"outdoor and indore party",
          minTime:"2Hrs",
          imageUrl: "assets/sub-services/party.jpg",
        }

            ]
          }
    ]
  }
}