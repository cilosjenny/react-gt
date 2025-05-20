import UserName from "./UserName";
import UserStatus from "./UserStatus";


export default function UserProfile({ profile }) {
    return (
        <>
            <UserName nome={profile.nome} />
            <UserStatus status={profile.status} />
        </>
    );
}