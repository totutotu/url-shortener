import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getOriginalUrl } from '../services/urlsService';

const Redirect = () => {
    const params = useParams();

    useEffect(() => {
        const fetchOriginalUrl = async () => {
            const res = await getOriginalUrl(params.shortUrl);
            window.open(res.url.original_url);
        };
        fetchOriginalUrl();
    }, [params.shortUrl]);

    return (
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Opening the URL in another tab...
        </Typography>
    );

}

export default Redirect;