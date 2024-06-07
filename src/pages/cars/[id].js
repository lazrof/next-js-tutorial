import { useRouter } from 'next/router';

import Head from 'next/head';

export default function Car({ car }) { // Aqui hacemos destructuring del Car que viene de getStaticProps() -> props->car
    
    const router = useRouter();
    const { id } = router.query;

    console.log(car)

    return (
        <>
            <Head>
                <title>{car.color} - {car.id}</title>
            </Head>
            <h1>Hello {id}</h1>
            <img src={car.image} alt={car.id} width="300" />
        </>
    )
}

// export async function getStaticProps({ params }) {
//     //Tells next to pre render the page, this is used in Static Site Generation

//     const req = await fetch(`http://localhost:3000/${params.id}.json`)
//     const data = await req.json()

//     return {
//         props: { car: data}
//     }
// }

// export async function getStaticPaths() {
//     // Le dice a Next, Oye, hay 123123 paths, crea un html para cada uno, aqui te doy la lista.

//     const req = await fetch(`http://localhost:3000/cars.json`)
//     const data = await req.json()

//     const paths = data.map(carName => {
//         return { params: { id: carName }}
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// Para Server side rendering podemos usar el mismo contenido que getStaticProps
// Pero hay que comentar las otras 2 de arriba y SEGUN podemos usar ambas al mismo 
// tiempo, pero seguro hay que configurar unas cosishas.
export async function getServerSideProps({ params }) {
    //Tells next to pre render the page, this is used in Static Site Generation

    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()

    return {
        props: { car: data}
    }
}