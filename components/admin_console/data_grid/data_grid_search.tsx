// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import * as Utils from 'utils/utils.jsx';

import './data_grid.scss';

type Props = {
    onSearch: (term: string) => void;
    placeholder: string;
    term: string;
}

class DataGridSearch extends React.PureComponent<Props> {
    handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        this.props.onSearch(term);
    }

    render() {
        let {placeholder} = this.props;
        if (!placeholder) {
            placeholder = Utils.localizeMessage('search_bar.search', 'Search');
        }
        return (
            <div className='DataGrid_search'>
                <div className='DataGrid_searchBar'>
                    <span
                        className='DataGrid_searchIcon'
                        aria-hidden='true'
                    >
                        <FormattedMessage
                            id='generic_icons.search'
                            defaultMessage='Search Icon'
                        >
                        {() => (
                            <svg
                                width='14px'
                                height='14px'
                                viewBox='0 0 17 17'
                                role='img'
                            >
                                <path d='M16.398 15.138L13.014 11.754C13.458 11.178 13.8 10.548 14.04 9.86399C14.28 9.14399 14.4 8.40599 14.4 7.64999C14.4 6.42599 14.094 5.29199 13.482 4.24799C12.882 3.22799 12.072 2.41799 11.052 1.81799C10.008 1.20599 8.874 0.899988 7.65 0.899988C6.426 0.899988 5.292 1.20599 4.248 1.81799C3.228 2.41799 2.418 3.22799 1.818 4.24799C1.206 5.29199 0.9 6.42599 0.9 7.64999C0.9 8.87399 1.206 10.008 1.818 11.052C2.418 12.072 3.228 12.882 4.248 13.482C5.292 14.094 6.426 14.4 7.65 14.4C8.406 14.4 9.138 14.274 9.846 14.022C10.53 13.794 11.16 13.458 11.736 13.014L15.138 16.398C15.306 16.566 15.516 16.65 15.768 16.65C16.02 16.65 16.23 16.56 16.398 16.38C16.566 16.212 16.65 16.008 16.65 15.768C16.65 15.528 16.566 15.318 16.398 15.138ZM2.7 7.64999C2.7 6.74999 2.922 5.92199 3.366 5.16599C3.81 4.40999 4.41 3.80999 5.166 3.36599C5.922 2.92199 6.75 2.69999 7.65 2.69999C8.55 2.69999 9.378 2.92199 10.134 3.36599C10.89 3.80999 11.49 4.40999 11.934 5.16599C12.378 5.92199 12.6 6.74999 12.6 7.64999C12.6 8.54999 12.378 9.37799 11.934 10.134C11.49 10.89 10.89 11.49 10.134 11.934C9.378 12.378 8.55 12.6 7.65 12.6C6.75 12.6 5.922 12.378 5.166 11.934C4.41 11.49 3.81 10.89 3.366 10.134C2.922 9.37799 2.7 8.54999 2.7 7.64999Z'/>
                            </svg>
                        )}
                        </FormattedMessage>
                    </span>

                    <input
                        type='text'
                        placeholder={Utils.localizeMessage('search_bar.search', 'Search')}
                        onChange={this.handleSearch}
                        value={this.props.term}
                    />
                </div>
            </div>
        );
    }
}

export default DataGridSearch;
