/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import SearchForm from '../../components/ui/forms/search';
import { useDispatch, useSelector } from "react-redux";
import { searched } from '../../store/paginateSlice';
import { loadClients } from "./clientSlice";
import Autocomplete from '../../components/ui/forms/autocomplete';

const ViewClient = () => {
    const dispatch = useDispatch();
    const paginate = useSelector((state) => state.pagination);
    const [selectedOption, setSelectedOption] = useState("");

    // useEffect(() => {
    //     console.log()
    //     dispatch(loadClients(paginate));
    // }, [paginate]);

    const handleSearch = (data) => {
        console.log(paginate);
        dispatch(searched({ param: data }));
        console.log(paginate);
        dispatch(loadClients(paginate));
    }

    return (
        <div className="p-3 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-50 px-4">
                <h2 className="text-lg font-bold text-gray-900 align-middle py-2">
                    View Client
                </h2>
                <SearchForm onSearch={handleSearch} />
            </div>
            <div className="flex min-h-screen items-center justify-center">
                <Autocomplete options={['Chennai', 'Mumbai', 'Bangalore']}
                    value={selectedOption}
                    onChange={setSelectedOption}
                />
            </div>
        </div>);
}

export default ViewClient;