const insertUserGroupsToUser = require("../../businessLayer/usergroupstouser/insertUserGroupsToUser");
const deleteUserMessages2 = require("../../businessLayer/usermessages/deleteUserMessages2");
const selectUserGroupsToUser2 = require("../../businessLayer/usergroupstouser/selectUserGroupsToUser2");
exports.joinGroup2 = (app) => {
  app.post('/joinGroup2.do', (req, res) => {
    let isSend = false;
    res.setTimeout(3000, () => {
      isSend = true;
      res.send({
        code: 10000,
        data: null,
        msg: '连接超时',
        success: false
      });
    });
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      data = decodeURI(data);
      let dataObject = JSON.parse(data);
      selectUserGroupsToUser2Fn({
        groupId:dataObject.groupId
      }).then(result4=>{
        if(result4.some(obj=>obj.UGU_UserID===dataObject.userId)){
          (!isSend) && res.send({
            code: 10000,
            data: null,
            msg: '用户已在群中',
            success: false
          })
        }else{
          Promise.all([insertUserGroupsToUserFn({
            userId: dataObject.userId,
            groupId: dataObject.groupId,
            groupNick: dataObject.nickName,
            time: new Date().getTime(),
            authority: 3,
          }),deleteUserMessages2Fn({
            fromId:dataObject.fromId,
            messageType:dataObject.messageType,
            remark:`"groupId":"${dataObject.groupId}"`
          })]).then(()=>{
            (!isSend) && res.send({
              code: 10000,
              data: '',
              msg: '',
              success: true
            })
          })
        }
      }).catch(()=>{
        (!isSend) && res.send({
          code: 10000,
          data: null,
          msg: '发生错误',
          success: false
        })
      });
    })
  });
};
function deleteUserMessages2Fn(obj) {
  return new Promise((resolve, reject) => {
    deleteUserMessages2.deleteUserMessages2(obj, (result) => {
      if (result === 'error') {
        reject();
      } else {
        resolve(result);
      }
    });
  });
}
function insertUserGroupsToUserFn(obj) {
  return new Promise((resolve, reject) => {
    insertUserGroupsToUser.insertUserGroupsToUser(obj, (result) => {
      if (result === 'error') {
        reject();
      } else {
        resolve(result);
      }
    });
  });
}


function selectUserGroupsToUser2Fn(obj) {
  return new Promise((resolve, reject) => {
    selectUserGroupsToUser2.selectUserGroupsToUser2(obj, (result) => {
      if (result === 'error') {
        reject();
      } else {
        resolve(result);
      }
    });
  });
}

