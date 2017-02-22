var hpQuotes = []
hpQuotes[0] = "\"It is our choices, Harry, that show what we truly are, far more than our abilities\"";
hpQuotes[1] = "\"It matters not what someone is born, but what they grow to be.\"";
hpQuotes[2] = "\"The consequences of our actions are always so complicated, so diverse, that predicting the future is a very difficult business indeed.\"";
hpQuotes[3] = "\"It does not do to dwell on dreams and forget to live.\"";
hpQuotes[4] = "Fear of a name increases fear of the thing itself";
hpQuotes[5] = "There are all kinds of courage,” said Dumbledore, smiling. “It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.";
hpQuotes[6] = "People find it far easier to forgive others for being wrong than being right.";
hpQuotes[7] = "We are only as strong as we are united, as weak as we are divided.";
hpQuotes[8] = "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.";
hpQuotes[9] = "We cannot choose our fate, but we can choose others. Be careful in knowing that.";
hpQuotes[10] = "It is important,” Dumbledore said, “to fight, and fight again, and keep fighting, for only then could evil be kept at bay, though never quite eradicated.";
hpQuotes[11] = "The truth.” Dumbledore sighed. “It is a beautiful and terrible thing, and should therefore be treated with great caution.";
hpQuotes[12] = "Curiosity is not a sin…but we should exercise caution with our curiosity.";
hpQuotes[13] = "Numbing the pain for a while will make it worse when you finally feel it.";
hpQuotes[14] = "Understanding is the first step to acceptance, and only with acceptance can there be recovery.";
hpQuotes[15] = "Youth cannot know how age thinks and feels, but old men are guilty if they forget what it was to be young.";
hpQuotes[16] = "You think the dead we loved truly ever leave us? You think that we don’t recall them more clearly in times of great trouble?";
hpQuotes[17] = "Do not pity the dead, Harry, pity the living, and above all those who live without love.";
hpQuotes[18] = "It is the unknown we fear when we look upon death and darkness, nothing more.";
hpQuotes[19] = "Let us step into the night and pursue that flighty temptress, adventure.";
hpQuotes[20] = "Ah, music,” he said wiping his eyes. “A magic beyond all we do here.";
hpQuotes[21] = "Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?";
hpQuotes[22] = "Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it";
hpQuotes[23] = "Happiness can be found, even in the darkest of times, if only one remembers to turn on the light";



function quote() {
  var randomQuote = Math.floor(Math.random()*(hpQuotes.length));
  document.getElementById("quote").innerHTML = hpQuotes[randomQuote];
}

function tweet() {
  var url = "https://twitter.com/intent/tweet";
  var text = document.getElementById("quote").innerText;
  var hashtags = "freeCodeCamp, RandomQuote, HarryPotter";
  var via = "userName";
  window.open(url + "?text=" + text,"width = 500, height = 300");
}

