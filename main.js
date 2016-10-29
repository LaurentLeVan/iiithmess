var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = weekday[d.getDay()];

var yukthaarMessMenu = {};
yukthaarMessMenu[weekday[1]] = {
"Breakfast" : "Ragi <br />Idly-Sambar <br />Karam podi",

"Lunch" : "Masoor Dal <br />Lauki <br />Kadi <br />Vegetable pickle",

"Dinner" : "Mix veg <br />Moong Dal",

"Snacks" : "Sabudana khichdi <br />Curd"
};

yukthaarMessMenu[weekday[2]] = {
"Breakfast" : "Rajgira <br />Vegetable Upma <br />Badam milk,",

"Lunch" : "Veg Pulao <br />Coley <br />Cabbage <br />Till Chutney",

"Dinner" : "Mix dal <br />Karela <br />Groundnut chutney",

"Snacks" : "Sweet corn"
};

yukthaarMessMenu[weekday[3]] = {
"Breakfast" : "Ragi <br />Poha <br />Sprout masala",

"Lunch" : "Capsicum <br />Tooar dal <br />Paneer masala",

"Dinner" : "Lobhiya <br />Lauki <br />Tomato Rice <br />Suji Halwa",

"Snacks" : "Boiled peanut <br />Lemon Juice"
};

yukthaarMessMenu[weekday[4]] = {
"Breakfast" : "Rajgira <br />Ragi Idly-sambar <br />Sweet Lassi",

"Lunch" : "Tooar dal <br />Bajra Roti <br />Mix Veg <br />Groundnut chutney",

"Dinner" : "Turai <br />Moong dal <br />Poolihara",

"Snacks" : "Murmura <br />LButter milk"
};

yukthaarMessMenu[weekday[5]] = {
"Breakfast" : "Daliya Upma <br />Sprout Masala <br />Ragi",

"Lunch" : "Rajma <br />Aloo Gobi <br />Sweet Daliya/Lauki Halwa <br />Gongura pickle",

"Dinner" : "Tooar dal <br />Kandagadda",

"Snacks" : "Sabudana khichdi <br />Curd"
};

yukthaarMessMenu[weekday[6]] = {
"Breakfast" : "Rajgira <br />Vegetable Poha <br />Badam milk",

"Lunch" : "Lobiya <br />Cabbage <br />Curd Rice <br />Curryleaf chutney",

"Dinner" : "Paneer masala <br />Karela <br />Moong dal",

"Snacks" : "Chivda <br />Lemon Juice"
};

yukthaarMessMenu[weekday[0]] = {
"Breakfast" : "Ragi <br />Semiya (Lemon)",

"Lunch" : "Whole Chana dal <br />Pumpkin <br />Jowar Roti <br />Sweet Pongal/Rice <br />Tomato Chutney",

"Dinner" : "Tooar Dal <br />Gawar phali <br />Masal Khichdi",

"Snacks" : "Masala Corn"
};


var southMessMenu = {};
southMessMenu[weekday[1]] = {
"Breakfast" : "Kancheepuram Idly <br />Upma + Sev <br />Chutney <br />Sambar <br />Karam podi + Ghee",

"Lunch" : "Lemon rava/rice pulihora <br />Roti <br />Dondakaya fry <br />Tomato Dal <br />Sambar <br />Beerakaya Chutney",

"Dinner" : "Soup + Manchurian <br />Roti <br />Beerakaya curry <br />Tomato Dal <br />Sambar <br />Karam Podi",

"Snacks" : "Onion Pakoda"};

southMessMenu[weekday[2]] = {
"Breakfast" : "Wada <br />Pongal <br />Chutney <br />Sambar ",

"Lunch" : "Rava kesari <br />Roti <br />Kakarakaya masala <br />Palak Dal <br />Tomato Chaaru <br />Karivepaku Podi",

"Dinner" : "Chapati <br />Paneer Curry <br />Beans­Carrot Curry <br />Dosakaya Dal <br />Rasam <br />Pudina Chutney",

"Snacks" : "Mix sprouts guggillu"};

