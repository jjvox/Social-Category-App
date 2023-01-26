import axios from "axios";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseServer";

const LoginButton = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;

    window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly&redirect_uri=http://localhost:5173/login&response_type=token&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }`
    );
  };
  return (
    <div>
      <button className="btn" onClick={googleLogin}>
        구글로 시작하기
      </button>
    </div>
  );
};

export default LoginButton;
