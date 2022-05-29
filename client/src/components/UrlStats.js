import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { getClicksForUrl } from '../services/clickService';
import { getUrl } from '../services/urlsService';


// Return Clicks mapped to the day the click happened
// Show only clicks from the last 7 days
//
// Each index represents how many days ago the click happened
const formatClicks = (clicks) => {

    return clicks.filter((click) => {
        return new Date(click.createdTimeStamp) > new Date(-7);
    }).reduce((curr, click) => {
        const diffInMs = new Date().getTime() - new Date(click.createdTimeStamp).getTime();
        const diffIdDays = Math.floor(diffInMs / (1000 * 3600 * 24));

        curr[diffIdDays]++;
        return curr;
    }, [0,0,0,0,0,0,0]).reverse();

}

function getDateXDaysAgo(numOfDays, date = new Date()) {
    const daysAgo = new Date(date.getTime());
  
    daysAgo.setDate(date.getDate() - numOfDays);
  
    return daysAgo;
}
  

const getDatesForPlot = () => {
    return [
        getDateXDaysAgo(6).toLocaleDateString(),
        getDateXDaysAgo(5).toLocaleDateString(),
        getDateXDaysAgo(4).toLocaleDateString(),
        getDateXDaysAgo(3).toLocaleDateString(),
        getDateXDaysAgo(2).toLocaleDateString(),
        getDateXDaysAgo(1).toLocaleDateString(),
        new Date().toLocaleDateString(),
    ]
}


const UrlStats = () => {
    const [url, setUrl] = useState('');
    const [clicks, setClicks] = useState([]);
    const [error, setError] = useState(null);
    const formattedClicks = useMemo(() => formatClicks(clicks), [clicks]);

    const params = useParams();
    

    const options = {
        title: {
            text: 'clicks for short url: ' + url?.short_url
        },
        series: [
        {
            data: formattedClicks
        },
        ],
        xAxis: {
            categories: getDatesForPlot(),

        }
    };

    useEffect(() => {
        const fetchClicks = async () => {
            const [clicksRes, urlRes] = await Promise.all([getClicksForUrl(params.id), getUrl(params.id)]);
            if (clicksRes.error || urlRes.error) {
                setError('Error fetching data');
                console.log(error);
            } else {
                setError(null);
                setClicks(clicksRes.clicks);
                setUrl(urlRes.url);
            }
            
        };
        fetchClicks();
    }, [params.id, error]);

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
  );
}


export default UrlStats;
