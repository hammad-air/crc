function my_Fun() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  axios
    .post("https://crud-applicat.herokuapp.com/user", {
      name: name,
      email: email,
      address: address,
    })
    .then(function (response) {
      console.log(response);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("address").value = "";
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  my_Details();
}

function my_Details() {

  axios
    .get("https://crud-applicat.herokuapp.com/users")
    .then(function (response) {
      console.log(response)
      $html = "";
      var i = 0;
      response.data.forEach(function (data) {
        id = data._id;
        console.log(data)
        $html += '<tr id="'+id+'">';
        $html += '<td id="name_' +id+ '">' + data.name + '</td>';
        $html += '<td id="email_' +id+ '">' + data.email + '</td>';
        $html += '<td id="address_' +id+ '">' + data.address  + '</td>';
        $html += '<td>';
        $html += '<button class"btn btn-primary" onclick"get_record(this)"  id="'+i+'>Edit</button>';
        $html += '<button class"btn btn-danger" onclick"get_record(this)"  id="'+i+'>Delete</button>';
        $html += '</td>';
        $html += "</tr>";
       
      });
      document.getElementById("getValue").innerHTML = $html;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});


}


// function get_all(){
//   axios.get('https://crud-applicat.herokuapp.com/users')
//   .then(function(response){
//       console.log(response);
//       $html ='';
//       response.data.forEach(function(data){
//           $id = data._id;
//           console.log(data);
//           $html+='<tr>';
//           $html += '<td id="student_name_'+$id+'">'+data.student_name+'</td>';
//           $html += '<td id="father_name_'+$id+'">'+data.father_name+'</td>';
//           $html += '<td id="age_'+$id+'">'+data.age+'</td>';
//           $html += '<td id="roll_no_'+$id+'">'+data.roll_no+'</td>';
//           $html += '<td><a href="javascript:void(0)" onclick="get_record(this)" id='+$id+'>View</td>';
//           $html+='</tr>';
//       })
//       document.getElementById('tblper').innerHTML = $html;
//   })
//   .catch(function(error){
//       console.log(error)
//   })
//   .then(function(){
  
//   });
//   }




function get_record($obj) {
  var id = $obj.getAttribute('id')
  id = parseInt(id)

  let names = document.getElementById("name_"+id).innerHTML;
  let emails = document.getElementById("email_"+id).innerHTML;
  let addresss = document.getElementById("address_"+id).innerHTML;
  






  document.getElementById("name").value = names;
document.getElementById("email").value = emails;
  document.getElementById("address").value = addresss;
}