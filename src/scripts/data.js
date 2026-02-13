

 const regions = [
  { 
    id: "eur07", 
    scale:1,
    name: "British-Isles",
    desc: "An archipelago featuring diverse landscapes, rich maritime history, and the influential cultural heritage of Great Britain",
    x:"-10vh",
    y:"-5vh", 
  },
  { 
    id: "eur01", 
    scale:2.4 ,
    name: "Nordic-Europe",
    desc: "A northern region known for stunning fjords, progressive social models, and breathtaking displays of northern lights",
    x:"-1vh",
    y:"-5vh", 
  },
  { 
    id: "eur08", 
    scale:1.2 ,
    name: "Baltics",
    desc: "Three sovereign nations along the Baltic Sea, blending medieval architecture with rapidly growing modern digital economies.",
    x:"5vh",
    y:"-12vh", 
  },
  { 
    id: "eur02", 
    scale:2 ,
    name: "Western-Europe",
    desc: "The economic heart of the continent, home to iconic landmarks, world-class cuisine, and profound historical influence",
    x:"-5vh",
    y:"0.5vh", 
  },
  { 
    id: "eur05", 
    scale:1.9 ,
    name: "Balkans",
    desc: "A culturally vibrant peninsula where diverse ethnic traditions meet dramatic mountain ranges and beautiful Adriatic coastlines",
    x:"0vh",
    y:"0vh", 
  },
  { 
    id: "eur06", 
    scale:2.7 ,
    name: "Central-and-Eastern-Europe",
    desc: "A vast territory connecting East and West, characterized by resilient history, grand capitals, and rolling plains",
    x:"5vh",
    y:"-1.5vh", 
  },
  { 
    id: "eur04", 
    scale:1.6 ,
    name: "Alpine-Europe",
    desc: "A breathtaking mountainous region famous for pristine lakes, world-class skiing, and charming high-altitude European village life",
    x:"-5.6vh",
    y:"6vh", 
  },
  { 
    id: "eur03", 
    scale:2.6 ,
    name: "Mediterranean-Europe",
    desc: "Sun-drenched coastal regions boasting ancient civilizations, olive groves, and a relaxed lifestyle centered around the sea",
    x:"1vh",
    y:"5vh", 
  },
  { 
    id: "eur09", 
    scale:2 ,
    name: "Caucasus",
    desc: "A strategic gateway between Europe and Asia, defined by rugged mountains and ancient, complex cultural tapestries.",
    x:"8vh",
    y:"5vh", 
  },
];

 const countries = [
  // --- Nordic Europe (eur01) ---
  { 
    id: "eu001", 
    name: "Denmark", 
    region: "eur01", 
    description: "A flat Nordic country known for high-quality design, cycling culture, and the historic Jutland Peninsula." 
  },
  { 
    id: "eu002", 
    name: "Finland", 
    region: "eur01", 
    description: "The 'Land of a Thousand Lakes' famous for Northern Lights, world-class education, and sauna traditions." 
  },
  { 
    id: "eu003", 
    name: "Iceland", 
    region: "eur01", 
    description: "A volcanic island nation defined by dramatic landscapes with glaciers, hot springs, and powerful waterfalls." 
  },
  { 
    id: "eu004", 
    name: "Norway", 
    region: "eur01", 
    description: "Renowned for its spectacular deep fjords, mountainous terrain, and being a leader in electric mobility." 
  },
  { 
    id: "eu005", 
    name: "Sweden", 
    region: "eur01", 
    description: "The largest Nordic nation, famous for its vast forests, archipelagoes, and global s in music and tech." 
  },

  // --- Western Europe (eur02) ---
  { 
    id: "eu006", 
    name: "Belgium", 
    region: "eur02", 
    description: "Known for medieval towns, Renaissance architecture, and hosting the headquarters of the European Union." 
  },
  { 
    id: "eu007", 
    name: "France", 
    region: "eur02", 
    description: "A global center for art, fashion, and gastronomy, stretching from the Mediterranean to the Atlantic." 
  },
  { 
    id: "eu008", 
    name: "Germany", 
    region: "eur02", 
    description: "Europe’s economic heart, famous for its rich history, engineering, and diverse cultural landscapes." 
  },
  { 
    id: "eu009", 
    name: "Luxembourg", 
    region: "eur02", 
    description: "A small, wealthy nation known for its fortified medieval old town perched on sheer cliffs." 
  },
  { 
    id: "eu010", 
    name: "Monaco", 
    region: "eur02", 
    description: "A tiny principality on the French Riviera known for its upscale casinos and grand Prix motor race." 
  },
  { 
    id: "eu011", 
    name: "Netherlands", 
    region: "eur02", 
    description: "Famous for its flat landscape of canals, tulip fields, windmills, and progressive social policies." 
  },

  // --- Mediterranean Europe (eur03) ---
  { 
    id: "eu012", 
    name: "Andorra", 
    region: "eur03", 
    description: "A tiny principality in the Pyrenees mountains known for ski resorts and tax-haven status." 
  },
  { 
    id: "eu013", 
    name: "Cyprus", 
    region: "eur03", 
    description: "An eastern Mediterranean island nation with a rich history of ancient ruins and beautiful beaches." 
  },
  { 
    id: "eu014", 
    name: "Greece", 
    region: "eur03", 
    description: "Considered the cradle of Western civilization, featuring thousands of islands and iconic ancient landmarks." 
  },
  { 
    id: "eu015", 
    name: "Italy", 
    region: "eur03", 
    description: "Famed for its world-renowned cuisine, Renaissance art masterpieces, and long Mediterranean coastline." 
  },
  { 
    id: "eu016", 
    name: "Malta", 
    region: "eur03", 
    description: "A small archipelago between Sicily and North Africa known for its historic sites and crystal-clear waters." 
  },
  { 
    id: "eu017", 
    name: "Portugal", 
    region: "eur03", 
    description: "An Atlantic-facing nation with a rich seafaring history, famous for cork production and Fado music." 
  },
  { 
    id: "eu018", 
    name: "San-Marino", 
    region: "eur03", 
    description: "One of the world's oldest republics, entirely surrounded by Italy on the slopes of Mount Titano." 
  },
  { 
    id: "eu019", 
    name: "Spain", 
    region: "eur03", 
    description: "A vibrant nation known for its diverse cultures, historic architecture, and sunny Mediterranean lifestyle." 
  },
  { 
    id: "eu020", 
    name: "Vatican-City", 
    region: "eur03", 
    description: "The smallest state in the world, serving as the spiritual and administrative center of Roman Catholicism." 
  },

  // --- Alpine Europe (eur04) ---
  { 
    id: "eu021", 
    name: "Austria", 
    region: "eur04", 
    description: "An Alpine nation famous for its musical heritage, imperial history, and stunning mountain scenery." 
  },
  { 
    id: "eu022", 
    name: "Liechtenstein", 
    region: "eur04", 
    description: "A small, mountainous principality between Austria and Switzerland known for its winter sports and finance." 
  },
  { 
    id: "eu023", 
    name: "Switzerland", 
    region: "eur04", 
    description: "A neutral nation famed for its banking, watches, and the breathtaking peaks of the Central Alps." 
  },

  // --- Balkans (eur05) ---
  { 
    id: "eu024", 
    name: "Albania", 
    region: "eur05", 
    description: "A Mediterranean country with a rugged coastline and diverse history located on the Balkan Peninsula." 
  },
  { 
    id: "eu025", 
    name: "Bosnia-And-Herzegovina", 
    region: "eur05", 
    description: "A nation characterized by its mix of Ottoman and Austro-Hungarian history and dramatic mountain landscapes." 
  },
  { 
    id: "eu026", 
    name: "Bulgaria", 
    region: "eur05", 
    description: "A Balkan nation with a diverse terrain featuring Black Sea beaches and a mountainous interior." 
  },
  { 
    id: "eu027", 
    name: "Croatia", 
    region: "eur05", 
    description: "Famous for its stunning Adriatic coast, over a thousand islands, and the historic city of Dubrovnik." 
  },
  { 
    id: "eu028", 
    name: "Kosovo", 
    region: "eur05", 
    description: "A young Balkan nation with a rich cultural heritage and a predominantly mountainous terrain." 
  },
  { 
    id: "eu029", 
    name: "Montenegro", 
    region: "eur05", 
    description: "Known for its medieval villages and the rugged mountains that rise steeply from the Adriatic Sea." 
  },
  { 
    id: "eu030", 
    name: "North-Macedonia", 
    region: "eur05", 
    description: "A landlocked Balkan country known for its deep history, mountains, and the ancient Lake Ohrid." 
  },
  { 
    id: "eu031", 
    name: "Serbia", 
    region: "eur05", 
    description: "Located at the crossroads of Central and Southeast Europe, known for its vibrant capital, Belgrade." 
  },
  { 
    id: "eu032", 
    name: "Slovenia", 
    region: "eur05", 
    description: "A green nation where the Alps meet the Mediterranean, famous for its lakes and emerald rivers." 
  },

  // --- Central & Eastern Europe (eur06) ---
  { 
    id: "eu033", 
    name: "Belarus", 
    region: "eur06", 
    description: "An Eastern European nation known for its Stalinist architecture and vast, ancient primeval forests." 
  },
  { 
    id: "eu034", 
    name: "Czech-Republic", 
    region: "eur06", 
    description: "Central European country famous for its ornate castles, native beers, and the Gothic beauty of Prague." 
  },
  { 
    id: "eu035", 
    name: "Hungary", 
    region: "eur06", 
    description: "A landlocked country known for the Danube River, thermal baths, and the grand architecture of Budapest." 
  },
  { 
    id: "eu036", 
    name: "Kazakhstan", 
    region: "eur06", 
    description: "A transcontinental nation with a small portion in Europe, known for its vast steppes and resources." 
  },
  { 
    id: "eu037", 
    name: "Moldova", 
    region: "eur06", 
    description: "A landlocked nation between Romania and Ukraine known for its varied terrain and well-established wine industry." 
  },
  { 
    id: "eu038", 
    name: "Poland", 
    region: "eur06", 
    description: "A nation with a resilient history, known for its medieval old towns and diverse natural beauty." 
  },
  { 
    id: "eu039", 
    name: "Romania", 
    region: "eur06", 
    description: "Famous for the forested region of Transylvania, the Carpathian Mountains, and preserved medieval towns." 
  },
  { 
    id: "eu040", 
    name: "Russia", 
    region: "eur06", 
    description: "The world's largest country, spanning Eastern Europe and Northern Asia with a profound cultural legacy." 
  },
  { 
    id: "eu041", 
    name: "Slovakia", 
    region: "eur06", 
    description: "Known for its dramatic mountain landscapes, numerous castles, and the high peaks of the Tatras." 
  },
  { 
    id: "eu042", 
    name: "Ukraine", 
    region: "eur06", 
    description: "The largest country entirely in Europe, known as a major agricultural producer with deep historical roots." 
  },

  // --- British Isles (eur07) ---
  { 
    id: "eu043", 
    name: "Ireland", 
    region: "eur07", 
    description: "The 'Emerald Isle' is famous for its lush green landscapes, rich folklore, and friendly pub culture." 
  },
  { 
    id: "eu044", 
    name: "United-Kingdom", 
    region: "eur07", 
    description: "Comprising four nations, it is a global cultural and financial leader with a deep royal history." 
  },

  // --- Baltics (eur08) ---
  { 
    id: "eu045", 
    name: "Estonia", 
    region: "eur08", 
    description: "A Baltic digital leader known for its tech innovation and well-preserved medieval capital, Tallinn." 
  },
  { 
    id: "eu046", 
    name: "Latvia", 
    region: "eur08", 
    description: "A Baltic nation known for its wide beaches, vast forests, and Art Nouveau architecture in Riga." 
  },
  { 
    id: "eu047", 
    name: "Lithuania", 
    region: "eur08", 
    description: "A country with a deep history, known for its unique language and the beautiful Baltic coast." 
  },

  // --- Caucasus (eur09) ---
  { 
    id: "eu048", 
    name: "Armenia", 
    region: "eur09", 
    description: "A nation in the Caucasus mountains known for ancient religious sites and rich cultural heritage." 
  },
  { 
    id: "eu049", 
    name: "Azerbaijan", 
    region: "eur09", 
    description: "Known as the 'Land of Fire,' it features a blend of modern architecture and ancient Silk Road history." 
  },
  { 
    id: "eu050", 
    name: "Georgia", 
    region: "eur09", 
    description: "A country in the Caucasus known for mountain villages, Black Sea beaches, and ancient wine-making." 
  },
  { 
    id: "eu051", 
    name: "Turkey", 
    region: "eur09", 
    description: "A transcontinental nation bridging Europe and Asia, famous for its rich Byzantine and Ottoman history." 
  }
];

 const cities = [
  // --- AUSTRIA ---
  {
    id: "euc001",
    cityName: "Vienna",
    countryId: "eu021",
    description: "As the magnificent imperial capital of Austria, Vienna is globally renowned for its storied classical music history, opulent baroque palaces, prestigious museums, and a sophisticated, historic coffee house culture.",
    bestSeason: "Spring",
    famousLocation: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Belvedere", "Hofburg", "Prater", "Vienna State Opera"]
  },
  {
    id: "euc002",
    cityName: "Salzburg",
    countryId: "eu021",
    description: "Nestled against the Alps, Salzburg is the celebrated birthplace of Mozart, offering visitors a perfectly preserved Baroque old town, stunning fortress views, and the enchanting setting for the Sound of Music.",
    bestSeason: "Summer",
    famousLocation: ["Hohensalzburg Fortress", "Mirabell Palace", "Getreidegasse", "Salzburg Cathedral", "Hellbrunn Palace", "Mozart's Birthplace"]
  },
  {
    id: "euc003",
    cityName: "Hallstatt",
    countryId: "eu021",
    description: "This iconic lakeside village is world-famous for its breathtaking alpine scenery, ancient salt mines, and charming sixteenth-century houses that reflect beautifully in the pristine, tranquil waters of the Hallstätter See.",
    bestSeason: "Autumn",
    famousLocation: ["Hallstatt Skywalk", "Salzwelten", "Beinhaus", "Central Square", "Lake Hallstatt", "Dachstein Ice Caves"]
  },
  {
    id: "euc004",
    cityName: "Innsbruck",
    countryId: "eu021",
    description: "A vibrant city located deep within the Alps, Innsbruck seamlessly blends imperial Habsburg history with world-class mountain sports, featuring the famous Golden Roof and breathtaking views from the Nordkette cable.",
    bestSeason: "Winter",
    famousLocation: ["Golden Roof", "Ambras Castle", "Hofkirche", "Bergisel Ski Jump", "Nordkette", "Old Town"]
  },
  {
    id: "euc005",
    cityName: "Graz",
    countryId: "eu021",
    description: "Graz is a UNESCO-listed city known for its remarkably preserved medieval old town, innovative modern architecture like the Kunsthaus, and a lively atmosphere driven by its large and diverse student population.",
    bestSeason: "Spring",
    famousLocation: ["Schlossberg", "Clock Tower", "Eggenberg Palace", "Kunsthaus Graz", "Murinsel", "Landzeughaus"]
  },
  {
    id: "euc006",
    cityName: "Zell-am-See",
    countryId: "eu021",
    description: "This scenic alpine resort town is perfectly situated on a sparkling blue lake, offering tourists year-round outdoor activities ranging from summer boat cruises to incredible winter skiing on the mountains.",
    bestSeason: "Summer",
    famousLocation: ["Lake Zell", "Schmittenhöhe", "Kaprun Castle", "Gipfelwelt 3000", "Old Town", "Sigmund-Thun-Klamm"]
  },

  // --- BELGIUM ---
  {
    id: "euc007",
    cityName: "Brussels",
    countryId: "eu006",
    description: "The vibrant capital of Belgium and the European Union, Brussels is famous for the stunning Grand Place, its intricate comic book art, delicious waffles, world-class chocolate, and the iconic Atomium.",
    bestSeason: "Spring",
    famousLocation: ["Grand Place", "Atomium", "Manneken Pis", "Royal Gallery", "Mini-Europe", "Comic Strip Center"]
  },
  {
    id: "euc008",
    cityName: "Bruges",
    countryId: "eu006",
    description: "Often called the Venice of the North, Bruges is an exceptionally well-preserved medieval city defined by its winding canals, cobbled streets, soaring belfries, and a charming, romantic atmosphere for travelers.",
    bestSeason: "Autumn",
    famousLocation: ["Belfry of Bruges", "Lake of Love", "Holy Blood Basilica", "Market Square", "Church of Our Lady", "Groeninge Museum"]
  },
  {
    id: "euc009",
    cityName: "Ghent",
    countryId: "eu006",
    description: "Ghent offers a unique blend of historic charm and modern vibrancy, featuring a stunning waterfront, medieval castles like Gravensteen, and a thriving local culture centered around its beautiful city center.",
    bestSeason: "Spring",
    famousLocation: ["Gravensteen Castle", "Saint Bavo's Cathedral", "Graslei", "Belfry of Ghent", "Saint Nicholas' Church", "Werregarenstraat"]
  },
  {
    id: "euc010",
    cityName: "Antwerp",
    countryId: "eu006",
    description: "As the diamond capital of the world, Antwerp is a major port city that boasts a rich artistic heritage, cutting-edge fashion boutiques, and one of the most beautiful railway stations.",
    bestSeason: "Summer",
    famousLocation: ["Antwerp Central", "Cathedral of Our Lady", "MAS Museum", "Rubens House", "Grote Markt", "Antwerp Zoo"]
  },
  {
    id: "euc011",
    cityName: "Dinant",
    countryId: "eu006",
    description: "Located along the Meuse River, Dinant is a picturesque town famous for its dramatic limestone cliffs, historic Collegiate Church, and being the birthplace of Adolphe Sax, the saxophone's famous inventor.",
    bestSeason: "Summer",
    famousLocation: ["Citadel", "Charles-de-Gaulle Bridge", "Adolphe Sax House", "Notre Dame Church", "Grotte La Merveilleuse", "Leffe Museum"]
  },
  {
    id: "euc012",
    cityName: "Leuven",
    countryId: "eu006",
    description: "Leuven is a historic university town known for its stunning Gothic Town Hall, the vast Oude Markt square often called the longest bar, and its deeply rooted, centuries-old brewing traditions.",
    bestSeason: "Autumn",
    famousLocation: ["Town Hall", "Saint Peter's Church", "Great Beguinage", "University Library", "Oude Markt", "Stella Artois Brewery"]
  },

  // --- FRANCE ---
  {
    id: "euc013",
    cityName: "Paris",
    countryId: "eu007",
    description: "The world-famous City of Light is a global icon for art, fashion, and gastronomy, featuring legendary landmarks like the Eiffel Tower and the Louvre within its romantic and historic streets.",
    bestSeason: "Spring",
    famousLocation: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Arc de Triomphe", "Sacré-Cœur", "Seine River"]
  },
  {
    id: "euc014",
    cityName: "Nice",
    countryId: "eu007",
    description: "Located on the stunning French Riviera, Nice offers a perfect blend of Mediterranean beaches, Italian-inspired architecture, vibrant local markets, and a glamorous lifestyle enjoyed by visitors from all around world.",
    bestSeason: "Summer",
    famousLocation: ["Promenade des Anglais", "Castle Hill", "Old Town", "Place Masséna", "Matisse Museum", "Chagall Museum"]
  },
  {
    id: "euc015",
    cityName: "Cannes",
    countryId: "eu007",
    description: "A glamorous destination on the French Riviera, Cannes is world-renowned for its prestigious international film festival, luxury sandy beaches, high-end boutiques, and the scenic, palm-lined Boulevard de la Croisette promenade.",
    bestSeason: "Summer",
    famousLocation: ["Palais des Festivals", "La Croisette", "Le Suquet", "Îles de Lérins", "Marché Forville", "Cannes Beach"]
  },
  {
    id: "euc016",
    cityName: "Provence",
    countryId: "eu007",
    description: "Provence is a dreamy region celebrated for its endless lavender fields, sprawling sunny vineyards, ancient Roman ruins, and charming hilltop villages that have inspired legendary artists like Vincent van Gogh.",
    bestSeason: "Summer",
    famousLocation: ["Palais des Papes", "Pont du Gard", "Sénanque Abbey", "Gorges du Verdon", "Carrieres des Lumieres", "Valensole Plateau"]
  },
  {
    id: "euc017",
    cityName: "Loire-Valley",
    countryId: "eu007",
    description: "Known as the Garden of France, the Loire Valley is famous for its fairytale Renaissance castles, lush green landscapes, historic riverside towns, and some of the world's most elegant vineyards.",
    bestSeason: "Autumn",
    famousLocation: ["Château de Chambord", "Château de Chenonceau", "Amboise", "Villandry Gardens", "Azay-le-Rideau", "Royal Estate"]
  },
  {
    id: "euc018",
    cityName: "Strasbourg",
    countryId: "eu007",
    description: "Strasbourg beautifully blends French and German cultures, featuring the stunning Petite France district, a magnificent Gothic cathedral, and serves as the official seat of the influential and historic European Parliament.",
    bestSeason: "Winter",
    famousLocation: ["Strasbourg Cathedral", "La Petite France", "European Parliament", "Palais Rohan", "Barrage Vauban", "Parc de l'Orangerie"]
  },
  {
    id: "euc019",
    cityName: "Annecy",
    countryId: "eu007",
    description: "Often called the Pearl of the French Alps, Annecy is a breathtaking town situated on a crystal-clear lake, featuring winding canals, pastel-colored houses, and a stunning medieval castle centerpiece architecture.",
    bestSeason: "Summer",
    famousLocation: ["Lake Annecy", "Palais de l'Île", "Château d'Annecy", "Pont des Amours", "Old Town", "Gardens of Europe"]
  },

  // --- GERMANY ---
  {
    id: "euc020",
    cityName: "Berlin",
    countryId: "eu008",
    description: "Germany's dynamic capital is a global hub of history, art, and nightlife, where iconic landmarks like the Brandenburg Gate stand alongside a vibrant, modern street art and digital technology culture.",
    bestSeason: "Summer",
    famousLocation: ["Brandenburg Gate", "Reichstag", "East Side Gallery", "Museum Island", "Checkpoint Charlie", "TV Tower"]
  },
  {
    id: "euc021",
    cityName: "Munich",
    countryId: "eu008",
    description: "Munich is the heart of Bavarian culture, famous for its grand Marienplatz, historic beer halls, world-class museums, and serving as the primary gateway to the stunning, nearby Bavarian Alpine peaks.",
    bestSeason: "Autumn",
    famousLocation: ["Marienplatz", "English Garden", "Hofbräuhaus", "Nymphenburg Palace", "Deutsches Museum", "Olympiapark"]
  },
  {
    id: "euc022",
    cityName: "Hamburg",
    countryId: "eu008",
    description: "A major international port city, Hamburg is known for its impressive maritime history, the historic Speicherstadt warehouse district, its unique Reeperbahn entertainment area, and more bridges than any other city.",
    bestSeason: "Spring",
    famousLocation: ["Elbphilharmonie", "Speicherstadt", "Miniatur Wunderland", "Planten un Blomen", "St. Michael's Church", "Alster Lake"]
  },
  {
    id: "euc023",
    cityName: "Heidelberg",
    countryId: "eu008",
    description: "Heidelberg is a quintessential romantic German town, home to the country's oldest university, a legendary hilltop castle ruin, and a beautiful old bridge overlooking the peaceful Neckar River valley landscapes.",
    bestSeason: "Spring",
    famousLocation: ["Heidelberg Castle", "Old Bridge", "Philosophers' Walk", "Heidelberg University", "Student Prison", "Holy Spirit Church"]
  },
  {
    id: "euc024",
    cityName: "Cologne",
    countryId: "eu008",
    description: "Dominated by its massive twin-spire cathedral, Cologne is a vibrant cultural hub on the Rhine River, famous for its colorful old town, world-class chocolate museum, and lively Carnival celebrations every year.",
    bestSeason: "Spring",
    famousLocation: ["Cologne Cathedral", "Hohenzollern Bridge", "Chocolate Museum", "Old Town", "Rhine Garden", "Museum Ludwig"]
  },
  {
    id: "euc025",
    cityName: "Dresden",
    countryId: "eu008",
    description: "Often called the Florence on the Elbe, Dresden is celebrated for its stunning Baroque architecture, restored historic landmarks, and world-class art collections housed in the magnificent Zwinger palace complex.",
    bestSeason: "Autumn",
    famousLocation: ["Frauenkirche", "Zwinger", "Semperoper", "Royal Palace", "Brühl's Terrace", "Pfunds Molkerei"]
  },

  // --- ITALY ---
  {
    id: "euc026",
    cityName: "Rome",
    countryId: "eu015",
    description: "As the Eternal City, Rome is a living museum where ancient Roman landmarks like the Colosseum stand beside modern boutiques, offering an unparalleled journey through thousands of years of history.",
    bestSeason: "Spring",
    famousLocation: ["Colosseum", "Pantheon", "Trevi Fountain", "Roman Forum", "Spanish Steps", "Vatican City"]
  },
  {
    id: "euc027",
    cityName: "Florence",
    countryId: "eu015",
    description: "The glorious birthplace of the Renaissance, Florence is a treasure trove of world-class art and architecture, featuring the magnificent Duomo and masterpieces by Michelangelo and Botticelli in historic galleries.",
    bestSeason: "Spring",
    famousLocation: ["Florence Cathedral", "Uffizi Gallery", "Ponte Vecchio", "Accademia", "Piazza della Signoria", "Boboli Gardens"]
  },
  {
    id: "euc028",
    cityName: "Venice",
    countryId: "eu015",
    description: "Venice is a unique, magical city built entirely on water, famous for its labyrinthine canals, elegant gondolas, historic St. Mark's Square, and a timeless, romantic appeal that captivates every visitor.",
    bestSeason: "Autumn",
    famousLocation: ["St. Mark's Basilica", "Doge's Palace", "Grand Canal", "Rialto Bridge", "Bridge of Sighs", "Burano"]
  },
  {
    id: "euc029",
    cityName: "Milan",
    countryId: "eu015",
    description: "Milan is Italy's sleek capital of fashion and design, featuring the breathtaking Gothic Duomo, world-famous luxury shopping, and Da Vinci's The Last Supper housed within its historic religious buildings.",
    bestSeason: "Autumn",
    famousLocation: ["Milan Cathedral", "Galleria Vittorio Emanuele", "Sforza Castle", "Teatro alla Scala", "Santa Maria delle Grazie", "Navigli"]
  },
  {
    id: "euc030",
    cityName: "Naples",
    countryId: "eu015",
    description: "A city bursting with life, Naples is the birthplace of pizza and offers rich archaeological treasures, vibrant street life, and close proximity to the ancient ruins of Pompeii and Vesuvius.",
    bestSeason: "Spring",
    famousLocation: ["Archaeological Museum", "Castel dell'Ovo", "Piazza del Plebiscito", "Catacombs", "Spaccanapoli", "Mount Vesuvius"]
  },
  {
    id: "euc031",
    cityName: "Amalfi-Coast",
    countryId: "eu015",
    description: "The Amalfi Coast is a stunning stretch of coastline featuring dramatic cliffs, colorful vertical villages like Positano, and turquoise waters that create one of the most beautiful landscapes in all Italy.",
    bestSeason: "Summer",
    famousLocation: ["Positano", "Amalfi Cathedral", "Villa Cimbrone", "Emerald Grotto", "Path of the Gods", "Ravello"]
  },
  {
    id: "euc032",
    cityName: "Verona",
    countryId: "eu015",
    description: "Famous as the setting for Shakespeare's Romeo and Juliet, Verona is a charming city known for its remarkably preserved Roman arena and its romantic, medieval streets and ancient marble architecture heritage.",
    bestSeason: "Summer",
    famousLocation: ["Verona Arena", "Juliet's House", "Piazza delle Erbe", "Castel San Pietro", "Castelvecchio", "San Zeno"]
  },

  // --- SPAIN ---
  {
    id: "euc033",
    cityName: "Barcelona",
    countryId: "eu019",
    description: "A Mediterranean marvel, Barcelona is famed for the unique modernist architecture of Antoni Gaudí, vibrant street performers on Las Ramblas, golden city beaches, and its legendary, passionate football culture vibes.",
    bestSeason: "Spring",
    famousLocation: ["Sagrada Família", "Park Güell", "Casa Batlló", "Gothic Quarter", "La Rambla", "Camp Nou"]
  },
  {
    id: "euc034",
    cityName: "Madrid",
    countryId: "eu019",
    description: "The sun-drenched capital of Spain, Madrid is renowned for its elegant royal palaces, world-class art museums like the Prado, expansive public parks, and a legendary, high-energy nightlife and culinary scene.",
    bestSeason: "Autumn",
    famousLocation: ["Royal Palace", "Prado Museum", "Retiro Park", "Plaza Mayor", "Gran Vía", "Puerta del Sol"]
  },
  {
    id: "euc035",
    cityName: "Seville",
    countryId: "eu019",
    description: "The heart of Andalusia, Seville is famous for its vibrant flamenco culture, the massive Gothic cathedral, the ornate Alcázar palace, and its orange-scented streets and historic, sunny atmosphere.",
    bestSeason: "Spring",
    famousLocation: ["Seville Cathedral", "Alcázar", "Plaza de España", "Giralda", "Setas de Sevilla", "Triana"]
  },
  {
    id: "euc036",
    cityName: "Granada",
    countryId: "eu019",
    description: "Nestled at the foot of the Sierra Nevada mountains, Granada is home to the breathtaking Alhambra palace complex, a stunning testament to the city's rich Moorish and Spanish history.",
    bestSeason: "Spring",
    famousLocation: ["Alhambra", "Generalife", "Albayzín", "Sacromonte", "Granada Cathedral", "Sierra Nevada"]
  },
  {
    id: "euc037",
    cityName: "Valencia",
    countryId: "eu019",
    description: "Valencia perfectly blends historic charm with futuristic architecture at the City of Arts and Sciences, all while offering beautiful Mediterranean beaches and being the authentic home of Spanish paella.",
    bestSeason: "Autumn",
    famousLocation: ["City of Arts and Sciences", "Oceanogràfic", "Valencia Cathedral", "Central Market", "Turia Park", "Malvarrosa Beach"]
  },
  {
    id: "euc038",
    cityName: "Ibiza",
    countryId: "eu019",
    description: "World-famous for its high-energy summer club scene and nightlife, Ibiza also offers serene turquoise coves, historic fortified old towns, and beautiful Mediterranean landscapes for those seeking peace and nature.",
    bestSeason: "Summer",
    famousLocation: ["Dalt Vila", "Es Vedrà", "Playa d'en Bossa", "Cala Comte", "Pacha", "San Antonio"]
  },
  {
    id: "euc039",
    cityName: "Tenerife",
    countryId: "eu019",
    description: "The largest of the Canary Islands, Tenerife features dramatic volcanic landscapes including Mount Teide, year-round sunshine, vibrant carnival celebrations, and diverse beaches ranging from golden sand to volcanic black.",
    bestSeason: "Winter",
    famousLocation: ["Mount Teide", "Loro Parque", "Siam Park", "Los Gigantes", "Santa Cruz", "Playa de las Américas"]
  },

  // --- PORTUGAL ---
  {
    id: "euc040",
    cityName: "Lisbon",
    countryId: "eu017",
    description: "Lisbon is a city of seven hills, famous for its yellow vintage trams, soulful Fado music, historic Belem tower, and stunning tile-covered buildings overlooking the wide Tagus River estuary waters.",
    bestSeason: "Spring",
    famousLocation: ["Belém Tower", "Jerónimos Monastery", "São Jorge Castle", "Alfama", "Rossio Square", "Santa Justa Lift"]
  },
  {
    id: "euc041",
    cityName: "Porto",
    countryId: "eu017",
    description: "Located along the Douro River, Porto is a colorful city famous for its world-class port wine, the iconic Dom Luís I Bridge, and its charming, UNESCO-listed Ribeira waterfront district charm.",
    bestSeason: "Autumn",
    famousLocation: ["Ribeira", "Dom Luís I Bridge", "Clérigos Church", "Livraria Lello", "Palácio da Bolsa", "Port Wine Cellars"]
  },
  {
    id: "euc042",
    cityName: "Algarve",
    countryId: "eu017",
    description: "Portugal's southernmost region is a paradise of golden beaches, dramatic sea caves, and picturesque fishing villages, making it one of the most popular summer holiday destinations in all of Europe.",
    bestSeason: "Summer",
    famousLocation: ["Benagil Cave", "Praia da Marinha", "Lagos", "Ponta da Piedade", "Vilamoura", "Sagres"]
  },
  {
    id: "euc043",
    cityName: "Sintra",
    countryId: "eu017",
    description: "Just outside Lisbon, Sintra is a fairytale town nestled in lush hills, famous for its romantic 19th-century architecture, colorful palaces, and mysterious misty forests that feel like another world.",
    bestSeason: "Spring",
    famousLocation: ["Pena Palace", "Quinta da Regaleira", "Moorish Castle", "Sintra National Palace", "Monserrate Palace", "Cabo da Roca"]
  },
  {
    id: "euc044",
    cityName: "Madeira",
    countryId: "eu017",
    description: "Known as the Island of Eternal Spring, Madeira offers lush subtropical landscapes, dramatic volcanic cliffs, famous levada irrigation canal hikes, and a unique, colorful capital city in Funchal.",
    bestSeason: "Spring",
    famousLocation: ["Funchal", "Pico do Arieiro", "Cabo Girão", "Monte Palace", "Porto Moniz", "Levada Walks"]
  },
  {
    id: "euc045",
    cityName: "Azores",
    countryId: "eu017",
    description: "This remote volcanic archipelago in the Atlantic is a haven for nature lovers, offering crater lakes, geothermal hot springs, world-class whale watching, and some of Europe's most pristine landscapes.",
    bestSeason: "Summer",
    famousLocation: ["Sete Cidades", "Furnas", "Mount Pico", "Lagoa do Fogo", "Angra do Heroísmo", "Whale Watching"]
  },

  // --- NETHERLANDS ---
  {
    id: "euc046",
    cityName: "Amsterdam",
    countryId: "eu011",
    description: "The iconic capital of the Netherlands, Amsterdam is famous for its intricate canal network, world-class museums, historic Anne Frank House, and its unique, relaxed city culture and artistic heritage.",
    bestSeason: "Spring",
    famousLocation: ["Rijksmuseum", "Van Gogh Museum", "Anne Frank House", "Vondelpark", "Dam Square", "Jordaan"]
  },
  {
    id: "euc047",
    cityName: "Rotterdam",
    countryId: "eu011",
    description: "Rotterdam is a city of the future, known for its bold modern architecture, the iconic Erasmus Bridge, vibrant Markthal, and possessing one of the largest and busiest harbors in the world.",
    bestSeason: "Summer",
    famousLocation: ["Cube Houses", "Erasmus Bridge", "Markthal", "Euromast", "Delfshaven", "Maritime Museum"]
  },
  {
    id: "euc048",
    cityName: "Utrecht",
    countryId: "eu011",
    description: "Utrecht is a vibrant medieval city in the heart of the Netherlands, famous for its unique wharf-side canals, the iconic Dom Tower, and a lively, student-driven cultural atmosphere throughout.",
    bestSeason: "Spring",
    famousLocation: ["Dom Tower", "Canal Area", "Centraal Museum", "Railway Museum", "St. Martin's Cathedral", "Castle de Haar"]
  },
  {
    id: "euc049",
    cityName: "Giethoorn",
    countryId: "eu011",
    description: "Known as the Venice of the North, this fairytale village features no roads; instead, locals and tourists navigate its charming thatched-roof farmhouses and wooden bridges via peaceful water canals.",
    bestSeason: "Summer",
    famousLocation: ["Binnenpad", "Museum Giethoorn", "De Oude Aarde", "Smit's Boat Trip", "National Park", "Wooden Bridges"]
  },
  {
    id: "euc050",
    cityName: "Haarlem",
    countryId: "eu011",
    description: "Just a short trip from Amsterdam, Haarlem offers a relaxed pace with its historic Grote Markt, stunning hidden courtyards, excellent shopping streets, and world-class museums showcasing Dutch Master artworks.",
    bestSeason: "Spring",
    famousLocation: ["Grote Kerk", "Frans Hals Museum", "Teylers Museum", "Molen de Adriaan", "Jopenkerk", "Haarlemmerhout"]
  },
  {
    id: "euc051",
    cityName: "The-Hague",
    countryId: "eu011",
    description: "As the seat of the Dutch government and international law, The Hague blends royal history with seaside charm, featuring grand palaces, prestigious art galleries, and the popular Scheveningen beach resort.",
    bestSeason: "Autumn",
    famousLocation: ["Binnenhof", "Mauritshuis", "Peace Palace", "Madurodam", "Scheveningen Beach", "Escher Museum"]
  },

  // --- SWITZERLAND ---
  {
    id: "euc052",
    cityName: "Zurich",
    countryId: "eu023",
    description: "Zurich is Switzerland's global center for banking and finance, nestled at the north end of Lake Zurich, offering high-end shopping, pristine waterfront views, and a well-preserved medieval old town.",
    bestSeason: "Winter",
    famousLocation: ["Lake Zurich", "Bahnhofstrasse", "Grossmünster", "Fraumünster", "Uetliberg", "Old Town"]
  },
  {
    id: "euc053",
    cityName: "Geneva",
    countryId: "eu023",
    description: "Surrounded by the Alps and Jura mountains, Geneva is a cosmopolitan hub for international diplomacy, famous for the Jet d'Eau fountain, luxury watchmaking heritage, and its stunning lakeside promenade.",
    bestSeason: "Summer",
    famousLocation: ["Jet d'Eau", "Palais des Nations", "St. Pierre Cathedral", "CERN", "Patek Philippe Museum", "Jardin Anglais"]
  },
  {
    id: "euc054",
    cityName: "Lucerne",
    countryId: "eu023",
    description: "Lucerne is a quintessential Swiss town known for its preserved medieval architecture, the iconic covered Chapel Bridge, and its spectacular location amidst snow-capped peaks on the shores of Lake Lucerne.",
    bestSeason: "Spring",
    famousLocation: ["Chapel Bridge", "Lion Monument", "Transport Museum", "Mount Pilatus", "Mount Rigi", "Old Town Walls"]
  },
  {
    id: "euc055",
    cityName: "Interlaken",
    countryId: "eu023",
    description: "Nestled between Lake Thun and Lake Brienz, Interlaken is the adventure capital of Switzerland, serving as the primary gateway for exploring the majestic Jungfrau region and its high-altitude peaks.",
    bestSeason: "Summer",
    famousLocation: ["Harder Kulm", "Höhematte Park", "Lake Brienz", "Lake Thun", "Schynige Platte", "St. Beatus Caves"]
  },
  {
    id: "euc056",
    cityName: "Zermatt",
    countryId: "eu023",
    description: "A car-free mountain resort, Zermatt is world-famous for its iconic view of the Matterhorn, offering elite skiing, mountain climbing, and high-end boutiques along its charming, traditional wooden-chalet streets.",
    bestSeason: "Winter",
    famousLocation: ["Matterhorn", "Gornergrat Railway", "Glacier Paradise", "Sunnegga", "Hinterdorf", "Zermatt Village"]
  },
  {
    id: "euc057",
    cityName: "St-Moritz",
    countryId: "eu023",
    description: "St. Moritz is a luxury alpine resort town celebrated for hosting the Winter Olympics twice, offering glamorous social scenes, mineral springs, and world-class winter sports on its famous frozen lake.",
    bestSeason: "Winter",
    famousLocation: ["Lake St. Moritz", "Corviglia", "Piz Nair", "Segantini Museum", "Olympic Bobrun", "Cresta Run"]
  },

  // --- GREECE ---
  {
    id: "euc058",
    cityName: "Athens",
    countryId: "eu014",
    description: "The historic capital of Greece, Athens is dominated by 5th-century BC landmarks like the Acropolis, blending ancient archaeological wonders with a bustling, modern Mediterranean city life and culinary scenes.",
    bestSeason: "Spring",
    famousLocation: ["Acropolis", "Parthenon", "Plaka", "Ancient Agora", "Temple of Zeus", "Mount Lycabettus"]
  },
  {
    id: "euc059",
    cityName: "Santorini",
    countryId: "eu014",
    description: "Known for its dramatic volcanic cliffs and iconic blue-domed churches, Santorini offers breathtaking sunsets over the Aegean Sea, unique black-sand beaches, and charming whitewashed villages perched high above water.",
    bestSeason: "Summer",
    famousLocation: ["Oia Village", "Fira", "Red Beach", "Akrotiri", "Amoudi Bay", "Imerovigli"]
  },
  {
    id: "euc060",
    cityName: "Mykonos",
    countryId: "eu014",
    description: "Mykonos is Greece's glamorous party island, famous for its energetic nightlife, beautiful sandy beaches, iconic 16th-century windmills, and the narrow, picturesque winding streets of its charming main town, Chora.",
    bestSeason: "Summer",
    famousLocation: ["Little Venice", "Windmills", "Paradise Beach", "Delos Island", "Panagia Paraportiani", "Mykonos Town"]
  },
  {
    id: "euc061",
    cityName: "Crete",
    countryId: "eu014",
    description: "Crete is Greece's largest island, a diverse landscape ranging from the White Mountains to fine-sand beaches, featuring ancient Minoan ruins at Knossos and a rich, traditional Cretan gastronomic heritage.",
    bestSeason: "Autumn",
    famousLocation: ["Palace of Knossos", "Elafonisi Beach", "Samaria Gorge", "Chania Old Town", "Heraklion Museum", "Balos Lagoon"]
  },
  {
    id: "euc062",
    cityName: "Rhodes",
    countryId: "eu014",
    description: "Famous for its medieval Old Town built by the Knights of St. John, Rhodes offers a perfect blend of Crusader castles, ancient ruins, and beautiful coastal resorts along its shores.",
    bestSeason: "Spring",
    famousLocation: ["Grand Master Palace", "Lindos Acropolis", "Rhodes Old Town", "Prasonisi Beach", "Anthony Quinn Bay", "Butterfly Valley"]
  },
  {
    id: "euc063",
    cityName: "Meteora",
    countryId: "eu014",
    description: "Meteora is a stunning rock formation in central Greece hosting one of the largest complexes of Eastern Orthodox monasteries, spectacularly built atop towering natural sandstone pillars reaching toward the sky.",
    bestSeason: "Autumn",
    famousLocation: ["Great Meteoron", "Varlaam Monastery", "Roussanou", "Holy Trinity", "Kastraki Village", "Kalambaka"]
  },
  {
    id: "euc064",
    cityName: "Naxos",
    countryId: "eu014",
    description: "Naxos is the largest of the Cyclades islands, known for its mountainous interior, ancient marble ruins like the Portara, and some of the longest, most beautiful sandy beaches in Greece.",
    bestSeason: "Summer",
    famousLocation: ["Portara", "Naxos Castle", "Agios Prokopios", "Plaka Beach", "Mount Zeus", "Halki Village"]
  },

  // --- UNITED KINGDOM ---
  {
    id: "euc065",
    cityName: "London",
    countryId: "eu044",
    description: "London is a global powerhouse of history and culture, home to iconic Big Ben, the Tower of London, and a diverse culinary scene that perfectly reflects its grand international spirit.",
    bestSeason: "Spring",
    famousLocation: ["British Museum", "Tower Bridge", "London Eye", "Buckingham Palace", "Westminster Abbey", "Hyde Park"]
  },
  {
    id: "euc066",
    cityName: "Edinburgh",
    countryId: "eu044",
    description: "Scotland's hilly capital features a medieval Old Town and an elegant Georgian New Town, all dominated by the majestic Edinburgh Castle and the annual world-renowned arts festivals held every August.",
    bestSeason: "Summer",
    famousLocation: ["Edinburgh Castle", "Royal Mile", "Arthur's Seat", "Holyrood Palace", "Calton Hill", "Princes Street"]
  },
  {
    id: "euc067",
    cityName: "Manchester",
    countryId: "eu044",
    description: "A major city in northwest England with a rich industrial heritage, Manchester is celebrated globally for its legendary music scene, world-class football clubs, and its vibrant, modern canal-side developments.",
    bestSeason: "Spring",
    famousLocation: ["Old Trafford", "Etihad Stadium", "Science Museum", "Manchester Art Gallery", "John Rylands Library", "Northern Quarter"]
  },
  {
    id: "euc068",
    cityName: "Liverpool",
    countryId: "eu044",
    description: "Famous as the birthplace of The Beatles, Liverpool is a historic maritime city featuring the iconic Albert Dock, grand cathedrals, and a passionate culture centered around its music and sports.",
    bestSeason: "Summer",
    famousLocation: ["The Cavern Club", "Royal Albert Dock", "Liverpool Cathedral", "The Beatles Story", "Anfield", "Museum of Liverpool"]
  },
  {
    id: "euc069",
    cityName: "Lake-District",
    countryId: "eu044",
    description: "A stunning national park in Northwest England, the Lake District is beloved for its glacial ribbon lakes, rugged fell mountains, and literary associations with famous poets like William Wordsworth.",
    bestSeason: "Autumn",
    famousLocation: ["Lake Windermere", "Scafell Pike", "Grasmere", "Derwentwater", "Helvellyn", "Hill Top"]
  },
  {
    id: "euc070",
    cityName: "Oxford",
    countryId: "eu044",
    description: "Known as the City of Dreaming Spires, Oxford is home to the world's oldest English-speaking university, featuring historic colleges, majestic libraries, and a scholarly atmosphere that has inspired authors.",
    bestSeason: "Spring",
    famousLocation: ["Christ Church", "Bodleian Library", "Ashmolean Museum", "Radcliffe Camera", "Oxford Castle", "River Cherwell"]
  },
  {
    id: "euc071",
    cityName: "Cambridge",
    countryId: "eu044",
    description: "Cambridge is a prestigious university city known for its stunning Gothic architecture, the serene River Cam where students enjoy punting, and the historic King's College Chapel with its choir.",
    bestSeason: "Spring",
    famousLocation: ["King's College Chapel", "The Backs", "Fitzwilliam Museum", "Mathematical Bridge", "Botanic Garden", "River Cam"]
  },

  // --- IRELAND ---
  {
    id: "euc072",
    cityName: "Dublin",
    countryId: "eu043",
    description: "Ireland's capital is a friendly city rich in literary history, famous for the historic Trinity College, the lively Temple Bar district, and its deep-rooted heritage of brewing and music.",
    bestSeason: "Spring",
    famousLocation: ["Guinness Storehouse", "Trinity College", "Temple Bar", "Phoenix Park", "St. Patrick's Cathedral", "Kilmainham Gaol"]
  },
  {
    id: "euc073",
    cityName: "Galway",
    countryId: "eu043",
    description: "Located on Ireland's west coast, Galway is a bohemian harbor city known for its brightly painted pubs, traditional Irish music sessions, and its role as a gateway to the Atlantic.",
    bestSeason: "Summer",
    famousLocation: ["Eyre Square", "Latin Quarter", "Salthill Promenade", "Spanish Arch", "Galway Cathedral", "Claddagh"]
  },
  {
    id: "euc074",
    cityName: "Cork",
    countryId: "eu043",
    description: "Cork is a vibrant city situated on the River Lee, featuring a world-famous food market, historic gaols, and a rebellious spirit that locals proudly claim as the real capital.",
    bestSeason: "Autumn",
    famousLocation: ["English Market", "Blarney Castle", "University College Cork", "Cork City Gaol", "Saint Fin Barre's Cathedral", "Fota Wildlife Park"]
  },
  {
    id: "euc075",
    cityName: "Cliffs-of-Moher",
    countryId: "eu043",
    description: "Towering over the Atlantic Ocean in County Clare, these majestic sea cliffs offer some of the most spectacular coastal views in the world and are a symbol of Ireland's beauty.",
    bestSeason: "Summer",
    famousLocation: ["O'Brien's Tower", "Hags Head", "Visitor Centre", "Coastal Walk", "Doolin Village", "Burren National Park"]
  },
  {
    id: "euc076",
    cityName: "Killarney",
    countryId: "eu043",
    description: "Killarney is a scenic town nestled within a magnificent national park, famous for its sparkling lakes, historic Ross Castle, and serving as the starting point for the iconic Ring drive.",
    bestSeason: "Spring",
    famousLocation: ["Killarney National Park", "Ross Castle", "Muckross House", "Torc Waterfall", "Ladies View", "Gap of Dunloe"]
  },
  {
    id: "euc077",
    cityName: "Belfast",
    countryId: "eu044", // Note: Belfast is in the UK (Northern Ireland)
    description: "Belfast is a city of transformation, known for its maritime history as the birthplace of the Titanic, its historic political murals, and a rapidly growing modern culinary and arts scene.",
    bestSeason: "Autumn",
    famousLocation: ["Titanic Belfast", "Belfast City Hall", "Crumlin Road Gaol", "Botanic Gardens", "St. George's Market", "Peace Walls"]
  },

  // --- ICELAND ---
  {
    id: "euc078",
    cityName: "Reykjavik",
    countryId: "eu003",
    description: "The world's northernmost capital, Reykjavik is a colorful hub of Icelandic culture, known for its unique Hallgrímskirkja church, vibrant street art, and serving as a base for Aurora Borealis expeditions.",
    bestSeason: "Winter",
    famousLocation: ["Hallgrímskirkja", "Harpa Concert Hall", "Sun Voyager", "Perlan", "Laugavegur Street", "National Museum"]
  },
  {
    id: "euc079",
    cityName: "Golden-Circle",
    countryId: "eu003",
    description: "The Golden Circle is a world-famous route near Reykjavik, featuring the erupting Geysir geothermal area, the massive Gullfoss waterfall, and the historic Thingvellir National Park tectonic rift valley landscapes.",
    bestSeason: "All Year",
    famousLocation: ["Thingvellir", "Gullfoss", "Geysir", "Kerid Crater", "Secret Lagoon", "Friðheimar Farm"]
  },
  {
    id: "euc080",
    cityName: "Blue-Lagoon",
    countryId: "eu003",
    description: "A world-renowned geothermal spa located in a lava field, the Blue Lagoon is famous for its milky-blue, mineral-rich waters and its rejuvenating silica mud masks amidst surreal volcanic scenery.",
    bestSeason: "Winter",
    famousLocation: ["Geothermal Lagoon", "Retreat Spa", "Lava Restaurant", "Silica Hotel", "Mask Bar", "Sauna"]
  },
  {
    id: "euc081",
    cityName: "South-Coast",
    countryId: "eu003",
    description: "Iceland's dramatic South Coast features the towering Skógafoss and Seljalandsfoss waterfalls, the Reynisfjara black sand beach, and spectacular glacier lagoons that showcase the raw power of magnificent Arctic nature.",
    bestSeason: "Summer",
    famousLocation: ["Skógafoss", "Seljalandsfoss", "Reynisfjara Beach", "Jökulsárlón", "Vík Village", "Diamond Beach"]
  },
  {
    id: "euc082",
    cityName: "Akureyri",
    countryId: "eu003",
    description: "Known as the Capital of the North, Akureyri is a charming town set at the base of snow-capped mountains, offering world-class whale watching, botanical gardens, and excellent nearby skiing.",
    bestSeason: "Winter",
    famousLocation: ["Akureyrarkirkja", "Botanical Garden", "Hlíðarfjall", "Laufás Turf Homes", "Godafoss", "Lake Mývatn"]
  },
  {
    id: "euc083",
    cityName: "Westfjords",
    countryId: "eu003",
    description: "The remote Westfjords region offers Iceland's most rugged and untouched landscapes, featuring massive bird cliffs, deep dramatic fjords, and the thunderous Dynjandi waterfall, perfect for travelers seeking Arctic solitude.",
    bestSeason: "Summer",
    famousLocation: ["Dynjandi", "Látrabjarg Cliffs", "Rauðasandur", "Isafjordur", "Hornstrandir", "Arctic Fox Centre"]
  },

  // --- NORWAY ---
  {
    id: "euc084",
    cityName: "Oslo",
    countryId: "eu004",
    description: "Norway's capital combines modern architecture with vast green spaces, featuring the impressive Vigeland Sculpture Park, world-class museums on the Bygdøy peninsula, and a stunning, walkable waterfront district by the fjord.",
    bestSeason: "Summer",
    famousLocation: ["Vigeland Park", "Opera House", "Viking Ship Museum", "Akershus Fortress", "Holmenkollen", "Munch Museum"]
  },
  {
    id: "euc085",
    cityName: "Bergen",
    countryId: "eu004",
    description: "Known as the Gateway to the Fjords, Bergen is a picturesque city famous for the colorful wooden houses of Bryggen, its lively fish market, and the scenic Fløibanen funicular views.",
    bestSeason: "Spring",
    famousLocation: ["Bryggen", "Mount Fløyen", "Fish Market", "Troldhaugen", "Bergen Aquarium", "Hanseatic Museum"]
  },
  {
    id: "euc086",
    cityName: "Geirangerfjord",
    countryId: "eu004",
    description: "Geiranger is home to one of Norway's most spectacular UNESCO-listed fjords, famous for its deep blue waters, vertical mountain cliffs, and the iconic Seven Sisters and Suitor waterfalls pouring down.",
    bestSeason: "Summer",
    famousLocation: ["Seven Sisters", "Ørnesvingen", "Dalsnibba", "Flydalsjuvet", "Fjord Centre", "Eagle Road"]
  },
  {
    id: "euc087",
    cityName: "Lofoten-Islands",
    countryId: "eu004",
    description: "Lofoten is an archipelago known for its dramatic mountain peaks, turquoise waters, white sand beaches, and traditional red rorbu cabins that house local fishing communities in a majestic setting.",
    bestSeason: "Summer",
    famousLocation: ["Reine", "Henningsvær", "Å Village", "Kvalvika Beach", "Nusfjord", "Lofotr Viking Museum"]
  },
  {
    id: "euc088",
    cityName: "Tromso",
    countryId: "eu004",
    description: "Located high above the Arctic Circle, Tromso is a premier destination for viewing the Northern Lights, featuring the Arctic Cathedral and a vibrant cultural scene despite its extreme northern latitude.",
    bestSeason: "Winter",
    famousLocation: ["Arctic Cathedral", "Fjellheisen", "Polaria", "Tromsø Museum", "Mack Brewery", "Prestvannet Lake"]
  },
  {
    id: "euc089",
    cityName: "Flam",
    countryId: "eu004",
    description: "Nestled at the end of Aurlandsfjord, Flåm is world-famous for its scenic railway journey, offering breathtaking views of waterfalls and steep mountainsides as it climbs into the high alpine terrain.",
    bestSeason: "Summer",
    famousLocation: ["Flåm Railway", "Stegastein Viewpoint", "Nærøyfjord", "Brekkefossen", "Flåm Railway Museum", "Ægir BrewPub"]
  },

  // --- SWEDEN ---
  {
    id: "euc090",
    cityName: "Stockholm",
    countryId: "eu005",
    description: "Built on fourteen islands, Sweden's capital is an elegant mix of modern design and historic charm, featuring the colorful Gamla Stan, the royal palace, and the massive Vasa museum ship.",
    bestSeason: "Summer",
    famousLocation: ["Gamla Stan", "Vasa Museum", "Skansen", "ABBA Museum", "Royal Palace", "City Hall"]
  },
  {
    id: "euc091",
    cityName: "Gothenburg",
    countryId: "eu005",
    description: "Gothenburg is a relaxed coastal city famous for its Dutch-style canals, leafy boulevards, a world-class culinary scene focusing on seafood, and the popular Liseberg amusement park in the city center.",
    bestSeason: "Summer",
    famousLocation: ["Liseberg", "Universeum", "Haga District", "Feskekôrka", "Gothenburg Archipelago", "Garden Society"]
  },
  {
    id: "euc092",
    cityName: "Malmo",
    countryId: "eu005",
    description: "Linked to Copenhagen by the massive Öresund Bridge, Malmö is a modern multicultural city known for its Turning Torso skyscraper, innovative urban sustainability, and beautiful seaside parks along the coast.",
    bestSeason: "Spring",
    famousLocation: ["Turning Torso", "Malmö Castle", "Lilla Torg", "Pildammsparken", "Ribersborg Beach", "Moderna Museet"]
  },
  {
    id: "euc093",
    cityName: "Uppsala",
    countryId: "eu005",
    description: "Uppsala is a historic university city featuring Scandinavia's largest cathedral, the prestigious Uppsala University, and rich Viking history evidenced by the ancient burial mounds at Gamla Uppsala just nearby.",
    bestSeason: "Spring",
    famousLocation: ["Uppsala Cathedral", "Gustavianum", "Linnaeus Garden", "Uppsala Castle", "Gamla Uppsala", "University Library"]
  },
  {
    id: "euc094",
    cityName: "Visby",
    countryId: "eu005",
    description: "Located on Gotland island, Visby is a remarkably preserved medieval walled town and UNESCO site, famous for its limestone architecture, cobblestone streets, and the annual Middle Ages cultural festival held.",
    bestSeason: "Summer",
    famousLocation: ["Visby City Wall", "Saint Mary's Cathedral", "Almedalen", "Gotland Museum", "Botanical Garden", "DBW's Garden"]
  },
  {
    id: "euc095",
    cityName: "Abisko",
    countryId: "eu005",
    description: "Abisko is a prime destination for witnessing the Northern Lights due to its unique microclimate, offering stunning Arctic wilderness, hiking trails in the national park, and the famous Aurora Sky Station.",
    bestSeason: "Winter",
    famousLocation: ["Aurora Sky Station", "Abisko National Park", "Lake Torneträsk", "Abiskojokk Canyon", "Kungsleden", "Mount Nuolja"]
  },

  // --- FINLAND ---
  {
    id: "euc096",
    cityName: "Helsinki",
    countryId: "eu002",
    description: "Finland's design-forward capital is a vibrant Baltic city known for its unique white cathedral, modern architecture, steaming public saunas, and the massive sea fortress of Suomenlinna protecting its busy harbor.",
    bestSeason: "Summer",
    famousLocation: ["Helsinki Cathedral", "Suomenlinna", "Temppeliaukio Church", "Market Square", "Löyly Sauna", "Kamppi Chapel"]
  },
  {
    id: "euc097",
    cityName: "Rovaniemi",
    countryId: "eu002",
    description: "As the official hometown of Santa Claus, Rovaniemi is a magical Arctic destination featuring the Santa Claus Village, husky sledding adventures, and spectacular views of the Aurora Borealis during winter.",
    bestSeason: "Winter",
    famousLocation: ["Santa Claus Village", "Arktikum", "SantaPark", "Ounasvaara", "Ranua Zoo", "Husky Park"]
  },
  {
    id: "euc098",
    cityName: "Lapland",
    countryId: "eu002",
    description: "Finnish Lapland is a vast Arctic wilderness offering reindeer safaris, glass igloo stays, and legendary winter landscapes that create a perfect backdrop for once-in-a-lifetime Northern Lights and outdoor snowy experiences.",
    bestSeason: "Winter",
    famousLocation: ["Levi Ski Resort", "Urho Kekkonen Park", "Inari Lake", "Pallas-Yllästunturi", "SnowVillage", "Reindeer Farm"]
  },
  {
    id: "euc099",
    cityName: "Turku",
    countryId: "eu002",
    description: "Turku is Finland's historic former capital, featuring a grand medieval castle, a historic cathedral, and a vibrant riverfront scene that comes alive during the summer with music and food festivals.",
    bestSeason: "Summer",
    famousLocation: ["Turku Castle", "Turku Cathedral", "Aboa Vetus & Ars Nova", "Forum Marinum", "Ruissalo Island", "Market Square"]
  },
  {
    id: "euc100",
    cityName: "Tampere",
    countryId: "eu002",
    description: "Known as the Sauna Capital of the World, Tampere is a lakeside city with a rich industrial heritage, unique museums, and the popular Särkänniemi amusement park overlooking the scenic lakes.",
    bestSeason: "Summer",
    famousLocation: ["Särkänniemi", "Moomin Museum", "Pyynikki Tower", "Vapriikki Museum", "Pispala District", "Rajaportti Sauna"]
  },
  {
    id: "euc101",
    cityName: "Savonlinna",
    countryId: "eu002",
    description: "Savonlinna is a beautiful lakeside town famous for its magnificent medieval Olavinlinna Castle, which hosts a world-renowned annual opera festival amidst the stunning scenery of the Finnish Lakeland region.",
    bestSeason: "Summer",
    famousLocation: ["Olavinlinna Castle", "Lake Saimaa", "Punkaharju Ridge", "Savonlinna Cathedral", "Riihisaari Museum", "Kerimäki Church"]
  },

  // --- DENMARK ---
  {
    id: "euc102",
    cityName: "Copenhagen",
    countryId: "eu001",
    description: "Copenhagen is a bike-friendly capital celebrated for its cutting-edge design, the historic colorful Nyhavn harbor, the legendary Tivoli Gardens, and a world-leading culinary scene focusing on Nordic flavors.",
    bestSeason: "Summer",
    famousLocation: ["Nyhavn", "Tivoli Gardens", "The Little Mermaid", "Amalienborg", "Christiania", "Rosenborg Castle"]
  },
  {
    id: "euc103",
    cityName: "Aarhus",
    countryId: "eu001",
    description: "Aarhus is a dynamic cultural hub featuring the impressive ARoS art museum with its rainbow panorama, the historic Den Gamle By open-air museum, and a vibrant, modern waterfront area development.",
    bestSeason: "Spring",
    famousLocation: ["ARoS Aarhus Art Museum", "Den Gamle By", "Moesgaard Museum", "Marselisborg", "The Latin Quarter", "Dokk1"]
  },
  {
    id: "euc104",
    cityName: "Odense",
    countryId: "eu001",
    description: "The birthplace of legendary storyteller Hans Christian Andersen, Odense is a charming city that honors its fairytale heritage through museums, statues, and cobblestone streets in the historic old town district.",
    bestSeason: "Summer",
    famousLocation: ["H.C. Andersen House", "Odense Zoo", "Egeskov Castle", "The Funen Village", "Odense Cathedral", "Munke Mose"]
  },
  {
    id: "euc105",
    cityName: "Roskilde",
    countryId: "eu001",
    description: "Roskilde is famous for its rich Viking history, featuring the Viking Ship Museum, a magnificent twin-spired cathedral, and hosting one of Europe's largest annual music festivals every single summer season.",
    bestSeason: "Summer",
    famousLocation: ["Viking Ship Museum", "Roskilde Cathedral", "Ragnarock Museum", "Roskilde Fjord", "The Land of Legends", "City Square"]
  },
  {
    id: "euc106",
    cityName: "Skagen",
    countryId: "eu001",
    description: "Located at the northernmost tip of Denmark, Skagen is famous for its unique light that inspired painters, yellow houses, and Grenen, where the North Sea and Baltic Sea clearly meet.",
    bestSeason: "Summer",
    famousLocation: ["Grenen", "Skagens Museum", "The Buried Church", "Råbjerg Mile", "Skagen Lighthouse", "Anchers Hus"]
  },
  {
    id: "euc107",
    cityName: "Bornholm",
    countryId: "eu001",
    description: "Bornholm is a nature-rich Baltic island known for its dramatic rocky coastlines, round medieval churches, white sand beaches, and its traditional smokehouses serving delicious local smoked fish and seafood.",
    bestSeason: "Summer",
    famousLocation: ["Hammershus Castle", "Dueodde Beach", "Round Churches", "Echo Valley", "Gudhjem", "Østerlars Church"]
  },

  // --- POLAND ---
  {
    id: "euc108",
    cityName: "Krakow",
    countryId: "eu038",
    description: "Kraków is a cultural gem featuring one of Europe's largest medieval market squares, the historic Wawel Castle, and its proximity to the moving Auschwitz-Birkenau Memorial and the Wieliczka Salt Mine.",
    bestSeason: "Spring",
    famousLocation: ["Main Market Square", "Wawel Royal Castle", "Kazimierz District", "St. Mary's Basilica", "Cloth Hall", "Schindler's Factory"]
  },
  {
    id: "euc109",
    cityName: "Warsaw",
    countryId: "eu038",
    description: "Poland's resilient capital boasts a beautifully rebuilt historic Old Town, a mix of Gothic and socialist realist architecture, and a thriving modern food scene centered around its vibrant city districts.",
    bestSeason: "Autumn",
    famousLocation: ["Old Town Market", "Royal Castle", "Palace of Culture", "Łazienki Park", "Warsaw Uprising Museum", "Wilanów Palace"]
  },
  {
    id: "euc110",
    cityName: "Gdansk",
    countryId: "eu038",
    description: "Gdansk is a colorful Baltic port city with a rich maritime history, featuring the iconic Crane, the elegant Long Market, and its significance as the birthplace of the Solidarity movement.",
    bestSeason: "Summer",
    famousLocation: ["Long Market", "Neptune's Fountain", "St. Mary's Church", "The Crane", "Solidarity Museum", "Oliwa Cathedral"]
  },
  {
    id: "euc111",
    cityName: "Wroclaw",
    countryId: "eu038",
    description: "Known as the City of Bridges, Wrocław is famous for its hundreds of tiny bronze gnomes, a stunning gothic town hall, and its beautiful islands located along the peaceful Oder River.",
    bestSeason: "Spring",
    famousLocation: ["Market Square", "Ostrów Tumski", "Centennial Hall", "Panorama of Racławice", "Wrocław Gnomes", "Oder River"]
  },
  {
    id: "euc112",
    cityName: "Zakopane",
    countryId: "eu038",
    description: "Zakopane is Poland's premier mountain resort, nestled at the foot of the Tatra Mountains, offering traditional wooden architecture, vibrant highland culture, and incredible hiking and skiing opportunities for outdoor enthusiasts.",
    bestSeason: "Winter",
    famousLocation: ["Kasprowy Wierch", "Morskie Oko", "Krupówki Street", "Gubałówka", "Tatra National Park", "Wielka Krokiew"]
  },
  {
    id: "euc113",
    cityName: "Poznan",
    countryId: "eu038",
    description: "Poznań is a historic trade city famous for the mechanical goats that butt heads daily on the Old Town Hall clock, its colorful market square, and its delicious St. Martin's croissants.",
    bestSeason: "Spring",
    famousLocation: ["Old Market Square", "Poznań Town Hall", "Ostrów Tumski", "Citadel Park", "Malta Lake", "Imperial Castle"]
  },

  // --- CZECH REPUBLIC ---
  {
    id: "euc114",
    cityName: "Prague",
    countryId: "eu034",
    description: "Prague is a storybook capital known for its stunning Charles Bridge, the massive Prague Castle complex, and its beautifully preserved medieval center that escaped major destruction during the world wars.",
    bestSeason: "Spring",
    famousLocation: ["Charles Bridge", "Prague Castle", "Old Town Square", "Astronomical Clock", "St. Vitus Cathedral", "Jewish Quarter"]
  },
  {
    id: "euc115",
    cityName: "Cesky-Krumlov",
    countryId: "eu034",
    description: "This fairytale riverside town is a UNESCO site famous for its magnificent castle overlooking the Vltava River, winding medieval streets, and a perfectly preserved Renaissance and Baroque architectural atmosphere.",
    bestSeason: "Summer",
    famousLocation: ["State Castle", "Vltava River", "Old Town", "Cloak Bridge", "Egon Schiele Center", "Castle Garden"]
  },
  {
    id: "euc116",
    cityName: "Karlovy-Vary",
    countryId: "eu034",
    description: "Karlovy Vary is an elegant spa town famous for its thermal springs, grand colonnades, the international film festival, and its traditional production of Becherovka herbal liqueur and fine Bohemian glass.",
    bestSeason: "Autumn",
    famousLocation: ["Mill Colonnade", "Hot Spring Colonnade", "Diana Lookout Tower", "Moser Glassworks", "Grandhotel Pupp", "St. Mary Magdalene"]
  },
  {
    id: "euc117",
    cityName: "Brno",
    countryId: "eu034",
    description: "Brno is a young, vibrant city with a thriving coffee culture and modern architecture, featuring the unique Villa Tugendhat and the historic Špilberk Castle overlooking the South Moravian capital's skyline.",
    bestSeason: "Spring",
    famousLocation: ["Villa Tugendhat", "Špilberk Castle", "Cathedral of St. Peter", "Liberty Square", "Ossuary", "Labyrinth under the Market"]
  },
  {
    id: "euc118",
    cityName: "Kutna-Hora",
    countryId: "eu034",
    description: "Kutná Hora is a historic silver mining town famous for the haunting Sedlec Ossuary, also known as the Bone Church, and the magnificent Gothic Saint Barbara's Cathedral, a UNESCO World Heritage site.",
    bestSeason: "Spring",
    famousLocation: ["St. Barbara's Cathedral", "Sedlec Ossuary", "Italian Court", "Hrádek Mining Museum", "Stone Fountain", "Jesuit College"]
  },

  // --- HUNGARY ---
  {
    id: "euc119",
    cityName: "Budapest",
    countryId: "eu035",
    description: "Budapest is a grand capital split by the Danube, famous for its majestic Parliament building, historic thermal baths, vibrant ruin bars, and spectacular views from the Fisherman's Bastion on Buda Hill.",
    bestSeason: "Spring",
    famousLocation: ["Parliament Building", "Buda Castle", "Chain Bridge", "Fisherman's Bastion", "Széchenyi Baths", "St. Stephen's Basilica"]
  },
  {
    id: "euc120",
    cityName: "Lake-Balaton",
    countryId: "eu035",
    description: "Central Europe's largest lake, Balaton is a popular summer destination known for its shallow waters, sprawling vineyards on the north shore, and lively resort towns offering sailing and cycling activities.",
    bestSeason: "Summer",
    famousLocation: ["Tihany Abbey", "Festetics Palace", "Badacsony", "Balatonfüred", "Siófok", "Hévíz Thermal Lake"]
  },
  {
    id: "euc121",
    cityName: "Eger",
    countryId: "eu035",
    description: "Eger is a historic wine town famous for its Baroque architecture, a medieval castle that resisted Ottoman sieges, and its production of the legendary Bull's Blood red wine in local cellars.",
    bestSeason: "Autumn",
    famousLocation: ["Eger Castle", "Valley of Beautiful Women", "Eger Minaret", "Basilica", "Lyceum", "Thermal Bath"]
  },
  {
    id: "euc122",
    cityName: "Debrecen",
    countryId: "eu035",
    description: "As Hungary's second-largest city and a cultural eastern hub, Debrecen is known for its iconic Great Reformed Church, rich Calvinist history, and proximity to the vast Hortobágy National Park plains.",
    bestSeason: "Summer",
    famousLocation: ["Great Reformed Church", "Déri Museum", "Hortobágy Park", "Reformed College", "Aquaticum", "University of Debrecen"]
  },
  {
    id: "euc123",
    cityName: "Szeged",
    countryId: "eu035",
    description: "Known as the City of Sunshine, Szeged is a sunny university city featuring impressive Art Nouveau buildings, a massive Votive Church, and its world-famous spicy fish soup and salami production.",
    bestSeason: "Summer",
    famousLocation: ["Votive Church", "Dóm Square", "New Synagogue", "Reök Palace", "Móra Ferenc Museum", "Anna Thermal Bath"]
  },

  // --- CROATIA ---
  {
    id: "euc124",
    cityName: "Dubrovnik",
    countryId: "eu027",
    description: "Dubrovnik is a stunning walled Adriatic city, famous for its limestone streets, historic sea walls, and being a major filming location for Game of Thrones amidst its Mediterranean architectural beauty.",
    bestSeason: "Summer",
    famousLocation: ["Old Town Walls", "Stradun", "Lovrijenac Fortress", "Cable Car", "Lokrum Island", "Rector's Palace"]
  },
  {
    id: "euc125",
    cityName: "Split",
    countryId: "eu027",
    description: "Split is a vibrant coastal city built around the massive ruins of Diocletian's Palace, blending ancient Roman history with a lively seaside promenade and serving as a major island ferry hub.",
    bestSeason: "Summer",
    famousLocation: ["Diocletian's Palace", "Riva Promenade", "Marjan Hill", "Cathedral of Saint Domnius", "Bacvice Beach", "Gregory of Nin"]
  },
  {
    id: "euc126",
    cityName: "Hvar",
    countryId: "eu027",
    description: "Hvar is a glamorous island destination known for its high-end nightlife, lavender fields, ancient stone architecture, and crystal-clear waters that attract luxury yachts and travelers from around the entire world.",
    bestSeason: "Summer",
    famousLocation: ["Hvar Fortress", "Saint Stephen's Square", "Pakleni Islands", "Stari Grad Plain", "Dubovica Beach", "Hvar Theater"]
  },
  {
    id: "euc127",
    cityName: "Zagreb",
    countryId: "eu027",
    description: "Croatia's charming inland capital features a medieval Upper Town, a vibrant coffee culture, unique museums like the Museum of Broken Relationships, and colorful Austro-Hungarian architecture throughout the lower city.",
    bestSeason: "Autumn",
    famousLocation: ["St. Mark's Church", "Zagreb Cathedral", "Ban Jelačić Square", "Upper Town", "Maksimir Park", "Dolac Market"]
  },
  {
    id: "euc128",
    cityName: "Plitvice-Lakes",
    countryId: "eu027",
    description: "Plitvice Lakes is a world-renowned national park featuring sixteen terraced lakes connected by spectacular waterfalls and turquoise waters, all accessible via a network of wooden walkways through lush green forests.",
    bestSeason: "Spring",
    famousLocation: ["Veliki Slap", "Lower Lakes", "Upper Lakes", "Galovac Waterfall", "Milanovac Lake", "Kozjak Lake"]
  },
  {
    id: "euc129",
    cityName: "Korcula",
    countryId: "eu027",
    description: "Often called Little Dubrovnik, Korčula is a historic island town with fortified walls, narrow marble streets, and a long-standing claim as the birthplace of the legendary world explorer Marco Polo.",
    bestSeason: "Summer",
    famousLocation: ["Old Town", "St. Mark's Cathedral", "Marco Polo House", "Vela Przina Beach", "Lumbarda", "Revelin Tower"]
  },

  // --- SLOVENIA ---
  {
    id: "euc130",
    cityName: "Ljubljana",
    countryId: "eu032",
    description: "Ljubljana is a green, walkable capital known for its charming car-free center, the iconic Dragon Bridge, a hilltop castle, and the artistic riverside cafes designed by famous architect Jože Plečnik.",
    bestSeason: "Spring",
    famousLocation: ["Ljubljana Castle", "Dragon Bridge", "Triple Bridge", "Tivoli Park", "Metelkova Mesto", "Preseren Square"]
  },
  {
    id: "euc131",
    cityName: "Lake-Bled",
    countryId: "eu032",
    description: "Lake Bled is a fairytale alpine destination featuring a small island with a church, a medieval castle perched on a cliff, and stunning views of the surrounding Julian Alps mountains.",
    bestSeason: "Summer",
    famousLocation: ["Bled Island", "Bled Castle", "Vintgar Gorge", "Mala Osojnica", "Straža Bled", "St. Martin's Church"]
  },
  {
    id: "euc132",
    cityName: "Piran",
    countryId: "eu032",
    description: "Piran is a picturesque Venetian-style coastal town on the Adriatic, famous for its narrow winding streets, the large Tartini Square, and its stunning views from the historic hilltop church of St. George.",
    bestSeason: "Summer",
    famousLocation: ["Tartini Square", "St. George's Church", "Piran Town Walls", "Punta", "Minorite Monastery", "Sečovlje Salina"]
  },
  {
    id: "euc133",
    cityName: "Koper",
    countryId: "eu032",
    description: "Koper is Slovenia's main Adriatic port city, featuring a well-preserved medieval core with Venetian-inspired architecture, grand palaces, and a lively atmosphere reflecting its long and diverse maritime history and culture.",
    bestSeason: "Spring",
    famousLocation: ["Praetorian Palace", "Tito Square", "Cathedral of St. Mary", "Koper Bell Tower", "Da Ponte Fountain", "Mudarija Gate"]
  },
  {
    id: "euc134",
    cityName: "Maribor",
    countryId: "eu032",
    description: "Located in the heart of a major wine region, Maribor is home to the world's oldest productive grapevine, offering a charming riverside old town and proximity to the Pohorje mountains.",
    bestSeason: "Autumn",
    famousLocation: ["Old Vine House", "Glavni Trg", "Maribor Castle", "Pohorje", "Drava River", "Maribor Cathedral"]
  },

  // --- ROMANIA ---
  {
    id: "euc135",
    cityName: "Bucharest",
    countryId: "eu039",
    description: "Bucharest is an eclectic capital known for its grand boulevards, the massive Palace of the Parliament, and a vibrant Old Town that blends historic Orthodox churches with a lively modern nightlife scene.",
    bestSeason: "Spring",
    famousLocation: ["Palace of the Parliament", "Old Town", "Arcul de Triumf", "Village Museum", "Romanian Athenaeum", "Herăstrău Park"]
  },
  {
    id: "euc136",
    cityName: "Transylvania",
    countryId: "eu039",
    description: "Transylvania is a legendary region famous for its medieval towns, fortified churches, and the dramatic Carpathian Mountains, including the iconic Bran Castle, often associated with the world-famous legend of Dracula.",
    bestSeason: "Autumn",
    famousLocation: ["Bran Castle", "Sighișoara", "Peleș Castle", "Râșnov Fortress", "Transfăgărășan", "Biertan Church"]
  },
  {
    id: "euc137",
    cityName: "Brasov",
    countryId: "eu039",
    description: "Brasov is a historic Transylvanian town surrounded by the Southern Carpathian Mountains, featuring the gothic Black Church, colorful baroque squares, and easy access to the nearby popular Poiana Brașov ski resort.",
    bestSeason: "Winter",
    famousLocation: ["Black Church", "Council Square", "Mount Tâmpa", "Poiana Brașov", "Catherine's Gate", "Rope Street"]
  },
  {
    id: "euc138",
    cityName: "Sibiu",
    countryId: "eu039",
    description: "Sibiu is a beautifully preserved Saxon old town known for its unique houses with eyes on the roofs, grand squares, and its role as a major cultural center in the heart of Romania.",
    bestSeason: "Autumn",
    famousLocation: ["Great Square", "Bridge of Lies", "Council Tower", "Astra Museum", "Brukenthal Museum", "Evangelical Cathedral"]
  },
  {
    id: "euc139",
    cityName: "Cluj-Napoca",
    countryId: "eu039",
    description: "As the unofficial capital of Transylvania, Cluj-Napoca is a youthful cultural hub with a thriving tech scene, historic gothic architecture, and host to major international music and film festivals annually.",
    bestSeason: "Summer",
    famousLocation: ["St. Michael's Church", "Unirii Square", "Botanical Garden", "Central Park", "Banffy Palace", "Hoia Forest"]
  },

  // --- BULGARIA ---
  {
    id: "euc140",
    cityName: "Sofia",
    countryId: "eu026",
    description: "Sofia is a historic capital situated under the Vitosha Mountain, featuring ancient Roman ruins, grand Orthodox cathedrals like Alexander Nevsky, and a fascinating blend of diverse architectural styles across the city.",
    bestSeason: "Spring",
    famousLocation: ["Alexander Nevsky Cathedral", "Vitosha Mountain", "Saint Sofia Church", "National Theater", "Serdica Ruins", "Boyana Church"]
  },
  {
    id: "euc141",
    cityName: "Plovdiv",
    countryId: "eu026",
    description: "Plovdiv is one of Europe's oldest continuously inhabited cities, famous for its remarkably preserved ancient Roman amphitheater, colorful Bulgarian National Revival houses, and the trendy Kapana creative district.",
    bestSeason: "Autumn",
    famousLocation: ["Ancient Theatre", "Old Town", "Kapana District", "Roman Stadium", "Nebet Tepe", "Regional Ethnographic Museum"]
  },
  {
    id: "euc142",
    cityName: "Varna",
    countryId: "eu026",
    description: "Varna is a major Black Sea resort city known for its expansive Sea Garden, rich archaeological history including the world's oldest gold treasure, and vibrant summer beaches and nightlife activities.",
    bestSeason: "Summer",
    famousLocation: ["Sea Garden", "Varna Cathedral", "Archaeological Museum", "Roman Baths", "Aladzha Monastery", "Golden Sands"]
  },
  {
    id: "euc143",
    cityName: "Nessebar",
    countryId: "eu026",
    description: "Nessebar is an ancient seaside town on a rocky peninsula, featuring a wealth of historic Byzantine churches and charming wooden houses, earning it a well-deserved place as a UNESCO World Heritage site.",
    bestSeason: "Summer",
    famousLocation: ["Old Nessebar", "Church of Saint Sophia", "Windmill", "Archaeological Museum", "Sunny Beach", "Church of Pantocrator"]
  },
  {
    id: "euc144",
    cityName: "Veliko-Tarnovo",
    countryId: "eu026",
    description: "Veliko Tarnovo is a medieval hilltop capital famous for the massive Tsarevets Fortress, its dramatic location overlooking the Yantra River, and its significance as the historic seat of the Bulgarian tsars.",
    bestSeason: "Spring",
    famousLocation: ["Tsarevets Fortress", "Samovodska Charshiya", "Asen Dynasty Monument", "Holy Forty Martyrs Church", "Trapezitsa", "Gurko Street"]
  },

  // --- SERBIA ---
  {
    id: "euc145",
    cityName: "Belgrade",
    countryId: "eu031",
    description: "Belgrade is a lively capital situated at the confluence of the Sava and Danube rivers, known for its historic Kalemegdan Fortress, vibrant floating river clubs, and its long, tumultuous history.",
    bestSeason: "Spring",
    famousLocation: ["Kalemegdan Fortress", "Saint Sava Temple", "Skadarlija", "Knez Mihailova", "Ada Ciganlija", "Nikola Tesla Museum"]
  },
  {
    id: "euc146",
    cityName: "Novi-Sad",
    countryId: "eu031",
    description: "Novi Sad is a relaxed city on the Danube known for the Petrovaradin Fortress, which hosts the famous EXIT festival, and its charming Austro-Hungarian architecture and vibrant cultural scene in Vojvodina.",
    bestSeason: "Summer",
    famousLocation: ["Petrovaradin Fortress", "Freedom Square", "Name of Mary Church", "Dunavska Street", "Štrand Beach", "Matica Srpska"]
  },
  {
    id: "euc147",
    cityName: "Niš",
    countryId: "eu031",
    description: "As a historic crossroads between East and West, Niš is one of Europe's oldest cities, famous for the Roman birthplace of Constantine the Great and the unique, haunting Skull Tower.",
    bestSeason: "Spring",
    famousLocation: ["Niš Fortress", "Skull Tower", "Mediana", "Tinkers' Alley", "Bubanj Memorial Park", "Red Cross Camp"]
  },
  {
    id: "euc148",
    cityName: "Zlatibor",
    countryId: "eu031",
    description: "Zlatibor is a popular mountain resort region in Serbia, known for its healthy air, sprawling meadows, traditional wooden villages, and the world's longest panoramic gondola ride over the peaks.",
    bestSeason: "Winter",
    famousLocation: ["Gold Gondola", "Stopića Cave", "Sirogojno Village", "Gostilje Waterfall", "Tornik Ski Centre", "Ribnica Lake"]
  },

  // --- MONTENEGRO ---
  {
    id: "euc149",
    cityName: "Kotor",
    countryId: "eu029",
    description: "Kotor is a breathtaking medieval old town nestled within a dramatic bay, featuring narrow limestone streets, ancient city walls climbing the cliffs, and a stunning fjord-like Mediterranean coastal landscape.",
    bestSeason: "Summer",
    famousLocation: ["Kotor Old Town", "Saint John Fortress", "Bay of Kotor", "Our Lady of the Rocks", "Perast", "Cathedral of Saint Tryphon"]
  },
  {
    id: "euc150",
    cityName: "Budva",
    countryId: "eu029",
    description: "Budva is Montenegro's primary beach resort, featuring a charming historic core on a peninsula, vibrant summer nightlife, and numerous sandy beaches that line the beautiful and sun-drenched Adriatic coast.",
    bestSeason: "Summer",
    famousLocation: ["Budva Old Town", "Mogren Beach", "Citadel", "Sveti Nikola Island", "Jaz Beach", "Statue of Ballerina"]
  },
  {
    id: "euc151",
    cityName: "Sveti-Stefan",
    countryId: "eu029",
    description: "This iconic and picturesque islet is a world-famous luxury resort, known for its fortified 15th-century village architecture and pink sand beaches, representing the most exclusive destination in Montenegro.",
    bestSeason: "Summer",
    famousLocation: ["Sveti Stefan Islet", "Miločer Park", "Queen's Beach", "Praskvica Monastery", "Olive Grove", "Crvena Glavica"]
  },
  {
    id: "euc152",
    cityName: "Durmitor",
    countryId: "eu029",
    description: "Durmitor is a rugged national park featuring high mountain peaks, deep canyons like the Tara River, and sparkling glacial lakes, offering some of the most dramatic hiking scenery in Europe.",
    bestSeason: "Summer",
    famousLocation: ["Black Lake", "Tara River Canyon", "Đurđevića Bridge", "Bobotov Kuk", "Savin Kuk", "Ice Cave"]
  },

  // --- ALBANIA ---
  {
    id: "euc153",
    cityName: "Tirana",
    countryId: "eu024",
    description: "Tirana is a colorful and energetic capital city characterized by its bright Ottoman and Soviet-era buildings, a rapidly evolving café culture, and the central, bustling Skanderbeg Square landmark area.",
    bestSeason: "Spring",
    famousLocation: ["Skanderbeg Square", "Bunk'Art 2", "Et'hem Bey Mosque", "Mount Dajti", "Pyramid of Tirana", "The Block"]
  },
  {
    id: "euc154",
    cityName: "Berat",
    countryId: "eu024",
    description: "Known as the City of a Thousand Windows, Berat is a UNESCO-listed town famous for its well-preserved Ottoman houses climbing the hillside and its massive 13th-century citadel still inhabited today.",
    bestSeason: "Autumn",
    famousLocation: ["Berat Castle", "Mangalem District", "Gorica Bridge", "Onufri Museum", "Bachelor's Mosque", "Holy Trinity Church"]
  },
  {
    id: "euc155",
    cityName: "Gjirokaster",
    countryId: "eu024",
    description: "This stone-built old town is a UNESCO World Heritage site, featuring rare Ottoman-style fortified tower houses, a dramatic hilltop fortress, and stunning views of the surrounding Drino Valley mountain landscapes.",
    bestSeason: "Spring",
    famousLocation: ["Gjirokastër Fortress", "Skenduli House", "Zekate House", "Old Bazaar", "Ethnographic Museum", "Cold War Tunnel"]
  },
  {
    id: "euc156",
    cityName: "Ksamil",
    countryId: "eu024",
    description: "Ksamil is a coastal paradise featuring turquoise waters and three small islands, located near the ancient Roman ruins of Butrint, making it a premier destination on the Albanian Riviera coast.",
    bestSeason: "Summer",
    famousLocation: ["Ksamil Islands", "Butrint National Park", "Blue Eye Spring", "Mirror Beach", "Lëkurësi Castle", "Monastery Beach"]
  },

  // --- BOSNIA AND HERZEGOVINA ---
  {
    id: "euc157",
    cityName: "Sarajevo",
    countryId: "eu025",
    description: "Sarajevo is a cultural crossroads where East meets West, featuring a layered history of Ottoman, Austro-Hungarian, and modern eras, all set within a beautiful valley surrounded by the Olympic mountains.",
    bestSeason: "Spring",
    famousLocation: ["Baščaršija", "Latin Bridge", "Vijećnica", "Gazi Husrev-beg Mosque", "War Tunnel Museum", "Yellow Fortress"]
  },
  {
    id: "euc158",
    cityName: "Mostar",
    countryId: "eu025",
    description: "Famous for its iconic 16th-century Ottoman bridge spanning the Neretva River, Mostar features a charming old bazaar, traditional stone architecture, and the famous local tradition of bridge jumping from heights.",
    bestSeason: "Summer",
    famousLocation: ["Stari Most", "Old Bazaar Kujundžiluk", "Koski Mehmed Pasha Mosque", "Blagaj Tekke", "Kravica Waterfall", "Muslibegović House"]
  },
  {
    id: "euc159",
    cityName: "Blagaj",
    countryId: "eu025",
    description: "Blagaj is a serene village home to a stunning 16th-century Dervish monastery built into a massive cliffside, right at the source of the crystal-clear, emerald-green Buna River karst spring.",
    bestSeason: "Spring",
    famousLocation: ["Blagaj Tekke", "Buna River Spring", "Stjepan grad Fortress", "Velagić House", "Leho's Bridge", "Eco Center"]
  },
  {
    id: "euc160",
    cityName: "Jajce",
    countryId: "eu025",
    description: "This historic town is unique for having a massive waterfall right in its center, featuring medieval catacombs, a hilltop fortress, and a rich history as the capital of Bosnian kings.",
    bestSeason: "Summer",
    famousLocation: ["Pliva Waterfall", "Jajce Fortress", "Catacombs", "Pliva Lakes", "Mlinčići Watermills", "St. Luke's Tower"]
  },

  // --- NORTH MACEDONIA ---
  {
    id: "euc161",
    cityName: "Skopje",
    countryId: "eu030",
    description: "Skopje is a capital of contrasts, blending a historic Ottoman Old Bazaar with a massive collection of modern neoclassical monuments and statues, all overlooked by the ancient Byzantine Kale Fortress.",
    bestSeason: "Autumn",
    famousLocation: ["Stone Bridge", "Old Bazaar", "Macedonia Square", "Kale Fortress", "Matka Canyon", "Millennium Cross"]
  },
  {
    id: "euc162",
    cityName: "Lake-Ohrid",
    countryId: "eu030",
    description: "UNESCO-listed Lake Ohrid is one of Europe's oldest and deepest lakes, surrounded by numerous historic Orthodox churches, monastery complexes, and a charming old town with spectacular waterfront views and beaches.",
    bestSeason: "Summer",
    famousLocation: ["Church of St. John", "Samuel's Fortress", "Saint Naum Monastery", "Ancient Theatre", "Bay of Bones", "Plaošnik"]
  },
  {
    id: "euc163",
    cityName: "Bitola",
    countryId: "eu030",
    description: "Bitola is an elegant city known for its Ottoman-era architecture, the historic Shirok Sokak pedestrian street lined with colorful townhouses, and the nearby ancient Greek ruins of Heraclea Lyncestis archaeological site.",
    bestSeason: "Spring",
    famousLocation: ["Shirok Sokak", "Heraclea Lyncestis", "Clock Tower", "Old Bazaar", "Ishak Pasha Mosque", "Pelister National Park"]
  },

  // --- MALTA ---
  {
    id: "euc164",
    cityName: "Valletta",
    countryId: "eu016",
    description: "Malta's fortified capital is a UNESCO World Heritage city built by the Knights of St. John, featuring stunning Baroque architecture, grand harbors, and deep historical significance within its massive limestone walls.",
    bestSeason: "Spring",
    famousLocation: ["St. John's Cathedral", "Upper Barrakka Gardens", "Grand Master's Palace", "Fort St. Elmo", "Manoel Theatre", "Valletta Waterfront"]
  },
  {
    id: "euc165",
    cityName: "Mdina",
    countryId: "eu016",
    description: "Known as the Silent City, Mdina is an exceptionally preserved medieval walled town located on a hilltop, offering quiet narrow streets, aristocratic palaces, and breathtaking panoramic views over the Maltese countryside.",
    bestSeason: "Autumn",
    famousLocation: ["St. Paul's Cathedral", "Mdina Gate", "Palazzo Falson", "Bastian Square", "Catacombs of St. Paul", "Dingli Cliffs"]
  },
  {
    id: "euc166",
    cityName: "Gozo",
    countryId: "eu016",
    description: "Gozo is Malta's sister island, offering a rural and peaceful atmosphere with prehistoric temples, dramatic coastal formations, and excellent diving opportunities in the crystal-clear waters of the Mediterranean Sea.",
    bestSeason: "Spring",
    famousLocation: ["Ggantija Temples", "Victoria Citadel", "Ramla Bay", "Inland Sea", "Ta' Pinu Basilica", "Blue Hole"]
  },
  {
    id: "euc167",
    cityName: "Comino",
    countryId: "eu016",
    description: "Comino is a small, virtually uninhabited island famous for the stunning Blue Lagoon, where turquoise waters and white sandy seabed attract thousands of day-trippers for swimming and snorkeling in paradise.",
    bestSeason: "Summer",
    famousLocation: ["Blue Lagoon", "Crystal Lagoon", "Saint Mary's Tower", "Santa Maria Bay", "San Niklaw Bay", "Cominotto Islet"]
  },

  // --- CYPRUS ---
  {
    id: "euc168",
    cityName: "Nicosia",
    countryId: "eu013",
    description: "As Europe's last divided capital, Nicosia offers a fascinating blend of history within its Venetian walls, featuring bustling markets, historic museums, and a unique atmosphere where Greek and Turkish cultures meet.",
    bestSeason: "Spring",
    famousLocation: ["Ledra Street", "Selimiye Mosque", "Cyprus Museum", "Venetian Walls", "Buyuk Han", "Famagusta Gate"]
  },
  {
    id: "euc169",
    cityName: "Paphos",
    countryId: "eu013",
    description: "Paphos is a coastal city rich in mythology and archaeology, featuring world-famous Roman mosaics, the Tombs of the Kings, and a charming harbor overlooked by a medieval Byzantine castle fortress.",
    bestSeason: "Autumn",
    famousLocation: ["Tombs of the Kings", "Paphos Mosaics", "Paphos Castle", "Aphrodite's Rock", "Coral Bay", "Akamas Peninsula"]
  },
  {
    id: "euc170",
    cityName: "Limassol",
    countryId: "eu013",
    description: "Limassol is a vibrant modern city featuring a luxury marina, seaside promenade, and historic castle, serving as a hub for the island's wine industry and host to major annual carnival celebrations.",
    bestSeason: "Spring",
    famousLocation: ["Limassol Marina", "Molos Promenade", "Limassol Castle", "Kourion Ruins", "Fasouri Watermania", "Old Town"]
  },
  {
    id: "euc171",
    cityName: "Ayia-Napa",
    countryId: "eu013",
    description: "Ayia Napa is Cyprus's premier resort town, world-famous for its high-energy nightlife and some of the island's most beautiful white-sand beaches, including the iconic Nissi Beach and Cape Greco cliffs.",
    bestSeason: "Summer",
    famousLocation: ["Nissi Beach", "Cape Greco", "Makronissos Beach", "Ayia Napa Monastery", "Love Bridge", "WaterWorld Park"]
  },

  // --- ESTONIA ---
  {
    id: "euc172",
    cityName: "Tallinn",
    countryId: "eu045",
    description: "Tallinn boasts one of the best-preserved medieval old towns in Europe, featuring cobblestone streets, gothic spires, and a modern digital-forward culture that makes it a unique Baltic destination for travelers.",
    bestSeason: "Winter",
    famousLocation: ["Toompea Hill", "Alexander Nevsky Cathedral", "Town Hall Square", "Kadriorg Palace", "Telliskivi City", "Kumu Art Museum"]
  },
  {
    id: "euc173",
    cityName: "Tartu",
    countryId: "eu045",
    description: "As Estonia's oldest city and intellectual hub, Tartu is known for its prestigious university, youthful energy, bohemian districts like Karlova, and a charming old town centered around the Kissing Students fountain.",
    bestSeason: "Spring",
    famousLocation: ["University of Tartu", "Town Hall Square", "Toomemägi Park", "AHHAA Science Centre", "Estonian National Museum", "Soup Town"]
  },
  {
    id: "euc174",
    cityName: "Parnu",
    countryId: "eu045",
    description: "Pärnu is Estonia's premier summer capital and Baltic beach resort, famous for its long sandy coastline, shallow waters, elegant spa culture, and a lively atmosphere during the warm coastal summer months.",
    bestSeason: "Summer",
    famousLocation: ["Pärnu Beach", "Elizabeth's Church", "Tallinn Gate", "Pärnu Museum", "Tervise Paradiis", "Ranna Park"]
  },
  {
    id: "euc175",
    cityName: "Saaremaa",
    countryId: "eu045",
    description: "Estonia's largest island, Saaremaa is a nature-rich destination known for its iconic windmills, the impressive Kuressaare episcopal castle, and a unique landscape featuring Kaali meteorite craters and traditional rural villages.",
    bestSeason: "Summer",
    famousLocation: ["Kuressaare Castle", "Angla Windmills", "Kaali Crater", "Panga Cliff", "Sõrve Lighthouse", "Vilsandi National Park"]
  },

  // --- LATVIA ---
  {
    id: "euc176",
    cityName: "Riga",
    countryId: "eu046",
    description: "Riga is a Baltic gem famous for having the highest concentration of Art Nouveau architecture in the world, a historic medieval center, and a vibrant central market housed in massive zeppelin hangars.",
    bestSeason: "Summer",
    famousLocation: ["House of the Blackheads", "Riga Cathedral", "St. Peter's Church", "Freedom Monument", "Central Market", "Art Nouveau District"]
  },
  {
    id: "euc177",
    cityName: "Jurmala",
    countryId: "eu046",
    description: "Jurmala is a historic seaside resort town near Riga, known for its endless white quartz sand beaches, charming wooden Art Nouveau villas, and the therapeutic pine forest air along the Baltic coast.",
    bestSeason: "Summer",
    famousLocation: ["Dzintari Forest Park", "Majori Beach", "Jomas Street", "Kemeri National Park", "Līvu Akvaparks", "Jurmala Museum"]
  },
  {
    id: "euc178",
    cityName: "Sigulda",
    countryId: "eu046",
    description: "Often called the Switzerland of Latvia, Sigulda offers stunning castles and nature trails in the Gauja River Valley, featuring bobsleigh tracks and Gutman's Cave, the largest grotto in the entire Baltic region.",
    bestSeason: "Autumn",
    famousLocation: ["Turaida Castle", "Sigulda New Castle", "Gauja National Park", "Gutmanis Cave", "Bobsleigh Track", "Aerodium"]
  },

  // --- LITHUANIA ---
  {
    id: "euc179",
    cityName: "Vilnius",
    countryId: "eu047",
    description: "Vilnius features one of the largest Baroque old towns in Europe, a creative self-proclaimed republic district called Užupis, and a rich history visible in its many beautiful churches and historic monuments.",
    bestSeason: "Spring",
    famousLocation: ["Gediminas Tower", "Vilnius Cathedral", "Užupis", "Gate of Dawn", "St. Anne's Church", "Museum of Occupations"]
  },
  {
    id: "euc180",
    cityName: "Kaunas",
    countryId: "eu047",
    description: "Kaunas is a historic city known for its impressive interwar modernist architecture, a medieval castle at the confluence of two rivers, and its status as a vibrant cultural and academic center for Lithuania.",
    bestSeason: "Spring",
    famousLocation: ["Kaunas Castle", "Ninth Fort", "Pažaislis Monastery", "Devil's Museum", "Liberty Avenue", "Town Hall Square"]
  },
  {
    id: "euc181",
    cityName: "Trakai",
    countryId: "eu047",
    description: "Trakai is famous for its stunning red-brick island castle set on Lake Galvė, its historic Karaite community, and serving as a picturesque getaway featuring traditional wooden houses and beautiful lakeside scenery.",
    bestSeason: "Summer",
    famousLocation: ["Trakai Island Castle", "Lake Galvė", "Karaite Street", "Užutrakis Manor", "Senieji Trakai", "Trakai Church"]
  },

  // --- LUXEMBOURG ---
  {
    id: "euc182",
    cityName: "Luxembourg-City",
    countryId: "eu009",
    description: "Luxembourg City is a dramatic capital built on sheer cliffs, featuring a UNESCO-listed fortified old town, the deep Alzette valley, and a mix of historic casemates and modern European financial institutions.",
    bestSeason: "Autumn",
    famousLocation: ["Bock Casemates", "Grand Ducal Palace", "Cathédrale Notre-Dame", "Chemin de la Corniche", "Grund District", "Mudam"]
  },
  {
    id: "euc183",
    cityName: "Vianden",
    countryId: "eu009",
    description: "Vianden is a fairytale town nestled in the Ardennes, famous for its magnificent medieval castle restored to its former glory, its historic chairlift, and being a former home of author Victor Hugo.",
    bestSeason: "Summer",
    famousLocation: ["Vianden Castle", "Victor Hugo House", "Vianden Chairlift", "Our Dam", "Trinitarian Church", "Vianden Museum"]
  },
  {
    id: "euc184",
    cityName: "Echternach",
    countryId: "eu009",
    description: "As the oldest town in Luxembourg, Echternach is famous for its massive Benedictine abbey, its UNESCO-listed dancing procession, and serving as the gateway to the scenic hiking region of Little Switzerland.",
    bestSeason: "Spring",
    famousLocation: ["Abbey of Echternach", "Place du Marché", "Mullerthal Trail", "Roman Villa", "Lake Echternach", "Basilica of St. Willibrord"]
  },

  // --- LIECHTENSTEIN ---
  {
    id: "euc185",
    cityName: "Vaduz",
    countryId: "eu022",
    description: "Vaduz is the tiny capital of Liechtenstein, sitting beneath the iconic hilltop castle where the princely family resides, offering high-end art museums and a charming Alpine atmosphere along the Rhine River.",
    bestSeason: "Spring",
    famousLocation: ["Vaduz Castle", "Kunstmuseum", "National Museum", "Red House", "Cathedral of St. Florin", "Old Rhine Bridge"]
  },
  {
    id: "euc186",
    cityName: "Malbun",
    countryId: "eu022",
    description: "Malbun is Liechtenstein's premier alpine village for skiing and hiking, nestled in a high mountain bowl that offers family-friendly resorts and pristine snow conditions throughout the winter and summer holiday seasons.",
    bestSeason: "Winter",
    famousLocation: ["Malbi Park", "Sareis Chairlift", "Augstenberg", "Galina Falconry", "Princess Gina Trail", "Steg Village"]
  },

  // --- MONACO ---
  {
    id: "euc187",
    cityName: "Monte-Carlo",
    countryId: "eu010",
    description: "Monte Carlo is a symbol of luxury and glamour, famous for its legendary casino, high-stakes Formula One Grand Prix, world-class harbor filled with superyachts, and elite Mediterranean lifestyle and fine dining.",
    bestSeason: "Spring",
    famousLocation: ["Monte Carlo Casino", "Café de Paris", "Hotel de Paris", "Grand Prix Circuit", "Sun Casino", "Japanese Garden"]
  },
  {
    id: "euc188",
    cityName: "La-Condamine",
    countryId: "eu010",
    description: "La Condamine is Monaco's second oldest district, featuring the famous Port Hercules harbor, the bustling Place d'Armes local market, and a slightly more traditional atmosphere compared to the nearby Monte Carlo area.",
    bestSeason: "Summer",
    famousLocation: ["Port Hercules", "Place d'Armes", "Monaco Yacht Club", "Sainte-Dévote Church", "Exotic Garden", "Oceanographic Museum"]
  },

  // --- SAN MARINO ---
  {
    id: "euc189",
    cityName: "San-Marino-City",
    countryId: "eu018",
    description: "This hilltop medieval capital is the heart of one of the world's smallest and oldest republics, featuring three iconic fortress towers perched on the dramatic peaks of Mount Titano mountainside.",
    bestSeason: "Summer",
    famousLocation: ["Guaita Tower", "Cesta Tower", "Montale Tower", "Piazza della Libertà", "Basilica di San Marino", "State Museum"]
  },

  // --- VATICAN CITY ---
  {
    id: "euc190",
    cityName: "St-Peters-Basilica",
    countryId: "eu020",
    description: "As the center of Catholicism, St. Peter's Basilica is a marvel of Renaissance architecture, featuring Michelangelo's Dome and Pieta, and serving as one of the largest and most sacred churches worldwide.",
    bestSeason: "Spring",
    famousLocation: ["The Dome", "Michelangelo's Pieta", "St. Peter's Square", "The Necropolis", "Papal Altars", "Statue of St. Peter"]
  },
  {
    id: "euc191",
    cityName: "Vatican-Museums",
    countryId: "eu020",
    description: "The Vatican Museums house a world-class collection of art including the Sistine Chapel's famous ceiling, the Raphael Rooms, and thousands of sculptures and paintings spanning centuries of human and religious history.",
    bestSeason: "Spring",
    famousLocation: ["Sistine Chapel", "Raphael Rooms", "Gallery of Maps", "Borgia Apartment", "Pinacoteca", "Spiral Staircase"]
  },

  // --- ANDORRA ---
  {
    id: "euc192",
    cityName: "Andorra-la-Vella",
    countryId: "eu012",
    description: "The highest capital city in Europe, Andorra la Vella is a mountain-fringed hub known for duty-free shopping, the modern Caldea spa complex, and serving as a gateway to the surrounding Pyrenees peaks.",
    bestSeason: "Winter",
    famousLocation: ["Casa de la Vall", "Caldea Spa", "Church of Sant Esteve", "Ponte de la Margineda", "Dali Sculpture", "Avenida Meritxell"]
  },
  {
    id: "euc193",
    cityName: "Grandvalira",
    countryId: "eu012",
    description: "Grandvalira is the largest ski resort area in the Pyrenees, offering hundreds of kilometers of slopes, diverse winter sports facilities, and high-altitude luxury resorts for adventure seekers across the Andorra mountain range.",
    bestSeason: "Winter",
    famousLocation: ["Soldeu", "Pas de la Casa", "El Tarter", "Grau Roig", "Igloo Hotel", "Incles Valley"]
  },

  // --- UKRAINE ---
  {
    id: "euc194",
    cityName: "Kyiv",
    countryId: "eu042",
    description: "Ukraine's historic capital is famous for its stunning golden-domed churches like Saint Sophia, the deep Arsenalna metro station, and its resilient spirit centered around the massive Maidan Nezalezhnosti central square.",
    bestSeason: "Spring",
    famousLocation: ["Saint Sophia Cathedral", "Kyiv Pechersk Lavra", "Maidan Square", "Golden Gate", "Andriyivskyy Descent", "Motherland Monument"]
  },
  {
    id: "euc195",
    cityName: "Lviv",
    countryId: "eu042",
    description: "Lviv is a cultural hub featuring Austro-Hungarian charm, cobblestone streets, and a historic old town famous for its deep coffee culture, diverse religious architecture, and unique thematic restaurants and bars.",
    bestSeason: "Autumn",
    famousLocation: ["Market Square", "Opera House", "Lychakiv Cemetery", "High Castle", "Dominican Church", "Armenian Cathedral"]
  },
  {
    id: "euc196",
    cityName: "Odesa",
    countryId: "eu042",
    description: "Known as the Pearl of the Black Sea, Odesa is a port city featuring the famous Potemkin Stairs, a world-class Opera House, and a vibrant, sun-drenched coastal atmosphere with beautiful sandy beaches.",
    bestSeason: "Summer",
    famousLocation: ["Potemkin Stairs", "Odesa Opera House", "Deribasivska Street", "Privoz Market", "Arcadia Beach", "Odesa Catacombs"]
  },

  // --- BELARUS ---
  {
    id: "euc197",
    cityName: "Minsk",
    countryId: "eu033",
    description: "Minsk is characterized by its broad Soviet-era avenues, grand neoclassical buildings, and historic districts like Trinity Hill, offering a unique look at monumental architecture and traditional Belarusian culture and museums.",
    bestSeason: "Spring",
    famousLocation: ["Independence Square", "Victory Square", "National Library", "Trinity Hill", "Holy Spirit Cathedral", "Island of Tears"]
  },
  {
    id: "euc198",
    cityName: "Mir-Castle",
    countryId: "eu033",
    description: "A UNESCO-listed masterpiece, Mir Castle is a stunning 16th-century fortification blending Gothic, Renaissance, and Baroque styles, surrounded by a peaceful lake and beautifully manicured gardens in the Belarusian countryside.",
    bestSeason: "Summer",
    famousLocation: ["Mir Castle Complex", "Castle Park", "Jewish Ghetto Memorial", "Church of St. Nicholas", "Sviatopolk-Mirsky Vault", "Mir Village"]
  },

  // --- MOLDOVA ---
  {
    id: "euc199",
    cityName: "Chisinau",
    countryId: "eu037",
    description: "Chisinau is a green capital city known for its expansive parks, Soviet-style architecture, and its role as the center of Moldova's famous wine culture, with massive underground cellars nearby.",
    bestSeason: "Autumn",
    famousLocation: ["Stephen the Great Park", "Triumphal Arch", "Nativity Cathedral", "National Museum", "Cricova Cellars", "Central Market"]
  },
  {
    id: "euc200",
    cityName: "Orheiul-Vechi",
    countryId: "eu037",
    description: "This historic complex is dramatically situated in limestone cliffs overlooking the Răut River, featuring ancient cave monasteries and archaeological remains spanning from the Dacians to the Golden Horde era.",
    bestSeason: "Spring",
    famousLocation: ["Cave Monastery", "Ethnographic Museum", "Dacian Fortress", "Butuceni Village", "Răut River", "Holy Mary Church"]
  },

  //russia

  {
    id: "euc201",
    cityName: "Moscow",
    countryId: "eu040",
    description: "Moscow is a monumental capital city featuring the iconic Kremlin and Red Square, world-famous metro stations that resemble underground palaces, and a vibrant mix of historic and modern Russian culture.",
    bestSeason: "Winter",
    famousLocation: ["Red Square", "The Kremlin", "Saint Basil's", "Bolshoi Theatre", "Gorky Park", "Moscow Metro"]
  },
  {
    id: "euc202",
    cityName: "Saint-Petersburg",
    countryId: "eu040",
    description: "Known as the Venice of the North, this imperial city is famous for its network of canals, the massive Hermitage Museum, and the grand palaces of the former Russian Tsars.",
    bestSeason: "Summer",
    famousLocation: ["The Hermitage", "Church of Savior", "Peterhof", "Winter Palace", "Peter and Paul Fortress", "Nevsky Prospect"]
  },

  // --- GEORGIA ---
  {
    id: "euc203",
    cityName: "Tbilisi",
    countryId: "eu050",
    description: "Georgia's capital features a charming old town with sulfur baths, leaning clock towers, and a mix of futuristic architecture, all set within a scenic valley along the Mtkvari River.",
    bestSeason: "Spring",
    famousLocation: ["Narikala Fortress", "Abanotubani", "Holy Trinity Cathedral", "Bridge of Peace", "Mtatsminda Park", "Shardeni Street"]
  },
  {
    id: "euc204",
    cityName: "Kazbegi",
    countryId: "eu050",
    description: "Kazbegi is a high-altitude mountain region famous for the Gergeti Trinity Church perched against the backdrop of Mount Kazbek, offering some of the most iconic and dramatic views in Georgia.",
    bestSeason: "Summer",
    famousLocation: ["Gergeti Trinity Church", "Mount Kazbek", "Gveleti Waterfall", "Dariali Gorge", "Stepantsminda Village", "Juta Valley"]
  },
  {
    id: "euc205",
    cityName: "Batumi",
    countryId: "eu050",
    description: "Batumi is a modern seaside resort on the Black Sea coast, known for its unique skyscrapers, long subtropical botanical gardens, dancing fountains, and a vibrant, high-energy summer atmosphere and nightlife.",
    bestSeason: "Summer",
    famousLocation: ["Batumi Boulevard", "Alphabet Tower", "Ali and Nino", "Botanical Garden", "Argo Cable Car", "Piazza Square"]
  },

  // --- ARMENIA ---
  {
    id: "euc206",
    cityName: "Yerevan",
    countryId: "eu048",
    description: "One of the world's oldest inhabited cities, Yerevan is known for its pink volcanic stone buildings, the massive Cascade monument, and spectacular views of the biblical Mount Ararat on clear days.",
    bestSeason: "Autumn",
    famousLocation: ["Republic Square", "The Cascade", "Genocide Memorial", "Vernissage Market", "Opera House", "Matenadaran"]
  },
  {
    id: "euc207",
    cityName: "Lake-Sevan",
    countryId: "eu048",
    description: "Lake Sevan is one of the world's largest high-altitude lakes, famous for the Sevanavank monastery perched on a peninsula and its refreshing cool waters, a popular summer retreat for locals.",
    bestSeason: "Summer",
    famousLocation: ["Sevanavank", "Hayravank", "Noratus Cemetery", "Sevan Island", "Sevan National Park", "Dilijan"]
  },

  // --- AZERBAIJAN ---
  {
    id: "euc208",
    cityName: "Baku",
    countryId: "eu049",
    description: "Baku's skyline is a blend of the futuristic Flame Towers and a UNESCO-listed ancient old city, creating a unique Caspian Sea capital where oil-driven modernity meets Silk Road history.",
    bestSeason: "Spring",
    famousLocation: ["Flame Towers", "Old City (Icherisheher)", "Maiden Tower", "Heydar Aliyev Center", "Baku Boulevard", "Palace of Shirvanshahs"]
  },
  {
    id: "euc209",
    cityName: "Gobustan",
    countryId: "eu049",
    description: "Gobustan is an ancient national park famous for its thousands of prehistoric rock petroglyphs and unique natural mud volcanoes, offering a glimpse into early human civilization and geological oddities.",
    bestSeason: "Spring",
    famousLocation: ["Petroglyph Museum", "Mud Volcanoes", "Bibi-Heybat Mosque", "Gaval Dash", "Ancient Inscriptions", "Firuz Rock"]
  },

  // --- KAZAKHSTAN ---
  {
    id: "euc210",
    cityName: "Almaty",
    countryId: "eu036",
    description: "Almaty is Kazakhstan's largest city and cultural hub, set against the Trans-Ili Alatau mountains, offering lush parks, soviet-era architecture, and easy access to high-altitude skating rinks and ski resorts.",
    bestSeason: "Autumn",
    famousLocation: ["Medeu Skating Rink", "Shymbulak", "Zenkov Cathedral", "Kok Tobe", "Big Almaty Lake", "First President's Park"]
  },
  {
    id: "euc211",
    cityName: "Astana",
    countryId: "eu036",
    description: "Astana is a futuristic planned capital city on the steppes, featuring unique architectural landmarks designed by world-renowned architects, reflecting Kazakhstan's modern ambitions.",
    bestSeason: "Summer",
    famousLocation: ["Bayterek Tower", "Khan Shatyr", "Hazrat Sultan Mosque", "Nur-Astana Mosque", "National Museum", "Expo 2017 Site"]
  },

  // --- TURKEY ---
  {
    id: "euc212",
    cityName: "Istanbul",
    countryId: "eu051",
    description: "Istanbul is the historic crossroads of Europe and Asia, famous for the Hagia Sophia, Blue Mosque, and the bustling Grand Bazaar, all set along the beautiful and strategic Bosphorus Strait.",
    bestSeason: "Spring",
    famousLocation: ["Hagia Sophia", "Blue Mosque", "Topkapi Palace", "Grand Bazaar", "Bosphorus Cruise", "Galata Tower"]
  },
  {
    id: "euc213",
    cityName: "Cappadocia",
    countryId: "eu051",
    description: "Cappadocia is a surreal landscape of fairy chimneys and cave dwellings, world-famous for its sunrise hot air balloon flights and ancient underground cities carved into volcanic rock.",
    bestSeason: "Autumn",
    famousLocation: ["Goreme Open Air Museum", "Uchisar Castle", "Kaymakli Underground", "Ihlara Valley", "Devrent Valley", "Pasabag"]
  },
  {
    id: "euc214",
    cityName: "Antalya",
    countryId: "eu051",
    description: "Antalya is a stunning Mediterranean resort city known for its historic old town of Kaleiçi, ancient Roman ruins, and beautiful beaches surrounded by the impressive Taurus Mountain range.",
    bestSeason: "Summer",
    famousLocation: ["Kaleiçi Old Town", "Hadrian's Gate", "Duden Waterfalls", "Aspendos Theatre", "Konyaaltı Beach", "Antalya Museum"]
  },

  // --- KOSOVO ---
  {
    id: "euc215",
    cityName: "Pristina",
    countryId: "eu028",
    description: "Pristina is Europe's youngest capital city, featuring a vibrant, youthful energy, unique landmarks like the National Library, and a rapidly growing coffee shop culture.",
    bestSeason: "Spring",
    famousLocation: ["NEWBORN Monument", "National Library", "Mother Teresa Boulevard", "Germia Park", "Ethnographic Museum", "Imperial Mosque"]
  },
  {
    id: "euc216",
    cityName: "Prizren",
    countryId: "eu028",
    description: "Prizren is Kosovo's cultural capital, famous for its well-preserved Ottoman architecture, a historic stone bridge, and its dramatic hilltop fortress offering panoramic views.",
    bestSeason: "Summer",
    famousLocation: ["Prizren Fortress", "Sinan Pasha Mosque", "Stone Bridge", "Shadervan Square", "League of Prizren", "Our Lady of Ljeviš"]
  },

  // --- SLOVAKIA ---
  {
    id: "euc217",
    cityName: "Bratislava",
    countryId: "eu041",
    description: "Bratislava is a compact capital on the Danube with a charming old town, a rectangular hilltop castle, and a unique UFO bridge, all located just an hour away from Vienna.",
    bestSeason: "Spring",
    famousLocation: ["Bratislava Castle", "Old Town Hall", "St. Martin's Cathedral", "UFO Observation Deck", "Blue Church", "Slavín"]
  },
  {
    id: "euc218",
    cityName: "High-Tatras",
    countryId: "eu041",
    description: "The High Tatras is an alpine mountain range in Slovakia known for its jagged peaks, turquoise glacial lakes, and excellent hiking and skiing opportunities within the country's oldest national park.",
    bestSeason: "Winter",
    famousLocation: ["Lomnický Štít", "Štrbské Pleso", "Gerlachovský Štít", "Popradské Pleso", "Tatranská Lomnica", "Hrebienok"]
  },
  {
    id: "euc219",
    cityName: "Banska-Stiavnica",
    countryId: "eu041",
    description: "Banská Štiavnica is a UNESCO-listed historic mining town set within an ancient volcano, famous for its elegant architecture, historic tajchy reservoirs, and its beautifully preserved medieval city center.",
    bestSeason: "Autumn",
    famousLocation: ["Old Castle", "New Castle", "Calvary", "Holy Trinity Square", "Open-Air Mining Museum", "Počúvadlo Lake"]
  }, 
  {
    id: "euc220",
    cityName: "Mount-Titano",
    countryId: "eu018",
    description: "Mount Titano is the rugged heart of San Marino, rising 739 meters above the Apennines. This UNESCO-listed peak features medieval towers, narrow cobblestone streets, and stunning panoramic views stretching to the Adriatic Sea.",
    bestSeason: "Summer",
    famousLocation: ["Guaita Tower", "Cesta Tower", "Montale Tower", "Piazza della Libertà", "Basilica di San Marino", "State Museum"]
  },
  
];

 const experience = [
  {
    "id": "exp001",
    "activityName": "Paragliding",
    "regionOrCountry": "Alpine Europe",
    "heroSection": {
      "vibe": "Soar like an eagle over jagged limestone peaks and turquoise alpine lakes.",
      "shortBrief": "Experience the ultimate freedom of flight with a tandem paraglide. Launch from mountain ridges and glide silently over Europe's most dramatic landscapes."
    },
    "quickFacts": {
      "season": "May – September",
      "topCountries": ["Switzerland", "France", "Austria"],
      "vibe": "Adrenaline, Scenic, Serene",
      "budget": "€€"
    },
    "curatedSpotlights": [
      { "name": "Interlaken, Switzerland", "cityId": "euc115", "feature": "Legendary landing in the town center after flying between two lakes." },
      { "name": "Chamonix, France", "cityId": "euc113", "feature": "Stunning views of the Mont Blanc massif at 3,000+ meters." },
      { "name": "Innsbruck, Austria", "cityId": "euc122", "feature": "Launch from the Nordkette and see the city spread beneath you." }
    ],
    "expertGuide": {
      "culture": "The Alpine 'Hike & Fly' tradition is strong here; many pilots hike the peaks before gliding down.",
      "levels": {
        "beginner": "Tandem flights require zero experience—just a short run at takeoff.",
        "expert": "The thermal conditions in the Valais region are world-renowned for cross-country flying."
      },
      "logistics": "Always book for your first available day, as flights are highly weather-dependent."
    },
    "proTip": "Ask your pilot for 'G-Force' maneuvers if you want a thrill, or a 'Thermal' flight if you want to stay up longer."
  },
  {
    "id": "exp002",
    "activityName": "Northern Lights",
    "regionOrCountry": "Nordic Europe",
    "heroSection": {
      "vibe": "Chase the elusive Aurora Borealis across the starlit Arctic wilderness.",
      "shortBrief": "Witness the sky ignite with dancing ribbons of green, pink, and violet. This natural phenomenon is best viewed far from city lights in the 'Aurora Oval'."
    },
    "quickFacts": {
      "season": "Late September – March",
      "topCountries": ["Norway", "Sweden", "Iceland", "Finland"],
      "vibe": "Mystical, Cold, Bucket-List",
      "budget": "€€€"
    },
    "curatedSpotlights": [
      { "name": "Tromsø, Norway", "cityId": "euc170", "feature": "The 'Capital of the Arctic' with high solar activity rates." },
      { "name": "Reykjavik, Iceland", "cityId": "euc176", "feature": "Pair your Aurora chase with volcanic landscapes and hot springs." },
      { "name": "Abisko, Sweden", "cityId": "euc173", "feature": "Famous for its 'Blue Hole' microclimate that keeps skies clear." }
    ],
    "expertGuide": {
      "culture": "Locals call it the 'Green Lady.' Chasing her often involves campfires and traditional Arctic snacks.",
      "levels": {
        "beginner": "Join a guided bus tour that uses satellite data to find clear skies.",
        "expert": "Rent a 4x4 and head to remote fjords for long-exposure photography."
      },
      "logistics": "The lights are most active between 10:00 PM and 2:00 AM."
    },
    "proTip": "Use a tripod and a 'long exposure' setting on your camera; the lights often look brighter through a lens than the naked eye."
  },
  {
    "id": "exp003",
    "activityName": "Hot Air Ballooning",
    "regionOrCountry": "Mediterranean Europe",
    "heroSection": {
      "vibe": "Ascend at dawn over ancient cave dwellings and golden Spanish plains.",
      "shortBrief": "Float gently on the morning breeze. From the volcanic 'fairy chimneys' of Turkey to the Roman ruins of Spain, see the Mediterranean's history from above."
    },
    "quickFacts": {
      "season": "Year-round (Best in Spring/Autumn)",
      "topCountries": ["Turkey", "Spain", "Italy"],
      "vibe": "Romantic, Peaceful, Historic",
      "budget": "€€€"
    },
    "curatedSpotlights": [
      { "name": "Cappadocia, Turkey", "cityId": "euc213", "feature": "The world's most iconic ballooning spot with hundreds of balloons at sunrise." },
      { "name": "Segovia, Spain", "cityId": "euc152", "feature": "Drift over a Roman Aqueduct and a medieval cathedral." },
      { "name": "Tuscany, Italy", "cityId": "euc083", "feature": "Panoramic views of rolling vineyards and cypress-lined roads." }
    ],
    "expertGuide": {
      "culture": "Flights traditionally end with a champagne toast, a custom dating back to 1783.",
      "levels": {
        "beginner": "Standard baskets hold 16-20 people and are very stable.",
        "expert": "Private 'VIP' flights for two are popular for proposals and special events."
      },
      "logistics": "Pickup is usually around 5:00 AM to catch the stable morning thermals."
    },
    "proTip": "Stand in the corner of the basket for the best unobstructed 270-degree photos."
  },
  {
    "id": "exp004",
    "activityName": "Skydiving",
    "regionOrCountry": "Alpine Europe",
    "heroSection": {
      "vibe": "Freefall at 200km/h with the majestic Eiger and Jungfrau peaks as your backdrop.",
      "shortBrief": "Experience the ultimate adrenaline rush. Jump from 14,000 feet and witness the scale of the Alps before pulling the chute for a scenic canopy ride."
    },
    "quickFacts": {
      "season": "Year-round (Best in Summer)",
      "topCountries": ["Switzerland", "Austria", "Germany"],
      "vibe": "Extreme, Thrilling, Scenic",
      "budget": "€€€"
    },
    "curatedSpotlights": [
      { "name": "Interlaken, Switzerland", "cityId": "euc115", "feature": "Known as the adventure capital; jump over the Swiss lakes." },
      { "name": "Innsbruck, Austria", "cityId": "euc122", "feature": "High-altitude jumps with views deep into the Tyrolean valleys." },
      { "name": "Voss, Norway", "cityId": "euc169", "feature": "Jump over the dramatic fjords for a unique vertical landscape." }
    ],
    "expertGuide": {
      "culture": "Skydiving in the Alps is unique because of the helicopter jumps, which are rarer than plane jumps.",
      "levels": {
        "beginner": "Tandem jumps require 20 minutes of training.",
        "expert": "Voss is a hub for BASE jumping and advanced wing-suit flying."
      },
      "logistics": "Weight limits usually apply (around 95-100kg max)."
    },
    "proTip": "If possible, choose a 'Helicopter Jump' over a plane jump—the sensation of falling from a stationary object is much more intense."
  },
  {
    "id": "exp005",
    "activityName": "Kayaking",
    "regionOrCountry": "Nordic Europe",
    "heroSection": {
      "vibe": "Paddle through mirror-still fjords beneath 1,000-meter vertical cliffs.",
      "shortBrief": "Explore the coastlines of the North. Kayaking allows you to reach hidden waterfalls and remote sea caves that larger boats simply cannot access."
    },
    "quickFacts": {
      "season": "June – August",
      "topCountries": ["Norway", "Sweden", "Iceland"],
      "vibe": "Active, Quiet, Nature-rich",
      "budget": "€ - €€"
    },
    "curatedSpotlights": [
      { "name": "Nærøyfjord, Norway", "cityId": "euc168", "feature": "UNESCO-listed fjord so narrow that the mountains feel within reach." },
      { "name": "Stockholm Archipelago, Sweden", "cityId": "euc171", "feature": "Navigate 30,000 islands and stay in remote cabins." },
      { "name": "Jökulsárlón, Iceland", "cityId": "euc177", "feature": "Paddle between blue icebergs in a glacial lagoon." }
    ],
    "expertGuide": {
      "culture": "Nordic countries have the 'Right of Public Access,' meaning you can often camp anywhere along the coast.",
      "levels": {
        "beginner": "Flat-water fjord paddling is very safe and calm.",
        "expert": "Sea kayaking around the Lofoten Islands requires knowledge of strong tides."
      },
      "logistics": "Dry suits are almost always provided and necessary due to the water temperature."
    },
    "proTip": "Look for 'Night Kayaking' tours in Norway during the Summer—the Midnight Sun means you can paddle at 12:00 AM in broad daylight."
  },
  {
    "id": "exp006",
    "activityName": "Via Ferrata Climbing",
    "regionOrCountry": "Alpine Europe",
    "heroSection": {
      "vibe": "Climb high-altitude rock faces using the 'Iron Path' of steel cables and ladders.",
      "shortBrief": "Via Ferrata allows non-climbers to experience extreme vertical heights safely. Built into the rock, these routes offer a secure way to reach the summit."
    },
    "quickFacts": {
      "season": "June – October",
      "topCountries": ["Italy", "Slovenia", "Austria"],
      "vibe": "Challenging, Gritty, Epic",
      "budget": "€"
    },
    "curatedSpotlights": [
      { "name": "The Dolomites, Italy", "cityId": "euc082", "feature": "The birthplace of Via Ferrata, featuring historic WWI routes." },
      { "name": "Triglav, Slovenia", "cityId": "euc142", "feature": "The classic route to the highest peak in the Julian Alps." },
      { "name": "Murren, Switzerland", "cityId": "euc115", "feature": "A terrifyingly scenic 2,000-foot drop right beneath your feet." }
    ],
    "expertGuide": {
      "culture": "Many of these routes were originally used by soldiers in WWI to move supplies through the mountains.",
      "levels": {
        "beginner": "Grade A/B routes are essentially steep hikes with cables.",
        "expert": "Grade E/F routes involve overhanging rock and require significant upper body strength."
      },
      "logistics": "You need a harness, a specialized Ferrata lanyard, and a helmet."
    },
    "proTip": "Always wear climbing gloves; the steel cables can be rough on your hands after a few hours."
  },
  {
    "id": "exp007",
    "activityName": "Surfing",
    "regionOrCountry": "Western Europe",
    "heroSection": {
      "vibe": "Ride the powerful Atlantic swells on Europe's rugged west coast.",
      "shortBrief": "From the world-record monster waves of Portugal to the beginner-friendly sandbreaks of France, Western Europe is a world-class surf destination."
    },
    "quickFacts": {
      "season": "September – November (Best for all levels)",
      "topCountries": ["Portugal", "France", "Spain", "Ireland"],
      "vibe": "Cool, Athletic, Coastal",
      "budget": "€ - €€"
    },
    "curatedSpotlights": [
      { "name": "Nazaré, Portugal", "cityId": "euc067", "feature": "Home to the world's largest rideable waves (Winter only)." },
      { "name": "Hossegor, France", "cityId": "euc114", "feature": "The 'Surfing Capital of Europe' with famous beach breaks." },
      { "name": "Bundoran, Ireland", "cityId": "euc009", "feature": "Cold-water surfing at its best with consistent, powerful reefs." }
    ],
    "expertGuide": {
      "culture": "The surf lifestyle is huge in towns like Ericeira and Biarritz—think campervans, beach fires, and sunrise sessions.",
      "levels": {
        "beginner": "Summer months provide smaller, manageable waves for learners.",
        "expert": "Autumn/Winter brings the 'Big Wave' season for professionals."
      },
      "logistics": "A 3/2mm or 4/3mm wetsuit is required even in summer due to Atlantic currents."
    },
    "proTip": "The tides in Europe are massive (sometimes 10+ meters). Always check a local 'Tide Chart' before heading out, or you might find your beach has disappeared!"
  },
  {
    "id": "exp008",
    "activityName": "Dog Sledding",
    "regionOrCountry": "Nordic Europe",
    "heroSection": {
      "vibe": "Mush your own team of huskies through the silent, frozen forests of Lapland.",
      "shortBrief": "Connect with nature and these incredible athletes. Learn to drive a sled and feel the power of a husky team as they pull you through deep snow."
    },
    "quickFacts": {
      "season": "December – early April",
      "topCountries": ["Finland", "Norway", "Sweden"],
      "vibe": "Traditional, Heartwarming, Active",
      "budget": "€€€"
    },
    "curatedSpotlights": [
      { "name": "Rovaniemi, Finland", "cityId": "euc174", "feature": "The classic husky safari experience near Santa Claus Village." },
      { "name": "Alta, Norway", "cityId": "euc170", "feature": "Deep wilderness expeditions and home to the Finnmarksløpet race." },
      { "name": "Kiruna, Sweden", "cityId": "euc173", "feature": "Combine sledding with a stay at the original Ice Hotel." }
    ],
    "expertGuide": {
      "culture": "Huskies are born to run; you'll notice they are loudest when they are waiting to start and silent once they begin.",
      "levels": {
        "beginner": "Short 5-10km 'taster' rides where you sit in the sled.",
        "expert": "Multi-day 'self-drive' expeditions where you care for your own team."
      },
      "logistics": "Extremely warm 'Arctic Suits' are usually provided by the tour operators."
    },
    "proTip": "When driving, remember to 'help' the dogs by pushing with one foot on the uphill sections—they'll appreciate the teamwork!"
  },
  {
    "id": "exp010",
    "activityName": "Thermal Bathing",
    "regionOrCountry": "Central & Eastern Europe",
    "heroSection": {
      "vibe": "Unwind in mineral-rich steam within neo-Baroque palaces and natural thermal river-beds.",
      "shortBrief": "Central Europe sits on a massive bed of geothermal activity. Whether it's a social 'sparty' in Budapest or a quiet medical soak in the Czech Republic, this is relaxation at its most historic."
    },
    "quickFacts": {
      "season": "Year-round (Magical in Winter)",
      "topCountries": ["Hungary", "Czech Republic", "Poland"],
      "vibe": "Relaxing, Social, Healing",
      "budget": "€ - €€"
    },
    "curatedSpotlights": [
      { "name": "Budapest, Hungary", "cityId": "euc133", "feature": "The Széchenyi Baths—largest medicinal bath in Europe with 18 pools." },
      { "name": "Karlovy Vary, Czech Rep", "cityId": "euc137", "feature": "Historic colonnades where you can drink the curative mineral water." },
      { "name": "Zakopane, Poland", "cityId": "euc139", "feature": "Chochołów thermal pools with panoramic views of the Tatra Mountains." }
    ],
    "expertGuide": {
      "culture": "It is a social ritual; don't be surprised to see locals playing chess on floating boards.",
      "health": "The waters are rich in calcium and magnesium, perfect for muscle recovery after a day of hiking.",
      "etiquette": "Most baths require a swim cap for lap pools. Always bring your own flip-flops and towel to save on rental fees."
    },
    "proTip": "Visit the 'Ruin Bar' spas in Budapest at night for a 'Sparty'—a unique combination of thermal bathing and clubbing."
  },
  {
    "id": "exp011",
    "activityName": "Ice Cave Exploration",
    "regionOrCountry": "Nordic Europe",
    "heroSection": {
      "vibe": "Step into a world of crystalline blue ice, hidden deep within massive glaciers.",
      "shortBrief": "These ephemeral wonders are carved by meltwater each year. Walking through a glacier’s interior feels like stepping inside a giant, glowing blue sapphire."
    },
    "quickFacts": {
      "season": "November – March",
      "topCountries": ["Iceland", "Norway", "Austria (Alpine exception)"],
      "vibe": "Surreal, Silent, Cold",
      "budget": "€€€"
    },
    "curatedSpotlights": [
      { "name": "Vatnajökull, Iceland", "cityId": "euc177", "feature": "The 'Crystal Caves'—the most famous and vibrant blue caves in the world." },
      { "name": "Svalbard, Norway", "cityId": "euc170", "feature": "Deep arctic caves accessible only by snowmobile or dog sled." },
      { "name": "Werfen, Austria", "cityId": "euc122", "feature": "Eisriesenwelt—the world’s largest accessible limestone ice cave." }
    ],
    "expertGuide": {
      "culture": "Because glaciers move, these caves disappear and reform in new shapes every year.",
      "safety": "Never enter an ice cave without a certified guide; they monitor the structural stability and gas levels.",
      "gear": "Crampons and helmets are mandatory and usually provided by tour operators."
    },
    "proTip": "Wear wool base layers. Even if you feel warm walking to the cave, the temperature inside stays a constant 0°C (32°F) or lower."
  },
  {
    "id": "exp012",
    "activityName": "Skiing And Snowboarding",
    "regionOrCountry": "Alpine Europe",
    "heroSection": {
      "vibe": "Carve through fresh powder on high-altitude glaciers where the birthplace of alpinism meets world-class après-ski culture.",
      "shortBrief": "The Alps offer massive interconnected lift systems that span valleys and even cross international borders, providing vertical drops of up to 9,000 feet."
    },
    "quickFacts": {
      "season": "Late November to Mid-April",
      "topCountries": ["France", "Switzerland", "Austria", "Italy"],
      "vibe": "Active, Social, High-Altitude",
      "budget": "€€€"
    },
    "curatedSpotlights": [
      { "name": "Zermatt, Switzerland", "cityId": "euc118", "feature": "Matterhorn views & international skiing into Italy." },
      { "name": "Chamonix, France", "cityId": "euc113", "feature": "Epic 20km off-piste runs on the Aiguille du Midi." },
      { "name": "Innsbruck, Austria", "cityId": "euc122", "feature": "The 'Capital of the Alps' with urban-to-mountain access." }
    ],
    "expertGuide": {
      "culture": "The 'Après-ski' is as important as the sport—think mountain huts, sun-drenched terraces, and evening fondue.",
      "levels": {
        "beginner": "Look for wide, groomed 'Blue' pistes (Interlaken).",
        "expert": "Seek out 'Off-piste' powder but always with a guide due to crevasse risks."
      },
      "logistics": "European resorts use a 'Piste' system where groomed runs are roped and controlled for avalanches."
    },
    "proTip": "Book your ski pass online in advance to save up to 20% and use the 'international' ticket in Zermatt to ski to Italy for lunch."
  },
  {
    "id": "exp013",
    "activityName": "Clubbing",
    "regionOrCountry": "Western Europe",
    "heroSection": {
      "vibe": "Lose yourself in the world’s most iconic dance floors, from underground techno bunkers to sunrise beach clubs.",
      "shortBrief": "Europe defines global nightlife. Whether it's the 48-hour marathons of Berlin or the glamorous 'Superclubs' of Ibiza, the music never stops."
    },
    "quickFacts": {
      "season": "Summer (Ibiza/Mykonos) or Year-round (Berlin/London)",
      "topCountries": ["Germany", "Spain", "Netherlands", "UK"],
      "vibe": "Energetic, Diverse, Limitless",
      "budget": "€€ - €€€"
    },
    "curatedSpotlights": [
      { "name": "Berlin, Germany", "cityId": "euc124", "feature": "Berghain and Tresor—the world capitals of industrial techno." },
      { "name": "Ibiza, Spain", "cityId": "euc155", "feature": "Amnesia and Pacha—home to the world's most famous DJs." },
      { "name": "Amsterdam, Netherlands", "cityId": "euc044", "feature": "De School and Shelter—cutting edge electronic music and ADE festival." }
    ],
    "expertGuide": {
      "culture": "In Berlin, the 'door policy' is strict; wear black and don't look like a tourist. In Ibiza, it’s all about the 'Sunset strip' before the main event.",
      "timing": "Main clubs in Spain and Italy don't get busy until 2:00 AM.",
      "logistics": "Buy tickets online in advance for major DJs to avoid 3-hour queues."
    },
    "proTip": "For a cheaper but equally wild experience, head to **Belgrade** (Balkans) for their floating river clubs called 'Splavovi'."
  },
  {
    "id": "exp015",
    "activityName": "Sunset",
    "regionOrCountry": "Mediterranean Europe",
    "heroSection": {
      "vibe": "Witness the sky turn to liquid gold over ancient ruins and whitewashed volcanic cliffs.",
      "shortBrief": "In the Mediterranean, the sunset isn't just a time of day—it's an event. Crowds gather, music plays, and the world pauses for the golden hour."
    },
    "quickFacts": {
      "season": "Year-round (Best May – October)",
      "topCountries": ["Greece", "Italy", "Croatia", "Spain"],
      "vibe": "Romantic, Calm, Picturesque",
      "budget": "Free"
    },
    "curatedSpotlights": [
      { "name": "Santorini, Greece", "cityId": "euc104", "feature": "The Oia sunset—the most photographed 'Golden Hour' in the world." },
      { "name": "Zadar, Croatia", "cityId": "euc096", "feature": "The 'Greeting to the Sun'—an art installation paired with a Sea Organ." },
      { "name": "Florence, Italy", "cityId": "euc083", "feature": "Piazzale Michelangelo—panoramic views of the Duomo bathed in orange light." }
    ],
    "expertGuide": {
      "culture": "In many coastal towns, the 'Passeggiata' (evening stroll) is timed perfectly with the setting sun.",
      "locations": "Rooftop bars are great, but the best views are often from medieval city walls or historic lighthouses.",
      "photography": "The 20 minutes *after* the sun disappears (the Blue Hour) often provides the best colors."
    },
    "proTip": "In Santorini, skip the Oia crowds and hike to **Imerovigli** for the same view with 90% fewer people."
  },
  {
    "id": "exp016",
    "activityName": "Paddleboarding",
    "regionOrCountry": "Alpine Europe",
    "heroSection": {
      "vibe": "Glide across mirror-like alpine waters with snow-capped peaks reflecting beneath your board.",
      "shortBrief": "Stand-up paddleboarding (SUP) on Alpine lakes offers a peaceful perspective on the mountains. It's the ultimate 'slow travel' experience."
    },
    "quickFacts": {
      "season": "June – September",
      "topCountries": ["Slovenia", "Austria", "Switzerland", "Italy"],
      "vibe": "Peaceful, Balanced, Scenic",
      "budget": "€"
    },
    "curatedSpotlights": [
      { "name": "Lake Bled, Slovenia", "cityId": "euc142", "feature": "Paddle to the iconic island church in the middle of a turquoise lake." },
      { "name": "Lake Annecy, France", "cityId": "euc114", "feature": "Known as Europe's cleanest lake, surrounded by dramatic limestone cliffs." },
      { "name": "Lake Garda, Italy", "cityId": "euc079", "feature": "Explore hidden Roman ruins and lemon groves from the water." }
    ],
    "expertGuide": {
      "culture": "Many Alpine lakes are 'motor-free,' ensuring the water remains perfectly glassy for paddlers.",
      "fitness": "It’s a core-heavy workout, but the calm lake waters make it easy for absolute beginners.",
      "timing": "Go at sunrise (6:00 AM) to avoid the wind and have the lake entirely to yourself."
    },
    "proTip": "Rent an inflatable SUP if you are road-tripping; you can hike it up to high-altitude 'tarn' lakes for a truly remote paddle."
  },
  {
    "id": "exp017",
    "activityName": "Highland Hiking",
    "regionOrCountry": "British Isles",
    "heroSection": {
      "vibe": "Trek through misty glens, rugged ridges, and purple heather-covered moors.",
      "shortBrief": "The Highlands offer some of the last true wilderness in Europe. From the 'Munros' of Scotland to the peaks of Wales, it’s a landscape of myth and legend."
    },
    "quickFacts": {
      "season": "May – September",
      "topCountries": ["Scotland", "Wales", "Ireland"],
      "vibe": "Moody, Atmospheric, Epic",
      "budget": "€"
    },
    "curatedSpotlights": [
      { "name": "Isle of Skye, Scotland", "cityId": "euc012", "feature": "The Quiraing and Old Man of Storr—otherworldly rock formations." },
      { "name": "Snowdonia, Wales", "cityId": "euc004", "feature": "Climb Yr Wyddfa (Snowdon) for views across the Irish Sea." },
      { "name": "Glendalough, Ireland", "cityId": "euc007", "feature": "Ancient monastic ruins set in a dramatic glacial valley." }
    ],
    "expertGuide": {
      "culture": "In Scotland, 'Munro Bagging' (climbing peaks over 3,000ft) is a national obsession.",
      "weather": "The 'Four Seasons in One Day' rule applies. Always carry a waterproof shell, even if it's sunny.",
      "etiquette": "Stick to the 'Leave No Trace' principles and be wary of 'midges' (tiny biting flies) in mid-summer."
    },
    "proTip": "Buy a 'midge net' for your head if hiking Scotland in July—it looks silly but will save your sanity."
  },
  {
    "id": "exp018",
    "activityName": "Cave Exploration",
    "regionOrCountry": "Balkans",
    "heroSection": {
      "vibe": "Journey into massive underground cathedrals and hidden pirate hideouts along the Adriatic.",
      "shortBrief": "The Balkans are home to 'Karst' topography, creating some of the deepest and most decorated cave systems on earth, many with fascinating war histories."
    },
    "quickFacts": {
      "season": "Year-round",
      "topCountries": ["Slovenia", "Albania", "Montenegro", "Serbia"],
      "vibe": "Mysterious, Geological, Historic",
      "budget": "€ - €€"
    },
    "curatedSpotlights": [
      { "name": "Postojna, Slovenia", "cityId": "euc142", "feature": "Ride an underground train through 24km of stalactites and halls." },
      { "name": "Karaburun, Albania", "cityId": "euc102", "feature": "The Cave of Haxhi Ali—a massive sea cave used by 17th-century pirates." },
      { "name": "Cetinje, Montenegro", "cityId": "euc100", "feature": "Lipa Cave—one of the largest in the country with an underground bar." }
    ],
    "expertGuide": {
      "culture": "Caves here often served as bomb shelters or partisan bases during past conflicts.",
      "wildlife": "Keep an eye out for the 'Olm' in Slovenia—a rare, blind aquatic salamander known as the 'human fish'.",
      "temperature": "Underground caves stay at a constant 10°C (50°F) year-round, making them a great escape from summer heat."
    },
    "proTip": "In Postojna, book the 'Hidden Passages' tour if you want to see the parts of the cave not accessible by the tourist train."
  },
]

 const expeditions = [
  {
    "id": "expd001",
    "name": "Swiss Alps Adventure",
    "duration": "3 Days",
    "region": "Alpine Europe",
    "usp": "Fly above iconic alpine peaks",
    "difficulty": "Moderate",
    "summary": {
      "vibe": "A high-altitude thrill ride through the heart of the Bernese Oberland.",
      "shortBrief": "Experience the Swiss Alps from every angle—on foot, by cogwheel train, and from the air. This expedition focuses on the majestic 'Big Three' peaks: Eiger, Mönch, and Jungfrau."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc115", "activity": "Arrival in Interlaken & Sunset Paragliding over the lakes." },
      { "day": 2, "cityId": "euc115", "activity": "Jungfraujoch 'Top of Europe' excursion via the Eiger Express." },
      { "day": 3, "cityId": "euc118", "activity": "Scenic train transfer to Zermatt and farewell dinner facing the Matterhorn." }
    ],
    "stats": {
      "groupSize": "Max 10",
      "accommodation": "Boutique Alpine Lodges",
      "transport": "Swiss Travel Pass (Train/Cable Car)"
    },
    "description": "The Swiss Alps Adventure is an elite, multi-modal expedition designed for those who want to conquer the Bernese Oberland's most dramatic landscapes in a condensed timeframe. Starting in the mountain hub of Grindelwald, the journey scales the sheer faces of the Eiger and Jungfrau massif. This trip is unique because it blends traditional high-altitude trekking with modern aerial exploration, allowing participants to witness the scale of the Aletsch Glacier—the largest in the Alps—from both the ice level and the cockpit of a helicopter or paragliding wing. It is a high-octane immersion into Swiss mountaineering culture, featuring stays in historic alpine huts and transit via world-class cogwheel railways. The expedition is meticulously paced to provide physical challenge during the day and refined alpine hospitality by nightfall.",
    "detailedKeyFeatures": {
      "maxAltitude": "3,454 meters (Jungfraujoch Sphinx Observatory)",
      "terrain": "Glacial moraines, limestone ridges, groomed alpine trails, and permanent snowfields.",
      "bestSeason": "Late June to Early September for hiking; December to March for winter flight variants."
    },
    "highlights": [
      "Scenic helicopter flight circling the Eiger North Face",
      "Standing on the 'Top of Europe' at the Jungfraujoch Sphinx Observatory",
      "Traversing the Eiger Trail directly beneath the 1,800m vertical rock wall",
      "Sunrise views over the Aletsch Glacier, a UNESCO World Heritage site",
      "Traditional fondue dinner at a remote mountain hut accessible only by foot or cable car"
    ],
    "requirements": [
      "Sturdy Grade B mountaineering boots with ankle support",
      "Layered technical clothing (Base, Mid-layer, and Gore-Tex Shell)",
      "Polarized sunglasses with Category 4 UV protection for glacial reflection",
      "15-25 liter daypack with hydration bladder",
      "Basic physical fitness for 4-6 hours of daily hiking at elevation"
    ],
    "precaution": "Rapid weather shifts are common; whiteout conditions can occur even in summer. Altitude sickness is a minor risk at 3,500m; hydration is critical. Crevasse safety is mandatory for any off-trail glacier excursions.",
    "route": [
      {
        "day": 1,
        "activities": "Arrival in Grindelwald; Gear check and briefing; Afternoon hike along the Eiger Trail from Eigergletscher to Alpiglen; Evening orientation dinner."
      },
      {
        "day": 2,
        "activities": "Ascent via the Eiger Express tricable gondola; Exploration of the Jungfraujoch ice tunnels; Afternoon helicopter peak-pass over the Mönch and Jungfrau summits."
      },
      {
        "day": 3,
        "activities": "Early morning trek to the Bachalpsee for reflection shots of the peaks; Optional tandem paragliding descent into the Lauterbrunnen Valley; Return to Interlaken for departure."
      }
    ]
  },
  {
    "id": "expd002",
    "name": "Paris Cultural Escape",
    "duration": "2 Days",
    "region": "Western Europe",
    "usp": "Art, romance, and timeless landmarks",
    "difficulty": "Easy",
    "summary": {
      "vibe": "A fast-paced immersion into the 'City of Light'.",
      "shortBrief": "Perfect for a weekend getaway, this route connects the grandest museums of the world with the bohemian charm of hilltop villages."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc043", "activity": "Morning at the Louvre followed by a Seine River lunch cruise." },
      { "day": 2, "cityId": "euc043", "activity": "Sunrise at the Eiffel Tower and an afternoon exploring Montmartre’s artist squares." }
    ],
    "stats": {
      "groupSize": "Flexible",
      "accommodation": "Classic Parisian Hotel",
      "transport": "Metro & Walking"
    },
    "description": "The Paris Cultural Escape is an intensive, curated journey through the soul of French aesthetics, designed for those who wish to maximize their exposure to history in a single weekend. This expedition prioritizes high-value cultural assets, moving from the monolithic grandeur of the Louvre to the narrow, cobblestone arteries of Montmartre. Unlike a standard tour, this route is optimized to avoid 'tourist fatigue' by blending world-class museum visits with scenic boat transits and architectural walks. It captures the transition of Paris from its royal roots to its 19th-century bohemian revolution, offering a sophisticated look at the landmarks that have defined Western art and romance for centuries.",
    "detailedKeyFeatures": {
      "maxAltitude": "130 meters (Summit of Montmartre hill)",
      "terrain": "Paved boulevards, historical limestone staircases, and manicured park gravel.",
      "bestSeason": "April to June for blossoms or October for crisp autumnal lighting."
    },
    "highlights": [
      "Private evening cruise on the Seine to view illuminated monuments",
      "Skip-the-line access to the Louvre’s Denon Wing (Mona Lisa and Winged Victory)",
      "Sunset views from the Sacré-Cœur Basilica overlooking the entire city",
      "Pastry and espresso tasting in the historic Le Marais district",
      "Walk through the Tuileries Garden toward the Place de la Concorde"
    ],
    "requirements": [
      "Comfortable walking shoes (essential for 10km+ daily urban trekking)",
      "Smart-casual attire for evening venues and fine dining",
      "Pre-booked digital museum passes to bypass wait times",
      "A portable power bank for GPS navigation and photography",
      "Basic French phrases for polite interaction in local bistros"
    ],
    "precaution": "High risk of pickpocketing in crowded areas like the Eiffel Tower and Metro Line 1. Ensure all valuables are in 'anti-theft' or front-facing bags. Avoid 'unauthorized' street vendors in Montmartre.",
    "route": [
      {
        "day": 1,
        "activities": "Morning Louvre masterclass session; Afternoon walk through the Tuileries to Place de la Concorde; Evening Seine River cruise with champagne as the Eiffel Tower begins its sparkle display."
      },
      {
        "day": 2,
        "activities": "Exploration of the Le Marais district's boutiques and Jewish Quarter; Afternoon funicular ride up to Montmartre; Artist Square (Place du Tertre) visit and farewell dinner at a traditional French brasserie."
      }
    ]
  },
  {
    "id": "expd003",
    "name": "Rome Ancient Discovery",
    "duration": "3 Days",
    "region": "Mediterranean Europe",
    "usp": "Walk through ancient world history",
    "difficulty": "Easy",
    "summary": {
      "vibe": "A time-traveling journey through 2,000 years of civilization.",
      "shortBrief": "Uncover the layers of the Eternal City, from the brutal history of the Colosseum to the spiritual grandeur of the Vatican."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc078", "activity": "Private tour of the Colosseum and Roman Forum." },
      { "day": 2, "cityId": "euc078", "activity": "Vatican Museums, Sistine Chapel, and St. Peter’s Basilica." },
      { "day": 3, "cityId": "euc078", "activity": "Trastevere food crawl and the Pantheon at dusk." }
    ],
    "stats": {
      "groupSize": "Max 12",
      "accommodation": "Historical Center Boutique Hotel",
      "transport": "Walking & Private Transfer"
    },
    "description": "The Rome Ancient Discovery is a deep-dive expedition into the 'Caput Mundi,' designed to peel back the historical layers of the Eternal City. This 3-day itinerary focuses on the transition from the pagan architectural triumphs of the Roman Empire to the Renaissance spiritual dominance of the Vatican. It is a dense, high-narrative journey that prioritizes the 'triumvirate' of Roman sites: the Colosseum, the Roman Forum, and Palatine Hill. Beyond the stone and mortar, the expedition immerses participants in the Mediterranean lifestyle, emphasizing the city's living history through its vibrant piazzas, baroque fountains, and the culinary traditions of the Trastevere district. It is an essential route for those seeking to understand the foundations of Western civilization in a contemporary urban setting.",
    "detailedKeyFeatures": {
      "maxAltitude": "50 meters (Janiculum Hill overlooking the city center)",
      "terrain": "Uneven ancient basalt paving stones (Sanpietrini), gravel paths within archaeological sites, and marble museum floors.",
      "bestSeason": "October to November or March to May to avoid the intense Mediterranean heat and peak summer crowds."
    },
    "highlights": [
      "Underground tour of the Colosseum’s hypogeum (gladiator tunnels)",
      "Early-access viewing of the Sistine Chapel and Vatican Museums",
      "Panoramic sunset over the Roman Forum from the Capitoline Hill",
      "Evening walking tour of the Pantheon and Trevi Fountain",
      "Authentic Roman pasta tasting (Carbonara and Cacio e Pepe) in a hidden Trastevere alley"
    ],
    "requirements": [
      "High-traction walking shoes (Sanpietrini stones can be slippery when wet)",
      "Modest dress code for religious sites (shoulders and knees must be covered for the Vatican)",
      "Refillable water bottle for the 'Nasoni' (Rome's free public drinking fountains)",
      "Sun protection (hat and sunscreen), as the Roman Forum offers very little shade",
      "Pre-downloaded audio guides or an offline map of the historic center"
    ],
    "precaution": "Dehydration during summer months is a major factor; use the public fountains frequently. Be aware of 'Gladiator' impersonators near the Colosseum who charge high fees for photos. Traffic in Rome is erratic—always use designated crossings.",
    "route": [
      {
        "day": 1,
        "activities": "The Core of the Empire: VIP entry to the Colosseum, Palatine Hill, and the Roman Forum; Evening stroll through the Piazza Navona to see Bernini's fountains."
      },
      {
        "day": 2,
        "activities": "The Spiritual Center: Vatican Museums and St. Peter’s Basilica; Afternoon climb of the Castel Sant'Angelo for river views; Dinner in the bohemian Trastevere neighborhood."
      },
      {
        "day": 3,
        "activities": "The Layers of Rome: Visit the Pantheon and the Trevi Fountain; Afternoon exploration of the Appian Way or the Borghese Gallery; Final sunset at the Spanish Steps."
      }
    ]
  },
  {
    "id": "expd004",
    "name": "Amsterdam City and Canals",
    "duration": "2 Days",
    "region": "Western Europe",
    "usp": "Canals, culture, and relaxed vibes",
    "difficulty": "Easy",
    "summary": {
      "vibe": "A laid-back exploration of waterways and world-class art.",
      "shortBrief": "Discover why Amsterdam is the world's most cycling-friendly city while exploring the deeply moving history of the Jewish Quarter."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc044", "activity": "Canal boat tour followed by the Anne Frank House." },
      { "day": 2, "cityId": "euc044", "activity": "Van Gogh Museum and a bike tour through Vondelpark." }
    ],
    "stats": {
      "groupSize": "Max 15",
      "accommodation": "Canal-side Guesthouse",
      "transport": "Bicycle & Canal Boat"
    },
    "description": "The Amsterdam City and Canals expedition offers a sophisticated look at the 'Venice of the North,' focusing on the Golden Age engineering that defined this urban masterpiece. This two-day journey balances the profound emotional weight of the Anne Frank House and the Jewish Quarter with the vibrant, light-filled galleries of the Rijksmuseum. Participants will navigate the city’s concentric canal rings—a UNESCO World Heritage site—both by foot and by boat to understand how water has shaped Dutch trade, art, and daily life. The expedition emphasizes the 'Gezellig' (cosy/convivial) atmosphere of the Jordaan district, providing a relaxed yet intellectually stimulating escape into one of Europe’s most progressive and historically preserved capitals.",
    "detailedKeyFeatures": {
      "maxAltitude": "2 meters (Virtually sea level; mostly reclaimed land)",
      "terrain": "Flat, paved cycle paths, brick-laid sidewalks, and narrow canal bridges.",
      "bestSeason": "Mid-April to early May for the nearby tulip blooms, or September for mild weather and fewer crowds."
    },
    "highlights": [
      "Private evening canal cruise through the illuminated 17th-century Grachtengordel",
      "Deep-dive tour of the Rijksmuseum to see Rembrandt’s 'The Night Watch'",
      "Emotional journey through the Anne Frank House and the Secret Annex",
      "Guided cycling tour through the sprawling Vondelpark and hidden 'hofjes' (courtyards)",
      "Traditional Dutch pancake and 'Stroopwafel' tasting in the Jordaan district"
    ],
    "requirements": [
      "Basic cycling proficiency and awareness of local bike lane etiquette",
      "Weather-resistant outer layer (Amsterdam weather is notoriously unpredictable)",
      "Pre-booked time-slot tickets for the Anne Frank House (often sold out weeks in advance)",
      "Comfortable footwear for walking along uneven brick quaysides",
      "A digital payment method (many Amsterdam cafes are 'card only')"
    ],
    "precaution": "The most significant danger is the high-speed bicycle traffic; pedestrians must be extremely careful not to walk in dedicated red-paved bike lanes. Tram tracks can also be a tripping hazard or a trap for bicycle tires.",
    "route": [
      {
        "day": 1,
        "activities": "History and Heritage: Morning visit to the Anne Frank House; exploration of the Jewish Historical Museum and Portuguese Synagogue; Sunset canal boat tour starting from Central Station."
      },
      {
        "day": 2,
        "activities": "Art and Atmosphere: Morning at the Museum Square (Rijksmuseum or Van Gogh Museum); Afternoon bike rental to explore Vondelpark; Evening stroll through the boutique-lined 'Nine Streets' (De Negen Straatjes)."
      }
    ]
  },
  {
    "id": "expd005",
    "name": "Santorini Island Highlights",
    "duration": "2 Days",
    "region": "Mediterranean Europe",
    "usp": "World-famous sunsets and views",
    "difficulty": "Easy",
    "summary": {
      "vibe": "Whitewashed luxury perched on the edge of a volcanic caldera.",
      "shortBrief": "A visually stunning escape focusing on the unique geology and world-famous architecture of the Cycladic islands."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc104", "activity": "Coastal hike from Fira to Imerovigli and sunset in Oia." },
      { "day": 2, "cityId": "euc104", "activity": "Catamaran cruise around the Caldera with swimming at Red Beach." }
    ],
    "stats": {
      "groupSize": "Couples/Small Groups",
      "accommodation": "Cave Villa",
      "transport": "Private Shuttle & Boat"
    },
    "description": "The Santorini Island Highlights expedition is a sensory journey through the jewel of the Cyclades, designed to showcase the island's dual identity as a volcanic powerhouse and a pinnacle of Mediterranean luxury. This two-day route centers on the 'Caldera Rim,' where whitewashed villages like Fira and Oia cling to thousand-foot cliffs. Beyond the iconic blue domes, the expedition explores the island's prehistoric soul at Akrotiri—the 'Minoan Pompeii'—and the rare viticulture of volcanic soil vineyards. The pace is designed for 'slow travel'—allowing for long afternoons overlooking the Aegean, balanced by the invigorating cliffside trek from Fira to Oia. It is the definitive route for photographers, geology enthusiasts, and those seeking the quintessential Greek island aesthetic.",
    "detailedKeyFeatures": {
      "maxAltitude": "350 meters (Imerovigli, the highest point of the caldera rim)",
      "terrain": "Volcanic cobblestones, steep 'donkey steps,' smooth marble walkways, and dusty coastal hiking trails.",
      "bestSeason": "May to June or September to October (avoiding the intense July/August heat and extreme cruise ship crowds)."
    },
    "highlights": [
      "The 10.5km Fira-to-Oia cliffside hike with uninterrupted caldera views",
      "Guided exploration of the Akrotiri archaeological site (preserved 16th-century BC city)",
      "Sunset wine tasting featuring local Assyrtiko grapes at a cliffside winery",
      "Catamaran cruise to the 'Red Beach' and the active volcanic islet of Nea Kameni",
      "Early morning photography session in Oia to capture the blue domes without the crowds"
    ],
    "requirements": [
      "Footwear with significant grip (volcanic stones and marble paths can be surprisingly slick)",
      "Sun protection: High-SPF sunscreen, polarized sunglasses, and a wide-brimmed hat",
      "Lightweight, breathable linen or cotton clothing (technical gear for the Fira-Oia hike)",
      "Small daypack for water and camera equipment",
      "Water shoes for swimming at black sand volcanic beaches (sand gets extremely hot)"
    ],
    "precaution": "Intense sun exposure and heat exhaustion are the primary risks; there is almost no shade on the caldera hike. Be cautious near cliff edges as the volcanic rock can be crumbly. Avoid the 'Donkey Paths' in Fira if you have respiratory sensitivities due to the smell and animal waste.",
    "route": [
      {
        "day": 1,
        "activities": "The High Rim: Morning trek from Fira through Imerovigli to Oia; Afternoon exploring Oia’s marble alleys and boutique shops; Evening sunset at the Byzantine Castle ruins."
      },
      {
        "day": 2,
        "activities": "Ancient Earth & Sea: Morning tour of the Akrotiri ruins; Afternoon catamaran cruise visiting the Hot Springs and Red Beach; Farewell dinner in a traditional 'Canava' (wine cellar) restaurant."
      }
    ]
  },
  {
    "id": "expd006",
    "name": "Norwegian Fjord Explorer",
    "duration": "3 Days",
    "region": "Nordic Europe",
    "usp": "Cruise dramatic glacier-carved fjords",
    "difficulty": "Moderate",
    "summary": {
      "vibe": "A nature-first journey through deep blue waters and soaring cliffs.",
      "shortBrief": "Travel the 'Norway in a Nutshell' route, featuring the steepest railways and the narrowest fjords in the world."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc169", "activity": "Arrival in Bergen and Fløibanen funicular for city views." },
      { "day": 2, "cityId": "euc168", "activity": "Flam Railway journey and Nærøyfjord electric boat cruise." },
      { "day": 3, "cityId": "euc168", "activity": "Stegastein Viewpoint and transfer back to Bergen." }
    ],
    "stats": {
      "groupSize": "Max 12",
      "accommodation": "Traditional Waterfront Hotel",
      "transport": "Train, Boat & Bus"
    },
    "description": "The Norwegian Fjord Explorer is a high-latitude immersion into the raw power of glacial erosion. Centered on the Sognefjord—Norway's longest and deepest fjord—this expedition utilizes a seamless network of electric ferries and narrow-gauge railways to navigate vertical landscapes. The journey highlights the transition from sea-level waterways to high-alpine plateaus, specifically focusing on the Nærøyfjord, a UNESCO World Heritage site known for being only 250 meters wide at certain points. Beyond the transit, the expedition offers a tactile experience of Nordic life, from the spray of the Kjosfossen waterfall to the quiet, moss-covered villages of Aurland. It is an essential route for those seeking the 'Norway in a Nutshell' experience with an emphasis on sustainable, eco-conscious travel through some of the most dramatic coastal scenery on Earth.",
    "detailedKeyFeatures": {
      "maxAltitude": "862 meters (Myrdal Station)",
      "terrain": "Deep saltwater fjords, sheer granite cliffs, and steep mountain rail tracks.",
      "bestSeason": "June to August for the Midnight Sun and lush greenery; late September for autumn colors and snow-capped peaks."
    },
    "highlights": [
      "Steepest standard-gauge rail journey in the world on the Flåm Railway",
      "Silent electric ferry cruise through the narrow, mist-shrouded Nærøyfjord",
      "Panoramic views from the Stegastein Lookout, 650 meters above the water",
      "Stop at Kjosfossen Waterfall to witness the powerful glacial runoff",
      "Exploring the historic Hanseatic wharf of Bryggen in Bergen"
    ],
    "requirements": [
      "High-quality waterproof hardshell jacket (fjord microclimates change rapidly)",
      "Binoculars for spotting seals, eagles, and mountain goats on cliff ledges",
      "Thermal base layers (even in summer, the wind on the ferry deck is biting)",
      "Sturdy shoes with non-slip soles for wet ferry decks and forest paths",
      "A camera with a wide-angle lens to capture the vertical scale of the cliffs"
    ],
    "precaution": "Hypothermia risk on open-deck ferries due to wind chill, even if the sun is out. Motion sickness is rare within the fjords due to calm waters, but the coastal approach to Bergen can be choppy. Be mindful of narrow mountain roads when walking near overlooks.",
    "route": [
      {
        "day": 1,
        "activities": "The Mountain Descent: Depart Bergen via the Bergen Line to Myrdal; transfer to the Flåm Railway for the 20km descent; overnight in the village of Flåm."
      },
      {
        "day": 2,
        "activities": "The Deep Fjord: Board a premium silent ferry through the Aurlandsfjord and Nærøyfjord to Gudvangen; bus transfer via the winding Stalheimskleiva (seasonal)."
      },
      {
        "day": 3,
        "activities": "The Coastal Return: Scenic train transit back to Bergen; afternoon exploration of the Fish Market and Mount Fløyen funicular for a final city-wide view."
      }
    ]
  },
  {
    "id": "expd007",
    "name": "Prague Medieval Getaway",
    "duration": "2 Days",
    "region": "Central & Eastern Europe",
    "usp": "A fairytale medieval city escape",
    "difficulty": "Easy",
    "summary": {
      "vibe": "A journey through the 'City of a Hundred Spires' and its Gothic heart.",
      "shortBrief": "Step into a living fairytale. Prague’s skyline of towers and stone bridges remains largely untouched since the 14th century, offering a dense, walkable history lesson."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc136", "activity": "Old Town Square exploration and crossing the Charles Bridge at sunset." },
      { "day": 2, "cityId": "euc136", "activity": "Tour of Prague Castle complex and evening in the Jewish Quarter." }
    ],
    "stats": {
      "groupSize": "Max 15",
      "accommodation": "Old Town Boutique Hotel",
      "transport": "Walking & Historic Tram"
    },
    "description": "The Prague Medieval Getaway is a dense, atmospheric exploration of the best-preserved Gothic and Baroque city center in Central Europe. Often called the 'City of a Hundred Spires,' this expedition focuses on the 14th-century legacy of Holy Roman Emperor Charles IV. Participants navigate a labyrinth of narrow, gas-lit alleys that open into grand market squares, bridging the gap between the Vltava River's banks via the iconic Charles Bridge. The trip is designed to showcase the contrast between the city's dark, mystical legends (like the Golem and alchemists) and its golden, ornate architectural triumphs. It is an ideal route for those who value walkability, historical mystery, and the distinct, hearty culinary traditions of Bohemia.",
    "detailedKeyFeatures": {
      "maxAltitude": "270 meters (Petřín Hill Lookout Tower)",
      "terrain": "Dense, uneven historical cobblestones (Cat's head stones), steep inclines leading to the Castle District, and stone bridges.",
      "bestSeason": "December for the world-famous medieval Christmas markets, or September for misty, atmospheric mornings and mild walking temperatures."
    },
    "highlights": [
      "Crossing the Charles Bridge at dawn to witness the 30 baroque statues without crowds",
      "Watching the 600-year-old Astronomical Clock (Orloj) strike the hour in Old Town Square",
      "Exclusive tour of the Golden Lane, the 16th-century dwellings of castle guards and alchemists",
      "Evening classical concert in a hidden Baroque chapel or the Klementinum library",
      "Traditional Bohemian feast featuring roast duck and local pilsner in a medieval cellar"
    ],
    "requirements": [
      "Shoes with thick, cushioned soles (the historical paving is notoriously hard on the feet)",
      "Small change (Czech Koruna) for public restrooms and historical site entry",
      "A coat/jacket even in summer, as the deep stone cellars and cathedrals remain quite chilly",
      "Advance booking for the Jewish Quarter (Josefov) circuit to ensure entry to the Old Jewish Cemetery",
      "A camera capable of low-light photography for the evening city lights"
    ],
    "precaution": "Prague is generally very safe, but the Old Town Square is a hotspot for 'currency exchange' scams—always use official banks. Watch for pickpockets on the crowded Charles Bridge and Tram 22 (the 'Pickpocket Express'). Cobblestones can be extremely slippery when frosty or wet.",
    "route": [
      {
        "day": 1,
        "activities": "The Old Town & Jewish Quarter: Morning exploration of the Old Town Square and the Astronomical Clock; Afternoon tour of Josefov; Sunset walk across Charles Bridge followed by a riverside dinner."
      },
      {
        "day": 2,
        "activities": "The Royal Heights: Ascent to Prague Castle (Hradčany) to visit St. Vitus Cathedral; Walk through the Golden Lane; Afternoon descent through the Lesser Town (Malá Strana) and Petřín Hill for a panoramic city view."
      }
    ]
  },
  {
    "id": "expd008",
    "name": "Barcelona Culture and Coast",
    "duration": "3 Days",
    "region": "Mediterranean Europe",
    "usp": "Architecture, beaches, and vibrant life",
    "difficulty": "Easy",
    "summary": {
      "vibe": "Where Gaudí’s surrealism meets the Mediterranean breeze.",
      "shortBrief": "Experience the unique Catalan identity through its modernist architecture, legendary culinary scene, and urban beach culture."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc069", "activity": "Gaudí discovery: La Sagrada Família and Park Güell." },
      { "day": 2, "cityId": "euc069", "activity": "Gothic Quarter walking tour followed by sunset at Barceloneta Beach." },
      { "day": 3, "cityId": "euc069", "activity": "Morning at La Boqueria Market and a cable car ride to Montjuïc." }
    ],
    "stats": {
      "groupSize": "Max 12",
      "accommodation": "Modernist District Apartment",
      "transport": "Metro & Walking"
    },
    "description": "The Barcelona Culture and Coast expedition is a vibrant study of Catalan Modernism and Mediterranean urbanism. This 3-day journey is anchored by the surrealist genius of Antoni Gaudí, tracing his influence from the towering spires of the Sagrada Família to the organic forms of Park Güell. The expedition offers a dual perspective: the shadowed, labyrinthine history of the Barri Gòtic (Gothic Quarter) and the sun-drenched, grid-patterned expansion of the Eixample district. Beyond the aesthetics, the route immerses participants in the city's social fabric, transitioning from the bustling Boqueria Market to the revitalized beachfront of Barceloneta. It is designed for those who appreciate the intersection of high art, coastal relaxation, and a world-class culinary scene that thrives long after sunset.",
    "detailedKeyFeatures": {
      "maxAltitude": "173 meters (Montjuïc Hill)",
      "terrain": "Flat coastal promenades, octagonal city blocks (Eixample), and occasional steep inclines in Park Güell.",
      "bestSeason": "May to June for perfect beach weather without the humidity, or September for the Mercè Festival celebrations."
    },
    "highlights": [
      "In-depth exploration of the Sagrada Família’s forest-like interior and towers",
      "Sunset views over the city grid from the mosaic benches of Park Güell",
      "Tapas crawl through the hidden bars of El Born and the Gothic Quarter",
      "Early morning walk along the Barceloneta boardwalk to the W Hotel",
      "Visit to Casa Batlló or La Pedrera to see Gaudí’s residential 'living breathing' architecture"
    ],
    "requirements": [
      "Lightweight, stylish clothing suitable for both beach strolls and upscale dining",
      "Pre-booked tickets for Gaudí sites (essential, as daily capacity is strictly limited)",
      "Comfortable sandals or walking shoes for the 133-block Eixample grid",
      "A small cross-body bag for security in high-traffic pedestrian zones",
      "Basic knowledge of Catalan culture (locals appreciate 'Bon dia' over 'Buenos días')"
    ],
    "precaution": "Barcelona is the European capital for highly skilled pickpockets, particularly on La Rambla and Metro Line 4. Never leave bags on the floor at outdoor cafes. Be wary of the 'bird poop' or 'map' scams where strangers distract you to steal valuables.",
    "route": [
      {
        "day": 1,
        "activities": "The Gaudí Masterpieces: Morning visit to Sagrada Família; Afternoon at Park Güell; Evening walk down Passeig de Gràcia to view the modernist facades under city lights."
      },
      {
        "day": 2,
        "activities": "The Historical Heart: Guided walk through the Gothic Quarter and Cathedral; Food tasting at La Boqueria Market; Late afternoon beach time in Barceloneta followed by seafood paella."
      },
      {
        "day": 3,
        "activities": "The Olympic Heights: Cable car ride to Montjuïc Hill for the fortress and Olympic stadium; Visit to the Joan Miró Foundation; Farewell sunset drinks overlooking the Mediterranean."
      }
    ]
  },
  {
    "id": "expd009",
    "name": "Iceland Golden Circle Mini Tour",
    "duration": "2 Days",
    "region": "Nordic Europe",
    "usp": "Raw nature in pure form",
    "difficulty": "Moderate",
    "summary": {
      "vibe": "Fire and ice in the world's most dramatic geological park.",
      "shortBrief": "A high-impact loop from Reykjavik that covers exploding geysers, massive waterfalls, and the tectonic rift where two continents pull apart."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc176", "activity": "Thingvellir National Park, Geysir, and Gullfoss Waterfall." },
      { "day": 2, "cityId": "euc176", "activity": "Relaxing in the Blue Lagoon and exploring Reykjavik's colorful streets." }
    ],
    "stats": {
      "groupSize": "Max 8",
      "accommodation": "Eco-Lodge or City Center Hotel",
      "transport": "4x4 Super Jeep"
    },
    "description": "The Iceland Golden Circle Mini Tour is a concentrated exploration of the North Atlantic's most volatile and majestic geological features. This two-day expedition leaves the urban safety of Reykjavik to traverse the Mid-Atlantic Ridge at Þingvellir National Park, where the North American and Eurasian tectonic plates are visibly drifting apart. The route captures the raw power of Icelandic water and heat, from the thundering double-cascade of Gullfoss to the hyper-active Strokkur geyser. Designed for those with limited time but a deep hunger for 'primal' landscapes, the journey combines the history of the world's oldest parliament with the futuristic energy of geothermal fields. It is a nature-first itinerary where the weather dictates the pace and the landscape feels like the earth is still under construction.",
    "detailedKeyFeatures": {
      "maxAltitude": "approx. 100 meters (elevation changes are minimal, but the exposure is high)",
      "terrain": "Volcanic basalt, gravel pathways, wooden boardwalks over boiling mud pits, and spray-slicked rock stairs.",
      "bestSeason": "June to August for 24-hour daylight (Midnight Sun) and accessible trails; September to March for Northern Lights (Aurora Borealis) potential."
    },
    "highlights": [
      "Walking between continental plates in the Almannagjá fault at Þingvellir",
      "Witnessing the Strokkur geyser erupting 30 meters into the air every 6-10 minutes",
      "Feeling the spray from the massive Gullfoss (Golden Falls) 'staircase' waterfall",
      "Soaking in the geothermal waters of the Secret Lagoon or Fontana Spa",
      "Exploring the Kerið volcanic crater lake with its vibrant red volcanic rock walls"
    ],
    "requirements": [
      "Strictly waterproof hardshell jacket and trousers (mist from falls and wind-driven rain is constant)",
      "Sturdy hiking boots with deep tread for muddy or icy paths",
      "Thermal base layers (synthetic or wool) even in the height of summer",
      "Swimsuit and quick-dry towel for geothermal springs",
      "A sturdy tripod if visiting in winter for long-exposure Northern Lights photography"
    ],
    "precaution": "Extreme wind gusts (up to 100km/h) can occur suddenly and are strong enough to blow open car doors. Never venture off marked boardwalks in geothermal areas—the ground can be a thin crust over boiling water. Weather changes occur in minutes; always check the 'SafeTravel' app.",
    "route": [
      {
        "day": 1,
        "activities": "Tectonics and History: Morning exploration of Þingvellir National Park; Afternoon at the Geysir geothermal area; Evening relaxation at a local hot spring; Overnight stay in the Hella/Flúðir area."
      },
      {
        "day": 2,
        "activities": "The Power of Water: Morning at Gullfoss Waterfall; Visit to the Kerið crater; Afternoon return to Reykjavik via the Hellisheiði volcanic plateau and geothermal power plant."
      }
    ]
  },
  {
    "id": "expd010",
    "name": "Croatian Coast Escape",
    "duration": "3 Days",
    "region": "Balkans",
    "usp": "Islands, old towns, turquoise seas",
    "difficulty": "Easy",
    "summary": {
      "vibe": "Sailing through the 'Pearl of the Adriatic'.",
      "shortBrief": "This coastal hop focuses on the southern Dalmatian coast, combining medieval stone fortresses with the crystal-clear waters of the Adriatic islands."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc094", "activity": "Walking the medieval walls of Dubrovnik's Old Town." },
      { "day": 2, "cityId": "euc094", "activity": "Full-day boat excursion to the Elaphiti Islands for snorkeling." },
      { "day": 3, "cityId": "euc095", "activity": "Transfer to Split to visit Diocletian's Palace." }
    ],
    "stats": {
      "groupSize": "Max 10",
      "accommodation": "Seaview Villa",
      "transport": "Ferry & Private Boat"
    },
    "description": "The Croatian Coast Escape is a curated journey through the Southern Dalmatian archipelago, where the sun-drenched history of the Republic of Ragusa meets the turquoise serenity of the Adriatic Sea. This 3-day expedition centers on Dubrovnik’s formidable limestone walls—a masterpiece of medieval fortification—before transitioning to the lush, car-free tranquility of the Elafiti Islands. The route is designed to showcase the unique 'stone-and-sea' aesthetic of Croatia, moving from the polished marble of the Stradun to the hidden saltwater lakes and pine forests of the coast. It is an ideal blend of historical discovery and Mediterranean relaxation, emphasizing the region’s maritime heritage and its emergence as a premier cultural destination in the Balkans.",
    "detailedKeyFeatures": {
      "maxAltitude": "412 meters (Summit of Mount Srđ)",
      "terrain": "Polished limestone pavers (slippery when dry), medieval stone stairs, and pebbled Mediterranean shorelines.",
      "bestSeason": "June or September for the perfect sea temperature and vibrant 'Golden Hour' lighting without the peak July heat."
    },
    "highlights": [
      "Full circuit walk of the Dubrovnik City Walls for a bird’s-eye view of the terracotta rooftops",
      "Sunset cable car ascent to Mount Srđ for panoramic views of the coast and neighboring Bosnia",
      "Island-hopping boat excursion to Lopud and Šipan to swim in secluded azure bays",
      "Walking tour of the 'Game of Thrones' filming locations and the Rector's Palace",
      "Fresh seafood dinner in a cliffside 'Buža' bar overlooking the open Adriatic"
    ],
    "requirements": [
      "Shoes with excellent rubber grip (the limestone streets of the Old Town are polished to a mirror-like, slippery finish)",
      "Swimwear and high-SPF reef-safe sunscreen",
      "Light, breathable linen attire (essential for the humid Adriatic summer)",
      "A dry-bag for valuables during boat transfers and island hopping",
      "Cash (Euros) for small island konobas (taverns) that may not accept cards"
    ],
    "precaution": "Heat exhaustion is common on the City Walls as there is zero shade for the 2km walk; go before 9:00 AM or after 5:00 PM. Sea urchins are prevalent on rocky shores; use water shoes when entering the sea outside of sandy zones.",
    "route": [
      {
        "day": 1,
        "activities": "The Pearl of the Adriatic: Morning walk on the Dubrovnik City Walls; Afternoon exploration of the Old Town (Stradun and Onofrio's Fountain); Sunset cable car trip to Mount Srđ."
      },
      {
        "day": 2,
        "activities": "Nautical Discovery: Full-day private or group boat tour to the Elafiti Islands; Swimming at Sunj Beach on Lopud; Lunch in a traditional fisherman’s village."
      },
      {
        "day": 3,
        "activities": "Legacy and Leisure: Morning visit to the Franciscan Monastery and oldest pharmacy in Europe; Kayaking around Lokrum Island; Farewell dinner at the Old Harbor."
      }
    ]
  },
  {
    "id": "expd011",
    "name": "Vienna Classical Experience",
    "duration": "2 Days",
    "region": "Western Europe",
    "usp": "Imperial charm and classical music",
    "difficulty": "Easy",
    "summary": {
      "vibe": "The elegance of the Habsburg Empire in its prime.",
      "shortBrief": "Immerse yourself in a world of grand palaces, historic coffee houses, and the musical legacy of Mozart and Beethoven."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc121", "activity": "Schönbrunn Palace tour and evening Classical Concert." },
      { "day": 2, "cityId": "euc121", "activity": "The Hofburg, St. Stephen's Cathedral, and a Sachertorte tasting." }
    ],
    "stats": {
      "groupSize": "Flexible",
      "accommodation": "Imperial-style Hotel",
      "transport": "Public Transport & Fiaker (Horse Carriage)"
    },
    "description": "The Vienna Classical Experience is a refined journey into the heart of the Habsburg legacy, designed to showcase the city's transition from a medieval fortress to the premier musical and political capital of Europe. This 2-day expedition follows the 'Ringstrasse'—the grand circular boulevard that replaced the city walls—linking the Hofburg Palace with the Vienna State Opera. It is a deep dive into the 'First Viennese School,' exploring the environments where Mozart, Beethoven, and Schubert composed their masterpieces. Beyond the music, the route emphasizes the intellectual 'Kaffeehauskultur' (Coffee House Culture), offering a slow-paced but intellectually dense immersion into the aesthetics of the Baroque and Art Nouveau movements that define the city's skyline.",
    "detailedKeyFeatures": {
      "maxAltitude": "60 meters (The Great Ferris Wheel/Riesenrad in the Prater)",
      "terrain": "Smoothly paved boulevards, gravel courtyard paths, and marble-floored museum galleries.",
      "bestSeason": "December for the traditional Advent markets or May to June for the palace gardens in full bloom."
    },
    "highlights": [
      "Private evening concert featuring works by Strauss and Mozart at the Kursalon",
      "Tour of the Schönbrunn Palace and its expansive Baroque 'Gloriette' gardens",
      "Guided walk through the Hofburg Imperial Treasury to see the Holy Roman Empire's crown jewels",
      "Traditional Sachertorte tasting at a historic 19th-century coffee house",
      "Art-nouveau exploration at the Upper Belvedere to view Gustav Klimt’s 'The Kiss'"
    ],
    "requirements": [
      "Formal or semi-formal attire (essential for evening opera or classical concert attendance)",
      "A museum pass for the Kunsthistorisches Museum and Belvedere to bypass ticket queues",
      "Comfortable dress shoes suitable for walking between galleries and standing for performances",
      "General awareness of Viennese coffee etiquette (knowing your Melange from an Einspänner)",
      "Pre-downloaded audio tour focusing on the Ringstrasse architecture"
    ],
    "precaution": "Over-tourism at the Schönbrunn Palace can lead to 2-hour wait times without pre-booked slots. Be aware of 'Mozart-costumed' ticket touts in the city center; only purchase concert tickets from authorized venues. Summer humidity can be high in un-airconditioned historical buildings.",
    "route": [
      {
        "day": 1,
        "activities": "Imperial Grandeur: Morning exploration of the Hofburg Palace complex; Afternoon stroll through the Ringstrasse to the State Opera; Evening classical performance followed by a late-night coffee house visit."
      },
      {
        "day": 2,
        "activities": "Baroque and Art: Morning visit to Schönbrunn Palace (outer city); Afternoon at the Upper Belvedere Gallery; Farewell evening at the Prater for a ride on the historic 1897 Ferris wheel."
      }
    ]
  },
  {
    "id": "expd012",
    "name": "Lapland Arctic Adventure",
    "duration": "3 Days",
    "region": "Nordic Europe",
    "usp": "Northern Lights and Arctic wilderness",
    "difficulty": "Challenging",
    "summary": {
      "vibe": "The ultimate winter frontier experience.",
      "shortBrief": "Go beyond the Arctic Circle to master the skills of the North. This expedition focuses on traditional transport and chasing the Aurora in deep snow."
    },
    "routeBrief": [
      { "day": 1, "cityId": "euc174", "activity": "Husky sledding through the taiga and visit to Santa's Village." },
      { "day": 2, "cityId": "euc174", "activity": "Snowmobile expedition to a remote hut for Northern Lights spotting." },
      { "day": 3, "cityId": "euc174", "activity": "Traditional Finnish sauna and ice swimming experience." }
    ],
    "stats": {
      "groupSize": "Max 6",
      "accommodation": "Glass Igloo or Log Cabin",
      "transport": "Sled, Snowmobile & Reindeer"
    },
    "description": "The Lapland Arctic Adventure is a high-latitude expedition into the heart of the Finnish backcountry, designed for those seeking to test their endurance against the elements of the North. Based out of Rovaniemi and extending into the Pallas-Yllästunturi National Park, this journey transcends typical tourism by focusing on authentic Arctic mobility. Participants will master the art of mushing a husky sled, navigating by the stars, and managing body temperature in environments that can drop below -30°C. The mission is centered on the pursuit of the Aurora Borealis, utilizing remote wilderness cabins far from light pollution. It is a grueling yet transcendent experience that offers a profound connection to the silent, frozen landscapes of the Fennoscandian Shield.",
    "detailedKeyFeatures": {
      "maxAltitude": "500 meters (Fell summits within the Arctic Plateau)",
      "terrain": "Deep Taiga snow, frozen lake surfaces, and undulating tundra fells.",
      "bestSeason": "December to March for deep snow and peak Aurora visibility; late September for the 'Autumn Aurora'."
    },
    "highlights": [
      "Self-driving a 6-dog husky team through 30km of untouched wilderness",
      "Overnight stay in a remote wilderness hut with traditional wood-fired sauna",
      "Nocturnal snowshoe expedition to high-altitude vantage points for Aurora hunting",
      "Traditional Sámi cultural immersion and reindeer sledding experience",
      "Ice fishing on a frozen lake followed by an open-fire lunch"
    ],
    "requirements": [
      "High-grade thermal layering system (Wool base, fleece mid, and down/Gore-Tex outer)",
      "Extreme-cold rated boots (tested to -40°C)",
      "Chemical or electronic hand and toe warmers",
      "High-calorie nutrition packs (essential for metabolic heat production)",
      "Headlamp with extra lithium batteries (standard batteries fail in extreme cold)"
    ],
    "precaution": "Frostbite can occur in under 15 minutes on exposed skin; strict adherence to the 'buddy system' for skin checks is required. The 'Blue Hour' provides very little light; navigation must be precise to avoid becoming disoriented in the Taiga forest. Polar madness/fatigue from limited sunlight hours.",
    "route": [
      {
        "day": 1,
        "activities": "Arrival and Survival: Arctic gear fitting and safety briefing; Afternoon snowshoe training; Evening 'chase' via snowmobile to a remote Aurora basecamp."
      },
      {
        "day": 2,
        "activities": "The Great Mushing: Full-day husky sledding expedition across frozen marshes and fells; Evening wilderness hut arrival and wood-chopping/sauna ritual."
      },
      {
        "day": 3,
        "activities": "Arctic Heritage: Morning reindeer farm visit and Sámi storytelling; Afternoon ice-hole swimming (optional) and return to Rovaniemi for departure."
      }
    ]
  }
]

 const attractions = [
  {
    "id": "atc001",
    "name": "The Eiffel Tower",
    "city": "Paris",
    "country": "France",
    "historical_narrative": {
      "era": "The Belle Époque (1889)",
      "story": "Built for the 1889 World's Fair to celebrate the 100th anniversary of the French Revolution. Gustave Eiffel, the engineer, faced intense criticism from Paris’s elite, who called it a 'giant metal asparagus.' It was only meant to stand for 20 years, but it was saved by its usefulness as a giant radio antenna.",
      "architectural_style": "Industrial Iron Puddle Lattice"
    },
    "why_it_is_famous": [
      {
        "heading": "Global Icon",
        "brief": "The ultimate symbol of France and romance."
      },
      {
        "heading": "Engineering Marvel",
        "brief": "It was the tallest man-made structure in the world for 41 years."
      },
      {
        "heading": "Sparkle Effect",
        "brief": "Every hour on the hour at night, 20,000 lightbulbs flash for 5 minutes."
      }
    ],
    "tour_guide_secrets": [
      {
        "heading": "the_secret_apartment",
        "brief": "Gustave Eiffel built a private apartment at the very top. You can now peer into it to see wax figures of Eiffel and Thomas Edison."
      },
      {
        "heading": "the_bunker",
        "brief": "Under the Champ de Mars lies a secret military bunker connected to the tower by tunnels."
      },
      {
        "heading": "paint_job",
        "brief": "The tower is repainted every 7 years by hand, using 60 tons of paint to prevent rust."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "2.5 Hours",
      "best_time_to_visit": "One hour before sunset to see the city in daylight, the golden hour, and the night lights.",
      "avoid_this": "Avoid the 'Skip-the-line' scams on the street; only buy from the official website."
    }
  },
  {
    "id": "atc002",
    "name": "The Colosseum",
    "city": "Rome",
    "country": "Italy",
    "historical_narrative": {
      "era": "Flavian Dynasty (70–80 AD)",
      "story": "Originally known as the Flavian Amphitheatre, it was built on the site of a drained lake from Emperor Nero's palace. It was a gift to the Roman people to provide 'Bread and Circuses'—state-funded entertainment to keep the population happy and distracted.",
      "architectural_style": "Ancient Roman (Travertine and Tuff)"
    },
   "why_it_is_famous": [
      {
        "heading": "Gladiatorial Combat",
        "brief": "The epicenter of Roman blood sports and naval battle recreations."
      },
      {
        "heading": "Engineering Complexity",
        "brief": "A system of 80 arched entrances allowed 50,000 people to exit in under 10 minutes."
      },
      {
        "heading": "Survival",
        "brief": "It has survived earthquakes, stone-thieves (who used its marble for St. Peter’s), and WWII bombings."
      }
    ],
    "tour_guide_secrets": [
      {
        "heading": "the_hypogeum",
        "brief": "The floor was wood covered in sand; beneath it was a massive two-level network of tunnels and lift systems for beasts."
      },
      {
        "heading": "naval_battles",
        "brief": "In the early years, the arena could be flooded with water to stage miniature sea battles (Naumachia)."
      },
      {
        "heading": "the_holes",
        "brief": "The thousands of small holes in the exterior are where Romans pried out the iron clamps that held the stones together."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "3 Hours (including Forum)",
      "best_time_to_visit": "8:30 AM (Opening) to avoid the heat and the 10:00 AM tour bus rush.",
      "avoid_this": "Don't take photos with the 'Gladiators' outside; they often demand high fees after the photo is taken."
    }
  },
  {
    "id": "atc003",
    "name": "Buckingham Palace",
    "city": "London",
    "country": "United Kingdom",
    "historical_narrative": {
      "era": "Neoclassical / Victorian (1703–Present)",
      "story": "Originally built as a large townhouse for the Duke of Buckingham in 1703, it was acquired by King George III in 1761 as a private residence for Queen Charlotte. It wasn't until the accession of Queen Victoria in 1837 that it became the official London residence of the British monarch. The iconic front facade that we see today was actually only added in 1913.",
      "architectural_style": "French Neoclassical / Beaux-Arts"
    },
    "why_it_is_famous": [
      {
        "heading": "The Working Palace",
        "brief": "It is the administrative headquarters of the British Monarch and a setting for state ceremonial and official entertaining."
      },
      {
        "heading": "The Balcony",
        "brief": "The site of historic public appearances, from Royal Wedding kisses to Jubilee celebrations."
      },
      {
        "heading": "Changing of the Guard",
        "brief": "A world-famous display of British military pageantry and tradition."
      }
    ],
   "tour_guide_secrets": [
      {
        "heading": "the_flag_code",
        "brief": "Watch the mast: If the Royal Standard is flying, the King is in residence. If the Union Jack is flying, he is away."
      },
      {
        "heading": "underground_tunnels",
        "brief": "A network of secret tunnels lies beneath the palace, connecting it to the Houses of Parliament and the nearby St. James's Park."
      },
      {
        "heading": "the_ballroom_size",
        "brief": "The State Ballroom is the largest room in the palace; it was opened in 1856 to celebrate the end of the Crimean War and is long enough to fit two double-decker buses parked end-to-end."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "2 Hours (Exterior/Guard Change) | 4 Hours (State Room Tour)",
      "best_time_to_visit": "10:15 AM on a Monday, Wednesday, Friday, or Sunday to secure a spot for the 11:00 AM Changing of the Guard.",
      "avoid_this": "Do not assume you can go inside year-round. The State Rooms are only open to the public for 10 weeks each summer (usually July–September)."
    }
  },
  {
    "id": "atc004",
    "name": "Sagrada Família",
    "city": "Barcelona",
    "country": "Spain",
    "historical_narrative": {
      "era": "Modernisme (1882–Present)",
      "story": "Antoni Gaudí took over the project in 1883 and transformed it into his life’s work. He combined Gothic and Art Nouveau forms with a philosophy that 'nature has no straight lines.' Gaudí is buried in the crypt of his unfinished masterpiece.",
      "architectural_style": "Catalan Modernism / Organic Gothic"
    },
    "why_it_is_famous": [
      {
        "heading": "The Unfinished",
        "brief": "It has been under construction for over 140 years, longer than it took to build the Egyptian Pyramids."
      },
      {
        "heading": "Forest Interior",
        "brief": "The columns are designed to look like giant stone trees with branches reaching the ceiling."
      },
      {
        "heading": "Mathematical Perfection",
        "brief": "The Magic Square on the Passion Facade adds up to 33 (the age of Christ) in every direction."
      }
    ],
    "tour_guide_secrets": [
      {
        "heading": "color_meaning",
        "brief": "The stained glass is chromatically ordered; the yellow/red side represents the Resurrection, while the blue/green side represents the Nativity."
      },
      {
        "heading": "no_straight_lines",
        "brief": "There are almost no right angles in the entire building; everything is curved to mimic God’s creation in nature."
      },
      {
        "heading": "future_height",
        "brief": "When the final tower (Jesus Christ) is finished, it will reach 172.5 meters, intentionally 1 meter shorter than the local Montjuïc hill, because 'the work of man should not exceed the work of God'."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "2 Hours",
      "best_time_to_visit": "Late afternoon (4:00 PM – 6:00 PM) for the 'Sunset Fire' light effect inside the nave.",
      "avoid_this": "Do not go without an Audio Guide. The symbolism in the architecture is too dense to understand alone."
    }
  },
  {
    "id": "atc005",
    "name": "The Canals of Amsterdam",
    "city": "Amsterdam",
    "country": "Netherlands",
    "historical_narrative": {
      "era": "The Dutch Golden Age (17th Century)",
      "story": "The canal ring (Grachtengordel) was a massive urban extension project designed to support the booming trade of the world’s first global corporation, the VOC. The 'concentric' design allowed for efficient transport of goods directly to the doorsteps of wealthy merchants, creating the unique 'skinny' architecture seen today.",
      "architectural_style": "Dutch Baroque / Mannerism"
    },
    "why_it_is_famous": [
      {
        "heading": "The Venice of the North",
        "brief": "Over 100 kilometers of canals and 1,500 bridges."
      },
      {
        "heading": "UNESCO Heritage",
        "brief": "One of the most perfectly preserved 17th-century urban landscapes."
      },
      {
        "heading": "Houseboat Culture",
        "brief": "A living community of thousands of people residing on the water."
      }
    ],
   "tour_guide_secrets": [
      {
        "heading": "the_tilting_houses",
        "brief": "Buildings lean forward not because of age, but by design; hooks at the top allowed furniture to be hoisted up without hitting the windows."
      },
      {
        "heading": "the_bicycle_graveyard",
        "brief": "Approximately 12,000 to 15,000 bicycles are fished out of the canals every single year."
      },
      {
        "heading": "hidden_churches",
        "brief": "The canals hide 'Ons' Lieve Heer op Solder'—a secret Catholic church built inside a canal house attic during the Reformation."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "1.5 Hours (Boat) / 3 Hours (Walking)",
      "best_time_to_visit": "Twilight (The 'Blue Hour'). The bridges light up with thousands of tiny bulbs, reflecting perfectly in the still water.",
      "avoid_this": "Avoid the 'Big Bus' style canal boats. Look for open-air, electric 'eco-boats' for a quieter and more intimate view."
    }
  },
  {
    "id": "atc006",
    "name": "Santorini Caldera",
    "city": "Santorini",
    "country": "Greece",
    "historical_narrative": {
      "era": "Bronze Age (Minoan Era)",
      "story": "Around 3,600 years ago, one of the largest volcanic eruptions in human history occurred here. The center of the island literally collapsed into the sea, leaving behind the massive crescent-shaped cliffs (the Caldera) we see today. Some historians believe this event was the origin of the legend of Atlantis.",
      "architectural_style": "Cycladic (Whitewashed / Cubist)"
    },
    "why_it_is_famous": [
      {
        "heading": "The View",
        "brief": "The world's most iconic contrast of white buildings, blue domes, and deep indigo sea."
      },
      {
        "heading": "Geology",
        "brief": "One of the few places on earth where you can live on the rim of an active volcano."
      },
      {
        "heading": "Wine Heritage",
        "brief": "Home to ancient 'Assyrtiko' vines that grow in baskets on the volcanic soil."
      }
    ],
   "tour_guide_secrets": [
      {
        "heading": "why_the_blue_domes",
        "brief": "Originally, the blue paint was the cheapest available; later, it became a symbol of the Greek flag during resistance movements."
      },
      {
        "heading": "the_donkey_path",
        "brief": "The 588 steps from the Old Port were the only way up for centuries; today, the cable car is the ethical and faster choice."
      },
      {
        "heading": "the_volcano_is_alive",
        "brief": "You can visit the center of the caldera (Nea Kameni) to see active sulfur vents steaming from the ground."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "Full Day",
      "best_time_to_visit": "Early morning for the hike from Fira to Oia; it takes 3 hours and offers the best views without the heat.",
      "avoid_this": "Don't get stuck in Oia for the sunset alone. The crowds are suffocating. The view from a boat or a lighthouse in Akrotiri is just as beautiful."
    }
  },
  {
    "id": "atc007",
    "name": "St. Mark’s Square",
    "city": "Venice",
    "country": "Italy",
    "historical_narrative": {
      "era": "9th – 12th Century (Republic of Venice)",
      "story": "The square was built to showcase the immense wealth of the Venetian Republic, which controlled trade between Europe and the East. It was designed to intimidate visiting dignitaries with its mix of Byzantine, Gothic, and Renaissance power.",
      "architectural_style": "Italo-Byzantine / Venetian Gothic"
    },
    "why_it_is_famous": [
      {
        "heading": "The drawing room of Europe",
        "brief": "A vast, open space in a city of narrow alleys."
      },
      {
        "heading": "Basilica di San Marco",
        "brief": "Known as the 'Church of Gold' for its 8,000 square meters of mosaics."
      },
      {
        "heading": "Acqua Alta",
        "brief": "The dramatic flooding that turns the square into a shallow lake several times a year."
      }
    ],
    "tour_guide_secrets": [
      {
        "heading": "the_red_pillars",
        "brief": "Two of the pillars in the Doge's Palace are red; this is where death sentences were traditionally announced."
      },
      {
        "heading": "the_stolen_saint",
        "brief": "The relics of St. Mark were allegedly smuggled out of Egypt in a barrel of pork to get past Muslim guards."
      },
      {
        "heading": "coffee_history",
        "brief": "Caffè Florian (founded 1720) in the square is the oldest coffee house in continuous operation in the world."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "2 Hours",
      "best_time_to_visit": "10:00 PM. The orchestras at the cafes play, the crowds have left for their hotels, and the atmosphere is pure cinema.",
      "avoid_this": "Feeding the pigeons. It's actually illegal now and can result in a fine to protect the historic marble."
    }
  },
  {
    "id": "atc008",
    "name": "Prague Old Town",
    "city": "Prague",
    "country": "Czechia",
    "historical_narrative": {
      "era": "Medieval (10th Century – 14th Century)",
      "story": "Prague’s Old Town (Staré Město) was a crossroads of trade for centuries. While other European cities were destroyed in WWII, Prague remained largely intact, leaving a perfect 'layer cake' of architecture from Romanesque to Art Nouveau.",
      "architectural_style": "Gothic / Baroque / Romanesque"
    },
   "why_it_is_famous": [
      {
        "heading": "The Astronomical Clock",
        "brief": "The oldest working clock of its kind (1410)."
      },
      {
        "heading": "Charles Bridge",
        "brief": "A 14th-century stone bridge lined with 30 brooding statues of saints."
      },
      {
        "heading": "Fairytale Vibe",
        "brief": "One of the most complete medieval centers left in the world."
      }
],
    "tour_guide_secrets": [
      {
        "heading": "the_clock_curse",
        "brief": "Legend says that if the clock is neglected, the city will suffer. Its maker was reportedly blinded so he could never build another."
      },
      {
        "heading": "egg-shell-mortar",
        "brief": "Medieval engineers supposedly mixed raw eggs into the mortar of Charles Bridge to make the stone stronger."
      },
      {
        "heading": "hidden_alchemist_labs",
        "brief": "The Old Town is riddled with legends of alchemy; look for symbols on house facades that indicate what 'magical' trades were practiced there."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "4 Hours",
      "best_time_to_visit": "6:00 AM on the Charles Bridge. It is the only time you can experience the Gothic atmosphere without thousands of selfies.",
      "avoid_this": "Avoid the 'Trdelník' (Chimney Cake) stalls in the square if you want 'authentic' Czech food—it's actually a modern tourist invention!"
    }
  },
  {
    "id": "atc009",
    "name": "The Matterhorn",
    "city": "Zermatt",
    "country": "Switzerland",
    "historical_narrative": {
      "era": "The Golden Age of Alpinism (1865)",
      "story": "The Matterhorn was the last great Alpine peak to be conquered. The first ascent in 1865 was a tragic success; four climbers fell to their deaths on the descent, sparking a worldwide fascination with the 'mountain of mountains.'",
      "architectural_style": "Natural (Pyramidal Peak)"
    },
    "why_it_is_famous": [
      {
        "heading": "The Shape",
        "brief": "A near-perfect pyramid with four faces facing the cardinal points."
      },
      {
        "heading": "Cultural Impact",
        "brief": "The inspiration for the Toblerone chocolate bar and the world's most recognizable peak."
      },
      {
        "heading": "Car-Free Zermatt",
        "brief": "The town below is entirely electric, keeping the air as pure as the mountain."
      }
    ],
    "tour_guide_secrets": [
      {
        "heading": "the_hörnli_ridge",
        "brief": "The most popular climbing route is actually a busy 'highway' in summer, with up to 100 climbers attempting it daily."
      },
      {
        "heading": "disappearing_glacier",
        "brief": "The surrounding Gorner Glacier is the second largest in the Alps but is retreating fast, revealing WWI artifacts and even old climbing gear."
      },
      {
        "heading": "optical_illusion",
        "brief": "From certain angles in Zermatt, the mountain looks much smaller than its neighbors because of its isolated position."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "Full Day (including Gornergrat)",
      "best_time_to_visit": "The first 'Gornergrat Bahn' train of the morning. You’ll see the sun hit the peak (Alpenglow) before the clouds form.",
      "avoid_this": "Don't just stay in the valley. If you don't hike, take the 'Matterhorn Glacier Paradise' cable car to the highest station in Europe (3,883m)."
    }
  },
  {
    "id": "atc010",
    "name": "The Golden Circle",
    "city": "Reykjavik",
    "country": "Iceland",
    "historical_narrative": {
      "era": "Geological (Active) / Viking Age",
      "story": "This route showcases the Althing (Viking Parliament) at Thingvellir, established in 930 AD. It is the site of the world's oldest surviving parliament, located exactly where the tectonic plates of North America and Europe meet.",
      "architectural_style": "Natural (Volcanic / Glacial)"
    },
    "why_it_is_famous": [
      {
        "heading": "Geysir",
        "brief": "The namesake for all other geysers in the world."
      },
      {
        "heading": "Gullfoss",
        "brief": "The 'Golden Falls,' where glacial water plunges into a deep canyon."
      },
      {
        "heading": "Tectonic Rift",
        "brief": "One of the few places on earth where you can see the Earth's crust pulling apart above sea level."
      }
    ],
    "tour_guide_secrets": [
      {
        "heading": "the_silfra_crack",
        "brief": "The water in the tectonic rift is so pure you can drink it while snorkeling; it has been filtered through lava rock for 50 years."
      },
      {
        "heading": "geothermal_bread",
        "brief": "Near Laugarvatn, locals bury rye bread dough in the hot ground to bake it using only volcanic heat."
      },
      {
        "heading": "the_sleeping_giant",
        "brief": "While 'Strokkur' geyser erupts every 10 minutes, the Great Geysir next to it hasn't erupted properly in years, but is still considered active."
      }
    ],
    "visitor_strategy": {
      "ideal_duration": "8 - 10 Hours",
      "best_time_to_visit": "Winter for the chance to see the waterfalls frozen and the Northern Lights, or Summer 'Midnight Sun' to do the tour at 11:00 PM without crowds.",
      "avoid_this": "Avoid the massive tour buses. Renting a car allows you to stop at 'hidden' spots like the Kerid Crater or secret hot springs along the way."
    }
  },
]

 const underrated = [
  {
    "id": "und001",
    "name": "Colmar Old Town",
    "city": "Colmar",
    "country": "France",
    "alternative_to": "Strasbourg or Paris",
    "why_it_is_worth_it": "It looks like a storybook illustration come to life. While Strasbourg is grand, Colmar is intimate, featuring half-timbered houses painted in candy colors and flower-lined canals.",
    "historical_narrative": {
      "era": "Renaissance / Middle Ages",
      "story": "Colmar has swapped hands between France and Germany multiple times, resulting in a unique 'Alsatian' blend of architecture, language, and food. It was miraculously spared from destruction in WWII, preserving its 16th-century soul."
    },
    "tour_guide_secrets": [
      {
        "heading": "the statue of liberty",
        "brief": "The creator of the Statue of Liberty, Frédéric Auguste Bartholdi, was born here. You can find a 12-meter replica of the statue on the outskirts of town."
      },
      {
        "heading": "little venice",
        "brief": "The 'Petite Venise' district was formerly the center of the professional tanners, wine producers, and boatmen; the house colors once represented the type of shop inside."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Quiet, romantic, and pedestrian-heavy.",
      "best_time": "Early morning in the 'Quai de la Poissonnerie'. You’ll see the local fisherman's market spirit without the midday day-trippers from larger cities."
    }
  },
  {
    "id": "und002",
    "name": "Bay of Kotor",
    "city": "Kotor",
    "country": "Montenegro",
    "alternative_to": "Dubrovnik, Croatia",
    "why_it_is_worth_it": "Dubrovnik is stunning but can feel like a theme park. Kotor offers the same limestone peaks and Adriatic waters but with a rugged, dramatic 'fjord' feel and a much lower price tag.",
    "historical_narrative": {
      "era": "Venetian (1420–1797)",
      "story": "Kotor was a fortified stronghold for the Republic of Venice. Its walls crawl up the vertical mountain like a mini-Great Wall of China, designed to protect the wealthy maritime traders from Ottoman invasions."
    },
    "tour_guide_secrets": [
      {
        "heading": "the cat capital",
        "brief": "Kotor is famous for its cats. They are considered a symbol of good luck for having saved the city from the plague by killing rats centuries ago."
      },
      {
        "heading": "1,350 steps",
        "brief": "To get the best view, you must climb 1,350 steps to the Castle of San Giovanni. Most tourists stop halfway; the top is where the silence is absolute."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Atmospheric, narrow, and slightly mysterious.",
      "best_time": "Visit the Old Town after 4:00 PM when the cruise ship passengers depart. The stone alleys become cool, quiet, and perfect for a slow dinner."
    }
  },
  {
    "id": "und003",
    "name": "Naxos Island",
    "city": "Naxos",
    "country": "Greece",
    "alternative_to": "Mykonos or Santorini",
    "why_it_is_worth_it": "While the neighbors focus on parties and luxury, Naxos focuses on agriculture, massive empty beaches, and ancient mountain villages. It’s the largest and greenest of the Cyclades.",
    "historical_narrative": {
      "era": "Bronze Age / Venetian",
      "story": "According to myth, this is where Dionysus (God of Wine) lived. It has a unique mix of white Cycladic houses and medieval Venetian towers, a remnant of the Duchy of the Archipelago."
    },
    "tour_guide_secrets": [
      {
        "heading": "the portara",
        "brief": "The massive marble gate you see on the harbor is 2,500 years old. It was meant to be a temple for Apollo but was never finished; it now stands as a 'doorway to nowhere'."
      },
      {
        "heading": "mountain villages",
        "brief": "Head to 'Apeiranthos'. It’s a village made entirely of marble, hidden high in the mountains where locals still wear traditional dress."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Authentic, rustic, and incredibly spacious.",
      "best_time": "September. The Etesian winds die down, the water is warm, and the long sandy beaches of Plaka feel like your own private island."
    }
  },
  {
    "id": "und004",
    "name": "Alentejo Coast",
    "city": "Alentejo",
    "country": "Portugal",
    "alternative_to": "The Algarve",
    "why_it_is_worth_it": "The Algarve is built-up and crowded. The Alentejo coast (the 'Costa Vicentina') is wild, protected by law from big hotels, featuring jagged cliffs, secret coves, and sleepy white-washed fishing villages.",
    "historical_narrative": {
      "era": "Traditional Portuguese / Moorish roots",
      "story": "This region has always been the 'breadbasket' of Portugal. Its coastline remained ignored by developers for decades, preserving a slow-motion way of life that has disappeared elsewhere in Europe."
    },
    "tour_guide_secrets": [
      {
        "heading": "storks on cliffs",
        "brief": "This is the only place in the world where white storks nest on sea stacks directly above the crashing Atlantic surf."
      },
      {
        "heading": "the rota vicentina",
        "brief": "A world-class hiking trail follows the coast. You can walk for hours without seeing a car, only seeing the occasional local fisherman perched on a 50-meter cliff."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Wild, windy, and soulful.",
      "best_time": "Late Spring (May). The cliffs are covered in wild flowers, and the 'hidden' beaches like Praia do Cavaleiro are completely empty."
    }
  },
  {
    "id": "und005",
    "name": "Lake Bohinj",
    "city": "Bohinj",
    "country": "Slovenia",
    "alternative_to": "Lake Bled",
    "why_it_is_worth_it": "Lake Bled has the island and the crowds. 20 minutes away, Bohinj is larger, wilder, and tucked into a glacial valley of the Triglav National Park. It’s for those who prefer the sound of birds over the sound of tour buses.",
    "historical_narrative": {
      "era": "Glacial / Alpine Frontier",
      "story": "Local legend says that when God was giving out land to people, he forgot a small group who stayed silent and waited. Because of their patience, he gave them the most beautiful piece of land he had kept for himself: Bohinj."
    },
    "tour_guide_secrets": [
      {
        "heading": "the vogel cable car",
        "brief": "Take the lift to Mt. Vogel; you get a bird’s eye view of the lake that makes it look like a heart carved into the mountains."
      },
      {
        "heading": "savica waterfall",
        "brief": "A 20-minute hike leads to an A-shaped waterfall that emerges from a hidden underground cave system."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Quiet, pristine, and majestic.",
      "best_time": "Early morning or late afternoon. The water is so still it acts as a perfect mirror for the Julian Alps."
    }
  },
  {
    "id": "und006",
    "name": "Lviv Old Town",
    "city": "Lviv",
    "country": "Ukraine",
    "alternative_to": "Prague or Krakow",
    "why_it_is_worth_it": "Often called the 'Little Paris of the East,' Lviv has all the cobblestone charm and coffee-house culture of Central Europe without the massive tourist herds. It is a city of lions, jazz, and chocolate.",
    "historical_narrative": {
      "era": "Austro-Hungarian / Renaissance",
      "story": "Lviv was once the capital of the Kingdom of Galicia and Lodomeria. Because it escaped the destruction of WWII that flattened many other Ukrainian cities, it remains a pristine museum of Renaissance, Baroque, and Belle Époque architecture."
    },
    "tour_guide_secrets": [
      {
        "heading": "the coffee mine",
        "brief": "Locals joke that coffee is mined like coal. Visit 'Lviv Coffee Manufacture' where you go underground into a 'mine' to see how they flame-roast the beans."
      },
      {
        "heading": "the yard of lost toys",
        "brief": "A strange, haunting, yet beautiful courtyard filled with abandoned toys found by a local resident—a true testament to the city's quirky soul."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Intellectual, bohemian, and nostalgic.",
      "best_time": "Early morning in Rynok Square. Watch the city wake up as the scent of fresh pastries fills the air before the local students take over the cafes."
    }
  },
  {
    "id": "und007",
    "name": "Mostar Old Bridge Area",
    "city": "Mostar",
    "country": "Bosnia and Herzegovina",
    "alternative_to": "Dubrovnik or Florence",
    "why_it_is_worth_it": "Mostar is a breathtaking collision of Ottoman and Austro-Hungarian history. The turquoise Neretva River flows under an impossibly arched stone bridge, surrounded by bustling bazaars and minarets.",
    "historical_narrative": {
      "era": "Ottoman (16th Century)",
      "story": "The Stari Most (Old Bridge) stood for 427 years before being destroyed during the Croat–Bosniak War in 1993. It was painstakingly rebuilt using the original stones recovered from the riverbed, symbolizing the city's rebirth and reconciliation."
    },
    "tour_guide_secrets": [
      {
        "heading": "the bridge jumpers",
        "brief": "Local men have jumped from the 24-meter bridge into the icy river for centuries as a rite of passage. They won't jump until they've collected enough 'tips' from the crowd."
      },
      {
        "heading": "the crooked bridge",
        "brief": "Just a few meters away is 'Kriva Ćuprija,' a miniature version of the main bridge that served as a prototype before the grand project was attempted."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Spiritual, vibrant, and resilient.",
      "best_time": "Stay overnight. Most people visit Mostar as a day-trip. At night, when the buses leave, the bridge is lit up and the call to prayer echoes through the quiet stone streets."
    }
  },
  {
    "id": "und008",
    "name": "High Tatras",
    "city": "Vysoké Tatry",
    "country": "Slovakia",
    "alternative_to": "The Swiss Alps",
    "why_it_is_worth_it": "The Tatras are the smallest 'high' mountain range in the world. You get alpine peaks, glacial lakes, and bear-watching for a fraction of the price of Switzerland or France.",
    "historical_narrative": {
      "era": "Glacial / Slavic Heartland",
      "story": "For centuries, these mountains were the frontier of the Kingdom of Hungary. Today, they are a strictly protected biosphere where nature remains incredibly raw—it is one of the few places in Europe where brown bears and lynx still roam free."
    },
    "tour_guide_secrets": [
      {
        "heading": "the mountain porters",
        "brief": "The High Tatras are the only mountains in Europe where 'Sherpas' (Slovak Porters) still carry hundreds of kilograms of food and beer on their backs to the mountain huts on foot."
      },
      {
        "heading": "tatra tea",
        "brief": "Ask for 'Tatratea'—a potent herbal tea liqueur. The strongest version is 72% alcohol and was originally used by mountain dwellers to stay warm."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Rugged, crisp, and energetic.",
      "best_time": "September. The 'mists' descend, the summer crowds have gone, and the hiking trails to lakes like Štrbské Pleso are silent and golden."
    }
  },
  {
    "id": "und009",
    "name": "Trulli of Alberobello",
    "city": "Alberobello",
    "country": "Italy",
    "alternative_to": "Matera or Tuscany",
    "why_it_is_worth_it": "A town of white, cone-roofed houses that looks like it belongs to gnomes or hobbits. While Matera is famous for caves, Alberobello offers a strange, prehistoric architectural vibe that exists nowhere else.",
    "historical_narrative": {
      "era": "14th Century / Kingdom of Naples",
      "story": "The 'Trulli' were built as dry-stone huts (without mortar) so that they could be quickly dismantled. Why? To evade property taxes from the King when the royal tax inspectors were in town!"
    },
    "tour_guide_secrets": [
      {
        "heading": "the symbols",
        "brief": "Look at the white symbols painted on the roofs—some are Christian, but many are pagan or zodiac signs designed to ward off the 'evil eye' or bring good harvest."
      },
      {
        "heading": "the trullo church",
        "brief": "The Church of Sant'Antonio is the only church in the world built in the Trullo style, featuring several massive cones and a unique circular layout."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Whimsical, Mediterranean, and sunny.",
      "best_time": "Sunrise. Walking through the Rione Monti district before the shops open feels like wandering through an abandoned ancient village."
    }
  },
  {
    "id": "und010",
    "name": "Saaremaa Island",
    "city": "Kuressaare",
    "country": "Estonia",
    "alternative_to": "The Swedish Archipelago",
    "why_it_is_worth_it": "Saaremaa is where Estonians go to disappear. It’s an island of windmills, juniper forests, and ancient meteor craters. It is the definition of 'off the beaten path' in the Baltics.",
    "historical_narrative": {
      "era": "Viking / Teutonic Knight",
      "story": "During the Soviet era, Saaremaa was a restricted border zone, meaning it remained frozen in time for 50 years. This preserved the traditional wooden villages and old-growth forests that were lost elsewhere."
    },
    "tour_guide_secrets": [
      {
        "heading": "kaali meteor_crater",
        "brief": "About 3,500 years ago, a massive meteor hit the island. It was one of the last giant impacts in a populated area and is mentioned in ancient Finnish and Estonian myths."
      },
      {
        "heading": "juniper everything",
        "brief": "The island is covered in juniper bushes. Locals use the wood to make everything from butter knives to beer, giving the entire island a distinct, gin-like scent."
      }
    ],
    "crowd_free_strategy": {
      "the_vibe": "Remote, windy, and peaceful.",
      "best_time": "Midsummer (June). The 'White Nights' mean it never gets truly dark, allowing you to explore the stone castles and windmills in a perpetual twilight."
    }
  }
]

export {regions, countries, cities, expeditions, experience, attractions, underrated}

const europeTranslations = [
  "Europe",    // French, English
  "Europa",    // German, Dutch, Italian, Spanish, Portuguese, Polish, Swedish
  "Eurooppa",  // Finnish
  "An Eoraip", // Irish
  "Evrópa",    // Icelandic
  "Ευρώπη",    // Greek
  "Evropa",    // Czech, Albanian, Slovenian
  "Ewropa",    // Maltese
  "Европа",    // Russian, Ukrainian, Bulgarian, Serbian
  "Európa",    // Hungarian, Slovak
  "Avrupa",    // Turkish
  "Avropa",    // Azerbaijani
  "ევროპა"      // Georgian
]
