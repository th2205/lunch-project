import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../store/userSlice";
import { RootState } from "../store";
import axios from "axios";
import storage from "../lib/Storage";

interface LoginData {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

export function useLogin() {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onSuccess = async (data: LoginData) => {
    try {
      const response = await axios.post<{
        email: string;
        name: string;
        token: string;
      }>("api/user/login", {
        data: {
          name: data.name,
          email: data.email,
        },
      });
      storage.setStore("accessToken", response.data.token);
    } catch (e) {
      return toast.error("잠시후에 다시 시도해 주세요!");
    }

    dispatch(
      setUserInfo({
        isLoggedIn: true,
        userImg: data.imageUrl,
        name: data.imageUrl,
      }),
    );
  };

  const onFailure = () => toast.error("잠시후에 다시 시도해 주세요!");

  return { isLoggedIn, onSuccess, onFailure };
}
