export const checkvalidateData = (email,password) => {

    const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const ispasswordvalid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(!isemailvalid){
        return 'Email is not valid'
    }

    if(!ispasswordvalid) return "Password is not valid"


    return null;
}