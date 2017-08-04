(function() {
    function MessengerCtrl(Room, $uibModal, Message, $scope) {
    
      var room = this;
      room.currentRoom = null;
      room.rooms = Room.all;
  
    }
    
         this.showRoom = function(room) {
             this.currentRoom = room;
             this.messages = Message.getByRoomId(room.currentRoom.$id);
         }
 


angular
    .module('messenger')
    .controller('MessengerCtrl', [ 'Room','$uibModal', 'Message', MessengerCtrl]);



})();



 
 
 
 