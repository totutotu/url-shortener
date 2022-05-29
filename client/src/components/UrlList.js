import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { getUrls, createShortenedUrl } from '../services/urlsService';
import UrlTable from './UrlTable';
import CreateUrlModal from './CreateUrlModal';

const UrlList = () => {
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchUrls = async () => {
            setLoading(true);
            const res = await getUrls();
            if (res.error) {
                setError('Error fetching Urls');
            } else {
                console.log('res', res);
                setUrls(res.urls);
                setError(null);

            }
            setLoading(false);
        };
        fetchUrls();
    }, []);

    const create = async (originalUrl) => {
        const res = await createShortenedUrl(originalUrl);
        if (res.error) {
            setError(error);
        } else {
            setUrls([
                ...urls,
                res.url,
            ]);
            setError(null);

        }
    };

    if (loading) return <h2 className='infotext'>Loading...</h2>;

    return (
        <>  
            <CreateUrlModal
                showModal={showCreateModal}
                setShowModal={setShowCreateModal}
                createUrl={create}
            />
            <Box textAlign='center' marginTop='10px'>
                <Button variant='contained' onClick={() => setShowCreateModal(true)}>Shorten New Url</Button>
            </Box>
            <UrlTable urls={urls} />
        </>
    );};

export default UrlList;
