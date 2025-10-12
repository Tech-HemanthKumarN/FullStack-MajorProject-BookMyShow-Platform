const sampleEvents = [
  {
    title: "Jolly LL.B 3",
    description: "The courtroom comedy is back! Two lawyers, one case, and a whole lot of chaos. Witness the ultimate legal showdown with a comedic twist.",
    image: {
      filename: "MoviePoster",
      url: "/images/img0.jpg"
    },
    ticketPrice: 350,
    venue: "PVR, Forum Mall, Koramangala",
    city: "Bengaluru",
    eventDate: new Date("2025-11-28"),
    category: "Comedy",
    geometry: { type: "Point", coordinates: [77.6119, 12.9345] }
  },
  {
    title: "Mirai",
    description: "A warrior from a forgotten time is thrust into the future to stop an ancient evil. A high-octane sci-fi action epic.",
    image: {
      filename: "MoviePoster",
      url: "/images/img1.jpg"
    },
    ticketPrice: 420,
    venue: "INOX, Mantri Square Mall",
    city: "Bengaluru",
    eventDate: new Date("2025-12-12"),
    category: "Action",
    geometry: { type: "Point", coordinates: [77.5714, 12.9935] }
  },
  {
    title: "Demon Slayer: Infinity Castle",
    description: "Tanjiro and his comrades face their greatest challenge yet as they step into the treacherous Infinity Castle to confront Muzan Kibutsuji.",
    image: {
      filename: "MoviePoster",
      url: "/images/img2.jpg"
    },
    ticketPrice: 500,
    venue: "PVR, Vega City Mall",
    city: "Bengaluru",
    eventDate: new Date("2026-01-23"),
    category: "Anime",
    geometry: { type: "Point", coordinates: [77.6018, 12.9113] }
  },
  {
    title: "Sakthi Thirumagan",
    description: "A gripping tale of power, family, and betrayal. A man must navigate a dangerous world to protect his legacy and loved ones.",
    image: {
      filename: "MoviePoster",
      url: "/images/img3.jpg"
    },
    ticketPrice: 280,
    venue: "Urvashi Cinema, Lalbagh Road",
    city: "Bengaluru",
    eventDate: new Date("2025-10-24"),
    category: "Drama",
    geometry: { type: "Point", coordinates: [77.5817, 12.9554] }
  },
  {
    title: "The Conjuring: Last Rites",
    description: "Ed and Lorraine Warren investigate a demonic possession linked to a cursed object, leading them to their most terrifying case yet.",
    image: {
      filename: "MoviePoster",
      url: "/images/img4.jpg"
    },
    ticketPrice: 450,
    venue: "IMAX, PVR Forum Mall",
    city: "Bengaluru",
    eventDate: new Date("2025-10-31"),
    category: "Horror",
    geometry: { type: "Point", coordinates: [77.6119, 12.9345] }
  },
  {
    title: "Lokah: Chapter 1 Chandra",
    description: "In a world shrouded in mystery, two souls are bound by a prophecy. An intense thriller about fate, love, and sacrifice.",
    image: {
      filename: "MoviePoster",
      url: "/images/img5.jpg"
    },
    ticketPrice: 380,
    venue: "Gopalan Cinemas, Bannerghatta Road",
    city: "Bengaluru",
    eventDate: new Date("2025-12-05"),
    category: "Thriller",
    geometry: { type: "Point", coordinates: [77.6049, 12.8986] }
  },
  {
    title: "Ettu Malai",
    description: "An action-packed story of a man who stands against a powerful syndicate to save his village from their clutches.",
    image: {
      filename: "MoviePoster",
      url: "/images/img6.jpg"
    },
    ticketPrice: 300,
    venue: "Nartaki Theatre, Majestic",
    city: "Bengaluru",
    eventDate: new Date("2025-11-07"),
    category: "Action",
    geometry: { type: "Point", coordinates: [77.5724, 12.9767] }
  },
  {
    title: "Mirage",
    description: "A couple trapped in a mysterious building must solve a puzzle to escape, but reality is not what it seems. A mind-bending psychological thriller.",
    image: {
      filename: "MoviePoster",
      url: "/images/img7.jpg"
    },
    ticketPrice: 360,
    venue: "Cinepolis, Orion Mall",
    city: "Bengaluru",
    eventDate: new Date("2025-11-14"),
    category: "Thriller",
    geometry: { type: "Point", coordinates: [77.5552, 13.0112] }
  },
  {
    title: "Kiss",
    description: "A heartwarming modern love story exploring the ups and downs of a young couple's relationship in a bustling city.",
    image: {
      filename: "MoviePoster",
      url: "/images/img8.jpg"
    },
    ticketPrice: 250,
    venue: "Vaishnavi Sapphire Mall",
    city: "Bengaluru",
    eventDate: new Date("2026-02-13"),
    category: "Romance",
    geometry: { type: "Point", coordinates: [77.5451, 13.0423] }
  },
  {
    title: "Kishkindhapuri",
    description: "A man uncovers a dark secret hidden within his ancestral town, forcing him into a violent conflict to protect its history and people.",
    image: {
      filename: "MoviePoster",
      url:"/images/img5.jpg"
    },
    ticketPrice: 320,
    venue: "Prasanna Theatre, Magadi Road",
    city: "Bengaluru",
    eventDate: new Date("2025-12-26"),
    category: "Action",
    geometry: { type: "Point", coordinates: [77.5543, 12.9774] }
  },
  {
    title: "Sunburn Festival - Bengaluru",
    description: "Experience the biggest electronic music festival. Featuring top international DJs and stunning visuals.",
    image: {
      filename: "Eventimage",
      url: "/images/img0.jpg", // Local Path
    },
    ticketPrice: 4500,
    venue: "Palace Grounds",
    city: "Bengaluru",
    eventDate: new Date("2025-12-28"),
    category: "Music",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Anuv Jain: Live in Concert",
    description: "An evening of soulful melodies with Anuv Jain. Get ready to be mesmerized by his heartfelt lyrics.",
    image: {
      filename: "Eventimage",
      url: "/images/img1.jpg", // Local Path
    },
    ticketPrice: 1500,
    venue: "Manpho Convention Centre",
    city: "Bengaluru",
    eventDate: new Date("2025-11-15"),
    category: "Music",
    geometry: { type: "Point", coordinates: [77.6393, 13.0142] }
  },
  {
    title: "Jolly LL.B 3",
    description: "The courtroom comedy is back! Two lawyers, one case, and a whole lot of chaos. Witness the ultimate legal showdown with a comedic twist.",
    image: {
      filename: "MoviePoster",
      url: "/images/img0.jpg"
    },
    ticketPrice: 350,
    venue: "PVR, Forum Mall, Koramangala",
    city: "Bengaluru",
    eventDate: new Date("2025-11-28"),
    category: "Comedy",
    geometry: { type: "Point", coordinates: [77.6119, 12.9345] }
  },
  {
    title: "Mirai",
    description: "A warrior from a forgotten time is thrust into the future to stop an ancient evil. A high-octane sci-fi action epic.",
    image: {
      filename: "MoviePoster",
      url: "/images/img1.jpg"
    },
    ticketPrice: 420,
    venue: "INOX, Mantri Square Mall",
    city: "Bengaluru",
    eventDate: new Date("2025-12-12"),
    category: "Action",
    geometry: { type: "Point", coordinates: [77.5714, 12.9935] }
  },
  {
    title: "Demon Slayer: Infinity Castle",
    description: "Tanjiro and his comrades face their greatest challenge yet as they step into the treacherous Infinity Castle to confront Muzan Kibutsuji.",
    image: {
      filename: "MoviePoster",
      url: "/images/img2.jpg"
    },
    ticketPrice: 500,
    venue: "PVR, Vega City Mall",
    city: "Bengaluru",
    eventDate: new Date("2026-01-23"),
    category: "Anime",
    geometry: { type: "Point", coordinates: [77.6018, 12.9113] }
  },
  {
    title: "Sakthi Thirumagan",
    description: "A gripping tale of power, family, and betrayal. A man must navigate a dangerous world to protect his legacy and loved ones.",
    image: {
      filename: "MoviePoster",
      url: "/images/img3.jpg"
    },
    ticketPrice: 280,
    venue: "Urvashi Cinema, Lalbagh Road",
    city: "Bengaluru",
    eventDate: new Date("2025-10-24"),
    category: "Drama",
    geometry: { type: "Point", coordinates: [77.5817, 12.9554] }
  },

];

module.exports = { data: sampleEvents };