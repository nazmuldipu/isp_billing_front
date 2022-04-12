import React from 'react';
import Icon from '../Icon';

// const action = { label: 'Filter', icon: 'pencil' }

const SearchForm = ({ onSearch, action }) => {
    const search = (event) => {
        event.preventDefault();
        onSearch(event.target.search.value);
    };

    return (<form onSubmit={search} className="place-self-end grid grid-flow-col auto-cols-max gap-2 my-1">
        <input type="search" name="search" placeholder="Search" aria-label="Search" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
        {action &&
            <button className="flex-shrink-0 px-2 py-0 text-xs font-medium text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none" type="submit">
                <Icon name={action.icon} stroke="white" className="inline-block" /> {action.label}
            </button>
        }
    </form>);
}

export default SearchForm;