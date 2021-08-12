
function login_1()
    { var message_name="이름"
      var message_class="계급"
      var message_co="중대"
      var Nownum=0;
      var TotalNum=18;
      
      if(Nownum<TotalNum){
      var result_name=prompt(message_name,'이름을 입력하세요')
      if(result_name){
      var result_Class=prompt(message_class,'계급을 입력하세요')
      if(result_Class){
      var result_co=prompt(message_co,'중대를 입력하세요')
      if(result_co){
        
      party_1(result_name,result_Class,result_co);
      Nownum++;
      document.getElementById("Buttoncount_1").innerHTML= Nownum+"/"+ TotalNum;
    }}}}
    else
    document.getElementById("Buttoncount_1").innerHtml=alert("정원을 초과하였습니다.");
    }
function party_1(name,Class,co){
        var PlayerInfo = new Object();
        PlayerInfo.name=name;
        PlayerInfo.Class=Class;
        PlayerInfo.co=co; 
      
        var newDiv=document.createElement('div');
        var newContent=document.createTextNode("이름:"+  PlayerInfo.name+ "계급:"  +PlayerInfo.Class+ "중대:"+  PlayerInfo.co);
          newDiv.appendChild(newContent);
        var divList=document.querySelector("#list_1");
        divList.appendChild(newDiv);
     
        
         }
         
        
 function makeGame()
{ 
    var message_time="시간";
    var message_join="명수";
    var result_time=prompt(message_time,"날짜/시간을 입력해주세요(YYYY-MM-DD/00:00~00:00)");
    if(result_time){
    var result_join=prompt(message_join,"원하는 인원수를 입력해주세요(0명:0명)");
    if(result_join){
    var newTr=document.createElement("TR");
    var newTd_time=document.createElement('TD');
    newTd_time.innerHTML=result_time;
    var newTd_join=document.createElement('TD');
    newTd_join.innerHTML=result_join;
    var newTd_button=document.createElement('TD');
    var button_html='<p id="Buttoncount_1"></p><button type="button" onclick="login_1()" class="btn btn-success">참여하기 <button type="button" onclick="remove()"class="btn btn-danger class="btn-remove">경기없애기';
    newTd_button.innerHTML=button_html;
    var newTr_2=document.createElement("TR");
    var newTd_2=document.createElement("TD");
    var list_html=`<div>참가자 명단</div><div id="list_1"></div>`;
    newTd_2.innerHTML=list_html;
    newTr_2.appendChild(newTd_2);
     newTr.appendChild(newTd_time);
     newTr.appendChild(newTd_join);
     newTr.appendChild(newTd_button);
    gameMake_1.appendChild(newTr);
    gameMake_1.appendChild(newTr_2);
   
}}}

    