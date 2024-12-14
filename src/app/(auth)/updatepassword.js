import SafeArea from "../../components/common/SafeArea"
import SecureAccount from '../../screens/auth/SecureAccount'

export default function Otp(){
    return (
        <SafeArea backBtnShown={true}>
            <SecureAccount/>
        </SafeArea>
    )
}