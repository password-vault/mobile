import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronLog } from '../../utils/reactotronLog';
import { baseApi } from '../../configs/global/api';

type User = {
  username: string;
  imageSource: string;
  email: string;
};

interface IResponseApiProps {
  user: User;
  token: string;
}

interface IUseUserProps {
  user: User | null;
  create(user: User): Promise<void>;
  login(user: User): Promise<void>;
  setUser(): Promise<void>;
}

export const useUser = create<IUseUserProps>()(
  persist(
    (set) => ({
      user: null,
      async create(user) {
        try {
          const { data } = await baseApi.post<IResponseApiProps>(
            '/users',
            user
          );

          set((state) => ({ ...state, user: data.user }));
          await AsyncStorage.setItem('@token:vault', data.token);
        } catch (err) {
          reactotronLog(err);
        }
      },
      async login(user) {
        try {
          const { data } = await baseApi.post<IResponseApiProps>(
            '/users',
            user
          );

          set((state) => ({ ...state, user: data.user }));
          await AsyncStorage.setItem('@token:vault', data.token);
        } catch (err) {
          reactotronLog(err);
        }
      },
      async setUser() {
        try {
          const { data: user } = await baseApi.get('/user');
          set((state) => ({ ...state, user }));
        } catch (err) {
          reactotronLog(err);
        }
      },
    }),
    { name: '@user:vault', getStorage: () => AsyncStorage }
  )
);
