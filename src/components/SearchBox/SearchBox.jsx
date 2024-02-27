    
    import { useId } from 'react';
    import css from './SearchBox.module.css';

export const SearchBox = ({ value, onInput }) => {
    
    const searchId = useId();

    const searchInput = (e) => {
        onInput(e.target.value);
    };

    return (
        <div className={css.searchBar}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input
                id={searchId}
                className={css.textInput}
                type="text"
                value={value}
                onChange={searchInput}
            />
        </div>
    );
};