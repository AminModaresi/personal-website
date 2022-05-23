export default {
    async getQuotation(context){
        const response = await fetch("https://web-person-c896a-default-rtdb.firebaseio.com/quotation.json");
        const responseData = await response.json();
        let massage = ""
        massage = responseData['-MznSCxm5YOuIoY0I6uu']
        context.commit("getQuotation" , massage)
    },
    async postQuotation(_ , payload){
        const response = await fetch("https://web-person-c896a-default-rtdb.firebaseio.com/quotation.json" ,{
            method : "POST",
            body : JSON.stringify(payload)
        })
    }
}