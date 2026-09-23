
interface workoutDetailsprops {
    params:Promise <{
        id: string;
    }>
}

const workoutDetails = async ({ params }: workoutDetailsprops) => {
    const { id } = await params;

    return (
        <main className="mx-auto max-w-7xl px-5 py-16" >
            <h1 className="text-3xl font-bold">workout Details</h1>
            <p>Workout ID: {id}</p>

        </main>
    )
}
export default workoutDetails