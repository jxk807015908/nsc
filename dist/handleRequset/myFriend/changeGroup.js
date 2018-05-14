const updateMyFriend = require("../../businessLayer/myFriend/updateMyFriend");
const querystring = require("querystring");
exports.changeGroup = (app) => {
    app.post('/changeGroup.do', (req, res) => {
        let isSend=false;
        res.setTimeout(3000,()=>{
          isSend=true;
          res.send({
            code:10000,
            data:null,
            msg:'连接超时',
            success:false
          });
        });
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            data = decodeURI(data);
            let dataObject = JSON.parse(data);
            //dataObject.userId = querystring.parse(req.headers.cookie, '; ').userId;
            updateMyFriend.updateMyFriend({
              friendId:dataObject.friendId,
              userId:dataObject.userId,
              friendGroupsId:dataObject.friendGroupsId
            }, result => {
                if (result === 'error') {
                  (!isSend)&&res.send({
                        code: 10000,
                        data: null,
                        msg: '发生错误',
                        success: false
                    })
                } else {
                  (!isSend)&&res.send({
                        code: 10000,
                        data: result,
                        msg: '',
                        success: true
                    })
                }
            });
        })
    });
};
