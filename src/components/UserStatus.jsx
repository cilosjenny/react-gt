export default function UserStatus({ status }) {

    //se status for extritamente igual a ativo fica verde, se ñ cinza
    const statusColor = status === "Ativo" ? "green" : "gray";

    return (
        <h2 style={{ color: statusColor }}>Status: {status}</h2>
    );

}