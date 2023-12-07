// import all images from assets/images directory
import img01 from "../all-images/cars-img/gtr r35.png";
import img02 from "../all-images/cars-img/Mk4.jpg";
import img03 from "../all-images/cars-img/nsx.png";
import img04 from "../all-images/cars-img/porsche 911.png";
import img05 from "../all-images/cars-img/ferrari.jpg";
import img06 from "../all-images/cars-img/nissan.png";
import img07 from "../all-images/cars-img/audi.png";
import img08 from "../all-images/cars-img/bmw.png";
import img09 from "../all-images/cars-img/2021_ford_bronco_wildtrack_032_g1.png";
import img10 from "../all-images/cars-img/patrol.jpg";
import img11 from "../all-images/cars-img/xuv700.png";
import img12 from "../all-images/cars-img/range rover.jpg";
import img13 from "../all-images/cars-img/bmw x7.jpg";
import img14 from "../all-images/cars-img/rolls-royce-ghost.jpg"
import img15 from "../all-images/cars-img/startech-bentley.jpg"
import img16 from "../all-images/cars-img/urus.jpg"
import img17 from "../all-images/cars-img/audi q8.png"
import img18 from "../all-images/cars-img/lexus.jpg"
import img19 from "../all-images/cars-img/svr.jpg"
import img20 from "../all-images/cars-img/phantom.jpg"