southMessMenu[weekday[3]] = {
"Breakfast" : "Pullattu / Uttapam <br />Poha <br />Chutney <br />Sambar",

"Lunch" : "Veg Pulav <br />Mirchi ka salan <br />Brinjal Curry <br />Mudda Pappu <br />Rasam <br />Gongura Pickle",

"Dinner" : "Aloo 65 <br />Roti <br />Dahi vada <br />Leafy Vegetable Dal <br />Rasam <br />Chukkakura/Kandi Pickle",

"Snacks" : "Saggubiyyam Punugulu(12)"};

southMessMenu[weekday[4]] = {
"Breakfast" : "Punugulu <br />Idli <br />Chutney <br />Sambar",

"Lunch" : "Fried Rice, + Corn/Veg Soup <br />Roti <br />Meal maker curry <br />Dosakaya Dal <br />Sambar <br />Raita, Onions <br />Pandu Mirapakaya Pickle",

"Dinner" : "Dosa <br />Aloo and Chutney <br />Jamun <br />Sambar <br />Tomato chutney",

"Snacks" : "Masala Corn"};

southMessMenu[weekday[5]] = {
"Breakfast" : "Pesarattu <br />Upma <br />Chutney <br />Sambar",

"Lunch" : "Veg Dum Biryani <br />Green peas masala <br />Thotakura Dal <br />Kobbari Charu <br />Raita, Onions <br />Dosakaya Mukkala Chutney",

"Dinner" : "Bisibele bath with boondi <br />Bobbatlu / Jilebi <br />Capsicum curry <br />Majjiga pulusu <br />Karam Chitlu Podum",

"Snacks" : "Aloo / Mirchi Bajji"};

southMessMenu[weekday[6]] = {
"Breakfast" : "Mysore Bonda <br />Semiya Upma <br />Chutney <br />Allam Chutney",

"Lunch" : "Coconut Rice <br />Roti, Kofta <br />Beetroot Curry <br />Beerakaya/Dosakaya dal <br />Pacchi pulusu <br />Mango pickle",

"Dinner" : "Poori,Aloo kurma <br />Goruchikkudu kobbari curry <br />Tomato Dal <br />Sambar <br />Gongura chutney",

"Snacks" : "Chuduva"};

southMessMenu[weekday[0]] = {
"Breakfast" : "Ulli Karam Dosa <br />Uggani <br />Chutney <br />Sambar ",

"Lunch" : "Custard salad <br />Veg Dum Biryani <br />Raita, Onions <br />Baingan Masala <br />Tomato Curry <br />Sambar <br />Nimmakaya Pickle",

"Dinner" : "Bendakaya fry <br />Roti + Aloo Curry <br />Methi Dal <br />Pappu Charu <br />Daddojanam <br />Kobbari Chutney",

"Snacks" : "Sarva Pindi"};


var kadambVegMess = {};
kadambVegMess[weekday[0]] = {
"Breakfast" : "PESARATTU, GINGER CHUTNEY, PALLI CHUTNEY, VEG SANDWICH, JAM, BREAD, BUTTER, GREEN CHUTNEY",

"Lunch" : "BEETROOT PORIAL, CHOLEY MASALA, VEG BIRIANI, BOONDI RAITA, SWEET, PEANUT SALAD",

"Dinner" : "GOBI / VEG MANCHURIA/AL LO FRY, VEG KORMA, MANCHOW SOUP",

"Snacks" : "NOODLES WITH VEGETABLES(TO BE SERVED HOT)/DAHI WADA LEMON JUICE"
};

