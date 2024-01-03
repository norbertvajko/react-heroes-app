export interface Hero {
    id: number,
    name: string,
    appearance?: Appearance,
    biography?: string,
    connections?: string,
    images: string,
    powerstats: string | number,
    work?: string,
    slug?: string
}

export interface Appearance {
    gender: string,
    hairColor: string,
    height: string | number,
    race: string,
    weight: string | number,
}