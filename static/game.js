var socket = io();

socket.emit('getData');

socket.on('returnData', function(data){
  console.log(data)
  test = data
for (var i = 0; i < data["data"].length; i++) {
 $('#stock-table-body').append('<tr><th scope="row">'+(i+1)+'</th><td>'+data["data"][i].symbol+'</td><td>'+data["data"][i].name+'</td><td>$'+data["data"][i].quote["USD"].price+'</td><td>$'+data["data"][i].quote["USD"].market_cap+'</td><td>'+data["data"][i].quote["USD"].percent_change_24h+'%</td></tr>')

 $('#exampleFormControlSelect1').append('<option value='+i+'>'+data["data"][i].name+'</option>')
}

/*for (var i = 0; i < data["data"].length; i++) {
 $('#stocks').append('<h1>'+data["data"][i].quote["USD"].price+'</h1>')
}*/
})


function buy() {
	console.log(test)
}