const carData = [
  
  { 
    id: 1,
    carModel:"Exotic",
    brand: "Nissan",
    rating: 112,
    carName: "GTR R35",
    imgUrl: img01,
    model: "Model 2023",
    price: 450,
    speed: "8kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Nissan GT-R NISMO is one of the R35 range of cars from Nissan. Its 6 cylinder, double overhead camshaft turbocharged engine has 4 valves per cylinder and a volume of 3.8 litres.",
  },

  {
    id: 2,
    carModel:"Exotic",
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Supra",
    imgUrl: img02,
    model: "Model-2022",
    price: 450,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 2022 Toyota Supra is a two-seat sports coupe. It’s the more powerful of Toyota’s two sports cars. Rivals include the related BMW Z4, Porsche 718, Jaguar F-Type, Toyota 86/Subaru BRZ duo, and even the Chevrolet Corvette.",
  },

  {
    id: 3,
    carModel:"Exotic",
    brand: "Honda",
    rating: 132,
    carName: "NSX GT3",
    imgUrl: img03,
    model: "Model-2022",
    price: 220,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Called the NSX GT3 Evo22, it builds upon the existing NSX GT3 a car that has won multiple championships in IMSA, SRO and Japan's SuperGT. The Evo22 gets improved intercoolers for the 3.5-liter twin-turbo shared with the road car, allowing it to perform consistently in a wider range of conditions and locations.",
  },

  {
    id: 4,
    carModel:"Exotic",
    brand: "porsche",
    rating: 102,
    carName: "porsche 911 GT",
    imgUrl: img04,
    model: "Model-2022",
    price: 32,
    speed: "11kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " 2022 Porsche 911 GT3 As mentioned above, the GT3 is a new addition to the lineup for 2022. The car is closely related to the latest GT3 Cup race car and features a naturally aspirated 4.0-liter flat-6 good for 502 hp and 346 lb-ft.",
  },

  {
    id: 5,
    carModel:"Exotic",
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari F-12",
    imgUrl: img05,
    model: "Model-2022",
    price: 340,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Ferrari F12 Specs The 6.3L naturally aspirated 65° V12 makes the F12berlinetta one of the most powerful Ferrari road cars produced to this day, surpassed only by era-defining models like the LaFerrari and the 812 Superfast. Power: 730 hp at 8,250 RPM",
  },

  {
    id: 6,
    carModel:"Exotic",
    brand: "Nissan",
    rating: 119,
    carName: "Nissan 370Z",
    imgUrl: img06,
    model: "Model-2022",
    price: 100,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Nissan 370Z: The base 370Z comes with either a six-speed manual or seven-speed automatic transmission. Standard features include a six-speaker stereo, Bluetooth, a USB port, a rearview camera, keyless entry, push-button start, automatic climate control, manually adjustable cloth seats, HID headlights, and 18-inch alloy wheels.",
  },

  {
    id: 7,
    carModel:"Exotic",
    brand: "Audi",
    rating: 82,
    carName: "Audi TT",
    imgUrl: img07,
    model: "Model 3",
    price: 270,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The 2022 Audi TT is a small sports car available as either a four-seat coupe or a two-seat convertible (called the Roadster). Regardless of body style, the TT is sold in a single well-equipped trim level. The only powertrain is a turbocharged 2.0-liter four-cylinder engine that produces 228 horsepower and 258 lb-ft of torque.",
  },

  {
    id: 8,
    carModel:"Exotic",
    brand: "BMW ",
    rating: 52,
    carName: "BMW M4",
    imgUrl: img08,
    model: "Model 3",
    price: 90,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The all-new BMW M4 Competition Coupé with M xDrive offers a fascinating combination of aesthetics, character and typical M athleticism. With numerous technologies derived from motorsport, it guarantees maximum driving dynamics – both in everyday use and on the racetrack"
  },

  {
    id: 9,
    carModel:"Premium Suv",
    brand: "Ford",
    rating: 102,
    carName: "Bronco",
    imgUrl: img09,
    model: "Model-2022",
    price: 310,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Bronco is available with a suite of driver-assistance technology, including automatic high beams and parking sensors. It also has equipment that makes low-speed rock crawling and trail driving easier",
  },  
  
  {
    id: 10,
    carModel:"Premium Suv",
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Patrol",
    imgUrl: img10,
    model: "Model-2022",
    price: 290,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Nissan Patrol V8 is a premium level highly powered SUV from the Japanese automaker in the niche segment. Nissan Patrol V8 is powered by a 5552cc engine which generates a maximum power of 399.62 bhp @ 5800 rpm and gives out a maximum torque of 560 Nm @ 4000 rpm. ",
  }, 
  
  {
    id: 11,
    carModel:"Premium Suv",
    brand: "Mahindra",
    rating: 102,
    carName: "XUV700",
    imgUrl: img11,
    model: "Model-2022",
    price: 200,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Mahindra XUV700 is currently available in Petrol and Diesel engines. The 1999 cc Petrol engine generates a power of 197.13bhp@5000rpm and a torque of 380nm@1750-3000rpm. The 2198 cc Diesel engine generates a power of 182.38bhp@3500rpm and a torque of 420Nm@1600-2800rpm. Mahindra XUV700 is available in both Manual & Automatic transmission.",
  },  

  {
    id: 12,
    carModel:"Premium Suv",
    brand: "Land Rover",
    rating: 102,
    carName: "Range Rover",
    imgUrl: img12,
    model: "Model-2022",
    price: 280,
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Range Rover Evoque plug-in electric hybrid (PHEV) combines a 3-cylinder, 1,5 litre Petrol engine with an electric motor to deliver a total power output of 309PS. ",
  },  

  {
    id: 13,
    carModel:"Premium Suv",
    brand: "BMW",
    rating: 102,
    carName: "BMW X7",
    imgUrl: img13,
    model: "Model-2022",
    price: 320,
    speed: "12.65kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Other key specifications of the X7 include a Ground Clearance of 221 mm, Kerb Weight of 2445 kg and Bootspace of 326 litres. The X7 is available in 7 colours. The mileage of X7 ranges from 10.5 kmpl to 12.65 kmpl. The first-generation BMW X7 (codenamed G07) was launched in India on 25 July 2019.",
  }, 

  {
    id: 14,
    carModel:"Premium sedan",
    brand: "RR",
    rating: 102,
    carName: "Rolls Royce Ghost",
    imgUrl: img14,
    model: "Model-2022",
    price: 380,
    speed: "6.33kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Rolls-Royce Ghost Specifications Rolls-Royce Ghost is a 5 seater Sedan with a mileage of 6.33 Kmpl depending upon it's transmission and fuel type. Ghost's 12 cylinder, 6750 cc, can generate 563 bhp @ 5250 rpm power and 820 Nm @ 1500 rpm torque.",
  },  


  {
    id: 15,
    carModel:"Premium sedan",
    brand: "Bentley",
    rating: 102,
    carName: "Bentley",
    imgUrl: img15,
    model: "Model-2022",
    price: 380,
    speed: "12.9kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Bentley Continental has 2 Petrol Engine on offer. The Petrol engine is 3993 cc and 5998 cc . It is available with the Automatic transmission. Depending upon the variant and fuel type the Continental has a mileage of 9.8 to 12.9 kmpl. The Continental is a 4 seater and has length of 4807mm, width of 2226mm and a wheelbase of 2746mm.",
  }, 
  
  {
    id: 16,
    carModel:"Premium Suv",
    brand: "Lamborghini",
    rating: 102,
    carName: "Urus",
    imgUrl: img16,
    model: "Model-2022",
    price: 350,
    speed: "6kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Urus is the first four-door Lamborghini ever to be produced that takes practicality for any ‘Raging Bull’ on to a new high. It can carry four people in utmost luxury and comfort while still being fast enough to turn every drive into an adventure.",
  }, 

  {
    id: 17,
    carModel:"Premium Suv",
    brand: "Audi",
    rating: 102,
    carName: "Audi RS Q8",
    imgUrl: img17,
    model: "Model-2022",
    price: 280,
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 4.0-litre V8 TFSI engine with 441 kW (600 hp) and maximum torque of 800 Nm combines with the quattro permanent all-wheel drive and the 8-speed automatic tiptronic to deliver pure dynamism. It will catapult you from 0 to 100 km/h in 3.8 seconds. The mild-hybrid system and cylinder on demand technology, which deactivates four cylinders at part load with low and medium engine speeds, can help save fuel.",
  }, 

  {
    id: 18,
    carModel:"Premium Suv",
    brand: "Lexus",
    rating: 102,
    carName: "Lexus LX 570",
    imgUrl: img18,
    model: "Model-2022",
    price: 250,
    speed: "8kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The LX 570 is powered by a 5.7-liter V8 engine (383 hp, 403 lb-ft of torque) mated to an eight-speed automatic transmission. Full-time four-wheel drive is standard. The LX has 8.9 inches of ground clearance and five multi-terrain modes, adding to its stout off-road reputation.",
  }, 

  {
    id: 19,
    carModel:"Premium Suv",
    brand: "Land Rover",
    rating: 102,
    carName: "Range rover SVR",
    imgUrl: img19,
    model: "Model-2022",
    price: 320,
    speed: "6.67kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 2021 Range Rover Sport Supercharged and SVR models are for a different breed of luxury SUV buyer—one who's looking for something with attitude and a thumping V-8 engine. The 5.0-liter mill under the hood of these beasts is supercharged and churns out a healthy 518-hp in its standard guise and a meaty 575-hp in all-out tune for the SVR.",
  }, 

  {
    id: 20,
    carModel:"Premium sedan",
    brand: "Rolls Royce",
    rating: 102,
    carName: "Phantom",
    imgUrl: img20,
    model: "Model-2022",
    price: 400,
    speed: "9.8kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Rolls Royce Phantom is currently available in Petrol engine. The 6749 cc Petrol engine generates a power of 563bhp@5000rpm and a torque of 900Nm@1700rpm. Rolls-Royce Phantom is available in Automatic transmission only. Rolls-Royce Phantom has a boot space of 460 Liters litres and ground clearance of 150 mm. The kerb weight of Phantom is 2635 Kg. In configurations, Rolls-Royce Phantom has a dimensions of 5762 mm in length, 2018 mm in width and 1646 mm^3 mm in height.",
  }, 
];



export default carData;