kadambVegMess[weekday[1]] = {
"Breakfast" : "UTAPAM, CHUTNEY, SAMBAR, CORNFLAKES, SPROUTS BANANA",

"Lunch" : "GATTE KA SABZI / ALOO MATAR, BAINGAN FRY, MOONG DAL, SALAD (VEGETABLE SEPARATE)",

"Dinner" : "ALOO MATAR/MOGAR KI SABZI, PALAK DAL LAKI KI SABZI, RASAM",

"Snacks" : "ALOO BUN JEERA BUTTER MILK"
};

kadambVegMess[weekday[2]] = {
"Breakfast" : "ALOO PARATHA, KHATTA MEETHA CHUTNEY, RAITA, SEMIYA UPMA, CHUTNE",

"Lunch" : "VEG KOFTA, MIXED VEG CURRY, LEMON RICE, DAL TADKA",

"Dinner" : "ALOO MASALA PLAIN, ONION DOSA, CHUTNEY SAMBAR, VEG POLAV, RAITA",

"Snacks" : "SABUDANA WADA, GREEN CHUTNEY, LEMON JUICE"
};

kadambVegMess[weekday[3]] = {
"Breakfast" : "KANCHI PURAM IDLY, CHUTNEY, SAMBAR, KHARAMPODI, GHEE",

"Lunch" : "DAHI KADI, ALOO METHI, KALI MASOOR DAL, PEANUT SALAD",

"Dinner" : "TANDOORI ROTI/ BUTTER NAAN, SHAHI PANEER, BLAKCHANA WITH PUMPKIN, TOMATO SOUP, BREAD CRUMBS, PAPAD MASAL ROASTED",

"Snacks" : "FRIED IDLY UPMA, PUDINA BUTTER MILK"
};

kadambVegMess[weekday[4]] = {
"Breakfast" : "DOSA, COCONUT CHUTNEY, SAMBAR, DALIA KHICHDI",

"Lunch" : "VEG DAM BIRIANI, MIRCHI KA SALAN / BAGARA BAIGAN, RAITA, LAUKI KI SABZI, SALAD(VEGETABLE SEPARATE)",

"Dinner" : "OIL CHAPATI, MASALA CABBAGE, DAL MAKHANI, ARBI/SURAN KI SABZI, ANDHRA",

"Snacks" : "PAV BHAJI LEMON JUICE"
};

kadambVegMess[weekday[5]] = {
"Breakfast" : "RAWA UPMA, CHUTNEY, PARATHA, ALOO KI SABZI,",

"Lunch" : "BHENDI MASALA, RAJMAH, JEERA/FRIED RICE, VEGETABLE RAITA",

"Dinner" : "TANDOORI ROTI/ NAAN, PANEER PALAK, DRY KARELA KI SABZI, SWEET CORN SOUP",

"Snacks" : "VEG SANDWICH TOMATO SAUCE PLAIN BUTTER MILK"
};

kadambVegMess[weekday[6]] = {
"Breakfast" : "PANEER PARATHA, RAITA, KHATTA MEETHA CHAUTNEY,COCON UT CHUTNEY, CORNFLAKES, BANANA",

"Lunch" : "MIXED VEG PORIAL, ALOO DO PYAAZA, TOMATO RICE / POOLIHARA, SALAD (VEGETABLE SEPARATE)",

"Dinner" : "BHENDI MASALA, DAL FRY, FRIED RICE, BLACK PEPPER RASAM DUM ALOO",

"Snacks" : "CHOLEY CHAT, LEMON JUICE"
};

var northMessMenu = {};
northMessMenu[weekday[1]] = {
"Breakfast" : "Poori <br />Alu Sabji <br />Bread Pakoda <br />Cornflakes <br />Fruits <br />Bread Butter Jam Milk <br />Tea",

"Lunch" : "Rajama <br />Chana Dal <br />Methi Aalu <br />White Rice <br />Tomato Rice <br />Roti <br />Dahi <br />Butter Milk <br />Aalu Tikki <br />Salad <br />Limboo Pani",

"Dinner" : "Shahi Paneer <br />Lauki Sabji <br />Tuver Dal <br />Tandori Roti <br />Dahi <br />White Rice <br />Pudina Rice <br />Sweet",

"Snacks" : "poha"
};

