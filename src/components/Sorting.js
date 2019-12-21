import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const Sorting = ({sorting, handleSorting}) => {
    return (
        <div>
            <InputLabel htmlFor="age-native-simple">Sort By</InputLabel>
            <Select
                native
                value={sorting}
                onChange={(e) => handleSorting(e.target.value)}>
                <option disabled value={''}>Choose</option>
                <option value={'created'}>Date Created</option>
                <option value={'title'}>Title</option>
            </Select>
        </div>
    )
}

export default Sorting
