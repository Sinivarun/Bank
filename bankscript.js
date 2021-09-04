class Bank {
    createAccount() {
        let person_name = uname.value;
        let pwd = password.value;
        let accno = acc_number.value;
        let bal = balance.value;
        let user = {
            person_name, pwd, accno, bal
        }
        // console.log(user);
        localStorage.setItem(accno, JSON.stringify(user))
        alert("account has been created successfully");
        location.href = "banklogin.html";

    }
    authenticate() {
        let pwd = password.value;
        let accno = acc_number.value;
        if (accno in localStorage)
         {
            let user = JSON.parse(localStorage.getItem(accno))
            if (user.pwd==pwd)
            {
                alert("login success")
                sessionStorage.setItem(accno, JSON.stringify(user))
               location.href="userhome.html"
                
            } else
             {
                alert("inavalid credentials")
            }
        }else
         {
                alert("inavalid account number")

        }
    }
    balanceEnquiry(){
        let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`avaliable balance is ${user.bal}`)

    }
    logout(){
        sessionStorage.clear();
        // location.href="banklogin.html";
    }
    fundTransfer()
    {
        let to_acno=toacno.value;
        let amount=amt.value;
        if(to_acno in localStorage)
        {
            // checking amount in from account
            let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            if(user.bal>=amount)
            {
                let user1=JSON.parse(localStorage.getItem(to_acno))
                let user2=JSON.parse(localStorage.getItem(user.accno))
                let balance=Number(user1.bal)+Number(amount)
                user1.bal=balance
                user2.bal-=amount
                localStorage.setItem(user1.accno,JSON.stringify(user1))
                localStorage.setItem(user2.accno,JSON.stringify(user2))
                user.bal-=amount
                sessionStorage.setItem(user.accno,JSON.stringify(user))
               
            }else
            {
                alert("insufficient bal")
            }
        }else
        {
            alert("inavalid transaction")
        }
    }

}
var bank = new Bank()
