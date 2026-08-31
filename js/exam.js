
let examQuestions=[],currentIndex=0,answers={},flagged=new Set(),timeRemaining=3*60*60,timerInterval=null,examStarted=false;
const DOMAINS={"1.0 Security Operations":{weight:34,label:"Security Operations"},"2.0 Vulnerability Management":{weight:26,label:"Vulnerability Management"},"3.0 Incident Response and Management":{weight:24,label:"Incident Response"},"4.0 Reporting and Communication":{weight:16,label:"Reporting & Communication"}};

function initExam(){
  if(typeof getExamSet!=="function"){alert("Error: questions not loaded. Please check that js/questions.js is in the same folder.");return;}
  examQuestions=getExamSet();
  answers={};flagged=new Set();currentIndex=0;timeRemaining=3*60*60;examStarted=true;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("exam-screen").classList.remove("hidden");
  document.getElementById("report-screen").classList.add("hidden");
  startTimer();renderQuestion();updateGrid();
}
function startTimer(){
  updateTimerDisplay();
  timerInterval=setInterval(()=>{timeRemaining--;updateTimerDisplay();if(timeRemaining<=0){clearInterval(timerInterval);submitExam(true);}},1000);
}
function updateTimerDisplay(){
  const hrs=Math.floor(timeRemaining/3600),mins=Math.floor((timeRemaining%3600)/60),secs=timeRemaining%60;
  const el=document.getElementById("timer");
  el.textContent=String(hrs).padStart(2,"0")+":"+String(mins).padStart(2,"0")+":"+String(secs).padStart(2,"0");
  el.classList.remove("warning","danger");
  if(timeRemaining<=300)el.classList.add("danger");
  else if(timeRemaining<=900)el.classList.add("warning");
}
function getDomainClass(d){if(d.includes("Security Operations"))return"1";if(d.includes("Vulnerability"))return"2";if(d.includes("Incident"))return"3";return"4";}
function renderQuestion(){
  const q=examQuestions[currentIndex],isPBQ=q.type!==undefined,container=document.getElementById("question-container");
  let html='<div class="question-meta">';
  if(isPBQ){html+='<span class="badge badge-pbq">Performance-Based</span><span class="badge badge-domain-'+getDomainClass(q.domain)+'">'+q.domain+'</span>';}
  else{html+='<span class="badge badge-domain-'+getDomainClass(q.domain)+'">'+q.domain+'</span><span class="badge" style="background:#e9ecef;color:#495057">'+q.topic+'</span>';}
  html+='</div><div class="question-number">Question '+(currentIndex+1)+' of '+examQuestions.length+'</div>';
  html+='<div class="scenario-text">'+escapeHtml(q.scenario)+'</div>';
  if(isPBQ&&q.data){html+='<div class="pbq-data">'+escapeHtml(q.data)+'</div>';if(q.question)html+='<div class="scenario-text" style="margin-top:16px">'+escapeHtml(q.question)+'</div>';}
  html+='<div class="options-list">';
  (q.options||[]).forEach(opt=>{
    const letter=opt.charAt(0),selected=answers[currentIndex]===letter;
    html+='<label class="option-label '+(selected?'selected':'')+'" onclick="selectOption(''+letter+'')">';
    html+='<input type="radio" name="q'+currentIndex+'" value="'+letter+'" '+(selected?'checked':'')+'>';
    html+='<span>'+escapeHtml(opt)+'</span></label>';
  });
  html+='</div>';container.innerHTML=html;updateProgress();updateGrid();updateNavButtons();
}
function selectOption(letter){answers[currentIndex]=letter;renderQuestion();}
function nextQuestion(){if(currentIndex<examQuestions.length-1){currentIndex++;renderQuestion();}}
function prevQuestion(){if(currentIndex>0){currentIndex--;renderQuestion();}}
function goToQuestion(idx){currentIndex=idx;renderQuestion();}
function toggleFlag(){if(flagged.has(currentIndex))flagged.delete(currentIndex);else flagged.add(currentIndex);updateGrid();updateNavButtons();}
function updateNavButtons(){document.getElementById("btn-prev").disabled=(currentIndex===0);document.getElementById("btn-next").textContent=(currentIndex===examQuestions.length-1)?"Finish Review":"Next";const fb=document.getElementById("btn-flag");fb.textContent=flagged.has(currentIndex)?"Unflag":"Flag for Review";fb.classList.toggle("flagged",flagged.has(currentIndex));}
function updateProgress(){const pct=((currentIndex+1)/examQuestions.length)*100;document.getElementById("progress-fill").style.width=pct+"%";document.getElementById("progress-text").textContent=(currentIndex+1)+"/"+examQuestions.length;}
function updateGrid(){const grid=document.getElementById("question-grid");let html="";for(let i=0;i<examQuestions.length;i++){let cls="";if(answers[i])cls+=" answered";if(flagged.has(i))cls+=" flagged";if(i===currentIndex)cls+=" current";html+='<button class="grid-btn'+cls+'" onclick="goToQuestion('+i+')">'+(i+1)+'</button>';}grid.innerHTML=html;}
function showSubmitModal(){let ans=0;for(let k in answers)ans++;document.getElementById("modal-unanswered").textContent=examQuestions.length-ans;document.getElementById("submit-modal").classList.add("active");}
function hideSubmitModal(){document.getElementById("submit-modal").classList.remove("active");}
function submitExam(auto){clearInterval(timerInterval);hideSubmitModal();document.getElementById("exam-screen").classList.add("hidden");document.getElementById("report-screen").classList.remove("hidden");generateReport();}
function escapeHtml(t){if(!t)return"";const d=document.createElement("div");d.textContent=t;return d.innerHTML;}
function generateReport(){
  let correct=0;const domainStats={},topicStats={},wrongItems=[];
  Object.keys(DOMAINS).forEach(d=>domainStats[d]={total:0,correct:0});
  examQuestions.forEach((q,idx)=>{
    const domain=q.domain,topic=q.topic||"General",userAns=answers[idx],correctAns=q.correct,isCorrect=userAns===correctAns;
    if(!domainStats[domain])domainStats[domain]={total:0,correct:0};
    domainStats[domain].total++;if(isCorrect){correct++;domainStats[domain].correct++;}
    if(!topicStats[topic])topicStats[topic]={total:0,correct:0};
    topicStats[topic].total++;if(isCorrect)topicStats[topic].correct++;
    if(!isCorrect)wrongItems.push({idx:idx+1,domain:domain,topic:topic,scenario:q.scenario,userAns:userAns||"No answer",correctAns:correctAns,explanation:q.explanation,isPBQ:q.type!==undefined});
  });
  const total=examQuestions.length,pct=Math.round((correct/total)*100),scaledScore=Math.round(100+(correct/total)*800),passed=scaledScore>=750;
  const sc=document.getElementById("score-circle");sc.classList.remove("pass","fail");sc.classList.add(passed?"pass":"fail");
  document.getElementById("score-value").textContent=scaledScore;document.getElementById("score-label").textContent=passed?"PASSED":"FAILED";document.getElementById("score-label").style.color=passed?"var(--success)":"var(--danger)";
  document.getElementById("raw-score").textContent=correct+"/"+total+" correct ("+pct+"%)";document.getElementById("passing-score").textContent="Passing score: 750/900";
  let summary=passed?"Congratulations! Your score of "+scaledScore+" meets the passing threshold. ":"Your score of "+scaledScore+" is below the passing threshold of 750. ";
  summary+="You answered "+correct+" out of "+total+" correctly. ";
  if(wrongItems.length>0)summary+="Review the "+wrongItems.length+" missed questions below. ";
  summary+="For the real exam: read scenarios carefully, eliminate wrong answers, and manage your time (~2 min per question).";
  document.getElementById("performance-summary").textContent=summary;
  const dgrid=document.getElementById("domain-breakdown");let dhtml="";
  Object.keys(DOMAINS).forEach(d=>{const stat=domainStats[d]||{total:0,correct:0};if(stat.total===0)return;const dpct=Math.round((stat.correct/stat.total)*100),dpass=dpct>=70;
    dhtml+='<div class="domain-card '+(dpass?"pass":"fail")+'"><h4>'+DOMAINS[d].label+'</h4><div class="score" style="color:'+(dpass?"var(--success)":"var(--danger)")+'">'+dpct+'%</div><div style="font-size:.85rem;color:var(--gray)">'+stat.correct+"/"+stat.total+" correct</div></div>";
  });dgrid.innerHTML=dhtml;
  const weakAreas=Object.entries(topicStats).filter(([_,s])=>s.total>=2).map(([topic,s])=>({topic,pct:Math.round((s.correct/s.total)*100),total:s.total,correct:s.correct})).filter(a=>a.pct<70).sort((a,b)=>a.pct-b.pct).slice(0,10);
  const wlist=document.getElementById("weak-areas-list");
  if(weakAreas.length===0){wlist.innerHTML='<p style="color:var(--success);font-weight:600">Great job! No major weak areas detected.</p>';}
  else{let wh='<ul class="area-list">';weakAreas.forEach(a=>{wh+='<li><span>'+escapeHtml(a.topic)+'</span><span class="pct">'+a.pct+"% ("+a.correct+"/"+a.total+")</span></li>";});wh+="</ul>";wlist.innerHTML=wh;}
  const rc=document.getElementById("review-container");
  if(wrongItems.length===0){rc.innerHTML='<div class="text-center" style="padding:40px"><h2 style="color:var(--success)">Perfect Score!</h2><p>You answered every question correctly.</p></div>';}
  else{let rh='<h3>Review: '+wrongItems.length+" Questions to Improve</h3>";
    wrongItems.forEach(item=>{rh+='<div class="review-item"><div class="q-num">Question '+item.idx+(item.isPBQ?" (PBQ)":"")+" - "+item.domain+'</div>';
      rh+='<div style="margin:8px 0"><strong>Scenario:</strong> '+escapeHtml(item.scenario.substring(0,200))+(item.scenario.length>200?"...":"")+"</div>";
      rh+='<div>Your answer: <span class="your-ans">'+item.userAns+'</span> | Correct: <span class="correct-ans">'+item.correctAns+"</span></div>";
      rh+='<div class="explanation"><strong>Why this is correct:</strong> '+escapeHtml(item.explanation)+"</div>";
      rh+='<span class="topic-tag">Review: '+escapeHtml(item.topic)+"</span></div>";
    });rc.innerHTML=rh;
  }
}
function restartExam(){document.getElementById("report-screen").classList.add("hidden");document.getElementById("start-screen").classList.remove("hidden");}
document.addEventListener("keydown",e=>{if(!examStarted)return;if(e.key==="ArrowRight")nextQuestion();if(e.key==="ArrowLeft")prevQuestion();if(e.key>="a"&&e.key<="d")selectOption(e.key.toUpperCase());if(e.key==="f")toggleFlag();});