northMessMenu[weekday[2]] = {
"Breakfast" : "Veg Cutlet <br />Veg Macroni <br />Cornflakes, <br />Fruits, <br />Bread Butter Jam Milk, <br />Tea",

"Lunch" : "Dal Makhani, <br />Aalu Mutter, <br />Turai Sabji, <br />White Rice, <br />Lemon Rice, <br />Roti, <br />Dahi, <br />Butter Milk, <br />Salad, <br />Limbo Pani, <br />Aachar",

"Dinner" : "Aalu Paratha, <br />Mix Veg Sabji, <br />Dahi, <br />Butter Milk, <br />Tuver Dal, <br />White Rice, <br />Fried Rice, <br />Jalebi, <br />Green & Sweet Chatani",

"Snacks" : "chole chaat"
};

northMessMenu[weekday[3]] = {
"Breakfast" : "Paneer Masala Dosa, <br />Mayonise Sandwich, <br />Cornflakes, <br />Fruits, <br />Bread Butter Jam, <br />Milk, <br />Tea",

"Lunch" : "Baingan Masala, <br />Aalu Cabbage, <br />Veg Biryani, <br />White Rice, <br />Masoor Dal, <br />Roti, <br />Dahi, <br />Veg Raita, <br />Salad, <br />Aachar, <br />Papad, <br />Fruit custard",

"Dinner" : "Mutter Paneer, <br />Gobi-Aalu, <br />Masoor Dal, <br />White rice, <br />Jeera Rice, <br />Rumali Roti, <br />Roti, <br />Dahi, <br />Butter Milk, <br />Salad, <br />Aachar, <br />Papad",

"Snacks" : "mix pakoda"
};

northMessMenu[weekday[4]] = {
"Breakfast" : "Dhokla, <br />Vada Pav, <br />Cornflakes, <br />Fruits, <br />Bread Butter Jam Milk, <br />Tea",

"Lunch" : "Chole, <br />Aalu sabji Dry, <br />Massor Dal, <br />Puri, <br />Palak Puri, <br />White Rice, <br />Jeera Rice, <br />Dahi, <br />Butter Milk, <br />Mimbu Pani, <br />Salad, <br />Papad",

"Dinner" : "Aalu Gobi, <br />Tuver Dal, <br />Manchurian, <br />Roti, <br />Dahi, <br />Butter Milk, <br />White Rice, <br />Tomato Rice, <br />Sweet Boondi, <br />Salad, <br />Aachar",

"Snacks" : "Samosa"
};

northMessMenu[weekday[5]] = {
"Breakfast" : "Noodles, <br />Idli Samabar Chutney, <br />Cornflakes, <br />Fruits, <br />Bread Butter Jam, <br />Milk, <br />Tea",

"Lunch" : "Bhindi Fry, <br />Dum Aalu, <br />Tuver Dal, <br />White Rice, <br />Fried Rice, <br />Roti, <br />Dahi, <br />Pujabi Lassi, <br />Dahi Vada, <br />Salad, <br />Limboo Pani",

"Dinner" : "Palak Paneer, <br />Aalu Gobi, <br />Chana Dal, <br />White Rice, <br />Roti, <br />Dahi, <br />Pudina Rice, <br />Salad, <br />Aachar",

"Snacks" : "bhel puri"
};

northMessMenu[weekday[6]] = {
"Breakfast" : "Gobi or Aalu Paratha, <br />Dahi, <br />Green Chutney, <br />Veg Sandwich, <br />Cornflakes, <br />Fruits, <br />Bread Butter Jam Milk, <br />Tea",

"Lunch" : "Soya bean(gravy), <br />AaluGobi, <br />Tuver Dal, <br />Aalu fry, <br />White Rice, <br />Dhaniya Rice, <br />Roti, <br />Dahi, <br />Raita, <br />Salad, <br />Limboo pani, <br />Aachar",

"Dinner" : "Chole Batur, <br />White Rice, <br />Pulav, <br />Gluab Jamun, <br />Dahi, <br />Butter Milk, <br />Salad, <br />Aachar, <br />Papad",

"Snacks" : "pav bhaji"
};

