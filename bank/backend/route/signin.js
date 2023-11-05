import {User} from "../db/user.js";
export async function sign_in (req,res) {
    //console.log("hii kothao nai ?");
    var account=[req.body][0]['email'];
    var password=[req.body][0]['password'];
    //console.log(account);
    //console.log(password);
    const data = await User.find({});
    var flag=0;
    for(let i=0;i<data.length;i++){
        //console.log(data[i]);
        if(data[i].accountno==account&&password==data[i].password){
            res.send(data[i]);
            flag=1;
        }
    }
    if(flag==0)
        res.send("-1");

}