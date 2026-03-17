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
    category: "Movie", // Standardized category
    geometry: { type: "Point", coordinates: [77.6119, 12.9345] },
    // --- ADDED DETAILS ---
    rating: 8.8,
    votes: "25K+ Votes",
    language: "Hindi, English",
    genre: "Comedy/Drama",
    duration: "2h 35m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.5714, 12.9935] },
    // --- ADDED DETAILS ---
    rating: 9.1,
    votes: "15K+ Votes",
    language: "English, Hindi, Tamil, Telugu",
    genre: "Sci-Fi/Action/Adventure",
    duration: "2h 50m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.6018, 12.9113] },
    // --- ADDED DETAILS ---
    rating: 9.8,
    votes: "500K+ Votes",
    language: "Japanese, English",
    genre: "Anime/Action/Fantasy",
    duration: "2h 15m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.5817, 12.9554] },
    // --- ADDED DETAILS ---
    rating: 8.5,
    votes: "12K+ Votes",
    language: "Tamil",
    genre: "Action/Drama",
    duration: "2h 40m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.6119, 12.9345] },
    // --- ADDED DETAILS ---
    rating: 8.9,
    votes: "120K+ Votes",
    language: "English, Hindi",
    genre: "Horror/Thriller/Mystery",
    duration: "2h 10m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.6049, 12.8986] },
    // --- ADDED DETAILS ---
    rating: 7.8,
    votes: "8K+ Votes",
    language: "Kannada",
    genre: "Thriller/Fantasy",
    duration: "2h 25m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.5724, 12.9767] },
    // --- ADDED DETAILS ---
    rating: 8.2,
    votes: "9K+ Votes",
    language: "Tamil",
    genre: "Action/Drama",
    duration: "2h 30m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.5552, 13.0112] },
    // --- ADDED DETAILS ---
    rating: 9.0,
    votes: "45K+ Votes",
    language: "English",
    genre: "Psychological/Thriller",
    duration: "2h 5m",
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
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.5451, 13.0423] },
    // --- ADDED DETAILS ---
    rating: 7.5,
    votes: "5K+ Votes",
    language: "Kannada",
    genre: "Romance/Comedy",
    duration: "2h 20m",
  },
  {
    title: "Kishkindhapuri",
    description: "A man uncovers a dark secret hidden within his ancestral town, forcing him into a violent conflict to protect its history and people.",
    image: {
      filename: "MoviePoster",
      url: "/images/img5.jpg"
    },
    ticketPrice: 320,
    venue: "Prasanna Theatre, Magadi Road",
    city: "Bengaluru",
    eventDate: new Date("2025-12-26"),
    category: "Movie",
    geometry: { type: "Point", coordinates: [77.5543, 12.9774] },
    // --- ADDED DETAILS ---
    rating: 8.4,
    votes: "11K+ Votes",
    language: "Kannada, Telugu",
    genre: "Action/Thriller",
    duration: "2h 45m",
  },
  {
    title: "Sunburn Festival - Bengaluru",
    description: "Experience the biggest electronic music festival. Featuring top international DJs and stunning visuals.",
    image: {
      filename: "Eventimage",
      url: "/images/img0.jpg",
    },
    ticketPrice: 4500,
    venue: "Palace Grounds",
    city: "Bengaluru",
    eventDate: new Date("2025-12-28"),
    category: "Music Festival",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
    // --- ADDED DETAILS ---
    rating: 9.5,
    votes: "10K+ Bookings",
    language: "English",
    genre: "EDM/House/Techno",
    duration: "8h",
  },
  {
    title: "Anuv Jain: Live in Concert",
    description: "An evening of soulful melodies with Anuv Jain. Get ready to be mesmerized by his heartfelt lyrics.",
    image: {
      filename: "Eventimage",
      url: "/images/img1.jpg",
    },
    ticketPrice: 1500,
    venue: "Manpho Convention Centre",
    city: "Bengaluru",
    eventDate: new Date("2025-11-15"),
    category: "Music Concert",
    geometry: { type: "Point", coordinates: [77.6393, 13.0142] },
    // --- ADDED DETAILS ---
    rating: 9.2,
    votes: "8K+ Bookings",
    language: "Hindi",
    genre: "Indie/Acoustic",
    duration: "3h",
  },
];

module.exports = { data: sampleEvents };