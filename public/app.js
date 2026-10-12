const languages=[
["Assamese","as-IN","অসমীয়া","অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য ৰ ল ৱ শ ষ স হ"],
["Bengali","bn-IN","বাংলা","অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ"],
["Bodo","brx-IN","बड़ो","अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श स ह"],
["Dogri","doi-IN","डोगरी","अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श स ह"],
["Gujarati","gu-IN","ગુજરાતી","અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ"],
["Hindi","hi-IN","हिन्दी","अ आ इ ई उ ऊ ऋ ए ऐ ओ औ अं अः क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ"],
["Kannada","kn-IN","ಕನ್ನಡ","ಅ ಆ ಇ ಈ ಉ ಊ ಋ ಎ ಏ ಐ ಒ ಓ ಔ ಕ ಖ ಗ ಘ ಙ ಚ ಛ ಜ ಝ ಞ ಟ ಠ ಡ ಢ ಣ ತ ಥ ದ ಧ ನ ಪ ಫ ಬ ಭ ಮ ಯ ರ ಲ ವ ಶ ಷ ಸ ಹ"],
["Kashmiri","ks-IN","कॉशुर","अ आ इ ई उ ऊ ए ऐ ओ औ ک گ چ ژ ٹ ڈ ڑ ت د ن پ ب م ی ر ل و ش س ہ"],
["Konkani","kok-IN","कोंकणी","अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श ष स ह"],
["Maithili","mai-IN","मैथिली","अ आ इ ई उ ऊ ऋ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श स ह"],
["Malayalam","ml-IN","മലയാളം","അ ആ ഇ ഈ ഉ ഊ ഋ എ ഏ ഐ ഒ ഓ ഔ ക ഖ ഗ ഘ ങ ച ഛ ജ ഝ ഞ ട ഠ ഡ ഢ ണ ത ഥ ദ ധ ന പ ഫ ബ ഭ മ യ ര ല വ ശ ഷ സ ഹ"],
["Manipuri","mni-IN","মৈতৈলোন্","ꯑ ꯒ ꯅ ꯆ ꯇ ꯈ ꯉ ꯊ ꯋ ꯌ ꯍ ꯎ ꯏ ꯐ ꯓ ꯔ ꯕ ꯖ ꯗ ꯘ ꯙ"],
["Marathi","mr-IN","मराठी","अ आ इ ई उ ऊ ऋ ए ऐ ओ औ अं अः क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ"],
["Nepali","ne-NP","नेपाली","अ आ इ ई उ ऊ ऋ ए ऐ ओ औ अं अः क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ"],
["Odia","or-IN","ଓଡ଼ିଆ","ଅ ଆ ଇ ଈ ଉ ଊ ଋ ଏ ଐ ଓ ଔ କ ଖ ଗ ଘ ଙ ଚ ଛ ଜ ଝ ଞ ଟ ଠ ଡ ଢ ଣ ତ ଥ ଦ ଧ ନ ପ ଫ ବ ଭ ମ ଯ ର ଲ ଶ ଷ ସ ହ"],
["Punjabi","pa-IN","ਪੰਜਾਬੀ","ਅ ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ ਸ ਹ ਕ ਖ ਗ ਘ ਙ ਚ ਛ ਜ ਝ ਟ ਠ ਡ ਢ ਣ ਤ ਥ ਦ ਧ ਨ ਪ ਫ ਬ ਭ ਮ ਯ ਰ ਲ ਵ ੜ"],
["Sanskrit","hi-IN","संस्कृतम्","अ आ इ ई उ ऊ ऋ ॠ ऌ ए ऐ ओ औ अं अः क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ"],
["Santali","sat-IN","ᱥᱟᱱᱛᱟᱲᱤ","ᱚ ᱛ ᱜ ᱝ ᱞ ᱟ ᱠ ᱡ ᱢ ᱣ ᱤ ᱥ ᱦ ᱧ ᱨ ᱩ ᱪ ᱫ ᱬ ᱭ ᱮ ᱯ ᱰ ᱱ ᱲ ᱳ ᱴ ᱵ ᱶ ᱷ"],
["Sindhi","sd-IN","سنڌي","ا آ ب ٻ ڀ ت ٿ ٽ ٺ ث پ ج ڄ چ ڇ ح خ د ڌ ڊ ڏ ذ ر ڙ ز س ش ص ض ط ظ ع غ ف ق ڪ گ ل م ن و ھ ء ي"],
["Tamil","ta-IN","தமிழ்","அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ ஃ க ங ச ஞ ட ண த ந ப ம ய ர ல வ ழ ள ற ன ஜ ஷ ஸ ஹ"],
["Telugu","te-IN","తెలుగు","అ ఆ ఇ ఈ ఉ ఊ ఋ ఎ ఏ ఐ ఒ ఓ ఔ అం అః క ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ శ ష స హ"],
["Urdu","ur-IN","اردو","ا آ ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ں و ہ ھ ء ی"],
["English","en-IN","English","a b c d e f g h i j k l m n o p q r s t u v w x y z"]
];
const $=s=>document.querySelector(s),nativeSel=$("#nativeLanguage"),targetSel=$("#targetLanguage"),messages=$("#messages"),input=$("#message"),send=$("#send"),status=$("#status"),keyboard=$("#keyboard"),keys=$("#keys");
for(const [name,code,script] of languages){for(const sel of [nativeSel,targetSel]){const o=document.createElement("option");o.value=name;o.textContent=name+" · "+script;sel.append(o)}}
nativeSel.value="Telugu";targetSel.value="Sanskrit";let mode="learn",history=[],recognition=null,listening=false,voiceMode=false,lastSpokenReply="";
function lang(name){return languages.find(x=>x[0]===name)||languages[0]}
function updateMode(){document.querySelectorAll(".mode").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));$("#modeDescription").textContent=mode==="learn"?`Get translations and explanations in ${nativeSel.value}, with examples in ${targetSel.value}.`:"Have a natural conversation. Your buddy aims to reply in the language you use.";$("#modeTag").textContent=mode==="learn"?"LEARNING MODE":"CHAT MODE"}
function resetChat(){history=[];messages.innerHTML='<div class="msg bot"><div class="mini-avatar">भा</div><div><small class="sender">BHASHA BUDDY</small><div class="bubble">Your language pair is ready! Ask a question, or choose a starter prompt below.<div class="prompts"><button data-prompt="Teach me how to greet someone politely.">Teach me a greeting ↗</button><button data-prompt="How do I introduce myself?">Introduce myself ↗</button></div></div></div></div>'}
function addMessage(role,text){const row=document.createElement("div");row.className="msg "+(role==="user"?"user":"bot");if(role!=="user"){const av=document.createElement("div");av.className="mini-avatar";av.textContent="भा";row.append(av)}const wrap=document.createElement("div"),sender=document.createElement("small"),bubble=document.createElement("div");sender.className="sender";sender.textContent=role==="user"?"YOU":"BHASHA BUDDY";bubble.className="bubble";bubble.textContent=text;wrap.append(sender,bubble);row.append(wrap);messages.append(row);messages.scrollTop=messages.scrollHeight}
async function sendMessage(value){const text=(value??input.value).trim();if(!text||send.disabled)return;input.value="";addMessage("user",text);history.push({role:"user",content:text});send.disabled=true;send.textContent="Thinking…";status.textContent="";try{const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:history.slice(-12),mode,nativeLanguage:nativeSel.value,targetLanguage:targetSel.value})});const data=await r.json();if(!r.ok)throw Error(data.error||"Something went wrong.");history.push({role:"assistant",content:data.reply});addMessage("assistant",data.reply);if(voiceMode)speakReply(data.reply);else{if("speechSynthesis"in window)window.speechSynthesis.cancel();lastSpokenReply=cleanForSpeech(data.reply);$("#voiceStageReply").textContent=data.reply;$("#voiceStageReplay").disabled=!lastSpokenReply;$("#voiceStageReplay").textContent="🔊 Speak reply";}}catch(e){const err=e.message||"I couldn’t connect just now. Please try again.";addMessage("assistant",err);if(voiceMode){$("#voiceStageReply").textContent=err;$("#voiceStageStatus").textContent="I couldn’t get a reply this time. Check your connection and try again."}}finally{send.disabled=false;send.textContent="Send ↑";input.focus()}}
$("#chatForm").addEventListener("submit",e=>{e.preventDefault();sendMessage()});messages.addEventListener("click",e=>{const b=e.target.closest("[data-prompt]");if(b)sendMessage(b.dataset.prompt)});
document.querySelectorAll(".mode").forEach(b=>b.addEventListener("click",()=>{mode=b.dataset.mode;updateMode()}));
[nativeSel,targetSel].forEach(s=>s.addEventListener("change",()=>{updateMode();renderKeys();resetChat()}));
$("#swap").addEventListener("click",()=>{const x=nativeSel.value;nativeSel.value=targetSel.value;targetSel.value=x;updateMode();renderKeys();resetChat()});
function insert(text){const a=input.selectionStart??input.value.length,b=input.selectionEnd??input.value.length;input.setRangeText(text,a,b,"end");input.focus()}
const phoneticMaps={
Telugu:{vowels:{aa:"ఆ",ii:"ఈ",ee:"ఈ",uu:"ఊ",oo:"ఊ",ai:"ఐ",au:"ఔ",a:"అ",i:"ఇ",u:"ఉ",e:"ఎ",o:"ఒ"},cons:{ksh:"క్ష",kh:"ఖ",gh:"ఘ",chh:"ఛ",ch:"చ",jh:"ఝ",th:"థ",dh:"ధ",ph:"ఫ",bh:"భ",sh:"శ",Sh:"ష",ng:"ఙ",ny:"ఞ",tt:"ట",dd:"డ",T:"ట",D:"డ",N:"ణ",L:"ళ",R:"ఱ",k:"క",g:"గ",c:"చ",j:"జ",t:"త",d:"ద",n:"న",p:"ప",b:"బ",m:"మ",y:"య",r:"ర",l:"ల",v:"వ",w:"వ",s:"స",h:"హ"}},
Tamil:{vowels:{aa:"ஆ",ii:"ஈ",ee:"ஈ",uu:"ஊ",oo:"ஊ",ai:"ஐ",au:"ஔ",a:"அ",i:"இ",u:"உ",e:"எ",o:"ஒ"},cons:{ng:"ங",ny:"ஞ",sh:"ஷ",zh:"ழ",th:"த",dh:"த",kh:"க",gh:"க",ch:"ச",jh:"ஜ",tt:"ட",dd:"ட",nn:"ண",L:"ள",R:"ற",k:"க",g:"க",c:"ச",j:"ஜ",t:"த",d:"ட",n:"ந",p:"ப",b:"ப",m:"ம",y:"ய",r:"ர",l:"ல",v:"வ",w:"வ",s:"ஸ",h:"ஹ"}},
Hindi:{vowels:{aa:"आ",ii:"ई",ee:"ई",uu:"ऊ",oo:"ऊ",ai:"ऐ",au:"औ",a:"अ",i:"इ",u:"उ",e:"ए",o:"ओ"},cons:{ksh:"क्ष",kh:"ख",gh:"घ",chh:"छ",ch:"च",jh:"झ",th:"थ",dh:"ध",ph:"फ",bh:"भ",sh:"श",ng:"ङ",ny:"ञ",tt:"ट",dd:"ड",T:"ट",D:"ड",N:"ण",k:"क",g:"ग",c:"च",j:"ज",t:"त",d:"द",n:"न",p:"प",b:"ब",m:"म",y:"य",r:"र",l:"ल",v:"व",w:"व",s:"स",h:"ह"}}
};
const vowelSigns={Telugu:{a:"",aa:"ా",i:"ి",ii:"ీ",ee:"ీ",u:"ు",uu:"ూ",oo:"ూ",e:"ె",E:"ే",ai:"ై",o:"ొ",O:"ో",au:"ౌ"},Tamil:{a:"",aa:"ா",i:"ி",ii:"ீ",ee:"ீ",u:"ு",uu:"ூ",oo:"ூ",e:"ெ",E:"ே",ai:"ை",o:"ொ",O:"ோ",au:"ௌ"},Hindi:{a:"",aa:"ा",i:"ि",ii:"ी",ee:"ी",u:"ु",uu:"ू",oo:"ू",e:"े",ai:"ै",o:"ो",au:"ौ"}};
function transliterateRoman(text,language=targetSel.value){
 const map=phoneticMaps[language];if(!map)return text;
 const vowels=map.vowels,cons=map.cons,signs=vowelSigns[language];let out="",i=0;
 const keys=Object.keys(cons).sort((a,b)=>b.length-a.length);
 while(i<text.length){
  const ch=text[i];
  if(!/[a-zA-Z]/.test(ch)){out+=ch;i++;continue}
  const rest=text.slice(i);let c=keys.find(k=>rest.startsWith(k));
  if(c){const base=cons[c];i+=c.length;let vk=Object.keys(vowels).sort((a,b)=>b.length-a.length).find(k=>text.slice(i).toLowerCase().startsWith(k.toLowerCase()));if(vk){const typed=text.slice(i,i+vk.length);const signKey=typed==="E"?"E":typed==="O"?"O":vk.toLowerCase();out+=base+(signs[signKey]??signs[signKey.toLowerCase()]??"");i+=vk.length}else{out+=base+"్"}continue}
  let v=Object.keys(vowels).sort((a,b)=>b.length-a.length).find(k=>rest.toLowerCase().startsWith(k.toLowerCase()));
  if(v){out+=vowels[v];i+=v.length;continue}
  out+=ch;i++;
 }
 return out.replace(/్([అఆఇఈఉఊఎఏఐఒఓఔ])/g,(_,v)=>v);
}
function transliterateForKeyboard(){
 const raw=input.value;if(!raw.trim())return;
 const start=input.selectionStart??raw.length,end=input.selectionEnd??raw.length;
 const before=raw.slice(0,start),selected=raw.slice(start,end),after=raw.slice(end);
 const convert=s=>s.split(/(\s+)/).map(part=>/^\s+$/.test(part)?part:transliterateRoman(part,targetSel.value)).join("");
 input.value=convert(before)+convert(selected)+convert(after);
 input.setSelectionRange(convert(before).length,convert(before).length+convert(selected).length);input.focus();
}
function renderKeys(){const l=lang(targetSel.value);$("#keyboardLabel").textContent=l[0].toUpperCase()+" · "+l[2];keys.replaceChildren();l[3].split(/\s+/).forEach(c=>{const b=document.createElement("button");b.type="button";b.textContent=c;b.addEventListener("click",()=>insert(c));keys.append(b)});for(const [label,action] of [["Space","space"],["⌫","back"],["Clear","clear"]]){const b=document.createElement("button");b.type="button";b.textContent=label;b.addEventListener("click",()=>{if(action==="space")insert(" ");if(action==="clear"){input.value="";input.focus()}if(action==="back"){const a=input.selectionStart,z=input.selectionEnd;if(a===z&&a>0)input.setRangeText("",a-1,z,"end");else input.setRangeText("",a,z,"end");input.focus()}});keys.append(b)}}
renderKeys();$("#keyboardToggle").addEventListener("click",()=>{keyboard.hidden=!keyboard.hidden;if(!keyboard.hidden)renderKeys()});$("#closeKeyboard").addEventListener("click",()=>keyboard.hidden=true);
$("#voice").addEventListener("click",()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(listening&&recognition){recognition.stop();return}if(!SR){status.textContent="Voice input isn't supported in this browser. Try Chrome or type instead.";$("#voiceStageStatus").textContent=status.textContent;return}recognition=new SR();recognition.lang=lang(nativeSel.value)[1];recognition.interimResults=true;recognition.continuous=false;recognition.onstart=()=>{listening=true;status.textContent="Listening in "+nativeSel.value+"…";$("#voice").innerHTML="■ <span>Stop</span>"};recognition.onresult=e=>{let final="",interim="";for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)final+=e.results[i][0].transcript;else interim+=e.results[i][0].transcript}input.value=final||interim};recognition.onerror=e=>{status.textContent="Voice input issue ("+e.error+"). Check microphone permission and selected speaking language.";$("#voiceStageStatus").textContent=status.textContent};recognition.onend=()=>{listening=false;$("#voice").innerHTML='◉ <span>Speak</span>';if(input.value.trim()){status.textContent="Heard you. Getting a reply…";$("#voiceStageStatus").textContent="Heard you. Your buddy is thinking…";sendMessage(input.value)}else if(voiceMode){status.textContent="I didn’t catch that. Tap Speak and try again.";$("#voiceStageStatus").textContent=status.textContent}};try{recognition.start()}catch{status.textContent="Couldn't start voice input. Please try again."}});
function scriptLanguage(text){
 const cp=Array.from(text||"").map(ch=>ch.codePointAt(0));
 if(cp.some(n=>n>=0x0C00&&n<=0x0C7F))return "Telugu";
 if(cp.some(n=>n>=0x0B80&&n<=0x0BFF))return "Tamil";
 if(cp.some(n=>n>=0x0C80&&n<=0x0CFF))return "Kannada";
 if(cp.some(n=>n>=0x0D00&&n<=0x0D7F))return "Malayalam";
 if(cp.some(n=>n>=0x0980&&n<=0x09FF))return "Bengali";
 if(cp.some(n=>n>=0x0A80&&n<=0x0AFF))return "Gujarati";
 if(cp.some(n=>n>=0x0A00&&n<=0x0A7F))return "Punjabi";
 if(cp.some(n=>n>=0x0B00&&n<=0x0B7F))return "Odia";
 if(cp.some(n=>n>=0x0600&&n<=0x06FF))return "Urdu";
 if(cp.some(n=>n>=0x0900&&n<=0x097F))return "Hindi";
 return "English";
}
function cleanForSpeech(text){
 return String(text)
  .replace(/\[([^\]]+)\]\([^)]*\)/g,"$1")
  .replace(/\*\*(.*?)\*\*/gs,"$1").replace(/__(.*?)__/gs,"$1")
  .replace(/\*(.*?)\*/gs,"$1").replace(/_(.*?)_/gs,"$1")
  .replace(/\x60([^\x60]*)\x60/g,"$1").replace(/^\s{0,3}#{1,6}\s*/gm,"")
  .replace(/^\s*[-•*+]\s+/gm,"").replace(/^\s*\d+[.)]\s+/gm,"")
  .replace(/[“”„]/g,"").replace(/[‘’]/g,"").replace(/^["']+|["']+$/g,"")
  .replace(/\s*([?!.,])\1+/g,"$1").replace(/\s+/g," ").trim();
}
function speechParts(text){
 const chars=Array.from(String(text||""));
 const parts=[];
 let current="",currentLang="";
 for(const ch of chars){
  const lang=scriptLanguage(ch);
  const isSpace=/\s/.test(ch),isPunctuation=/^[^\p{L}\p{N}]$/u.test(ch);
  if(isSpace||isPunctuation){current+=ch;continue}
  if(current && currentLang && lang!==currentLang){
   parts.push({language:currentLang,text:current});current=ch;
  }else current+=ch;
  currentLang=lang;
 }
 if(current.trim())parts.push({language:currentLang||"English",text:current});
 return parts;
}
function speechLocale(language){
 const locales={Telugu:"te-IN",Tamil:"ta-IN",Kannada:"kn-IN",Malayalam:"ml-IN",Bengali:"bn-IN",Assamese:"as-IN",Gujarati:"gu-IN",Punjabi:"pa-IN",Odia:"or-IN",Urdu:"ur-IN",Hindi:"hi-IN",English:"en-IN"};
 return locales[language]||"en-IN";
}
function findLocalVoice(locale){
 const voices=window.speechSynthesis.getVoices()||[];
 const wanted=locale.toLowerCase(),base=wanted.split("-")[0];
 let voice=voices.find(v=>v.lang.toLowerCase()===wanted);
 if(!voice)voice=voices.find(v=>v.lang.toLowerCase().startsWith(base+"-"));
 // Never force an English/default voice to read Telugu script: some Windows/Chrome
 // voices silently fail on unsupported scripts. Leave the requested locale intact.
 if(!voice&&base==="en")voice=voices.find(v=>v.lang.toLowerCase()==="en-in")||voices.find(v=>v.lang.toLowerCase().startsWith("en-gb"))||voices.find(v=>v.lang.toLowerCase().startsWith("en-"));
 return voice||null;
}
function speakReply(text){
 if(!voiceMode){if("speechSynthesis"in window)window.speechSynthesis.cancel();return}
 if(!("speechSynthesis"in window)){status.textContent="Spoken replies aren’t supported in this browser. Try Chrome.";$("#voiceStageStatus").textContent=status.textContent;return}
 const spoken=cleanForSpeech(text);lastSpokenReply=spoken;$("#voiceStageReply").textContent=text;$("#voiceStageReplay").disabled=false;$("#voiceStageReplay").textContent=voiceMode?"🔊 Speak reply":"▶ Replay last reply";
 const synth=window.speechSynthesis;
 synth.cancel();
 const parts=speechParts(spoken);
 if(!parts.length){$("#voiceStageStatus").textContent="There’s no text to speak.";return}
 let index=0;
 const speakNext=()=>{
  if(index>=parts.length){$("#voiceStageStatus").textContent=voiceMode?"Reply spoken. Tap Speak when you’re ready to answer.":"Reply finished.";return}
  const part=parts[index++],u=new SpeechSynthesisUtterance(part.text);
  u.lang=speechLocale(part.language);u.rate=0.9;u.pitch=1;
  const voice=findLocalVoice(u.lang);if(voice){u.voice=voice;if(!voice.lang.toLowerCase().startsWith(u.lang.split("-")[0].toLowerCase()+"-")&&voice.lang.toLowerCase()!==u.lang.toLowerCase())u.lang=voice.lang;}
  u.onstart=()=>{$("#voiceStageStatus").textContent=(voiceMode?"Speaking your reply…":"Playing message aloud…")+(voice?"":" Your device may need an Indian-language voice installed for accurate pronunciation.")};
  u.onend=speakNext;
  u.onerror=()=>{$("#voiceStageStatus").textContent=part.language==="Telugu"?"Chrome has no working Telugu speech voice on this computer. Install a Telugu text-to-speech voice in Windows, or use a cloud Telugu voice service.":"Speech playback failed. Tap Speak reply to try again.";$("#voiceStageReplay").textContent="🔊 Speak reply";};
  synth.resume();
  setTimeout(()=>{try{synth.speak(u)}catch(e){$("#voiceStageStatus").textContent="Could not start audio. Try tapping Speak reply again."}},80);
 };
 const startSpeaking=()=>{if(index===0)speakNext()};
 if(synth.getVoices().length)startSpeaking();
 else {synth.onvoiceschanged=()=>{synth.onvoiceschanged=null;startSpeaking()};setTimeout(()=>{if(index===0){synth.onvoiceschanged=null;startSpeaking()}},700)}
 if(!voiceMode)status.textContent="Playing message aloud.";
}
$("#voiceModeToggle").addEventListener("click",()=>{voiceMode=!voiceMode;if(voiceMode){mode="chat";updateMode()}$(".chat").classList.toggle("voice-mode",voiceMode);$("#voiceModeToggle").setAttribute("aria-pressed",String(voiceMode));$("#voiceModeToggle").textContent=voiceMode?"◉ Exit voice mode":"◉ Voice mode";$("#voiceStage").hidden=!voiceMode;if(voiceMode){$("#voiceStageStatus").textContent="Voice mode is on. Listening in "+nativeSel.value+". Tap Speak and I’ll reply aloud in the language you use.";status.textContent="Voice mode listens in your “I understand” language ("+nativeSel.value+"). Change that selection to switch your speaking language.";if(lastSpokenReply)$("#voiceStageReply").textContent=lastSpokenReply}else if("speechSynthesis"in window){speechSynthesis.cancel()}});
$("#voiceStageReplay").addEventListener("click",()=>{if(!lastSpokenReply)return;if(!("speechSynthesis"in window)){$("#voiceStageStatus").textContent="Spoken replies aren’t supported in this browser. Try Chrome.";return}const synth=window.speechSynthesis;synth.cancel();synth.resume();const parts=speechParts(lastSpokenReply);let i=0;$("#voiceStageStatus").textContent="Starting audio…";const next=()=>{if(i>=parts.length){$("#voiceStageStatus").textContent="Reply spoken. Tap Speak when you’re ready to answer.";return}const part=parts[i++],u=new SpeechSynthesisUtterance(part.text);u.lang=speechLocale(part.language);u.rate=0.9;u.pitch=1;const v=findLocalVoice(u.lang);if(v){u.voice=v;if(!v.lang.toLowerCase().startsWith(u.lang.split("-")[0].toLowerCase()+"-")&&v.lang.toLowerCase()!==u.lang.toLowerCase())u.lang=v.lang;}u.onstart=()=>{$("#voiceStageStatus").textContent="Speaking reply…"};u.onend=next;u.onerror=()=>{$("#voiceStageStatus").textContent="Your browser or device blocked speech. Try Chrome and check that media volume is on."};setTimeout(()=>{synth.resume();synth.speak(u)},100)};setTimeout(next,120)});
messages.addEventListener("dblclick",e=>{const bubble=e.target.closest(".bubble");if(!bubble)return;speakReply(bubble.innerText)});
$("#year")?.remove();updateMode();

const phoneticInput=$("#phoneticInput");
$("#convertPhonetic").addEventListener("click",()=>{const value=phoneticInput.value.trim();if(!value)return;insert(transliterateRoman(value,targetSel.value));phoneticInput.value=""});
phoneticInput.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();$("#convertPhonetic").click()}});
