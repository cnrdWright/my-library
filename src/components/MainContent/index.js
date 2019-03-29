import React from 'react'
import './mainContent.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import BookCard from './partials/BookCard'

class MainContentBlock extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <h2 className="main-content-header">On The Shelve</h2>
                <p>Some Content will eventually go here</p>
                <BookCard books={this.props} />
            </div>
        )
    }
}

export default connect(null, actions)(MainContentBlock)
