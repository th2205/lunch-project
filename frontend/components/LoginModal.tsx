import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import ModalWrapper from "./ModalWrapper";
import { useLogin } from "../hooks/useLogin";
import style from "./Modal.module.scss";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal() {
  const { onSuccess, onFailure } = useLogin();

  return (
    <ModalWrapper>
      <div className={style.modal}>
        <header className={style.header}>
          <h2>로그인</h2>
        </header>
        <section className={style.section}>
          <GoogleLogin
            clientId="608461026052-e2hqv3h511o6dk6j263re0j1p58f01aa.apps.googleusercontent.com"
            onSuccess={(result: GoogleLoginResponse) =>
              onSuccess(result.profileObj)
            }
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </section>
      </div>
    </ModalWrapper>
  );
}
