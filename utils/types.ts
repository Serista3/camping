export type FormActionState = {
    message: string;
}

export type ActionFunction = (prevState: FormActionState, formData: FormData) => Promise<FormActionState>

export type LandmarkCardProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    province: string;
    price: number;
    lat: number;
    lng: number;
}