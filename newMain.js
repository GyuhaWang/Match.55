function start()
{
    document.getElementById("makeGame").innerHTML=makeGame();
} 
function login_1()
    { var message_name="이름"
      var message_class="계급"
      var message_co="중대"
     
      var result_name=prompt(message_name,'이름을 입력하세요')
      var result_Class=prompt(message_class,'계급을 입력하세요')
      var result_co=prompt(message_co,'중대를 입력하세요')

      party_1(result_name,result_Class,result_co);
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
    var result_join=prompt(message_join,"원하는 인원수를 입력해주세요(0명:0명)");


    var newTr=document.createElement("TR");
    var newTd_time=document.createElement('TD');
    newTd_time.innerHTML=result_time;
    var newTd_join=document.createElement('TD');
    newTd_join.innerHTML=result_join;
    var newTd_button=document.createElement('TD');
    var button_html='<button type="button" onclick="count_1()" class="btn btn-success">참여하기';
    newTd_button.innerHTML=button_html;
     newTr.appendChild(newTd_time);
newTr.appendChild(newTd_join);
newTr.appendChild(newTd_button);
    gameMake_1.appendChild(newTr);
}
function count_1()
        {
            var Nownum=0;
            var TotalNum=18;
            document.getElementById("Buttoncount_1").innerHTMLL= Nownum+"/"+ TotalNum;
        if(Nownum<TotalNum)
        {
        document.getElementById("Buttoncount_1").innerHtml=login_1();
            Nownum++;
        document.getElementById("Buttoncount_1").innerHTML= Nownum+"/"+ TotalNum;
        }
        else
        document.getElementById("Buttoncount_1").innerHtml=alert("정원을 초과하였습니다.");
        }
    </script>