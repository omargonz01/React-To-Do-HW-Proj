const LoginForm = () => {
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
      };
      
  return (
    <div>LoginForm</div>
  )
}
export default LoginForm