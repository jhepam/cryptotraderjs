var socket = io();

socket.emit('getData');

socket.on('returnData', function(data){
  console.log(data)
  test = data
for (var i = 0; i < data["data"].length; i++) {
 $('#stock-table-body').append('<tr><th scope="row">'+(i+1)+'</th><td>'+data["data"][i].symbol+'</td><td>'+data["data"][i].name+'</td><td>$'+data["data"][i].quote["USD"].price+'</td><td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">Sell</button></td></tr>')
}

/*for (var i = 0; i < data["data"].length; i++) {
 $('#stocks').append('<h1>'+data["data"][i].quote["USD"].price+'</h1>')
}*/
})


