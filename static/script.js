function analyzeText(){
    var text=document.getElementById('text-input').value;

    var letters=text.match(/[A-za-z]/g);
    var letterc=letters?letters.length:0;
    var words=text.toLowerCase().match(/\b\w+\b/g);
    var wordc=words?words.length:0;
    var spaces=text.match(/ /g);
    var spacec=spaces?spaces.length:0;
    var newlines=text.match(/\n/g);
    var newlinec=newlines?newlines.length:0;
    var specialsymbols=text.match(/[^A-Za-z0-9\s]/g);
    var specialsymbolsc=specialsymbols?specialsymbols.length:0;

    const pronouns = [
        // Personal Pronouns - Subject
        "i", "you", "he", "she", "it", "we", "they",
      
        // Personal Pronouns - Object
        "me", "you", "him", "her", "it", "us", "them",
      
        // Possessive Pronouns - Determiners
        "my", "your", "his", "her", "its", "our", "their",
      
        // Possessive Pronouns - Independent
        "mine", "yours", "his", "hers", "ours", "theirs",
      
        // Reflexive Pronouns
        "myself", "yourself", "himself", "herself", "itself",
        "ourselves", "yourselves", "themselves",
      
        // Demonstrative Pronouns
        "this", "that", "these", "those",
      
        // Relative Pronouns
        "who", "whom", "whose", "which", "that",
      
        // Interrogative Pronouns
        "who", "whom", "whose", "which", "what",
      
        // Indefinite Pronouns
        "anybody", "anyone", "anything",
        "everybody", "everyone", "everything",
        "nobody", "no one", "nothing",
        "somebody", "someone", "something",
        "each", "either", "neither",
        "few", "many", "several", "all", "any", "most", "none", "some",
      
        // Reciprocal Pronouns
        "each other", "one another"
      ]; // Generated using LLM

    var pronounsCount = {};
    var pronounsTotal=0;
        if(words){
        for (let w of words){
            if (pronouns.includes(w)){
                if(pronounsCount[w]){
                    pronounsCount[w]++;
                }
                else{
                    pronounsCount[w]=1;
                }
                pronounsTotal++;
            }
        }
    }

    const prepositions = [
        "about", "above", "across", "after", "against", "along", "among", "around", "as", "at",
        "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by",
        "concerning", "considering", "despite", "down", "during", "except", "excluding", "following", "for", "from",
        "in", "inside", "into", "like", "minus", "near", "of", "off", "on", "onto",
        "opposite", "outside", "over", "past", "per", "plus", "regarding", "round", "save", "since",
        "than", "through", "throughout", "till", "to", "toward", "towards", "under", "underneath", "unlike",
        "until", "up", "upon", "versus", "via", "with", "within", "without"
      ]; // Generated using LLM

    var prepositionsCount = {};
    var prepositionsTotal=0;
    if(words){
        for (let w of words){
            if (prepositions.includes(w)){
                if(prepositionsCount[w]) {
                    prepositionsCount[w]++;
                }
                else{
                    prepositionsCount[w]=1;
                }
                prepositionsTotal++;
            }
        }
    }

    const articles = ["a", "an"]; 
    var articlesCount = {};
    var articlesTotal=0;
    if(words){
        for (let w of words){
            if (articles.includes(w)){
                if(articlesCount[w]) {
                    articlesCount[w]++;
                }
                else{
                    articlesCount[w]=1;
                }
                articlesTotal++;
            }
        }
    }

    var output=document.getElementById('output');
    output.innerHTML='';
    output.innerHTML='<h2>Analysis</h2>';

    var qs=document.createElement('div');
    qs.classList.add('qs');

    var q1=document.createElement('div');
    q1.innerHTML='<h3>Basic Counts</h3>';
    var q1ul=document.createElement('ul');
    var q1letters=document.createElement('li');
    q1letters.innerHTML='Letters: '+letterc;
    q1ul.appendChild(q1letters);
    var q1words=document.createElement('li');
    q1words.innerHTML='Words: '+wordc;
    q1ul.appendChild(q1words);
    var q1spaces=document.createElement('li');
    q1spaces.innerHTML='Spaces: '+spacec;
    q1ul.appendChild(q1spaces);
    var q1newlines=document.createElement('li');
    q1newlines.innerHTML='Newlines: '+newlinec;
    q1ul.appendChild(q1newlines);
    var q1special=document.createElement('li');
    q1special.innerHTML='Special Symbols: '+specialsymbolsc;
    q1ul.appendChild(q1special);
    q1.appendChild(q1ul);
    qs.appendChild(q1);

    var q2=document.createElement('div');
    q2.innerHTML='<h3>Pronouns</h3>';
    var q2ul=document.createElement('ul');
    var q2total=document.createElement('li');
    q2total.innerHTML='Total: '+pronounsTotal;
    q2ul.appendChild(q2total);
    for(let pronoun in pronounsCount){
        var q2pronoun=document.createElement('li');
        q2pronoun.innerHTML=pronoun+': '+pronounsCount[pronoun];
        q2ul.appendChild(q2pronoun);
    }
    q2.appendChild(q2ul);
    qs.appendChild(q2);
    
    var q3=document.createElement('div');
    q3.innerHTML='<h3>Prepositions</h3>';
    var q3ul=document.createElement('ul');
    var q3total=document.createElement('li');
    q3total.innerHTML='Total: '+prepositionsTotal;
    q3ul.appendChild(q3total);
    for(let preposition in prepositionsCount){
        var q3preposition=document.createElement('li');
        q3preposition.innerHTML=preposition+': '+prepositionsCount[preposition];
        q3ul.appendChild(q3preposition);
    }
    q3.appendChild(q3ul);
    qs.appendChild(q3);

    var q4=document.createElement('div');
    q4.innerHTML='<h3>Indefinite Articles</h3>';
    var q4ul=document.createElement('ul');
    var q4total=document.createElement('li');
    q4total.innerHTML='Total: '+articlesTotal;
    q4ul.appendChild(q4total);
    for(let article in articlesCount){
        var q4article=document.createElement('li');
        q4article.innerHTML=article+': '+articlesCount[article];
        q4ul.appendChild(q4article);
    }
    q4.appendChild(q4ul);
    qs.appendChild(q4);

    output.appendChild(qs);
}

function clearText(){
    document.getElementById('text-input').value='';
    document.getElementById('output').innerHTML='';
}

document.addEventListener('DOMContentLoaded', function() {
    var time=new Date().toLocaleString();
    console.log(time+', View, page');

    document.addEventListener('click', function(event){
        var t=event.target.tagName;
        var time=new Date().toLocaleString();
        var obj='';
        if(t=='BUTTON'){
            obj='button';
        }
        else if(t=='TEXTAREA'){
            obj='textarea';
        }
        else if(t=='IMG'){ 
            if(event.target.closest('a')){
                obj='link';
            }
            else{
                obj='image';
            }
        }
        else if(t=='H1' || t=='H2' || t=='H3' || t=='P' || t=='LI' || t=='DT' || t=='DD'){
            obj='text';
        }
        else if(t=='A'){
            obj='link';
        }
    
        if(obj){
            console.log(time+', Click, '+obj);
        }
    });
});
