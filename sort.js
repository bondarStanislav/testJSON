var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200){
        var dataArr = JSON.parse(this.responseText);
        sortJsonData(dataArr);
    }
}
  
xhr.open('GET', 'http://127.0.0.1/json/testjson.json', true);
  
xhr.send(null);
  
function sortJsonData(data) {

    //Непосредственно сортировка данных из JSON
    data.sort((a, b) => (a.nodetype > b.nodetype) ? 1 : (a.nodetype === b.nodetype) ? ((a.nodename > b.nodename) ? 1 : -1) : -1);
    
    var outputJson = "";
    
    //Вывод отсортированных данных
    for(var i = 0; i < data.length; i++) {
        
        let li_text = JSON.stringify(data[i]);
        outputJson += '<li>' + li_text + '</li>';
    }

    document.getElementById("json_ul").innerHTML = outputJson;
}
   