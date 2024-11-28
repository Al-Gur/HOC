import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

const withErrorPage =  WrappedComponent => props => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) {
            return;
        }
        changeHero(heroId);
    }, [heroId])

    return characters[heroId] ? (
            <WrappedComponent {...props} />
        )
        : <ErrorPage/>
};

export default withErrorPage;