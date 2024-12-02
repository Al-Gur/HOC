import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {hero, wrongHero} = useContext(SWContext);
    const name: string = wrongHero ? "Error" : characters[hero].name;

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{name}</h1>
        </header>
    );
};

export default Header;