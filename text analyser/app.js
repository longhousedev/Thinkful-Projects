function getWordCount(words) {
    var count = 0;
    for (i = 0; i < words.length; i++) {
        count ++;
    }
    return count;
};

function getUniqueWords(words) {
    var uniqueWords = new Set();
    for (i = 0; i < words.length; i++) {
        uniqueWords.add(words[i]);
    }
    return uniqueWords.size;
};

function getAvgWords(words) {
    var lengthTotal = 0;
    for (i = 0; i < words.length; i++) {
        lengthTotal += words[i].length;
        console.log(lengthTotal);
    }
    alert(lengthTotal);
    return Math.round(lengthTotal / words.length);
};

function getText(element){
    //var rawWords = $("#"+element).val();
    element = element.replace(/[^A-Za-z \s+\Z]/g,"");
    element = element.toLowerCase(" ");
    return element.split(" ");
}

$('.container form').submit(function(event){
    event.preventDefault();
    var wordList = getText($("textarea").val());
    alert(wordList);
    $("dl").removeClass("hidden text-report");
    $(".js-count").text(getWordCount(wordList));
    $(".js-unique").text(getUniqueWords(wordList));
    $(".js-length").text(getAvgWords(wordList));
});