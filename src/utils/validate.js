export const checkValidateDate = (email, password) => {
    
    if (!email.length && !password.length) return "Please fill the form";
    if (!email.length) return "Please fill your Email";
    if (!password.length) return "Please fill your Password";
    
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email
    );
    const isPasswordValid =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
            password
        );

    if (!isEmailValid) return "Email is not Valid";
    if (!isPasswordValid) return "Password is not valid ";

    return null;
};
