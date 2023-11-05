import {User} from "../db/user.js";
export async function purchase (req,res) {

    var account=[req.body][0]['email'];
    var password=[req.body][0]['password'];
    var ammount=[req.body][0]['ammount'];
    console.log(account);
    console.log(password);
    console.log(ammount);
    const data = await User.find({});
    var flag=0;
    for(let i=0;i<data.length;i++){
        console.log(data[i].amount);
        console.log(data[i].accountno);
        console.log(data[i]);
        if(data[i].accountno==account&&password==data[i].password){
            if( parseInt(data[i].amount, 10)>=parseInt(ammount, 10)){
                
// Update criteria
const filter = { accountno: data[i].accountno };

// New value
const newValue = { $set: { amount: 1000 } };

// MongoDB update options
const options = { upsert: false };
User.updateOne(
    { accountno: data[i].accountno }, // Filter criteria to find the document to update
    { amount: parseInt(data[i].amount, 10)-parseInt(ammount, 10) } // Updated field and its new value
  )
    .then(() => {
      res.send("1")
      console.log('Amount updated successfully');
    })
    .catch((error) => {
      res.send("0")
      console.log('Error updating amount:', error);
    });
  
            
        }else{
            res.send("0");
        }
    }   

}
}