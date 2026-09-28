interface ShoeCardPrompts {
    model: string
    brand: string
    isLimitedEdition: boolean
    releaseYear: number
    sports: string[]
}

export function ShoeCard(prompts: ShoeCardPrompts) {
    return (
        <>
        <p>Modell: {prompts.model}</p>
        <p>Márka: {prompts.brand}</p>
        <p>Megjelenési éve: {prompts.releaseYear}</p>
        <p>Sportok: {prompts.sports.join(', ')}</p>
        </>
    )
}
