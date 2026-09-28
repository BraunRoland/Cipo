export function Footer() {
    const d = new Date()
    return (
        <>
        <p>Készítette:<strong>Braun Roland</strong>, Készítés dátuma: <i>{d.getFullYear()}.{d.getMonth()+1}.{d.getDate()}</i></p>
        </>
    )
}