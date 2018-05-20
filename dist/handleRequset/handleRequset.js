
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:4000/nsc";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   var dbase = db.db("nsc");
//   dbase.createCollection('site', function (err, res) {
//     if (err) throw err;
//     console.log("创建集合!");
//     db.close();
//   });
// });
const login=require('./login/login');
const checkUsername=require('./login/checkUsername');
const register=require('./login/register');
const getFriendGroup=require('./myFriend/getFriendGroup');
const getFriend=require('./myFriend/getFriend');
const getFriendMessage=require('./message/getFriendMessage');
const sendMessage=require('./message/sendMessage');
const getExpress=require('./message/getExpress');
const addGroup=require('./myFriend/addGroup');
const deleteGroup=require('./myFriend/deleteGroup');
const getUserInfo=require('./personal/getUserInfo');
const updateUserInfo=require('./personal/updateUserInfo');
const changePassword=require('./personal/changePassword');
const searchUserFuzzily=require('./myFriend/searchUserFuzzily');
const addFriend=require('./myFriend/addFriend');
const checkFriendRequest=require('./myFriend/checkFriendRequest');
const getYourFriendRequest=require('./myFriend/getYourFriendRequest');
const getAllRemind=require('./myMessages/getAllRemind');
const rejectRequest=require('./myMessages/rejectRequest');
const deleteRemind=require('./myMessages/deleteRemind');
const reviseRemark=require('./myFriend/reviseRemark');
const changeGroup=require('./myFriend/changeGroup');
const deleteFriend=require('./myFriend/deleteFriend');
const uploadPicture=require('./myFriend/uploadPicture');
const changeHeadPortrait=require('./personal/changeHeadPortrait');
const uploadFile=require('./myFriend/uploadFile');
const getAllGroups=require('./myGroups/getAllGroups');
const checkGroupId=require('./myGroups/checkGroupId');
const uploadGroupIcon=require('./myGroups/uploadGroupIcon');
const getGroupDetailData=require('./myGroups/getGroupDetailData');
const getGroupMembers=require('./myGroups/getGroupMembers');
const createGroup=require('./myGroups/createGroup');
const inviteGroup=require('./myGroups/inviteGroup');
const joinGroup=require('./myGroups/joinGroup');
const saveGroupDetail=require('./myGroups/saveGroupDetail');
const sendGroupMessage=require('./message/sendGroupMessage');
const getGroupMessage=require('./message/getGroupMessage');
const uploadGroupPicture=require('./myGroups/uploadGroupPicture');
const uploadGroupFile=require('./myGroups/uploadGroupFile');
const quitGroup=require('./myGroups/quitGroup');
const moveOutMember=require('./myGroups/moveOutMember');
const changeAdmin=require('./myGroups/changeAdmin');
const dismissGroup=require('./myGroups/dismissGroup');
const searchGroupsFuzzily=require('./myGroups/searchGroupsFuzzily');
const requestJoinGroup=require('./myGroups/requestJoinGroup');
const getYourGroupRequest=require('./myGroups/getYourGroupRequest');
const joinGroup2=require('./myGroups/joinGroup2');
const getNewTips=require('./myHead/getNewTips');
const readRemind=require('./myMessages/readRemind');
const updateRemind=require('./myMessages/updateRemind');
const sendRegEmail=require('./login/sendRegEmail');
const emailReg=require('./login/emailReg');
const getPassword=require('./login/getPassword');
const loginOut=require('./login/loginOut');
const getFriendInfo=require('./myFriend/getFriendInfo');
exports.handle=(app)=>{
  // const mysql=require('mysql');
  // const connection=mysql.createConnection({
  //   host:'localhost',
  //   port:'3306',
  //   user:'root',
  //   password:'gw19950912',
  //   database:'nsc',
  // });
  // connection.connect();
  login.login(app);
  checkUsername.checkUserId(app);
  register.register(app);
  getFriendGroup.getFriendGroup(app);
  getFriend.getFriend(app);
  getFriendMessage.getFriendMessage(app);
  sendMessage.sendMessage(app);
  addGroup.addGroup(app);
  deleteGroup.deleteGroup(app);
  getExpress.getExpress(app);
  getUserInfo.getUserInfo(app);
  updateUserInfo.updateUserInfo(app);
  changePassword.changePassword(app);
  searchUserFuzzily.searchUserFuzzily(app);
  addFriend.addFriend(app);
  checkFriendRequest.checkFriendRequest(app);
  getYourFriendRequest.getYourFriendRequest(app);
  getAllRemind.getAllRemind(app);
  rejectRequest.rejectRequest(app);
  deleteRemind.deleteRemind(app);
  reviseRemark.reviseRemark(app);
  changeGroup.changeGroup(app);
  deleteFriend.deleteFriend(app);
  uploadPicture.uploadPicture(app);
  changeHeadPortrait.changeHeadPortrait(app);
  uploadFile.uploadFile(app);
  getAllGroups.getAllGroups(app);
  checkGroupId.checkGroupId(app);
  uploadGroupIcon.uploadGroupIcon(app);
  getGroupDetailData.getGroupDetailData(app);
  getGroupMembers.getGroupMembers(app);
  createGroup.createGroup(app);
  inviteGroup.inviteGroup(app);
  joinGroup.joinGroup(app);
  saveGroupDetail.saveGroupDetail(app);
  sendGroupMessage.sendGroupMessage(app);
  getGroupMessage.getGroupMessage(app);
  uploadGroupPicture.uploadGroupPicture(app);
  uploadGroupFile.uploadGroupFile(app);
  quitGroup.quitGroup(app);
  moveOutMember.moveOutMember(app);
  changeAdmin.changeAdmin(app);
  dismissGroup.dismissGroup(app);
  searchGroupsFuzzily.searchGroupsFuzzily(app);
  requestJoinGroup.requestJoinGroup(app);
  getYourGroupRequest.getYourGroupRequest(app);
  joinGroup2.joinGroup2(app);
  getNewTips.getNewTips(app);
  readRemind.readRemind(app);
  updateRemind.updateRemind(app);
  sendRegEmail.sendRegEmail(app);
  emailReg.emailReg(app);
  getPassword.getPassword(app);
  loginOut.loginOut(app);
  getFriendInfo.getFriendInfo(app);
}

