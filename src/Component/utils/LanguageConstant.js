import { useDispatch, useSelector } from "react-redux"
import { addlanguagequestion } from "./Languageslice"


export const Languagearray ={
    "Eng":{
        search : "Search",
        searchsuggestion : "What Would you like to search today?",
        sigin :{
            heading : "Sign in",
            email:"example@gmail.com",
            password:"Password",
            name : "name",
            frstmessage:"New to Netflix?",
            lastmessage : "Sign Up Now",

            'Email is not valid':{
                message : 'Email is not valid'
            },
            "Password is not valid":{
                message: "Password is not valid"
            },
            "auth/wrong-password":{
                message: "Wrong Password"
            },
            "auth/user-not-found":{
                message : "User not found"
            }
           
            
            
        },
        signup:{
            heading : "Sign Up",
            email:"example@gmail.com",
            password:"Password",
            name : "name",
            frstmessage:"Already a user?",

            'Email is not valid':{
                message : 'Email is not valid'
            },
            "Password is not valid":{
                message: "Password is not valid"
            },
            'auth/email-already-in-use':{
                message :"Email Already Exist"
            }
           

        },

    } ,

    "Hindi" : {
        search : "खोज",
        searchsuggestion : "आज आप क्या खोजना चाहेंगे?",
        sigin :{
            heading : "दाखिल करना",
            email:"ईमेल",
            password:"पासवर्ड",
            name : "नाम",
            frstmessage:"नेटफ्लिक्स पर नए हैं?",
            lastmessage : "अभी साइनअप करें",

            'Email is not valid':{
                message : 'विद्युतडाक मान्य नहीं है'
            },
            "Password is not valid":{
                message: "पासवर्ड मान्य नहीं है"
            },
            "auth/wrong-password":{
                message: "गलत पासवर्ड"
            },
            "auth/user-not-found":{
                message : "उपयोगकर्ता नहीं मिला"
            }
            
        },
        signup:{
            heading : "साइन अप करें",
            email:"ईमेल",
            password:"पासवर्ड",
            name : "नाम",
            frstmessage:"पहले से ही एक उपयोगकर्ता?",

            'Email is not valid':{
                message : 'विद्युतडाक मान्य नहीं है'
            },
            "Password is not valid":{
                message: "पासवर्ड मान्य नहीं है"
            },
            'auth/email-already-in-use':{
                message :"ईमेल पहले से मौजूद है"
            }
            
        }

    }
}



export const questionlang = {
    "Hindi":{
        heading:"Frequently Asked Questions",

    }
}


export const questionsarray = [{
    question:"What is Netflix?",
    id:101,
    ans : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    ans2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    
},
{

    question: "How much does Netflix cost?",
    id:102,
    ans : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
},
{

    question:"Where can I watch?",
    id:103,
    ans :"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
}
,
{
    question:"How do I cancel?",
    id:104,
    ans:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
}



]




export const hindiquestionarray =[
    {
        question:"नेटफ्लिक्स क्या है?",
        id:101,
        ans : "नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट से जुड़े उपकरणों पर विभिन्न प्रकार के पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, वृत्तचित्र और बहुत कुछ प्रदान करती है।.",

    },

    {

        question: "नेटफ्लिक्स की लागत कितनी है?",
        id:102,
        ans : "अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें, सब कुछ एक निश्चित मासिक शुल्क पर। प्लान ₹149 से ₹649 प्रति माह तक हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं."
    },
    {

        question:"मैं कहाँ देख सकता हूँ?",
        id:103,
        ans :"कहीं भी, कभी भी देखें. अपने व्यक्तिगत कंप्यूटर से या स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित नेटफ्लिक्स ऐप प्रदान करने वाले किसी भी इंटरनेट से जुड़े डिवाइस पर नेटफ्लिक्स.कॉम पर वेब पर तुरंत देखने के लिए अपने नेटफ्लिक्स खाते से साइन इन करें।."
    }
    ,
    {
        question:"मैं कैसे रद्द करूं?",
        id:104,
        ans:"नेटफ्लिक्स लचीला है. इसमें कोई कष्टप्रद अनुबंध और कोई प्रतिबद्धता नहीं है। आप दो क्लिक में आसानी से अपना खाता ऑनलाइन रद्द कर सकते हैं। कोई रद्दीकरण शुल्क नहीं है - अपना खाता किसी भी समय शुरू या बंद करें।"
    }
]

export const Funtiontoaddlangquestion = () => {

    const dispatch = useDispatch();

    const selector = useSelector((store)=> store.langs.language);

    selector === "Eng" ? dispatch(addlanguagequestion(questionsarray)) : dispatch(addlanguagequestion(hindiquestionarray));
}

