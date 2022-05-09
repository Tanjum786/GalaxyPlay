export const AuthReducer = (authstate, authaction) => {
  switch (authaction.type) {
    case "USER_DETAIL":
      return { ...authstate, [authaction.name]: authaction.payload };
    case "SUBMIT":
      return { ...authstate, isSubmit: true};
    case "EMAIL":
      return { ...authstate, email: authaction.payload};
    case "PASSWORD":
      return {
        ...authstate,
        password: authaction.payload
      };
    case "LOGINSUBMIT":
      return {
        ...authstate,
        isSubmit: true,
      };
    case "GUEST-LOGIN":
      return {
        ...authstate,
        email: authaction.payload.email,
        password: authaction.payload.password,
      };
    case "LOGOUT":
        return{...authstate, isSubmit:false, email:"",password:""}
    default:
      return authstate;
  }
};
