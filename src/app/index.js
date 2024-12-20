import { useEffect } from 'react'
import OnBoardingScreen from '../screens/onboarding/OnBoardingScreen'
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
    useEffect(()=>{
        const timer = setTimeout(() => {
            router.replace('(tabs)/for-you')
        }, 0);
        return ()=>clearTimeout(timer)
    },[])
  return <OnBoardingScreen/>
}