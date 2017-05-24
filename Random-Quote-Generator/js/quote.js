var hpQuotes = []
hpQuotes[0] = '"It is our choices, Harry, that show what we truly are, far more than our abilities" - Dumbledore';
hpQuotes[1] = '"It matters not what someone is born, but what they grow to be." - Dumbledore';
hpQuotes[2] = '"The consequences of our actions are always so complicated, so diverse, that predicting the future is a very difficult business indeed." - Dumbledore';
hpQuotes[3] = '"It does not do to dwell on dreams and forget to live." - Dumbledore';
hpQuotes[4] = '"Fear of a name increases fear of the thing itself" - Dumbledore';
hpQuotes[5] = '"There are all kinds of courage,” said Dumbledore, smiling. “It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends." - Dumbledore';
hpQuotes[6] = '"People find it far easier to forgive others for being wrong than being right." - Dumbledore';
hpQuotes[7] = '"We are only as strong as we are united, as weak as we are divided." - Dumbledore';
hpQuotes[8] = '"Differences of habit and language are nothing at all if our aims are identical and our hearts are open." Dumbledore';
hpQuotes[9] = '"We cannot choose our fate, but we can choose others. Be careful in knowing that." - Dumbledore';
hpQuotes[10] = '"It is important, to fight, and fight again, and keep fighting, for only then could evil be kept at bay, though never quite eradicated. - Dumbledore" ';
hpQuotes[11] = '"The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution." - Dumbledore';
hpQuotes[12] = '"Curiosity is not a sin…but we should exercise caution with our curiosity." - Dumbledore';
hpQuotes[13] = '"Numbing the pain for a while will make it worse when you finally feel it." - Dumbledore';
hpQuotes[14] = '"Understanding is the first step to acceptance, and only with acceptance can there be recovery." - Dumbledore';
hpQuotes[15] = '"Youth cannot know how age thinks and feels, but old men are guilty if they forget what it was to be young." - Dumbledore';
hpQuotes[16] = '"You think the dead we loved truly ever leave us? You think that we don’t recall them more clearly in times of great trouble?" - Dumbledore';
hpQuotes[17] = '"Do not pity the dead, Harry, pity the living, and above all those who live without love." - Dumbledore';
hpQuotes[18] = '"It is the unknown we fear when we look upon death and darkness, nothing more." - Dumbledore';
hpQuotes[19] = '"Let us step into the night and pursue that flighty temptress, adventure." - Dumbledore';
hpQuotes[20] = '"Ah, music,” he said wiping his eyes. “A magic beyond all we do here." - Dumbledore';
hpQuotes[21] = '"Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?" - Dumbledore';
hpQuotes[22] = '"Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it" - Dumbledore';
hpQuotes[23] = '"Happiness can be found, even in the darkest of times, if only one remembers to turn on the light" - Dumbledore';
hpQuotes[24] = '"I am what I am an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth bothern’ with." - Hagrid';
hpQuotes[25] = "\"No good sittin' worryin' abou' it. What's comin' will come, an' we'll meet it when it does.\" - Hagrid";
hpQuotes[26] = '"You do realize that your sheets are changed, your fires lit, your classrooms cleaned, and your food cooked by a group of magical creatures who are unpaid and enslaved?" - Hermione';
hpQuotes[27] = "\"Excuse me, I don't like people just because they're handsome!\" - Hermione";


function quote() {
	// we want to get a random quote from the array
  var randomQuote = Math.floor(Math.random()*(hpQuotes.length));
  // print out onto the webpage.
  document.getElementById("quote").innerHTML = hpQuotes[randomQuote];
}

function tweet() {
	// tweet url 
  var url = "https://twitter.com/intent/tweet";
  // pull the qoute
  var text = document.getElementById("quote").innerText;
  // some hashtags we can use
  var hashtags = "freeCodeCamp, RandomQuote, HarryPotter";
  // The user's twitter handle
  var via = "userName";
  // we want to open the twitter page on a new window.
  window.open(url + "?text=" + text,"width = 500, height = 300");
}

