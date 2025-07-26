import ranker1 from "./../assets/ranker1.jpg";
import ranker2 from "./../assets/ranker2.jpg";
import ranker3 from "./../assets/ranker3.jpg";


const Rankers = [
    {
        image: ranker3,
        name: "Arpit Nagpure",
        rank: "🏆 1",
        points: "⭐ 1400",
        badges: "Gold",
        subject: "Full Stack Developement",
    },
    {
        image: ranker2,
        name: "Sushmira Bhelaker",
        rank: "🏆 2",
        points: "⭐ 1250",
        badges: "Quiz King",
        subject: "React Js",
    },
    {
        image: ranker3,
        name: "Nidhi Nagpure",
        rank: "🏆 3",
        points: "⭐ 1000",
        badges: "Quiz King",
        subject: "Data sienceties",
    },
];

const Rankercard = () => {
    return (
        <div className="mt-14 px-4">
            <p className="text-3xl font-bold text-center">
                "Our <span className="underline text-blue-500">Rankers</span>"
            </p>
            <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-10">
                {Rankers.map((item, index) => {
                    return <div key={index}
                        className="w-full sm:w-80 md:w-72 lg:w-80 p-4 rounded-lg shadow-md
                         bg-white transition hover:shadow-xl shadow drop-shadow-xl hover:scale-105 hover:transition duration-300">
                        <img className="w-25 rounded-full m-auto" src={item.image} />
                        <p className="text-center font-bold text-gray-500"> {item.name}</p>

                        <p className="mt-4"><span className="font-bold">Rank:</span> {item.rank}</p>
                        <p className="mt-2"> <span className="font-bold">Points:</span> {item.points}</p>
                        <p className="mt-2"> <span className="font-bold">Badges:</span> {item.badges}</p>
                        <p className="mt-2"> <span className="font-bold">subject: </span> {item.subject}</p>
                    </div>
                })}
            </div>
            <div className="w-190 m-auto mt-16 text-xl">
                <p>Every expert was once a beginner. Keep pushing your limits, ask questions, and never stop learning. Your dedication today builds the future you dream of. Stay focused, stay curious — you’re capable of achieving great things!👍</p>
            </div>
        </div>
    )
}

export default Rankercard;