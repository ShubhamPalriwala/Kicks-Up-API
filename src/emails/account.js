const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendWelcomeMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:process.env.MYMAIL,
        subject:`Welcome to KicksUp, ${name}`,
        text:`Thank you for registering with us, ${name}.\n`,
    })
}

const sendGoodByeMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:process.env.MYMAIL,
        subject:`Sorry to see you go, ${name}`,
        text:`We, at KicksUp, hope to see you soon, ${name}.\nPlease let us know if we can do anything to improve ourselves.`,
    })
}

const updatesMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'shubhamsdevacc@gmail.com',
        subject:`Your Profile has been Successfully Updated, ${name}`,
        text:`Your Personal Details have been updated, ${name}.\nIf you think this was not you, then please head over to your Profile page and we recommend you to change your password.`,
    })
}


module.exports={
    sendWelcomeMail,
    sendGoodByeMail,
    updatesMail
}
