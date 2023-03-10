import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useRouter() {
    const params = useParams();
    const navigate = useNavigate();

    return useMemo(() => {

        const goToPage = (route) => {
            navigate(route);
        };

        return {
            goToPage,
            params
        };
    }, [params, navigate]);
}
