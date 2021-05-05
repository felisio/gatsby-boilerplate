import { useCallback, useEffect, useState } from 'react';

type TopBannerProgramType = 'mba' | 'emba';
type TopBannerRoundType = 1 | 'final';
type TopBannerObjType = 'application_deadline' | 'decision' | 'registration_deadline' | 'orientation' | 'start';

type TopBannerObjProps = {
    date: number;
    text: string;
    type: TopBannerObjType;
    round?: TopBannerRoundType;
};

type TopBannerProgramObjProps = {
    program: TopBannerProgramType;
    dates: TopBannerObjProps[];
};

type TopBannerResponseGetProps = {
    programs: TopBannerProgramObjProps[];
};

const ENDPOINT = `${process.env.GATSBY_WEBSITE_API_ENDPOINT}/promoted_programs.json`;

// For many of our dates we actually cut off on the day prior if the time is before 11pm.
// This is commonly done for deadline dates (e.g. application deadlines and registration
// deadlines); however, you probably don't want to be using the date threshold when
// communicating start dates (e.g. cohort start dates).
function convertDateToString(date: number, threshold: number = 23) {
    // if this default threshold value ever changes, be sure to update
    // the deadline_with_threshold method in back_royal's cohort.rb
    const newDate = new Date(date * 1e3);

    // If the time is before 11pm in your timezone, show the previous day
    if (newDate.getHours() < threshold) {
        newDate.setDate(newDate.getDate() - 1);
    }

    const options = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(newDate);
}

function getMbaMessage(topBannerObj: TopBannerObjProps) {
    const dateStr = convertDateToString(topBannerObj.date);
    return topBannerObj.round === 'final'
        ? `Final application deadline for the upcoming class is ${dateStr}.`
        : `Round ${topBannerObj.round} application deadline for the upcoming class is ${dateStr}.`;
}

function getMbaApplicationDeadlineProgram(topBannerResponse: TopBannerResponseGetProps) {
    const promotedProgram = topBannerResponse.programs.find(program => program.program === 'mba');
    const applicationDeadline = promotedProgram?.dates.find(dateInfo => dateInfo.type === 'application_deadline');
    return getMbaMessage(applicationDeadline!);
}

export default function useTopBanner(programType: TopBannerProgramType) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>();
    const [hideTopBanner, setHideTopBanner] = useState<boolean>(false);

    const getPrograms = useCallback(() => {
        setIsLoading(true);

        fetch(ENDPOINT, {
            method: 'GET',
        })
            .then(response => response.json())
            .then((response: TopBannerResponseGetProps) => {
                if (programType === 'mba') {
                    setMessage(getMbaApplicationDeadlineProgram(response));
                }
                setIsLoading(false);
            })
            .catch(() => {
                setHideTopBanner(true);
                setIsLoading(false);
            });
    }, [programType]);

    useEffect(() => {
        getPrograms();
    }, [getPrograms]);

    return {
        isLoading,
        message,
        hideTopBanner,
    };
}
