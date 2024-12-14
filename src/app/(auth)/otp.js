import SafeArea from "../../components/common/SafeArea"
import OTPScreen from '../../screens/auth/OTPScreen'

export default function Otp(){
    return (
        <SafeArea backBtnShown={true}>
            <OTPScreen/>
        </SafeArea>
    )
}