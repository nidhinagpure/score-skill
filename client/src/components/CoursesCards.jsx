import { NavLink } from "react-router";

const CoursesCards = ({ _id, info, title, click }) => {

    return (
        <div className=" relative w-[300px] h-[250px] border border-gray-400 hover:scale-105 hover:transition duration-300 shadow-md bg-white transition hover:shadow-xl shadow drop-shadow-xl">
            <h1 className="p-2 text-center text-2xl bg-gray-100 font-bold underline shadow shadow-text-gray border border-top border-gray-200">{title}</h1>
            <p className="text-center pt-2 px-6">{info}</p>
            <p className="absolute bottom-4 left-0 right-30 text-center ml-4 pt-2 t-0 b-0 r-0 l-0">Learn Course:
                <a href="https://www.w3schools.com/js/" target="_blank">
                    <span className="hover:text-blue-600 cursor-pointer"> Click</span>
                </a> </p>
        </div>
    );
};

export default CoursesCards;
