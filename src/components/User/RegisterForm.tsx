const RegisterForm = () => {+
    const register = async (email, password) => {
        const credential = await auth.createUserWithEmailAndPassword(email, password);
        await db.collection('users').doc(credential.user.uid).set({
          lists: [],
        });
      };
      
  return (
    <div>RegisterForm</div>
  )
}
export default RegisterForm