northMessMenu[weekday[0]] = {
"Breakfast" : "Samosa, <br />Tomato Sauce, <br />Poha, <br />Cornflakes, <br />Fruits, <br />Bread Butter Jam Milk, <br />Tea",

"Lunch" : "Aalu Palak, <br />Veg. Kofta, <br />Bhindi, <br />Tuver Dal, <br />White Rice, <br />Pudina Rice, <br />Rotim, <br />Dahi, <br />Bundi Raita, <br />Salad, <br />Limboo Pani, <br />Aachar, <br />Sooji Halwa",

"Dinner" : "Aalu Shimala Mirch, <br />Paneer Dry, <br />Tuver Dal, <br />White Rice, <br />Lemon Rice, <br />Parotha, <br />Dahi, <br />Salad",

"Snacks" : "veg cutlet"
};


var messNum = null;

function showMenuByMess(messNumber){
  messNum = messNumber;
  if(messNumber==1)
  {
    document.getElementById('messyMess').innerHTML = "South";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = southMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = southMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = southMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = southMessMenu[today]["Snacks"];
  }
  if(messNumber==2)
  {
    document.getElementById('messyMess').innerHTML = "Yukthaar";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = yukthaarMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = yukthaarMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = yukthaarMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = yukthaarMessMenu[today]["Snacks"];
  }
  if(messNumber==3)
  {
    document.getElementById('messyMess').innerHTML = "NBH VEG";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = kadambVegMess[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = kadambVegMess[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = kadambVegMess[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = kadambVegMess[today]["Snacks"];
  }
  if(messNumber==4)
  {
    document.getElementById('messyMess').innerHTML = "North";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = northMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = northMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = northMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = northMessMenu[today]["Snacks"];
  }
}

var inTable = new Array(7);

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function showMenuByDay(day){
  document.getElementById('day').innerHTML = weekday[day];
  var rowsCount = document.getElementById('myTable').rows.length;
  if(weekday[day] != today && !isInArray(weekday[day], inTable))
  {
    var table = document.getElementById("myTable");
    var row = table.insertRow(rowsCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    if(messNum == 1)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = southMessMenu[weekday[day]]["Breakfast"];
      cell3.innerHTML = southMessMenu[weekday[day]]["Lunch"];
      cell4.innerHTML = southMessMenu[weekday[day]]["Dinner"];
      cell5.innerHTML = southMessMenu[weekday[day]]["Snacks"];
    }
    if(messNum == 2)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = yukthaarMessMenu[weekday[day]]["Breakfast"];
      cell3.innerHTML = yukthaarMessMenu[weekday[day]]["Lunch"];
      cell4.innerHTML = yukthaarMessMenu[weekday[day]]["Dinner"];
      cell5.innerHTML = yukthaarMessMenu[weekday[day]]["Snacks"];
    }
    if(messNum == 3)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = kadambVegMess[weekday[day]]["Breakfast"];
      cell3.innerHTML = kadambVegMess[weekday[day]]["Lunch"];
      cell4.innerHTML = kadambVegMess[weekday[day]]["Dinner"];
      cell5.innerHTML = kadambVegMess[weekday[day]]["Snacks"];
    }
    if(messNum == 4)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = northMessMenu[weekday[day]]["Breakfast"];
      cell3.innerHTML = northMessMenu[weekday[day]]["Lunch"];
      cell4.innerHTML = northMessMenu[weekday[day]]["Dinner"];
      cell5.innerHTML = northMessMenu[weekday[day]]["Snacks"];
    }
    inTable[day] = weekday[day];
  }
}
