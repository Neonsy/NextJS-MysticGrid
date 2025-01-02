export default function Home() {
    const myVariable1 = process.env.FOO;
    const myVariable2 = process.env.SOME_TOKEN;

    return (
        <>
            <h1>MysticGrid</h1>
            <p>W.I.P</p>

            <p>myVariable1: {myVariable1}</p>
            <p>myVariable2: {myVariable2}</p>
        </>
    );
}
