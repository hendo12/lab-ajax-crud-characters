const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function (e) {
    let id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function (e) {
    //find the valye of t
    let id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function (e){
    let id = document.getElementById('chr-id').value;
    charactersAPI.updateOneRegister(id);  
  }
  document.getElementById('new-character-form').onsubmit = function (e) {
    charactersAPI.createOneRegister();
  }
})
