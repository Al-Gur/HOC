import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const ErrorPage = () => {
    const {setWrongHero} = useContext(SWContext);

    useEffect(() => {
        setWrongHero(true);
    }, [])

    return (
        <div className={'text-3xl text-center tracking-widest leading-loose'}>
            O-o-ops, something went wrong!
        </div>
    );
};

export default ErrorPage;